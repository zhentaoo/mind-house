const { description } = require("../../package");
// const sidebarConfig = require('./config.sidebar')
module.exports = {
  title: "千页字",
  description: description,
  head: [
    ["meta", { name: "theme-color", content: "#3eaf7c" }],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    [
      "link",
      {
        rel: "icon",
        href: "https://avatars3.githubusercontent.com/u/8733239?s=60&v=4",
      },
    ],
    [
      "script",
      {},
      `
      var _hmt = _hmt || [];
      (function() {
        var hm = document.createElement("script");
        hm.src = "https://hm.baidu.com/hm.js?70445083cefdffee962ffe0d968792e2";
        var s = document.getElementsByTagName("script")[0]; 
        s.parentNode.insertBefore(hm, s);
      })();
    `,
    ],
    [
      "meta",
      { name: "apple-mobile-web-app-status-bar-style", content: "black" },
    ],
  ],

  themeConfig: {
    repo: "",
    editLinks: false,
    docsDir: "",
    editLinkText: "",
    lastUpdated: false,
    nav: [
      {
        text: "成长",
        items: [
          { text: "原则", link: "/group/yz" },
          { text: "高效能人士的七个习惯", link: "/group/gxnrsdqgxg" },
        ],
      },
      {
        text: "经济",
        items: [{ text: "富爸爸穷爸爸", link: "/finance/qbbfbb" }],
      },
      {
        text: "社会",
        items: [{ text: "矛盾论", link: "/social/mdl" }],
      },
      {
        text: "心理学",
        items: [{ text: "乌合之众", link: "/mind/whzz" }],
      },
      {
        text: "医学",
        items: [{ text: "中医基础理论", link: "/medicine/zyjcll" }],
      },
      {
        text: "见闻录",
        link: "/mind/",
      }
    ],
    sidebar: {
      "/group/": ["gxnrsdqgxg", "yz"],
      "/finance/": ["qbbfbb"],
      "/social/": ["mdl"],
      "/mind/": ["whzz"],
      "/medicine/": ["zyjcll"],
      "/mind/": [
        {
          title: "职场",
          collapsable: false,
          children: [
            "zc-theway",
            "zc-company",
            "fe",
            "jinsheng",
            "leader",
            "mianshiguan",
          ],
        },
        {
          title: "商业",
          collapsable: false,
          children: ["biz-ganggan", "biz-jihuashu"],
        },
        {
          title: "金融",
          collapsable: false,
          children: ["zcpz", "jjjqyz"],
        },
        {
          title: "社会",
          collapsable: false,
          children: [
            "sh-country",
            "sh-city",
            "sh-chanyejiegou",
            "sh-renyuan",
            "sh-changjing",
          ],
        },
        {
          title: "校园",
          collapsable: false,
          children: ["xy-school-cate", "xy-school-choose", "xy-mba", "xy-test"],
        },
        {
          title: "人类",
          collapsable: false,
          children: [
            "sw-zhili",
            "sw-learn",
            "sw-renge",
            "sw-qinggan",
            "sw-need",
          ],
        },
      ],
    },
  },
  plugins: ["@vuepress/plugin-back-to-top", "@vuepress/plugin-medium-zoom"],
};
