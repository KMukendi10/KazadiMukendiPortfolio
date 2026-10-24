# Kazadi Mukendi Portfolio

Creative, interactive portfolio built with Next.js (App Router). Live: https://kazadi-mukendi-portfolio.vercel.app

## Run it

Needs Node 20.9 or newer.

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start
```

Deploy on Vercel with the framework preset set to **Next.js**.

## What's inside

- Pages: Home, About, Work (`/projects`), Contact, custom 404
- Work list with hover previews and a case-study drawer (13 projects, each with a one-line business outcome)
- Interactive bits: gear hero, cursor-reactive name, magnetic buttons, marquee, page transitions, dark/light theme, intro (once per session)
- SEO: per-page metadata + canonical, Open Graph image (`opengraph-image.js`), `sitemap.js`, `robots.js`, JSON-LD Person schema, favicons
- Accessibility: skip link, `<main>` landmark, keyboard-friendly drawer, reduced-motion support

## Where to edit

| What | File |
|---|---|
| Projects and case studies | `src/data/projects.js` |
| Per-project colours | `src/data/palette.js` |
| Image sizes (add new images here) | `src/data/assets.js` |
| Social links | `src/data/site.js` |
| Styles | `src/app/globals.css` |
| CV | `public/Assets/KazadiMukendi-CV.pdf` |

## Stack

Next.js, React, CSS, fontsource-variable (Bricolage Grotesque, Instrument Sans), react-icons, Vercel.
