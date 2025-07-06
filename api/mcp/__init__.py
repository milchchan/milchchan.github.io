import re
import os
import json
import logging
from urllib.parse import unquote
from urllib.request import urlopen, Request
from shared.cache import get_cache, set_cache

import azure.functions as func


def main(req: func.HttpRequest) -> func.HttpResponse:
    SUPPORTED_VERSION = '2025-03-26'

    if req.method == 'GET':
        return func.HttpResponse(status_code=405, headers={'MCP-Protocol-Version': SUPPORTED_VERSION}, mimetype='', charset='')
    
    else:
        try:
            body = json.loads(req.get_body())
        except json.JSONDecodeError as e:
            return func.HttpResponse(json.dumps({'jsonrpc': '2.0', 'id': None, 'error': {'code': -32700, 'message': 'Parse error', 'data': str(e)}}), status_code=200, headers={'MCP-Protocol-Version': SUPPORTED_VERSION}, mimetype='application/json', charset='utf-8')
        
        jsonrpc = body.get('jsonrpc')
        identifier = body.get('id')
        method = body.get('method')
        params = body.get('params')

        if jsonrpc != '2.0' or method is None:
            return func.HttpResponse(json.dumps({'jsonrpc': '2.0', 'id': identifier, 'error': {'code': -32600, 'message': 'Invalid Request'}}), status_code=200, headers={'MCP-Protocol-Version': SUPPORTED_VERSION}, mimetype='application/json', charset='utf-8')

        if method == 'initialize':
            if identifier is None or params is None or not isinstance(params, dict) or 'protocolVersion' not in params or params['protocolVersion'] != SUPPORTED_VERSION or 'capabilities' not in params or not isinstance(params['capabilities'], dict):
                return func.HttpResponse(json.dumps({'jsonrpc': '2.0', 'id': identifier, 'error': {'code': -32600, 'message': 'Invalid Request'}}), status_code=200, headers={'MCP-Protocol-Version': SUPPORTED_VERSION}, mimetype='application/json', charset='utf-8')
            else:
                return func.HttpResponse(json.dumps({'jsonrpc': '2.0', 'id': identifier, 'result': {
                    'protocolVersion': SUPPORTED_VERSION,
                    'capabilities': { "tools": { "listChanged": False } },
                    'serverInfo': {'name': 'milchchan-mcp', 'version': '0.1.0'}
                }}), status_code=200, headers={'MCP-Protocol-Version': SUPPORTED_VERSION}, mimetype='application/json', charset='utf-8')
        elif method == 'notifications/initialized':
            return func.HttpResponse(status_code=202, headers={'MCP-Protocol-Version': SUPPORTED_VERSION}, mimetype='', charset='')
        elif method == 'tools/list':
            if identifier is None:
                return func.HttpResponse(json.dumps({'jsonrpc': '2.0', 'id': identifier, 'error': {'code': -32600, 'message': 'Invalid Request'}}), status_code=200, headers={'MCP-Protocol-Version': SUPPORTED_VERSION}, mimetype='application/json', charset='utf-8')
            else:
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
                        }]
                }}), status_code=200, headers={'MCP-Protocol-Version': SUPPORTED_VERSION}, mimetype='application/json', charset='utf-8')
        elif identifier is None:
            return func.HttpResponse(json.dumps({'jsonrpc': '2.0', 'id': identifier, 'error': {'code': -32600, 'message': 'Invalid Request'}}), status_code=200, headers={'MCP-Protocol-Version': SUPPORTED_VERSION}, mimetype='application/json', charset='utf-8')
        elif method != 'tools/call':
            return func.HttpResponse(json.dumps({'jsonrpc': '2.0', 'id': identifier, 'error': {'code': -32601, 'message': 'Method not found'}}), status_code=200, headers={'MCP-Protocol-Version': SUPPORTED_VERSION}, mimetype='application/json', charset='utf-8')

        if params is None or not isinstance(params, dict) or 'name' not in params or params['name'] != 'news' or 'arguments' not in params or not isinstance(params['arguments'], dict):# or 'url' not in params['arguments']:
            return func.HttpResponse(json.dumps({'jsonrpc': '2.0', 'id': identifier, 'error': {'code': -32602, 'message': 'Invalid params'}}), status_code=200, headers={'MCP-Protocol-Version': SUPPORTED_VERSION}, mimetype='application/json', charset='utf-8')
        
        arguments = params['arguments']

        try:
            cache_name = 'news'
            cached_data = get_cache(cache_name)

            if cached_data is None:
                #with urlopen(Request(unquote(arguments['url']), method='GET', headers={'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; Win64; x64; rv:47.0) Gecko/20100101 Firefox/47.0'})) as response:
                with urlopen(Request(unquote('https://news.yahoo.co.jp/rss/topics/top-picks.xml'), method='GET', headers={'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; Win64; x64; rv:47.0) Gecko/20100101 Firefox/47.0'})) as response:
                    response_body = response.read().decode('utf-8')

                with urlopen(Request(unquote('https://milchchan.com/fetch.txt'), method='GET', headers={'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; Win64; x64; rv:47.0) Gecko/20100101 Firefox/47.0'})) as response:
                    system_prompt = response.read().decode('utf-8')

                api_key = None

                if 'X-Authorization' in req.headers:
                    match = re.match('Bearer\\s(.+)', req.headers['X-Authorization'])

                    if match:
                        api_key = match.group(1)

                else:
                    api_key = os.environ['OPENAI_API_KEY']

                messages = [{'role': 'developer', 'content': system_prompt}, {'role': 'user', 'content': response_body}]
                request = Request('https://api.openai.com/v1/chat/completions', data=json.dumps({'model': arguments['model'] if 'model' in arguments else os.environ['OPENAI_MODEL'], 'messages': messages, 'temperature': arguments['temperature']} if 'temperature' in arguments else {'model': arguments['model'] if 'model' in arguments else os.environ['OPENAI_MODEL'], 'messages': messages}).encode('utf-8'), method='POST', headers={'Authorization': f'Bearer {api_key}', 'Content-Type': 'application/json'})
                result = ''
                
                with urlopen(request) as response:
                    for choice in json.loads(response.read().decode('utf-8'))['choices']:
                        if choice['message']['role'] == 'assistant':
                            match = re.match('(?:```json)?(?:[^\\[]+)?(\\[.+\\]).*(?:```)?', choice['message']['content'], flags=(re.MULTILINE|re.DOTALL))
                            result = f"```json\n{match.group(1) if match else choice['message']['content']}\n```"
                            set_cache(cache_name, result, expire=1800)
                        
                        else:
                            return func.HttpResponse(json.dumps({'jsonrpc': '2.0', 'id': identifier, 'error': {'code': -32603, 'message': 'Internal error'}}), status_code=200, headers={'MCP-Protocol-Version': SUPPORTED_VERSION}, mimetype='application/json', charset='utf-8')

                return func.HttpResponse(json.dumps({'jsonrpc': '2.0', 'id': identifier, 'result': {'content': [{'type': 'text', 'text': result}], 'isError': False}}, ensure_ascii=False), status_code=200, headers={'MCP-Protocol-Version': SUPPORTED_VERSION}, mimetype='application/json', charset='utf-8')
            
            else:
                return func.HttpResponse(json.dumps({'jsonrpc': '2.0', 'id': identifier, 'result': {'content': [{'type': 'text', 'text': cached_data}], 'isError': False}}, ensure_ascii=False), status_code=200, headers={'MCP-Protocol-Version': SUPPORTED_VERSION}, mimetype='application/json', charset='utf-8')
        
        except Exception as e:
            logging.error(f'{e}')

            return func.HttpResponse(json.dumps({'jsonrpc': '2.0', 'id': identifier, 'error': {'code': -32603, 'message': 'Internal error', 'data': str(e)}}), status_code=200, headers={'MCP-Protocol-Version': SUPPORTED_VERSION}, mimetype='application/json', charset='utf-8')
