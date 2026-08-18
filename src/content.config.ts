import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const articles = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/articles' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    published: z.coerce.date(),
    updated: z.preprocess((value) => value === '' ? undefined : value, z.coerce.date().optional()),
    category: z.string(),
    tags: z.array(z.string()).default([]),
    image: z.string(),
    imageAlt: z.string(),
    draft: z.boolean().default(false),
    featured: z.boolean().default(false),
    lang: z.string().default('zh-CN'),
    readingMinutes: z.number().int().positive().default(6),
  }),
});

const notes = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/notes' }),
  schema: z.object({
    title: z.string(),
    published: z.coerce.date(),
    mood: z.string().default('日常'),
    tags: z.array(z.string()).default([]),
    image: z.preprocess((value) => value === '' ? undefined : value, z.string().optional()),
    imageAlt: z.preprocess((value) => value === '' ? undefined : value, z.string().optional()),
    draft: z.boolean().default(false),
  }),
});

const gallery = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/gallery' }),
  schema: z.object({
    title: z.string(),
    image: z.string(),
    imageAlt: z.string(),
    captured: z.coerce.date(),
    category: z.string().default('日常'),
    location: z.preprocess((value) => value === '' ? undefined : value, z.string().optional()),
    featured: z.boolean().default(false),
    order: z.number().int().nonnegative().default(99),
    orientation: z.enum(['landscape', 'portrait']).default('landscape'),
    draft: z.boolean().default(false),
  }),
});

export const collections = { articles, notes, gallery };
