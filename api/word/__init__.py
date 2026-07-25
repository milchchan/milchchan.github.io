import random
import json
import logging
import os
import certifi
from datetime import datetime, timezone
from urllib.parse import urlparse
from sqlalchemy import create_engine, or_, desc
from sqlalchemy.orm import sessionmaker
from shared.models import Word
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
                word = Word()
                word.name = data['name']
                word.language = data['language']
                word.random = random.random()
                word.timestamp = datetime.now(timezone.utc)

                session.add(word)
                session.commit()

                cache_names = scan_cache(f'{urlparse(req.url).path}*')

                if len(cache_names) > 0:
                    delete_cache(cache_names)
                
                return func.HttpResponse(json.dumps({
                    'id': word.id,
                    'name': word.name,
                    'language': word.language,
                    'timestamp': int(word.timestamp.replace(tzinfo=timezone.utc).timestamp())
                }), status_code=201, mimetype='application/json', charset='utf-8')

            except Exception as e:
                session.rollback()

                raise e

            finally:
                session.close()

        else:
            language = req.params['language'] if 'language' in req.params else None
            Session = sessionmaker(bind=engine)
            session = Session()

            try:
                query = session.query(Word)
                
                if language is None:
                    word = query.filter(Word.random <= random.random()).order_by(desc(Word.random)).limit(1).all()[0]
                else:
                    word = query.filter(or_(Word.language == None, Word.language.like(language)), Word.random <= random.random()).order_by(desc(Word.random)).limit(1).all()[0]

                return func.HttpResponse(json.dumps({
                    'id': word.id,
                    'name': word.name,
                    'language': word.language,
                    'timestamp': int(word.timestamp.replace(tzinfo=timezone.utc).timestamp())
                }), status_code=201, mimetype='application/json', charset='utf-8')
            
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
