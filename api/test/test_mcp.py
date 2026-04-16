import importlib.util
import json
import pathlib
import sys
import types
import unittest


class FakeHttpRequest:
    def __init__(self, method='POST', headers=None, body=b''):
        self.method = method
        self.headers = headers or {}
        self._body = body

    def get_body(self):
        return self._body


class FakeHttpResponse:
    def __init__(self, body='', status_code=200, headers=None, mimetype=None, charset=None):
        self._body = body
        self.status_code = status_code
        self.headers = headers or {}
        self.mimetype = mimetype
        self.charset = charset

    def get_body(self):
        if isinstance(self._body, bytes):
            return self._body
        return self._body.encode(self.charset or 'utf-8')


def load_mcp_module():
    azure_module = types.ModuleType('azure')
    azure_functions = types.ModuleType('azure.functions')
    azure_functions.HttpRequest = FakeHttpRequest
    azure_functions.HttpResponse = FakeHttpResponse
    azure_module.functions = azure_functions
    sys.modules['azure'] = azure_module
    sys.modules['azure.functions'] = azure_functions

    jwt_module = types.ModuleType('jwt')
    jwt_module.encode = lambda *args, **kwargs: 'token'
    sys.modules['jwt'] = jwt_module

    shared_module = types.ModuleType('shared')
    shared_cache = types.ModuleType('shared.cache')
    shared_cache.get_cache = lambda name: None
    shared_cache.scan_cache = lambda pattern: []
    shared_module.cache = shared_cache
    sys.modules['shared'] = shared_module
    sys.modules['shared.cache'] = shared_cache

    spec = importlib.util.spec_from_file_location(
        'testable_mcp',
        pathlib.Path(__file__).resolve().parents[1] / 'mcp' / '__init__.py',
    )
    module = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(module)
    return module


class TestMcp(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        cls.mcp = load_mcp_module()

    def _call(self, payload, headers=None):
        request = FakeHttpRequest(
            headers=headers or {'Content-Type': 'application/json'},
            body=json.dumps(payload).encode('utf-8'),
        )
        return self.mcp.main(request)

    def test_invalid_content_type_returns_jsonrpc_error(self):
        request = FakeHttpRequest(headers={'Content-Type': 'text/plain'}, body=b'{}')

        response = self.mcp.main(request)

        self.assertEqual(response.status_code, 200)
        self.assertEqual(json.loads(response.get_body()), {
            'jsonrpc': '2.0',
            'id': None,
            'error': {'code': -32600, 'message': 'Invalid Request'},
        })

    def test_non_object_body_returns_invalid_request(self):
        request = FakeHttpRequest(
            headers={'Content-Type': 'application/json; charset=utf-8'},
            body=json.dumps([]).encode('utf-8'),
        )

        response = self.mcp.main(request)

        self.assertEqual(response.status_code, 200)
        self.assertEqual(json.loads(response.get_body())['error']['code'], -32600)

    def test_initialize_with_invalid_protocol_version_is_rejected(self):
        response = self._call({
            'jsonrpc': '2.0',
            'id': 1,
            'method': 'initialize',
            'params': {'protocolVersion': 'not-a-date', 'capabilities': {}},
        })

        self.assertEqual(response.status_code, 200)
        self.assertEqual(json.loads(response.get_body())['error']['code'], -32600)

    def test_news_with_invalid_limit_returns_invalid_params(self):
        response = self._call({
            'jsonrpc': '2.0',
            'id': 1,
            'method': 'tools/call',
            'params': {'name': 'news', 'arguments': {'limit': 0}},
        })

        self.assertEqual(response.status_code, 200)
        self.assertEqual(json.loads(response.get_body())['error']['code'], -32602)

    def test_weather_with_invalid_coordinates_returns_invalid_params(self):
        response = self._call({
            'jsonrpc': '2.0',
            'id': 1,
            'method': 'tools/call',
            'params': {'name': 'weather', 'arguments': {'latitude': '35.0', 'longitude': 139.0}},
        })

        self.assertEqual(response.status_code, 200)
        self.assertEqual(json.loads(response.get_body())['error']['code'], -32602)


if __name__ == '__main__':
    unittest.main()
