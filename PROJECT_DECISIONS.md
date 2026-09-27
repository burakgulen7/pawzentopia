# PawZenTopia — confirmed decisions (updated 27 September 2026)

These answers come from the business owner. They are binding and override the open items in `QUESTIONS_AND_DEPLOYMENT.md`. Do not ask them again. Ask only about items listed under "Still open".

## Business facts (confirmed)

- Owner / public name: **Marianna Mamoyan**
- Phone: **+33 6 98 48 26 18** (`tel:+33698482618`), also WhatsApp (`https://wa.me/33698482618`, with a pre-filled message in the visitor's language)
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
