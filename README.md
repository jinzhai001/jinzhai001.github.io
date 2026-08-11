# Aban — personal site

A small, static portfolio built with React, TypeScript and Vite. It is designed for GitHub Pages and uses no backend.

## Run locally

```bash
npm install
npm run dev
```

To make a production build:

```bash
npm run build
```

## Edit your personal information

All contact information and the primary project copy live in [`src/config/site.ts`](src/config/site.ts). Update these fields before publishing:

- `name`, `email`, `github`, `linkedin`, `location`, `school`
- The `projects` array for project names, descriptions, focus areas and technology stacks
- The `thoughts` array for writing entries

The visual layout and the shared project-detail page are in `src/App.tsx`; site-wide styling is in `src/styles.css`.

## Add a new project

Add an entry to the `projects` array in `src/config/site.ts`. Use a unique `slug` and one of the existing visual accents: `coral`, `blue`, or `lime`. The home preview and its detail page are generated automatically.

## Publish to GitHub Pages

1. Create a GitHub repository named exactly `<your-github-username>.github.io`.
2. Push this project’s `main` branch to that repository.
3. On GitHub, open **Settings → Pages** and choose **GitHub Actions** as the source.
4. Pushes to `main` now build and deploy automatically through `.github/workflows/deploy.yml`.

The published site will be available at `https://<your-github-username>.github.io`.

> If you deploy this same code to a repository that is *not* named `<username>.github.io`, set Vite’s `base` option in `vite.config.ts` to `/<repository-name>/` first.

## Design notes

- Detail pages use hash URLs, such as `#/projects/taskradar`, so they work on GitHub Pages without server-side route rewrites.
- Motion automatically scales down for visitors who enable **Reduce motion** in their operating system settings.
