export interface Project {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  tags: string[];
  status: string;
  href?: string;
}

export const projects: Project[] = [
  {
    title: '天气又不好的个人博客',
    description: '基于 Astro 和 MDX 搭建的中文静态个人博客，用于记录全栈开发、边缘计算、AI 智能体与日常问题。',
    image: '/images/logo-fang.png',
    imageAlt: '天气又不好个人博客的方形 Logo',
    tags: ['Astro', 'TypeScript', 'MDX'],
    status: '持续维护中',
    href: 'https://github.com/codertqy/personal-info',
  },
];
