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

This project uses the Decap **GitHub backend** (`backend.name: github`) with Netlify-hosted auth endpoint settings:

- `site_domain: nicholasmtelliott.netlify.app`
- `base_url: https://api.netlify.com`
- `auth_endpoint: auth`

### Required one-time auth setup (Netlify hosted flow)

This configuration uses Netlify's hosted auth flow for Decap GitHub backend.

1. Confirm Netlify site is connected to `NicholasMTElliott/nicholasmtelliott`.
2. Ensure the deploy-connected GitHub account/app has write access to `main`.
3. Re-authorize Netlify GitHub access if prompted in Netlify/GitHub integrations.
4. Test login first at `https://nicholasmtelliott.netlify.app/admin`.

Without a valid Netlify↔GitHub authorization state, `/admin` will load but login/publish flow will fail.

### Operational prerequisites and verification

Keep these values aligned before troubleshooting code:

1. `site_domain` in Decap config matches the active Netlify subdomain.
2. Decap config uses Netlify hosted auth endpoint (`base_url` + `auth_endpoint`).
3. Netlify site is linked to the same GitHub repo/branch used in Decap config.
4. Authenticated GitHub identity has push access to `NicholasMTElliott/nicholasmtelliott`.

Verification checklist:

1. Open deployed `/admin` and complete GitHub login.
2. Confirm CMS loads collections without auth errors.
3. Create or edit a Company entry and save.
4. Confirm a commit is created on `main`.
5. Confirm Netlify builds and publishes the content change.

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
