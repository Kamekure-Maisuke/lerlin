# tsv操作及びスクレイピング

## tsv操作
- ＊＊＊.tsvを表示したり、列を抽出してみる。

```
cat ＊＊＊.tsv
cut -f2 ＊＊＊.tsv
awk -F '\t' '{print $2,$4}'
```

- tsvを整形して綺麗に表示する。
	- `cat ＊＊.tsv | column -ts $'\t'`

## スクレイピング
- 対象URL : https://zenn.dev/feed
- 対象URLのXMLソースを取得してくる。
	- `curl -s 'URL'`
- 取得してきたXMLを整形する。
	- `xmllint --format ファイル名`
- 取得してきたXMLから`<title>`タグに囲まれた部分を取得してくる。
	- `cat ファイル名 | grep '<title>'`
- 取得してきたものからcdataを削除する。
	- `cat ファイル名 | xmllint --nocdata`
- titleの他にlinkとpubDateも取得してくる。
	- `cat ファイル名 | grep -e '<title>' -e '<link>' -e 'pubDate'`
- `<>`で囲まれた部分を削除する。
	- `cat ファイル名 | sed -r 's/<[^>]+>//g'`
