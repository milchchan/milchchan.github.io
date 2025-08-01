import random
import re
import uuid
import os
import json
import logging
import xml.etree.ElementTree as ET
from datetime import datetime, time, timedelta, timezone
from urllib.parse import unquote
from urllib.request import urlopen, Request
from shared import FETCH_URLS, FETCH_PROMPT, TRANSFORM_SYSTEM_PROMPT, TRANSFORM_USER_PROMPT
from shared.cache import get_cache, set_cache, scan_cache

import azure.functions as func


def main(req: func.HttpRequest) -> func.HttpResponse:
    try:
        if req.method == 'GET':
            limit = req.params['limit'] if 'limit' in req.params else 100
            sort = req.params['sort'].lower() if 'sort' in req.params else 'timestamp'
            merged_data = []

            if 'order' in req.params:
                order = req.params['order'].lower()

                if order != 'asc' and order != 'desc':
                    order = 'desc'

            else:
                order = 'desc'
            
            for cache_name in scan_cache(f'fetch/*'):
                cached_data = json.loads(get_cache(cache_name))
                
                if isinstance(cached_data, dict) and 'data' in cached_data and 'timestamp' in cached_data and isinstance(cached_data['data'], list):
                    for item in cached_data['data']:
                        if isinstance(item, dict) and 'content' in item and 'url' in item and 'timestamp' in item and 'score' in item and 'reason' in item:
                            timestamp = int((datetime.combine(datetime.now(timezone.utc).date(), time(0, 0), tzinfo=timezone.utc) if item['timestamp'] is None else datetime.fromisoformat(item['timestamp'].replace('Z', '+00:00'))).timestamp())
                            data_item = {'content': item['content'], 'url': item['url'], 'timestamp': timestamp, 'score': item['score'], 'reason': item['reason']}
                            
                            if 'comment' in item:
                                data_item['comment'] = item['comment']

                                if 'states' in item:
                                    data_item['states'] = item['states']

                            merged_data.append(data_item)

            result_data = sorted(merged_data, key=lambda x: x[sort], reverse=order == 'desc')
            result_data = result_data[:limit]

            return func.HttpResponse(json.dumps(result_data, ensure_ascii=False), status_code=200, mimetype='application/json', charset='utf-8')
    
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

            if cached_data is not None:
                cached_data = json.loads(cached_data)

                if 'timestamp' in cached_data and cached_data['timestamp'] >= int((datetime.now(timezone.utc) - timedelta(hours=6)).timestamp()):
                    return func.HttpResponse(json.dumps(cached_data['data'], ensure_ascii=False), status_code=201, mimetype='application/json', charset='utf-8')

            with urlopen(Request(unquote(url), method='GET', headers={'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; Win64; x64; rv:47.0) Gecko/20100101 Firefox/47.0'})) as response:
                content_type = response.headers.get_content_type()
                items = []

                if content_type in ['application/xml', 'application/rss+xml', 'application/atom+xml', 'text/xml']:
                    root = ET.fromstring(response.read().decode('utf-8'))

                    if root.tag == 'rss' or root.tag == '{http://www.w3.org/1999/02/22-rdf-syntax-ns#}RDF':
                        for child1 in root:
                            if child1.tag == 'channel':
                                for child2 in child1:
                                    if child2.tag == 'item':
                                        item = {}

                                        for child3 in child2:
                                            if child3.tag == 'title':
                                                item['title'] = child3.text
                                            #elif child3.tag == 'description':
                                            #    item['description'] = child3.text
                                            elif child3.tag == 'link':
                                                item['link'] = child3.text
                                            elif child3.tag == 'pubDate':
                                                item['pubDate'] = child3.text

                                        if len(item) > 0:
                                            items.append(item)

                            elif child1.tag == '{http://purl.org/rss/1.0/}item':
                                item = {}

                                for child2 in child1:
                                    if child2.tag == '{http://purl.org/rss/1.0/}title':
                                        item['title'] = child2.text
                                    #elif child2.tag == '{http://purl.org/rss/1.0/}description':
                                    #    item['description'] = child2.text
                                    elif child2.tag == '{http://purl.org/rss/1.0/}link':
                                        item['link'] = child2.text
                                    elif child2.tag == '{http://purl.org/dc/elements/1.1/}date':
                                        item['date'] = child2.text

                                items.append(item)
                    
                    elif root.tag ==  '{http://www.w3.org/2005/Atom}feed':
                        for child1 in root:
                            if child1.tag == '{http://www.w3.org/2005/Atom}entry':
                                item = {}

                                for child2 in child1:
                                    if child2.tag == '{http://www.w3.org/2005/Atom}title':
                                        item['title'] = child2.text
                                    #elif child2.tag == '{http://www.w3.org/2005/Atom}content':
                                    #    item['content'] = child2.text
                                    elif child2.tag == '{http://www.w3.org/2005/Atom}link':
                                        item['link'] = child2.get('href')
                                    elif child2.tag == '{http://www.w3.org/2005/Atom}published':
                                        item['published'] = child2.text

                                items.append(item)

                response_body = f'```json\n{json.dumps(items, ensure_ascii=False)}\n```'

            api_key = None

            if 'X-Authorization' in req.headers:
                match = re.match('Bearer\\s(.+)', req.headers['X-Authorization'])

                if match:
                    api_key = match.group(1)

            else:
                api_key = os.environ['OPENAI_API_KEY']
            
            with urlopen(Request('https://api.openai.com/v1/chat/completions', data=json.dumps({'model': os.environ['OPENAI_MODEL'] if model is None else model, 'messages': [{'role': 'developer', 'content': FETCH_PROMPT}, {'role': 'user', 'content': response_body}], 'temperature': temperature}).encode('utf-8'), method='POST', headers={'Authorization': f'Bearer {api_key}', 'Content-Type': 'application/json'})) as response1:
                for choice in json.loads(response1.read().decode('utf-8'))['choices']:
                    if choice['message']['role'] == 'assistant':
                        match = re.match('(?:```json)?(?:[^\\[]+)?(\\[.+\\]).*(?:```)?', choice['message']['content'], flags=(re.MULTILINE|re.DOTALL))
                        items1 = json.loads(match.group(1) if match else choice['message']['content'])
                        items2 = []

                        for item in items1:
                            identifier = str(uuid.uuid4())
                            item['id'] = identifier
                            items2.append({'id': identifier, 'content': item['content']})

                        with urlopen(Request('https://api.openai.com/v1/chat/completions', data=json.dumps({'model': os.environ['OPENAI_MODEL'] if model is None else model, 'messages': [{'role': 'developer', 'content': TRANSFORM_SYSTEM_PROMPT}, {'role': 'user', 'content': f'{TRANSFORM_USER_PROMPT}\n```json\n{json.dumps(items2, ensure_ascii=False)}\n```'}], 'temperature': temperature}).encode('utf-8'), method='POST', headers={'Authorization': f'Bearer {api_key}', 'Content-Type': 'application/json'})) as response2:
                            for choice in json.loads(response2.read().decode('utf-8'))['choices']:
                                if choice['message']['role'] == 'assistant':
                                    match = re.match('(?:```json)?(?:[^\\[]+)?(\\[.+\\]).*(?:```)?', choice['message']['content'], flags=(re.MULTILINE|re.DOTALL))
                                    items3 = json.loads(match.group(1) if match else choice['message']['content'])
                            
                                    for item1 in items1:
                                        for item2 in items3:
                                            if item1['id'] == item2['id']:
                                                item1['comment'] = item2['content']
                                                item1['states'] = item2['states']

                                                break
                        
                                    set_cache(cache_name, json.dumps({'data': items1, 'timestamp': int(datetime.now(timezone.utc).timestamp())}, ensure_ascii=False), expire=86400)
                        
                                    return func.HttpResponse(json.dumps(items1, ensure_ascii=False), status_code=201, mimetype='application/json', charset='utf-8')
                    
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