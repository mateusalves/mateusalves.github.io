import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const work = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/work' }),
  schema: z.object({
    order: z.number(),
    title: z.string(),
    eyebrow: z.string(),
    outcome: z.string().optional(),
    summary: z.string(),
    status: z.string(),
    published: z.boolean().default(false),
  }),
});

export const collections = { work };
