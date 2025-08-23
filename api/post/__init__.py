import random
import io
import time
import re
import os
import json
import logging
import boto3
import botocore
from uuid import uuid4
from datetime import datetime, timezone
from urllib.request import urlopen, Request
from PIL import Image

import azure.functions as func
from azure.cosmos.cosmos_client import CosmosClient


def main(req: func.HttpRequest) -> func.HttpResponse:
    try:
        if req.method == 'POST':
            content_type = req.headers.get('Content-Type')

            if content_type.startswith('multipart/form-data;') and 'boundary=' in content_type:
                boundary = f'--{content_type.split("boundary=")[-1]}'.encode()
                image_data = None

                for part in req.get_body().split(boundary)[1:-1]:
                    index = part.find(b'\r\n\r\n')

                    if index >= 0:
                        headers = part[:index].split(b'\r\n')
                        content = part[index + 4:].strip(b'--').strip()
                        name = None
                        filename = None
                        content_type = None
                        
                        for header in headers:
                            if header.startswith(b'Content-Disposition'):
                                match = re.search(r'name="([^"]+)"(?:;\sfilename="([^"]+)")?', header.decode('utf-8'))

                                if match:
                                    name, filename = match.groups()
                        
                            elif header.startswith(b'Content-Type'):
                                content_type = header.decode('utf-8').split(':')[1].strip()

                        if name == 'file' and filename is not None and content_type is not None and content_type.startswith('image/'):
                            image_data = (filename, content_type, content)

                if image_data is not None:
                    def resize_image(image, maximum, resample=Image.Resampling.LANCZOS):
                        width, height = image.size

                        if width < height:
                            if maximum < height:
                                scale = maximum / height
                            else:
                                return image
                        elif maximum < width:
                            scale = maximum / width
                        else:
                            return image

                        return image.resize((round(width * scale), round(height * scale)), resample=resample)
                    
                    identifier = str(uuid4())
                    s3 = boto3.client(service_name='s3', endpoint_url=os.environ['S3_ENDPOINT_URL'], aws_access_key_id=os.environ['AWS_ACCESS_KEY_ID'], aws_secret_access_key=os.environ['AWS_SECRET_ACCESS_KEY'], region_name='auto')

                    with io.BytesIO(image_data[2]) as input_buffer, Image.open(input_buffer) as image, io.BytesIO() as output_buffer:
                        resized_image = resize_image(image, maximum=1280)
                        resized_image.save(output_buffer, format='WEBP', lossless=True, method=6)
                        output_buffer.seek(0)
                        image_data = (image_data[0], image_data[1], output_buffer.read())
                        input_buffer.seek(0)
                        file_is_exists = True
                        
                        try:
                            s3.head_object(Bucket='uploads', Key=identifier)
                        except botocore.exceptions.ClientError as e:
                            if e.response['Error']['Code'] == '404':
                                file_is_exists = False
                            else:
                                raise

                        if file_is_exists:
                            return func.HttpResponse(status_code=409, mimetype='', charset='')
                        
                        s3.upload_fileobj(input_buffer, 'uploads', identifier, ExtraArgs={'ContentType': image_data[1]})

                    n_layers = 5
                    api_url = 'https://milchchan-prism.hf.space/gradio_api'
                    session = uuid4().hex[:10]
                    boundary = '----gradioBoundary'
                    data = f'--{boundary}\r\n'.encode()
                    data += f'Content-Disposition: form-data; name="files"; filename="{os.path.basename(image_data[0])}"\r\n'.encode()
                    data += 'Content-Type: image/webp\r\n\r\n'.encode()
                    data += image_data[2]
                    data += f'\r\n--{boundary}--\r\n'.encode()

                    with urlopen(Request(api_url + '/upload', data=data, headers={'Content-Type': f'multipart/form-data; boundary={boundary}'}, method='POST')) as response:
                        path = json.loads(response.read().decode('utf-8'))[0]
                    
                    with urlopen(Request(api_url + '/queue/join', data=json.dumps({
                        'data': [{'path': path, 'meta': {'_type': 'gradio.FileData'}}, n_layers],
                        'event_data': None,
                        'fn_index': 0,
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
                                        urls = []

                                        for item in msg['output']['data'][0]:
                                            if 'image' in item:
                                                urls.append(f"{api_url}/file={item['image']['path']}")

                                        indexes = msg['output']['data'][1]
                                        nsfw = msg['output']['data'][2]

                                        if len(urls) > 0:
                                            layers = []
                                            index = 0

                                            for i in range(n_layers):
                                                if i in indexes:
                                                    with urlopen(Request(urls[index])) as r:
                                                        content_type = r.headers.get_content_type()

                                                        if content_type.startswith('image/'):
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

                                                            layers.append({'id': layer_identifier, 'type': content_type})
                                                                
                                                    index += 1
                                                else:
                                                    layers.append(None)

                                            timestamp = datetime.fromtimestamp(time.time(), timezone.utc)
                                            client = CosmosClient.from_connection_string(os.environ['AZURE_COSMOS_DB_CONNECTION_STRING'])
                                            database = client.get_database_client('Milch')
                                            container = database.get_container_client('Posts')
                                            container.upsert_item({'id': identifier, 'slug': identifier[:7], 'type': image_data[1], 'layers': layers, 'nsfw': nsfw, 'random': random.random(), 'timestamp': timestamp.strftime('%Y-%m-%dT%H:%M:%SZ')})

                                            for layer in layers:
                                                if layer is not None:
                                                    layer['url'] = f"https://static.milchchan.com/{layer['id']}"

                                            return func.HttpResponse(json.dumps({'id': identifier, 'type': image_data[1], 'layers': layers, 'nsfw': nsfw, 'timestamp': timestamp.timestamp()}), status_code=200, mimetype='application/json', charset='utf-8')
                                    
                                    break
                    
                    return func.HttpResponse(status_code=503, mimetype='', charset='')
           
        else:
            client = CosmosClient.from_connection_string(os.environ['AZURE_COSMOS_DB_CONNECTION_STRING'])
            database = client.get_database_client('Milch')
            container = database.get_container_client('Posts')
            item = random.choice(list(container.query_items(
                query='SELECT p.id, p.type, p.layers, p.timestamp FROM Posts AS p WHERE p.random <= @random ORDER BY p.random DESC OFFSET 0 LIMIT 10',
                parameters=[
                    {'name': '@random', 'value': random.random()}
                ],
                enable_cross_partition_query=True)))
            
            for key in item:
                if key.startswith('_'):
                    del item[key]

            for layer in item['layers']:
                if layer is not None:
                    layer['url'] = f"https://static.milchchan.com/{layer['id']}"

            item['timestamp'] = int(datetime.fromisoformat(item['timestamp'].replace('Z', '+00:00')).timestamp())

            return func.HttpResponse(json.dumps(item), status_code=200, mimetype='application/json', charset='utf-8')
        
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
