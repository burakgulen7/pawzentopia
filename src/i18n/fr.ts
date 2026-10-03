/**
 * Textes en français (langue par défaut, servie à « / »).
 * Source : CONTENT_FR.md. Les autres langues (en.ts, tr.ts) suivent exactement la même structure.
 * {placeholders} are filled in automatically from src/config/site.ts and src/config/prices.ts.
 */
const fr = {
  meta: {
    title: 'PawZenTopia — Pension canine & pet sitting à Saint-Jean (Toulouse)',
    description:
      'Pension canine familiale, crèche, pet sitting et garde de chat à domicile, éducation canine à Saint-Jean (31240) et dans la métropole toulousaine.',
    ogLocale: 'fr_FR',
  },
  ui: {
    skip: 'Aller au contenu',
    language: 'Langue',
    newTab: '(nouvel onglet)',
    home: 'Accueil PawZenTopia',
    menu: 'Menu',
    closeMenu: 'Fermer le menu',
  },
  nav: {
    services: 'Nos services',
    prices: 'Tarifs',
    approach: 'Notre approche',
    availability: 'Urgences',
    blog: 'Blog',
    contact: 'Nous contacter',
  },
  hero: {
    eyebrow: 'Pension canine, pet sitting & éducation · Saint-Jean / Toulouse',
    // Approved line breaks (desktop and mobile).
    headline: ['Heureux comme', 'à la maison.', 'Entouré', 'd’attention.'],
    body: 'Un accueil à taille humaine, des moments de jeu et une présence attentive pour votre compagnon.',
    primary: 'Découvrir nos services',
    secondary: 'Rencontrer PawZenTopia',
  },
  trust: ['Un accueil à taille humaine', 'Le rythme de chaque chien respecté', 'Saint-Jean (31240) & métropole toulousaine'],
  services: {
    eyebrow: 'Ce que nous faisons',
    heading: 'Le bon soin,| au bon moment.',
    body: 'Du quotidien aux imprévus, un accompagnement attentif pensé pour votre chien et votre tranquillité d’esprit.',
    items: {
      familyCare: {
        title: 'Pension familiale & crèche',
        text: 'Le confort d’un foyer et une attention adaptée à ses habitudes.',
        detail: 'Pension (nuit) ou crèche (journée), de {min} à {max} € selon le gabarit.',
      },
      training: {
        title: 'Éducation canine',
        text: 'Un accompagnement patient, fondé sur l’écoute et la confiance.',
        detail: 'Bilan comportemental, sessions journée et packs de 5 ou 10 jours. Dès {from} € / jour.',
      },
      visits: {
        title: 'Visites à domicile',
        text: 'Chien ou chat : des visites chez vous de 40 à 60 minutes.',
        detail: 'Dog sitting dès {dog} € et cat sitting dès {cat} € par passage.',
      },
      urgentCare: {
        title: 'Cas d’urgence',
        text: 'Réservé aux clients déjà connus de PawZenTopia.',
        detail: 'Imprévu ou hospitalisation : accompagnement, garde ou transport réactif. Sur devis.',
      },
    },
    more: 'Nous contacter →',
  },
  pricing: {
    eyebrow: 'Tarifs',
    heading: 'Une grille claire, service par service.',
    body: 'Saint-Jean (31240) & métropole toulousaine — accueil familial, éducation, pension & visites à domicile.',
    perDay: '/ jour',
    perVisit: '/ passage',
    price: '{n} €',
    cta: 'Demander un devis',
  },
  approach: {
    eyebrow: 'Leur bien-être, notre point de départ',
    heading: 'Une présence familière, même loin de chez vous.',
    body: 'Chez PawZenTopia, chaque chien est accueilli comme un individu. On prend le temps de comprendre son caractère, son rythme et ce qui le rassure.',
    cta: 'Parlons de votre chien',
  },
  reviews: {
    eyebrow: 'Avis Google',
    heading: 'Ils nous confient leurs compagnons.',
    outOf: 'sur 5 · {count} avis',
    badge: '{rating} · {count} avis Google',
    stars: '{rating} sur 5',
    readMore: 'Lire la suite',
    seeAll: 'Voir tous les avis sur Google',
    leave: 'Laisser un avis',
    original: 'Avis original en français',
    translated: 'Traduit du français',
  },
  social: {
    eyebrow: 'Instagram & TikTok',
    heading: 'Suivez leur quotidien.',
    body: 'Balades, jeux et moments de complicité : retrouvez les chiens que nous gardons en photos et en vidéos.',
    instagram: '@pawzentopia sur Instagram',
    tiktok: '@pawzentopia sur TikTok',
  },
  urgent: {
    eyebrow: 'Un imprévu ?',
    heading: 'Besoin d’une solution pour votre chien ?',
    cta: 'Prendre contact',
  },
  contact: {
    eyebrow: 'Nous contacter',
    heading: 'Parlons de votre chien.',
    body: 'Marianna vous répond pour organiser une garde, une visite à domicile ou une solution d’urgence.',
    languages: 'Nous parlons français, anglais et turc.',
    pricingNote: 'Suppléments sur devis, selon la situation, la distance et le gabarit de votre chien.',
    area: 'Saint-Jean (31240) & métropole toulousaine',
    whatsapp: 'Écrire sur WhatsApp',
    call: 'Appeler',
    note: 'Première demande ? Écrivez-nous sur WhatsApp pour une réponse rapide. Clients et urgences : appelez directement.',
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
  blog: {
    title: 'Blog',
    latest: 'Derniers articles',
    empty: 'Nos premiers articles arrivent bientôt.',
    read: 'Lire l’article →',
    all: 'Tous les articles →',
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
