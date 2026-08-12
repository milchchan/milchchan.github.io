import time
import os
import json
import logging
import base64
import binascii
import hmac
import re
import jwt
from datetime import datetime, time as dtime, timezone
from urllib.parse import urlparse
from urllib.request import urlopen, Request
from shared.cache import get_cache, scan_cache

import azure.functions as func


def main(req: func.HttpRequest) -> func.HttpResponse:
    SUPPORTED_VERSION = '2026-07-28'
    SERVER_INFO = {'name': 'milchchan-mcp', 'version': '1.0.0'}
    RESPONSE_HEADERS = {'MCP-Protocol-Version': SUPPORTED_VERSION}
    allowed_origins = [origin.strip() for origin in os.environ.get('MCP_ALLOWED_ORIGINS', 'https://milchchan.com,https://merkuchan.com').split(',') if origin.strip()]
    headers = {name.lower(): value for name, value in req.headers.items()}
    origin = headers.get('origin')

    def is_plain_header(value):
        return isinstance(value, str) and value == value.strip() and not value.startswith('=?base64?') and all(0x20 <= ord(character) <= 0x7e for character in value)

    def decode_header(value):
        if not isinstance(value, str):
            return None

        if value.startswith('=?base64?') and value.endswith('?='):
            try:
                return base64.b64decode(value[9:-2], validate=True).decode('utf-8')
            except (binascii.Error, UnicodeDecodeError):
                return None

        if value != value.strip() or any((ord(character) < 0x20 and character != '\t') or ord(character) > 0x7e for character in value):
            return None

        return value

    def sanitize_text(value, max_length):
        return re.sub(r'[\x00-\x08\x0b\x0c\x0e-\x1f\x7f]', '', value)[:max_length]

    def reject_constant(value):
        raise ValueError(f'Invalid JSON constant: {value}')

    if origin is not None and origin not in allowed_origins:
        return func.HttpResponse(status_code=403, headers=RESPONSE_HEADERS, mimetype='', charset='')

    api_key = os.environ.get('MCP_API_KEY')

    if api_key is not None and not hmac.compare_digest(headers.get('authorization', ''), f'Bearer {api_key}'):
        return func.HttpResponse(status_code=401, headers={**RESPONSE_HEADERS, 'WWW-Authenticate': 'Bearer'}, mimetype='', charset='')

    if req.method != 'POST':
        return func.HttpResponse(status_code=405, headers=RESPONSE_HEADERS, mimetype='', charset='')

    if headers.get('content-type', '').split(';')[0].strip().lower() != 'application/json':
        return func.HttpResponse(json.dumps({'jsonrpc': '2.0', 'id': None, 'error': {'code': -32600, 'message': 'Invalid Request'}}), status_code=400, headers=RESPONSE_HEADERS, mimetype='application/json', charset='utf-8')

    try:
        body = json.loads(req.get_body(), parse_constant=reject_constant)
    except (TypeError, UnicodeDecodeError, ValueError) as e:
        return func.HttpResponse(json.dumps({'jsonrpc': '2.0', 'id': None, 'error': {'code': -32700, 'message': 'Parse error', 'data': str(e)}}), status_code=400, headers=RESPONSE_HEADERS, mimetype='application/json', charset='utf-8')

    if not isinstance(body, dict):
        return func.HttpResponse(json.dumps({'jsonrpc': '2.0', 'id': None, 'error': {'code': -32600, 'message': 'Invalid Request'}}), status_code=400, headers=RESPONSE_HEADERS, mimetype='application/json', charset='utf-8')

    jsonrpc = body.get('jsonrpc')
    identifier = body.get('id')
    method = body.get('method')
    params = body.get('params')

    if jsonrpc != '2.0' or isinstance(identifier, bool) or not isinstance(identifier, (str, int)) or not isinstance(method, str) or not isinstance(params, dict):
        return func.HttpResponse(json.dumps({'jsonrpc': '2.0', 'id': identifier if isinstance(identifier, (str, int)) and not isinstance(identifier, bool) else None, 'error': {'code': -32600, 'message': 'Invalid Request'}}), status_code=400, headers=RESPONSE_HEADERS, mimetype='application/json', charset='utf-8')

    def tool_error(message):
        return func.HttpResponse(json.dumps({'jsonrpc': '2.0', 'id': identifier, 'result': {'resultType': 'complete', 'content': [{'type': 'text', 'text': sanitize_text(message, 1000)}], 'isError': True, '_meta': {'io.modelcontextprotocol/serverInfo': SERVER_INFO}}}, ensure_ascii=False), status_code=200, headers=RESPONSE_HEADERS, mimetype='application/json', charset='utf-8')

    meta = params.get('_meta')

    if not isinstance(meta, dict) or not isinstance(meta.get('io.modelcontextprotocol/protocolVersion'), str) or not isinstance(meta.get('io.modelcontextprotocol/clientCapabilities'), dict):
        return func.HttpResponse(json.dumps({'jsonrpc': '2.0', 'id': identifier, 'error': {'code': -32602, 'message': 'Invalid params'}}), status_code=400, headers=RESPONSE_HEADERS, mimetype='application/json', charset='utf-8')

    progress_token = meta.get('progressToken')
    log_level = meta.get('io.modelcontextprotocol/logLevel')

    if (progress_token is not None and (isinstance(progress_token, bool) or not isinstance(progress_token, (str, int, float)))) or (log_level is not None and log_level not in ('debug', 'info', 'notice', 'warning', 'error', 'critical', 'alert', 'emergency')):
        return func.HttpResponse(json.dumps({'jsonrpc': '2.0', 'id': identifier, 'error': {'code': -32602, 'message': 'Invalid params'}}), status_code=400, headers=RESPONSE_HEADERS, mimetype='application/json', charset='utf-8')

    client_info = meta.get('io.modelcontextprotocol/clientInfo')

    if client_info is not None and (not isinstance(client_info, dict) or not isinstance(client_info.get('name'), str) or not isinstance(client_info.get('version'), str)):
        return func.HttpResponse(json.dumps({'jsonrpc': '2.0', 'id': identifier, 'error': {'code': -32602, 'message': 'Invalid params'}}), status_code=400, headers=RESPONSE_HEADERS, mimetype='application/json', charset='utf-8')

    if params.get('requestState') is not None and not isinstance(params['requestState'], str):
        return func.HttpResponse(json.dumps({'jsonrpc': '2.0', 'id': identifier, 'error': {'code': -32602, 'message': 'Invalid params'}}), status_code=200, headers=RESPONSE_HEADERS, mimetype='application/json', charset='utf-8')

    request_protocol_version = headers.get('mcp-protocol-version')
    request_method = headers.get('mcp-method')
    body_protocol_version = meta['io.modelcontextprotocol/protocolVersion']

    if not is_plain_header(request_protocol_version) or not is_plain_header(request_method) or request_protocol_version != body_protocol_version or request_method != method:
        return func.HttpResponse(json.dumps({'jsonrpc': '2.0', 'id': identifier, 'error': {'code': -32020, 'message': 'Header mismatch'}}), status_code=400, headers=RESPONSE_HEADERS, mimetype='application/json', charset='utf-8')

    if request_protocol_version != SUPPORTED_VERSION:
        return func.HttpResponse(json.dumps({'jsonrpc': '2.0', 'id': identifier, 'error': {'code': -32022, 'message': 'Unsupported protocol version', 'data': {'supported': [SUPPORTED_VERSION], 'requested': request_protocol_version}}}), status_code=400, headers=RESPONSE_HEADERS, mimetype='application/json', charset='utf-8')

    request_name = params.get('uri') if method == 'resources/read' else params.get('name')
    header_name = decode_header(headers.get('mcp-name'))

    if method in ('tools/call', 'resources/read', 'prompts/get') and (not isinstance(request_name, str) or header_name != request_name):
        return func.HttpResponse(json.dumps({'jsonrpc': '2.0', 'id': identifier, 'error': {'code': -32020, 'message': 'Header mismatch'}}), status_code=400, headers=RESPONSE_HEADERS, mimetype='application/json', charset='utf-8')

    if method == 'server/discover':
        return func.HttpResponse(json.dumps({'jsonrpc': '2.0', 'id': identifier, 'result': {
            'resultType': 'complete',
            'supportedVersions': [SUPPORTED_VERSION],
            'capabilities': {'tools': {'listChanged': False}},
            '_meta': {'io.modelcontextprotocol/serverInfo': SERVER_INFO},
            'ttlMs': 3600000,
            'cacheScope': 'public'
        }}), status_code=200, headers=RESPONSE_HEADERS, mimetype='application/json', charset='utf-8')
    elif method == 'tools/list':
        if 'cursor' in params and not isinstance(params['cursor'], str):
            return func.HttpResponse(json.dumps({'jsonrpc': '2.0', 'id': identifier, 'error': {'code': -32602, 'message': 'Invalid params'}}), status_code=200, headers=RESPONSE_HEADERS, mimetype='application/json', charset='utf-8')

        return func.HttpResponse(json.dumps({'jsonrpc': '2.0', 'id': identifier, 'result': {
                    'resultType': 'complete',
                    'tools': [
                        {
                            'name': 'now',
                            'description': 'Returns the current UTC time',
                            'inputSchema': {
                                'type': 'object',
                                'properties': {},
                                'required': []
                            }
                        },
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
                        }],
                    '_meta': {'io.modelcontextprotocol/serverInfo': SERVER_INFO},
                    'ttlMs': 300000,
                    'cacheScope': 'public'
                }}), status_code=200, headers=RESPONSE_HEADERS, mimetype='application/json', charset='utf-8')
    elif method != 'tools/call':
        return func.HttpResponse(json.dumps({'jsonrpc': '2.0', 'id': identifier, 'error': {'code': -32601, 'message': 'Method not found'}}), status_code=404, headers=RESPONSE_HEADERS, mimetype='application/json', charset='utf-8')

    if 'arguments' in params and not isinstance(params['arguments'], dict):
        return func.HttpResponse(json.dumps({'jsonrpc': '2.0', 'id': identifier, 'error': {'code': -32602, 'message': 'Invalid params'}}), status_code=200, headers=RESPONSE_HEADERS, mimetype='application/json', charset='utf-8')
        
    arguments = params.get('arguments', {})

    if params['name'] not in ('now', 'news', 'weather'):
        return func.HttpResponse(json.dumps({'jsonrpc': '2.0', 'id': identifier, 'error': {'code': -32602, 'message': 'Invalid params'}}), status_code=200, headers=RESPONSE_HEADERS, mimetype='application/json', charset='utf-8')

    if params['name'] == 'now':
        return func.HttpResponse(json.dumps({'jsonrpc': '2.0', 'id': identifier, 'result': {'resultType': 'complete', 'content': [{'type': 'text', 'text': datetime.now(timezone.utc).strftime('%Y-%m-%dT%H:%M:%SZ')}], 'isError': False, '_meta': {'io.modelcontextprotocol/serverInfo': SERVER_INFO}}}, ensure_ascii=False), status_code=200, headers=RESPONSE_HEADERS, mimetype='application/json', charset='utf-8')

    elif params['name'] == 'news':
        limit = arguments['limit'] if 'limit' in arguments else 10

        if isinstance(limit, bool) or not isinstance(limit, int) or limit < 1 or limit > 50:
            return tool_error('Invalid limit: expected an integer between 1 and 50.')

        merged_data = []

        try:
            for cache_name in scan_cache(f'fetch/*'):
                cached_raw = get_cache(cache_name)

                if cached_raw is None:
                    continue

                try:
                    cached_data = json.loads(cached_raw)
                except (TypeError, json.JSONDecodeError):
                    continue
                
                if isinstance(cached_data, dict) and 'data' in cached_data and 'timestamp' in cached_data and isinstance(cached_data['data'], list):
                    for item in cached_data['data']:
                        if isinstance(item, dict) and isinstance(item.get('content'), str) and isinstance(item.get('url'), str) and 'timestamp' in item:
                            try:
                                timestamp = datetime.combine(datetime.now(timezone.utc).date(), dtime(0, 0), tzinfo=timezone.utc) if item['timestamp'] is None else datetime.fromisoformat(item['timestamp'].replace('Z', '+00:00'))
                            except (AttributeError, TypeError, ValueError):
                                continue

                            url = urlparse(item['url'])

                            if url.scheme not in ('http', 'https') or not url.netloc:
                                continue

                            merged_data.append({'content': sanitize_text(item['content'], 10000), 'url': sanitize_text(item['url'], 2048), 'timestamp': timestamp})

            recent_data = sorted(merged_data, key=lambda x: x['timestamp'], reverse=True)
            recent_data = recent_data[:limit]

            for item in recent_data:
                item['timestamp'] = item['timestamp'].strftime('%Y-%m-%dT%H:%M:%SZ')

            return func.HttpResponse(json.dumps({'jsonrpc': '2.0', 'id': identifier, 'result': {'resultType': 'complete', 'content': [{'type': 'text', 'text': f'```json\n{json.dumps(recent_data, ensure_ascii=False)}\n```'}], 'isError': False, '_meta': {'io.modelcontextprotocol/serverInfo': SERVER_INFO}}}, ensure_ascii=False), status_code=200, headers=RESPONSE_HEADERS, mimetype='application/json', charset='utf-8')

        except Exception as e:
            logging.error(f'{e}')

            return tool_error('News data is temporarily unavailable.')

    elif params['name'] == 'weather':
        if 'latitude' not in arguments or 'longitude' not in arguments or isinstance(arguments['latitude'], bool) or isinstance(arguments['longitude'], bool) or not isinstance(arguments['latitude'], (int, float)) or not isinstance(arguments['longitude'], (int, float)) or arguments['latitude'] < -90 or arguments['latitude'] > 90 or arguments['longitude'] < -180 or arguments['longitude'] > 180:
            return tool_error('Invalid coordinates: latitude must be between -90 and 90 and longitude between -180 and 180.')

        try:
            team_id = os.environ['WEATHERKIT_TEAM_ID']
            services_id = os.environ['WEATHERKIT_SERVICES_ID']
            private_key = os.environ['WEATHERKIT_PRIVATE_KEY'].replace('\\n', '\n')
            key_id = os.environ['WEATHERKIT_KEY_ID']
            now = time.time()
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
                data = response.read(1048577)

                if len(data) > 1048576:
                    raise ValueError('Weather data is too large')

                weather = json.loads(data.decode('utf-8'))

                return func.HttpResponse(json.dumps({'jsonrpc': '2.0', 'id': identifier, 'result': {'resultType': 'complete', 'content': [{'type': 'text', 'text': f'```json\n{json.dumps(weather, ensure_ascii=False)}\n```'}], 'isError': False, '_meta': {'io.modelcontextprotocol/serverInfo': SERVER_INFO}}}, ensure_ascii=False), status_code=200, headers=RESPONSE_HEADERS, mimetype='application/json', charset='utf-8')

        except Exception as e:
            logging.error(f'{e}')

            return tool_error('Weather data is temporarily unavailable.')
