# Nicholas M. T. Elliott — Resume / Portfolio Site

Public portfolio and resume site for [nicholasmtelliott.com](https://nicholasmtelliott.com), currently running on Astro and deployed with Cloudflare Pages.

## Stack

- Astro
- TypeScript
- SCSS
- pnpm
- Cloudflare Pages

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

## Deploy (Cloudflare Pages)

Cloudflare Pages builds from the GitHub repo:

- Build command: `pnpm build`
- Publish directory: `dist`
- Node version: `20`

Standard flow:

1. Push commits to GitHub
2. Cloudflare Pages picks up the change and runs the build
3. Built site is published from `dist`

## CMS (Decap) Setup

The admin UI is available at `/admin` and is configured in:

- `static/admin/index.html`
- `static/admin/config.yml`

This project uses the Decap **GitHub backend** (`backend.name: github`). Editing is **local-only**: the production `/admin` page has no OAuth provider configured (the Netlify-hosted auth flow was removed 2026-07 along with the Netlify deployment), and `/admin` is noindexed.

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
- Deployed exclusively on Cloudflare Pages; Netlify deployment and integrations removed 2026-07.
- CMS editing is local-only; content updates land as commits to `main`.
