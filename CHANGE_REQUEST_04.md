# Change request 04 — map & directions block

Requested by the user on 3 October 2026, after CR-03 (CR-03 is otherwise complete; this was meant to be its §8 but the uploaded copy did not include it). Implement on a branch, show screenshots, wait for approval, then merge to `main`. Add the decision to `PROJECT_DECISIONS.md` and the copy to the CONTENT files.

## 1. Map & directions ("Nous trouver")

Add a map block at the bottom of the home page, between the contact section and the footer (and a compact version on the boarding, day-care and training service pages).

- **No Google Maps iframe or Maps JavaScript** by default: they set third-party cookies, which in France would require a consent banner. Instead show a **static map image** (no cookies): an OpenStreetMap-based image of Saint-Jean / north-east Toulouse with a brand-coloured pin at the business location, generated once and stored in the repo, with the required attribution `© OpenStreetMap contributors` visible on the image or right under it. If generating an OSM image is not possible in your environment, use a clean stylised SVG map card in the brand colours with the pin and the label `Saint-Jean (31240)` — no invented roads or distances.
- The whole map card is a link that opens directions in Google Maps (on phones this opens the Google Maps app with the route and travel time from the visitor's current position):
  `https://www.google.com/maps/dir/?api=1&destination=43.6583093,1.508352` (coordinates of the PawZenTopia Google Business Profile pin), `target="_blank" rel="noopener"`.
- A second, text link opens the Google Business Profile (reviews, photos): `https://maps.google.com/?cid=8526896004295926302`.
- Do **not** print the street address on the site (keep `Saint-Jean (31240)`), unless the user later asks for it. Keep the coordinates and links in `src/config/site.ts`.
- Rounded card (same radius as other cards), map image with a subtle mint overlay at the edges, pin in deep green / terracotta, hover: slight lift + "Itinéraire" chip. Mobile: full-width card, buttons stacked, tap targets ≥ 44 px.

Copy:

| | FR | EN | TR |
| --- | --- | --- | --- |
| Eyebrow | `Nous trouver` | `Find us` | `Bizi bulun` |
| Heading | `Saint-Jean, aux portes de Toulouse.` | `Saint-Jean, right next to Toulouse.` | `Saint-Jean, Toulouse’un hemen yanında.` |
| Body | `Pour une pension, une crèche ou un bilan, venez nous rencontrer à Saint-Jean (31240). Les visites à domicile se font chez vous, dans la métropole toulousaine.` | `For boarding, day care or an assessment, come and meet us in Saint-Jean (31240). Home visits take place at your home, across the Toulouse metropolitan area.` | `Pansiyon, kreş ya da değerlendirme için Saint-Jean’da (31240) bizimle tanışın. Evde ziyaretler ise Toulouse metropol bölgesinde sizin evinizde yapılır.` |
| Primary button | `Itinéraire avec Google Maps` | `Get directions in Google Maps` | `Google Maps ile yol tarifi` |
| Text link | `Voir la fiche Google` | `View on Google Maps` | `Google Maps’te görün` |

## 2. Checks before asking for approval

- Build, type check, no console errors, no horizontal scroll at 320 px.
- Screenshots of the map block on the home page (desktop 1440 + mobile 390, FR and TR) and on one service page.
- Confirm the directions link opens Google Maps with the destination pin, and that no third-party request (Google, OSM tiles) is made when the page loads — the map image must be served from our own site.
