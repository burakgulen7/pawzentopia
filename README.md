# PawZenTopia — web sitesi

Toulouse'daki PawZenTopia köpek bakımı ve eğitimi işletmesinin 4 dilli web sitesi
(Fransızca `/`, İngilizce `/en/`, Rusça `/ru/`, Türkçe `/tr/`).

Site [Astro](https://astro.build) ile yapılmış, hafif ve hızlı bir statik sitedir. GitHub Pages üzerinde
ücretsiz yayınlanır; `main` dalına yapılan her değişiklikten sonra otomatik olarak yeniden yayınlanır.

## Sık yapılan değişiklikler (kod bilgisi gerekmez)

Dosyaları GitHub web sitesinde açıp kalem simgesine (✏️) basarak düzenleyebilir, sonra
**Commit changes** ile kaydedebilirsiniz. Birkaç dakika içinde site güncellenir.

| Ne değişecek? | Hangi dosya? |
| --- | --- |
| Fotoğraflar | `src/photos/` klasörü — bkz. [FOTO_DEGISTIRME.md](FOTO_DEGISTIRME.md) |
| Fiyatlar (4 dilde birden) | `src/data/prices.json` (Pages CMS'te "Tarifs") |
| Telefon, WhatsApp, e-posta, sosyal medya | `src/config/site.ts` |
| İletişim formunu açmak (Formspree kimliği) | `src/config/site.ts` → `formspreeId` |
| Yasal bilgiler (SIRET, adres, statü) | `src/config/site.ts` → `legal` |
| Metinler | `src/i18n/fr.ts`, `en.ts`, `ru.ts`, `tr.ts` |
| Blog yazıları | Pages CMS (https://app.pagescms.org) — bkz. [BLOG_REHBERI.md](BLOG_REHBERI.md) |

Metinlerde tırnak işaretlerinin (`'...'`) arasındaki yazıyı değiştirin; tırnakları ve virgülleri silmeyin.
`{price}`, `{email}` gibi süslü parantezli kelimeler otomatik doldurulur, olduğu gibi bırakın.
Başlıklardaki `|` işareti yalnızca telefonda satır başı yapılacak yeri gösterir.

**Yeni dil eklemek:** `src/i18n/fr.ts` dosyasını kopyalayıp (ör. `es.ts`) çevirin ve
`src/i18n/index.ts` içindeki `languages` listesine bir satır ekleyin.

**Yeni sosyal ağ eklemek:** `src/config/site.ts` içindeki `socials` listesine bir satır ekleyin
(Facebook, YouTube ve Google simgeleri hazırdır).

## Geliştiriciler için

```sh
npm install
npm run dev      # yerel önizleme: http://localhost:4321
npm run check    # tip kontrolü
npm run build    # dist/ klasörüne üretim çıktısı
```

- Proje talimatları: `CLAUDE.md`, `PROJECT_DECISIONS.md`, `DESIGN_SPEC.md`, `CONTENT_*.md`.
- Onaylı tasarım referansları: `reference/`. Orijinal logo ve onaylı fotoğraflar: `assets/` (dokunulmaz).
- Logo türevleri `scripts/make_logo.py` ile orijinalden üretilir (yalnızca kırpma + beyaz arka planı şeffaflaştırma).
- Yazı tipleri: DejaVu Serif / Sans (onaylı PNG'lerin kullandığı yazı tipleri), siteyle birlikte barındırılır;
  Kiril ve Türkçe karakterleri destekler. Lisans: `src/assets/fonts/LICENSE-DejaVu.txt`.
