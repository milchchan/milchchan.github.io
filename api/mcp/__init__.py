import json
import logging
from datetime import datetime, timedelta, timezone
from shared.cache import get_cache, scan_cache

import azure.functions as func


def main(req: func.HttpRequest) -> func.HttpResponse:
    SUPPORTED_VERSION = '2025-06-18'

    if req.method == 'GET':
        return func.HttpResponse(status_code=405, headers={'MCP-Protocol-Version': SUPPORTED_VERSION}, mimetype='', charset='')
    
    else:
        if req.headers.get('Content-Type') != 'application/json':
            return func.HttpResponse(json.dumps({'jsonrpc': '2.0', 'id': identifier, 'error': {'code': -32600, 'message': 'Invalid Request'}}), status_code=200, headers={'MCP-Protocol-Version': SUPPORTED_VERSION}, mimetype='application/json', charset='utf-8')
        
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
            if identifier is None or params is None or not isinstance(params, dict) or 'protocolVersion' not in params or datetime.strptime(params['protocolVersion'], '%Y-%m-%d') < datetime.strptime(SUPPORTED_VERSION, '%Y-%m-%d') or 'capabilities' not in params or not isinstance(params['capabilities'], dict):
                return func.HttpResponse(json.dumps({'jsonrpc': '2.0', 'id': identifier, 'error': {'code': -32600, 'message': 'Invalid Request'}}), status_code=200, headers={'MCP-Protocol-Version': SUPPORTED_VERSION}, mimetype='application/json', charset='utf-8')
            else:
                return func.HttpResponse(json.dumps({'jsonrpc': '2.0', 'id': identifier, 'result': {
                    'protocolVersion': SUPPORTED_VERSION,
                    'capabilities': { "tools": { "listChanged": False } },
                    'serverInfo': {'name': 'milchchan-mcp', 'version': '1.0.0'}
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
                                'properties': {
                                    'limit': {
                                        'type': 'integer',
                                        'minimum': 1,
                                        'maximum': 50,
                                        'description': 'Maximum items'
                                    }
                                },
                                'required': []
                            }
                        }]
                }}), status_code=200, headers={'MCP-Protocol-Version': SUPPORTED_VERSION}, mimetype='application/json', charset='utf-8')
        elif identifier is None:
            return func.HttpResponse(json.dumps({'jsonrpc': '2.0', 'id': identifier, 'error': {'code': -32600, 'message': 'Invalid Request'}}), status_code=200, headers={'MCP-Protocol-Version': SUPPORTED_VERSION}, mimetype='application/json', charset='utf-8')
        elif method != 'tools/call':
            return func.HttpResponse(json.dumps({'jsonrpc': '2.0', 'id': identifier, 'error': {'code': -32601, 'message': 'Method not found'}}), status_code=200, headers={'MCP-Protocol-Version': SUPPORTED_VERSION}, mimetype='application/json', charset='utf-8')

        if params is None or not isinstance(params, dict) or 'name' not in params or params['name'] != 'news' or 'arguments' not in params or not isinstance(params['arguments'], dict):
            return func.HttpResponse(json.dumps({'jsonrpc': '2.0', 'id': identifier, 'error': {'code': -32602, 'message': 'Invalid params'}}), status_code=200, headers={'MCP-Protocol-Version': SUPPORTED_VERSION}, mimetype='application/json', charset='utf-8')
        
        arguments = params['arguments']
        limit = int(arguments['limit']) if 'limit' in arguments else 50
        cutoff = datetime.now(timezone.utc) - timedelta(hours=24)    
        merged_data = []

        try:
            for cache_name in scan_cache(f'fetch/*'):
                cached_data = json.loads(get_cache(cache_name))
                
                if isinstance(cached_data, list):
                    for item in cached_data:
                        if isinstance(item, dict) and 'content' in item and 'timestamp' in item:
                            timestamp = datetime.fromisoformat(item['timestamp'].replace('Z', '+00:00'))

                            if timestamp > cutoff:
                                merged_data.append({'content': item['content'], 'timestamp': timestamp})

            merged_data.sort(key=lambda x: x['timestamp'], reverse=True)
            merged_data = merged_data[:limit]

            for item in merged_data:
                item['timestamp'] = item['timestamp'].strftime('%Y-%m-%dT%H:%M:%SZ')
            
            return func.HttpResponse(json.dumps({'jsonrpc': '2.0', 'id': identifier, 'result': {'content': [{'type': 'text', 'text': f'```json\n{json.dumps(merged_data, ensure_ascii=False)}\n```'}], 'isError': False}}, ensure_ascii=False), status_code=200, headers={'MCP-Protocol-Version': SUPPORTED_VERSION}, mimetype='application/json', charset='utf-8')
        
        except Exception as e:
            logging.error(f'{e}')

            return func.HttpResponse(json.dumps({'jsonrpc': '2.0', 'id': identifier, 'error': {'code': -32603, 'message': 'Internal error', 'data': str(e)}}), status_code=200, headers={'MCP-Protocol-Version': SUPPORTED_VERSION}, mimetype='application/json', charset='utf-8')
