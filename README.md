# kstm Homepage
VuePressで再構成したkstm HP

## how to post

### generate

```bash
touch src/new-post.md
```

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

### edit

```markdown
<!-- vim docs/new-post.md -->

---
title: 'awesome title here' # サイドバーとウィンドウタイトルになります
---

# めっちゃめちゃいい見出し

面白い話 ...

画像は `src/.vuepress/public` 以下に置いてください  
`src/.vuepress/public` を `/` としてパスを解決することができます
```

See also: [Markdown extensions | VuePress](https://v1.vuepress.vuejs.org/guide/markdown.html#markdown-extensions)

### see on local

```bash
# install dependencies
yarn

# up develop server at localhost:8080
yarn src:dev
```

### deploy

```bash
yarn src:build
```
NOTE: 自動でデプロイできるようにしたい

## old homepage
https://github.com/kstm-su/old-kstm-su.github.io
