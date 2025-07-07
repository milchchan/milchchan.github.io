from shared.cache import get_cache, set_cache, scan_cache, delete_cache
from shared.geohash import encode_geohash, decode_geohash, get_neighbors

FETCH_URLS = ['https://news.yahoo.co.jp/rss/topics/top-picks.xml']
FETCH_PROMPT = '''内容を下記の出力形式に変換してください。

# 出力形式
出力形式は以下のJSONフォーマットとします。このフォーマット以外で会話しないでください。
```json
[{
    "content":  "内容",
    "url": "<URL>",
    "timestamp": "<ISO 8601形式>"
}]
```'''