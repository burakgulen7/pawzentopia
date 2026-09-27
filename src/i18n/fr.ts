/**
 * Textes en français (langue par défaut, servie à « / »).
 * Source : CONTENT_FR.md. Les autres langues (en.ts, ru.ts, tr.ts) suivent exactement la même structure.
 * {placeholders} are filled in automatically from src/config/site.ts and src/config/prices.ts.
 */
const fr = {
  meta: {
    title: 'PawZenTopia — Garde & accompagnement canin · Toulouse',
    description:
      'Un accueil à taille humaine, des moments de jeu et une présence attentive pour votre compagnon. Toulouse, Saint-Jean et 20 km alentour.',
    ogLocale: 'fr_FR',
  },
  ui: {
    skip: 'Aller au contenu',
    language: 'Langue',
    newTab: '(nouvel onglet)',
    home: 'Accueil PawZenTopia',
  },
  nav: {
    services: 'Nos services',
    prices: 'Tarifs',
    approach: 'Notre approche',
    availability: 'Disponibilité 24/7',
    contact: 'Nous contacter',
  },
  hero: {
    eyebrow: 'Garde & accompagnement canin · Toulouse',
    // Approved line breaks (desktop and mobile).
    headline: ['Heureux comme', 'à la maison.', 'Entouré', 'd’attention.'],
    body: 'Un accueil à taille humaine, des moments de jeu et une présence attentive pour votre compagnon.',
    primary: 'Découvrir nos services',
    secondary: 'Rencontrer PawZenTopia',
  },
  trust: ['Un accueil à taille humaine', 'Le rythme de chaque chien respecté', 'Toulouse, Saint-Jean et 20 km alentour'],
  services: {
    eyebrow: 'Ce que nous faisons',
    heading: 'Le bon soin,| au bon moment.',
    body: 'Du quotidien aux imprévus, un accompagnement attentif pensé pour votre chien et votre tranquillité d’esprit.',
    // TODO(content): confirm scope/limits of each service with the owner (see CONTENT_FR.md "CONFIRM").
    items: {
      familyCare: { title: 'Garde familiale', text: 'Le confort d’un foyer et une attention adaptée à ses habitudes.' },
      // Training: approved short copy kept until the owner provides details — no claims, no price.
      training: { title: 'Éducation canine', text: 'Un accompagnement patient, fondé sur l’écoute et la confiance.' },
      urgentCare: { title: 'Garde d’urgence', text: 'Une solution de garde pour les imprévus, à organiser ensemble.' },
      transport: { title: 'Transport 24/7', text: 'Un accompagnement lors des trajets, selon vos besoins.' },
    },
  },
  pricing: {
    eyebrow: 'Tarifs',
    heading: 'Des prix clairs, selon le gabarit.',
    body: 'Tarifs de base par jour. Pour tout besoin particulier, parlons-en ensemble.',
    boardingTitle: 'Garde 24 h (nuit comprise)',
    columns: { size: 'Gabarit', weight: 'Poids', price: 'Prix / jour / chien' },
    weightUpTo: 'jusqu’à {max} kg',
    weightRange: '{min}–{max} kg',
    weightOver: 'plus de {min} kg',
    price: '{n} €',
    discount: '−{percent} % sur le total pour toute garde de plus de {days} jours.',
    dayCareTitle: 'Crèche de jour',
    dayCareFrom: 'À partir de {price} / jour',
    dayCareSubscription: 'Avec abonnement annuel : à partir de {price} / jour',
    extras:
      'Suppléments sur devis : soins particuliers ou administration de médicaments, toilettage (brossage, bain…), demandes urgentes ou de nuit, transport, distance.',
    cta: 'Demander un devis',
  },
  approach: {
    eyebrow: 'Leur bien-être, notre point de départ',
    heading: 'Une présence familière, même loin de chez vous.',
    body: 'Chez PawZenTopia, chaque chien est accueilli comme un individu. On prend le temps de comprendre son caractère, son rythme et ce qui le rassure.',
    cta: 'Parlons de votre chien',
  },
  urgent: {
    eyebrow: 'Un imprévu ?',
    heading: 'Besoin d’une solution pour votre chien ?',
    body: 'Contactez-nous pour discuter de la garde d’urgence ou d’un transport, à toute heure.',
    detail:
      'Hospitalisation, accident, départ imprévu : nous pouvons venir chercher votre chien, le garder chez vous ou, selon les disponibilités, chez nous.',
    cta: 'Prendre contact',
  },
  contact: {
    eyebrow: 'Nous contacter',
    heading: 'Parlons de votre chien.',
    body: 'Marianna vous répond pour organiser une garde, un transport ou une solution d’urgence.',
    languages: 'Nous parlons français, anglais, russe et turc.',
    pricingNote: 'Suppléments sur devis, selon la situation, la distance et le gabarit de votre chien.',
    area: 'Toulouse, Saint-Jean et 20 km alentour',
    whatsapp: 'Écrire sur WhatsApp',
    call: 'Appeler le {phoneLocal}',
    whatsappMessage: 'Bonjour, je vous contacte depuis le site PawZenTopia.',
    form: {
      name: 'Nom',
      reply: 'Téléphone ou e-mail',
      message: 'Votre message',
      send: 'Envoyer',
      success: 'Merci ! Votre message a bien été envoyé.',
      error: 'L’envoi n’a pas abouti. Vous pouvez nous écrire directement à {email}.',
    },
    social: 'Suivez-nous',
  },
  footer: {
    tagline: 'PawZenTopia — Bien-être et éducation',
    location: 'Toulouse, France',
    legal: 'Mentions légales',
  },
  legalPage: {
    slug: 'mentions-legales',
    title: 'Mentions légales',
    // TODO(content): legal wording is a draft built only from confirmed data — review by a qualified professional.
    publisherTitle: 'Éditeur du site',
    publisher: 'Le site PawZenTopia est édité par {owner}.',
    phone: 'Téléphone',
    email: 'E-mail',
    hostTitle: 'Hébergement',
    privacyTitle: 'Données personnelles',
    privacy:
      'Les informations que vous nous envoyez (formulaire, e-mail, téléphone ou WhatsApp) servent uniquement à répondre à votre demande. Elles ne sont ni vendues ni cédées. Pour les consulter, les corriger ou les supprimer, écrivez à {email}.',
    formNote: 'Le formulaire de contact est transmis par le service Formspree vers notre boîte e-mail.',
    cookiesTitle: 'Cookies',
    cookies: 'Ce site n’utilise aucun cookie publicitaire ni outil de mesure d’audience.',
    back: 'Retour à l’accueil',
  },
  notFound: {
    title: 'Page introuvable',
    back: 'Retour à l’accueil',
  },
};

export default fr;
export type Dictionary = typeof fr;
