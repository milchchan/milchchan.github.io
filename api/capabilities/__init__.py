import json
import logging

import azure.functions as func


def main(req: func.HttpRequest) -> func.HttpResponse:
    try:
        return func.HttpResponse(json.dumps({
            'result': {
                'tools': [
                    {
                        'name': 'news',
                        'description': 'Retrieves the latest news',
                        'inputSchema': {
                            'type': 'object',
                            'properties': {},
                            'required': []
                        }
                    }],
                'nextCursor': None  
            }
        }), status_code=200, mimetype='application/json', charset='utf-8')

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
