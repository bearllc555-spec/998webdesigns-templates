# 998webdesigns-templates — Project Handoff

A library of six handcrafted website templates, each a fully built mini-site at `/templates/<slug>`, with a gallery at `/` that links out to each.

Production URL: https://998webdesigns-templates.vercel.app

## Status (v0.3, 2026-05-22)

A growing library of handcrafted templates, each shipped as a fully built mini-site. The legacy Crafto bundle (57 stock demos) was removed during the v0.2 rebuild. The repo is the source of truth for the Mockup Library; new templates added here ship to production on push to main via Vercel. The live template count is rendered above the gallery grid on the home page and auto-derives from `src/templates/registry.ts` (no hardcoded count anywhere).

Pricing is `$998 once` for any template tailored to a client (5-7 day customization window). Pricing wording is the product; do not change without explicit approval.

## Stack

- Next.js 16 (App Router, TypeScript, src/ layout, no Turbopack)
- Tailwind CSS v4 (no `tailwind.config.ts`; config lives in `globals.css` via `@theme inline`)
- pnpm 11
- Vercel (Hobby plan)
- lucide-react, embla-carousel-react, framer-motion, clsx, tailwind-merge
- shadcn/ui not initialized — primitives are written inline to give each template its own visual language (the shared "neutral base + per-template override" model fits this repo poorly because each template is a different design system)

## File layout

```
src/
  app/
    page.tsx                          gallery (uses GalleryGrid + TemplateCard)
    layout.tsx                        loads all 10 Google Fonts as CSS variables
    globals.css                       Tailwind v4 base + tpl-* CSS variables
    templates/
      <slug>/
        layout.tsx                    mounts ThemeStyle + SiteHeader + SiteFooter
        page.tsx                      home, composes blocks
        <page>/page.tsx               4-5 sub-pages per template
  components/
    site/                             shared site shell (header, footer, cta-banner, contact-form)
    gallery/                          gallery card + grid
  lib/
    svg-placeholder.tsx               dispatch to per-template image modules
    theme-style.tsx                   server component that injects per-template CSS vars
    theme-context.tsx                 client-side context (unused so far; reserved for future)
    utils.ts                          cn() helper
    version.ts                        SITE_VERSION pill
  templates/
    types.ts                          TemplateTheme / TemplateContent / TemplateModule contracts
    registry.ts                       ALL_TEMPLATES list and helpers
    01-haldwell-law/
      theme.ts content.ts images.tsx blocks/ index.ts
    02-maple-street-bakery/
    03-northwind-dental/
    04-ironclad-roofing/
    05-quietfield-yoga/
    06-tidewater-cpa/
```

## The customization contract

To clone a template for a new client, edit exactly four surfaces:

1. `src/templates/<slug>/theme.ts` — palette, font variables, radius, density, motion, nav, primary CTA.
2. `src/templates/<slug>/content.ts` — business info, hero copy, services list, about copy, testimonials, CTA banner, footer blurb. **All copy lives here, never hardcoded in JSX.**
3. `src/templates/<slug>/images.tsx` — the SVG motif compositions (Hero, Tile, Portrait, Wide, Thumb). Swap colors and shape choices to taste.
4. **Form endpoints — REQUIRED before any client deploy.** Every `<form>` in the repo ships as a display-only no-op (`onSubmit={(e) => e.preventDefault()}`, with the shared `ContactForm` faking success after a 500ms `setTimeout`). A live client site with unwired forms will silently swallow leads.

   Wiring path: every client signs up for a free Formspree account, creates a form, and supplies their own hashid. For each `<form>` in the templates the client is using, set `action="https://formspree.io/f/<CLIENT_HASHID>"` and `method="POST"`, then remove the `onSubmit={(e) => e.preventDefault()}` handler. In the shared `ContactForm`, also delete the `setTimeout` fake-success block (lines around `window.setTimeout(... setSubmitted(true) ...)`) so the form posts and Formspree returns the user to its thank-you page (or wire `_next` per Formspree docs to bounce back to a custom page).

   Forms currently live in five files (every new form-bearing template must inherit this same Formspree wiring step):
   - `src/components/site/contact-form.tsx` — used by templates 01-06
   - `src/templates/07-borst-landscape-design/blocks/hero.tsx` (newsletter card)
   - `src/templates/07-borst-landscape-design/blocks/borst-footer.tsx` (footer newsletter)
   - `src/templates/08-yogacentric-studio/blocks/contact.tsx` (main contact form)
   - `src/templates/08-yogacentric-studio/blocks/footer.tsx` (footer newsletter)

Everything else (pages, blocks, shared components) reads from `theme.ts` + `content.ts` + `images.tsx` via the imported `templateModule`. No JSX edits needed for a re-skin beyond the form-action swap in step 4.

## The six templates

| # | Slug | Industry | Visual language | Display font | Body font | Accent |
|---|---|---|---|---|---|---|
| 01 | `haldwell-law` | Boutique law firm | Editorial Serif | Cormorant Garamond | Source Sans 3 | Oxidized brass `#8B6B3F` |
| 02 | `maple-street-bakery` | Bakery and cafe | Warm Editorial | Fraunces | Inter | Terracotta `#C2522C` |
| 03 | `northwind-dental` | Family dentistry | Clinical Minimal | Manrope | Manrope | Soft blue `#2C7BE5` |
| 04 | `ironclad-roofing` | Roofing | Industrial Bold | Archivo Black | Archivo | Safety orange `#F25C05` |
| 05 | `quietfield-yoga` | Yoga studio | Serene Minimal | Cardo | Inter | Sage `#6B8068` |
| 06 | `tidewater-cpa` | Accounting | Corporate Structured | Playfair Display | IBM Plex Sans | Muted gold `#B8923E` |

Gallery sorts newest-first by `theme.meta.publishedAt`. Template 06 (Tidewater CPA) is newest and shows the "New" badge.

## SVG placeholder system

`lib/svg-placeholder.tsx` exports `<Placeholder kind={"hero" | "tile" | "portrait" | "wide" | "thumb"} theme={theme} seed={n} />`. It dispatches to each template's own `images.tsx`, which exports `Hero`, `Tile`, `Portrait`, `Wide`, and `Thumb` components.

All composition uses only the template's palette. All decorative SVGs include `<title>`/`<desc>`. There are no external image services and no stock photos in the repo.

## Hero header pattern (locked 2026-05-22)

Every template that uses a full-bleed image or video in the hero section uses the **scroll-reveal floating header** pattern:

- The header is hidden (translated off-screen, opacity 0, pointer-events none) on initial page load.
- A scroll listener fires when the user scrolls past the bottom edge of the hero section (`window.scrollY >= hero.offsetHeight - 24`).
- Once past the hero, the header transitions in (translate to 0, opacity 1) and stays fixed for the rest of the page — including all sub-pages (non-hero pages show the header immediately on load).
- The header never reappears over the hero video/image — it only lives in the content area below.
- Implementation reference: `src/templates/08-yogacentric-studio/blocks/floating-header.tsx`. Replicate this pattern for every new template that has a hero image or video.

## How to ship a change

```bash
cd repos/998webdesigns-templates
# push directly to main for this project — Vercel branch preview URLs are non-functional
git add . && git commit -m "<ascii-only message>"
git push origin main
```

Rules:
- Push directly to main. Branch previews on this Vercel project return dead links — skip the branch/preview step entirely.
- ASCII-only commit messages.
- Bump `SITE_VERSION` in `src/lib/version.ts` by one each commit.
- Pricing wording in any `content.ts` is the product. Do not change without explicit approval.

## Adding a new template (after these six)

1. Add `src/templates/0N-<slug>/` with `theme.ts`, `content.ts`, `images.tsx`, `index.ts`, and `blocks/`.
2. Add the slug to `lib/svg-placeholder.tsx` REGISTRY and to `src/templates/registry.ts`.
3. Add the route folder `src/app/templates/<slug>/` with `layout.tsx`, `page.tsx`, and the sub-pages you want.
4. Set `theme.meta.publishedAt` to "now"; the gallery auto-sorts and the "New" badge moves to the new entry.
5. Push directly to main.

## Quick links

| Surface | URL |
|---|---|
| Production | https://998webdesigns-templates.vercel.app |
| Repo | https://github.com/bearllc555-spec/998webdesigns-templates |
| Main marketing app | https://998webdesigns-com-app.vercel.app |
| Vercel project | bearllc555-6551s-projects/998webdesigns-templates |

## Session log

| Date | Event |
|---|---|
| 2026-05-21 | v0.1 initial 57-template Crafto gallery shipped. |
| 2026-05-21 | v0.2 rebuild. Crafto bundle removed. Six handcrafted templates (Haldwell Law, Maple Street, Northwind, Ironclad, Quietfield, Tidewater) shipped together. Gallery rebuilt with newest-first sort, branded SVG thumbnails, and a "New" badge. |
| 2026-05-22 | v0.3. Customization contract expanded to four surfaces (added form-wiring step - Formspree-per-client). Live template count rendered above the gallery grid, auto-derived from `src/templates/registry.ts`. Templates 07-borst-landscape-design and 08-yogacentric-studio added to the library since v0.2. |
