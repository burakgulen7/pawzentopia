/**
 * Google reviews — stored in src/data/reviews.json (editable in Pages CMS under "Avis Google").
 * Rating and count shown anywhere on the site come only from this file.
 * Original texts are French and are never altered; EN/TR are translations.
 */
import data from '../data/reviews.json';
import { num } from './prices';
import type { Lang } from '../i18n';

export type Review = { name: string; stars: number; text: Record<string, string> };

export const reviews = {
  rating: num(data.rating) ?? 5,
  count: num(data.count) ?? 0,
  profileUrl: String(data.profileUrl ?? ''),
  reviewUrl: String(data.reviewUrl || data.profileUrl || ''),
  items: (data.reviews ?? [])
    .map((r: Record<string, unknown>) => ({
      name: String(r.name ?? '').trim(),
      stars: Math.max(0, Math.min(5, num(r.stars) ?? 5)),
      text: { fr: String(r.text_fr ?? ''), en: String(r.text_en ?? ''), tr: String(r.text_tr ?? '') },
    }))
    .filter((r) => r.name && r.text.fr),
};

/** "5,0" / "5.0" depending on the language. */
export const formatRating = (n: number, lang: Lang) =>
  new Intl.NumberFormat(lang, { minimumFractionDigits: 1, maximumFractionDigits: 1 }).format(n);
