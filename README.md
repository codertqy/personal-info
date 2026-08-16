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
- `src/content/articles/`：开发问题与解决过程，使用 Markdown/MDX 保存。
- `src/content/notes/`：日常生活、学习进度和短记录。
- `public/images/`：首屏、文章封面、头像、Logo 与纸张纹理。
- `astro.config.mjs` 与 `public/robots.txt`：部署域名、Sitemap 与搜索引擎抓取配置。

在线内容管理使用 Pages CMS：访问 `/admin/`，通过 GitHub 登录后即可新增、编辑或删除文章和日常记录。配置见仓库根目录的 `.pages.yml`。

## 已实现

- 首页、文章归档、文章详情、分类、标签、日常、关于、内容管理入口。
- 基于 GitHub Issues 的 Utterances 文章评论，支持跟随网站切换明暗主题。
- 中文本地全文搜索、键盘选择与空状态。
- 深色模式、移动菜单、粘性目录、阅读进度、代码复制。
- RSS、Sitemap、robots、canonical、Open Graph 与 JSON-LD。
- 文档规定的动效参数、移动端降级与 `prefers-reduced-motion`。
- 1440/1024/768/390/320 px 响应式布局。

视觉回归记录见 `design-qa.md`。
