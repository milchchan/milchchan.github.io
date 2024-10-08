import re
import os
import json
import logging
import tempfile
from urllib.request import urlopen, Request
from gradio_client import Client, handle_file

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
                    data = req.get_json()
                    contents = []

                    if isinstance(data, dict):
                        if 'temperature' in data:
                            temperature = data['temperature']

                        for message in data['messages']:
                            if message['role'] == 'system' or message['role'] == 'user':
                                contents.append({'role': 'user', 'parts': [{'text': message['content']}]})
                            elif message['role'] == 'assistant':
                                contents.append({'role': 'model', 'parts': [{'text': message['content']}]})

                    elif isinstance(data, list):
                        for message in data:
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
                    
                if tts_url is None or len(tts_url) == 0:
                    return func.HttpResponse(status_code=503, mimetype='', charset='')
                
                elif tts_url.startswith('https://'):
                    request = Request(tts_url, headers={'Content-Type': content_type}, data=req.get_body(), method='POST')

                    with urlopen(request, timeout=60.0) as response:
                        return func.HttpResponse(response.read(), status_code=201, mimetype=response.info().get_content_type())
                
                elif 'boundary=' in content_type:
                    boundary = f'--{content_type.split('boundary=')[-1]}'.encode()
                    audio_data = None
                    json_data = None

                    return func.HttpResponse(json.dumps({'s': boundary}), status_code=201, mimetype='application/json', charset='utf-8')
                
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
