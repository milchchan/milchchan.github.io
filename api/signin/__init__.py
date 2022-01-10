import logging
import time
import json
import os
from urllib.request import urlopen, Request

import azure.functions as func


def main(req: func.HttpRequest) -> func.HttpResponse:
    headers = {'Content-Type': 'application/json'}

    if 'Origin' in req.headers:
        headers['Access-Control-Allow-Origin'] = req.headers['Origin']

    try:
        if req.method == 'POST':
            if req.headers.get('Content-Type') == 'application/json':
                data = req.get_json()
                email = data.get('email')
                password = data.get('password')
                response = urlopen(Request(
                        f'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key={os.environ.get("FIREBASE_API_KEY")}',
                        headers={'Content-Type': 'application/json'},
                        data=json.dumps({'email': email, 'password': password, 'returnSecureToken': True}).encode('utf-8'),
                        method='POST'))

                if response.getcode() == 200:
                    results = json.loads(response.read())

                    return func.HttpResponse(json.dumps({'id': results['localId'], 'token': results['idToken'], 'timestamp': int(time.time())}), status_code=200, headers=headers, charset='utf-8')

            else:
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
