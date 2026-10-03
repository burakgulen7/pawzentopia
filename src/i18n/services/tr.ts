import type { ServiceDictionary } from './types';

const tr: ServiceDictionary = {
  ui: {
    breadcrumbHome: 'Ana sayfa',
    faq: 'Sık sorulan sorular',
    others: 'Diğer hizmetlerimiz',
    more: 'Daha fazla bilgi →',
    servicesTitle: 'Hizmetlerimiz',
    ctaTitle: 'Dostunuz hakkında konuşalım.',
    ctaText: 'Bize WhatsApp’tan yazın: Marianna müsaitliği kontrol etmek ve bakımı planlamak için size geri dönüş yapar.',
  },
  pages: {
    pension: {
      slug: 'kopek-pansiyonu-toulouse',
      title: 'Aile ortamında köpek pansiyonu, Toulouse | PawZenTopia',
      description:
        'Saint-Jean’da (31240), Toulouse yakınında aile ortamında köpek pansiyonu: köpek oteline sıcak bir alternatif, boyuta göre gecesi {boardingMin}–{boardingMax} €.',
      h1: 'Saint-Jean’da aile ortamında köpek pansiyonu',
      name: 'Aile ortamında köpek pansiyonu',
      serviceType: 'Köpek pansiyonu',
      photo: 'familyCare',
      intro: [
        'Birkaç günlüğüne uzaklaşıyorsunuz ve güvenebileceğiniz bir köpek bakımı mı arıyorsunuz? PawZenTopia, Saint-Jean’da (31240), tüm Toulouse metropol bölgesindeki köpekler için aile ortamında pansiyon sunuyor.',
        'Bir köpek otelinden farklı olarak, dostunuzun alışkanlıklarını koruduğu, evde sıcak bir konaklama.',
      ],
      sections: [
        {
          h2: 'Küçük ölçekli, ev gibi bir pansiyon',
          p: [
            'Her köpek bir birey olarak karşılanır. Marianna, konaklamanın sorunsuz geçmesi için köpeğin karakterini, ritmini ve onu neyin rahatlattığını anlamaya zaman ayırır.',
            'Pansiyon gecelik olarak ve müsaitliğe göre yapılır. Gece kalmadan gündüz bakımı için [[creche|köpek kreşimize]] de göz atın.',
          ],
        },
        { h2: 'Köpek pansiyonu fiyatları', price: 'boarding' },
        {
          h2: 'Nasıl rezervasyon yapılır?',
          p: [
            'Bize WhatsApp’tan tarihleri, köpeğinizin boyutunu ve alışkanlıklarını yazın. Marianna müsaitliği kontrol etmek ve gelişini planlamak için size geri dönüş yapar. Fransızca, İngilizce ve Türkçe konuşuyoruz.',
          ],
        },
        {
          h2: 'Hizmet bölgesi',
          p: ['PawZenTopia, Saint-Jean’da (31240) bulunur ve Toulouse ile Toulouse metropol bölgesindeki köpekleri kabul eder.'],
        },
      ],
      faq: [
        {
          q: 'Pansiyonda bir gece ne kadar?',
          a: 'Köpeğinizin boyutuna göre gün ya da gece başına {boardingMin}–{boardingMax} € (yukarıdaki tabloya bakın).',
        },
        { q: 'Uzun konaklamalar için bir fırsat var mı?', a: '{boardingOffer}' },
        { q: 'Kedileri pansiyona alıyor musunuz?', a: 'Hayır. Kediler pansiyona kabul edilmez; yalnızca evde [[petSitting|kedi bakımı]] yapıyoruz.' },
        { q: 'Pansiyona eğitim dahil mi?', a: 'Hayır, pansiyon eğitimsiz bir bakımdır. Davranış çalışması için [[education|köpek eğitimi]] sayfasına bakın.' },
        { q: 'Nasıl rezervasyon yapabilirim?', a: 'WhatsApp mesajıyla; konaklama tarihlerini ve köpeğiniz hakkında birkaç bilgiyi yazmanız yeterli.' },
      ],
    },
    creche: {
      slug: 'kopek-kresi-toulouse',
      title: 'Saint-Jean’da köpek kreşi, Toulouse | PawZenTopia',
      description:
        'Saint-Jean’da (31240), Toulouse yakınında köpek kreşi: köpeğiniz için eğitimsiz gündüz bakımı, boyuta göre günlüğü {boardingMin}–{boardingMax} €.',
      h1: 'Saint-Jean’da köpek kreşi, Toulouse yakınında',
      name: 'Köpek kreşi',
      serviceType: 'Köpek kreşi (gündüz bakımı)',
      photo: 'approach',
      intro: [
        'Köpeğiniz bütün gün yalnız kalmayı sevmiyor mu? PawZenTopia’nın Saint-Jean’daki (31240) köpek kreşinde dostunuz günü kendi ritminde, yalnız kalmadan geçirir; akşam onu alırsınız.',
      ],
      sections: [
        {
          h2: 'Eğitim içermeyen gündüz bakımı',
          p: [
            'Kreş basit bir gündüz bakımıdır: refakat, ilgi ve oyun dolu anlar; eğitim programı yoktur. Her köpek, karakterine ve ritmine saygı gösterilerek bir birey olarak karşılanır.',
            'Köpeğinizin davranışları üzerinde çalışmak gerekiyorsa [[education|köpek eğitimi]], bir ilk davranış değerlendirmesiyle ayrıca sunulur.',
          ],
        },
        { h2: 'Köpek kreşi fiyatları', price: 'boarding' },
        {
          h2: 'Kimler için?',
          p: ['Saint-Jean, Toulouse ve Toulouse metropol bölgesinde çalışan ya da gün boyu evde olmayan köpek sahipleri ve yalnız kalmak yerine refakati tercih eden köpekler için.'],
        },
        {
          h2: 'Nasıl işliyor?',
          p: ['İlk iletişim WhatsApp üzerinden olur: hangi günlere ihtiyacınız olduğunu, köpeğinizin boyutunu ve alışkanlıklarını yazın. Marianna ilk günü planlamak için size geri dönüş yapar.'],
        },
      ],
      faq: [
        { q: 'Kreşte bir gün ne kadar?', a: 'Köpeğinizin boyutuna göre günlüğü {boardingMin}–{boardingMax} €.' },
        { q: 'Köpeğim gece de kalabilir mi?', a: 'Evet, müsaitliğe göre ve gece başına aynı fiyatla [[pension|aile ortamında pansiyonda]] (gecelik).' },
        { q: 'Kreşe eğitim dahil mi?', a: 'Hayır. Kreş eğitim içermeyen bir gündüz bakımıdır.' },
        { q: 'Kedi kabul ediyor musunuz?', a: 'Hayır, kediler yalnızca evde [[petSitting|kedi bakımı]] ile bakılır.' },
      ],
    },
    petSitting: {
      slug: 'evcil-hayvan-bakimi-toulouse',
      title: 'Evde evcil hayvan ve kedi bakımı, Toulouse | PawZenTopia',
      description:
        'Saint-Jean ve Toulouse’da evde evcil hayvan bakımı: köpek gezdirme ve kedi bakımı, 40–60 dakikalık ziyaretler; ziyaret başı {catMin} €’dan itibaren.',
      h1: 'Saint-Jean ve Toulouse’da evde evcil hayvan bakımı',
      name: 'Evde evcil hayvan bakımı',
      serviceType: 'Evde evcil hayvan bakımı (köpek bakımı, köpek gezdirme, kedi bakımı)',
      photo: 'visits',
      intro: [
        'Hayvanınız evinde daha mı huzurlu? Evde bakımda PawZenTopia ona gelir. Marianna, Saint-Jean’da (31240) ve Toulouse metropol bölgesinde evde evcil hayvan bakımı sunuyor: köpekler ve kediler için 40–60 dakikalık bireysel ziyaretler.',
      ],
      sections: [
        {
          h2: 'Köpek bakımı ve gezdirme',
          p: ['Ziyaret sırasında köpeğiniz 40–60 dakikalık bir yürüyüşün (köpek gezdirme), bakımın ve özenli bir refakatin tadını çıkarır. Fiyat köpeğin boyutuna ve mesafeye göre belirlenir.'],
        },
        {
          h2: 'Kedi bakımı: evinizde',
          p: ['Kediler pansiyona kabul edilmez: kedi bakımı yalnızca evinizde yapılır. Her ziyarette kum kabı, mama, sevgi ya da oyun ve 40–60 dakikalık refakat vardır. Fiyat kedinin özel ihtiyaçlarına ve mesafeye göre belirlenir.'],
        },
        { h2: 'Evde bakım fiyatları', price: 'visits' },
        {
          h2: 'Nasıl rezervasyon yapılır?',
          p: ['Bize WhatsApp’tan tarihleri, hayvanınızı ve yaşadığınız yeri yazın. Marianna ziyaretleri planlamak için size geri dönüş yapar. Düzenli ziyaretler için abonelik ve paketler talep üzerine sunulur.'],
        },
      ],
      faq: [
        { q: 'Kedilere bakıyor musunuz?', a: 'Evet, yalnızca evde (kedi bakımı): kediler pansiyona kabul edilmez.' },
        { q: 'Bir ziyaret ne kadar sürer?', a: 'Birebir olarak 40 ila 60 dakika.' },
        { q: 'Bir ziyaret ne kadar?', a: 'Köpek bakımı: ziyaret başına {dogPrice}. Kedi bakımı: ziyaret başına {catPrice}. Fiyat hayvana ve mesafeye göre belirlenir.' },
        { q: 'Düzenli ziyaretler için paket var mı?', a: 'Evet, abonelikler ve düzenli paketler talep üzerine, teklifle sunulur.' },
        { q: 'Hangi bölgede hizmet veriyorsunuz?', a: 'Saint-Jean’da (31240) ve Toulouse metropol bölgesinde.' },
      ],
    },
    education: {
      slug: 'kopek-egitimi-toulouse',
      title: 'Toulouse’da köpek eğitimi ve davranış | PawZenTopia',
      description:
        'Saint-Jean’da (31240), Toulouse yakınında köpek eğitimi ve rehabilitasyon: davranış değerlendirmesi, günlüğü {trainingFrom} €’dan seanslar ve paketler.',
      h1: 'Saint-Jean’da köpek eğitimi, Toulouse yakınında',
      name: 'Köpek eğitimi',
      serviceType: 'Köpek eğitimi, sosyalleşme ve rehabilitasyon',
      photo: 'training',
      intro: [
        'Köpeğinizin öğrenmeye, başkalarıyla daha iyi geçinmeye ya da dengesini yeniden bulmaya mı ihtiyacı var? PawZenTopia, Saint-Jean’da (31240), Toulouse ve metropol bölgesindeki köpekler için eğitim, sosyalleşme ve rehabilitasyon sunuyor.',
      ],
      sections: [
        {
          h2: 'Dinlemeye dayanan sabırlı bir yaklaşım',
          p: ['Her köpek bir birey olarak karşılanır. Rehberlik sabırlıdır, dinlemeye ve güvene dayanır: köpeğin karakterini, ritmini ve onu neyin rahatlattığını anlamak için zaman ayırırız.'],
        },
        {
          h2: 'İlk adım: davranış değerlendirmesi',
          p: ['Her şey 1–1,5 saat süren, zorunlu bir ilk davranış değerlendirmesiyle başlar. Bu değerlendirme köpeğinizi anlamamıza ve uygun formülü seçmemize yardımcı olur.'],
        },
        {
          h2: 'Günlük seanslar ve paketler',
          p: ['Seanslar gün boyu sürer: takip ve klasik sosyalleşme ya da karmaşık ihtiyaçlar ve yoğun rehabilitasyon için destek. 5 ve 10 günlük paketler de sunulur.'],
        },
        { h2: 'Köpek eğitimi fiyatları', price: 'training' },
      ],
      faq: [
        { q: 'Davranış değerlendirmesi zorunlu mu?', a: 'Evet. 1–1,5 saat sürer ve ücreti {assessmentPrice}.' },
        { q: 'Fiyat köpeğin boyutuna göre mi değişiyor?', a: 'Hayır. Fiyatlar köpeğin boyutuna veya kilosuna göre değil, yalnızca davranışın karmaşıklığına göre belirlenir.' },
        { q: 'Paketler var mı?', a: 'Evet: 5 günlük paket ({pack5Price}) ve 10 günlük paket ({pack10Price}).' },
        { q: 'Pansiyon ya da kreşe eğitim dahil mi?', a: 'Hayır, [[pension|pansiyon]] ve [[creche|kreş]] eğitim içermeyen bakımlardır.' },
        { q: 'Nasıl başlarım?', a: 'Bize WhatsApp’tan köpeğinizi ve sizi endişelendiren durumu anlatın; davranış değerlendirmesini birlikte planlayalım.' },
      ],
    },
  },
};

export default tr;
