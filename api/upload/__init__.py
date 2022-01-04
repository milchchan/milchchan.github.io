import logging
import time
import datetime
import re
import json
import os
from io import BytesIO
from uuid import uuid4
from base64 import b64decode

import azure.functions as func

from google.oauth2 import service_account
from google.cloud import storage

def main(req: func.HttpRequest) -> func.HttpResponse:
    headers = {'Content-Type': 'application/json'}

    if 'Origin' in req.headers:
        headers['Access-Control-Allow-Origin'] = req.headers['Origin']

    try:
        pattern = "data:([\\w/\\-\\.]+);(\\w+),(.+)"
        
        if req.headers['Content-Type'] == 'application/json':
            data = req.get_json()            
            match = re.match(pattern, data.get('image'))
            path = data.get('path')
            #expiration = data.get('expiration')
            #expiration = datetime.timedelta(seconds=expiration if expiration else 3600)
            
        else:
            match = re.match(pattern, req.get_body.decode('utf-8'))
            path = req.params.get('path')
            #expiration = datetime.timedelta(minutes=60)

        if match:
            mime_type, encoding, data = match.groups()
        
            if mime_type in ['image/png', 'image/jpeg'] and encoding == 'base64':
                #credentials = service_account.Credentials.from_service_account_info({})
                #storage_client = storage.Client(credentials=credentials, project=credentials.project_id)
                #bucket = storage_client.bucket(bucket_name)
                #blob = bucket.blob(path if path else str(uuid4()))
                #blob.upload_from_file(BytesIO(b64decode(data)))                

                return func.HttpResponse(json.dumps({
                        'data': data,
                        #'key': os.environ.get("AZURE_STORAGE_CONNECTION_STRING"),
                        'timestamp': int(time.time())
                    }),
                    status_code=200,
                    headers=headers,
                    charset='utf-8')

        return func.HttpResponse(status_code=400, headers=headers)

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
