/** Helpers for the service pages: placeholder values from the price file and simple inline links. */
import { boarding, highlights, training, tx, visits, type PriceRow } from '../config/prices';
import { fill, getLanguage, pagePath, serviceKeys, url, type Lang, type ServiceKey } from '../i18n';

const amount = (r: PriceRow | undefined, lang: Lang) => {
  if (!r || r.min === undefined) return '';
  const t = getLanguage(lang).dict.pricing;
  return fill(t.price, { n: r.max !== undefined && r.max !== r.min ? `${r.min}–${r.max}` : r.min });
};

/** Values for {placeholders} in service texts — always read from src/data/prices.json. */
export function serviceValues(lang: Lang): Record<string, string | number> {
  const byKey = (rows: PriceRow[], key: string) => rows.find((r) => r.key === key);
  return {
    boardingMin: highlights.boardingMin ?? '',
    boardingMax: highlights.boardingMax ?? '',
    boardingOffer: tx(boarding, 'offer', lang),
    trainingFrom: highlights.trainingFrom ?? '',
    dogMin: highlights.dogFrom ?? '',
    catMin: highlights.catFrom ?? '',
    dogPrice: amount(byKey(visits.rows, 'dog'), lang),
    catPrice: amount(byKey(visits.rows, 'cat'), lang),
    assessmentPrice: amount(byKey(training.rows, 'assessment'), lang),
    pack5Price: amount(byKey(training.rows, 'pack5'), lang),
    pack10Price: amount(byKey(training.rows, 'pack10'), lang),
  };
}

const escape = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

/** Fill placeholders and turn [[serviceKey|text]] into links to the other service pages. */
export function richText(text: string, lang: Lang) {
  const filled = escape(fill(text, serviceValues(lang)));
  return filled.replace(/\[\[(\w+)\|([^\]]+)\]\]/g, (m, key: string, label: string) =>
    (serviceKeys as string[]).includes(key) ? `<a href="${url(pagePath(`service:${key as ServiceKey}`, lang))}">${label}</a>` : label,
  );
}

/** Plain text version (meta description, JSON-LD). */
export const plainText = (text: string, lang: Lang) =>
  fill(text, serviceValues(lang)).replace(/\[\[\w+\|([^\]]+)\]\]/g, '$1');
