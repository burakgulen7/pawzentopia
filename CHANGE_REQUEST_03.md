# Change request 03 — new price list, remove Russian, Google reviews, phone fix

Requested by the user on 3 October 2026. The live site is now **https://pawzentopia.com** (custom domain on GitHub Pages, set up by the user; `SITE_URL`/`BASE_PATH` already come from `actions/configure-pages`, do not hard-code them).

Implement everything below on a branch, show screenshots (desktop 1440 and mobile 390, FR and TR at least, plus EN pricing), wait for the user's approval, then merge to `main`. Afterwards fold the confirmed facts into `PROJECT_DECISIONS.md`, `CONTENT_FR.md`, `CONTENT_EN.md`, `CONTENT_TR.md`, and delete `CONTENT_RU.md`. Where this file conflicts with earlier decisions, **this file wins**.

## 1. Phone number fix (urgent, everywhere)

The correct number is **+33 6 98 38 26 18** (the site currently shows …48…, which is wrong).

- `tel:+33698382618`, WhatsApp `https://wa.me/33698382618`, display `06 98 38 26 18` / `+33 6 98 38 26 18`.
- Update `src/config/site.ts` (single source), all copy that spells the number (contact buttons in every language), the legal-notice pages, `PROJECT_DECISIONS.md`, the CONTENT files and the guides. Grep the whole repo for `48 26 18` and `698482618` afterwards — zero matches expected.

## 2. Remove Russian completely

Business decision: the site is now in **3 languages: French (default, `/`), English (`/en/`), Turkish (`/tr/`)**. Keep the i18n architecture so a language can be added later.

- Remove `ru` from the i18n config, language switcher, `hreflang` alternates, sitemap, blog language options and labels, the Pages CMS `lang` select in `.pages.yml`, and the CMS guides.
- Delete `src/i18n/ru.ts` (or equivalent) and all Russian strings and alt texts.
- "Languages spoken" copy now lists **French, English and Turkish** only (contact section and footer): FR `Nous parlons français, anglais et turc.` · EN `We speak French, English and Turkish.` · TR `Fransızca, İngilizce ve Türkçe konuşuyoruz.` Footer language list: `Français · English · Türkçe`.
- `/ru/` URLs were public for a few days: generate lightweight pages at the old `/ru/` paths (at least `/ru/` and `/ru/blog/`) with `<meta name="robots" content="noindex">`, a canonical to the French equivalent and an immediate `<meta http-equiv="refresh">` redirect to it (GitHub Pages has no server-side redirects). Do not list them in the sitemap.

## 3. New price list (from Marianna — replaces the old pricing completely)

Remove the old pricing (24 h table with 18/20/25/35 €, −5 % discount, day-care 15/12 €, extras line). The new list has **4 groups**. Rebuild the pricing section as 4 clean cards/blocks in this order, in the same visual language (white rounded cards, Georgia headings, soft-mint size badges, prices in deep green). It must be easy to scan on a phone at 320–390 px with no horizontal scroll. Ranges are shown as "50–60 €" style. Keep all amounts in **one data file** (e.g. `src/data/prices.json`) rendered in all 3 languages, and expose it in Pages CMS as "Tarifs" with French labels (replace the old CMS fields).

New size limits (dogs): **S up to 10 kg · M 10–20 kg · L 20–30 kg · XL over 30 kg**.

The French text below is Marianna's own; keep its meaning and wording (only light typographic clean-up). EN and TR are translations for approval.

### Section header

| | FR | EN | TR |
| --- | --- | --- | --- |
| Eyebrow | `Tarifs` | `Prices` | `Fiyatlar` |
| Heading | `Une grille claire, service par service.` | `Clear prices, service by service.` | `Hizmet hizmet net fiyatlar.` |
| Intro | `Saint-Jean (31240) & métropole toulousaine — accueil familial, éducation, pension & visites à domicile.` | `Saint-Jean (31240) & the Toulouse metropolitan area — family care, training, boarding & home visits.` | `Saint-Jean (31240) ve Toulouse metropol bölgesi — aile ortamında bakım, eğitim, pansiyon ve evde ziyaret.` |

### Group 1 — Éducation, sociabilisation & réhabilitation

| Item | FR | EN | TR | Price |
| --- | --- | --- | --- | --- |
| Title | `Éducation, sociabilisation & réhabilitation` | `Training, socialisation & rehabilitation` | `Eğitim, sosyalleşme ve rehabilitasyon` | |
| Row | `Bilan comportemental initial (obligatoire) · 1 h à 1 h 30` | `Initial behavioural assessment (required) · 1 h to 1 h 30` | `İlk davranış değerlendirmesi (zorunlu) · 1–1,5 saat` | 50–60 € |
| Row | `Session journée — suivi & sociabilisation classique` | `Day session — follow-up & standard socialisation` | `Günlük seans — takip ve klasik sosyalleşme` | 35 € / jour |
| Row | `Session journée — besoins complexes / réhabilitation lourde` | `Day session — complex needs / intensive rehabilitation` | `Günlük seans — karmaşık ihtiyaçlar / yoğun rehabilitasyon` | 45–50 € / jour |
| Row | `Pack 5 journées` | `5-day pack` | `5 günlük paket` | 160 € |
| Row | `Pack 10 journées` | `10-day pack` | `10 günlük paket` | 300 € |
| Note | `Les tarifs sont fixés uniquement selon la complexité du comportement, et non selon la taille ou le poids du chien.` | `Prices depend only on the complexity of the behaviour, not on the dog’s size or weight.` | `Fiyatlar köpeğin boyutuna veya kilosuna göre değil, yalnızca davranışın karmaşıklığına göre belirlenir.` | |

Unit words: `/ jour` · `/ day` · `/ gün`.

### Group 2 — Pension familiale (nuitée) & crèche (journée sans éducation)

| Item | FR | EN | TR |
| --- | --- | --- | --- |
| Title | `Pension familiale (nuitée) & crèche (journée sans éducation)` | `Family boarding (overnight) & day care (no training)` | `Aile ortamında pansiyon (gecelik) ve kreş (eğitimsiz gündüz bakımı)` |
| Subtitle | `Hébergement chaleureux à la maison ou garderie de jour, sans éducation.` | `Warm home boarding or daytime care, without training.` | `Evde sıcak bir konaklama ya da eğitim içermeyen gündüz bakımı.` |
| Column "per" | `par jour ou par nuit` | `per day or per night` | `gün ya da gece başına` |
| S | `Petit chien · jusqu’à 10 kg` — 18 € | `Small dog · up to 10 kg` — €18 | `Küçük köpek · 10 kg’a kadar` — 18 € |
| M | `Chien moyen · 10–20 kg` — 20 € | `Medium dog · 10–20 kg` — €20 | `Orta boy köpek · 10–20 kg` — 20 € |
| L | `Grand chien · 20–30 kg` — 25 € | `Large dog · 20–30 kg` — €25 | `Büyük köpek · 20–30 kg` — 25 € |
| XL | `Très grand chien · plus de 30 kg` — 30 € | `Extra-large dog · over 30 kg` — €30 | `Çok büyük köpek · 30 kg üzeri` — 30 € |
| Offer (highlight, terracotta allowed) | `Offre longue durée : −3 € par jour/nuit à partir du 10ᵉ jour consécutif.` | `Long-stay offer: €3 off per day/night from the 10th consecutive day.` | `Uzun süre fırsatı: 10. ardışık günden itibaren gün/gece başına 3 € indirim.` |
| Note | `Les chats ne sont pas pris en pension, uniquement en visites à domicile.` | `Cats are not boarded — home visits only.` | `Kediler pansiyona kabul edilmez, yalnızca evde ziyaret yapılır.` |

### Group 3 — Dog sitting & cat sitting à domicile (visites)

| Item | FR | EN | TR |
| --- | --- | --- | --- |
| Title | `Dog sitting & cat sitting à domicile` | `Dog sitting & cat sitting at your home` | `Evde köpek ve kedi bakımı` |
| Subtitle | `Visites individuelles à domicile de 40 à 60 minutes pour vos compagnons.` | `Individual 40–60 minute home visits for your companions.` | `Dostlarınız için evinizde 40–60 dakikalık bireysel ziyaretler.` |
| Dog row | `Dog sitting (chien)` — 15–20 € / passage | `Dog sitting` — €15–20 / visit | `Köpek bakımı` — 15–20 € / ziyaret |
| Dog includes | `Inclut : promenade de 40–60 min, soins, présence, fraîcheur. Tarif ajusté selon la taille du chien et la distance kilométrique.` | `Includes: 40–60 min walk, care, company, fresh water. Price adjusted to the dog’s size and the distance.` | `Dahil: 40–60 dk yürüyüş, bakım, refakat, taze su. Fiyat köpeğin boyutuna ve mesafeye göre belirlenir.` |
| Cat row | `Cat sitting (chat)` — 12–15 € / passage | `Cat sitting` — €12–15 / visit | `Kedi bakımı` — 12–15 € / ziyaret |
| Cat includes | `Inclut : litière, nourriture, câlins/jeux, présence de 40–60 min. Tarif ajusté selon les besoins spécifiques du chat et la distance kilométrique.` | `Includes: litter, food, cuddles/play, 40–60 min of company. Price adjusted to the cat’s specific needs and the distance.` | `Dahil: kum kabı, mama, sevgi/oyun, 40–60 dk refakat. Fiyat kedinin özel ihtiyaçlarına ve mesafeye göre belirlenir.` |
| Footer line | `Abonnements & forfaits réguliers : sur demande / devis.` | `Subscriptions & regular packages: on request / quote.` | `Abonelikler ve düzenli paketler: talep üzerine / teklifle.` |

### Group 4 — Cas d’urgence (clients connus uniquement)

| Item | FR | EN | TR |
| --- | --- | --- | --- |
| Title | `Cas d’urgence` | `Emergencies` | `Acil durumlar` |
| Badge | `Réservé aux clients déjà connus de PawZenTopia` | `Existing PawZenTopia clients only` | `Yalnızca PawZenTopia’nın mevcut müşterileri için` |
| Text | `En cas d’imprévu ou d’hospitalisation du maître, un service d’accompagnement, de garde ou de transport réactif peut être envisagé.` | `If something unexpected happens or the owner is hospitalised, a responsive support, care or transport service can be arranged.` | `Beklenmedik bir durumda ya da sahibinin hastaneye yatması halinde hızlı refakat, bakım veya ulaşım hizmeti planlanabilir.` |
| Price | `Tarif de prise en charge d’urgence : sur devis` | `Emergency care price: on quote` | `Acil durum fiyatı: teklif üzerine` |

Under the 4 groups keep one CTA to the contact section: `Demander un devis` · `Ask for a quote` · `Teklif isteyin`.

## 4. Services, transport and "24/7" — align the whole site with the new offer

**Transport is no longer a standalone service.** It exists only inside emergencies for known clients. Remove every standalone transport / "24/7" / "à toute heure" promise.

- **Service cards** (keep 4 cards and the hover overlay from CR-02):

| # | Title FR / EN / TR | Short text FR / EN / TR | Hover detail FR / EN / TR | Photo slot |
| --- | --- | --- | --- | --- |
| 1 | `Pension familiale & crèche` / `Family boarding & day care` / `Pansiyon ve kreş` | keep current FR text `Le confort d’un foyer et une attention adaptée à ses habitudes.` (+ existing EN/TR) | `Pension (nuit) ou crèche (journée), de 18 à 30 € selon le gabarit.` / `Boarding (overnight) or day care, €18 to €30 depending on size.` / `Pansiyon (gece) ya da kreş (gündüz), boyuta göre 18–30 €.` | `garde-familiale` |
| 2 | `Éducation canine` / `Dog training` / `Köpek eğitimi` | keep current | `Bilan comportemental, sessions journée et packs de 5 ou 10 jours. Dès 35 € / jour.` / `Behavioural assessment, day sessions and 5- or 10-day packs. From €35 / day.` / `Davranış değerlendirmesi, günlük seanslar ve 5 ya da 10 günlük paketler. Günlüğü 35 €’dan başlayan fiyatlarla.` | `education` |
| 3 | `Visites à domicile` / `Home visits` / `Evde ziyaret` | `Chien ou chat : des visites chez vous de 40 à 60 minutes.` / `Dog or cat: 40–60 minute visits at your home.` / `Köpek ya da kedi: evinizde 40–60 dakikalık ziyaretler.` | `Dog sitting dès 15 € et cat sitting dès 12 € par passage.` / `Dog sitting from €15, cat sitting from €12 per visit.` / `Ziyaret başına köpek bakımı 15 €’dan, kedi bakımı 12 €’dan başlayan fiyatlarla.` | new slot `visites` — start with a copy of `social-3.jpg`; Marianna will replace it later via the CMS |
| 4 | `Cas d’urgence` / `Emergencies` / `Acil durumlar` | `Réservé aux clients déjà connus de PawZenTopia.` / `For existing PawZenTopia clients only.` / `Yalnızca PawZenTopia’nın mevcut müşterileri için.` | `Imprévu ou hospitalisation : accompagnement, garde ou transport réactif. Sur devis.` / `Unexpected event or hospital stay: responsive support, care or transport. On quote.` / `Beklenmedik durum ya da hastaneye yatış: hızlı refakat, bakım veya ulaşım. Teklif üzerine.` | `urgence` |

  Hover prices ("18 à 30 €", "35 €", "15 €", "12 €") must come from the prices data file.
- Remove the `transport` photo slot from the site (keep the file archived in `assets/photos/`), and remove "Transport 24/7" everywhere (cards, alt texts, metadata, CONTENT files).
- **Nav:** `Disponibilité 24/7` → `Urgences` / `Emergencies` / `Acil durumlar` (anchor to the urgent panel).
- **Urgent panel:** keep eyebrow and heading; replace the body with Group 4 text + the badge line; remove "à toute heure / at any time / günün her saatinde" and the old "Hospitalisation, accident, départ imprévu…" line. CTA unchanged (WhatsApp).
- **Service area** (trust strip, contact section, metadata): `Saint-Jean (31240) & métropole toulousaine` / `Saint-Jean (31240) & Toulouse metro area` / `Saint-Jean (31240) ve Toulouse metropol bölgesi`.
- Check the whole site, page metadata and the blog/CMS guides for leftovers: "24/7", "24 h/24", "à toute heure", "Transport 24/7", "20 km", "−5 %", the old day-care prices (15 € / 12 € abonnement), the old XL boarding price (35 € as a boarding price — note that 35 € is now correct for the training day session) and the old "24 h (nuit comprise)" table wording.

## 5. Google reviews (5.0 ★, 13 reviews)

Google Business Profile: **PawZenTopia — 5,0 ★ (13 avis)**, link `https://share.google/e5RVxpHqNRhGrQvTZ` (Maps fallback: `https://maps.google.com/?cid=8526896004295926302`). Show it prominently but tastefully, without third-party widgets, scripts or cookies.

1. **Hero badge** (under the hero CTAs, all languages): five filled stars + `5,0 · 13 avis Google` / `5.0 · 13 Google reviews` / `5,0 · 13 Google yorumu`, linking to the Google profile (new tab). Stars in a warm gold that passes contrast on the mint background; keep it small and elegant.
2. **New section "Avis Google"** right after the service cards (before pricing):
   - Eyebrow `Avis Google` / `Google reviews` / `Google yorumları`; heading `Ils nous confient leurs compagnons.` / `They trust us with their companions.` / `Dostlarını bize emanet ediyorlar.`
   - A large score block: `5,0` in Georgia, 5 stars, `sur 5 · 13 avis` / `out of 5 · 13 reviews` / `5 üzerinden · 13 yorum`.
   - 3 review cards (white, rounded, quote mark in soft mint, 5 stars, reviewer name, text clamped to ~6 lines with a `Lire la suite` / `Read more` / `Devamını oku` toggle — keyboard accessible).
   - Two buttons: `Voir tous les avis sur Google` / `See all reviews on Google` / `Tüm yorumları Google’da görün` (primary) and `Laisser un avis` / `Leave a review` / `Yorum yazın` (outlined). Both use the link above for now; add a separate `reviewUrl` field so Marianna can paste Google's "Ask for reviews" link later.
   - Mobile: cards become a vertical stack (no carousel), score block on top.
3. **Language:** show the original French text on every language page; on EN and TR pages show the translation below it in normal text and the original in a smaller muted line labelled `Avis original en français` / `Original review in French` / `Orijinal yorum (Fransızca)`, plus a small `Traduit du français` / `Translated from French` / `Fransızcadan çevrilmiştir` tag. Never alter the original wording (typos included).
4. **Data:** `src/data/reviews.json` with `rating`, `count`, `profileUrl`, `reviewUrl`, `reviews[]` (`name`, `text_fr`, `text_en`, `text_tr`, `stars`). Expose it in Pages CMS as "Avis Google" (French labels) so Marianna can update the rating/count and swap reviews. Rating and count shown anywhere on the site come from this file only.
5. **Do not add `AggregateRating`/`Review` JSON-LD** (Google treats self-published reviews of your own business as ineligible for rich results).

Reviews (real, public on Google; use first name + last initial):

**Daniela P.** — 5 ★
- FR (original): `Nous avons récemment commencé à confier nos chiens à Marianna. Il est évident qu'elle aime son travail, elle nous tient toujours au courant de leur état, avec des photos et des messages rassurants qui nous permettent de garder le contact même en notre absence. Nos chiens l'adorent ; ils sont heureux et détendus après chaque visite, et c'est ce qui compte le plus pour nous. Elle a également une sensibilité particulière pour comprendre la personnalité de chaque chien, ce qui inspire une confiance immédiate.`
- EN: `We recently started entrusting our dogs to Marianna. It is clear she loves her work: she always keeps us updated on how they are doing, with photos and reassuring messages that let us stay in touch even while we are away. Our dogs adore her; they are happy and relaxed after every visit, and that is what matters most to us. She also has a special sensitivity for understanding each dog’s personality, which inspires immediate trust.`
- TR: `Köpeklerimizi kısa süre önce Marianna’ya emanet etmeye başladık. İşini sevdiği çok belli: fotoğraflar ve içimizi rahatlatan mesajlarla bizi her zaman köpeklerimizin durumundan haberdar ediyor, böylece biz yokken bile iletişimde kalabiliyoruz. Köpeklerimiz ona bayılıyor; her ziyaretten sonra mutlu ve rahatlar, bizim için en önemlisi de bu. Ayrıca her köpeğin kişiliğini anlama konusunda özel bir hassasiyeti var, bu da hemen güven veriyor.`

**Adélie M.** — 5 ★
- FR (original): `Si mes bébés poilus pouvaient noter Marianna, il est évident qu'elle serait au-dessus de 5 étoiles, les balades, l'attention, les câlins, les mots attentionnés, les conseils etc... Et en tant que Maman de deux chiens je suis ravie et rassurée de les laisser entre de bonnes mains et pattes ( pour Lulu), je sais qu'ils ne manquent de rien lors de leur séjour et Marianna s'adapte à eux et me donne des conseils toujours important pour leur bien-être et l'amélioration de leur comportement. Merci beaucoup pour ça Marianna 😊`
- EN: `If my furry babies could rate Marianna, she would clearly be above 5 stars: the walks, the attention, the cuddles, the caring words, the advice, etc. As the mum of two dogs, I am delighted and reassured to leave them in good hands (and paws, for Lulu). I know they lack nothing during their stay; Marianna adapts to them and always gives me important advice for their well-being and for improving their behaviour. Thank you so much for that, Marianna 😊`
- TR: `Tüylü bebeklerim Marianna’ya puan verebilseydi, 5 yıldızın üzerinde olacağı kesin: yürüyüşler, ilgi, sarılmalar, şefkatli sözler, tavsiyeler… İki köpek annesi olarak onları emin ellerde (Lulu için de patilerde) bırakmaktan çok mutlu ve rahatım. Konaklamaları boyunca hiçbir eksikleri olmadığını biliyorum; Marianna onlara uyum sağlıyor ve iyilikleri ile davranışlarının gelişmesi için bana her zaman önemli tavsiyeler veriyor. Bunun için çok teşekkürler Marianna 😊`

**Marielle C.** — 5 ★
- FR (original): `Confier Mango à Marianna est une véritable tranquillité d’esprit. 🐾 Mariana fait preuve d’une bienveillance, d’une douceur et d’un professionnalisme remarquables. Son attention portée au bien-être des animaux inspire immédiatement confiance. Un immense merci pour son engagement et la passion qu’elle met dans son travail. Nous la recommandons sans la moindre hésitation.`
- EN: `Entrusting Mango to Marianna gives true peace of mind. 🐾 Mariana shows remarkable kindness, gentleness and professionalism. Her attention to the animals’ well-being immediately inspires trust. A huge thank you for her commitment and the passion she puts into her work. We recommend her without the slightest hesitation.`
- TR: `Mango’yu Marianna’ya emanet etmek gerçek bir gönül rahatlığı. 🐾 Mariana olağanüstü bir iyi niyet, şefkat ve profesyonellik gösteriyor. Hayvanların iyiliğine gösterdiği özen hemen güven veriyor. Bu işe gösterdiği bağlılık ve tutku için çok teşekkürler. Onu hiç tereddüt etmeden tavsiye ediyoruz.`

## 6. Pages CMS updates

- `.pages.yml`: replace "Tarifs" fields with the new structure (4 groups, rows with label per language FR/EN/TR, price min/max, unit, notes); add "Avis Google"; add the `visites` photo slot; remove `ru` from the blog language select.
- Update `BLOG_REHBERI.md`, `GUIDE_BLOG_FR.md` and `FOTO_DEGISTIRME.md` (new pricing editing steps, reviews editing steps, 3 languages, `visites` slot, no `transport` slot).
- Validate `.pages.yml` with Pages CMS's own schema as in CR-02.

## 7. Checks before asking for approval

- Build, type check, no console errors; zero matches for the old phone number and for Russian strings; `/ru/` redirects work.
- Screenshots: FR desktop full page, TR mobile full page, EN pricing section (desktop + mobile 390), the reviews section (desktop + mobile), a hovered service card.
- No horizontal scroll at 320 px; price rows readable; review "Read more" works by keyboard.
- Tell the user (in Turkish) what Marianna should also update on her **Google Business Profile**: add the website `https://pawzentopia.com` (the profile currently shows "Add website"), and copy the "Ask for reviews" link into the CMS field.
