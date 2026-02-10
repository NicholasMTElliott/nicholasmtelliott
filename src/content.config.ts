import { defineCollection, z } from 'astro:content'
import { glob } from 'astro/loaders'

const company = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './content/company' }),
  schema: z.object({
    title: z.string(),
    startdate: z.coerce.date(),
    enddate: z.coerce.date(),
    thumbnail: z.string().optional(),
    key: z.string(),
  }),
})

export const collections = {
  company,
}
