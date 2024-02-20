import random
import re
import json
import logging
import os
import certifi
from datetime import timedelta, timezone
from io import BytesIO
from uuid import uuid4
from base64 import b64decode
from urllib.parse import urljoin
from sqlalchemy import create_engine, desc
from sqlalchemy.orm import sessionmaker
from shared.models import Upload

import azure.functions as func

from google.oauth2 import service_account
from google.cloud import storage
from google.cloud.storage.blob import Blob


engine = create_engine(os.environ['MYSQL_CONNECTION_URL'], connect_args={"ssl": {"ca": certifi.where()}}, pool_recycle=60)


def main(req: func.HttpRequest) -> func.HttpResponse:
    try:
        if req.method == 'POST':
            pattern = 'data:([\\w/\\-\\.]+);(\\w+),(.+)'
            data = req.get_json() if req.headers.get('Content-Type') == 'application/json' else [req.get_body().decode('utf-8')]

            for item in data:
                match = re.match(pattern, item)

                if match:
                    mime_type, encoding, data = match.groups()

                    if mime_type in ['application/zip', 'image/apng', 'image/gif', 'image/png', 'image/jpeg', 'image/webp'] and encoding == 'base64':
                        bucket_name = 'milchchan.appspot.com'
                        id = str(uuid4())
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

                        if not blob.exists():
                            blob.upload_from_file(BytesIO(b64decode(data)), content_type=mime_type)
                            
                            url = f'gs://{bucket_name}{urljoin("/", path)}'
                            Session = sessionmaker(bind=engine)
                            session = Session()

                            try:
                                upload = Upload()
                                upload.url = url
                                upload.type = mime_type
                                upload.timestamp = blob.time_created

                                session.add(upload)
                                session.commit()

                                return func.HttpResponse(json.dumps({
                                    'id': id,
                                    'url': url,
                                    'type': mime_type,
                                    'timestamp': int(upload.timestamp.replace(tzinfo=timezone.utc).timestamp())
                                }), status_code=201, mimetype='application/json', charset='utf-8')
                            
                            except Exception as e:
                                session.rollback()

                                raise e

                            finally:
                                session.close()
        else:
            Session = sessionmaker(bind=engine)
            session = Session()

            try:
                query = session.query(Upload)
                id = random.randrange(query.count() + 1)
                upload = query.filter(Upload.id <= id).order_by(desc(Upload.id)).limit(1).one_or_none()
                
                if upload is None:
                    upload = query.filter(Upload.id > id).order_by(Upload.id).limit(1).one()
                
                return func.HttpResponse(json.dumps(upload), status_code=200, mimetype='application/json', charset='utf-8')
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
                blob = Blob.from_string(upload.url, client=storage.Client(credentials=scoped_credentials, project=scoped_credentials.project_id))

                if blob.exists():
                    #return func.HttpResponse(blob.download_as_bytes(), status_code=200, mimetype=blob.content_type)
                    return func.HttpResponse(status_code=302, headers={'Location': blob.generate_signed_url(version='v4', expiration=timedelta(minutes=15), method='GET')})
                '''
            finally:
                session.close()

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
