import re
import json
import logging
import os
import certifi
import boto3
import botocore
from datetime import timezone
from urllib.parse import urljoin, urlparse
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from shared.models import Upload

import azure.functions as func


engine = create_engine(os.environ['MYSQL_CONNECTION_URL'], connect_args={'ssl_ca': certifi.where(), 'ssl_verify_cert': True, 'ssl_verify_identity': True}, pool_recycle=300)


def main(req: func.HttpRequest) -> func.HttpResponse:
    try:
        if req.method == 'PUT':
            content_type = req.headers.get('Content-Type')

            if content_type.startswith('multipart/form-data;'):
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
                Session = sessionmaker(bind=engine)
                session = Session()
                
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
