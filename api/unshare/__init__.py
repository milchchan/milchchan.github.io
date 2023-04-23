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

import azure.functions as func
from azure.cosmos.cosmos_client import CosmosClient


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

        id = req.route_params['id']
        client = CosmosClient.from_connection_string(os.environ['AZURE_COSMOS_DB_CONNECTION_STRING'])
        database = client.get_database_client('Milch')
        container = database.get_container_client('Likes')
        container.delete_item(id, id)

        return func.HttpResponse(json.dumps({'id': id, 'timestamp': int(datetime.utcfromtimestamp(datetime.now(timezone.utc).timestamp()).timestamp())}), status_code=200, mimetype='application/json', charset='utf-8')

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
