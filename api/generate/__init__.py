import time
import re
import os
import json
import logging
from uuid import uuid4
from datetime import datetime, timezone
from urllib.request import urlopen, Request

import azure.functions as func
from azure.cosmos.cosmos_client import CosmosClient


def main(req: func.HttpRequest) -> func.HttpResponse:
    try:
        if req.method == 'POST':
            content_type = req.headers.get('Content-Type')

            if content_type == 'application/json':
                llm_source = os.environ.get('LLM_SOURCE')

                if llm_source is None or len(llm_source) == 0:
                    api_key = None

                    if 'X-Authorization' in req.headers:
                        match = re.match('Bearer\\s(.+)', req.headers['X-Authorization'])

                        if match:
                            api_key = match.group(1)

                    else:
                        api_key = os.environ.get('OPENAI_API_KEY')

                        if api_key is None or len(api_key) == 0:
                            api_key = os.environ['GOOGLE_API_KEY']

                        else:
                            data = req.get_json()
                            messages = []

                            for message in data['messages']:
                                if isinstance(message['content'], list):
                                    content = []

                                    for part in message['content']:
                                        if part['type'] =='image':
                                            content.append({'type': 'image_url', 'image_url': {'url': part['image']}})
                                        else:
                                            content.append(part)

                                else:
                                    content = message['content']

                                if message['role'] == 'system':
                                    messages.append({'role': 'developer', 'content': content})
                                else:
                                    messages.append({'role': message['role'], 'content': content})

                            request = Request('https://api.openai.com/v1/chat/completions', data=json.dumps({'model': data['model'] if 'model' in data else os.environ['OPENAI_MODEL'], 'messages': messages, 'temperature': data['temperature']} if 'temperature' in data else {'model': data['model'] if 'model' in data else os.environ['OPENAI_MODEL'], 'messages': messages}).encode('utf-8'), method='POST', headers={'Authorization': f'Bearer {api_key}', 'Content-Type': 'application/json'})

                            with urlopen(request) as response:
                                for choice in json.loads(response.read().decode('utf-8'))['choices']:
                                    if choice['message']['role'] == 'assistant':
                                        match = re.match('(?:```json)?(?:[^{]+)?({.+}).*(?:```)?', choice['message']['content'], flags=(re.MULTILINE|re.DOTALL))
                                        client = CosmosClient.from_connection_string(os.environ['AZURE_COSMOS_DB_CONNECTION_STRING'])
                                        database = client.get_database_client('Milch')
                                        container = database.get_container_client('Logs')
                                        data['messages'].append({'role': 'assistant', 'content': choice['message']['content']})
                                        container.upsert_item({'id': str(uuid4()), 'path': '/generate', 'data': data, 'timestamp': datetime.fromtimestamp(time.time(), timezone.utc).strftime('%Y-%m-%dT%H:%M:%SZ')})

                                        return func.HttpResponse(json.dumps(json.loads(match.group(1) if match else choice['message']['content'])), status_code=201, mimetype='application/json', charset='utf-8')
                                    
                                    else:
                                        return func.HttpResponse(status_code=500, mimetype='', charset='')

                    if api_key is None:
                        return func.HttpResponse(status_code=401, mimetype='', charset='')
                    
                    else:
                        temperature = float(req.params['temperature']) if 'temperature' in req.params else None
                        data = req.get_json()
                        contents = []

                        if 'temperature' in data:
                            temperature = data['temperature']

                        for message in data['messages']:
                            if message['role'] == 'system' or message['role'] == 'user':
                                contents.append({'role': 'user', 'parts': [{'text': message['content']}]})
                            elif message['role'] == 'assistant':
                                contents.append({'role': 'model', 'parts': [{'text': message['content']}]})

                        request = Request(f'https://generativelanguage.googleapis.com/v1beta/{os.environ["GEMINI_MODEL_CODE"]}:generateContent?key={api_key}', data=json.dumps({'contents': contents} if temperature is None else {'contents': contents, 'generationConfig': {'temperature': temperature}}).encode('utf-8'), method='POST', headers={'Content-Type': 'application/json'})

                        with urlopen(request) as response:
                            for candidate in json.loads(response.read().decode('utf-8'))['candidates']:
                                for part in candidate['content']['parts']:
                                    if 'text' in part:
                                        match = re.match('(?:```json)?(?:[^{]+)?({.+}).*(?:```)?', part['text'], flags=(re.MULTILINE|re.DOTALL))
                                        client = CosmosClient.from_connection_string(os.environ['AZURE_COSMOS_DB_CONNECTION_STRING'])
                                        database = client.get_database_client('Milch')
                                        container = database.get_container_client('Logs')
                                        data['messages'].append({'role': 'assistant', 'content': part['text']})
                                        container.upsert_item({'id': str(uuid4()), 'path': '/generate', 'data': data, 'timestamp': datetime.fromtimestamp(time.time(), timezone.utc).strftime('%Y-%m-%dT%H:%M:%SZ')})

                                        return func.HttpResponse(json.dumps(json.loads(match.group(1) if match else part['text'])), status_code=201, mimetype='application/json', charset='utf-8')
                
                elif re.match(r'https?://', llm_source) is None:
                    data = req.get_json()
                    temperature = 1.0
                    input_text = ''

                    if 'temperature' in data:
                        temperature = data['temperature']

                    for message in data['messages']:
                        if message['role'] == 'system' or message['role'] == 'user':
                            input_text += f"<start_of_turn>user\n{message['content']}<end_of_turn>\n"
                        elif message['role'] == 'assistant':
                            input_text += f"<start_of_turn>model\n{message['content']}<end_of_turn>\n"

                    if len(input_text) > 0:
                        api_url = f"https://{llm_source.replace('/', '-').lower()}.hf.space/gradio_api"
                        session = uuid4().hex[:10]
                        
                        with urlopen(Request(api_url + '/queue/join', data=json.dumps({
                            'data': [input_text + '<start_of_turn>model\n', temperature],
                            'event_data': None,
                            'fn_index': 0,
                            'session_hash': session
                        }).encode(), headers={'Authorization': f"Bearer {os.environ['HF_TOKEN']}", 'Content-Type': 'application/json'})) as response:
                            event_id = json.loads(response.read().decode('utf-8'))['event_id']
                        
                        with urlopen(Request(f'{api_url}/queue/data?session_hash={session}', headers={'Authorization': f"Bearer {os.environ['HF_TOKEN']}", 'Accept': 'text/event-stream'})) as response:
                            for raw in iter(lambda: response.readline() or None, None):
                                if not raw: # EOF
                                    break

                                line = raw.decode('utf-8').strip()

                                if line.startswith('data:'):
                                    msg = json.loads(line[5:].lstrip())
                                    msg_type = msg.get('msg')

                                    if msg_type == 'heartbeat':
                                        continue
                                    elif msg_type == 'queue_full' or msg_type == 'unexpected_error':
                                        return func.HttpResponse(status_code=503, mimetype='', charset='')
                                    elif msg_type == 'process_completed':
                                        if msg['event_id'] == event_id:
                                            if 'data' in msg['output']:
                                                result = msg['output']['data'][0]
                                                matches = re.findall(r'<start_of_turn>model\n(.+?)(?:(?:<end_of_turn>)|$)', result, re.DOTALL)

                                                if len(matches) > 0:
                                                    result = matches[len(matches) - 1]
                                                    match = re.match('(?:```json)?(?:[^{]+)?({.+}).*(?:```)?', result, flags=(re.MULTILINE|re.DOTALL))
                                                    client = CosmosClient.from_connection_string(os.environ['AZURE_COSMOS_DB_CONNECTION_STRING'])
                                                    database = client.get_database_client('Milch')
                                                    container = database.get_container_client('Logs')
                                                    data['messages'].append({'role': 'assistant', 'content': result})
                                                    container.upsert_item({'id': str(uuid4()), 'path': '/generate', 'data': data, 'timestamp': datetime.fromtimestamp(time.time(), timezone.utc).strftime('%Y-%m-%dT%H:%M:%SZ')})

                                                    return func.HttpResponse(json.dumps(json.loads(match.group(1) if match else result)), status_code=201, mimetype='application/json', charset='utf-8')
                                                
                                                else:
                                                    return func.HttpResponse(status_code=503, mimetype='', charset='')
                                            else:
                                                return func.HttpResponse(status_code=503, mimetype='', charset='')
                                        
                                        break

                    return func.HttpResponse(status_code=400, mimetype='', charset='')
                
                else:
                    data = req.get_body()
                    request = Request(llm_source, headers={'Content-Type': content_type}, data=data, method='POST')

                    with urlopen(request, timeout=60.0) as response:
                        for choice in json.loads(response.read().decode('utf-8'))['choices']:
                            match = re.match('(?:```json)?(?:[^{]+)?({.+}).*(?:```)?', choice['content'], flags=(re.MULTILINE|re.DOTALL))
                            client = CosmosClient.from_connection_string(os.environ['AZURE_COSMOS_DB_CONNECTION_STRING'])
                            database = client.get_database_client('Milch')
                            container = database.get_container_client('Logs')
                            data['messages'].append({'role': 'assistant', 'content': choice['content']})
                            container.upsert_item({'id': str(uuid4()), 'path': '/generate', 'data': data, 'timestamp': datetime.fromtimestamp(time.time(), timezone.utc).strftime('%Y-%m-%dT%H:%M:%SZ')})

                            return func.HttpResponse(json.dumps(json.loads(match.group(1) if match else choice['content'])), status_code=201, mimetype='application/json', charset='utf-8')

                    return func.HttpResponse(status_code=503, mimetype='', charset='')

            elif content_type.startswith('multipart/form-data;'):
                tts_source = os.environ.get('TTS_SOURCE')
                    
                if tts_source is None or len(tts_source) == 0:
                    return func.HttpResponse(status_code=503, mimetype='', charset='')
                
                elif re.match(r'https?://', tts_source) is None:
                    if 'boundary=' in content_type:
                        boundary = f'--{content_type.split("boundary=")[-1]}'.encode()
                        audio_data = None
                        json_data = None

                        for part in req.get_body().split(boundary)[1:-1]:
                            index = part.find(b'\r\n\r\n')

                            if index >= 0:
                                headers = part[:index].split(b'\r\n')
                                content = part[index + 4:].strip(b'--').strip()
                                name = None
                                filename = None
                                content_type = None
                                
                                for header in headers:
                                    if header.startswith(b'Content-Disposition'):
                                        match = re.search(r'name="([^"]+)"(?:;\sfilename="([^"]+)")?', header.decode('utf-8'))

                                        if match:
                                            name, filename = match.groups()
                                
                                    elif header.startswith(b'Content-Type'):
                                        content_type = header.decode('utf-8').split(':')[1].strip()

                                if name == 'file' and filename is not None and content_type == 'audio/wav':
                                    audio_data = (filename, content)
                                elif name == 'data':
                                    json_data = json.loads(content)

                        if audio_data is not None and json_data is not None:
                            api_url = f"https://{tts_source.replace('/', '-').lower()}.hf.space/gradio_api"
                            session = uuid4().hex[:10]
                            boundary = '----gradioBoundary'
                            data = f'--{boundary}\r\n'.encode()
                            data += f'Content-Disposition: form-data; name="files"; filename="{os.path.basename(audio_data[0])}"\r\n'.encode()
                            data += f'Content-Type: audio/wav\r\n\r\n'.encode()
                            data += audio_data[1]
                            data += f'\r\n--{boundary}--\r\n'.encode()

                            with urlopen(Request(api_url + '/upload', data=data, headers={'Content-Type': f'multipart/form-data; boundary={boundary}'}, method='POST')) as response:
                                path = json.loads(response.read().decode('utf-8'))[0]
                            
                            with urlopen(Request(api_url + '/queue/join', data=json.dumps({
                                'data': [{'path': path, 'meta': {'_type': 'gradio.FileData'}}, json_data['input'], json_data['language'], json_data['temperature'] if 'temperature' in json_data else 1.0],
                                'event_data': None,
                                'fn_index': 1,
                                'session_hash': session
                            }).encode(), headers={'Authorization': f"Bearer {os.environ['HF_TOKEN']}", 'Content-Type': 'application/json'})) as response:
                                event_id = json.loads(response.read().decode('utf-8'))['event_id']
                            
                            with urlopen(Request(f'{api_url}/queue/data?session_hash={session}', headers={'Authorization': f"Bearer {os.environ['HF_TOKEN']}", 'Accept': 'text/event-stream'})) as response:
                                for raw in iter(lambda: response.readline() or None, None):
                                    if not raw: # EOF
                                        break

                                    line = raw.decode('utf-8').strip()

                                    if line.startswith('data:'):
                                        msg = json.loads(line[5:].lstrip())
                                        msg_type = msg.get('msg')

                                        if msg_type == 'heartbeat':
                                            continue
                                        elif msg_type == 'queue_full' or msg_type == 'unexpected_error':
                                            return func.HttpResponse(status_code=503, mimetype='', charset='')
                                        elif msg_type == 'process_completed':
                                            if msg['event_id'] == event_id:
                                                if 'data' in msg['output']:
                                                    with urlopen(Request(f'{api_url}/file={msg['output']['data'][0]['path']}')) as response:
                                                        return func.HttpResponse(response.read(), status_code=201, mimetype='audio/wav')
                                                else:
                                                    return func.HttpResponse(status_code=503, mimetype='', charset='')
                                            
                                            break

                else:
                    request = Request(tts_source, headers={'Content-Type': content_type}, data=req.get_body(), method='POST')

                    with urlopen(request, timeout=60.0) as response:
                        return func.HttpResponse(response.read(), status_code=201, mimetype=response.info().get_content_type())
                    
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
