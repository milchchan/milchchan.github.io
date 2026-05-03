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
        offset = int(req.params['offset']) if 'offset' in req.params else None
        limit = int(req.params['limit']) if 'limit' in req.params else None
        from_date = int(req.params['from']) if 'from' in req.params else None
        to_date = int(req.params['to']) if 'to' in req.params else None
        query = req.params['query'] if 'query' in req.params else None
        mime_type = req.params['type'].lower() if 'type' in req.params else None
        digest = req.params['digest'] if 'digest' in req.params else None
        language = req.params['language'].lower() if 'language' in req.params else None
        nsfw = json.loads(req.params['nsfw'].lower()) if 'nsfw' in req.params else False
        client = CosmosClient.from_connection_string(os.environ['AZURE_COSMOS_DB_CONNECTION_STRING'])
        database = client.get_database_client('Milch')
        container = database.get_container_client('Posts')
        sql_query = 'SELECT p.id, p.type, p.input, p.message, p.digest, p.image, p.animations, p.name, p.language, p.nsfw, p.random, p.accesses, p.timestamp FROM Posts AS p WHERE '
        parameters = [{'name': '@offset', 'value': 0 if offset is None else offset}, {'name': '@limit', 'value': 100 if limit is None else limit}]

        if query is not None:
            sql_query += '(p.input LIKE @query OR p.name LIKE @query) AND '
            parameters.append({'name': '@query', 'value': query})

        if mime_type is not None:
            sql_query += 'p.type LIKE @mime_type AND '
            parameters.append({'name': '@mime_type', 'value': mime_type})

        if digest is not None:
            sql_query += 'p.digest = @digest AND '
            parameters.append({'name': '@digest', 'value': digest})

        if language is not None:
            sql_query += 'p.language = @language AND '
            parameters.append({'name': '@language', 'value': language})

        if not nsfw:
            sql_query += 'NOT p.nsfw AND '
        
        if from_date is not None:
            sql_query += 'p.timestamp > @from_date AND '
            parameters.append({'name': '@from_date', 'value': datetime.fromtimestamp(from_date, timezone.utc).strftime('%Y-%m-%dT%H:%M:%SZ')})
        
        sql_query += f'p.timestamp <= @to_date ORDER BY p.timestamp {"DESC" if order == "desc" else "ASC"} OFFSET @offset LIMIT @limit'
        parameters.append({'name': '@to_date', 'value': datetime.fromtimestamp(time.time() if to_date is None else to_date, timezone.utc).strftime('%Y-%m-%dT%H:%M:%SZ')})

        for item in list(container.query_items(query=sql_query, parameters=parameters, nable_cross_partition_query=True)):
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
