# Westport, Unfiltered

An insider's guide to Westport, CT — restaurant reviews built with Astro 5 + React.

## Stack
- Astro 5 (static site generation)
- React (interactive filter/directory component)
- Plain CSS with a custom design system (see `src/styles/global.css` for tokens)
- Deploy target: Vercel

## Structure
- `src/data/restaurants.js` — **placeholder content**, structured to match the agreed
  field list (name, category, price, neighborhood, score, scoreExplainer, review,
  whatToOrder, tags, address, website, photoColor). This is what the future Sanity
  schema should mirror.
- `src/components/RestaurantCard.jsx` — the card used in grids (homepage + directory)
- `src/components/RestaurantDirectory.jsx` — the interactive filterable grid (client-side)
- `src/pages/index.astro` — homepage
- `src/pages/restaurants/index.astro` — full directory with tag filters
- `src/pages/restaurants/[slug].astro` — dynamic detail page template (generates one
  page per entry in restaurants.js automatically)
- `src/pages/about.astro` — About page incl. the "How we rate" explainer

## Next steps (once design is approved)
1. Set up a Sanity project, define the schema to match `restaurants.js`'s field shape.
2. Replace the static import in each page (`import { restaurants } from "../data/restaurants.js"`)
   with a fetch from Sanity's API (e.g. via `@sanity/astro` or `@sanity/client`).
3. Add a Sanity → Vercel webhook so publishing content triggers a rebuild.
4. Swap placeholder photo-color blocks for real Sanity image assets (with hotspot/crop).
5. Wire up the real Google Maps embed using each restaurant's address.

## Local development
```bash
npm install
npm run dev
```

## Build
```bash
npm run build
```
