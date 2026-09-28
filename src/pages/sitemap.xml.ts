import type { APIRoute } from 'astro';
import { defaultLang, languages, pagePath, url, type PageKey } from '../i18n';
import { getPosts, postPath } from '../lib/blog';

export const GET: APIRoute = async ({ site }) => {
  const abs = (p: string) => new URL(url(p), site).href;
  const pages: PageKey[] = ['home', 'blog', 'legal'];
  const entries = pages.flatMap((page) =>
    languages.map((l) => {
      const alternates = languages
        .map((a) => `<xhtml:link rel="alternate" hreflang="${a.code}" href="${abs(pagePath(page, a.code))}"/>`)
        .concat(`<xhtml:link rel="alternate" hreflang="x-default" href="${abs(pagePath(page, defaultLang))}"/>`)
        .join('');
      return `<url><loc>${abs(pagePath(page, l.code))}</loc>${alternates}</url>`;
    }),
  );
  // Blog posts exist in one language each.
  for (const post of await getPosts()) {
    const lastmod = post.data.date ? `<lastmod>${post.data.date.toISOString().slice(0, 10)}</lastmod>` : '';
    entries.push(`<url><loc>${abs(postPath(post))}</loc>${lastmod}</url>`);
  }
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">${entries.join('')}</urlset>\n`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
