# Nicholas M. T. Elliott — Resume / Portfolio Site

Public portfolio and resume site for [nicholasmtelliott.com](https://nicholasmtelliott.com), currently running on Astro and deployed with Netlify.

## Stack

- Astro
- TypeScript
- SCSS
- pnpm
- Netlify

## Prerequisites

- Node.js 20+
- pnpm 9+

## Getting Started

Install dependencies:

```bash
pnpm install
```

Start local development server:

```bash
pnpm dev
```

Astro will print the local URL (typically `http://localhost:4321`).

## Scripts

- Run locally:

  ```bash
  pnpm dev
  ```

- Build production output:

  ```bash
  pnpm build
  ```

- Preview production build locally:

  ```bash
  pnpm preview
  ```

- Run tests (placeholder currently):

  ```bash
  pnpm test
  ```

- Format files:

  ```bash
  pnpm format
  ```

## Content

- Company/experience markdown content lives under:
  - `content/company/`
- Astro content collections are configured in:
  - `src/content.config.ts`

## Deploy (Netlify)

Deployment is configured in `netlify.toml`:

- Build command: `pnpm build`
- Publish directory: `dist`
- Node version: `20`
- Redirect: `/admin/*` → `/admin/index.html`

Standard flow:

1. Push commits to GitHub
2. Netlify picks up the change and runs the build
3. Built site is published from `dist`

## Current Status

- Migration foundation from Gatsby to Astro is complete.
- Ongoing work includes Decap CMS integration, content expansion, and further responsive visual refinement.
