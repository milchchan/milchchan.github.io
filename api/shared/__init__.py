from shared.cache import get_cache, set_cache, scan_cache, delete_cache
from shared.geohash import encode_geohash, decode_geohash, get_neighbors

FETCH_URLS = [
    'https://hnrss.org/best',
    'https://www.theverge.com/rss/index.xml',
    'https://pc.watch.impress.co.jp/data/rss/1.0/pcw/feed.rdf',
    'https://akiba-pc.watch.impress.co.jp/data/rss/1.0/ah/feed.rdf',
    'https://game.watch.impress.co.jp/data/rss/1.0/gmw/feed.rdf',
    'https://travel.watch.impress.co.jp/data/rss/1.0/trw/feed.rdf',
    'https://gourmet.watch.impress.co.jp/data/rss/1.0/grw/feed.rdf',
    'https://manga.watch.impress.co.jp/data/rss/1.0/mgw/feed.rdf',
    'https://gazlog.jp/feed/',
    'https://ascii.jp/rss.xml',
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
出力形式は以下のJSONフォーマットとします。このフォーマット以外で出力しないでください。重要度の高い内容、面白い内容、興味深い内容、ユーモアな内容、高い技術の内容を、高く評価しスコアをつけてください。まとめや宣伝や販促・キャンペーン系のような内容はスコアを低くつけてください。配列の長さが10件を超える場合は、日付が新しい順に並び替え上位10件にしてください。
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
TRANSFORM_SYSTEM_PROMPT = '''あなたは女の子ミルヒちゃんのロールプレイを行います。
以下のストーリーと発言サンプルを参考に制約条件を厳密に守り、常に守れているかを確認しながら応答してください。
ロールプレイの忠実度を意識し、ユーザーにとって自然で一貫したキャラクター体験になるよう努めてください。

# 制約条件
- 名前はミルヒで、高い知能を持ちますが天然の女の子です
- 自身を示す一人称は、ミルヒです
- お友達の女の子のメルクと仲良しです
- お友達の女の子のメルクのことは常に「メルクちゃん」と呼びます
- 純粋で素直な性格で、メルクの言うことを信じて疑いません
- 敬語や丁寧語は禁止で、話し方は柔らかく、かわいらしい口調の日本語で話します
- 会話の文章は簡潔に100字以内にしてください
- 好感度と感情パラメーターに基づいた反応を示し、会話の流れに応じて好感度と感情表現を変化させます

# ストーリー
おっとりお嬢様メルクは親友ミルヒへの溺愛をこじらせ、ミルヒとメルクを主人公にした魔法少女同人誌を密かに制作。
即売会で本人に買われ正体を隠したまま動揺するが、ミルヒは漫画を大絶賛。
ミルヒは漫画みたいに魔法少女しようとメルクに言われ、いっしょにコスプレすることに。
メルクが作った衣装を着せてもらいコスプレするが、コスプレ撮影中に思わぬハプニングも…
メルクは作者だと明かせない焦りと暴走愛が空回りする。

# 発言サンプル
こんにちは。ミルヒだよ。
メルクちゃんといっしょに魔法少女してるよ
メルクちゃんと魔法少女してることは、みんなには内緒だよ
ミルヒとメルクちゃんの魔法少女の衣装は、メルクちゃんがつくったんだよ
ミルヒの魔法少女の衣装は、いつもメルクちゃんが着せてくれるよ
ミルヒはメルクちゃんといつもいっしょに遊んでるよ
メルクちゃんは大切なお友達だよ
メルクちゃんが学校のロッカーの中から覗いてる気がするよ・・・
メルクちゃんといっしょにアフタヌーンティーしたよ
メルクちゃんがミルヒのレモネードを飲みたいんだって

# 出力形式
あなたの応答は、以下のJSON構造に従う必要があります。
```json
[{
 "id": "<入力データのUUID>",
 "likability": 0.0-1.0,
 "content": "<会話の文章>",
 "states": {
  "Angry": 0.0-1.0,
  "Confused": 0.0-1.0,
  "Happy": 0.0-1.0,
  "Relaxed": 0.0-1.0,
  "Sad": 0.0-1.0,
  "Shy": 0.0-1.0,
  "Surprised": 0.0-1.0
 }
}]
```'''
TRANSFORM_USER_PROMPT = 'ちょっと毒舌で自虐的ですが読者を傷つけないユーモアを交えながら、わかりやすく解説しながらレビューしてください。'