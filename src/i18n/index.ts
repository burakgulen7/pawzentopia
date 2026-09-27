/**
 * Languages of the site. To add a language:
 *   1. copy fr.ts to e.g. es.ts and translate the texts,
 *   2. add ONE entry to `languages` below.
 * The first entry is the default language, served at the site root ("/").
 */
import fr, { type Dictionary } from './fr';
import en from './en';
import ru from './ru';
import tr from './tr';

export const languages = [
  { code: 'fr', label: 'Français', dict: fr },
  { code: 'en', label: 'English', dict: en },
  { code: 'ru', label: 'Русский', dict: ru },
  { code: 'tr', label: 'Türkçe', dict: tr },
] as const satisfies readonly { code: string; label: string; dict: Dictionary }[];

export type Lang = (typeof languages)[number]['code'];
export const defaultLang: Lang = languages[0].code;

export function getLanguage(code: string | undefined) {
  return languages.find((l) => l.code === (code ?? defaultLang)) ?? languages[0];
}

/** Path segment of a language ('' for the default language). */
export const langPrefix = (code: Lang) => (code === defaultLang ? '' : `${code}/`);

/** Replace {placeholders} in a text. */
export function fill(text: string, values: Record<string, string | number>) {
  return text.replace(/\{(\w+)\}/g, (m, key) => (key in values ? String(values[key]) : m));
}

/** Build a URL inside the site that respects the deployment base path. */
export function url(path = '') {
  const base = import.meta.env.BASE_URL.replace(/\/?$/, '/');
  return base + path.replace(/^\//, '');
}

/** Pages that exist in every language, used for the language switcher and hreflang. */
export type PageKey = 'home' | 'legal';
export function pagePath(page: PageKey, code: Lang) {
  const dict = getLanguage(code).dict;
  return langPrefix(code) + (page === 'legal' ? `${dict.legalPage.slug}/` : '');
}
