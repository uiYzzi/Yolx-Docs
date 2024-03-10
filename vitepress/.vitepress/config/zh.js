export const META_URL = "https://yolx.yzzi.icu";
export const META_TITLE = "Yolx";
export const META_DESCRIPTION = "以「Aria 2」作为核心的现代化下载工具";

export const zhConfig = {
  description: META_DESCRIPTION,
  head: [
    ["meta", { property: "og:url", content: META_URL }],
    ["meta", { property: "og:image", content: "/img/pot-social-card.png" }],
    ["meta", { property: "og:description", content: META_DESCRIPTION }],
    ["meta", { property: "twitter:url", content: META_URL }],
    ["meta", { property: "twitter:title", content: META_TITLE }],
    ["meta", { property: "twitter:description", content: META_DESCRIPTION }],
  ],
  themeConfig: {
    nav: [
      { text: "使用指南", link: "/docs/", activeMatch: "/docs/" },
      { text: "下载", link: "/download" },
      {
        text: "问题反馈",
        items: [
          { text: "Github Issues", link: "https://github.com/uiYzzi/Yolx/issues" },
          { text: "兔小槽", link: "https://txc.qq.com/products/639685" },
        ],
      },
      { text: "捐赠", link: "/donate" },
    ],
    sidebar: {
      "/docs/": [
        {
          text: "使用指南",
          link: "/docs/",
          items: [
            { text: "安装指南", link: "/docs/install" },
          ],
        },
      ],
    },
    footer: {
      message: "基于<a href='https://github.com/uiYzzi/Yolx/blob/main/LICENSE' target='_blank'><b>GPL-3.0</b></a>开源协议发布<br/>Copyright © 2024-present <a href='https://github.com/uiyzzi' target='_blank'><b>YoyoApps</b></a>",
      copyright: "",
    },
  },
};
