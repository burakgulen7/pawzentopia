import type { ServiceDictionary } from './types';

const fr: ServiceDictionary = {
  ui: {
    breadcrumbHome: 'Accueil',
    faq: 'Questions fréquentes',
    others: 'Nos autres services',
    more: 'En savoir plus →',
    servicesTitle: 'Nos services',
    ctaTitle: 'Parlons de votre compagnon.',
    ctaText: 'Écrivez-nous sur WhatsApp : Marianna vous répond pour vérifier les disponibilités et organiser la garde.',
  },
  pages: {
    pension: {
      slug: 'pension-canine-toulouse',
      title: 'Pension canine familiale à Saint-Jean | PawZenTopia',
      description:
        'Pension canine familiale à Saint-Jean (31240), près de Toulouse : une alternative chaleureuse à l’hôtel pour chiens, de {boardingMin} à {boardingMax} € la nuit selon le gabarit.',
      h1: 'Pension canine familiale à Saint-Jean, près de Toulouse',
      name: 'Pension canine familiale',
      serviceType: 'Pension canine',
      photo: 'familyCare',
      intro: [
        'Vous partez quelques jours et vous cherchez une garde de chien de confiance ? PawZenTopia propose une pension canine familiale à Saint-Jean (31240), pour les chiens de toute la métropole toulousaine.',
        'Plutôt qu’un hôtel pour chiens, c’est un hébergement chaleureux, à la maison, où votre compagnon garde ses repères.',
      ],
      sections: [
        {
          h2: 'Une pension à taille humaine, comme à la maison',
          p: [
            'Chaque chien est accueilli comme un individu. Marianna prend le temps de comprendre son caractère, son rythme et ce qui le rassure, pour que le séjour se passe en douceur.',
            'La pension se fait à la nuitée, selon les disponibilités. Pour une garde de jour, sans nuit, découvrez aussi notre [[creche|crèche canine]].',
          ],
        },
        { h2: 'Tarifs de la pension canine', price: 'boarding' },
        {
          h2: 'Comment réserver ?',
          p: [
            'Écrivez-nous sur WhatsApp en précisant les dates, le gabarit et les habitudes de votre chien. Marianna vous répond pour vérifier les disponibilités et organiser son arrivée. Nous parlons français, anglais et turc.',
          ],
        },
        {
          h2: 'Zone desservie',
          p: ['PawZenTopia est installée à Saint-Jean (31240) et accueille les chiens de Toulouse et de la métropole toulousaine.'],
        },
      ],
      faq: [
        {
          q: 'Combien coûte une nuit en pension canine ?',
          a: 'De {boardingMin} à {boardingMax} € par jour ou par nuit, selon le gabarit de votre chien (voir le tableau ci-dessus).',
        },
        { q: 'Y a-t-il une offre pour les longs séjours ?', a: '{boardingOffer}' },
        {
          q: 'Prenez-vous les chats en pension ?',
          a: 'Non. Les chats ne sont pas pris en pension : nous les gardons uniquement à domicile, en [[petSitting|cat sitting]].',
        },
        {
          q: 'La pension inclut-elle de l’éducation ?',
          a: 'Non, la pension est une garde sans éducation. Pour un travail sur le comportement, voir l’[[education|éducation canine]].',
        },
        { q: 'Comment réserver ?', a: 'Par message WhatsApp, avec les dates du séjour et quelques mots sur votre chien.' },
      ],
    },
    creche: {
      slug: 'creche-canine-toulouse',
      title: 'Crèche canine & garderie pour chiens, Toulouse | PawZenTopia',
      description:
        'Crèche canine à Saint-Jean (31240), près de Toulouse : une garderie de jour pour votre chien, sans éducation, de {boardingMin} à {boardingMax} € la journée selon le gabarit.',
      h1: 'Crèche canine à Saint-Jean, près de Toulouse',
      name: 'Crèche canine',
      serviceType: 'Crèche canine (garderie de jour pour chiens)',
      photo: 'approach',
      intro: [
        'Votre chien n’aime pas rester seul toute la journée ? La crèche canine PawZenTopia est une garderie de jour pour chiens à Saint-Jean (31240) : votre compagnon passe la journée en compagnie, à son rythme, puis vous le retrouvez le soir.',
      ],
      sections: [
        {
          h2: 'Une garderie pour chiens, sans éducation',
          p: [
            'La crèche est une garde de jour simple : présence, attention et moments de jeu, sans programme éducatif. Chaque chien est accueilli comme un individu, dans le respect de son caractère et de son rythme.',
            'Si votre chien a besoin d’un travail sur son comportement, l’[[education|éducation canine]] est proposée séparément, avec un bilan comportemental initial.',
          ],
        },
        { h2: 'Tarifs de la crèche canine', price: 'boarding' },
        {
          h2: 'Pour qui ?',
          p: [
            'Pour les propriétaires de Saint-Jean, de Toulouse et de la métropole toulousaine qui travaillent ou s’absentent pour la journée, et pour les chiens qui préfèrent la compagnie à la solitude.',
          ],
        },
        {
          h2: 'Comment ça se passe ?',
          p: [
            'Le premier contact se fait sur WhatsApp : indiquez-nous les jours qui vous intéressent, le gabarit et les habitudes de votre chien. Marianna vous répond pour organiser la première journée.',
          ],
        },
      ],
      faq: [
        { q: 'Quel est le tarif d’une journée de crèche ?', a: 'De {boardingMin} à {boardingMax} € par jour, selon le gabarit de votre chien.' },
        {
          q: 'Mon chien peut-il aussi rester la nuit ?',
          a: 'Oui, en [[pension|pension familiale]] (nuitée), selon les disponibilités et au même tarif par nuit.',
        },
        { q: 'La crèche inclut-elle de l’éducation ?', a: 'Non. La crèche est une garde de jour sans éducation.' },
        { q: 'Accueillez-vous les chats ?', a: 'Non, les chats sont gardés uniquement à domicile, en [[petSitting|cat sitting]].' },
      ],
    },
    petSitting: {
      slug: 'pet-sitting-toulouse',
      title: 'Pet sitting & garde de chat à Toulouse | PawZenTopia',
      description:
        'Pet sitting à domicile à Saint-Jean et Toulouse : dog sitting avec promenade et cat sitting (garde de chat), visites de 40 à 60 min, dès {catMin} € le passage.',
      h1: 'Pet sitting à domicile à Saint-Jean et Toulouse',
      name: 'Pet sitting à domicile',
      serviceType: 'Pet sitting à domicile (dog sitting, promenade, cat sitting)',
      photo: 'visits',
      intro: [
        'Votre animal est plus serein chez lui ? Avec le pet sitting, c’est PawZenTopia qui vient à lui. Marianna propose une garde animalière à domicile à Saint-Jean (31240) et dans la métropole toulousaine : des visites individuelles de 40 à 60 minutes, pour les chiens comme pour les chats.',
      ],
      sections: [
        {
          h2: 'Dog sitting et promenade',
          p: [
            'Pendant la visite, votre chien profite d’une promenade de 40 à 60 minutes (dog walking), de soins et d’une présence attentive. Le tarif est ajusté selon la taille du chien et la distance kilométrique.',
          ],
        },
        {
          h2: 'Cat sitting : la garde de chat à domicile',
          p: [
            'Les chats ne sont pas pris en pension : la garde de chat se fait uniquement chez vous. À chaque passage : litière, nourriture, câlins ou jeux, et une présence de 40 à 60 minutes. Le tarif est ajusté selon les besoins spécifiques du chat et la distance kilométrique.',
          ],
        },
        { h2: 'Tarifs du pet sitting', price: 'visits' },
        {
          h2: 'Comment réserver ?',
          p: [
            'Écrivez-nous sur WhatsApp en indiquant les dates, votre animal et votre commune. Marianna vous répond pour organiser les visites. Pour des passages réguliers, les abonnements et forfaits sont proposés sur demande.',
          ],
        },
      ],
      faq: [
        { q: 'Gardez-vous les chats ?', a: 'Oui, uniquement à domicile (cat sitting) : les chats ne sont pas pris en pension.' },
        { q: 'Combien de temps dure une visite ?', a: 'De 40 à 60 minutes, de façon individuelle.' },
        {
          q: 'Combien coûte une visite ?',
          a: 'Dog sitting : {dogPrice} par passage. Cat sitting : {catPrice} par passage. Le tarif est ajusté selon l’animal et la distance.',
        },
        { q: 'Proposez-vous des forfaits pour des visites régulières ?', a: 'Oui, les abonnements et forfaits réguliers sont proposés sur demande, sur devis.' },
        { q: 'Où intervenez-vous ?', a: 'À Saint-Jean (31240) et dans la métropole toulousaine.' },
      ],
    },
    education: {
      slug: 'education-canine-toulouse',
      title: 'Éducation canine & comportement, Toulouse | PawZenTopia',
      description:
        'Éducation, sociabilisation et réhabilitation canine à Saint-Jean (31240), près de Toulouse : bilan comportemental, sessions journée dès {trainingFrom} € et packs.',
      h1: 'Éducation canine à Saint-Jean, près de Toulouse',
      name: 'Éducation canine',
      serviceType: 'Éducation, sociabilisation et réhabilitation canine',
      photo: 'training',
      intro: [
        'Votre chien a besoin d’apprendre, de mieux vivre avec les autres ou de retrouver son équilibre ? PawZenTopia propose un accompagnement d’éducation, de sociabilisation et de réhabilitation à Saint-Jean (31240), pour les chiens de Toulouse et de sa métropole.',
      ],
      sections: [
        {
          h2: 'Une approche patiente, fondée sur l’écoute',
          p: [
            'Chaque chien est accueilli comme un individu. L’accompagnement est patient, fondé sur l’écoute et la confiance : on prend le temps de comprendre son caractère, son rythme et ce qui le rassure.',
          ],
        },
        {
          h2: 'Le bilan comportemental, première étape',
          p: [
            'Tout commence par un bilan comportemental initial, obligatoire, d’une durée d’1 h à 1 h 30. Il permet de comprendre votre chien et de choisir la formule adaptée.',
          ],
        },
        {
          h2: 'Sessions journée et packs',
          p: [
            'Les sessions se déroulent à la journée : suivi et sociabilisation classique, ou accompagnement pour des besoins complexes et une réhabilitation lourde. Des packs de 5 ou 10 journées sont aussi proposés.',
          ],
        },
        { h2: 'Tarifs de l’éducation canine', price: 'training' },
      ],
      faq: [
        { q: 'Le bilan comportemental est-il obligatoire ?', a: 'Oui. Il dure d’1 h à 1 h 30 et coûte {assessmentPrice}.' },
        {
          q: 'Le tarif dépend-il de la taille du chien ?',
          a: 'Non. Les tarifs sont fixés uniquement selon la complexité du comportement, et non selon la taille ou le poids du chien.',
        },
        { q: 'Existe-t-il des packs ?', a: 'Oui : pack 5 journées ({pack5Price}) et pack 10 journées ({pack10Price}).' },
        { q: 'L’éducation est-elle comprise dans la pension ou la crèche ?', a: 'Non, la [[pension|pension]] et la [[creche|crèche]] sont des gardes sans éducation.' },
        { q: 'Comment commencer ?', a: 'Écrivez-nous sur WhatsApp en décrivant votre chien et ce qui vous préoccupe ; nous fixerons ensemble le bilan comportemental.' },
      ],
    },
  },
};

export default fr;
