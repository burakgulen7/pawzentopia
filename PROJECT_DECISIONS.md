# PawZenTopia — confirmed decisions (updated 27 September 2026)

These answers come from the business owner. They are binding and override the open items in `QUESTIONS_AND_DEPLOYMENT.md`. Do not ask them again. Ask only about items listed under "Still open".

## Business facts (confirmed)

- Owner / public name: **Marianna Mamoyan**
- Phone: **+33 6 98 38 26 18** (`tel:+33698382618`), also WhatsApp (`https://wa.me/33698382618`, with a pre-filled message in the visitor's language)
- E-mail: **pawzentopia@gmail.com** (mailto link + destination of the contact form)
- Instagram: **@pawzentopia** → `https://www.instagram.com/pawzentopia/`
- TikTok: **@pawzentopia** → `https://www.tiktok.com/@pawzentopia`
- Service area: **Toulouse, Saint-Jean and approximately 20 km around**
- Languages spoken with customers: **French, English, Russian and Turkish** — state this on the site (contact section and footer).
- **24/7 meaning:** last-minute and emergency situations of the *dog owner* (hospitalisation, accident, urgent departure). **Not** veterinary emergency care. Never imply medical treatment or a guaranteed response time.
- **Emergency / transport logistics:** Marianna can pick up the dog herself, or the owner can drop the dog off.
- **Where care happens:** at the owner's home, or at Marianna's home depending on availability (limited capacity). Never promise boarding at her place.

## Prices (confirmed — publish them)

Base prices in euros, **per dog, per day**, according to the dog's size (no multi-dog discount):

| Size | Weight | 24 h care, overnight included |
| --- | --- | --- |
| S | up to 5 kg | 18 € |
| M | 5–10 kg | 20 € |
| L | 10–25 kg | 25 € |
| XL | over 25 kg | 35 € |

- **Long-stay discount:** stays of **more than 10 days** get **5 % off the total** of the stay.
- **Day care (crèche, daytime only):** from **15 € / day**. With an **annual subscription:** from **12 € / day** (15 € and 12 € are the S-size prices; larger sizes cost more — always phrase it as "from").
- **Extras on quote → contact:** special care, giving medication, grooming (brushing, bathing…), emergency / last-minute and night requests, transport, distance. Say generally that extras are quoted on request and send visitors to the contact section. Do not publish amounts for extras.
- Keep all prices in one config/data file so the owner can change them without touching components.
- Show "per dog" in the price labels. Do not add VAT mentions, multi-dog discounts or other conditions that were not confirmed.

## Languages (confirmed)

- The site is available in **4 languages: French (default), English, Russian, Turkish**. More languages may be added later.
- URLs: French at `/`, English at `/en/`, Russian at `/ru/`, Turkish at `/tr/`. No automatic browser-language redirect; a visible language switcher instead.
- Copy sources: `CONTENT_FR.md`, `CONTENT_EN.md`, `CONTENT_RU.md`, `CONTENT_TR.md`. EN/RU/TR are draft translations: the user reviews Turkish, Marianna reviews Russian.
- Russian uses Cyrillic: choose fonts/fallbacks that render Cyrillic and Turkish characters (ç, ğ, ı, İ, ö, ş, ü) correctly, and check headline wrapping in every language.

## Photos (confirmed)

- Build now with the approved photos in `assets/photos/`.
- Feedback received: the photos look noticeably AI-generated and do not resemble the owner closely. **They will be replaced later with real photos.**
- Therefore every photo must be replaceable without touching code: one photo config file listing each slot (file, alt text per language, focal point/object-position), images in one clearly named folder, automatic resizing/optimisation at build time so any new JPG/PNG works regardless of size.
- Write a short Turkish guide `FOTO_DEGISTIRME.md` explaining how to replace a photo through the GitHub website (upload a file with the same name → the site redeploys automatically).

## Hosting (confirmed)

- GitHub Pages (free), deployed via GitHub Actions from this public repository. Start on the free `*.github.io` URL.
- Domain `pawzentopia.com` is **not purchased yet**. After preview approval, present the 2–3 cheapest registrars with verified current prices and wait for the user's decision.
- Contact form: Formspree free plan (or an equivalent free service) sending to pawzentopia@gmail.com. The user must create/confirm the account with that e-mail; guide them step by step and never ask for passwords.
- No analytics, no non-essential cookies.

## Legal (confirmed: temporarily incomplete)

- The owner's business registration is currently closed/being arranged. SIREN/SIRET, legal status and address are **left blank for now**.
- Build the legal-notice page in all 4 languages with only confirmed data (publisher name, phone, e-mail, hosting provider GitHub Inc.). Keep missing legal identifiers as code-level TODOs, never as visible placeholder text or invented data.
- Before production launch, remind the user in Turkish that French law expects complete legal notices for a commercial activity with published prices, and that paid dog care/training in France may require a registered business and a professional certification (e.g. ACACED). Recommend verification with a qualified professional. Do not block the preview on this.

## Still open — ask the user

1. Approval of the EN, RU (by Marianna) and TR copy.
2. Any additional social networks (Facebook, YouTube, Google Business Profile…).
3. Details of the dog-training service (approach, format, credentials) — until then keep the approved short copy without claims and without a price.

## Resolved on 27 September 2026 (user answers to "Still open")

1. **Copy approved:** the user approved the design and the EN, RU and TR copy as implemented,
   including the urgent-panel second line ("Hospitalisation, accident, départ imprévu…").
2. **Social networks:** Instagram and TikTok only. No other networks for now.
3. **Dog training:** keep the approved short copy, without claims or price, until the owner provides details.

## Change request 02 (27 September 2026) — see `CHANGE_REQUEST_02.md`

- **Real photos** replace the AI photos for: family care card, urgent care card, approach section, and a new
  4-photo social mosaic (`social-1` … `social-4`). Hero, training and transport photos stay for now; the hero
  may become a video later.
- **Social media** gets its own section ("Suivez-nous") and header icons. No third-party embeds.
- **Logo:** mark shown in the header at every size; larger full logo in the footer. An SVG made by automatic
  tracing of the original (`scripts/trace_logo.py`) is used only for the intro animation; the original JPEG
  is untouched.
- **Motion:** the one-time logo intro and hover panels are allowed (override "no excessive motion"), but both
  are skipped/reduced with `prefers-reduced-motion`, and the intro plays once per session and can be skipped.
- **Contact:** WhatsApp is the primary action everywhere (spam calls). The phone stays available for existing
  clients and emergencies — never present it as emergency-only. Floating WhatsApp button on phones.
- **Mobile header:** logo mark + name, language switcher and a menu button; on phones the contact action is the
  floating WhatsApp button and the WhatsApp button inside the menu.
- **Blog + CMS (Pages CMS):** planned as the second step, after approval of the items above.
- **§1–§5 approved and merged on 28 September 2026.** Round WhatsApp button added to the mobile header on request.
- **Blog + CMS (§6):** Pages CMS (`.pages.yml`), blog posts in `src/content/blog/`, blog images in
  `src/content/blog/images/`, prices moved to `src/data/prices.json`. Guides: `BLOG_REHBERI.md` (TR),
  `GUIDE_BLOG_FR.md` (FR). Interface strings added for the blog: "Lire l’article →" and "Tous les articles →"
  (and translations) — to be confirmed by the user.

## Change request 03 (3 October 2026) — see `CHANGE_REQUEST_03.md`; it overrides anything above

- **Phone corrected:** +33 6 98 38 26 18 (`tel:+33698382618`, `https://wa.me/33698382618`).
- **Live domain:** https://pawzentopia.com (custom domain on GitHub Pages, set up by the user).
- **Languages:** French (`/`), English (`/en/`), Turkish (`/tr/`). Russian removed; old `/ru/` URLs are noindex
  pages redirecting to the French equivalents. "Languages spoken": French, English, Turkish.
- **Service area:** Saint-Jean (31240) & Toulouse metro area (replaces "Toulouse, Saint-Jean and 20 km around").
- **Prices:** new 4-group list (training; family boarding & day care with S ≤10 kg, M 10–20, L 20–30, XL >30 kg at
  18/20/25/30 €; home dog/cat sitting; emergencies on quote for known clients only) in `src/data/prices.json`,
  editable in Pages CMS ("Tarifs"). The old 24 h table, −5 % discount, day-care 15/12 € and extras line are gone.
- **Services:** Pension familiale & crèche · Éducation canine · Visites à domicile · Cas d’urgence. Transport is not a
  standalone service any more (only within emergencies for known clients). No "24/7" / "à toute heure" promises.
- **Google reviews:** 5,0 ★ (13 avis) from `src/data/reviews.json` (Pages CMS "Avis Google"); hero badge + reviews
  section; originals in French never altered; no AggregateRating/Review JSON-LD.
