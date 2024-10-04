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
                    audio_data = None
                    json_data = None
                    #array = ['test']
                    return func.HttpResponse(json.dumps([]), status_code=201, mimetype='application/json', charset='')

                    '''
                    for file in req.files.values():
                        #array.append(file.content_type)
                        if file.content_type == 'audio/wav':
                            audio_data = file.stream.read()

                        elif file.content_type == 'application/json':
                            json_data = file.stream.read()
                    '''
                    if audio_data is not None and json_data is not None:
                        boundary = md5(str(random.randint(0, 32000)).encode()).hexdigest()

                        data = f'--{boundary}\r\n'.encode()
                        data += 'Content-Disposition: form-data; name="file"; filename="prompt.wav"\r\n'.encode()
                        data += f'Content-Type: audio/wav\r\n'.encode()
                        data += 'Content-Transfer-Encoding: binary\r\n\r\n'.encode()
                        data += audio_data
                        data += f'\r\n'.encode()
                        data += f'--{boundary}\r\n'.encode()
                        data += 'Content-Disposition: form-data; name="data"\r\n'.encode()
                        data += f'Content-Type: application/json\r\n\r\n'.encode()
                        data += json_data
                        data += f'\r\n'.encode()
                        data += f'--{boundary}--\r\n'.encode()

                        request = Request(tts_url, headers={'Content-Type': f'multipart/form-data; boundary={boundary}'}, data=data, method='POST')

                        with urlopen(request) as response:
                            return func.HttpResponse(response.read(), status_code=201, mimetype='audio/wav')

                    else:
                        return func.HttpResponse(json.dumps(array), status_code=201, mimetype='application/json', charset='')
                    
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
