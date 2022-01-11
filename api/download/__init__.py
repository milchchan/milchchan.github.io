import time
import json
import logging
import os
from datetime import timedelta

import azure.functions as func

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
                url = data.get('url')
                expiration = data.get('expiration')
                expiration = timedelta(seconds=expiration if expiration else 3600)
                
            else:
                url = req.params.get('url')
                expiration = req.params.get('expiration')
                expiration = timedelta(seconds=int(expiration) if expiration and expiration.isnumeric() else 3600)

            if url is not None:
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
                blob = Blob.from_string(url, client=storage.Client(credentials=scoped_credentials, project=scoped_credentials.project_id))
                
                if blob.exists():
                    return func.HttpResponse(json.dumps({
                            'url': blob.generate_signed_url(
                                version='v4',
                                expiration=expiration,
                                method='GET'),
                            'timestamp': int(time.time())
                        }),
                        status_code=200,
                        headers=headers,
                        charset='utf-8')

            return func.HttpResponse(status_code=400, headers=headers)

        headers['Allow'] = 'GET'

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
