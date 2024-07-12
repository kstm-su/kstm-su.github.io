import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'

export default defineUserConfig({
  bundler: viteBundler({
    vuePluginOptions: {
      template: {
        transformAssetUrls: {
          includeAbsolute: false
        }
      }
    }
  }),
  title: "kstm",
  dest: "docs/",
  head: [["link", { rel: "icon", type: "image/svg", href: "/kstm.svg" }]],
  theme: defaultTheme({
    logo: "/kstm.svg",
    search: false,
    nav: [
      { text: "kstmについて", link: "/aboutus" },
      { text: "Join", link: "/join" },
      { text: "Contact", link: "/contact" },
      { text: "Blog", link: "/posts/" },
    ],

    // HACK: 自動でインデックスできると楽
    sidebar: [
      {
        title: "Blog",
        path: "/posts/",
        children: [
          "/posts/",
          "/posts/20240515-bbq",
          "/posts/20231201-auto-build.md",
          "/posts/geekhaku",
          "/posts/ictsc-2020",
          "/posts/generate_bacon",
          "/posts/advent-calendar-2018",
          "/posts/kstm_network",
          "/posts/kstm-activity-2017",
          "/posts/advent-calendar-2017",
          "/posts/kstmztp20171208",
          "/posts/isucon7q",
          "/posts/20171029-candle",
          "/posts/isucon6q",
          "/posts/bbq-2016",
          "/posts/kodomo-programming-nagano-2",
          "/posts/ictsc6",
          "/posts/icfpc-2016",
          "/posts/kodomo-programming-nagano-1",
          "/posts/icpc-2016-tsukuba",
          "/posts/kodomo-programming-urugi",
        ],
      },
    ],
  }),
})
