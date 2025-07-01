import re
import os
import json
import logging
from uuid import uuid4
from urllib.parse import unquote
from urllib.request import urlopen, Request

import azure.functions as func


def main(req: func.HttpRequest) -> func.HttpResponse:
    try:
        body = json.loads(req.get_body())
    except json.JSONDecodeError as e:
        return func.HttpResponse(json.dumps({'jsonrpc': '2.0', 'id': None, 'error': {'code': -32700, 'message': 'Parse error', 'data': str(e)}}), status_code=400, mimetype='application/json', charset='utf-8')
    
    jsonrpc = body.get('jsonrpc')
    identifier = body.get('id')
    method = body.get('method')
    params = body.get('params')

    if jsonrpc != '2.0' or identifier is None or method is None:
        return func.HttpResponse(json.dumps({'jsonrpc': '2.0', 'id': identifier, 'error': {'code': -32600, 'message': 'Invalid Request'}}), status_code=400, mimetype='application/json', charset='utf-8')

    if method != 'invoke':
        return func.HttpResponse(json.dumps({'jsonrpc': '2.0', 'id': identifier, 'error': {'code': -32601, 'message': 'Method not found'}}), status_code=400, mimetype='application/json', charset='utf-8')

    if params is None or not isinstance(params, dict) or 'tool' not in params or params['tool'] != 'fetch' or 'arguments' not in params or not isinstance(params['arguments'], dict) or 'url' not in params['arguments']:
        return func.HttpResponse(json.dumps({'jsonrpc': '2.0', 'id': identifier, 'error': {'code': -32602, 'message': 'Invalid params'}}), status_code=400, mimetype='application/json', charset='utf-8')
    
    try:
        result = []

        with urlopen(Request(unquote(params['url']), method='GET')) as response:
            response_body = response.read().decode('utf-8')

        system_prompt = '''内容を下記の出力形式に変換してください。

# 出力形式
出力形式は以下のJSONフォーマットとします。このフォーマット以外で会話しないでください。
```json
[
 "content":  "内容",
 "url": "<URL>",
 "timestamp": "<ISO 8601形式>"
]
```'''

        api_key = None

        if 'X-Authorization' in req.headers:
            match = re.match('Bearer\\s(.+)', req.headers['X-Authorization'])

            if match:
                api_key = match.group(1)

        else:
            api_key = os.environ['OPENAI_API_KEY']

        messages = [{'role': 'developer', 'content': system_prompt}, {'role': 'user', 'content': response_body}]
        request = Request('https://api.openai.com/v1/chat/completions', data=json.dumps({'model': params['model'] if 'model' in params else os.environ['OPENAI_MODEL'], 'messages': messages, 'temperature': params['temperature']} if 'temperature' in params else {'model': params['model'] if 'model' in params else os.environ['OPENAI_MODEL'], 'messages': messages}).encode('utf-8'), method='POST', headers={'Authorization': f'Bearer {api_key}', 'Content-Type': 'application/json'})

        with urlopen(request) as response:
            for choice in json.loads(response.read().decode('utf-8'))['choices']:
                if choice['message']['role'] == 'assistant':
                    match = re.match('(?:```json)?(?:[^\\[]+)?(\\[.+\\]).*(?:```)?', choice['message']['content'], flags=(re.MULTILINE|re.DOTALL))
                    result = json.loads(match.group(1) if match else choice['message']['content'])
                
                else:
                    return func.HttpResponse(json.dumps({'jsonrpc': '2.0', 'id': identifier, 'error': {'code': -32603, 'message': 'Internal error'}}), status_code=400, mimetype='application/json', charset='utf-8')

        return func.HttpResponse(json.dumps({'jsonrpc': '2.0', 'id': identifier, 'result': result}), status_code=201, mimetype='application/json', charset='utf-8')
    
    except Exception as e:
        logging.error(f'{e}')

        return func.HttpResponse(json.dumps({'jsonrpc': '2.0', 'id': identifier, 'error': {'code': -32603, 'message': 'Internal error', 'data': str(e)}}), status_code=400, mimetype='application/json', charset='utf-8')
