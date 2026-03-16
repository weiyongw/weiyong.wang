export interface Link {
  name: string;
  href: string;
  logo: string;
  darkLogo?: string;
  description?: string;
}

export const links: Link[] = [
  {
    name: "示例友链",
    href: "https://example.com",
    logo: "https://via.placeholder.com/64",
    description: "这是一个示例友链",
  },
];
