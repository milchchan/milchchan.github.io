import re
import os
import json
import logging
from urllib.parse import unquote
from urllib.request import urlopen, Request
from shared.cache import get_cache, set_cache

import azure.functions as func


def main(req: func.HttpRequest) -> func.HttpResponse:
    try:
        body = json.loads(req.get_body())
    except json.JSONDecodeError as e:
        return func.HttpResponse(json.dumps({'jsonrpc': '2.0', 'id': None, 'error': {'code': -32700, 'message': 'Parse error', 'data': str(e)}}), status_code=400, mimetype='application/json', charset='utf-8')
    
    jsonrpc = body.get('jsonrpc')
    identifier = body.get('id')
    method = body.get('method')

    if jsonrpc != '2.0' or identifier is None or method is None:
        return func.HttpResponse(json.dumps({'jsonrpc': '2.0', 'id': identifier, 'error': {'code': -32600, 'message': 'Invalid Request'}}), status_code=400, mimetype='application/json', charset='utf-8')

    if method == 'tools/list':
        return func.HttpResponse(json.dumps({'jsonrpc': '2.0', 'id': identifier, 'result': {
            'tools': [
                {
                    'name': 'news',
                    'description': 'Retrieves the latest news',
                    'inputSchema': {
                        'type': 'object',
                        'properties': {},
                        'required': []
                    }
                }],
            'nextCursor': None  
        }}), status_code=200, mimetype='application/json', charset='utf-8')
    
    elif method != 'tools/call':
        return func.HttpResponse(json.dumps({'jsonrpc': '2.0', 'id': identifier, 'error': {'code': -32601, 'message': 'Method not found'}}), status_code=400, mimetype='application/json', charset='utf-8')

    params = body.get('params')
    
    if params is None or not isinstance(params, dict) or 'name' not in params or params['name'] != 'news' or 'arguments' not in params or not isinstance(params['arguments'], dict):# or 'url' not in params['arguments']:
        return func.HttpResponse(json.dumps({'jsonrpc': '2.0', 'id': identifier, 'error': {'code': -32602, 'message': 'Invalid params'}}), status_code=400, mimetype='application/json', charset='utf-8')
    
    arguments = params['arguments']

    try:
        cache_name = 'news'
        cached_data = get_cache(cache_name)

        if cached_data is None:
            result = ''

            #with urlopen(Request(unquote(arguments['url']), method='GET')) as response:
            with urlopen(Request(unquote('https://news.yahoo.co.jp/rss/topics/top-picks.xml'), method='GET')) as response:
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
            request = Request('https://api.openai.com/v1/chat/completions', data=json.dumps({'model': arguments['model'] if 'model' in arguments else os.environ['OPENAI_MODEL'], 'messages': messages, 'temperature': arguments['temperature']} if 'temperature' in arguments else {'model': arguments['model'] if 'model' in arguments else os.environ['OPENAI_MODEL'], 'messages': messages}).encode('utf-8'), method='POST', headers={'Authorization': f'Bearer {api_key}', 'Content-Type': 'application/json'})
            
            with urlopen(request) as response:
                for choice in json.loads(response.read().decode('utf-8'))['choices']:
                    if choice['message']['role'] == 'assistant':
                        match = re.match('(?:```json)?(?:[^\\[]+)?(\\[.+\\]).*(?:```)?', choice['message']['content'], flags=(re.MULTILINE|re.DOTALL))
                        result = f"```json\n{match.group(1) if match else choice['message']['content']}\n```"
                        set_cache(cache_name, result, expire=1800)
                    
                    else:
                        return func.HttpResponse(json.dumps({'jsonrpc': '2.0', 'id': identifier, 'error': {'code': -32603, 'message': 'Internal error'}}), status_code=400, mimetype='application/json', charset='utf-8')

            return func.HttpResponse(json.dumps({'jsonrpc': '2.0', 'id': identifier, 'result': {'content': [{'type': 'text', 'text': result}], 'isError': False}}, ensure_ascii=False), status_code=200, mimetype='application/json', charset='utf-8')
        
        else:
            return func.HttpResponse(json.dumps({'jsonrpc': '2.0', 'id': identifier, 'result': {'content': [{'type': 'text', 'text': cached_data}], 'isError': False}}, ensure_ascii=False), status_code=200, mimetype='application/json', charset='utf-8')
    
    except Exception as e:
        logging.error(f'{e}')

        return func.HttpResponse(json.dumps({'jsonrpc': '2.0', 'id': identifier, 'error': {'code': -32603, 'message': 'Internal error', 'data': str(e)}}), status_code=400, mimetype='application/json', charset='utf-8')
