import random
import re
import os
import json
import logging
from datetime import datetime, time, timedelta, timezone
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
            filtered_data = []
            
            for cache_name in scan_cache(f'fetch/*'):
                cached_data = json.loads(get_cache(cache_name))
                
                if isinstance(cached_data, dict) and 'cache' in cached_data and 'timestamp' in cached_data and isinstance(cached_data['cache'], list):
                    for item in cached_data['cache']:
                        if isinstance(item, dict) and 'content' in item and 'url' in item and 'timestamp' in item and 'score' in item and 'reason' in item:
                            timestamp = datetime.combine(datetime.now(timezone.utc).date(), time(0, 0), tzinfo=timezone.utc) if item['timestamp'] is None else datetime.fromisoformat(item['timestamp'].replace('Z', '+00:00'))
                            merged_data.append({'content': item['content'], 'url': item['url'], 'timestamp': timestamp, 'score': item['score'], 'reason': item['reason']})

                            if timestamp > cutoff:
                                filtered_data.append({'content': item['content'], 'url': item['url'], 'timestamp': timestamp, 'score': item['score'], 'reason': item['reason']})

            if len(filtered_data) > 0:
                recent_data = sorted(filtered_data, key=lambda x: x['timestamp'], reverse=True)
            else:       
                recent_data = sorted(merged_data, key=lambda x: x['timestamp'], reverse=True)
            
            recent_data = recent_data[:limit]

            for item in recent_data:
                item['timestamp'] = int(item['timestamp'].timestamp())

            return func.HttpResponse(json.dumps(recent_data, ensure_ascii=False), status_code=200, mimetype='application/json', charset='utf-8')
    
        else:
            if req.headers.get('Content-Type') == 'application/json':
                body = req.get_body()

                if len(body) > 0:
                    data = json.loads(body)
                    url = data['url'] if 'url' in data else None
                    model = data.get('model')
                    temperature = data['temperature'] if 'temperature' in data else 1.0
                else:
                    url = url = FETCH_URLS[random.randrange(len(FETCH_URLS))]
                    model = None
                    temperature = 1.0
            else:
                url = req.params['url'] if 'url' in req.params else FETCH_URLS[random.randrange(len(FETCH_URLS))]
                model = req.params.get('model')
                temperature = req.params['temperature'] if 'temperature' in req.params else 1.0
            
            cache_name = f'fetch/{url}'
            cached_data = get_cache(cache_name)

            if cached_data is None or 'timestamp' in cached_data and cached_data['timestamp'] < int((datetime.now(timezone.utc) - timedelta(hours=1)).timestamp()):
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
                request = Request('https://api.openai.com/v1/chat/completions', data=json.dumps({'model': os.environ['OPENAI_MODEL'] if model is None else model, 'messages': messages, 'temperature': temperature}).encode('utf-8'), method='POST', headers={'Authorization': f'Bearer {api_key}', 'Content-Type': 'application/json'})
                
                with urlopen(request) as response:
                    for choice in json.loads(response.read().decode('utf-8'))['choices']:
                        if choice['message']['role'] == 'assistant':
                            match = re.match('(?:```json)?(?:[^\\[]+)?(\\[.+\\]).*(?:```)?', choice['message']['content'], flags=(re.MULTILINE|re.DOTALL))
                            items = json.loads(match.group(1) if match else choice['message']['content'])
                            set_cache(cache_name, json.dumps({'cache': items, 'timestamp': int(datetime.combine(datetime.now(timezone.utc).date(), time(0, 0), tzinfo=timezone.utc).timestamp())}, ensure_ascii=False), expire=86400)

                            return func.HttpResponse(json.dumps(items, ensure_ascii=False), status_code=201, mimetype='application/json', charset='utf-8')
            
            else:
                return func.HttpResponse(json.dumps(cached_data['cache'], ensure_ascii=False), status_code=201, mimetype='application/json', charset='utf-8')

            return func.HttpResponse(status_code=500, mimetype='', charset='')
        
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