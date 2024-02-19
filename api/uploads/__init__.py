import json
import logging
import os
import certifi
from datetime import timezone
from urllib.parse import urlparse
from sqlalchemy import create_engine, desc
from sqlalchemy.orm import sessionmaker
from shared.models import Upload

import azure.functions as func


engine = create_engine(os.environ['MYSQL_CONNECTION_URL'], connect_args={"ssl": {"ca": certifi.where()}}, pool_recycle=60)


def main(req: func.HttpRequest) -> func.HttpResponse:
    try:
        if req.headers.get('Content-Type') == 'application/json':
            data = req.get_json()
            order = data['order'] if 'order' in data and data['order'] is not None else 'desc'
            offset = data.get('offset')
            limit = data.get('limit')

        else:
            order = req.params['order'] if 'order' in req.params else 'desc'
            offset = int(req.params['offset']) if 'offset' in req.params else None
            limit = int(req.params['limit']) if 'limit' in req.params else None

        Session = sessionmaker(bind=engine)
        session = Session()

        try:
            uploads = []
            query = session.query(Upload)

            if order == 'asc':
                query = query.order_by(Upload.timestamp)
            elif order == 'desc':
                query = query.order_by(desc(Upload.timestamp))
            else:
                return func.HttpResponse(status_code=400, mimetype='', charset='')

            query = query.limit(100 if limit is None else limit)

            if offset is not None:
                query = query.offset(offset)

            for upload in query.all():
                uploads.append({
                    'id': upload.id,#os.path.basename(urlparse(upload.url).path),
                    'url': upload.url,
                    'type': upload.type,
                    'timestamp': int(upload.timestamp.replace(tzinfo=timezone.utc).timestamp())
                })

            return func.HttpResponse(json.dumps(uploads), status_code=200, mimetype='application/json', charset='utf-8')

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
