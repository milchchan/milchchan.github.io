import json
import logging
import os
import certifi
from datetime import datetime, timezone
from urllib.parse import urlparse
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from shared.models import Like, Attribute
from shared.cache import scan_cache, delete_cache

import azure.functions as func


engine = create_engine(os.environ['MYSQL_CONNECTION_URL'], connect_args={'ssl_ca': certifi.where(), 'ssl_verify_cert': True, 'ssl_verify_identity': True}, pool_recycle=300)


def main(req: func.HttpRequest) -> func.HttpResponse:
    try:
        if req.method == 'POST' and req.headers.get('Content-Type') == 'application/json':
            data = req.get_json()

            Session = sessionmaker(bind=engine)
            session = Session()

            try:
                attributes = []

                like = Like()
                like.name = data['name']
                like.content = data['content']
                like.language = data.get('language')
                like.timestamp = datetime.now(timezone.utc)

                session.add(like)
                session.commit()

                if 'attributes' in data:
                    for item in data['attributes']:
                        attribute = Attribute()
                        attribute.like_id = like.id
                        attribute.name = item['name']
                        attribute.start = item['start']
                        attribute.end = item['end']

                        session.add(attribute)
                        session.commit()

                        attributes.append({
                            'name': attribute.name,
                            'start': attribute.start,
                            'end': attribute.end
                        })

                cache_names = scan_cache(f'{urlparse(req.url).path}*')

                if len(cache_names) > 0:
                    delete_cache(cache_names)
                
                return func.HttpResponse(json.dumps({
                    'id': like.id,
                    'name': like.name,
                    'content': like.content,
                    'language': like.language,
                    'attributes': attributes,
                    'timestamp': int(like.timestamp.replace(tzinfo=timezone.utc).timestamp())
                }), status_code=201, mimetype='application/json', charset='utf-8')

            except Exception as e:
                session.rollback()

                raise e

            finally:
                session.close()
        
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
