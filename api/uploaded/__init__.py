import re
import json
import logging
import os
import certifi
import boto3
import botocore
from datetime import timezone
from io import BytesIO
from base64 import b64decode
from urllib.parse import urljoin, urlparse
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from shared.models import Upload

import azure.functions as func

from google.oauth2 import service_account
from google.cloud import storage
#from google.cloud.storage.blob import Blob


engine = create_engine(os.environ['MYSQL_CONNECTION_URL'], connect_args={'ssl_ca': certifi.where(), 'ssl_verify_cert': True, 'ssl_verify_identity': True}, pool_recycle=300)


def main(req: func.HttpRequest) -> func.HttpResponse:
    try:
        if req.method == 'PUT':
            content_type = req.headers.get('Content-Type')

            if content_type == 'text/plain':
                identifier = req.route_params.get('id')
                data = req.get_body().decode('utf-8')
                Session = sessionmaker(bind=engine)
                session = Session()

                try:
                    upload = session.query(Upload).filter(Upload.url.like(f'%{os.path.join("/", identifier)}')).one()
                    match = re.match('data:([\\w/\\-\\.]+);(\\w+),(.+)', data)

                    if match:
                        mime_type, encoding, data = match.groups()

                        if mime_type in ['application/zip', 'image/apng', 'image/gif', 'image/png', 'image/jpeg', 'image/webp'] and encoding == 'base64':
                            bucket_name = 'milchchan.appspot.com'
                            path = os.path.join('uploads', identifier)
                            credentials = service_account.Credentials.from_service_account_info({
                                'type': os.environ['GOOGLE_APPLICATION_CREDENTIALS_TYPE'],
                                'project_id': os.environ['FIREBASE_CREDENTIALS_PROJECT_ID'],
                                'private_key_id': os.environ['FIREBASE_CREDENTIALS_PRIVATE_KEY_ID'],
                                'private_key': os.environ['FIREBASE_CREDENTIALS_PRIVATE_KEY'].replace('\\n', '\n'),
                                'client_email': os.environ['FIREBASE_CREDENTIALS_CLIENT_EMAIL'],
                                'client_id': os.environ['FIREBASE_CREDENTIALS_CLIENT_ID'],
                                'auth_uri': os.environ['GOOGLE_APPLICATION_CREDENTIALS_AUTH_URI'],
                                'token_uri': os.environ['GOOGLE_APPLICATION_CREDENTIALS_TOKEN_URI'],
                                'auth_provider_x509_cert_url': os.environ['GOOGLE_APPLICATION_CREDENTIALS_AUTH_PROVIDER_X509_CERT_URL'],
                                'client_x509_cert_url': os.environ['FIREBASE_CREDENTIALS_CLIENT_X509_CERT_URL']
                            })
                            scoped_credentials = credentials.with_scopes(
                                ['https://www.googleapis.com/auth/cloud-platform'])
                            storage_client = storage.Client(
                                credentials=scoped_credentials, project=scoped_credentials.project_id)
                            bucket = storage_client.bucket(bucket_name)
                            blob = bucket.blob(path)
                            blob.upload_from_file(BytesIO(b64decode(data)), content_type=mime_type)

                            upload.type = mime_type
                            upload.timestamp = blob.time_created
                    
                            session.commit()

                            return func.HttpResponse(json.dumps({
                                'id': identifier,
                                'url': upload.url,
                                'type': upload.type,
                                'timestamp': int(upload.timestamp.replace(tzinfo=timezone.utc).timestamp())
                            }), status_code=200, mimetype='application/json', charset='utf-8')

                except Exception as e:
                    session.rollback()

                    raise e

                finally:
                    session.close()

            elif content_type.startswith('multipart/form-data;'):
                identifier = req.route_params.get('id')
                
                for file in req.files.values():
                    if file.content_type in ['image/apng', 'image/gif', 'image/png', 'image/jpeg', 'image/webp']:
                        Session = sessionmaker(bind=engine)
                        session = Session()

                        try:
                            upload = session.query(Upload).filter(Upload.url.like(f'%{os.path.join("/", identifier)}')).one()
                            s3 = boto3.client(
                                service_name='s3',
                                endpoint_url=os.environ['S3_ENDPOINT_URL'],
                                aws_access_key_id=os.environ['AWS_ACCESS_KEY_ID'],
                                aws_secret_access_key=os.environ['AWS_SECRET_ACCESS_KEY'],
                                region_name='auto'
                            )
                            s3.upload_fileobj(file.stream, 'uploads', identifier, ExtraArgs={'ContentType': file.content_type})
                            response = s3.head_object(Bucket='uploads', Key=identifier)
                            
                            upload.type = file.content_type
                            upload.timestamp = response['LastModified']
                    
                            session.commit()

                            return func.HttpResponse(json.dumps({
                                'id': identifier,
                                'url': upload.url,
                                'type': upload.type,
                                'timestamp': int(upload.timestamp.replace(tzinfo=timezone.utc).timestamp())
                            }), status_code=200, mimetype='application/json', charset='utf-8')

                        except Exception as e:
                            session.rollback()

                            raise e

                        finally:
                            session.close()

                    elif file.content_type == 'application/zip':
                        s3 = boto3.client(
                            service_name='s3',
                            endpoint_url=os.environ['S3_ENDPOINT_URL'],
                            aws_access_key_id=os.environ['AWS_ACCESS_KEY_ID'],
                            aws_secret_access_key=os.environ['AWS_SECRET_ACCESS_KEY'],
                            region_name='auto'
                        )
                        s3.upload_fileobj(file.stream, 'uploads', identifier, ExtraArgs={'ContentType': file.content_type, 'Metadata': {'filename': file.filename}})
                        response = s3.head_object(Bucket='uploads', Key=identifier)

                        return func.HttpResponse(json.dumps({
                            'id': identifier,
                            'url': urljoin('https://static.milchchan.com', identifier),
                            'type': file.content_type,
                            'timestamp': int(response['LastModified'].replace(tzinfo=timezone.utc).timestamp())
                        }), status_code=200, mimetype='application/json', charset='utf-8')
                
        elif req.method == 'DELETE':
            identifier = req.route_params.get("id")
            Session = sessionmaker(bind=engine)
            session = Session()

            try:
                upload = session.query(Upload).filter(Upload.url.like(f'%{os.path.join("/", identifier)}')).one()
                session.delete(upload)
                session.commit()

                return func.HttpResponse(json.dumps({
                    'id': identifier,
                    'url': upload.url,
                    'type': upload.type,
                    'timestamp': int(upload.timestamp.replace(tzinfo=timezone.utc).timestamp())
                }), status_code=200, mimetype='application/json', charset='utf-8')

            except Exception as e:
                session.rollback()

                raise e

            finally:
                session.close()
            
        else:
            identifier = req.route_params.get('id')

            if bool(re.match(r'^[0-9a-f]{7}$', identifier)):
                try:
                    identifier = os.path.basename(urlparse(session.query(Upload).filter(Upload.url.like(f'%{os.path.join("/", identifier)}%')).order_by(Upload.timestamp).one().url).path)

                finally:
                    session.close()

            s3 = boto3.client(
                service_name='s3',
                endpoint_url=os.environ['S3_ENDPOINT_URL'],
                aws_access_key_id=os.environ['AWS_ACCESS_KEY_ID'],
                aws_secret_access_key=os.environ['AWS_SECRET_ACCESS_KEY'],
                region_name='auto'
            )

            try:
                response = s3.head_object(Bucket='uploads', Key=identifier)
            except botocore.exceptions.ClientError as e:
                if e.response['Error']['Code'] == '404':
                    response = None
                else:
                    raise

            if response is not None:
                #stream = BytesIO()
                #s3.download_fileobj('uploads', identifier, stream)
                #stream.seek(0)

                #return func.HttpResponse(stream.read(), status_code=200, mimetype=response['ContentType'])
                #return func.HttpResponse(status_code=302, headers={'Location': s3.generate_presigned_url(ClientMethod = 'get_object',Params={'Bucket': 'uploads', 'Key': identifier}, ExpiresIn=3600, HttpMethod='GET')})
                return func.HttpResponse(status_code=302, headers={'Location': urljoin('https://static.milchchan.com', identifier)})
                
            '''
            credentials = service_account.Credentials.from_service_account_info({
                'type': os.environ['GOOGLE_APPLICATION_CREDENTIALS_TYPE'],
                'project_id': os.environ['FIREBASE_CREDENTIALS_PROJECT_ID'],
                'private_key_id': os.environ['FIREBASE_CREDENTIALS_PRIVATE_KEY_ID'],
                'private_key': os.environ['FIREBASE_CREDENTIALS_PRIVATE_KEY'].replace('\\n', '\n'),
                'client_email': os.environ['FIREBASE_CREDENTIALS_CLIENT_EMAIL'],
                'client_id': os.environ['FIREBASE_CREDENTIALS_CLIENT_ID'],
                'auth_uri': os.environ['GOOGLE_APPLICATION_CREDENTIALS_AUTH_URI'],
                'token_uri': os.environ['GOOGLE_APPLICATION_CREDENTIALS_TOKEN_URI'],
                'auth_provider_x509_cert_url': os.environ['GOOGLE_APPLICATION_CREDENTIALS_AUTH_PROVIDER_X509_CERT_URL'],
                'client_x509_cert_url': os.environ['FIREBASE_CREDENTIALS_CLIENT_X509_CERT_URL']
            })
            scoped_credentials = credentials.with_scopes(['https://www.googleapis.com/auth/cloud-platform'])
            blob = Blob.from_string(f'gs://milchchan.appspot.com{urljoin("/", os.path.join("uploads", req.route_params.get("id")))}', client=storage.Client(credentials=scoped_credentials, project=scoped_credentials.project_id))

            if blob.exists():
                #return func.HttpResponse(blob.download_as_bytes(), status_code=200, mimetype=blob.content_type)
                return func.HttpResponse(status_code=302, headers={'Location': blob.generate_signed_url(version='v4', expiration=timedelta(minutes=15), method='GET')})
            '''

            return func.HttpResponse(status_code=400, mimetype='', charset='')

    except Exception as e:
        logging.error(f'{e}')

        return func.HttpResponse(json.dumps({
            'error': {
                'message': str(e),
                'type': type(e).__name__}
        }),
            status_code=400,
            mimetype='application/json',
            charset='utf-8')
