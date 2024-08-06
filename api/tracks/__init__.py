import time
import re
import json
import logging
from datetime import datetime, timezone
from shared import get_neighbors

import azure.functions as func
from azure.cosmos.cosmos_client import CosmosClient


def main(req: func.HttpRequest) -> func.HttpResponse:
    try:
        if 'X-Authorization' in req.headers:
            match = re.match('Bearer\\s(.+)', req.headers['X-Authorization'])

            if match:
                order = req.params['order'] if 'order' in req.params else 'desc'
                offset = int(req.params['offset']) if 'offset' in req.params else None
                limit = int(req.params['limit']) if 'limit' in req.params else None
                from_date = int(req.params['from']) if 'from' in req.params else None
                to_date = int(req.params['to']) if 'to' in req.params else None
                geohash = req.params['geohash'] if 'geohash' in req.params else None
                client = CosmosClient.from_connection_string(match.group(1))
                database = client.get_database_client('Milch')
                container = database.get_container_client('Logs')

                if geohash is None:
                    if from_date is None:
                        items = list(container.query_items(
                            query=f'SELECT l.id, l.location, l.timestamp FROM Logs AS l ORDER BY l.timestamp {"DESC" if order == "desc" else "ASC"} OFFSET @offset LIMIT @limit',
                            parameters=[
                                {'name': '@offset', 'value': 0 if offset is None else offset},
                                {'name': '@limit', 'value': 100 if limit is None else limit}
                            ],
                            enable_cross_partition_query=True))

                    else:
                        datetime.fromtimestamp(time.time(), timezone.utc).strftime('%Y-%m-%dT%H:%M:%SZ')
                        items = list(container.query_items(
                            query=f'SELECT l.id, l.location, l.timestamp FROM Logs AS l WHERE l.timestamp > @from_date AND l.timestamp <= @to_date ORDER BY l.timestamp {"DESC" if order == "desc" else "ASC"} OFFSET @offset LIMIT @limit',
                            parameters=[
                                {'name': '@offset', 'value': 0 if offset is None else offset},
                                {'name': '@limit', 'value': 100 if limit is None else limit},
                                {'name': '@from_date', 'value': datetime.fromtimestamp(from_date, timezone.utc).strftime('%Y-%m-%dT%H:%M:%SZ')},
                                {'name': '@to_date', 'value': datetime.fromtimestamp(time.time() if to_date is None else to_date, timezone.utc).strftime('%Y-%m-%dT%H:%M:%SZ')}
                            ],
                            enable_cross_partition_query=True))

                else:
                    neighbors = get_neighbors(geohash)

                    if from_date is None:
                        items = list(container.query_items(
                            query=f"SELECT l.id, l.location, l.timestamp FROM Logs AS l WHERE l.geohash LIKE CONCAT(@centergeohash, '%') OR l.geohash LIKE CONCAT(@topgeohash, '%') OR l.geohash LIKE CONCAT(@bottomgeohash, '%') OR l.geohash LIKE CONCAT(@rightgeohash, '%') OR l.geohash LIKE CONCAT(@leftgeohash, '%') OR l.geohash LIKE CONCAT(@topleftgeohash, '%') OR l.geohash LIKE CONCAT(@toprightgeohash, '%') OR l.geohash LIKE CONCAT(@bottomrightgeohash, '%') OR l.geohash LIKE CONCAT(@bottomleftgeohash, '%') ORDER BY l.timestamp {'DESC' if order == 'desc' else 'ASC'} OFFSET @offset LIMIT @limit",
                            parameters=[
                                {'name': '@offset', 'value': 0 if offset is None else offset},
                                {'name': '@limit', 'value': 100 if limit is None else limit},
                                {'name': '@centergeohash', 'value': geohash},
                                {'name': '@topgeohash', 'value': neighbors['top']},
                                {'name': '@bottomgeohash', 'value': neighbors['bottom']},
                                {'name': '@rightgeohash', 'value': neighbors['right']},
                                {'name': '@leftgeohash', 'value': neighbors['left']},
                                {'name': '@topleftgeohash', 'value': neighbors['topleft']},
                                {'name': '@toprightgeohash', 'value': neighbors['topright']},
                                {'name': '@bottomrightgeohash', 'value': neighbors['bottomright']},
                                {'name': '@bottomleftgeohash', 'value': neighbors['bottomleft']}
                            ],
                            enable_cross_partition_query=True))

                    else:
                        items = list(container.query_items(
                            query=f"SELECT l.id, l.location, l.timestamp FROM Logs AS l WHERE l.timestamp > @from_date AND l.timestamp <= @to_date AND (l.geohash LIKE CONCAT(@centergeohash, '%') OR l.geohash LIKE CONCAT(@topgeohash, '%') OR l.geohash LIKE CONCAT(@bottomgeohash, '%') OR l.geohash LIKE CONCAT(@rightgeohash, '%') OR l.geohash LIKE CONCAT(@leftgeohash, '%') OR l.geohash LIKE CONCAT(@topleftgeohash, '%') OR l.geohash LIKE CONCAT(@toprightgeohash, '%') OR l.geohash LIKE CONCAT(@bottomrightgeohash, '%') OR l.geohash LIKE CONCAT(@bottomleftgeohash, '%')) ORDER BY l.timestamp {'DESC' if order == 'desc' else 'ASC'} OFFSET @offset LIMIT @limit",
                            parameters=[
                                {'name': '@offset', 'value': 0 if offset is None else offset},
                                {'name': '@limit', 'value': 100 if limit is None else limit},
                                {'name': '@from_date', 'value': datetime.fromtimestamp(from_date, timezone.utc).strftime('%Y-%m-%dT%H:%M:%SZ')},
                                {'name': '@to_date', 'value': datetime.fromtimestamp(time.time() if to_date is None else to_date, timezone.utc).strftime('%Y-%m-%dT%H:%M:%SZ')},
                                {'name': '@centergeohash', 'value': geohash},
                                {'name': '@topgeohash', 'value': neighbors['top']},
                                {'name': '@bottomgeohash', 'value': neighbors['bottom']},
                                {'name': '@rightgeohash', 'value': neighbors['right']},
                                {'name': '@leftgeohash', 'value': neighbors['left']},
                                {'name': '@topleftgeohash', 'value': neighbors['topleft']},
                                {'name': '@toprightgeohash', 'value': neighbors['topright']},
                                {'name': '@bottomrightgeohash', 'value': neighbors['bottomright']},
                                {'name': '@bottomleftgeohash', 'value': neighbors['bottomleft']}
                            ],
                            enable_cross_partition_query=True))
                        
                for item in items:
                    for key in item:
                        if key.startswith('_'):
                            del item[key]

                    item['timestamp'] = int(datetime.fromisoformat(item['timestamp'].replace('Z', '+00:00')).timestamp())

                return func.HttpResponse(json.dumps(items), status_code=200, mimetype='application/json', charset='utf-8')

        return func.HttpResponse(status_code=401, mimetype='', charset='')

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
