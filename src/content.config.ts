import { defineCollection, z } from 'astro:content'
import { glob } from 'astro/loaders'

const company = defineCollection({
  loader: glob({ pattern: '*.md', base: './content/company' }),
  schema: z.object({
    title: z.string(),
    startDate: z.coerce.date(),
    endDate: z.coerce.date().optional(),
    thumbnail: z.string().optional(),
    key: z.string(),
    location: z.string().optional(),
    website: z.string().url().optional(),
    sortOrder: z.number().optional(),
  }),
})

const project = defineCollection({
  loader: glob({ pattern: '*.md', base: './content/project' }),
  schema: z.object({
    key: z.string(),
    companyKey: z.string(),
    name: z.string(),
    role: z.string().optional(),
    startDate: z.coerce.date().optional(),
    endDate: z.coerce.date().optional(),
    repoUrl: z.string().url().optional(),
    liveUrl: z.string().url().optional(),
    skills: z.array(z.string()).optional(),
    featured: z.boolean().optional(),
  }),
})

const profile = defineCollection({
  loader: glob({ pattern: 'profile.md', base: './content/profile' }),
  schema: z.object({
    fullName: z.string(),
    headline: z.string(),
    location: z.string(),
    organization: z.string().optional(),
    avatarUrl: z.string().optional(),
    linkedin: z.string().url(),
    github: z.string().url(),
    x: z.string().url().optional(),
  }),
})

const about = defineCollection({
  loader: glob({ pattern: 'about.md', base: './content/about' }),
  schema: z.object({
    title: z.string(),
    updatedAt: z.coerce.date().optional(),
  }),
})

const skills = defineCollection({
  loader: glob({ pattern: 'skills.md', base: './content/skills' }),
  schema: z.object({
    groups: z.array(
      z.object({
        name: z.string(),
        items: z.array(z.string()),
      }),
    ),
  }),
})

const contact = defineCollection({
  loader: glob({ pattern: 'contact.md', base: './content/contact' }),
  schema: z.object({
    email: z.string(),
    linkedin: z.string().url(),
    github: z.string().url(),
    location: z.string().optional(),
    resumeUrl: z.string().optional(),
    availabilityNote: z.string().optional(),
  }),
})

export const collections = {
  company,
  project,
  profile,
  about,
  skills,
  contact,
}
