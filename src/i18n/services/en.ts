import type { ServiceDictionary } from './types';

const en: ServiceDictionary = {
  ui: {
    breadcrumbHome: 'Home',
    faq: 'Frequently asked questions',
    others: 'Our other services',
    more: 'Learn more →',
    servicesTitle: 'Our services',
    ctaTitle: 'Let’s talk about your companion.',
    ctaText: 'Message us on WhatsApp: Marianna will get back to you to check availability and arrange the care.',
  },
  pages: {
    pension: {
      slug: 'dog-boarding-toulouse',
      title: 'Family dog boarding in Saint-Jean, Toulouse | PawZenTopia',
      description:
        'Family dog boarding in Saint-Jean (31240), near Toulouse: a warm alternative to a dog hotel, from €{boardingMin} to €{boardingMax} per night depending on size.',
      h1: 'Family dog boarding in Saint-Jean, near Toulouse',
      name: 'Family dog boarding',
      serviceType: 'Dog boarding',
      photo: 'familyCare',
      intro: [
        'Going away for a few days and looking for dog care you can trust? PawZenTopia offers family dog boarding in Saint-Jean (31240), for dogs from all over the Toulouse metropolitan area.',
        'Rather than a dog hotel, it is warm home boarding where your companion keeps their bearings.',
      ],
      sections: [
        {
          h2: 'Small-scale boarding, just like home',
          p: [
            'Every dog is welcomed as an individual. Marianna takes the time to understand their personality, their rhythm and what reassures them, so the stay goes smoothly.',
            'Boarding is overnight, depending on availability. For daytime care without a night, see our [[creche|dog day care]].',
          ],
        },
        { h2: 'Dog boarding prices', price: 'boarding' },
        {
          h2: 'How to book',
          p: [
            'Message us on WhatsApp with the dates, your dog’s size and habits. Marianna will get back to you to check availability and arrange their arrival. We speak French, English and Turkish.',
          ],
        },
        {
          h2: 'Area served',
          p: ['PawZenTopia is based in Saint-Jean (31240) and welcomes dogs from Toulouse and the Toulouse metropolitan area.'],
        },
      ],
      faq: [
        {
          q: 'How much is a night of dog boarding?',
          a: 'From €{boardingMin} to €{boardingMax} per day or per night, depending on your dog’s size (see the table above).',
        },
        { q: 'Is there an offer for long stays?', a: '{boardingOffer}' },
        { q: 'Do you board cats?', a: 'No. Cats are not boarded: we look after them at home only, with [[petSitting|cat sitting]].' },
        {
          q: 'Does boarding include training?',
          a: 'No, boarding is care without training. For work on behaviour, see [[education|dog training]].',
        },
        { q: 'How do I book?', a: 'By WhatsApp message, with the dates of the stay and a few words about your dog.' },
      ],
    },
    creche: {
      slug: 'dog-day-care-toulouse',
      title: 'Dog day care in Saint-Jean, Toulouse | PawZenTopia',
      description:
        'Dog day care in Saint-Jean (31240), near Toulouse: daytime care for your dog, without training, from €{boardingMin} to €{boardingMax} per day depending on size.',
      h1: 'Dog day care in Saint-Jean, near Toulouse',
      name: 'Dog day care',
      serviceType: 'Dog day care',
      photo: 'approach',
      intro: [
        'Your dog doesn’t like staying alone all day? PawZenTopia’s dog day care in Saint-Jean (31240) lets your companion spend the day in company, at their own pace, and you pick them up in the evening.',
      ],
      sections: [
        {
          h2: 'Daytime care, without training',
          p: [
            'Day care is simple daytime care: company, attention and playtime, with no training programme. Every dog is welcomed as an individual, respecting their personality and rhythm.',
            'If your dog needs work on their behaviour, [[education|dog training]] is offered separately, starting with an initial behavioural assessment.',
          ],
        },
        { h2: 'Dog day care prices', price: 'boarding' },
        {
          h2: 'Who is it for?',
          p: [
            'For owners in Saint-Jean, Toulouse and the Toulouse metropolitan area who work or are away for the day, and for dogs who prefer company to being alone.',
          ],
        },
        {
          h2: 'How does it work?',
          p: [
            'The first contact is on WhatsApp: tell us which days you need, your dog’s size and habits. Marianna will get back to you to arrange the first day.',
          ],
        },
      ],
      faq: [
        { q: 'How much is a day of day care?', a: 'From €{boardingMin} to €{boardingMax} per day, depending on your dog’s size.' },
        { q: 'Can my dog also stay overnight?', a: 'Yes, in [[pension|family boarding]] (overnight), depending on availability and at the same price per night.' },
        { q: 'Does day care include training?', a: 'No. Day care is daytime care without training.' },
        { q: 'Do you take cats?', a: 'No, cats are looked after at home only, with [[petSitting|cat sitting]].' },
      ],
    },
    petSitting: {
      slug: 'pet-sitting-toulouse',
      title: 'Pet sitting & cat sitting at home, Toulouse | PawZenTopia',
      description:
        'Pet sitting at home in Saint-Jean and Toulouse: dog sitting with a walk and cat sitting, 40–60 minute visits, from €{catMin} per visit.',
      h1: 'Pet sitting at home in Saint-Jean and Toulouse',
      name: 'Pet sitting at home',
      serviceType: 'Pet sitting at home (dog sitting, dog walking, cat sitting)',
      photo: 'visits',
      intro: [
        'Is your pet calmer at home? With pet sitting, PawZenTopia comes to them. Marianna offers home pet care in Saint-Jean (31240) and the Toulouse metropolitan area: individual 40–60 minute visits, for dogs and cats alike.',
      ],
      sections: [
        {
          h2: 'Dog sitting and walks',
          p: [
            'During the visit, your dog enjoys a 40–60 minute walk (dog walking), care and attentive company. The price is adjusted to the dog’s size and the distance.',
          ],
        },
        {
          h2: 'Cat sitting at your home',
          p: [
            'Cats are not boarded: cat sitting takes place at your home only. Each visit includes litter, food, cuddles or play and 40–60 minutes of company. The price is adjusted to the cat’s specific needs and the distance.',
          ],
        },
        { h2: 'Pet sitting prices', price: 'visits' },
        {
          h2: 'How to book',
          p: [
            'Message us on WhatsApp with the dates, your pet and your town. Marianna will get back to you to arrange the visits. For regular visits, subscriptions and packages are available on request.',
          ],
        },
      ],
      faq: [
        { q: 'Do you look after cats?', a: 'Yes, at home only (cat sitting): cats are not boarded.' },
        { q: 'How long is a visit?', a: '40 to 60 minutes, one-to-one.' },
        { q: 'How much is a visit?', a: 'Dog sitting: {dogPrice} per visit. Cat sitting: {catPrice} per visit. The price is adjusted to the animal and the distance.' },
        { q: 'Do you offer packages for regular visits?', a: 'Yes, subscriptions and regular packages are available on request, on quote.' },
        { q: 'Where do you work?', a: 'In Saint-Jean (31240) and the Toulouse metropolitan area.' },
      ],
    },
    education: {
      slug: 'dog-training-toulouse',
      title: 'Dog training & behaviour in Toulouse | PawZenTopia',
      description:
        'Dog training, socialisation and rehabilitation in Saint-Jean (31240), near Toulouse: behavioural assessment, day sessions from €{trainingFrom} and packs.',
      h1: 'Dog training in Saint-Jean, near Toulouse',
      name: 'Dog training',
      serviceType: 'Dog training, socialisation and rehabilitation',
      photo: 'training',
      intro: [
        'Does your dog need to learn, get along better with others or regain their balance? PawZenTopia offers training, socialisation and rehabilitation in Saint-Jean (31240), for dogs from Toulouse and its metropolitan area.',
      ],
      sections: [
        {
          h2: 'A patient approach built on listening',
          p: [
            'Every dog is welcomed as an individual. The guidance is patient, built on listening and trust: we take the time to understand their personality, their rhythm and what reassures them.',
          ],
        },
        {
          h2: 'The behavioural assessment comes first',
          p: [
            'Everything starts with a required initial behavioural assessment lasting 1 h to 1 h 30. It helps us understand your dog and choose the right option.',
          ],
        },
        {
          h2: 'Day sessions and packs',
          p: [
            'Sessions take place by the day: follow-up and standard socialisation, or support for complex needs and intensive rehabilitation. 5- and 10-day packs are also available.',
          ],
        },
        { h2: 'Dog training prices', price: 'training' },
      ],
      faq: [
        { q: 'Is the behavioural assessment required?', a: 'Yes. It lasts 1 h to 1 h 30 and costs {assessmentPrice}.' },
        { q: 'Does the price depend on the dog’s size?', a: 'No. Prices depend only on the complexity of the behaviour, not on the dog’s size or weight.' },
        { q: 'Are there packs?', a: 'Yes: 5-day pack ({pack5Price}) and 10-day pack ({pack10Price}).' },
        { q: 'Is training included in boarding or day care?', a: 'No, [[pension|boarding]] and [[creche|day care]] are care without training.' },
        { q: 'How do I start?', a: 'Message us on WhatsApp describing your dog and what worries you; we will set up the behavioural assessment together.' },
      ],
    },
  },
};

export default en;
