/** English copy (served at /en/). Source: CONTENT_EN.md — draft translation awaiting approval. */
import type { Dictionary } from './fr';

const en: Dictionary = {
  meta: {
    title: 'PawZenTopia — Dog care & companionship · Toulouse',
    description:
      'A small, human-scale welcome, playtime and attentive care for your companion. Toulouse, Saint-Jean and 20 km around.',
    ogLocale: 'en_GB',
  },
  ui: {
    skip: 'Skip to content',
    language: 'Language',
    newTab: '(opens in a new tab)',
    home: 'PawZenTopia home',
    menu: 'Menu',
    closeMenu: 'Close menu',
  },
  nav: {
    services: 'Our services',
    prices: 'Prices',
    approach: 'Our approach',
    availability: '24/7 availability',
    contact: 'Contact us',
  },
  hero: {
    eyebrow: 'Dog care & companionship · Toulouse',
    headline: ['As happy as', 'at home.', 'Surrounded', 'by care.'],
    body: 'A small, human-scale welcome, playtime and attentive care for your companion.',
    primary: 'Discover our services',
    secondary: 'Meet PawZenTopia',
  },
  trust: ['A small, human-scale welcome', 'Every dog’s own pace respected', 'Toulouse, Saint-Jean and 20 km around'],
  services: {
    eyebrow: 'What we do',
    heading: 'The right care,| at the right time.',
    body: 'From everyday routines to the unexpected, attentive support designed for your dog and your peace of mind.',
    items: {
      familyCare: {
        title: 'Family care',
        text: 'The comfort of a home and attention adapted to their habits.',
        detail: '24-hour care, overnight included, at your home or ours depending on availability. From {price} / day.',
      },
      training: {
        title: 'Dog training',
        text: 'Patient guidance built on listening and trust.',
        detail: 'Guidance adapted to your dog’s personality and pace. Price on request.',
      },
      urgentCare: {
        title: 'Emergency care',
        text: 'A care solution for the unexpected, arranged together.',
        detail: 'Hospital stay, accident, sudden departure: we pick up your dog or you drop them off, at any time.',
      },
      transport: {
        title: '24/7 transport',
        text: 'Support during journeys, according to your needs.',
        detail: 'Journeys in Toulouse, Saint-Jean and 20 km around, at any time. Price on request.',
      },
    },
    more: 'Contact us →',
  },
  pricing: {
    eyebrow: 'Prices',
    heading: 'Clear prices, based on size.',
    body: 'Base prices per day. For any special need, let’s talk.',
    boardingTitle: '24-hour care (overnight included)',
    columns: { size: 'Size', weight: 'Weight', price: 'Price / day / dog' },
    weightUpTo: 'up to {max} kg',
    weightRange: '{min}–{max} kg',
    weightOver: 'over {min} kg',
    price: '€{n}',
    discount: '{percent}% off the total for any stay of more than {days} days.',
    dayCareTitle: 'Day care',
    dayCareFrom: 'From {price} / day',
    dayCareSubscription: 'With an annual subscription: from {price} / day',
    extras:
      'Extras on quote: special care or giving medication, grooming (brushing, bathing…), urgent or night requests, transport, distance.',
    cta: 'Ask for a quote',
  },
  approach: {
    eyebrow: 'Their well-being is where we start',
    heading: 'A familiar presence, even far from home.',
    body: 'At PawZenTopia, every dog is welcomed as an individual. We take the time to understand their personality, their rhythm and what reassures them.',
    cta: 'Let’s talk about your dog',
  },
  social: {
    eyebrow: 'Instagram & TikTok',
    heading: 'Follow their days with us.',
    body: 'Walks, play and happy moments: see the dogs in our care in photos and videos.',
    instagram: 'Follow @pawzentopia on Instagram',
    tiktok: 'Follow @pawzentopia on TikTok',
  },
  urgent: {
    eyebrow: 'Something unexpected?',
    heading: 'Need a solution for your dog?',
    body: 'Contact us to discuss emergency care or transport, at any time.',
    detail:
      'Hospital stay, accident, sudden departure: we can pick up your dog, look after them at your home or, depending on availability, at ours.',
    cta: 'Get in touch',
  },
  contact: {
    eyebrow: 'Contact us',
    heading: 'Let’s talk about your dog.',
    body: 'Marianna will get back to you to arrange care, transport or an emergency solution.',
    languages: 'We speak French, English, Russian and Turkish.',
    pricingNote: 'Extras on quote, depending on the situation, the distance and your dog’s size.',
    area: 'Toulouse, Saint-Jean and 20 km around',
    whatsapp: 'Message on WhatsApp',
    call: 'Call',
    note: 'First enquiry? Message us on WhatsApp for a quick reply. Existing clients and emergencies: call us directly.',
    whatsappMessage: 'Hello, I’m contacting you from the PawZenTopia website.',
    form: {
      name: 'Name',
      reply: 'Phone or e-mail',
      message: 'Your message',
      send: 'Send',
      success: 'Thank you! Your message has been sent.',
      error: 'Your message could not be sent. You can write to us directly at {email}.',
    },
    social: 'Follow us',
  },
  footer: {
    tagline: 'PawZenTopia — Well-being and training',
    location: 'Toulouse, France',
    legal: 'Legal notice',
  },
  legalPage: {
    slug: 'legal-notice',
    title: 'Legal notice',
    publisherTitle: 'Website publisher',
    publisher: 'The PawZenTopia website is published by {owner}.',
    phone: 'Phone',
    email: 'E-mail',
    hostTitle: 'Hosting',
    privacyTitle: 'Personal data',
    privacy:
      'The information you send us (form, e-mail, phone or WhatsApp) is used only to answer your request. It is never sold or passed on. To access, correct or delete it, write to {email}.',
    formNote: 'The contact form is delivered to our mailbox by the Formspree service.',
    cookiesTitle: 'Cookies',
    cookies: 'This website uses no advertising cookies and no audience-measurement tools.',
    back: 'Back to home',
  },
  notFound: {
    title: 'Page not found',
    back: 'Back to home',
  },
};

export default en;
