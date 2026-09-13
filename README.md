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

## Deploy to Netlify

This repository includes `netlify.toml`, so Netlify can deploy it directly.

1. Push the repository to GitHub.
2. In Netlify, choose **Add new project → Import an existing project**.
3. Select the GitHub repository.
4. Netlify will use `npm run build` and publish `dist/` with Node 22.
5. Deploy.

## Deploy to Render

This repository includes `render.yaml` for Render deployment.

1. Push the repository to GitHub.
2. In Render, choose **New → Blueprint** and connect the repository.
3. Render reads `render.yaml` and builds the Vite application with Node 22.
4. The production files are served from `dist/`.

You can also create a Render **Static Site** manually with:
- Build command: `npm run build`
- Publish directory: `dist`
- Node version: `22`

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
