import re
import json
import logging
from datetime import datetime, timezone

import azure.functions as func


def main(req: func.HttpRequest) -> func.HttpResponse:
    try:
        if req.method == 'GET':# and req.headers.get('Content-Type') == 'application/json':
            '''
            match = re.match('Bearer\\s(.+)', req.headers['Authorization'])

            if match:
                pass

            else:
                return func.HttpResponse(status_code=401, mimetype='', charset='')
            '''
            return func.HttpResponse(json.dumps({
                'authorization': req.headers['Authorization'] if 'Authorization' in req.headers else None
            }), status_code=200, mimetype='application/json', charset='utf-8')
            
            '''
            if req.headers['Authorization'].startswith('Bearer '):
                if verify(req.headers['X-Authorization'].split(' ')[1], os.environ['AUTH0_JWKS_URL'], os.environ['AUTH0_API_AUDIENCE'], os.environ['AUTH0_ISSUER'], [os.environ['AUTH0_ALGORITHM']]) is None and verify(req.headers['X-Authorization'].split(' ')[1], os.environ['AUTH0_JWKS_URL'], os.environ['AUTH0_AUDIENCE'], os.environ['AUTH0_ISSUER'], [os.environ['AUTH0_ALGORITHM']]) is None:
                    return func.HttpResponse(status_code=401, mimetype='', charset='')
            else:
                return func.HttpResponse(status_code=401, mimetype='', charset='')
            '''
            #data = req.get_json()

            '''
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
            '''
        
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
