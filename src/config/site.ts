export const siteConfig = {
  name: '天气又不好',
  wordmark: '天气又不好',
  title: '天气又不好 · 影像空间',
  description: '收藏天气、光线与日常里容易错过的片刻。',
  bio: '这里是天气又不好的个人影像空间。比起长篇文字，我更愿意用照片留下天气、光线和生活里稍纵即逝的片刻。',
  motto: '让影像替天气说话。',
  email: 'codertqy@163.com',
  github: 'https://github.com/codertqy',
  repository: 'https://github.com/codertqy/personal-info',
  avatar: '/images/tx.webp',
  logo: '/images/logo-fang.png',
  locale: 'zh-CN',
  url: 'https://tianqy.xyz',
  socialImage: '/images/hero-editorial.webp',
  commentsEnabled: false,
  commentsRepository: 'codertqy/personal-info',
} as const;

export type SiteConfig = typeof siteConfig;
