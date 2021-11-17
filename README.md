# kstm blog

[![Build Status](https://travis-ci.org/kstm-su/blog.svg?branch=travis)](https://travis-ci.org/kstm-su/blog)

## how to post

### generate

```bash
touch docs/new-post.md
```

```yml
# docs/.vuepress/config.yml

sidebar:
  - 'new-post' # add top
  ...
```

### edit

```markdown
<!-- vim docs/new-post.md -->

---
title: 'awesome title here'
---

# Awesome page title here

content goes on...

You can use image placed under `docs/.vuepress/public` and it can resolve by path beggining `/`.

i.e. You placed `docs/.vuepress/public/blog/nice.jpg`:
![image](/blog/nice.jpg)
```

See also: [Markdown extensions | VuePress](https://v1.vuepress.vuejs.org/guide/markdown.html#markdown-extensions)

### see on local

```bash
# install dependencies
yarn

# up develop server at localhost:8080
yarn docs:dev
```

### deploy

Powered by Vercel or Netlify :construction:
