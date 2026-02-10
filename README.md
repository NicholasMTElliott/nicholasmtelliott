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

## CMS (Decap) Setup

The admin UI is available at `/admin` and is configured in:

- `static/admin/index.html`
- `static/admin/config.yml`

This project uses the Decap **GitHub backend** (`backend.name: github`) to stay compatible with Netlify free-tier hosting.

### Required one-time GitHub OAuth setup

To enable login in `/admin`, you must configure an OAuth app + auth endpoint for Decap GitHub backend.

Minimum requirements:

1. Create a GitHub OAuth App (or GitHub App-compatible auth flow) for the site.
2. Provide a callback URL that returns auth tokens to Decap.
3. Configure the auth endpoint/credentials in your hosting/auth layer.
4. Ensure the authenticated user has push rights to `NicholasMTElliott/nicholasmtelliott`.

Without OAuth setup, `/admin` will load but login/commit flow will not complete.

### Local CMS editing UX

For local authoring, this repo has `local_backend: true` in Decap config.

Run Astro and Decap local backend in separate terminals:

```bash
pnpm dev
```

```bash
npx decap-server
```

Then open:

- Site: `http://localhost:4321`
- Admin: `http://localhost:4321/admin`

You can create/edit entries in the **Company** collection and Decap will write markdown files under `content/company`.

## Current Status

- Migration foundation from Gatsby to Astro is complete.
- Ongoing work includes Decap CMS integration, content expansion, and further responsive visual refinement.
