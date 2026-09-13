# AfroGenomics website

A React + TypeScript + Vite marketing site for AfroGenomics. The visual system is intentionally **white + dark green only**—no black UI styling.

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
```

The output is created in `dist/`.

## GitHub Pages

The repository includes a GitHub Actions workflow in `.github/workflows/deploy.yml` that builds the Vite site and deploys `dist/` to GitHub Pages.

In GitHub, enable Pages under **Settings → Pages → Build and deployment → Source: GitHub Actions**.

## Customisation

- Brand mark is an inline SVG in `src/App.tsx`.
- All colors are controlled through CSS variables in `src/styles.css`.
- The contact form is intentionally frontend-only until a form endpoint is chosen.

### Commercial offering
The website presents four core client packages:
- Research Genomics
- Clinical Genomics Support
- Bioinformatics-as-a-Service
- African Genomics Intelligence

Clients can engage through project-based work, recurring subscriptions, or enterprise arrangements. Clinical services are positioned as computational support alongside qualified clinical/laboratory partners rather than as a standalone diagnostic claim.
