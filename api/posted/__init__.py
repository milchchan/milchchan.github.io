import re
import json
import logging
import os
from datetime import datetime

import azure.functions as func
from azure.cosmos.cosmos_client import CosmosClient


def main(req: func.HttpRequest) -> func.HttpResponse:
    try:
        identifier = req.route_params.get('id')
        
        if bool(re.match(r'^(?:[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|[0-9a-f]{7})$', identifier)):
            client = CosmosClient.from_connection_string(os.environ['AZURE_COSMOS_DB_CONNECTION_STRING'])
            database = client.get_database_client('Milch')
            container = database.get_container_client('Posts')
            item = list(container.query_items(
                query="SELECT p.id, p.slug, p.type, p.layers, p.nsfw, p.random, p.views, p.timestamp FROM Posts AS p WHERE p.id LIKE CONCAT(@identifier, '%') ORDER BY p.timestamp ASC OFFSET 0 LIMIT 1",
                parameters=[
                    {'name': '@identifier', 'value': identifier}
                ],
                enable_cross_partition_query=True))[0]
            item = {'id': item['id'], 'slug': item['slug'], 'type': item['type'], 'layers': item['layers'], 'nsfw': item['nsfw'], 'random': item['random'], 'views': item['views'] + 1, 'timestamp': item['timestamp']}
            container.upsert_item(item)

            for layer in item['layers']:
                if layer is not None:
                    layer['url'] = f"https://static.milchchan.com/{layer['id']}"

            return func.HttpResponse(json.dumps({'id': item['id'], 'type': item['type'], 'layers': item['layers'], 'nsfw': item['nsfw'], 'views': item['views'], 'timestamp': int(datetime.fromisoformat(item['timestamp'].replace('Z', '+00:00')).timestamp())}), status_code=200, mimetype='application/json', charset='utf-8')
        
        else:
            return func.HttpResponse(status_code=400, mimetype='', charset='')

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
