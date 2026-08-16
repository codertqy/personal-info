export const siteConfig = {
  name: '天气又不好',
  wordmark: '天气又不好',
  title: '天气又不好 · 个人博客',
  description: '记录前端开发中遇到的问题、解决过程，以及 Java、Python 的学习进度和生活碎片。',
  bio: '开发经验不足一年，目前以 Web 前端为主，关注边缘计算与 AI 智能体，同时正在学习 Java 和 Python。',
  motto: '保持好奇，保持记录。',
  email: 'codertqy@163.com',
  github: 'https://github.com/codertqy',
  repository: 'https://github.com/codertqy/personal-info',
  avatar: '/images/tx.webp',
  logo: '/images/logo-fang.png',
  locale: 'zh-CN',
  url: 'https://personal-info-opal.vercel.app',
  socialImage: '/images/hero-editorial.webp',
  commentsEnabled: false,
} as const;

export type SiteConfig = typeof siteConfig;
