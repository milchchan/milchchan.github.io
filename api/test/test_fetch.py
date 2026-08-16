import importlib.util
import json
import pathlib
import sys
import types
import unittest


class FakeHttpRequest:
    def __init__(self, method='GET', params=None, headers=None, body=b''):
        self.method = method
        self.params = params or {}
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


def load_fetch_module():
    module_names = ('azure', 'azure.functions', 'shared', 'shared.cache')
    previous_modules = {name: sys.modules.get(name) for name in module_names}

    try:
        azure_module = types.ModuleType('azure')
        azure_functions = types.ModuleType('azure.functions')
        azure_functions.HttpRequest = FakeHttpRequest
        azure_functions.HttpResponse = FakeHttpResponse
        azure_module.functions = azure_functions
        sys.modules['azure'] = azure_module
        sys.modules['azure.functions'] = azure_functions

        shared_module = types.ModuleType('shared')
        shared_module.FETCH_URLS = []
        shared_module.FETCH_PROMPT = ''
        shared_module.TRANSFORM_SYSTEM_PROMPT = ''
        shared_module.TRANSFORM_USER_PROMPT = ''

        shared_cache = types.ModuleType('shared.cache')
        shared_cache.get_cache = lambda name: None
        shared_cache.set_cache = lambda name, value, expire=3600: True
        shared_cache.scan_cache = lambda pattern: []
        shared_cache.delete_cache = lambda names: 0
        shared_module.cache = shared_cache
        sys.modules['shared'] = shared_module
        sys.modules['shared.cache'] = shared_cache

        spec = importlib.util.spec_from_file_location(
            'testable_fetch',
            pathlib.Path(__file__).resolve().parents[1] / 'fetch' / '__init__.py',
        )
        module = importlib.util.module_from_spec(spec)
        spec.loader.exec_module(module)
        return module
    finally:
        for name, previous_module in previous_modules.items():
            if previous_module is None:
                sys.modules.pop(name, None)
            else:
                sys.modules[name] = previous_module


class TestFetch(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        cls.fetch = load_fetch_module()

    def test_get_preserves_subject_and_defaults_missing_subject(self):
        feed_cache = json.dumps({
            'data': [
                {
                    'subject': '  iPhone 18 Proの発売  ',
                    'content': '新しいiPhoneが発売されます',
                    'url': 'https://example.com/iphone',
                    'timestamp': '2026-08-16T01:00:00Z',
                    'score': 0.9,
                    'reason': '注目度が高い',
                },
                {
                    'content': '別のニュースです',
                    'url': 'https://example.com/other',
                    'timestamp': '2026-08-16T00:00:00Z',
                    'score': 0.5,
                    'reason': '一般的なニュース',
                },
            ],
            'timestamp': 1,
        })
        cache = {'fetch/source': feed_cache}
        stored = {}

        self.fetch.get_cache = lambda name: cache.get(name)
        self.fetch.scan_cache = lambda pattern: ['fetch/source']
        self.fetch.set_cache = lambda name, value, expire=3600: stored.update({name: value}) or True

        response = self.fetch.main(FakeHttpRequest())
        payload = json.loads(response.get_body())

        self.assertEqual(response.status_code, 200)
        self.assertEqual(payload[0]['subject'], 'iPhone 18 Proの発売')
        self.assertEqual(payload[1]['subject'], '')
        self.assertIn('fetch?version=2&', next(iter(stored)))

    def test_subject_schema_requires_a_string_on_every_item(self):
        self.assertTrue(self.fetch.has_subject_schema([
            {'subject': 'iPhone 18 Proの発売'},
            {'subject': ''},
        ]))
        self.assertFalse(self.fetch.has_subject_schema([{'content': 'subjectなし'}]))
        self.assertFalse(self.fetch.has_subject_schema([{'subject': None}]))


if __name__ == '__main__':
    unittest.main()
