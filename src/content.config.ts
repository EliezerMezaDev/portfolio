import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

// Item with a title and a lower-hierarchy description (tools, features, results)
export const namedItem = z.object({ name: z.string(), reason: z.string() });

export const projectTranslation = z.object({
  title: z.string(),
  client: z.string(),
  period: z.string(),
  role: z.string(),
  resultHeadline: z.string(),
  // Card/list view (used by ProjectCard)
  summary: z.string().optional(),
  highlights: z.array(z.string()).optional(),
  // Extended detail sections
  context: z.string().optional(),
  conditions: z.string().optional(),
  solution: z.string().optional(),
  tools: z.array(namedItem).optional(),
  features: z.array(namedItem).optional(),
  results: z.array(namedItem).optional(),
});

const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
  schema: z.object({
    order: z.number(),
    type: z.enum(["own", "third-party", "freelance"]),
    stack: z.array(z.string()),
    // Image paths under /public, shared across languages
    gallery: z.array(z.string()).optional(),
    repo_url: z.string().optional(),
    preview_url: z.string().optional(),
    en: projectTranslation,
    es: projectTranslation,
  }),
});

export const collections = { projects };
