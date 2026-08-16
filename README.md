# 暖色编辑风个人博客

基于 Astro 的中文静态个人博客，按《个人博客网站设计方案》与 01–05 原型图实现。

## 本地运行

```bash
npm install
npm run dev
```

生产检查：

```bash
npm run check
npm run build
npm run a11y
npm run preview
```

## 替换个人资料

- `src/config/site.ts`：姓名、字标、简介、域名、邮箱、GitHub、评论开关。
- `src/data/projects.ts`：真实项目、职责、描述、标签与链接。
- `src/content/articles/`：中文 Markdown/MDX 文章与 front matter。
- `public/images/`：首屏、文章封面、项目图与纸张纹理。
- `astro.config.mjs` 与 `public/robots.txt`：部署域名、Sitemap 与搜索引擎抓取配置。

站点身份与个人博客项目已填写；`src/content/articles/` 中的文章仍为排版示例，发布前请替换为真实内容。

## 已实现

- 首页、文章归档、文章详情、分类、标签、项目、关于。
- 中文本地全文搜索、键盘选择与空状态。
- 深色模式、移动菜单、粘性目录、阅读进度、代码复制。
- RSS、Sitemap、robots、canonical、Open Graph 与 JSON-LD。
- 文档规定的动效参数、移动端降级与 `prefers-reduced-motion`。
- 1440/1024/768/390/320 px 响应式布局。

视觉回归记录见 `design-qa.md`。
