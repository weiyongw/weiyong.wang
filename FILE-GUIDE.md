# 页面文本修改指南

## 1. 全局站点配置

- `src/config.ts` — 网站标题、描述、作者名等全局文本

## 2. 各个页面

| 文件 | 对应页面 |
|---|---|
| `src/pages/index.astro` | 首页 |
| `src/pages/about.mdx` | 关于页 |
| `src/pages/links.mdx` | 链接页 |
| `src/pages/projects.astro` | 项目页 |
| `src/pages/404.astro` | 404 页 |

## 3. 博客文章

- `src/content/posts/` — 存放 Markdown 格式的博客文章

## 4. 可复用组件（公共文本）

| 文件 | 说明 |
|---|---|
| `src/components/Nav.astro` | 导航栏 |
| `src/components/Footer.astro` | 页脚 |
| `src/components/Hero.astro` | 首页主标题区 |
| `src/components/ContactCTA.astro` | 联系 CTA |
| `src/components/Skills.astro` | 技能展示 |
| `src/components/CallToAction.astro` | 行动号召按钮 |
| `src/components/PageHeader.astro` | 页面标题头 |

## 5. 链接数据

- `src/links.ts` — 链接页的数据来源
