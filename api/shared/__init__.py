from shared.cache import get_cache, set_cache, scan_cache, delete_cache
from shared.geohash import encode_geohash, decode_geohash, get_neighbors

FETCH_URLS = [
    'https://hnrss.org/best',
    'https://news.yahoo.co.jp/rss/topics/top-picks.xml',
    'https://pc.watch.impress.co.jp/data/rss/1.0/pcw/feed.rdf',
    'https://taisy0.com/feed'
]
FETCH_PROMPT = '''内容を下記の出力形式に変換してください。

# 出力形式
出力形式は以下のJSONフォーマットとします。このフォーマット以外で会話しないでください。内容の重要度、面白さ、興味深さを評価しスコアをつけてください。
```json
[{
    "content":  "<内容>",
    "url": "<URLまたはnull>",
    "timestamp": "<ISO 8601形式>",
    "score": 0.0-1.0,
    "reason": "<スコアの理由>"
}]
```'''