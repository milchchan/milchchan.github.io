import importlib.util
import json
import os
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
    PROTOCOL_VERSION = '2026-07-28'

    @classmethod
    def setUpClass(cls):
        os.environ['MCP_ALLOWED_ORIGINS'] = 'https://milchchan.com'
        os.environ.pop('MCP_API_KEY', None)
        cls.mcp = load_mcp_module()

    def _meta(self, protocol_version=None):
        return {
            'io.modelcontextprotocol/protocolVersion': protocol_version or self.PROTOCOL_VERSION,
            'io.modelcontextprotocol/clientInfo': {'name': 'client', 'version': '1.0.0'},
            'io.modelcontextprotocol/clientCapabilities': {},
        }

    def _headers(self, method, name=None, protocol_version=None):
        headers = {
            'Content-Type': 'application/json',
            'Accept': 'application/json, text/event-stream',
            'MCP-Protocol-Version': protocol_version or self.PROTOCOL_VERSION,
            'Mcp-Method': method,
        }

        if name is not None:
            headers['Mcp-Name'] = name

        return headers

    def _call(self, method, params=None, identifier=1, headers=None):
        params = dict(params or {})
        params.setdefault('_meta', self._meta())
        payload = {
            'jsonrpc': '2.0',
            'id': identifier,
            'method': method,
            'params': params,
        }
        request = FakeHttpRequest(
            headers=headers or self._headers(method, params.get('name')),
            body=json.dumps(payload).encode('utf-8'),
        )
        return self.mcp.main(request)

    def test_invalid_content_type_returns_jsonrpc_error(self):
        request = FakeHttpRequest(headers={'Content-Type': 'text/plain'}, body=b'{}')

        response = self.mcp.main(request)

        self.assertEqual(response.status_code, 400)
        self.assertEqual(json.loads(response.get_body()), {
            'jsonrpc': '2.0',
            'id': None,
            'error': {'code': -32600, 'message': 'Invalid Request'},
        })

    def test_invalid_origin_is_rejected(self):
        request = FakeHttpRequest(
            headers={'Content-Type': 'application/json', 'origin': 'https://evil.example'},
            body=b'{}',
        )

        response = self.mcp.main(request)

        self.assertEqual(response.status_code, 403)

    def test_missing_origin_is_accepted(self):
        response = self._call('tools/list')

        self.assertEqual(response.status_code, 200)

    def test_api_key_is_enforced_when_configured(self):
        os.environ['MCP_API_KEY'] = 'secret'

        try:
            response = self._call('tools/list')
        finally:
            os.environ.pop('MCP_API_KEY', None)

        self.assertEqual(response.status_code, 401)

    def test_get_returns_method_not_allowed(self):
        request = FakeHttpRequest(method='GET')

        response = self.mcp.main(request)

        self.assertEqual(response.status_code, 405)

    def test_parse_error_returns_bad_request(self):
        request = FakeHttpRequest(
            headers={'Content-Type': 'application/json'},
            body=b'{',
        )

        response = self.mcp.main(request)

        self.assertEqual(response.status_code, 400)
        self.assertEqual(json.loads(response.get_body())['error']['code'], -32700)

    def test_non_json_number_returns_parse_error(self):
        request = FakeHttpRequest(
            headers={'Content-Type': 'application/json'},
            body=b'{"jsonrpc":"2.0","id":NaN}',
        )

        response = self.mcp.main(request)

        self.assertEqual(response.status_code, 400)
        self.assertEqual(json.loads(response.get_body())['error']['code'], -32700)

    def test_non_utf8_body_returns_parse_error(self):
        request = FakeHttpRequest(
            headers={'Content-Type': 'application/json'},
            body=b'\xff',
        )

        response = self.mcp.main(request)

        self.assertEqual(response.status_code, 400)
        self.assertEqual(json.loads(response.get_body())['error']['code'], -32700)

    def test_non_object_body_returns_invalid_request(self):
        request = FakeHttpRequest(
            headers={'Content-Type': 'application/json; charset=utf-8'},
            body=json.dumps([]).encode('utf-8'),
        )

        response = self.mcp.main(request)

        self.assertEqual(response.status_code, 400)
        self.assertEqual(json.loads(response.get_body())['error']['code'], -32600)

    def test_request_requires_valid_identifier(self):
        response = self._call('tools/list', identifier=True)

        self.assertEqual(response.status_code, 400)
        self.assertEqual(json.loads(response.get_body())['error']['code'], -32600)

    def test_request_rejects_float_identifier(self):
        response = self._call('tools/list', identifier=1.5)

        self.assertEqual(response.status_code, 400)
        self.assertEqual(json.loads(response.get_body())['error']['code'], -32600)

    def test_request_requires_meta(self):
        response = self._call('tools/list', params={'_meta': None})

        self.assertEqual(response.status_code, 400)
        self.assertEqual(json.loads(response.get_body())['error']['code'], -32602)

    def test_request_requires_client_capabilities(self):
        meta = self._meta()
        del meta['io.modelcontextprotocol/clientCapabilities']

        response = self._call('tools/list', params={'_meta': meta})

        self.assertEqual(response.status_code, 400)
        self.assertEqual(json.loads(response.get_body())['error']['code'], -32602)

    def test_request_accepts_missing_client_info(self):
        meta = self._meta()
        del meta['io.modelcontextprotocol/clientInfo']

        response = self._call('tools/list', params={'_meta': meta})

        self.assertEqual(response.status_code, 200)

    def test_request_rejects_invalid_client_info(self):
        meta = self._meta()
        meta['io.modelcontextprotocol/clientInfo'] = {'name': 'client'}

        response = self._call('tools/list', params={'_meta': meta})

        self.assertEqual(response.status_code, 400)
        self.assertEqual(json.loads(response.get_body())['error']['code'], -32602)

    def test_request_rejects_invalid_progress_token(self):
        meta = self._meta()
        meta['progressToken'] = True

        response = self._call('tools/list', params={'_meta': meta})

        self.assertEqual(response.status_code, 400)
        self.assertEqual(json.loads(response.get_body())['error']['code'], -32602)

    def test_request_rejects_invalid_log_level(self):
        meta = self._meta()
        meta['io.modelcontextprotocol/logLevel'] = 'verbose'

        response = self._call('tools/list', params={'_meta': meta})

        self.assertEqual(response.status_code, 400)
        self.assertEqual(json.loads(response.get_body())['error']['code'], -32602)

    def test_request_accepts_null_optional_metadata(self):
        meta = self._meta()
        meta['progressToken'] = None
        meta['io.modelcontextprotocol/logLevel'] = None

        response = self._call('tools/call', {
            'name': 'news',
            'arguments': {'limit': 1},
            'requestState': None,
            '_meta': meta,
        })

        self.assertEqual(response.status_code, 200)
        result = json.loads(response.get_body())['result']
        self.assertEqual(result['resultType'], 'complete')
        self.assertFalse(result['isError'])

    def test_request_requires_protocol_version_header(self):
        headers = self._headers('tools/list')
        del headers['MCP-Protocol-Version']

        response = self._call('tools/list', headers=headers)

        self.assertEqual(response.status_code, 400)
        self.assertEqual(json.loads(response.get_body())['error']['code'], -32020)

    def test_request_rejects_protocol_version_header_mismatch(self):
        response = self._call('tools/list', headers=self._headers('tools/list', protocol_version='2025-11-25'))

        self.assertEqual(response.status_code, 400)
        self.assertEqual(json.loads(response.get_body())['error']['code'], -32020)

    def test_request_rejects_unsupported_protocol_version(self):
        meta = self._meta('2025-11-25')
        headers = self._headers('tools/list', protocol_version='2025-11-25')

        response = self._call('tools/list', params={'_meta': meta}, headers=headers)

        self.assertEqual(response.status_code, 400)
        payload = json.loads(response.get_body())
        self.assertEqual(payload['error']['code'], -32022)
        self.assertEqual(payload['error']['data'], {
            'supported': ['2026-07-28'],
            'requested': '2025-11-25',
        })

    def test_request_requires_matching_method_header(self):
        response = self._call('tools/list', headers=self._headers('server/discover'))

        self.assertEqual(response.status_code, 400)
        self.assertEqual(json.loads(response.get_body())['error']['code'], -32020)

    def test_request_rejects_invalid_method_header_value(self):
        response = self._call('tools/list ', headers=self._headers('tools/list '))

        self.assertEqual(response.status_code, 400)
        self.assertEqual(json.loads(response.get_body())['error']['code'], -32020)

    def test_server_discover_returns_supported_version_and_capabilities(self):
        response = self._call('server/discover')

        self.assertEqual(response.status_code, 200)
        result = json.loads(response.get_body())['result']
        self.assertEqual(result['resultType'], 'complete')
        self.assertEqual(result['supportedVersions'], ['2026-07-28'])
        self.assertEqual(result['capabilities'], {'tools': {'listChanged': False}})
        self.assertEqual(result['cacheScope'], 'public')
        self.assertGreaterEqual(result['ttlMs'], 0)

    def test_tools_list_returns_latest_result_shape(self):
        response = self._call('tools/list')

        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.headers['MCP-Protocol-Version'], '2026-07-28')
        result = json.loads(response.get_body())['result']
        self.assertEqual(result['resultType'], 'complete')
        self.assertEqual(result['cacheScope'], 'public')
        self.assertGreaterEqual(result['ttlMs'], 0)
        self.assertEqual([tool['name'] for tool in result['tools']], ['now', 'news', 'weather'])

    def test_tools_list_rejects_invalid_cursor(self):
        response = self._call('tools/list', {'cursor': 1})

        self.assertEqual(response.status_code, 200)
        self.assertEqual(json.loads(response.get_body())['error']['code'], -32602)

    def test_header_names_are_case_insensitive(self):
        headers = {
            'content-type': 'application/json',
            'mcp-protocol-version': '2026-07-28',
            'mcp-method': 'tools/list',
        }

        response = self._call('tools/list', headers=headers)

        self.assertEqual(response.status_code, 200)

    def test_tools_call_requires_matching_name_header(self):
        response = self._call('tools/call', {'name': 'now'}, headers=self._headers('tools/call', 'news'))

        self.assertEqual(response.status_code, 400)
        self.assertEqual(json.loads(response.get_body())['error']['code'], -32020)

    def test_tools_call_decodes_base64_name_header(self):
        headers = self._headers('tools/call')
        headers['Mcp-Name'] = '=?base64?54++5Zyo?='

        response = self._call('tools/call', {'name': '現在'}, headers=headers)

        self.assertEqual(response.status_code, 200)
        self.assertEqual(json.loads(response.get_body())['error']['code'], -32602)

    def test_now_accepts_omitted_arguments(self):
        response = self._call('tools/call', {'name': 'now'})

        self.assertEqual(response.status_code, 200)
        result = json.loads(response.get_body())['result']
        self.assertEqual(result['resultType'], 'complete')
        self.assertFalse(result['isError'])

    def test_tools_call_rejects_non_object_arguments(self):
        response = self._call('tools/call', {'name': 'now', 'arguments': []})

        self.assertEqual(response.status_code, 200)
        self.assertEqual(json.loads(response.get_body())['error']['code'], -32602)

    def test_news_with_invalid_limit_returns_tool_error(self):
        response = self._call('tools/call', {'name': 'news', 'arguments': {'limit': 0}})

        self.assertEqual(response.status_code, 200)
        result = json.loads(response.get_body())['result']
        self.assertEqual(result['resultType'], 'complete')
        self.assertTrue(result['isError'])

    def test_weather_with_invalid_coordinates_returns_tool_error(self):
        response = self._call('tools/call', {'name': 'weather', 'arguments': {'latitude': '35.0', 'longitude': 139.0}})

        self.assertEqual(response.status_code, 200)
        result = json.loads(response.get_body())['result']
        self.assertEqual(result['resultType'], 'complete')
        self.assertTrue(result['isError'])

    def test_news_failure_returns_tool_error(self):
        original_scan_cache = self.mcp.scan_cache
        self.mcp.scan_cache = lambda pattern: (_ for _ in ()).throw(RuntimeError('failed'))

        try:
            response = self._call('tools/call', {'name': 'news'})
        finally:
            self.mcp.scan_cache = original_scan_cache

        result = json.loads(response.get_body())['result']
        self.assertEqual(result['resultType'], 'complete')
        self.assertTrue(result['isError'])
        self.assertNotIn('failed', result['content'][0]['text'])

    def test_initialize_is_not_supported(self):
        response = self._call('initialize')

        self.assertEqual(response.status_code, 404)
        self.assertEqual(json.loads(response.get_body())['error']['code'], -32601)

    def test_unknown_method_returns_not_found(self):
        response = self._call('unknown/method')

        self.assertEqual(response.status_code, 404)
        self.assertEqual(json.loads(response.get_body())['error']['code'], -32601)

    def test_named_method_requires_name_header_before_not_found(self):
        response = self._call('resources/read', {'uri': 'https://example.com/resource'})

        self.assertEqual(response.status_code, 400)
        self.assertEqual(json.loads(response.get_body())['error']['code'], -32020)


if __name__ == '__main__':
    unittest.main()
