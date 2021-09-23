module.exports = {
  base: "/",
  title: "个人技术总结",
  description: "前路迷蒙",
  theme: "reco", //主题（重要），以下很多配置需要主题支持
  themeConfig: {
    type: "blog", //类型：博客
    author: "愚者之灾", //设置全局作者
    subSidebar: "auto", //在所有页面中启用自动生成子侧边栏，原 sidebar 仍然兼容
    codeTheme: "tomorrow", //文档中的代码主题，支持'default'，'funky'，'okaidia'，'solarizedlight'，'tomorrow'
    //===============ICP备案===公安部备案=================
    record: "琼ICP备2021006495号-1", //'ICP 备案文案',
    recordLink: "https://beian.miit.gov.cn/", //'ICP 备案指向链接',
    cyberSecurityRecord: "琼公网安备 46010802000898号", //'公安部备案文案',
    cyberSecurityLink:
      "http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=46010802000898", //公安部备案指向链接

    blogConfig: {
      // 博客配置
      authorAvatar: "/images/me.png", //作者头像
      category: {
        location: 2, // 在导航栏菜单中所占的位置，默认2
        text: "分类", // 默认文案 “分类”
      },
      tag: {
        location: 3, // 在导航栏菜单中所占的位置，默认3
        text: "标签", // 默认文案 “标签”
      },
      socialLinks: [
        // 信息栏展示社交信息
        { icon: "reco-github", link: "https://github.com/lindaotan" },
        { icon: "reco-mayun", link: "https://gitee.com/lindaotan/lindaotan" },
      ],
    },

    nav: [
      //导航标签栏
      { text: "主页", link: "/", icon: "reco-home" },
      { text: "文档", icon: "reco-document" },
    ],
  },
  //在移动端，搜索框在获得焦点时会放大，并且在失去焦点后可以左右滚动，这可以通过设置元来优化。
  head: [
    [
      "meta",
      {
        name: "viewport",
        content: "width=device-width,initial-scale=1,user-scalable=no",
      },
    ],
  ],
  plugins: [],
  markdown: {
    lineNumbers: true,
    anchor: { permalink: false },
  },
};
