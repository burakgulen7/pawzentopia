/**
 * Blog posts: one Markdown file per post in src/content/blog/ (written with Pages CMS).
 * The schema is forgiving: a missing optional field never breaks the build.
 */
import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { languages, defaultLang } from './i18n';

const codes = languages.map((l) => l.code) as string[];
const empty = (v: unknown) => (v === '' || v === null ? undefined : v);

const blog = defineCollection({
  loader: glob({ pattern: '*.{md,mdx}', base: './src/content/blog' }),
  schema: ({ image }) =>
    z.object({
      title: z.preprocess(empty, z.string().optional()).transform((v) => v?.trim() ?? ''),
      date: z.preprocess(empty, z.coerce.date().optional()),
      lang: z.preprocess((v) => (typeof v === 'string' && codes.includes(v) ? v : defaultLang), z.string()),
      cover: z.preprocess(empty, image().optional()),
      coverAlt: z.preprocess(empty, z.string().optional()),
      summary: z.preprocess(empty, z.string().optional()),
      // New posts are drafts until "Brouillon" is unticked.
      draft: z.preprocess((v) => (v === undefined || v === null || v === '' ? true : v), z.coerce.boolean()),
    }),
});

export const collections = { blog };
