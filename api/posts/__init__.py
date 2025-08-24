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
        nsfw = json.loads(req.params['nsfw'].lower()) if 'nsfw' in req.params else False
        client = CosmosClient.from_connection_string(os.environ['AZURE_COSMOS_DB_CONNECTION_STRING'])
        database = client.get_database_client('Milch')
        container = database.get_container_client('Posts')

        if from_date is None:
            items = list(container.query_items(
                query=f'SELECT p.id, p.type, p.layers, p.nsfw, p.views, p.timestamp FROM Posts AS p WHERE p.timestamp <= @to_date ORDER BY p.timestamp {"DESC" if order == "desc" else "ASC"} OFFSET @offset LIMIT @limit' if nsfw else f'SELECT p.id, p.type, p.layers, p.nsfw, p.views, p.timestamp FROM Posts AS p WHERE NOT p.nsfw AND p.timestamp <= @to_date ORDER BY p.timestamp {"DESC" if order == "desc" else "ASC"} OFFSET @offset LIMIT @limit',
                parameters=[
                    {'name': '@offset', 'value': 0 if offset is None else offset},
                    {'name': '@limit', 'value': 100 if limit is None else limit},
                    {'name': '@to_date', 'value': datetime.fromtimestamp(time.time() if to_date is None else to_date, timezone.utc).strftime('%Y-%m-%dT%H:%M:%SZ')}
                ],
                enable_cross_partition_query=True))

        else:
            datetime.fromtimestamp(time.time(), timezone.utc).strftime('%Y-%m-%dT%H:%M:%SZ')
            items = list(container.query_items(
                query=f'SELECT p.id, p.type, p.layers, p.nsfw, p.views, p.timestamp FROM Posts AS p WHERE p.timestamp > @from_date AND p.timestamp <= @to_date ORDER BY p.timestamp {"DESC" if order == "desc" else "ASC"} OFFSET @offset LIMIT @limit' if nsfw else f'SELECT p.id, p.type, p.layers, p.nsfw, p.views, p.timestamp FROM Posts AS p WHERE NOT p.nsfw AND p.timestamp > @from_date AND p.timestamp <= @to_date ORDER BY p.timestamp {"DESC" if order == "desc" else "ASC"} OFFSET @offset LIMIT @limit',
                parameters=[
                    {'name': '@offset', 'value': 0 if offset is None else offset},
                    {'name': '@limit', 'value': 100 if limit is None else limit},
                    {'name': '@from_date', 'value': datetime.fromtimestamp(from_date, timezone.utc).strftime('%Y-%m-%dT%H:%M:%SZ')},
                    {'name': '@to_date', 'value': datetime.fromtimestamp(time.time() if to_date is None else to_date, timezone.utc).strftime('%Y-%m-%dT%H:%M:%SZ')}
                ],
                enable_cross_partition_query=True))
                
        for item in items:
            for key in item:
                if key.startswith('_'):
                    del item[key]

            for layer in item['layers']:
                if layer is not None:
                    layer['url'] = f"https://static.milchchan.com/{layer['id']}"

            item['timestamp'] = int(datetime.fromisoformat(item['timestamp'].replace('Z', '+00:00')).timestamp())

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
