import math
import json
import logging
import os
import certifi
from datetime import timezone
from sqlalchemy import create_engine, desc
from sqlalchemy.orm import sessionmaker
from shared.models import Like, Attribute

import azure.functions as func


engine = create_engine(os.environ['MYSQL_CONNECTION_URL'], connect_args={"ssl": {"ca": certifi.where()}}, pool_recycle=60)


def main(req: func.HttpRequest) -> func.HttpResponse:
    try:
        if req.method == 'GET':
            if req.headers.get('Content-Type') == 'application/json':
                data = req.get_json()
                language = data.get('language')
                order = data['order'] if 'order' in data and data['order'] is not None else 'desc'
                offset = data.get('offset')
                limit = data.get('limit')

            else:
                language = req.params['language'] if 'language' in req.params else None
                order = req.params['order'] if 'order' in req.params else 'desc'
                offset = int(req.params['offset']) if 'offset' in req.params else None
                limit = int(req.params['limit']) if 'limit' in req.params else None

            Session = sessionmaker(bind=engine)
            session = Session()

            try:
                likes = []
                query = session.query(Like)

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
                    attributes = []
                    limit = 100
                    subquery = session.query(Attribute).filter(Attribute.like_id == like.id).limit(limit)
                    count = subquery.count()
                    
                    for index in range(math.ceil(count / limit)):
                        for attribute in subquery.offset(index * limit).all():
                            attributes.append({
                                'name': attribute.name,
                                'start': attribute.start,
                                'end': attribute.end
                            })

                    likes.append({
                        'id': like.id,
                        'name': like.name,
                        'content': like.content,
                        'language': like.language,
                        'attributes': attributes,
                        'timestamp': int(like.timestamp.replace(tzinfo=timezone.utc).timestamp())
                    })

                return func.HttpResponse(json.dumps(likes), status_code=200, mimetype='application/json', charset='utf-8')

            finally:
                session.close()

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