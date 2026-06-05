# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm dev          # Dev server with Turbopack
pnpm build        # Production build with Turbopack
pnpm lint         # ESLint via Next.js
pnpm format       # Prettier over all .ts/.tsx files
pnpm sitemap      # Regenerate sitemap (runs generate-sitemap.js)
ANALYZE=true pnpm build  # Bundle analyzer
```

Package manager: **pnpm** only.

## Architecture

### Route structure (App Router)

```
src/app/
  (root)/          # Home — FullPageSnap layout (anchors: home, about, projects, contact)
  about/           # About page
  projects/
    page.tsx       # Project list (server → passes data to ProjectsClient)
    [slug]/        # Project detail (server → ProjectDetailClient)
    archive/       # All projects table (ArchiveClient)
    (project-card)/# Shared layout slot (unused routing group)
    components/    # ProjectCard, ProjectsClient (client components)
```

### Content system

Projects and experiences live as Markdown files with gray-matter frontmatter:

- `src/content/projects/*.md` — read by `src/lib/projects.ts` (server-side only)
- `src/content/experiences/*.md` — read by `src/lib/experiences-action.ts` (`"use server"`)

**Project frontmatter shape** (`ProjectFrontmatter` in `src/lib/types.ts`):
```yaml
title, slug, date, show, own, role, preview?, code?,
thumbnail, images: [{src, type?}], category: number[], tech: string[]
```

`show: true` controls visibility in the main projects list. `images[].type` can be `"flat" | "desktop" | "android"`, which drives the image frame component rendered in the detail view.

### Technology ID system

Technologies are referenced as string IDs (e.g., `"nextjs"`, `"flutter"`) in frontmatter. `src/lib/tech-utils.ts` resolves IDs to display names. The master ID→name map lives in both `tech-utils.ts` and duplicated inline in `experiences-action.ts` — keep both in sync when adding new tech IDs.

### Data flow pattern

Server components (`page.tsx`) fetch from the filesystem and pass plain data objects to Client components (`*Client.tsx`) as props. The Client components handle interactivity (filters, animations). Never call `fs` inside `"use client"` files.

### Home page

Uses `@alvalens/react-fullpage-snap` (`FullPageProvider` + `FullPageWrapper` + `Section`) for full-page scroll snapping. The `(root)/layout.tsx` wraps in `FullPageProvider`; `(root)/page.tsx` is a Client Component that renders the sections.

### Path aliases (tsconfig.json)

| Alias | Resolves to |
|---|---|
| `@components/*` | `src/components/*` |
| `@lib/*` | `src/lib/*` |
| `@public/*` | `public/*` |
| `@app/*` | `src/app/*` |
| `@content/*` | `src/content/*` |

### Fonts & icons

- Fonts: Poppins (`--font-poppins`), Jost (`--font-jost`), JetBrains Mono — loaded via `next/font/google` in root layout
- Icons: `@fortawesome/react-fontawesome` (brands, solid, regular) and `@phosphor-icons/react`
- FontAwesome CSS is manually imported; `config.autoAddCss = false` is set to avoid duplicates

### Deployment

Deployed to Netlify (`https://eamz.netlify.app/`). The `metadataBase` in `src/app/layout.tsx` must match the production URL.

## Adding content

**New project:** create `src/content/projects/<slug>.md` with valid frontmatter. Set `show: true` to surface it in the main list. Place images under `public/projects/<slug>/`.

**New experience:** create `src/content/experiences/<name>.md`. Sorted descending by `startDate`.

**New technology ID:** add the ID→name mapping in both `src/lib/tech-utils.ts` (`allTech` object) and `src/lib/experiences-action.ts`.
