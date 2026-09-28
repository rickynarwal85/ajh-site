# AJH Building Contractors website

Redesign of [ajhbuildingcontractors.com](https://www.ajhbuildingcontractors.com/), built with [Astro](https://astro.build).

**Preview:** https://rickynarwal85.github.io/ajh-site/

## Run locally

```sh
npm install
npm run dev      # http://localhost:4321/ajh-site/
```

Every push to `main` redeploys to GitHub Pages automatically.

## Where things live

| What | Where |
| --- | --- |
| Phone, WhatsApp, email, address, hours, social accounts, menu | `src/data/site.ts` |
| Building-regs "why" cards (home + Meet Ashley) | `src/data/expertise.ts` |
| Ashley's profile | `src/pages/meet-ashley.astro` |
| Service pages (text, images) | `src/data/services.ts` |
| Home, About, Contact, Projects pages | `src/pages/` |
| Header, sidebar, footer | `src/layouts/Layout.astro` |
| Colours and fonts | `src/styles/global.css` (`:root` variables) |
| Project gallery photos | `public/images/projects/<category>/`, where new files appear automatically |

## Notes

- Yellow boxes and `[bracketed]` text are placeholders waiting on details from Ashley.
- The mobile number links to WhatsApp with a pre-filled message (edit it in `src/data/site.ts`).
- The Projects page embeds the Facebook page feed. Under UK cookie rules (PECR) this should sit behind a cookie consent before going live.

- Page text is copied from the current site as a placeholder.
- The contact form is **not connected** yet (GitHub Pages can't process forms). Hook it up to a form service such as Web3Forms or Formspree in `src/components/ContactForm.astro`.
- Moving to the real domain: set `site` in `astro.config.mjs` to the domain, remove `base`, and add a `public/CNAME` file.
