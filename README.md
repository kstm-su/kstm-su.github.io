# kstm Homepage
VuePressで再構成したkstm HP

## インストール方法
cloneした後に以下を実行してください。
branchはmasterではなく、新たに切ってください。
```bash
npm ci
```

## 新規記事の作り方

### localで環境を立ち上げる

```bash
# install dependencies
npm ci

# up develop server at localhost:8080
npm run src:dev
```

### 新しく記事を作る

```bash
touch src/posts/new-post.md
```

サイドバーに記事へのリンクを追加する

`/posts`からパスを書く必要があります
```js
# src/.vuepress/config.js

sidebar: [
      {
        ...,
        children: [
            '/posts/',
            '/posts/new-post',
            ...
```

### 編集する
先ほど作ったmdファイルを編集してください

```markdown
<!-- vim src/posts/new-post.md -->

---
title: 'awesome title here' # サイドバーとウィンドウタイトルになります
---

# めっちゃめちゃいい見出し

面白い話 ...

画像は `src/.vuepress/public` 以下に置いてください  
`src/.vuepress/public` を `/` としてパスを解決することができます
```

See also: [Markdown extensions | VuePress](https://v1.vuepress.vuejs.org/guide/markdown.html#markdown-extensions)

### 確認事項

1. blogのページで作った記事タイトルがサイドバーに表示されているか
2. 記事は期待通りに表示されているか(画像・リンクを含む)

### (参考) デプロイされるファイルの確認

GitHub Actions を利用した自動デプロイが行われます。条件は master ブランチへのプッシュです。設定ファイルは `.github/workflows/vuepress.yml` にあります。

ドメインはリポジトリの設定から編集する必要があります。以前のようにデプロイ範囲内に CNAME ファイルを用意する必要はなくなりました。

次のコマンドを実行することで、手元で実際にデプロイされるファイルを確認することができます。生成場所は docs ディレクトリ以下です。

```bash
npm run src:build
```

## old homepage
https://github.com/kstm-su/old-kstm-su.github.io
