export const META_URL = "https://yolx.yzzi.icu";
export const META_TITLE = "Yolx";
export const META_DESCRIPTION =
  'A modern download tool with "Aria 2" at its core.';

export const enConfig = {
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
      { text: "Guide", link: "/en/docs/", activeMatch: "/en/docs/" },
      { text: "Download", link: "/en/download" },
      {
        text: "Feedback",
        items: [
          { text: "Github Issues", link: "https://github.com/uiYzzi/Yolx/issues" },
          { text: "兔小槽", link: "https://txc.qq.com/products/639685" },
        ],
      },
      { text: "Donate", link: "/en/donate" },
    ],
    sidebar: {
      "/en/docs/": [
        {
          text: "User Guide",
          link: "/en/docs/",
          items: [
            { text: "Install Guide", link: "/en/docs/install" },
          ],
        },
      ],
    },
    footer: {
      message: "Released under the <a href='https://github.com/uiYzzi/Yolx/blob/main/LICENSE' target='_blank'><b>GPL-3.0</b></a> License<br/>Copyright © 2024-present <a href='https://github.com/uiyzzi' target='_blank'><b>YoyoApps</b></a>",
      copyright: "",
    },
  },
};
