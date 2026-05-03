import time
import os
import json
import logging
from datetime import datetime, timezone

import azure.functions as func
from azure.cosmos.cosmos_client import CosmosClient


def main(req: func.HttpRequest) -> func.HttpResponse:
    try:
        order = req.params['order'] if 'order' in req.params else 'desc'
        client = CosmosClient.from_connection_string(os.environ['AZURE_COSMOS_DB_CONNECTION_STRING'])
        database = client.get_database_client('Milch')
        container = database.get_container_client('Posts')
        query = 'SELECT p.id, p.type, p.input, p.message, p.digest, p.image, p.animations, p.name, p.language, p.nsfw, p.random, p.accesses, p.timestamp FROM Posts AS p WHERE '
        parameters = [{'name': '@offset', 'value': int(req.params['offset']) if 'offset' in req.params else 0}, {'name': '@limit', 'value': int(req.params['limit']) if 'limit' in req.params else 100}]

        if 'query' in req.params:
            query += '(p.input LIKE @query OR p.name LIKE @query) AND '
            parameters.append({'name': '@query', 'value': req.params['query']})

        if 'type' in req.params:
            query += 'p.type LIKE @mime_type AND '
            parameters.append({'name': '@mime_type', 'value': req.params['type'].lower()})

        if 'digest' in req.params:
            query += 'p.digest = @digest AND '
            parameters.append({'name': '@digest', 'value': req.params['digest']})

        if 'language' in req.params:
            query += 'p.language = @language AND '
            parameters.append({'name': '@language', 'value': req.params['language'].lower()})

        if 'nsfw' in req.params and not json.loads(req.params['nsfw'].lower()):
            query += 'NOT p.nsfw AND '
        
        if 'from' in req.params:
            query += 'p.timestamp > @from_date AND '
            parameters.append({'name': '@from_date', 'value': datetime.fromtimestamp(int(req.params['from']), timezone.utc).strftime('%Y-%m-%dT%H:%M:%SZ')})
        
        query += f'p.timestamp <= @to_date ORDER BY p.timestamp {"DESC" if order == "desc" else "ASC"} OFFSET @offset LIMIT @limit'
        parameters.append({'name': '@to_date', 'value': datetime.fromtimestamp(int(req.params['to']) if 'to' in req.params else time.time(), timezone.utc).strftime('%Y-%m-%dT%H:%M:%SZ')})
        items = list(container.query_items(query=query, parameters=parameters, enable_cross_partition_query=True))
        
        for item in items:
            keys = []

            for key in item:
                if key.startswith('_'):
                    keys.append(key)
            
            for key in keys:
                del item[key]

            if 'animations' in item:
                for animation in item['animations']:
                    for frame in animation:
                        frame['url'] = f"https://static.milchchan.com/{frame['id']}"

            item['timestamp'] = int(datetime.fromisoformat(item['timestamp'].replace('Z', '+00:00')).timestamp())

            del item['random']

        return func.HttpResponse(json.dumps(items), status_code=200, mimetype='application/json', charset='utf-8')

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
