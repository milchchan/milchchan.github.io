import random
import re
import os
import json
import logging
from datetime import datetime, timedelta, timezone
from urllib.parse import unquote
from urllib.request import urlopen, Request
from shared import FETCH_URLS, FETCH_PROMPT
from shared.cache import get_cache, set_cache, scan_cache

import azure.functions as func


def main(req: func.HttpRequest) -> func.HttpResponse:
    try:
        if req.method == 'GET':
            limit = req.params['limit'] if 'limit' in req.params else 100
            cutoff = datetime.now(timezone.utc) - timedelta(hours=24)    
            merged_data = []

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
                item['timestamp'] = int(item['timestamp'].timestamp())

            return func.HttpResponse(json.dumps(merged_data, ensure_ascii=False), status_code=200, mimetype='application/json', charset='utf-8')
    
        else:
            segments = req.route_params.get('segments')
            body = req.get_body()
            data = json.loads(body) if len(body) > 0 else None
            url = FETCH_URLS[random.randrange(len(FETCH_URLS))] if segments is None else segments
            cache_name = f'fetch/{url}'
            cached_data = get_cache(cache_name)

            if cached_data is None:
                with urlopen(Request(unquote(url), method='GET', headers={'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; Win64; x64; rv:47.0) Gecko/20100101 Firefox/47.0'})) as response:
                    response_body = response.read().decode('utf-8')

                api_key = None

                if 'X-Authorization' in req.headers:
                    match = re.match('Bearer\\s(.+)', req.headers['X-Authorization'])

                    if match:
                        api_key = match.group(1)

                else:
                    api_key = os.environ['OPENAI_API_KEY']

                messages = [{'role': 'developer', 'content': FETCH_PROMPT}, {'role': 'user', 'content': response_body}]
                request = Request('https://api.openai.com/v1/chat/completions', data=json.dumps({'model': os.environ['OPENAI_MODEL'], 'messages': messages, 'temperature': 1.0} if data is None else {'model': data['model'] if 'model' in data else os.environ['OPENAI_MODEL'], 'messages': messages, 'temperature': data['temperature'] if 'temperature' in data else 1.0}).encode('utf-8'), method='POST', headers={'Authorization': f'Bearer {api_key}', 'Content-Type': 'application/json'})
                
                with urlopen(request) as response:
                    for choice in json.loads(response.read().decode('utf-8'))['choices']:
                        if choice['message']['role'] == 'assistant':
                            match = re.match('(?:```json)?(?:[^\\[]+)?(\\[.+\\]).*(?:```)?', choice['message']['content'], flags=(re.MULTILINE|re.DOTALL))
                            text = match.group(1) if match else choice['message']['content']
                            items = json.loads(text)
                            set_cache(cache_name, text, expire=1800)

                            return func.HttpResponse(json.dumps(items, ensure_ascii=False), status_code=201, mimetype='application/json', charset='utf-8')
            
                return func.HttpResponse(status_code=500, mimetype='', charset='')
            
            else:
                return func.HttpResponse(json.dumps(json.loads(cached_data), ensure_ascii=False), status_code=201, mimetype='application/json', charset='utf-8')
        
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