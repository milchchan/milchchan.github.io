import random
import re
import os
import json
import logging
from urllib.request import urlopen, Request
from hashlib import md5

import azure.functions as func


def main(req: func.HttpRequest) -> func.HttpResponse:
    try:
        if req.method == 'POST':
            content_type = req.headers.get('Content-Type')

            if content_type == 'application/json':
                api_key = None

                if 'X-Authorization' in req.headers:
                    match = re.match('Bearer\\s(.+)', req.headers['X-Authorization'])

                    if match:
                        api_key = match.group(1)

                else:
                    api_key = os.environ['GOOGLE_API_KEY']
                    
                if api_key is None:
                    return func.HttpResponse(status_code=401, mimetype='', charset='')
                
                else:
                    temperature = float(req.params['temperature']) if 'temperature' in req.params else None
                    contents = []

                    for message in req.get_json():
                        if message['role'] == 'system' or message['role'] == 'user':
                            contents.append({'role': 'user', 'parts': [{'text': message['content']}]})
                        elif message['role'] == 'assistant':
                            contents.append({'role': 'model', 'parts': [{'text': message['content']}]})

                    request = Request(f'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key={api_key}', data=json.dumps({'contents': contents} if temperature is None else {'contents': contents, 'generationConfig': {'temperature': temperature}}).encode('utf-8'), method='POST', headers={'Content-Type': 'application/json'})

                    with urlopen(request) as response:
                        for candidate in json.loads(response.read().decode('utf-8'))['candidates']:
                            for part in candidate['content']['parts']:
                                if 'text' in part:
                                    match = re.match('(?:```json)?(?:[^{]+)?({.+}).*(?:```)?', part['text'], flags=(re.MULTILINE|re.DOTALL))

                                    return func.HttpResponse(json.dumps(json.loads(match.group(1) if match else part['text'])), status_code=201, mimetype='application/json', charset='utf-8')
            
            elif content_type.startswith('multipart/form-data;'):
                tts_url = os.environ.get('TTS_URL')

                if tts_url is not None:
                    request = Request(tts_url, headers={'Content-Type': content_type}, data=req.get_body(), method='POST')

                    with urlopen(request) as response:
                        return func.HttpResponse(response.read(), status_code=201, mimetype='audio/wav')
                    
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
