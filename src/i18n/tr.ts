/** Türkçe metinler (/tr/). Kaynak: CONTENT_TR.md — taslak çeviri, onay bekliyor. */
import type { Dictionary } from './fr';

const tr: Dictionary = {
  meta: {
    title: 'PawZenTopia — Köpek bakımı ve refakat · Toulouse',
    description:
      'Samimi ve küçük ölçekli bir ortam, oyun dolu anlar ve dostunuz için özenli bir ilgi. Toulouse, Saint-Jean ve 20 km çevresi.',
    ogLocale: 'tr_TR',
  },
  ui: {
    skip: 'İçeriğe geç',
    language: 'Dil',
    newTab: '(yeni sekmede açılır)',
    home: 'PawZenTopia ana sayfa',
  },
  nav: {
    services: 'Hizmetlerimiz',
    prices: 'Fiyatlar',
    approach: 'Yaklaşımımız',
    availability: '7/24 ulaşılabilirlik',
    contact: 'Bize ulaşın',
  },
  hero: {
    eyebrow: 'Köpek bakımı ve refakat · Toulouse',
    headline: ['Evindeki', 'kadar mutlu.', 'İlgiyle', 'sarmalanmış.'],
    body: 'Samimi ve küçük ölçekli bir ortam, oyun dolu anlar ve dostunuz için özenli bir ilgi.',
    primary: 'Hizmetlerimizi keşfedin',
    secondary: 'PawZenTopia’yı tanıyın',
  },
  trust: ['Samimi ve küçük ölçekli bir ortam', 'Her köpeğin kendi ritmine saygı', 'Toulouse, Saint-Jean ve 20 km çevresi'],
  services: {
    eyebrow: 'Neler yapıyoruz',
    heading: 'Doğru bakım,| doğru zamanda.',
    body: 'Günlük rutinden beklenmedik durumlara kadar, köpeğiniz ve sizin gönül rahatlığınız için düşünülmüş özenli bir destek.',
    items: {
      familyCare: { title: 'Aile ortamında bakım', text: 'Bir yuvanın konforu ve alışkanlıklarına uygun bir ilgi.' },
      training: { title: 'Köpek eğitimi', text: 'Dinlemeye ve güvene dayanan sabırlı bir rehberlik.' },
      urgentCare: { title: 'Acil bakım', text: 'Beklenmedik durumlar için birlikte planlanan bir bakım çözümü.' },
      transport: { title: '7/24 ulaşım', text: 'İhtiyacınıza göre yolculuklarda refakat.' },
    },
  },
  pricing: {
    eyebrow: 'Fiyatlar',
    heading: 'Boyuta göre net fiyatlar.',
    body: 'Günlük temel fiyatlar. Özel bir ihtiyacınız varsa birlikte konuşalım.',
    boardingTitle: '24 saat bakım (gece dahil)',
    columns: { size: 'Boyut', weight: 'Ağırlık', price: 'Köpek başı günlük fiyat' },
    weightUpTo: '{max} kg’a kadar',
    weightRange: '{min}–{max} kg',
    weightOver: '{min} kg üzeri',
    price: '{n} €',
    discount: '{days} günü aşan bakımlarda toplam tutardan %{percent} indirim.',
    dayCareTitle: 'Gündüz kreşi',
    dayCareFrom: 'Günlüğü {price}’dan başlayan fiyatlarla',
    dayCareSubscription: 'Yıllık abonelikle: günlüğü {price}’dan başlayan fiyatlarla',
    extras:
      'Ek hizmetler teklif üzerine: özel bakım veya ilaç verilmesi, tüy bakımı (tarama, yıkama…), acil ya da gece talepleri, ulaşım, mesafe.',
    cta: 'Fiyat teklifi isteyin',
  },
  approach: {
    eyebrow: 'Onların iyiliği, başlangıç noktamız',
    heading: 'Evden uzakta bile tanıdık bir yüz.',
    body: 'PawZenTopia’da her köpek bir birey olarak karşılanır. Karakterini, ritmini ve onu neyin rahatlattığını anlamak için zaman ayırırız.',
    cta: 'Köpeğiniz hakkında konuşalım',
  },
  urgent: {
    eyebrow: 'Beklenmedik bir durum mu?',
    heading: 'Köpeğiniz için bir çözüme mi ihtiyacınız var?',
    body: 'Acil bakım veya ulaşım için günün her saatinde bize ulaşın.',
    detail:
      'Hastaneye yatış, kaza, ani yolculuk: köpeğinizi gelip alabilir, sizin evinizde ya da müsaitliğe göre bizim evimizde bakabiliriz.',
    cta: 'İletişime geçin',
  },
  contact: {
    eyebrow: 'Bize ulaşın',
    heading: 'Köpeğiniz hakkında konuşalım.',
    body: 'Marianna; bakım, ulaşım ya da acil bir çözüm planlamak için size geri dönüş yapar.',
    languages: 'Fransızca, İngilizce, Rusça ve Türkçe konuşuyoruz.',
    pricingNote: 'Ek hizmetler; duruma, mesafeye ve köpeğinizin boyutuna göre teklif üzerine.',
    area: 'Toulouse, Saint-Jean ve 20 km çevresi',
    whatsapp: 'WhatsApp’tan yazın',
    call: 'Arayın: {phoneIntl}',
    whatsappMessage: 'Merhaba, PawZenTopia web sitesi üzerinden ulaşıyorum.',
    form: {
      name: 'Adınız',
      reply: 'Telefon veya e-posta',
      message: 'Mesajınız',
      send: 'Gönder',
      success: 'Teşekkürler! Mesajınız gönderildi.',
      error: 'Mesajınız gönderilemedi. Bize doğrudan {email} adresinden yazabilirsiniz.',
    },
    social: 'Bizi takip edin',
  },
  footer: {
    tagline: 'PawZenTopia — Refah ve eğitim',
    location: 'Toulouse, Fransa',
    legal: 'Yasal bilgiler',
  },
  legalPage: {
    slug: 'yasal-bilgiler',
    title: 'Yasal bilgiler',
    publisherTitle: 'Site yayıncısı',
    publisher: 'PawZenTopia web sitesi {owner} tarafından yayımlanmaktadır.',
    phone: 'Telefon',
    email: 'E-posta',
    hostTitle: 'Barındırma',
    privacyTitle: 'Kişisel veriler',
    privacy:
      'Bize gönderdiğiniz bilgiler (form, e-posta, telefon veya WhatsApp) yalnızca talebinize yanıt vermek için kullanılır. Satılmaz ve başkalarıyla paylaşılmaz. Bu bilgileri görmek, düzeltmek veya sildirmek için {email} adresine yazın.',
    formNote: 'İletişim formu, Formspree hizmeti aracılığıyla e-posta kutumuza iletilir.',
    cookiesTitle: 'Çerezler',
    cookies: 'Bu site reklam çerezi veya ziyaretçi ölçüm aracı kullanmaz.',
    back: 'Ana sayfaya dön',
  },
  notFound: {
    title: 'Sayfa bulunamadı',
    back: 'Ana sayfaya dön',
  },
};

export default tr;
