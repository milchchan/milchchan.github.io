import random
import re
import json
import logging
import os
import hmac
from datetime import datetime, timezone
from base64 import b64encode, b64decode
from hashlib import sha1, md5
from urllib.parse import quote
from urllib.request import urlopen, Request

import azure.functions as func


def main(req: func.HttpRequest) -> func.HttpResponse:
    headers = {}

    if 'Origin' in req.headers:
        headers['Access-Control-Allow-Origin'] = req.headers['Origin']
    else:
        headers['Access-Control-Allow-Origin'] = '*'

    try:
        if req.method == 'POST':
            #headers = {'Content-Type': 'application/json'}
            headers['Content-Type'] = 'application/json'

            if 'Authorization' in req.headers:
                jwt = req.headers['Authorization'].split(' ')[1].split('.') if req.headers['Authorization'].startswith('Bearer ') else req.headers['Authorization'].split('.')

                if json.loads(b64decode(jwt[0] + '=' * (-len(jwt[0]) % 4)))['typ'] == 'JWT' and json.loads(b64decode(jwt[1] + '=' * (-len(jwt[1]) % 4)))['iss'] == 'https://securetoken.google.com/milchchan':
                    try:
                        response = urlopen(Request(
                            f'https://identitytoolkit.googleapis.com/v1/accounts:lookup?key={os.environ.get("FIREBASE_API_KEY")}',
                            headers={'Content-Type': 'application/json'},
                            data=json.dumps({'idToken': req.headers['Authorization']}).encode('utf-8')))

                        if response.getcode() != 200:
                            raise Exception

                    except Exception:
                        return func.HttpResponse(status_code=403, headers=headers)
                        
            if req.headers.get('Content-Type') == 'application/json':
                data = req.get_json()

                if 'status' in data:
                    access_token = data['access_token'] if 'access_token' in data else os.environ.get("TWITTER_OAUTH_TOKEN")
                    secret = data['secret'] if 'secret' in data else os.environ.get("TWITTER_OAUTH_TOKEN_SECRET")
                    status = data['status']
                    image = data.get('image')

                    CONSUMER_KEY = os.environ.get("TWITTER_CONSUMER_KEY")
                    CONSUMER_SECRET = os.environ.get("TWITTER_CONSUMER_SECRET")

                    timestamp = int(datetime.utcfromtimestamp(datetime.now(timezone.utc).timestamp()).timestamp())
                    nonce = ''.join([str(random.randint(0, 9)) for i in range(8)])

                    if image is None:
                        parameters = f"oauth_consumer_key={CONSUMER_KEY}&oauth_nonce={str(nonce)}&oauth_signature_method=HMAC-SHA1&oauth_timestamp={str(timestamp)}&oauth_token={access_token}&oauth_version=1.0&status={quote(status, '')}"
                        url = 'https://api.twitter.com/1.1/statuses/update.json'
                        signature_base = f"POST&{quote(url, '')}&{quote(parameters, '')}"
                        authorization_header = f'OAuth oauth_consumer_key="{quote(CONSUMER_KEY, "")}", oauth_nonce="{quote(str(nonce), "")}", oauth_signature="{quote(b64encode(hmac.new(("{0}&{1}".format(CONSUMER_SECRET, secret)).encode(), signature_base.encode(), sha1).digest()).decode(), "")}", oauth_signature_method="{quote("HMAC-SHA1", "")}", oauth_timestamp="{quote(str(timestamp), "")}", oauth_token="{quote(access_token, "")}", oauth_version="{quote("1.0", "")}"'

                        response = urlopen(Request(
                            f"{url}?status={quote(status, '')}",
                            headers={
                                'Authorization': authorization_header,
                                'Content-Type': 'application/x-www-form-urlencoded'},
                            method='POST'))

                        if response.getcode() == 200:
                            status = json.loads(response.read())
                            user = status['user']
                            item = { 'id': status['id'], 'text': status['text'], 'timestamp': int(datetime.strptime(status['created_at'],'%a %b %d %H:%M:%S +0000 %Y').timestamp()), 'user': { 'id': user["screen_name"], 'name': user['name'], 'image': user['profile_image_url_https'] } }

                            if 'extended_entities' in status:
                                entities = status['extended_entities']

                                if 'media' in entities:
                                    images = []

                                    for media in entities['media']:
                                        if media['type'] == 'photo':
                                            images.append(media['media_url_https'])

                                    if len(images) > 0:
                                        item['image'] = images[0]
                            
                            return func.HttpResponse(json.dumps(item), status_code=200, headers=headers, charset='utf-8')

                    else:
                        match = re.match("data:([\\w/\\-\\.]+);(\\w+),(.+)", image)
                    
                        if match:
                            mime_type, encoding, image_data = match.groups()
                        
                            if mime_type in ['image/gif', 'image/png', 'image/jpeg'] and encoding == 'base64':
                                url = 'https://upload.twitter.com/1.1/media/upload.json'
                                parameters = f"oauth_consumer_key={CONSUMER_KEY}&oauth_nonce={str(nonce)}&oauth_signature_method=HMAC-SHA1&oauth_timestamp={str(timestamp)}&oauth_token={access_token}&oauth_version=1.0"
                                signature_base = f"POST&{quote(url, '')}&{quote(parameters, '')}"
                                authorization_header = f'OAuth oauth_consumer_key="{quote(CONSUMER_KEY, "")}", oauth_nonce="{quote(str(nonce), "")}", oauth_signature="{quote(b64encode(hmac.new(("{0}&{1}".format(CONSUMER_SECRET, secret)).encode(), signature_base.encode(), sha1).digest()).decode(), "")}", oauth_signature_method="{quote("HMAC-SHA1", "")}", oauth_timestamp="{quote(str(timestamp), "")}", oauth_token="{quote(access_token, "")}", oauth_version="{quote("1.0", "")}"'

                                boundary = md5(str(random.randint(0, 32000)).encode()).hexdigest()
                                data = f'--{boundary}\r\n'.encode()
                                data += 'Content-Disposition: form-data; name="media"; filename="rkgk"\r\n'.encode()
                                data += f'Content-Type: {mime_type}\r\n'.encode()
                                data += 'Content-Transfer-Encoding: binary\r\n\r\n'.encode()
                                data += b64decode(image_data)
                                data += f'\r\n'.encode()
                                data += f'--{boundary}--\r\n'.encode()

                                response = urlopen(Request(
                                    url,
                                    headers={
                                        'Authorization': authorization_header,
                                        'Content-Type': f'multipart/form-data; boundary={boundary}'},
                                    data=data,
                                    method='POST'))

                                if response.getcode() == 200:
                                    media_id = json.loads(response.read())['media_id_string']
                                    parameters = f"media_ids={media_id}&oauth_consumer_key={CONSUMER_KEY}&oauth_nonce={str(nonce)}&oauth_signature_method=HMAC-SHA1&oauth_timestamp={str(timestamp)}&oauth_token={access_token}&oauth_version=1.0&status={quote(status, '')}"
                                    url = 'https://api.twitter.com/1.1/statuses/update.json'
                                    signature_base = f"POST&{quote(url, '')}&{quote(parameters, '')}"
                                    authorization_header = f'OAuth oauth_consumer_key="{quote(CONSUMER_KEY, "")}", oauth_nonce="{quote(str(nonce), "")}", oauth_signature="{quote(b64encode(hmac.new(("{0}&{1}".format(CONSUMER_SECRET, secret)).encode(), signature_base.encode(), sha1).digest()).decode(), "")}", oauth_signature_method="{quote("HMAC-SHA1", "")}", oauth_timestamp="{quote(str(timestamp), "")}", oauth_token="{quote(access_token, "")}", oauth_version="{quote("1.0", "")}"'

                                    response = urlopen(Request(
                                        f"{url}?status={quote(status, '')}&media_ids={quote(media_id, '')}",
                                        headers={
                                            'Authorization': authorization_header,
                                            'Content-Type': 'application/x-www-form-urlencoded'},
                                        method='POST'))

                                    if response.getcode() == 200:
                                        status = json.loads(response.read())
                                        user = status['user']
                                        item = { 'id': status['id'], 'text': status['text'], 'timestamp': int(datetime.strptime(status['created_at'],'%a %b %d %H:%M:%S +0000 %Y').timestamp()), 'user': { 'id': user["screen_name"], 'name': user['name'], 'image': user['profile_image_url_https'] } }

                                        if 'extended_entities' in status:
                                            entities = status['extended_entities']

                                            if 'media' in entities:
                                                images = []

                                                for media in entities['media']:
                                                    if media['type'] == 'photo':
                                                        images.append(media['media_url_https'])

                                                if len(images) > 0:
                                                    item['image'] = images[0]

                                        return func.HttpResponse(json.dumps(item), status_code=200, headers=headers, charset='utf-8')

            return func.HttpResponse(status_code=400, headers=headers)
            
        elif req.method == 'GET':
            headers['Content-Type'] = 'application/json'

            if req.headers.get('Content-Type') == 'application/json':
                data = req.get_json()
                access_token = data['access_token'] if 'access_token' in data else os.environ.get("TWITTER_OAUTH_TOKEN")
                secret = data['secret'] if 'secret' in data else os.environ.get("TWITTER_OAUTH_TOKEN_SECRET")
                query = data['query'] if 'query' in data else '#milchchan'
                count = data['count'] if 'count' in data else 100
                
            else:
                access_token = req.params['access_token'] if 'access_token' in req.params else os.environ.get("TWITTER_OAUTH_TOKEN")
                secret = req.params['secret'] if 'secret' in req.params else os.environ.get("TWITTER_OAUTH_TOKEN_SECRET")
                query = req.params['query'] if 'query' in req.params else '#milchchan'
                count = int(req.params['count']) if 'count' in req.params else 100

            CONSUMER_KEY = os.environ.get("TWITTER_CONSUMER_KEY")
            CONSUMER_SECRET = os.environ.get("TWITTER_CONSUMER_SECRET")

            timestamp = int(datetime.utcfromtimestamp(datetime.now(timezone.utc).timestamp()).timestamp())
            nonce = ''.join([str(random.randint(0, 9)) for i in range(8)])
            result_type = 'recent'
            url = 'https://api.twitter.com/1.1/search/tweets.json'
            parameters = f"count={str(count)}&include_entities=true&oauth_consumer_key={CONSUMER_KEY}&oauth_nonce={str(nonce)}&oauth_signature_method=HMAC-SHA1&oauth_timestamp={str(timestamp)}&oauth_token={access_token}&oauth_version=1.0&q={quote(query, '')}&result_type={result_type}"
            signature_base = f"GET&{quote(url, '')}&{quote(parameters, '')}"
            authorization_header = f'OAuth oauth_consumer_key="{quote(CONSUMER_KEY, "")}", oauth_nonce="{quote(str(nonce), "")}", oauth_signature="{quote(b64encode(hmac.new(("{0}&{1}".format(CONSUMER_SECRET, secret)).encode(), signature_base.encode(), sha1).digest()).decode(), "")}", oauth_signature_method="{quote("HMAC-SHA1", "")}", oauth_timestamp="{quote(str(timestamp), "")}", oauth_token="{quote(access_token, "")}", oauth_version="{quote("1.0", "")}"'
            response = urlopen(Request(
                f"{url}?count={str(count)}&q={quote(query, '')}&result_type={result_type}&include_entities=true",
                headers={
                    'Authorization': authorization_header,
                    'Content-Type': 'application/json'},
                method='GET'))

            if response.getcode() == 200:
                data = []

                for status in json.loads(response.read())['statuses']:
                    if 'retweeted_status' not in status and 'quoted_status' not in status:
                        user = status['user']

                        if not user['protected']:
                            item = { 'id': status['id'], 'text': status['text'], 'timestamp': int(datetime.strptime(status['created_at'],'%a %b %d %H:%M:%S +0000 %Y').timestamp()), 'user': { 'id': user["screen_name"], 'name': user['name'], 'image': user['profile_image_url_https'] } }

                            if 'extended_entities' in status:
                                entities = status['extended_entities']

                                if 'media' in entities:
                                    images = []

                                    for media in entities['media']:
                                        if media['type'] == 'photo':
                                            images.append(media['media_url_https'])

                                    if len(images) > 0:
                                        item['image'] = images[0]

                            data.append(item)

                return func.HttpResponse(json.dumps(data), status_code=200, headers=headers, charset='utf-8')

            return func.HttpResponse(status_code=400, headers=headers)

        else:
            #headers['Access-Control-Allow-Methods'] = 'POST,GET,OPTIONS'

            #if 'Access-Control-Request-Headers' in req.headers:
            #    headers['Access-Control-Allow-Headers'] = req.headers['Access-Control-Request-Headers']

            #headers['Access-Control-Max-Age'] = '86400'

            return func.HttpResponse(status_code=200, headers={
                'Access-Control-Allow-Origin': req.headers['Origin'],
                'Access-Control-Allow-Methods': 'POST, GET, OPTIONS'
                })

        #headers['Allow'] = 'GET, POST, OPTIONS'

        #return func.HttpResponse(status_code=405, headers=headers)

    except Exception as e:
        logging.error(f'{e}')

        return func.HttpResponse(json.dumps({
                'error': {
                    'message': str(e),
                    'type': type(e).__name__ }
            }),
            status_code=400,
            headers=headers,
            charset='utf-8')
