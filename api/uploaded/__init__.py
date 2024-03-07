import re
import json
import logging
import os
from datetime import datetime, timedelta, timezone
from io import BytesIO
from base64 import b64decode
from urllib.parse import urljoin
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from shared.models import Upload

import azure.functions as func

from google.oauth2 import service_account
from google.cloud import storage
from google.cloud.storage.blob import Blob


engine = create_engine(os.environ['POSTGRESQL_CONNECTION_URL'], pool_recycle=60)


def main(req: func.HttpRequest) -> func.HttpResponse:
    try:
        if req.method == 'PUT':
            if req.headers.get('Content-Type') == 'text/plain':
                id = req.route_params.get("id")
                data = req.get_body().decode('utf-8')
                Session = sessionmaker(bind=engine)
                session = Session()

                try:
                    upload = session.query(Upload).filter(Upload.url == f'gs://milchchan.appspot.com{urljoin("/", os.path.join("uploads", id))}').one()
                    match = re.match('data:([\\w/\\-\\.]+);(\\w+),(.+)', data)

                    if match:
                        mime_type, encoding, data = match.groups()

                        if mime_type in ['application/zip', 'image/apng', 'image/gif', 'image/png', 'image/jpeg', 'image/webp'] and encoding == 'base64':
                            bucket_name = 'milchchan.appspot.com'
                            path = os.path.join('uploads', id)
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
                            upload.timestamp = datetime.now(timezone.utc)
                    
                            session.commit()

                            return func.HttpResponse(json.dumps({
                                'id': id,
                                'url': upload.url,
                                'type': upload.type,
                                'timestamp': int(upload.timestamp.replace(tzinfo=timezone.utc).timestamp())
                            }), status_code=200, mimetype='application/json', charset='utf-8')

                except Exception as e:
                    session.rollback()

                    raise e

                finally:
                    session.close()
            
        elif req.method == 'DELETE':
            id = req.route_params.get("id")
            Session = sessionmaker(bind=engine)
            session = Session()

            try:
                upload = session.query(Upload).filter(Upload.url == f'gs://milchchan.appspot.com{urljoin("/", os.path.join("uploads", id))}').one()
                session.delete(upload)
                session.commit()

                return func.HttpResponse(json.dumps({
                    'id': id,
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
