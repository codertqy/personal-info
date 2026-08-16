import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { siteConfig } from '@/config/site';

export async function GET(context) {
  const articles = (await getCollection('articles', ({ data }) => !data.draft)).sort((a, b) => b.data.published.valueOf() - a.data.published.valueOf());
  return rss({
    title: siteConfig.title,
    description: siteConfig.description,
    site: context.site,
    items: articles.map((article) => ({
      title: article.data.title,
      description: article.data.description,
      pubDate: article.data.published,
      link: `/articles/${article.id.replace(/\.(md|mdx)$/i, '')}/`,
      categories: [article.data.category, ...article.data.tags],
    })),
    customData: '<language>zh-CN</language>',
  });
}
