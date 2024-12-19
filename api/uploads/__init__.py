import json
import logging
import os
from datetime import timezone
from urllib.parse import urlparse, urljoin
from sqlalchemy import create_engine, desc
from sqlalchemy.orm import sessionmaker
from shared.models import Upload
from shared.cache import get_cache, set_cache

import azure.functions as func


engine = create_engine(os.environ['POSTGRESQL_CONNECTION_URL'], pool_recycle=300)


def main(req: func.HttpRequest) -> func.HttpResponse:
    try:
        if req.headers.get('Content-Type') == 'application/json':
            data = req.get_json()
            order = data['order'] if 'order' in data and data['order'] is not None else 'desc'
            offset = data.get('offset')
            limit = data.get('limit')
            mime_type = data.get('type')

        else:
            order = req.params['order'] if 'order' in req.params else 'desc'
            offset = int(req.params['offset']) if 'offset' in req.params else None
            limit = int(req.params['limit']) if 'limit' in req.params else None
            mime_type = req.params['type'] if 'type' in req.params else None

        parsed_url = urlparse(req.url)
        cache_name = f'{parsed_url.path}?{parsed_url.query}' if len(parsed_url.query) > 0 else parsed_url.path
        cached_data = get_cache(cache_name)

        if cached_data is None:
            Session = sessionmaker(bind=engine)
            session = Session()

            try:
                uploads = []
                query = session.query(Upload)

                if mime_type is not None:
                    query = query.filter(Upload.type.like(mime_type))

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
                    identifier = os.path.basename(urlparse(upload.url).path)
                    uploads.append({
                        'id': identifier,
                        'url': urljoin('https://static.milchchan.com', identifier),
                        'type': upload.type,
                        'timestamp': int(upload.timestamp.replace(tzinfo=timezone.utc).timestamp())
                    })

                json_data = json.dumps(uploads)
                set_cache(cache_name, json_data)

                return func.HttpResponse(json_data, status_code=200, mimetype='application/json', charset='utf-8')

            finally:
                session.close()

        else:
            return func.HttpResponse(json.dumps(cached_data), status_code=200, mimetype='application/json', charset='utf-8')

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
