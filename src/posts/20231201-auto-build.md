---
title: "kstm ホームページを GitHub Actions で回す"
date: 2023-12-01T00:00:45+09:00
---

# kstm ホームページを GitHub Actions で回す

この記事は [kstm Advent Calendar 2023](https://qiita.com/advent-calendar/2023/kstm) の 1 日目の記事です。

こんにちは。2023 年のサークル長の高原です。

この記事で紹介する、[GitHub Actions](https://docs.github.com/ja/actions) での自動デプロイに切り替えたことによって、その気になれば手元にビルド環境を用意しなくてもサイトを更新できるようになりました。これまでは手元に Node.js と yarn を入れて、いくつかコマンドを打たねばなりませんでしたので、記事投稿のハードルがいくらか下がったはずです。

この記事では、以前の作業手順、今回作成したアクションの構成、今後の課題へのメモを書き留めておきます。

## 以前の作業手順

GitHub Actions ではアクションの実行環境に指定した環境で実行可能なコマンドや GitHub 上に公開されているアクションの組み合わせでタスクを回します。

アクションの設定ファイルを書くために、作業手順を確認します。

どのような更新を加える場合にも、次のような作業をするようにと README.md に書かれていました：

1. リポジトリを clone する。
2. `yarn install` を実行する。
3. 編集を加える。
4. `yarn src:build` を実行する。docs ディレクトリの中にデプロイ内容が生成される。
5. docs ディレクトリ内の CNAME ファイルが消えていた場合は復元する。
6. commit する。push する。master にマージする。GitHub Pages の機能により master の docs ディレクトリ内がデプロイされる。

編集に yarn を要した理由は、デプロイ内容を docs ディレクトリ以下に置いた状態で master を更新する必要があったためでした。

## アクションの構成

以上のタスクを GitHub Actions で実行するようにしました。[actions/upload-pages-artifact](https://github.com/actions/upload-pages-artifact) と [actions/deploy-pages](https://github.com/actions/deploy-pages) を用いることで、master の docs ディレクトリを更新することなしにデプロイができますので、次のようなタスクを実行させています：

1. master のソースファイルが更新（編集）されたら起動する。
2. リポジトリを clone する。
3. `yarn install` 相当のことを実行する。
4. `yarn src:build` を実行する。
5. docs ディレクトリ内を artifact としてアップロードする（actions/upload-pages-artifact）。
6. artifact をデプロイする（actions/deploy-pages）。

詳細は `.github/workflows/vuepress.yml` を見てください。Actions がやってくれていることは手作業の時とあまり変わりませんが、我々が行う作業は master へのマージだけとなりました。

なお、CNAME ファイルを用意しなくても GitHub が CNAME をどうにかしてくれるようになったため、それに関連する作業はタスクからは消えています。もし変更する必要があれば、リポジトリの設定から更新できます。

## 今後の課題

### yarn v1 はもう古い

今回の作業を行った後、確認のために `yarn src:build` を実行したのですが、Node.js v20 ではそのままでは動かないようです。今この記事を書くために（nvm-windows を使っているので楽とはいえ）v16 を用意しているのはとても微妙です。

パッケージ管理ツールの更新については[以前より Issue が上がっています](https://github.com/kstm-su/kstm-su.github.io/issues/7)ので、興味のあるメンバーがいたら手伝ってください……

### Blog サイドメニューの自動生成

Blog のサイドメニューを更新するために `src/.vuepress/config.js` をいじるのもまあまあ面倒です。これも今後自動化したいですね。

## まとめ

以前の作業を洗練させて自動化しました。記事が少し書きやすくなりましたので、メンバー各位の新しい記事が期待できますね。

今後の課題も少し残っていますので、このサイトをさらに洗練させていけたら面白いと思います。

もちろん、完全に作り変えてもいいと思いますよ！

（文責：高原）
