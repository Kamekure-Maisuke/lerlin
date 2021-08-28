## 対象URL
url : https://ja.wikipedia.org/wiki/Mr.Children

## memberデータの作成
- 以下のコマンドをうつ。

```bash
cat site-data |
sed -n '/<span class="mw-headline" id="メンバー">/,/<span class="mw-headline" id="影響">/p' |
grep -E -C 4 '[0-9]{4}-[0-9]{2}-[0-9]{2}' |
sed -r -e 's/<[^>]+>//g' -e '/^$|--/d' -e 's/[a-z]|{.+}//g' -e 's/\.-- \.//' |
awk '{if(NR%5)ORS="\t";else ORS="\n"; print}' |
tr '（）()' '<><>' |
awk -F '[<>]' 'BEGIN{OFS="\t";print "名前","読み","生年月日","出身地","血液型"}{print $1$3,$2$4,$6$9}'
```

## singleデータの作成

```bash
cat site-data |
sed -n '/<span class="mw-headline" id="ディスコグラフィ">/,/<span class="mw-headline" id="配信限定シングル">/p' |
grep -E -C 2 '<td.*?>[0-9]+年' |
sed -r -e 's/<[^>]+>//g' -e '/^$|--/d' |
awk '{if(NR%3)ORS="\t";else ORS="\n";print}' |
awk -F '\t' 'BEGIN{OFS="\t";print "number","title","date"}{sub("[a-z]+","",$1);print $1,$2,$3}'
```
