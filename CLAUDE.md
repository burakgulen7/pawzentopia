# PawZenTopia website — binding instructions for Claude Code Web

You are building the production website for **PawZenTopia**, a small, home-style dog care and education business in Toulouse, France. Work inside the Claude Code Web session and actually create, run, test, preview, and—only after approval—deploy the site. Do not merely print code for the user to copy.

## Read first

Before changing files, inspect every file in this package:

1. `START_HERE.md`
2. `DESIGN_SPEC.md`
3. `CONTENT_FR.md`
4. `QUESTIONS_AND_DEPLOYMENT.md`
5. `reference/desktop-approved.png`
6. `reference/mobile-approved.png`
7. `reference/design-reference.html`
8. all files under `assets/`

The PNG previews are the visual source of truth. The HTML file is an implementation reference, not permission to redesign.

## Non-negotiable design requirements

- Reproduce the approved desktop and mobile layouts as closely as technically practical: composition, spacing, hierarchy, colors, typography scale, rounded card treatment, section order and responsive behavior.
- Preserve the latest hero treatment: the approved hero photograph fills the landing hero edge-to-edge as a background. It is **not** inside a circle, oval, rounded card or isolated frame.
- On desktop, a pale mint overlay remains solid on the left and fades smoothly into the photograph toward the right. On mobile, the photo fills the lower part of the hero and fades vertically into the mint area above it.
- Use only the approved photographs in `assets/photos/`. Do not regenerate, retouch, replace, crop out important faces, or introduce stock imagery without explicit user approval.
- Use the supplied logo in `assets/brand/pawzentopia-logo-original.jpeg`. Do not redraw or reinterpret it. Keep the original untouched. You may create non-destructive web derivatives by trimming blank margins, converting to PNG/WebP and making only the near-white background transparent. Visually compare the derivative with the original before use.
- Keep the brand warm, boutique, trustworthy and home-like. Avoid black-and-gold luxury-hotel styling, clinical/veterinary styling, cages as a dominant motif, generic paw-pattern decoration and childish pet-shop aesthetics.
- Never add invented reviews, prices, certifications, staff biographies, addresses, statistics or claims.

## Required workflow and checkpoints

Communicate with the user in Turkish. Work in these phases and report the result of each phase briefly.

### Phase 0 — inspect and ask

- Inspect the package and the current repository/session.
- Explain your proposed stack and why it suits a small static business site.
- Ask the user the consolidated questions in `QUESTIONS_AND_DEPLOYMENT.md`. Do not ask one question at a time when they can be grouped.
- You may begin the visual implementation using clearly marked placeholders while waiting for business/contact details, but do not publish fabricated information.

### Phase 1 — local implementation

- If there is no existing project and no conflicting user preference, use a lightweight static-first stack suitable for SEO and low maintenance (prefer Astro with TypeScript and component-scoped CSS; plain Vite/HTML/CSS is acceptable if it more faithfully reproduces the reference).
- Do not add React or a UI component library unless a real functional requirement needs it.
- Build semantic, responsive, accessible components. Keep JavaScript minimal.
- Implement the approved one-page landing site first. Do not expand scope into a dashboard, booking platform, CMS or accounts unless requested.
- Use the approved copy in `CONTENT_FR.md`, leaving any unconfirmed facts as explicit code-level TODOs rather than visible fake content.
- Optimize derivative images for the web, but retain the approved originals in the repository.
- Run the development server and inspect at minimum 1440×900, 390×844, and one intermediate tablet width.

### Phase 2 — visual QA

- Compare screenshots side by side with both approved PNG references.
- Correct hero gradient, focal position, headline wrapping, nav height, card ratios, section spacing and mobile 2×2 service grid.
- Check that the woman’s and dogs’ faces are not hidden by cropping or overlays.
- Check keyboard navigation, focus states, contrast, reduced motion, alt text, heading structure, image sizing, layout shift and mobile tap targets.
- Run build/lint/type checks and fix errors. Do not hide failures.
- Present the preview URL or screenshots to the user and request visual approval before deployment.

### Phase 3 — content/legal approval

- Replace placeholders only with user-confirmed data.
- Confirm what “24/7” means operationally. Do not imply veterinary care, medical emergency response or guaranteed immediate availability unless explicitly confirmed and legally supportable.
- Prepare French `Mentions légales`, privacy information and cookie behavior using confirmed company data. Do not invent SIRET/SIREN, address or legal representative.
- Do not add non-essential analytics or advertising cookies without consent requirements being resolved.

### Phase 4 — hosting and domain

- Do not select, buy, transfer, configure or connect a domain or hosting provider without asking the user first.
- Give 2–3 suitable options with current cost/limitations and ask the user to choose. Verify current pricing from official provider pages at that time.
- Ask whether a domain already exists, where it is registered and who controls DNS. Never ask the user to paste passwords or secret keys into chat; use the provider’s secure login/authorization flow.
- First deploy a preview/staging URL. Connect the production domain only after the user approves the preview and explicitly authorizes the DNS/deployment step.
- Never enable recurring paid services without explicit approval.

### Phase 5 — launch verification and handoff

- Verify HTTPS, canonical URL, redirects, favicon, Open Graph image, metadata, sitemap, robots.txt, 404 behavior, contact actions and form delivery.
- Test the production URL at mobile and desktop widths.
- Give the user a short handoff: provider, domain/DNS arrangement, how to update text/photos, where form messages arrive, recurring costs and rollback/deployment procedure.

## Visual and content guardrails

- French is the default public language unless the user requests another language.
- Do not silently translate, rewrite or embellish approved copy.
- Contact buttons must not point to fake email addresses or phone numbers.
- Until contact details are confirmed, use disabled/non-navigating placeholders in development and label them in code, never on the public production site.
- “Garde d’urgence” means last-minute/urgent dog-care availability, not veterinary emergency treatment, unless the user explicitly changes this.
- Keep page performance high: responsive images, lazy-load below-the-fold images, reserve dimensions, avoid autoplay video and heavy animation.
- Respect the logo and image assets. Never use AI to modify them during implementation.

## Definition of done

The task is complete only when the user has approved the visual preview, supplied/approved required business data, chosen hosting/domain handling, authorized deployment, and the production site has passed the launch checks above.
