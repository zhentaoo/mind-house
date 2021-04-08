const { description } = require("../../package");
// const sidebarConfig = require('./config.sidebar')
module.exports = {
  title: "青叶的思维小屋",
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
        hm.src = "https://hm.baidu.com/hm.js?b56d58eb9b155bb93221933343a9c83d";
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
        text: "前端体系",
        link: "/fe/",
      },
      {
        text: "工程体系",
        link: "/blog/",
      },
      {
        text: "计算机基础",
        link: "/cs/",
      },
      {
        text: "见闻录",
        link: "/mind/",
      },
      {
        text: "读书笔记",
        link: "/book/",
      },
      {
        text: "关于我",
        items: [
          { text: "Github", link: "https://github.com/zhentaoo" },
          { text: "赞助&联系", link: "/sponsor/" },
        ],
      },
    ],
    sidebar: {
      "/fe/": [
        {
          title: "前端工程实践",
          collapsable: false,
          children: [
            "Lerna",
            // "fe-base0",
            "fe-perf",
            "fe-xss",
            "fe-cors",
            "fe-webpack",
          ],
        },
        // {
        //   title: "JS 基础知识",
        //   collapsable: false,
        //   children: ["js4-base"],
        // },
        // {
        //   title: "JS 进阶内容",
        //   collapsable: false,
        //   children: ["js4-base"],
        // },
        // {
        //   title: "JavaScript API",
        //   collapsable: false,
        //   children: ["js4-base"],
        // },
        {
          title: "JavaScript",
          collapsable: false,
          children: [
            "js-base-eventloop",
            "js-decorator",
            "js-base-scope",
            "js-base-this",
            "js-base-closure",
            "js-base-time",
            "js-base-type",
          ],
        },
        {
          title: "BOM&DOM",
          collapsable: false,
          children: ["DOM"],
        },
        {
          title: "HTML&CSS",
          collapsable: false,
          children: ["fe-css"],
        },
      ],
      "/blog/": [
        {
          title: "自动化",
          collapsable: false,
          children: ["Puppeteer", "node-cli", "node-cicd"],
        },
        {
          title: "服务器",
          collapsable: false,
          children: ["Server-Base", "server-linuxcommand", "docker", "mysql", "domain"],
        },
        {
          title: "通用工具",
          collapsable: false,
          children: ["charles", "git", "v2ray", "vscode", "iTerm2"],
        },
      ],
      "/cs/": [
        {
          title: "数据结构&算法",
          collapsable: false,
          children: ["algorithm"],
        },
        {
          title: "网络协议",
          collapsable: false,
          children: ["net"],
        },
        {
          title: "操作系统",
          collapsable: false,
          children: ["system"],
        },
        {
          title: "编译原理",
          collapsable: false,
          children: ["compile"],
        },
        {
          title: "计算机体系结构",
          collapsable: false,
          children: ["struct"],
        },
      ],
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
      "/book/": [
        {
          title: "成长",
          collapsable: false,
          children: ["yz", "gxnrsdqgxg", "cldy", "fxxcz", "glxjc"],
        },
        {
          title: "经济",
          collapsable: false,
          children: [
            "qbbfbb",
            "cmdtzz",
            "zsjjtzzn",
            "jjxyl",
            "jjfjc",
            "cjkjsw",
          ],
        },
        {
          title: "社会",
          collapsable: false,
          children: ["mfd", "mdl", "rljs", "zbl"],
        },
        {
          title: "心理学",
          collapsable: false,
          children: ["whzz", "ptxlx"],
        },
        {
          title: "医学",
          collapsable: false,
          children: ["zyjcll"],
        },
      ],
    },
  },
  plugins: ["@vuepress/plugin-back-to-top", "@vuepress/plugin-medium-zoom"],
};
