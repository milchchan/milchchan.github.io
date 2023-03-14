import time
import re
import json
import logging
import os
from datetime import datetime, timezone
from io import BytesIO
from uuid import uuid4
from base64 import b64decode
from urllib.parse import urljoin
from urllib.request import urlopen, Request
from shared import encode_geohash

import azure.functions as func
from azure.cosmos.cosmos_client import CosmosClient

from google.oauth2 import service_account
from google.cloud import storage


def main(req: func.HttpRequest) -> func.HttpResponse:
    try:
        if 'Authorization' in req.headers:
            jwt = req.headers['Authorization'].split(' ')[1].split('.') if req.headers['Authorization'].startswith(
                'Bearer ') else req.headers['Authorization'].split('.')

            if json.loads(b64decode(jwt[0] + '=' * (-len(jwt[0]) % 4)))['typ'] == 'JWT' and json.loads(b64decode(jwt[1] + '=' * (-len(jwt[1]) % 4)))['iss'] == 'https://securetoken.google.com/milchchan':
                try:
                    response = urlopen(Request(
                        f'https://identitytoolkit.googleapis.com/v1/accounts:lookup?key={os.environ["FIREBASE_API_KEY"]}',
                        headers={'Content-Type': 'application/json'},
                        data=json.dumps({'idToken': req.headers['Authorization']}).encode('utf-8')))

                    if response.getcode() != 200:
                        raise Exception

                except Exception:
                    return func.HttpResponse(status_code=401, mimetype='', charset='')

        if req.headers.get('Content-Type') == 'application/json':
            data = req.get_json()

            if 'text' in data and data['text'] is not None and len(data['text']) > 0:
                client = CosmosClient.from_connection_string(
                    os.environ['AZURE_COSMOS_DB_CONNECTION_STRING'])
                database = client.get_database_client('Milch')
                container = database.get_container_client('Likes')

                if 'id' in data and data['id'] is not None and len(data['id']) > 0:
                    id = None
                    item = container.read_item(
                        data['id'], partition_key=data['id'])
                    item['text'] = data['text']

                else:
                    id = str(uuid4())
                    item = {'id': id, 'pk': id, 'text': data['text']}

                author = data.get('author')
                image = data.get('image')

                if author is not None:
                    item['author'] = author

                if image is not None:
                    match = re.match("data:([\\w/\\-\\.]+);(\\w+),(.+)", image)

                    if match:
                        mime_type, encoding, data = match.groups()

                        if mime_type in ['image/apng', 'image/gif', 'image/png', 'image/jpeg', 'image/webp'] and encoding == 'base64':
                            bucket_name = 'merkuchan.com'
                            path = str(uuid4())
                            credentials = service_account.Credentials.from_service_account_info({
                                'type': os.environ['GOOGLE_APPLICATION_CREDENTIALS_TYPE'],
                                'project_id': os.environ['GOOGLE_APPLICATION_CREDENTIALS_PROJECT_ID'],
                                'private_key_id': os.environ['GOOGLE_APPLICATION_CREDENTIALS_PRIVATE_KEY_ID'],
                                'private_key': os.environ['GOOGLE_APPLICATION_CREDENTIALS_PRIVATE_KEY'].replace('\\n', '\n'),
                                'client_email': os.environ['GOOGLE_APPLICATION_CREDENTIALS_CLIENT_EMAIL'],
                                'client_id': os.environ['GOOGLE_APPLICATION_CREDENTIALS_CLIENT_ID'],
                                'auth_uri': os.environ['GOOGLE_APPLICATION_CREDENTIALS_AUTH_URI'],
                                'token_uri': os.environ['GOOGLE_APPLICATION_CREDENTIALS_TOKEN_URI'],
                                'auth_provider_x509_cert_url': os.environ['GOOGLE_APPLICATION_CREDENTIALS_AUTH_PROVIDER_X509_CERT_URL'],
                                'client_x509_cert_url': os.environ['GOOGLE_APPLICATION_CREDENTIALS_CLIENT_X509_CERT_URL']
                            })
                            scoped_credentials = credentials.with_scopes(
                                ['https://www.googleapis.com/auth/cloud-platform'])
                            storage_client = storage.Client(
                                credentials=scoped_credentials, project=scoped_credentials.project_id)
                            bucket = storage_client.bucket(bucket_name)
                            blob = bucket.blob(path)

                            if blob.exists():
                                return func.HttpResponse(status_code=400, mimetype='', charset='')

                            else:
                                blob.upload_from_file(
                                    BytesIO(b64decode(data)), content_type=mime_type)
                                item['image'] = f'gs://{bucket_name}{urljoin("/", path)}'

                        else:
                            return func.HttpResponse(status_code=400, mimetype='', charset='')

                    else:
                        return func.HttpResponse(status_code=400, mimetype='', charset='')

                if 'location' in data:
                    if 'type' in data['location'] and data['location']['type'] == 'Point' and 'coordinates' in data['location']:
                        item['location'] = {'type': data['location']['type'], 'coordinates': [
                            data['location']['coordinates'][0], data['location']['coordinates'][1]]}
                        item['geohash'] = encode_geohash(
                            data['location']['coordinates'][1], data['location']['coordinates'][0])

                    else:
                        item['location'] = {'type': 'Point', 'coordinates': [
                            data['location']['longitude'], data['location']['latitude']]}
                        item['geohash'] = encode_geohash(
                            data['location']['latitude'], data['location']['longitude'])

                item['timestamp'] = datetime.fromtimestamp(
                    time.time(), timezone.utc).strftime('%Y-%m-%dT%H:%M:%SZ')

                container.upsert_item(item)

                item['timestamp'] = int(datetime.utcfromtimestamp(datetime.fromisoformat(
                    item['timestamp'].replace('Z', '+00:00')).timestamp()).timestamp())

                del item['pk']

                return func.HttpResponse(json.dumps(item), status_code=200 if id is None else 201, mimetype='application/json', charset='utf-8')

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
