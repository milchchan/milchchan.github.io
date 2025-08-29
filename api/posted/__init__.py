import io
import re
import json
import logging
import os
import boto3
import botocore
from uuid import uuid4
from datetime import datetime
from urllib.request import urlopen, Request

import azure.functions as func
from azure.cosmos.cosmos_client import CosmosClient


def main(req: func.HttpRequest) -> func.HttpResponse:
    try:
        identifier = req.route_params.get('id')

        if req.method == 'PUT':
            client = CosmosClient.from_connection_string(os.environ['AZURE_COSMOS_DB_CONNECTION_STRING'])
            database = client.get_database_client('Milch')
            container = database.get_container_client('Posts')
            item = list(container.query_items(
                query="SELECT p.id, p.slug, p.type, p.animations, p.nsfw, p.random, p.views, p.timestamp FROM Posts AS p WHERE p.id = @identifier ORDER BY p.timestamp ASC OFFSET 0 LIMIT 1",
                parameters=[
                    {'name': '@identifier', 'value': identifier}
                ],
                enable_cross_partition_query=True))[0]
            item = {'id': item['id'], 'slug': item['slug'], 'type': item['type'], 'animations': item['animations'], 'nsfw': item['nsfw'], 'random': item['random'], 'views': item['views'], 'timestamp': item['timestamp']}
            
            for index, animation in enumerate(item['animations']):
                if index > 0:
                    length = len(animation)
                    s3 = boto3.client(service_name='s3', endpoint_url=os.environ['S3_ENDPOINT_URL'], aws_access_key_id=os.environ['AWS_ACCESS_KEY_ID'], aws_secret_access_key=os.environ['AWS_SECRET_ACCESS_KEY'], region_name='auto')

                    if length == 0:
                        continue
                    elif length == 1:
                        frame = 0
                    elif length == 2:
                        frame = 1
                    else:
                        for frame in animation[1:]:
                            file_is_exists = True
                                                    
                            try:
                                s3.head_object(Bucket='uploads', Key=frame['id'])
                            except botocore.exceptions.ClientError as e:
                                if e.response['Error']['Code'] == '404':
                                    file_is_exists = False
                                else:
                                    raise

                            if file_is_exists:
                                s3.delete_object(Bucket='uploads', Key=frame['id'])

                        animation[:] = animation[:1]
                        frame = 0

                    api_url = 'https://milchchan-prism.hf.space/gradio_api'
                    session = uuid4().hex[:10]
                    
                    with urlopen(Request(api_url + '/queue/join', data=json.dumps({
                        'data': [{'path': f"https://static.milchchan.com/{animation[0]['id']}", 'meta': {'_type': 'gradio.FileData'}}, frame],
                        'event_data': None,
                        'fn_index': 1,
                        'session_hash': session
                    }).encode(), headers={'Authorization': f"Bearer {os.environ['HF_TOKEN']}", 'Content-Type': 'application/json'})) as response:
                        event_id = json.loads(response.read().decode('utf-8'))['event_id']
                    
                    with urlopen(Request(f'{api_url}/queue/data?session_hash={session}', headers={'Authorization': f"Bearer {os.environ['HF_TOKEN']}", 'Accept': 'text/event-stream'})) as response:
                        for raw in iter(lambda: response.readline() or None, None):
                            if not raw: # EOF
                                break

                            line = raw.decode('utf-8').strip()

                            if line.startswith('data:'):
                                msg = json.loads(line[5:].lstrip())
                                msg_type = msg.get('msg')

                                if msg_type == 'heartbeat':
                                    continue
                                elif msg_type == 'queue_full' or msg_type == 'unexpected_error':
                                    break
                                elif msg_type == 'process_completed':
                                    if msg['event_id'] == event_id and 'data' in msg['output']:
                                        for i in msg['output']['data'][0]:
                                            if 'image' in i:
                                                with urlopen(Request(f"{api_url}/file={i['image']['path']}")) as r:
                                                    content_type = r.headers.get_content_type()
                                                    layer_identifier = str(uuid4())
                                                    file_is_exists = True
                                                    
                                                    try:
                                                        s3.head_object(Bucket='uploads', Key=layer_identifier)
                                                    except botocore.exceptions.ClientError as e:
                                                        if e.response['Error']['Code'] == '404':
                                                            file_is_exists = False
                                                        else:
                                                            raise

                                                    if file_is_exists:
                                                        return func.HttpResponse(status_code=409, mimetype='', charset='')
                                                    
                                                    with io.BytesIO(r.read()) as buffer:
                                                        s3.upload_fileobj(buffer, 'uploads', layer_identifier, ExtraArgs={'ContentType': content_type})

                                                    animation.append({'id': layer_identifier, 'type': content_type})

            container.upsert_item(item)

            for animation in item['animations']:
                for frame in animation:
                    frame['url'] = f"https://static.milchchan.com/{frame['id']}"

            return func.HttpResponse(json.dumps({'id': item['id'], 'type': item['type'], 'animations': item['animations'], 'nsfw': item['nsfw'], 'views': item['views'], 'timestamp': int(datetime.fromisoformat(item['timestamp'].replace('Z', '+00:00')).timestamp())}), status_code=200, mimetype='application/json', charset='utf-8')

        elif bool(re.match(r'^(?:[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|[0-9a-f]{7})$', identifier)):
            client = CosmosClient.from_connection_string(os.environ['AZURE_COSMOS_DB_CONNECTION_STRING'])
            database = client.get_database_client('Milch')
            container = database.get_container_client('Posts')
            item = list(container.query_items(
                query="SELECT p.id, p.slug, p.type, p.animations, p.nsfw, p.random, p.views, p.timestamp FROM Posts AS p WHERE p.id LIKE CONCAT(@identifier, '%') ORDER BY p.timestamp ASC OFFSET 0 LIMIT 1",
                parameters=[
                    {'name': '@identifier', 'value': identifier}
                ],
                enable_cross_partition_query=True))[0]
            item = {'id': item['id'], 'slug': item['slug'], 'type': item['type'], 'animations': item['animations'], 'nsfw': item['nsfw'], 'random': item['random'], 'views': item['views'] + 1, 'timestamp': item['timestamp']}
            container.upsert_item(item)

            for animation in item['animations']:
                for frame in animation:
                    frame['url'] = f"https://static.milchchan.com/{frame['id']}"

            return func.HttpResponse(json.dumps({'id': item['id'], 'type': item['type'], 'animations': item['animations'], 'nsfw': item['nsfw'], 'views': item['views'], 'timestamp': int(datetime.fromisoformat(item['timestamp'].replace('Z', '+00:00')).timestamp())}), status_code=200, mimetype='application/json', charset='utf-8')
        
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
