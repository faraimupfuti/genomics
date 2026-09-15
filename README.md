# AfroGenomics — Clinical Genomics Computing

Clinical-genomics-focused React + TypeScript + Vite website.

## Run locally

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
```

The production output is `dist/`.

## Deploy on Render

Use a **Static Site**:

- Branch: `main`
- Build command: `npm run build`
- Publish directory: `dist`
- Start command: leave empty

## Deploy on Netlify

The included `netlify.toml` and `public/_redirects` configure Vite SPA routing.


## Why Africa visual
The Why Africa section uses the supplied clinical-genomics image as a local asset at `public/africa-clinical-genomics.png` (served as WebP with a PNG fallback for hero/pipeline images).

## Before you go live

A few placeholders need your real details once the company is registered with CIPC:

- **Domain & email** — `index.html`, `public/robots.txt`, `public/sitemap.xml`, and the footer/contact form in `src/App.tsx` reference `afrogenomics.com` and `hello@afrogenomics.com` / `privacy@afrogenomics.com`. Update these to your actual domain and mailboxes.
- **Company registration** — the footer shows "registration pending" — replace with your CIPC registration number once issued.
- **Information Officer** — `/privacy` currently names a placeholder Information Officer email. POPIA requires you to register your Information Officer with the Information Regulator (South Africa) before processing personal information, and to keep this contact accurate.
- **Contact form delivery** — the form currently opens the visitor's email client via a `mailto:` link (no backend required, but it depends on the visitor having a configured mail client). For more reliable delivery, wire it to a form backend (e.g. Formspree, a serverless function, or your CRM) once you're ready.
- **Analytics** — none is included. If you add any (e.g. Google Analytics, Plausible), update the Privacy Policy and cookie notice accordingly, since POPIA requires disclosure of what's collected.

## What's included

- **SEO & social sharing** — meta description, Open Graph/Twitter cards, canonical URL, `robots.txt`, `sitemap.xml`, and an Organization JSON-LD block.
- **Favicon & manifest** — `public/favicon.svg` and `public/site.webmanifest`, built from the existing DNA brand mark.
- **Performance** — hero, pipeline and Africa images are served as WebP (roughly 90% smaller) with the original PNGs kept as `<picture>` fallbacks; below-the-fold images are lazy-loaded.
- **Accessibility** — a skip-to-content link, `aria-expanded`/`aria-controls` on the mobile menu and FAQ accordion, a labelled `<nav>`, and visible focus outlines.
- **Legal pages** — `/privacy` and `/terms`, written with POPIA (South Africa's Protection of Personal Information Act) in mind, since genomic and health data is "special personal information" under that Act. Linked from the footer.
- **POPIA-style consent notice** — a dismissible banner (bottom of screen, first visit only) pointing to the Privacy Policy.
- **Contact form** — client-side validation, a required consent checkbox tied to the Privacy Policy, a spam honeypot field, and a success state.
