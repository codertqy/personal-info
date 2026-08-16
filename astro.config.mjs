import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import icon from 'astro-icon';

export default defineConfig({
  site: 'https://example.com', // TODO: 发布前替换为真实域名
  integrations: [
    mdx(),
    sitemap(),
    icon({
      include: {
        ph: ['magnifying-glass', 'sun', 'moon-fill', 'list', 'x', 'seal-check', 'leaf'],
      },
    }),
  ],
  markdown: {
    shikiConfig: { theme: 'github-dark' },
  },
  vite: {
    server: {
      host: '0.0.0.0',
      allowedHosts: ['terminal.local'],
    },
  },
});
