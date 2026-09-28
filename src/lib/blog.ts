import { getCollection, type CollectionEntry } from 'astro:content';
import { langPrefix, type Lang } from '../i18n';

export type Post = CollectionEntry<'blog'>;

/** Published posts (never drafts, never untitled), newest first. */
export async function getPosts(): Promise<Post[]> {
  const posts = await getCollection('blog', ({ data }) => !data.draft && data.title !== '');
  return posts.sort((a, b) => (b.data.date?.getTime() ?? 0) - (a.data.date?.getTime() ?? 0));
}

/** A post lives under its own language: /blog/slug/ (FR), /en/blog/slug/, … */
export const postPath = (post: Post) => `${langPrefix(post.data.lang as Lang)}blog/${post.id}/`;

export const formatDate = (date: Date | undefined, lang: Lang) =>
  date ? new Intl.DateTimeFormat(lang, { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' }).format(date) : '';
