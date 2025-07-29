import os
import json
import logging
import os
import jwt
from datetime import datetime, time, timezone
from urllib.request import urlopen, Request
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
                        },
                        {
                            'name': 'weather',
                            'description': 'Retrieves current weather',
                            'inputSchema': {
                                'type': 'object',
                                'properties': {
                                    'latitude': {
                                        'type': 'number',
                                        'minimum': -90,
                                        'maximum': 90,
                                        'description': 'Latitude'
                                    },
                                    'longitude': {
                                        'type': 'number',
                                        'minimum': -180,
                                        'maximum': 180,
                                        'description': 'Longitude'
                                    }
                                },
                                'required': ['latitude', 'longitude']
                            }
                        }]
                }}), status_code=200, headers={'MCP-Protocol-Version': SUPPORTED_VERSION}, mimetype='application/json', charset='utf-8')
        elif identifier is None:
            return func.HttpResponse(json.dumps({'jsonrpc': '2.0', 'id': identifier, 'error': {'code': -32600, 'message': 'Invalid Request'}}), status_code=200, headers={'MCP-Protocol-Version': SUPPORTED_VERSION}, mimetype='application/json', charset='utf-8')
        elif method != 'tools/call':
            return func.HttpResponse(json.dumps({'jsonrpc': '2.0', 'id': identifier, 'error': {'code': -32601, 'message': 'Method not found'}}), status_code=200, headers={'MCP-Protocol-Version': SUPPORTED_VERSION}, mimetype='application/json', charset='utf-8')

        if params is None or not isinstance(params, dict) or 'name' not in params or 'arguments' not in params or not isinstance(params['arguments'], dict):
            return func.HttpResponse(json.dumps({'jsonrpc': '2.0', 'id': identifier, 'error': {'code': -32602, 'message': 'Invalid params'}}), status_code=200, headers={'MCP-Protocol-Version': SUPPORTED_VERSION}, mimetype='application/json', charset='utf-8')
        
        arguments = params['arguments']

        if params['name'] == 'news':
            limit = int(arguments['limit']) if 'limit' in arguments else 10
            merged_data = []
            
            try:
                for cache_name in scan_cache(f'fetch/*'):
                    cached_data = json.loads(get_cache(cache_name))
                    
                    if isinstance(cached_data, dict) and 'data' in cached_data and 'timestamp' in cached_data and isinstance(cached_data['data'], list):
                        for item in cached_data['data']:
                            if isinstance(item, dict) and 'content' in item and 'url' in item and 'timestamp' in item:
                                merged_data.append({'content': item['content'], 'url': item['url'], 'timestamp': datetime.combine(datetime.now(timezone.utc).date(), time(0, 0), tzinfo=timezone.utc) if item['timestamp'] is None else datetime.fromisoformat(item['timestamp'].replace('Z', '+00:00'))})

                recent_data = sorted(merged_data, key=lambda x: x['timestamp'], reverse=True)
                recent_data = recent_data[:limit]
                
                for item in recent_data:
                    item['timestamp'] = item['timestamp'].strftime('%Y-%m-%dT%H:%M:%SZ')
                
                return func.HttpResponse(json.dumps({'jsonrpc': '2.0', 'id': identifier, 'result': {'content': [{'type': 'text', 'text': f'```json\n{json.dumps(recent_data, ensure_ascii=False)}\n```'}], 'isError': False}}, ensure_ascii=False), status_code=200, headers={'MCP-Protocol-Version': SUPPORTED_VERSION}, mimetype='application/json', charset='utf-8')
            
            except Exception as e:
                logging.error(f'{e}')

                return func.HttpResponse(json.dumps({'jsonrpc': '2.0', 'id': identifier, 'error': {'code': -32603, 'message': 'Internal error', 'data': str(e)}}), status_code=200, headers={'MCP-Protocol-Version': SUPPORTED_VERSION}, mimetype='application/json', charset='utf-8')

        elif params['name'] == 'weather':
            try:
                team_id = os.environ['WEATHERKIT_TEAM_ID']
                services_id = os.environ['WEATHERKIT_SERVICES_ID']
                private_key = os.environ['WEATHERKIT_PRIVATE_KEY'].replace('\\n', '\n')
                key_id = os.environ['WEATHERKIT_KEY_ID']
                now = (datetime.combine(datetime.now(timezone.utc).date(), time(0, 0), tzinfo=timezone.utc) if item['timestamp'] is None else datetime.fromisoformat(item['timestamp'].replace('Z', '+00:00'))).timestamp()
                token = jwt.encode({
                    'iss': team_id,
                    'iat': int(now),
                    'exp': int(now + 1800),
                    'sub': services_id
                }, private_key, algorithm='ES256', headers={
                    'alg': 'ES256',
                    'type':'JWT',
                    'kid': key_id,
                    'id': f'{team_id}.{services_id}'
                })
                
                with urlopen(Request(f'https://weatherkit.apple.com/api/v1/weather/en/{str(arguments["latitude"])}/{str(arguments["longitude"])}?dataSets=currentWeather', method='GET', headers={'Content-Type': 'application/json', 'Authorization': f'Bearer {token}'})) as response:
                    return func.HttpResponse(json.dumps({'jsonrpc': '2.0', 'id': identifier, 'result': {'content': [{'type': 'text', 'text': f'```json\n{response.read().decode("utf-8")}\n```'}], 'isError': False}}, ensure_ascii=False), status_code=200, headers={'MCP-Protocol-Version': SUPPORTED_VERSION}, mimetype='application/json', charset='utf-8')
                    
            except Exception as e:
                logging.error(f'{e}')

                return func.HttpResponse(json.dumps({'jsonrpc': '2.0', 'id': identifier, 'error': {'code': -32603, 'message': 'Internal error', 'data': str(e)}}), status_code=200, headers={'MCP-Protocol-Version': SUPPORTED_VERSION}, mimetype='application/json', charset='utf-8')
        
        else:
            return func.HttpResponse(json.dumps({'jsonrpc': '2.0', 'id': identifier, 'error': {'code': -32602, 'message': 'Invalid params'}}), status_code=200, headers={'MCP-Protocol-Version': SUPPORTED_VERSION}, mimetype='application/json', charset='utf-8')
