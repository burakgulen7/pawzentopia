/**
 * Contact data — the ONLY place where phone, e-mail and social networks are defined.
 * Confirmed by the owner (see PROJECT_DECISIONS.md).
 */
export const contact = {
  ownerName: 'Marianna Mamoyan',
  /** Shown in French copy (national format). */
  phoneLocal: '06 98 48 26 18',
  /** Shown in the other languages (international format). */
  phoneIntl: '+33 6 98 48 26 18',
  /** Used in tel: links. */
  phoneE164: '+33698482618',
  /** WhatsApp number without "+" (wa.me format). */
  whatsapp: '33698482618',
  email: 'pawzentopia@gmail.com',
};

/**
 * Contact form (Formspree free plan → pawzentopia@gmail.com).
 * Paste the form ID from formspree.io here (e.g. 'xyzabcd'), then the form appears on the site.
 * While it is empty the form stays hidden, so no message can get lost.
 */
export const formspreeId = '';

/** Social networks — add a new line to add a network. `icon` must exist in Icon.astro. */
export const socials: { name: string; handle: string; url: string; icon: 'instagram' | 'tiktok' | 'facebook' | 'youtube' | 'google' }[] = [
  { name: 'Instagram', handle: '@pawzentopia', url: 'https://www.instagram.com/pawzentopia/', icon: 'instagram' },
  { name: 'TikTok', handle: '@pawzentopia', url: 'https://www.tiktok.com/@pawzentopia', icon: 'tiktok' },
];

/**
 * Legal identifiers — intentionally empty (owner's registration is being arranged).
 * TODO(legal): add SIREN/SIRET, legal status and address once confirmed by the owner.
 * Never invent them. Empty values are simply not displayed.
 */
export const legal = {
  siret: '',
  legalStatus: '',
  address: '',
};

/** Hosting provider, required on the legal-notice page. */
export const host = {
  name: 'GitHub, Inc.',
  address: '88 Colin P. Kelly Jr. Street, San Francisco, CA 94107, USA',
  url: 'https://github.com',
};
