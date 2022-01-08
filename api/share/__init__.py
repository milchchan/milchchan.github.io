import logging
import time
import re
import json
import os
from datetime import datetime, timezone
from io import BytesIO
from uuid import uuid4
from base64 import b64decode
from urllib.parse import urljoin
from shared import encode_geohash

import azure.functions as func
from azure.cosmos.cosmos_client import CosmosClient

from google.oauth2 import service_account
from google.cloud import storage


def main(req: func.HttpRequest) -> func.HttpResponse:
    headers = {'Content-Type': 'application/json'}

    if 'Origin' in req.headers:
        headers['Access-Control-Allow-Origin'] = req.headers['Origin']

    try:
        if req.method == 'POST':
            if req.headers.get('Content-Type') == 'application/json':
                data = req.get_json()

                if 'name' in data and data['name'] is not None and len(data['name']) > 0 and 'attributes' in data and isinstance(data['attributes'], list):
                    id = data['id'] if 'id' in data and data['id'] is not None and len(data['id']) > 0 else str(uuid4())
                    image = data.get('image')
                    item = {'id': id, 'pk': id, 'name': data['name'], 'attributes': data['attributes'] }
                        
                    if image is not None:
                        match = re.match("data:([\\w/\\-\\.]+);(\\w+),(.+)", image)
                    
                        if match:
                            mime_type, encoding, data = match.groups()
                        
                            if mime_type in ['image/png', 'image/jpeg'] and encoding == 'base64':
                                bucket_name = 'merkuchan.com'
                                path = str(uuid4())
                                credentials = service_account.Credentials.from_service_account_info({
                                    'type': os.environ.get('GOOGLE_APPLICATION_CREDENTIALS_TYPE'),
                                    'project_id': os.environ.get('GOOGLE_APPLICATION_CREDENTIALS_PROJECT_ID'),
                                    'private_key_id': os.environ.get('GOOGLE_APPLICATION_CREDENTIALS_PRIVATE_KEY_ID'),
                                    'private_key': os.environ.get('GOOGLE_APPLICATION_CREDENTIALS_PRIVATE_KEY').replace('\\n', '\n'),
                                    'client_email': os.environ.get('GOOGLE_APPLICATION_CREDENTIALS_CLIENT_EMAIL'),
                                    'client_id': os.environ.get('GOOGLE_APPLICATION_CREDENTIALS_CLIENT_ID'),
                                    'auth_uri': os.environ.get('GOOGLE_APPLICATION_CREDENTIALS_AUTH_URI'),
                                    'token_uri': os.environ.get('GOOGLE_APPLICATION_CREDENTIALS_TOKEN_URI'),
                                    'auth_provider_x509_cert_url': os.environ.get('GOOGLE_APPLICATION_CREDENTIALS_AUTH_PROVIDER_X509_CERT_URL'),
                                    'client_x509_cert_url': os.environ.get('GOOGLE_APPLICATION_CREDENTIALS_CLIENT_X509_CERT_URL')
                                })
                                scoped_credentials = credentials.with_scopes(['https://www.googleapis.com/auth/cloud-platform'])
                                storage_client = storage.Client(credentials=scoped_credentials, project=scoped_credentials.project_id)
                                bucket = storage_client.bucket(bucket_name)
                                blob = bucket.blob(path)
                                
                                if blob.exists():
                                    return func.HttpResponse(status_code=400, headers=headers)

                                else:
                                    blob.upload_from_file(BytesIO(b64decode(data)), content_type=mime_type)
                                    item['image'] = f'gs://{bucket_name}{urljoin("/", path)}'

                            else:
                                return func.HttpResponse(status_code=400, headers=headers)

                        else:
                            return func.HttpResponse(status_code=400, headers=headers)
                    
                    if 'location' in data:
                        if 'type' in data['location'] and data['location']['type'] == 'Point' and 'coordinates' in data['location']:
                            item['location'] = {'type': data['location']['type'], 'coordinates': [data['location']['coordinates'][0], data['location']['coordinates'][1]]}
                        else:
                            item['location'] = {'type': 'Point', 'coordinates': [data['location']['longitude'], data['location']['latitude']]}
                        
                        item['geohash'] = encode_geohash(data['location']['latitude'], data['location']['longitude'])

                    item['timestamp'] = datetime.fromtimestamp(time.time(), timezone.utc).strftime('%Y-%m-%dT%H:%M:%SZ')

                    client = CosmosClient.from_connection_string(os.environ.get('AZURE_COSMOS_DB_CONNECTION_STRING'))
                    database = client.get_database_client('Wonderland')
                    container = database.get_container_client('Words')
                    container.upsert_item(item)

                    return func.HttpResponse(json.dumps(item), status_code=200, headers=headers, charset='utf-8')

            return func.HttpResponse(status_code=400, headers=headers)

        headers['Allow'] = 'POST'

        return func.HttpResponse(status_code=405, headers=headers)

    except Exception as e:
        logging.error(f'{e}')

        return func.HttpResponse(json.dumps({
                'error': {
                    'message': str(e),
                    'type': type(e).__name__ }
            }),
            status_code=400,
            headers=headers,
            charset='utf-8')
