import math
import json
import logging
import os
import certifi
from datetime import timezone
from urllib.parse import urlparse
from sqlalchemy import create_engine, desc
from sqlalchemy.orm import sessionmaker
from shared.models import Like, Attribute
from shared.cache import get_cache, set_cache

import azure.functions as func


engine = create_engine(os.environ['MYSQL_CONNECTION_URL'], connect_args={'ssl_ca': certifi.where(), 'ssl_verify_cert': True, 'ssl_verify_identity': True}, pool_recycle=300)


def main(req: func.HttpRequest) -> func.HttpResponse:
    try:
        if req.method == 'GET':
            if req.headers.get('Content-Type') == 'application/json':
                data = req.get_json()
                name = data.get('name')
                language = data.get('language')
                order = data['order'] if 'order' in data and data['order'] is not None else 'desc'
                offset = data.get('offset')
                limit = data.get('limit')

            else:
                name = req.params['name'] if 'name' in req.params else None
                language = req.params['language'] if 'language' in req.params else None
                order = req.params['order'] if 'order' in req.params else 'desc'
                offset = int(req.params['offset']) if 'offset' in req.params else None
                limit = int(req.params['limit']) if 'limit' in req.params else None

            parsed_url = urlparse(req.url)
            cache_name = f'{parsed_url.path}?{parsed_url.query}' if len(parsed_url.query) > 0 else parsed_url.path
            cached_data = get_cache(cache_name)

            if cached_data is None:
                Session = sessionmaker(bind=engine)
                session = Session()

                try:
                    likes = []
                    query = session.query(Like)

                    if name is not None:
                        query = query.filter(Like.name.like(name))

                    if language is not None:
                        query = query.filter(Like.language.like(language))

                    if order == 'asc':
                        query = query.order_by(Like.timestamp)
                    elif order == 'desc':
                        query = query.order_by(desc(Like.timestamp))
                    else:
                        return func.HttpResponse(status_code=400, mimetype='', charset='')

                    query = query.limit(100 if limit is None else limit)

                    if offset is not None:
                        query = query.offset(offset)

                    for like in query.all():
                        likes.append({
                            'id': like.id,
                            'name': like.name,
                            'content': like.content,
                            'language': like.language,
                            'timestamp': int(like.timestamp.replace(tzinfo=timezone.utc).timestamp())
                        })

                    attributes = {}
                    limit = 100
                    subquery = session.query(Attribute).filter(Attribute.like_id.in_(map(lambda x: x['id'], likes)))
                    count = subquery.count()
                    subquery = subquery.limit(limit)

                    for index in range(math.ceil(count / limit)):
                        for attribute in subquery.offset(index * limit).all():
                            if attribute.like_id in attributes:
                                attributes[attribute.like_id].append({
                                    'name': attribute.name,
                                    'start': attribute.start,
                                    'end': attribute.end
                                })
                            else:
                                attributes[attribute.like_id] = [{
                                    'name': attribute.name,
                                    'start': attribute.start,
                                    'end': attribute.end
                                }]

                    for like in likes:
                        if like['id'] in attributes:
                            like['attributes'] = attributes[like['id']]

                    json_data = json.dumps(likes)
                    set_cache(cache_name, json_data)

                    return func.HttpResponse(json_data, status_code=200, mimetype='application/json', charset='utf-8')

                finally:
                    session.close()

            else:
                return func.HttpResponse(cached_data, status_code=200, mimetype='application/json', charset='utf-8')

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
