# PawZenTopia design specification

## Positioning

PawZenTopia should feel like a small, attentive home where dogs are understood and welcomed—not a luxury hotel and not a veterinary clinic. The visual voice is calm, warm, modern, human and trustworthy.

## Source of truth

1. `reference/desktop-approved.png` — 1440 px reference.
2. `reference/mobile-approved.png` — 390 px reference.
3. This document for behavior that cannot be inferred from a still image.
4. `reference/design-reference.html` as a practical CSS/layout starting point.

When details conflict, preserve the latest gradient hero treatment shown in the PNG references.

## Design tokens

| Token | Value | Use |
| --- | --- | --- |
| Pale mint | `#E8F3ED` | hero and header background |
| Soft mint | `#D3E8DC` | quiet accents |
| Deep green | `#25443C` | headings, buttons, primary text |
| CTA green | `#31584D` | emergency/contact panel |
| Warm cream | `#FCFAF4` | page background and light button text |
| Muted green-gray | `#63776F` | body copy |
| Terracotta accent | `#C98568` | restrained brand accent only |
| Approach section | `#F1F6EF` | secondary pale section |

Display typography: `Georgia, "Times New Roman", serif` unless a locally hosted equivalent can match the reference more closely without changing line breaks. UI/body typography: `Arial, Helvetica, sans-serif`. Do not introduce ornamental fonts.

## Desktop structure

Target content width: approximately 1380 px with 62–64 px side padding at 1440 px viewport.

1. Header/nav, approximately 90–95 px high.
2. Hero, approximately 608–660 px visual height below nav.
3. Three-item trust strip.
4. Services intro and four equal square-photo cards in one row.
5. Pale mint approach section with large photo left and copy right.
6. Dark-green rounded urgent-contact panel.
7. Restrained footer.

## Hero — critical

- Asset: `assets/photos/hero-approved.png`.
- The photo fills the hero background edge-to-edge. No circle, pill, oval, card or visible photo border.
- Keep the woman and both dogs on the right side; use focal positioning rather than destructive cropping.
- Place headline/copy on the left.
- Overlay a horizontal pale-mint wash: solid from 0–31/35%, still approximately 90% opaque near 40%, approximately 45% near 53%, almost transparent by 70–82%.
- The gradient must look atmospheric, not like a hard rectangular overlay.
- Keep the faces clear and naturally colored on the right; do not wash them out.
- Use no dark cinematic overlay.
- Approved headline wrapping should remain close to:

  `Heureux comme`  
  `à la maison.`  
  `Entouré`  
  `d’attention.`

## Services

Order and assets:

1. Garde familiale — `family-care-approved.png`
2. Éducation canine — `training-approved.png`
3. Garde d’urgence — `urgent-care-approved.png`
4. Transport 24/7 — `transport-approved.png`

Use equal cards, square images, white surfaces, modest 18–22 px radii and extremely subtle shadow. Never replace a card with an icon-only service tile.

## Mobile

- Reference width: 390 px.
- Compact header with a clearly tappable Contact action.
- Hero photo occupies the lower part of the hero edge-to-edge and fades vertically into the mint copy area above it. No rounded photo corners.
- Keep the full happy group readable; do not crop out the woman’s smile or either dog.
- Trust items stack/flow beneath the hero.
- Services use a 2×2 grid, not a horizontal carousel.
- Approach photo may retain the approved asymmetric rounded treatment.
- Urgent-contact panel stacks its copy and CTA vertically.

## Logo use

Source: `assets/brand/pawzentopia-logo-original.jpeg` (2048×2048 JPEG).

- Preserve the original file untouched.
- The dark-green logo is the official brand source.
- Create derived web files non-destructively: trim excess white margins, export optimized PNG/WebP and, when necessary, remove only the near-white background. Do not redraw lines or replace typography.
- For the compact header, use a clean mark-only derivative plus the PawZenTopia name if the full vertical logo becomes illegible. Use the full logo in the footer or an identity/about area and the mark for the favicon.
- Maintain clear space around the logo. Do not recolor it terracotta, distort it or place it on busy photo detail.

## Interaction

- Smooth but restrained anchor scrolling.
- Visible keyboard focus.
- Hover transitions under 200 ms; no parallax, cursor gimmicks, autoplay, floating pets or excessive motion.
- Mobile navigation may collapse, but essential contact access stays visible.

## Responsive QA targets

At minimum test 390×844, 768×1024, 1280×800 and 1440×900. Also check 320 px width and browser text zoom at 200%.
