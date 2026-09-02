import { rm } from 'node:fs/promises'
import { defineConfig } from 'astro/config'
import sitemap from '@astrojs/sitemap'

// Decap admin lives in static/admin for local editing (pnpm dev + npx decap-server)
// but has no OAuth provider in production, so it is stripped from the build output.
const stripAdmin = () => ({
  name: 'strip-admin',
  hooks: {
    'astro:build:done': async ({ dir }) => {
      await rm(new URL('admin/', dir), { recursive: true, force: true })
    },
  },
})

export default defineConfig({
  site: 'https://nicholasmtelliott.com',
  publicDir: 'static',
  integrations: [sitemap(), stripAdmin()],
})
