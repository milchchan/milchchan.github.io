import json
import logging
import os
from datetime import timedelta
from urllib.parse import urljoin

import azure.functions as func

from google.oauth2 import service_account
from google.cloud import storage
from google.cloud.storage.blob import Blob


def main(req: func.HttpRequest) -> func.HttpResponse:
    try:
        credentials = service_account.Credentials.from_service_account_info({
            'type': os.environ['GOOGLE_APPLICATION_CREDENTIALS_TYPE'],
            'project_id': os.environ['FIREBASE_CREDENTIALS_PROJECT_ID'],
            'private_key_id': os.environ['FIREBASE_CREDENTIALS_PRIVATE_KEY_ID'],
            'private_key': os.environ['FIREBASE_CREDENTIALS_PRIVATE_KEY'].replace('\\n', '\n'),
            'client_email': os.environ['FIREBASE_CREDENTIALS_CLIENT_EMAIL'],
            'client_id': os.environ['FIREBASE_CREDENTIALS_CLIENT_ID'],
            'auth_uri': os.environ['GOOGLE_APPLICATION_CREDENTIALS_AUTH_URI'],
            'token_uri': os.environ['GOOGLE_APPLICATION_CREDENTIALS_TOKEN_URI'],
            'auth_provider_x509_cert_url': os.environ['GOOGLE_APPLICATION_CREDENTIALS_AUTH_PROVIDER_X509_CERT_URL'],
            'client_x509_cert_url': os.environ['FIREBASE_CREDENTIALS_CLIENT_X509_CERT_URL']
        })
        scoped_credentials = credentials.with_scopes(['https://www.googleapis.com/auth/cloud-platform'])
        blob = Blob.from_string(f'gs://milchchan.appspot.com{urljoin("/", os.path.join("uploads", req.route_params.get("id")))}', client=storage.Client(credentials=scoped_credentials, project=scoped_credentials.project_id))

        if blob.exists():
            #return func.HttpResponse(blob.download_as_bytes(), status_code=200, mimetype=blob.content_type)
            return func.HttpResponse(status_code=302, headers={'Location': blob.generate_signed_url(version='v4', expiration=timedelta(minutes=15), method='GET')})
        
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
