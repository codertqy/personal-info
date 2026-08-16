import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import icon from 'astro-icon';

export default defineConfig({
  site: 'https://personal-info-opal.vercel.app',
  prefetch: {
    prefetchAll: false,
    defaultStrategy: 'hover',
  },
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
