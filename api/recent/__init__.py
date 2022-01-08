import logging
import json
import os
from datetime import datetime, timedelta
from shared import get_neighbors

import azure.functions as func
from azure.cosmos.cosmos_client import CosmosClient

from google.oauth2 import service_account
from google.cloud import storage
from google.cloud.storage.blob import Blob


def main(req: func.HttpRequest) -> func.HttpResponse:
    headers = {'Content-Type': 'application/json'}

    if 'Origin' in req.headers:
        headers['Access-Control-Allow-Origin'] = req.headers['Origin']

    try:
        if req.method == 'GET':
            if req.headers.get('Content-Type') == 'application/json':
                data = req.get_json()
                offset = data.get('offset')
                limit = data.get('limit')
                geohash = data.get('geohash')
                
            else:
                offset = int(req.params['offset']) if 'offset' in req.params else None
                limit = int(req.params['limit']) if 'limit' in req.params else None
                geohash = req.params['geohash'] if 'geohash' in req.params else None

            client = CosmosClient.from_connection_string(os.environ.get('AZURE_COSMOS_DB_CONNECTION_STRING'))
            database = client.get_database_client('Wonderland')
            container = database.get_container_client('Words')
            
            if geohash is None:
                items = list(container.query_items(
                    query='SELECT w.id, w.name, w.attributes, w.image, w.location, w.timestamp FROM Words w ORDER BY w.timestamp DESC OFFSET @offset LIMIT @limit',
                    parameters=[
                        { "name":"@offset", "value": 0 if offset is None else offset },
                        { "name":"@limit", "value": 100 if limit is None else limit }
                    ],
                    enable_cross_partition_query=True))
                    
            else:
                neighbors = get_neighbors(geohash)
                items = list(container.query_items(
                    query="SELECT w.id, w.name, w.attributes, w.image, w.location, w.timestamp FROM Words w WHERE w.geohash LIKE CONCAT(@centergeohash, '%') OR w.geohash LIKE CONCAT(@topgeohash, '%') OR w.geohash LIKE CONCAT(@bottomgeohash, '%') OR w.geohash LIKE CONCAT(@rightgeohash, '%') OR w.geohash LIKE CONCAT(@leftgeohash, '%') OR w.geohash LIKE CONCAT(@topleftgeohash, '%') OR w.geohash LIKE CONCAT(@toprightgeohash, '%') OR w.geohash LIKE CONCAT(@bottomrightgeohash, '%') OR w.geohash LIKE CONCAT(@bottomleftgeohash, '%') ORDER BY w.timestamp DESC OFFSET @offset LIMIT @limit",
                    parameters=[
                        { "name":"@offset", "value": 0 if offset is None else offset },
                        { "name":"@limit", "value": 100 if limit is None else limit },
                        { "name":"@centergeohash", "value": geohash },
                        { "name":"@topgeohash", "value": neighbors['top'] },
                        { "name":"@bottomgeohash", "value": neighbors['bottom'] },
                        { "name":"@rightgeohash", "value": neighbors['right'] },
                        { "name":"@leftgeohash", "value": neighbors['left'] },
                        { "name":"@topleftgeohash", "value": neighbors['topleft'] },
                        { "name":"@toprightgeohash", "value": neighbors['topright'] },
                        { "name":"@bottomrightgeohash", "value": neighbors['bottomright'] },
                        { "name":"@bottomleftgeohash", "value": neighbors['bottomleft'] }
                    ],
                    enable_cross_partition_query=True))

            for item in items:
                if 'image' in item:
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
                    blob = Blob.from_string(item['image'], client=storage.Client(credentials=scoped_credentials, project=scoped_credentials.project_id))
                
                    if blob.exists():
                        item['image'] = blob.generate_signed_url(version='v4', expiration=timedelta(minutes=60), method='GET')

                if 'location' in item and item['location'] is not None and 'type' in item['location'] and item['location']['type'] == 'Point' and 'coordinates' in item['location']:
                    item['location'] = {'type': 'Point', 'coordinates': item['location']['coordinates']}

                item['timestamp'] = int(datetime.fromisoformat(item['timestamp'].replace('Z', '+00:00')).timestamp())

        return func.HttpResponse(json.dumps(items), status_code=200, headers=headers, charset='utf-8')

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
