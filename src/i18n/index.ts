/**
 * Languages of the site. To add a language:
 *   1. copy fr.ts to e.g. es.ts and services/fr.ts to services/es.ts, translate the texts,
 *   2. add ONE entry to `languages` below.
 * The first entry is the default language, served at the site root ("/").
 */
import fr, { type Dictionary } from './fr';
import en from './en';
import tr from './tr';
import servicesFr from './services/fr';
import servicesEn from './services/en';
import servicesTr from './services/tr';
import type { ServiceDictionary, ServiceKey } from './services/types';

export const languages = [
  { code: 'fr', label: 'Français', dict: fr, services: servicesFr },
  { code: 'en', label: 'English', dict: en, services: servicesEn },
  { code: 'tr', label: 'Türkçe', dict: tr, services: servicesTr },
] as const satisfies readonly { code: string; label: string; dict: Dictionary; services: ServiceDictionary }[];

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
export const serviceKeys: ServiceKey[] = ['pension', 'creche', 'petSitting', 'education'];
export type { ServiceKey };
export type PageKey = 'home' | 'legal' | 'blog' | `service:${ServiceKey}`;
export function pagePath(page: PageKey, code: Lang) {
  const dict = getLanguage(code).dict;
  if (page === 'legal') return `${langPrefix(code)}${dict.legalPage.slug}/`;
  if (page === 'blog') return `${langPrefix(code)}blog/`;
  if (page.startsWith('service:')) {
    const key = page.slice('service:'.length) as ServiceKey;
    return `${langPrefix(code)}${getLanguage(code).services.pages[key].slug}/`;
  }
  return langPrefix(code);
}
