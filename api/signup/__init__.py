import json
import logging
import os
from datetime import datetime, timezone
from urllib.request import urlopen, Request

import azure.functions as func


def main(req: func.HttpRequest) -> func.HttpResponse:
    try:
        if req.headers.get('Content-Type') == 'application/json':
            data = req.get_json()
            email = data.get('email')
            password = data.get('password')
            response = urlopen(Request(
                    f'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key={os.environ["FIREBASE_API_KEY"]}',
                    headers={'Content-Type': 'application/json'},
                    data=json.dumps({'email': email, 'password': password, 'returnSecureToken': True}).encode('utf-8'),
                    method='POST'))

            if response.getcode() == 200:
                results = json.loads(response.read())

                return func.HttpResponse(json.dumps({'id': results['localId'], 'token': results['idToken'], 'timestamp': int(datetime.utcfromtimestamp(datetime.now(timezone.utc).timestamp()).timestamp())}), status_code=200, mimetype='application/json', charset='utf-8')

        return func.HttpResponse(status_code=400, mimetype='', charset='')

    except Exception as e:
        logging.error(f'{e}')

        return func.HttpResponse(json.dumps({
                'error': {
                    'message': str(e),
                    'type': type(e).__name__ }
            }),
            status_code=400,
            mimetype='application/json',
            charset='utf-8')
