import time
import json
import logging
import os
import jwt
from urllib.request import urlopen, Request

import azure.functions as func


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
        request = Request(f'https://weatherkit.apple.com/api/v1/weather/en/35.7100/139.8107?dataSets=currentWeather', method='GET', headers={'Content-Type': 'application/json', 'Authorization': f'Bearer {token}'})
        
        with urlopen(request) as response:
            return func.HttpResponse(response.read().decode('utf-8'), status_code=200, mimetype='application/json', charset='utf-8')

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