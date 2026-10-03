/**
 * Service pages (local SEO). One file per language with the same structure.
 * In texts: [[pageKey|link text]] becomes a link to another service page,
 * {placeholders} are filled from src/data/prices.json (see src/lib/services.ts).
 */
import type { Slot } from '../../config/photos';

export type ServiceKey = 'pension' | 'creche' | 'petSitting' | 'education';
export type PriceGroupKey = 'training' | 'boarding' | 'visits' | 'emergency';

export type ServicePage = {
  slug: string;
  /** Full <title>, max. 60 characters. */
  title: string;
  /** Meta description, max. 155 characters (after placeholders are filled). */
  description: string;
  h1: string;
  /** Short name used in breadcrumbs, footer links and JSON-LD. */
  name: string;
  serviceType: string;
  photo: Slot;
  intro: string[];
  sections: { h2: string; p?: string[]; price?: PriceGroupKey }[];
  faq: { q: string; a: string }[];
};

export type ServiceDictionary = {
  ui: { breadcrumbHome: string; faq: string; others: string; more: string; servicesTitle: string; ctaTitle: string; ctaText: string };
  pages: Record<ServiceKey, ServicePage>;
};
