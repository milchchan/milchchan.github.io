from shared.cache import get_cache, set_cache, scan_cache, delete_cache
from shared.geohash import encode_geohash, decode_geohash, get_neighbors

FETCH_URLS = [
    'https://hnrss.org/best',
    'https://pc.watch.impress.co.jp/data/rss/1.0/pcw/feed.rdf',
    'https://game.watch.impress.co.jp/data/rss/1.0/gmw/feed.rdf',
    'https://taisy0.com/feed',
    'https://rss.itmedia.co.jp/rss/2.0/news_bursts.xml',
    'https://www.publickey1.jp/atom.xml',
    'https://gigazine.net/news/rss_2.0/',
    'https://qiita.com/popular-items/feed',
    'https://zenn.dev/feed',
    'https://automaton-media.com/feed/',
    'https://kai-you.net/contents/feed.rss',
    'https://oshitimes.net/feed',
    'https://b.hatena.ne.jp/hotentry/all.rss',
    'https://www.4gamer.net/rss/index.xml'
]
FETCH_PROMPT = '''内容を下記の出力形式に変換してください。

# 出力形式
出力形式は以下のJSONフォーマットとします。このフォーマット以外で出力しないでください。内容の重要度、面白さ、興味深さを評価しスコアをつけてください。配列の長さが10件を超える場合は、日付が新しい順に並び替え上位10件にしてください。
```json
[{
    "language":  "ja",
    "content":  "<内容>",
    "url": "<URLまたはnull>",
    "timestamp": "<ISO 8601形式またはnull>",
    "score": 0.0-1.0,
    "reason": "<スコアの理由>"
}]
```'''