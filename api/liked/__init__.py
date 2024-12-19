import math
import json
import logging
import os
import certifi
from datetime import datetime, timezone
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from shared.models import Like, Attribute

import azure.functions as func


engine = create_engine(os.environ['MYSQL_CONNECTION_URL'], connect_args={'ssl_ca': certifi.where(), 'ssl_verify_cert': True, 'ssl_verify_identity': True}, pool_recycle=300)


def main(req: func.HttpRequest) -> func.HttpResponse:
    try:
        if req.method == 'PUT':
            if req.headers.get('Content-Type') == 'application/json':
                data = req.get_json()

                Session = sessionmaker(bind=engine)
                session = Session()
                
                try:
                    like = session.query(Like).filter(Like.id == int(req.route_params.get('id'))).one()
                    attributes = []
                    limit = 100
                    query = session.query(Attribute).filter(Attribute.like_id == like.id)
                    count = query.count()
                    query = query.limit(limit)
                    updated = False
                    
                    for index in range(math.ceil(count / limit)):
                        for attribute in query.offset(index * limit).all():
                            session.delete(attribute)
                            session.commit()

                            updated = True

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

                            updated = True

                    if 'name' in data:
                        like.name = data['name']
                        updated = True

                    if 'content' in data:
                        like.content = data['content']
                        updated = True

                    if 'language' in data:
                        like.language = data['language']
                        updated = True

                    if updated:
                        like.timestamp = datetime.now(timezone.utc)
                        session.commit()
                    
                        return func.HttpResponse(json.dumps({
                            'id': like.id,
                            'name': like.name,
                            'content': like.content,
                            'language': like.language,
                            'attributes': attributes,
                            'timestamp': int(like.timestamp.replace(tzinfo=timezone.utc).timestamp())
                        }), status_code=200, mimetype='application/json', charset='utf-8')

                except Exception as e:
                    session.rollback()

                    raise e

                finally:
                    session.close()

        elif req.method == 'DELETE':
            Session = sessionmaker(bind=engine)
            session = Session()
            
            try:
                like = session.query(Like).filter(Like.id == int(req.route_params.get('id'))).one()
                attributes = []
                limit = 100
                query = session.query(Attribute).filter(Attribute.like_id == like.id)
                count = query.count()
                query = query.limit(limit)
                
                for index in range(math.ceil(count / limit)):
                    for attribute in query.offset(index * limit).all():
                        session.delete(attribute)
                        session.commit()

                        attributes.append({
                            'name': attribute.name,
                            'start': attribute.start,
                            'end': attribute.end
                        })

                session.delete(like)
                session.commit()

                return func.HttpResponse(json.dumps({
                    'id': like.id,
                    'name': like.name,
                    'content': like.content,
                    'language': like.language,
                    'attributes': attributes,
                    'timestamp': int(like.timestamp.replace(tzinfo=timezone.utc).timestamp())
                }), status_code=200, mimetype='application/json', charset='utf-8')

            except Exception as e:
                session.rollback()

                raise e

            finally:
                session.close()

        else:
            Session = sessionmaker(bind=engine)
            session = Session()
            
            try:
                like = session.query(Like).filter(Like.id == int(req.route_params.get('id'))).one_or_none()

                if like is not None:
                    attributes = []
                    limit = 100
                    subquery = session.query(Attribute).filter(Attribute.like_id == like.id)
                    count = subquery.count()
                    subquery = subquery.limit(limit)
                    
                    for index in range(math.ceil(count / limit)):
                        for attribute in subquery.offset(index * limit).all():
                            attributes.append({
                                'name': attribute.name,
                                'start': attribute.start,
                                'end': attribute.end
                            })
                    
                    return func.HttpResponse(json.dumps({
                        'id': like.id,
                        'name': like.name,
                        'content': like.content,
                        'language': like.language,
                        'attributes': attributes,
                        'timestamp': int(like.timestamp.replace(tzinfo=timezone.utc).timestamp())
                    }), status_code=200, mimetype='application/json', charset='utf-8')

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
