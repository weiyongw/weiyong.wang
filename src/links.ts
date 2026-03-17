export interface Link {
  name: string;
  href: string;
  logo: string;
  darkLogo?: string;
  description?: string;
}

export const links: Link[] = [
  {
    name: "weiyong",
    href: "https://weiyong.wang",
    logo: "https://weiyong-note.oss-cn-beijing.aliyuncs.com/weiyong.wang/avatar.jpg",
    description: "唯庸的个人网站。AI Agent 布道者，分享 AI、产品、效率等内容。",
  },
];
