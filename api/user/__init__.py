import json
import logging
import os
from datetime import datetime, timezone
from base64 import b64decode
from urllib.request import urlopen, Request

import azure.functions as func


def main(req: func.HttpRequest) -> func.HttpResponse:
    try:
        if req.method == 'POST':
            if 'Authorization' in req.headers and req.headers.get('Content-Type') == 'application/json':
                jwt = req.headers['Authorization'].split(' ')[1].split('.') if req.headers['Authorization'].startswith(
                    'Bearer ') else req.headers['Authorization'].split('.')

                if json.loads(b64decode(jwt[0] + '=' * (-len(jwt[0]) % 4)))['typ'] == 'JWT' and json.loads(b64decode(jwt[1] + '=' * (-len(jwt[1]) % 4)))['iss'] == 'https://securetoken.google.com/milchchan':
                    try:
                        response = urlopen(Request(
                            f'https://identitytoolkit.googleapis.com/v1/accounts:lookup?key={os.environ.get("FIREBASE_API_KEY")}',
                            headers={'Content-Type': 'application/json'},
                            data=json.dumps({'idToken': req.headers['Authorization']}).encode('utf-8')))

                        if response.getcode() != 200:
                            raise Exception

                    except Exception:
                        return func.HttpResponse(status_code=401, mimetype='', charset='')

                data = req.get_json()
                response = urlopen(Request(
                    f'https://identitytoolkit.googleapis.com/v1/accounts:update?key={os.environ.get("FIREBASE_API_KEY")}',
                    headers={'Content-Type': 'application/json'},
                    data=json.dumps({'idToken': req.headers['Authorization'], 'displayName': data.get(
                        'name'), 'photoUrl': data.get('image'), 'returnSecureToken': True}).encode('utf-8'),
                    method='POST'))

                if response.getcode() == 200:
                    results = json.loads(response.read())

                    return func.HttpResponse(json.dumps({'id': results['localId'], 'token': results['idToken'], 'timestamp': int(datetime.utcfromtimestamp(datetime.now(timezone.utc).timestamp()).timestamp())}), status_code=200, mimetype='application/json', charset='utf-8')

        elif 'Authorization' in req.headers:
            jwt = req.headers['Authorization'].split(' ')[1].split('.') if req.headers['Authorization'].startswith(
                'Bearer ') else req.headers['Authorization'].split('.')

            if json.loads(b64decode(jwt[0] + '=' * (-len(jwt[0]) % 4)))['typ'] == 'JWT' and json.loads(b64decode(jwt[1] + '=' * (-len(jwt[1]) % 4)))['iss'] == 'https://securetoken.google.com/milchchan':
                try:
                    response = urlopen(Request(
                        f'https://identitytoolkit.googleapis.com/v1/accounts:lookup?key={os.environ.get("FIREBASE_API_KEY")}',
                        headers={'Content-Type': 'application/json'},
                        data=json.dumps(
                            {'idToken': req.headers['Authorization']}).encode('utf-8'),
                        method='GET'))

                    if response.getcode() == 200:
                        results = json.loads(response.read())

                        return func.HttpResponse(json.dumps({'id': results[0]['localId'], 'name': results[0]['displayName'], 'image': results[0]['photoUrl'], 'timestamp': int(datetime.utcfromtimestamp(datetime.now(timezone.utc).timestamp()).timestamp())}), status_code=200, mimetype='application/json', charset='utf-8')

                    else:
                        raise Exception

                except Exception:
                    return func.HttpResponse(status_code=401, mimetype='', charset='')

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
