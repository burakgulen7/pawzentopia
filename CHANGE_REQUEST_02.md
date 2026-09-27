# Change request 02 — social media, logo animation, hover panels, real photos, contact priority, blog + CMS

Requested by the user on 27 September 2026 after the first deployment. Implement everything below, then fold the confirmed decisions into `PROJECT_DECISIONS.md`, the new copy into `CONTENT_FR.md`, `CONTENT_EN.md`, `CONTENT_RU.md`, `CONTENT_TR.md` and the i18n files. These requests override the earlier restrictions on motion ("no excessive motion") where they conflict, but keep everything else in `CLAUDE.md` and `DESIGN_SPEC.md`.

Work on a branch, show screenshots (desktop 1440 and mobile 390, FR and TR at least), wait for the user's approval, then merge to `main`.

## 1. Real photos (the user has already uploaded them)

The user uploaded real photos of Marianna to `src/photos/` as JPG files. The site currently prefers JPG over PNG with the same name, but clean up anyway:

| New file | Slot | Replaces | Focal point (start here, then check visually) |
| --- | --- | --- | --- |
| `garde-familiale.jpg` | Service card 1 (Garde familiale) | AI photo | `50% 65%` — keep her smile and the dog's face |
| `urgence.jpg` | Service card 3 (Garde d’urgence) | AI photo | `50% 25%` — keep both faces |
| `approche.jpg` | Approach section photo | AI photo (was the same image as card 1) | `50% 45%` — keep her face and the dog fully visible |
| `social-1.jpg` … `social-4.jpg` | New social section mosaic (see §2) | — | faces fully visible |

- Delete the old `garde-familiale.png`, `urgence.png` and `approche.png` from `src/photos/` (the approved originals stay archived in `assets/photos/`).
- Update the alt text of each slot in all 4 languages to describe the new photo (a woman with a dog at home / kissing a dog / crouching with a dog on a forest path / holding a small dog, etc.). Do not name the dogs or invent details.
- The hero photo stays as it is for now (a video may replace it later — keep the hero component able to accept a video in the future, but do not build it now).
- Update `FOTO_DEGISTIRME.md` with the new slots (`social-1` … `social-4`).

## 2. Instagram and TikTok — much more visible

Today the icons are small and only in the footer. Make social media a clear part of the site, without third-party embeds (no cookies, no paid widgets):

1. **Header:** Instagram and TikTok icons (line icons, 20 px, 44×44 px tap target) next to the language switcher on desktop; on mobile inside the header next to the switcher if it fits at 390 px, otherwise in the mobile menu.
2. **New section "Suivez-nous"** between the approach section and the urgent panel:
   - Section header (eyebrow + Georgia heading + short body, same pattern as other sections).
   - A mosaic of the 4 photos `social-1` … `social-4` (rounded 18–22 px, square on mobile in a 2×2 grid, 4 in a row on desktop). The whole mosaic links to Instagram. On hover: the same dark-tint hover effect as §4 with the Instagram icon and `@pawzentopia`.
   - Two large pill buttons under the mosaic: Instagram (deep green, primary) and TikTok (outlined), each with its icon and the handle.
   - Do not add a new header nav link; add the section anchor to the footer links instead.
3. Keep the footer icons.
4. Social links stay data-driven in `src/config/site.ts`.

Copy:

| | FR | EN | RU | TR |
| --- | --- | --- | --- | --- |
| Eyebrow | `Instagram & TikTok` | `Instagram & TikTok` | `Instagram и TikTok` | `Instagram ve TikTok` |
| Heading | `Suivez leur quotidien.` | `Follow their days with us.` | `Следите за их днями.` | `Günlerini takip edin.` |
| Body | `Balades, jeux et moments de complicité : retrouvez les chiens que nous gardons en photos et en vidéos.` | `Walks, play and happy moments: see the dogs in our care in photos and videos.` | `Прогулки, игры и счастливые моменты: собаки, за которыми мы ухаживаем, — в фото и видео.` | `Yürüyüşler, oyunlar ve mutlu anlar: bakımımızdaki köpekleri fotoğraf ve videolarla izleyin.` |
| Button 1 | `@pawzentopia sur Instagram` | `Follow @pawzentopia on Instagram` | `@pawzentopia в Instagram` | `Instagram’da @pawzentopia` |
| Button 2 | `@pawzentopia sur TikTok` | `Follow @pawzentopia on TikTok` | `@pawzentopia в TikTok` | `TikTok’ta @pawzentopia` |

## 3. Logo — visible everywhere + intro animation

**Visibility:** the logo mark is currently hidden on most phones. Show the logo mark (house + PZT) in the header at every screen size, slightly larger than today (desktop ~48 px, mobile ~40 px high), next to the written name. In the footer, use the full logo (mark + PawZenTopia + BIEN-ÊTRE ET ÉDUCATION) noticeably larger than today (~120–140 px high on desktop).

**Intro animation ("line reveal" that morphs into the header):**

- The original logo is a raster JPEG. For the animation, create an SVG version by **automatic tracing** of `assets/brand/pawzentopia-logo-original.jpeg` (e.g. potrace), without redrawing or changing shapes. Compare it visually with the original at large size and show the comparison to the user. Keep the original file untouched.
- Sequence on first page load (≤ 2.2 s total):
  1. Full-screen pale mint (`#E8F3ED`) overlay; the logo mark draws itself line by line in deep green (stroke-dash "line reveal", ~1.0–1.2 s; the lotus last).
  2. The shapes fill in and `PawZenTopia` + `BIEN-ÊTRE ET ÉDUCATION` fade in (~0.4 s).
  3. The mark smoothly shrinks and moves into its header position (FLIP/morph transition, ~0.6 s) while the overlay fades out and reveals the page.
- Rules: plays **once per browser session** (sessionStorage; wrap in try/catch), any click, tap, scroll or key skips it instantly, **skipped entirely with `prefers-reduced-motion`**, and never blocks content for search engines or users without JavaScript (the page is rendered underneath; the overlay is added by JS). No layout shift. Keep it lightweight (CSS/SVG + a few lines of JS, no animation library unless strictly needed).

## 4. Hover interaction on panels

Apply to the 4 service cards (main request) and the social mosaic:

- **Desktop (hover and keyboard focus):** the photo gets a dark-green tint (`rgba(37,68,60,.72)`, 180–220 ms), and a short detail text + a small link slide up over the photo (cream text). The card lifts slightly (translateY −4 px, slightly stronger shadow).
- **Touch devices:** there is no hover. First tap shows the overlay; the overlay's link then goes to the contact section. Alternatively show the detail text below the card text on small screens — choose whichever keeps the 2×2 grid readable at 390 px, and show both options to the user in screenshots if unsure.
- Respect `prefers-reduced-motion` (no slide, only fade).
- Pricing cards: only the subtle lift on hover, no tint.

Detail text (overlay) and link:

| Card | FR | EN | RU | TR |
| --- | --- | --- | --- | --- |
| Garde familiale | `Garde 24 h, nuit comprise, chez vous ou chez nous selon les disponibilités. À partir de 18 € / jour.` | `24-hour care, overnight included, at your home or ours depending on availability. From €18 / day.` | `Передержка 24 часа с ночёвкой — у вас дома или, при наличии возможности, у нас. От 18 € в день.` | `24 saat bakım, gece dahil; sizin evinizde ya da müsaitliğe göre bizim evimizde. Günlüğü 18 €’dan başlayan fiyatlarla.` |
| Éducation canine | `Un accompagnement adapté au caractère et au rythme de votre chien. Tarif sur devis.` | `Guidance adapted to your dog’s personality and pace. Price on request.` | `Обучение с учётом характера и ритма вашей собаки. Стоимость по запросу.` | `Köpeğinizin karakterine ve ritmine uygun bir eğitim. Fiyat teklif üzerine.` |
| Garde d’urgence | `Hospitalisation, accident, départ imprévu : nous venons chercher votre chien ou vous nous le déposez, à toute heure.` | `Hospital stay, accident, sudden departure: we pick up your dog or you drop them off, at any time.` | `Госпитализация, авария, внезапный отъезд: мы заберём вашу собаку или вы привезёте её к нам — в любое время.` | `Hastaneye yatış, kaza, ani yolculuk: köpeğinizi gelip alırız ya da siz bize bırakırsınız, günün her saatinde.` |
| Transport 24/7 | `Trajets à Toulouse, Saint-Jean et 20 km alentour, à toute heure. Tarif sur devis.` | `Journeys in Toulouse, Saint-Jean and 20 km around, at any time. Price on request.` | `Поездки по Тулузе, Сен-Жану и в радиусе 20 км — в любое время. Стоимость по запросу.` | `Toulouse, Saint-Jean ve 20 km çevresinde, günün her saatinde ulaşım. Fiyat teklif üzerine.` |
| Link | `Nous contacter →` | `Contact us →` | `Связаться →` | `Bize ulaşın →` |

The "from 18 €" value must come from `src/config/prices.ts`, not be hard-coded.

## 5. Messages first for new enquiries, calls still open

The owner receives spam calls, so new visitors should be steered to messages, but **existing clients and emergencies must still be able to call** — never present the phone as emergency-only.

- Make **WhatsApp the primary contact action everywhere** (header Contact pill, urgent panel CTA, contact section first button).
- Keep the phone button (secondary, outlined) with a neutral label, and add a short note under the contact buttons:

| | FR | EN | RU | TR |
| --- | --- | --- | --- | --- |
| Phone button | `Appeler` | `Call` | `Позвонить` | `Arayın` |
| Note | `Première demande ? Écrivez-nous sur WhatsApp pour une réponse rapide. Clients et urgences : appelez directement.` | `First enquiry? Message us on WhatsApp for a quick reply. Existing clients and emergencies: call us directly.` | `Первое обращение? Напишите нам в WhatsApp — так мы ответим быстрее. Клиенты и срочные случаи: звоните напрямую.` | `İlk kez mi ulaşıyorsunuz? Hızlı yanıt için WhatsApp’tan yazın. Mevcut müşterilerimiz ve acil durumlar için doğrudan arayabilirsiniz.` |

- On mobile, add a small floating WhatsApp button (bottom-right, 56 px, deep green with the WhatsApp icon in cream, accessible label, hidden while the intro animation plays, does not cover footer links — add bottom padding).

## 6. Blog that Marianna can manage herself (no code, no GitHub account)

Goal: Marianna writes and publishes posts from her browser, alone, for free. Use **Pages CMS** (free, open source, hosted at `https://app.pagescms.org`; editors can be invited **by e-mail and do not need a GitHub account**; every save becomes a commit and the existing GitHub Actions workflow redeploys the site). Docs: `https://pagescms.org/docs/` and Astro's guide `https://docs.astro.build/en/guides/cms/pages-cms/`. Verify the current setup steps in the official docs before guiding the user.

### Site side

- Astro content collection `src/content/blog/` (one Markdown file per post). Frontmatter: `title`, `date`, `lang` (`fr` | `en` | `ru` | `tr`), `cover` (image), `coverAlt`, `summary`, `draft` (boolean, default `true`). Body in Markdown with optional images. Validate with a schema; a missing optional field must never break the build.
- Blog images in one media folder (e.g. `src/content/blog/images/`), optimised at build time like the other photos.
- Pages: `/blog/`, `/en/blog/`, `/ru/blog/`, `/tr/blog/` and one page per post. Each blog page lists **all published posts, newest first**, with a small language label (Marianna may write in any of the 4 languages); interface text is translated. Drafts are never built.
- Empty state (no posts yet): a calm line such as `Nos premiers articles arrivent bientôt.` / `Our first articles are coming soon.` / `Наши первые статьи скоро появятся.` / `İlk yazılarımız çok yakında.` — no fake or sample posts on the public site.
- Header nav: add `Blog` in all 4 languages (keep the desktop nav on one line; on mobile inside the menu).
- Home page: a "Derniers articles / Latest articles / Последние статьи / Son yazılar" block with the 3 latest posts, placed before the social section — **hidden when there are no posts**.
- Design: cards consistent with the service cards (cover 4:3, rounded, title in Georgia, date, 2-line summary, same hover effect as §4). Post page: cover, title, date, body at ~680 px reading width, back link, and at the end the WhatsApp/contact CTA.
- SEO: per-post title, description (summary), Open Graph image (cover), included in the sitemap, `lang` attribute set from the post.

### CMS side

- Add `.pages.yml` with:
  - Collection **"Articles du blog"** (French labels, simple words): Titre, Date, Langue (select: Français / English / Русский / Türkçe), Photo de couverture, Description de la photo, Résumé, Brouillon (toggle; explain that unchecking it publishes the post), Texte (rich-text editor).
  - Media folder for blog images.
  - Set `settings.commit.identity: user` so commits show who edited.
- Also let Marianna update, without code: **prices** (move `src/config/prices.ts` values into a JSON/YAML data file that the site reads, and expose it in the CMS as "Tarifs") and **site photos** (the `src/photos/` folder as a media library, with a note that the file name must stay the same). Keep everything else out of the CMS.
- Guide the user (Burak) step by step, in Turkish, through: signing in at app.pagescms.org with his GitHub account, installing the Pages CMS GitHub App on this repository only, and inviting `pawzentopia@gmail.com` as a collaborator. Never ask for passwords.
- Write `BLOG_REHBERI.md` in **Turkish** (short, screenshots-style step list) for Marianna: how to log in with the e-mail link, create a post, add photos, save as draft, publish (uncheck Brouillon), edit or delete a post, change prices and photos, and that the site updates in ~2–3 minutes (check the Actions tab if needed). Also add a short French version `GUIDE_BLOG_FR.md`.

## 7. Checks before asking for approval

- Build, type check, no console errors.
- Screenshots at 1440×900 and 390×844 in FR and TR, plus RU desktop; one screenshot of a hovered service card; a short description of the intro animation (or a GIF if possible).
- Faces in the new photos are not cropped at any breakpoint.
- Lighthouse-style sanity: images optimised, no layout shift from the intro overlay.
- Blog: build passes with zero posts and with one test post (then remove the test post or keep it as `draft: true`); screenshots of the empty blog page and of a test post page.
- Suggested order: §1 photos → §5 contact → §4 hover → §2 social → §3 logo → §6 blog/CMS. Show screenshots after §1–§5, then continue with §6 so the user can approve in two steps if that is easier.
