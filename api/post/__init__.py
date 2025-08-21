import io
import time
import re
import os
import json
import logging
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
                            image_data = (filename, content)

                if image_data is not None:
                    def resize_iamge(image, maximum=2048, resample=Image.Resampling.LANCZOS):
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


                    with io.BytesIO(image_data[1]) as input_buffer, Image.open(input_buffer) as image, io.BytesIO() as output_buffer:
                        image = resize_iamge(image, maximum=2048)
                        image.save(output_buffer, format='WEBP', lossless=True, method=6)
                        output_buffer.seek(0)
                        image_data = (image_data[0], output_buffer.read())

                    api_url = 'https://milchchan-prism.hf.space/gradio_api'
                    session = uuid4().hex[:10]
                    boundary = '----gradioBoundary'
                    data = f'--{boundary}\r\n'.encode()
                    data += f'Content-Disposition: form-data; name="files"; filename="{os.path.basename(image_data[0])}"\r\n'.encode()
                    data += f'Content-Type: image/webp\r\n\r\n'.encode()
                    data += image_data[1]
                    data += f'\r\n--{boundary}--\r\n'.encode()

                    with urlopen(Request(api_url + '/upload', data=data, headers={'Content-Type': f'multipart/form-data; boundary={boundary}'}, method='POST')) as response:
                        path = json.loads(response.read().decode('utf-8'))[0]
                    
                    with urlopen(Request(api_url + '/queue/join', data=json.dumps({
                        'data': [{'path': path, 'meta': {'_type': 'gradio.FileData'}}, 5],
                        'event_data': None,
                        'fn_index': 0,
                        'session_hash': session
                    }).encode(), headers={'Authorization': f"Bearer {os.environ['HF_TOKEN']}", 'Content-Type': 'application/json'})) as response:
                        event_id = json.loads(response.read().decode('utf-8'))['event_id']
                    
                    paths = []

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
                                        for item in msg['output']['data'][0]:
                                            if 'image' in item:
                                                paths.append(item['image']['path'])
                                    
                                    break

                    if len(paths) > 0:
                        items = []

                        for path in paths:
                            url = f'{api_url}/file={path}'

                            with urlopen(Request(url)) as response:
                                content_type = response.headers.get_content_type()

                                if content_type.startswith('image/'):
                                    with io.BytesIO(response.read()) as buffer, Image.open(buffer) as image:
                                        if image.size[0] == 1 and image.size[1] == 1: #image.convert('RGBA').getchannel('A').getextrema()[1] > 0:
                                            items.append(None)
                                        else:
                                            items.append({'url': url, 'type': content_type})
                        
                        return func.HttpResponse(json.dumps(items), status_code=200, mimetype='application/json', charset='utf-8')
                   
                    else:
                        return func.HttpResponse(status_code=503, mimetype='', charset='')
                    
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
