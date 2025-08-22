import time
import json
import logging
import os
import jwt
from uuid import uuid4
from datetime import datetime, timezone
from urllib.request import urlopen, Request
from shared import encode_geohash

import azure.functions as func
from azure.cosmos.cosmos_client import CosmosClient


def main(req: func.HttpRequest) -> func.HttpResponse:
    try:
        team_id = os.environ['WEATHERKIT_TEAM_ID']
        services_id = os.environ['WEATHERKIT_SERVICES_ID']
        private_key = os.environ['WEATHERKIT_PRIVATE_KEY'].replace('\\n', '\n')
        key_id = os.environ['WEATHERKIT_KEY_ID']
        now = time.time()
        token = jwt.encode({
            'iss': team_id,
            'iat': int(now),
            'exp': int(now + 1800),
            'sub': services_id
        }, private_key, algorithm='ES256', headers={
            'alg': 'ES256',
            'type':'JWT',
            'kid': key_id,
            'id': f'{team_id}.{services_id}'
        })
        latitude = float(req.route_params.get('latitude'))
        longitude = float(req.route_params.get('longitude'))
        request = Request(f'https://weatherkit.apple.com/api/v1/weather/en/{req.route_params.get("latitude")}/{req.route_params.get("longitude")}?dataSets=currentWeather', method='GET', headers={'Content-Type': 'application/json', 'Authorization': f'Bearer {token}'})
        
        with urlopen(request) as response:
            data = response.read().decode('utf-8')
            identifier = str(uuid4())
            client = CosmosClient.from_connection_string(os.environ['AZURE_COSMOS_DB_CONNECTION_STRING'])
            database = client.get_database_client('Milch')
            container = database.get_container_client('Logs')
            container.upsert_item({'id': identifier, 'slug': identifier[:7], 'path': '/weather', 'data': data, 'geohash': encode_geohash(latitude, longitude), 'location': {'type': 'Point', 'coordinates': [longitude, latitude]}, 'timestamp': datetime.fromtimestamp(now, timezone.utc).strftime('%Y-%m-%dT%H:%M:%SZ')})

            return func.HttpResponse(data, status_code=200, mimetype='application/json', charset='utf-8')

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
