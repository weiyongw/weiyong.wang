import type { Site, SocialObjects, OG_Type } from "./types";

export const SITE: Site = {
  website: "https://weiyong.wang/",
  author: "唯庸",
  desc: "唯庸的个人网站。AI Agent 布道者，分享 AI、产品、效率等内容。",
  title: "weiyong",
  lightAndDarkMode: true,
  postPerPage: 10,
  avatar: "https://weiyong-note.oss-cn-beijing.aliyuncs.com/weiyong.wang/avatar.jpg",
};

export const LOCALE = ["zh-CN"]; // set to [] to use the environment default

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS: SocialObjects = [
  {
    name: "Github",
    href: "https://github.com/weiyongw",
    linkTitle: `weiyong's Github`,
    active: true,
  },
  {
    name: "Mail",
    href: "mailto:weiyong_wang@163.com",
    linkTitle: `Send an email to weiyong`,
    active: true,
  },
  {
    name: "Twitter",
    href: "https://x.com/weiyong_wang",
    linkTitle: `weiyong's Twitter`,
    active: true,
  },
];

export const OG: OG_Type = {
  emojiType: "twemoji",
  // ogImage: "astropaper-og.jpg",
};

export const CND_URL: string = "https://weiyong-note.oss-cn-beijing.aliyuncs.com/weiyong.wang";
