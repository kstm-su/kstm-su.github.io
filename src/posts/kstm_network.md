---
title: "kstm_network"
date: 2018-12-14T12:56:00+09:00
---
# kstmのネットワーク構成

筆者：Tsurugi

これはアドベントカレンダー2018/12/15の記事でもあります。

## 主旨

我が部のネットワークの引き継ぎ会の記録をまとめます。構成を知っている先輩方の卒業によるネットワークに対応する人がいなくなるのは危険なので記録として残したいと思います。会に参加できていない人にも見ていただきたいです。その他の方には我々がいかなる構成を成した環境に生きているか知ってもらい楽しんでもらえたら幸いです。

## 本文

我々はネットワークの構成をgoogleスプレッドシートで共有しています。以下に修正を施した画像を示します。

![スプレッドシート](/KstmNetwork/AdC15-1_with-blur.png)

左の列に装置名、上の行にvlanIDで、表内にIPアドレスを記入しています。

次に先輩が書き起こしてくださった図を示します。ホワイトボードの反射光で部室が見えたので修正してあります。

![wboard](/KstmNetwork/AdC15-2.jpg)

![wboard2](/KstmNetwork/AdC15-3.jpg)

行がVlan、列が何らかの装置(スイッチやサーバ)で、接続が黒丸でtrankが白丸で表現されています。

手書きの画像ファイルでは扱いにくいということで、現在グラフないしを製作中とのことです。

#### 勉強会での私の理解

私自身以前からシートを見て構成を見ることはできましたしちょくちょく話を聞いていたがよく理解できていなかったですが、

スイッチ・サーバの名前に関して、スイッチ名は通過点という意味で長野県の駅名を、サーバ名は走らせる側という意味で特急ないしの列車名ベースに、名前が付けられているということに目からウロコでした。それが分かるだけでだいぶ鮮明に何やってるか分かるので素晴らしいと思いました。
また、10.111.~.~の、「111」の由来として「kstm」のASCII値の平均を取ってる？らしく、これらの手法で何らかの意味のある数字を生成して扱っているそうです。以下に教えてもらったコードを示します。

```
var s="kstm"
Math.floor(s.split('').map(c => c.codePointAt(0)).reduce((acc, cur) => acc + cur)/s.length)
```

## まとめ

とりあえず、現状どうなっているか、についてシートの見方から教わることができて私も少しはマシに理解できたと思うので良かったです。

機能していない(存在していない)項目がシートに残っている等の情報を修正できて、シートの信頼性が向上できたので是非、確認できる人には確認して興味持っていただきたく思います。

見れない人でも興味があれば、部長(私)か部長が誰なのか知ってる人に言ってください。検討します。(ストレートで承認と思いますが)
