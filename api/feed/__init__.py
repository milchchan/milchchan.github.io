import time
import re
import os
import json
import logging
from uuid import uuid4
from datetime import datetime, timezone
from urllib.request import urlopen, Request
from urllib.parse import unquote

import azure.functions as func


def main(req: func.HttpRequest) -> func.HttpResponse:
    try:
        llm_source = os.environ.get('LLM_SOURCE')
        system_prompt = '''内容を下記の出力形式に変換してください。
# 出力形式
出力形式は以下のJSONフォーマットとします。このフォーマット以外で会話しないでください。
```json
[
 "content":  "<内容>",
 "url": "<URLまたはnull>",
 "timestamp": "<ISO 8601形式またはnull>"
]
```'''

        #url = unquote(req.route_params.get('url'))

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
                    with urlopen(Request('https://news.yahoo.co.jp/rss/topics/top-picks.xml', method='GET')) as response:
                        response_body = response.read().decode('utf-8')

                    messages = [{'role': 'developer', 'content': system_prompt}, {'role': 'user', 'content': response_body}]
                    request = Request('https://api.openai.com/v1/chat/completions', data=json.dumps({'model': data['model'] if 'model' in data else os.environ['OPENAI_MODEL'], 'messages': messages, 'temperature': data['temperature']} if 'temperature' in data else {'model': data['model'] if 'model' in data else os.environ['OPENAI_MODEL'], 'messages': messages}).encode('utf-8'), method='POST', headers={'Authorization': f'Bearer {api_key}', 'Content-Type': 'application/json'})

                    with urlopen(request) as response:
                        for choice in json.loads(response.read().decode('utf-8'))['choices']:
                            if choice['message']['role'] == 'assistant':
                                match = re.match('(?:```json)?(?:[^{]+)?({.+}).*(?:```)?', choice['message']['content'], flags=(re.MULTILINE|re.DOTALL))
                                
                                return func.HttpResponse(json.dumps(json.loads(match.group(1) if match else choice['message']['content'])), status_code=200, mimetype='application/json', charset='utf-8')
                            
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
                                
                                return func.HttpResponse(json.dumps(json.loads(match.group(1) if match else part['text'])), status_code=200, mimetype='application/json', charset='utf-8')
        
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
                
                result = None
                
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
                                break
                            elif msg_type == 'process_completed':
                                if msg['event_id'] == event_id and 'data' in msg['output']:
                                    result = msg['output']['data'][0]
                                
                                break

                if result is None:
                    return func.HttpResponse(status_code=503, mimetype='', charset='')
                else:
                    matches = re.findall(r'<start_of_turn>model\n(.+?)(?:(?:<end_of_turn>)|$)', result, re.DOTALL)

                    if len(matches) > 0:
                        result = matches[len(matches) - 1]
                        match = re.match('(?:```json)?(?:[^{]+)?({.+}).*(?:```)?', result, flags=(re.MULTILINE|re.DOTALL))
                        
                        return func.HttpResponse(json.dumps(json.loads(match.group(1) if match else result)), status_code=200, mimetype='application/json', charset='utf-8')
                    
                    else:
                        return func.HttpResponse(status_code=503, mimetype='', charset='')

            return func.HttpResponse(status_code=400, mimetype='', charset='')
        
        else:
            data = req.get_body()
            request = Request(llm_source, headers={'Content-Type': content_type}, data=data, method='POST')

            with urlopen(request, timeout=60.0) as response:
                for choice in json.loads(response.read().decode('utf-8'))['choices']:
                    match = re.match('(?:```json)?(?:[^{]+)?({.+}).*(?:```)?', choice['content'], flags=(re.MULTILINE|re.DOTALL))
                    
                    return func.HttpResponse(json.dumps(json.loads(match.group(1) if match else choice['content'])), status_code=200, mimetype='application/json', charset='utf-8')

            return func.HttpResponse(status_code=503, mimetype='', charset='')
            
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
