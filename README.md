# Eliezer Meza — Personal Portfolio

Personal portfolio website for Eliezer Meza, full-stack software engineer.

**Live site:** https://eamz.netlify.app

## Local development

```bash
npm install
npm run dev
```

Opens at `http://localhost:4321`.

## Build

```bash
npm run build
```

This runs two steps:
1. Generates `public/og.png` (Open Graph image) via `scripts/generate-og.mjs`
2. Runs `astro build` to output static files to `dist/`

Preview the production build locally:

```bash
npm run preview
```

## Deploy

Static output — deploy `dist/`.

| Setting | Value |
|---|---|
| Build command | `npm run build` |
| Build output directory | `dist` |
| Node.js version | 18 or 20 |

No environment variables required.

## Tech stack

- **Framework:** Astro 6 (static output)
- **Styling:** Tailwind CSS v4 via `@tailwindcss/vite`
- **Content:** Astro Content Collections (Markdown with Zod schema)
- **Fonts:** Self-hosted via `@fontsource` (Inter + JetBrains Mono, Latin subset)
- **i18n:** Client-side language swap (EN/ES) — see below
- **Sitemap:** `@astrojs/sitemap`

## How i18n works

There is **no `/es/` routing**. Every page is built once with English in the static HTML. `src/scripts/i18n-client.ts` runs on the client, detects the language (localStorage `lang` → `navigator.language` → `en`) and rewrites text in place; the header button calls `window.toggleLang()`.

Translatable content is marked with data attributes the client script reads:
- `data-i18n="dot.path"` — global UI strings from `src/i18n/en.md` / `es.md`
- `data-bilingual` + `data-content-en` / `data-content-es` — a single text node
- `data-bilingual-list` — JSON-encoded `string[]`
- `data-bilingual-tools` — JSON-encoded `{name, reason}[]`

Rule when adding translatable text: render the **English** value inline (valid static HTML/SEO) **and** emit the Spanish value in the matching data attribute.

## Adding a new project

Both languages live in a **single** `.md` file. Create it under `src/content/projects/`, e.g. `my-project.md`:

```markdown
---
order: 4
type: "own"            # "own" | "third-party"
stack: ["Tech1", "Tech2", "Tech3"]
gallery: ["/images/my-project-1.png"]   # optional, paths under /public, shared across languages
repo_url: "https://..."                  # optional
preview_url: "https://..."               # optional
en:
  title: "Your project title"
  client: "Client name"
  period: "Jan 2025 – Mar 2025"
  role: "Your role"
  resultHeadline: "Key metric or result in one line"
  summary: "Short card/list description"          # optional
  highlights: ["Point one", "Point two"]           # optional
  context: "..."                                   # optional
  conditions: "..."                                # optional
  solution: "..."                                  # optional
  tools:    [{ name: "Tech", reason: "why" }]      # optional
  features: [{ name: "Feature", reason: "what" }]  # optional
  results:  [{ name: "Metric", reason: "impact" }] # optional
es:
  # same shape, translated
  title: "..."
  client: "..."
  period: "..."
  role: "..."
  resultHeadline: "..."
---
```

The detail page is served at `/projects/<filename>` — the slug is the file name, no extra mapping needed. Run `npm run build` to verify the schema.

Schema of record: `src/content.config.ts`.

## CV PDF

The CV page (`/cv`) includes a print stylesheet for `window.print()`. To generate a proper PDF:
- Open `/cv` in a browser and use Print → Save as PDF
- Place the PDF at `public/cv/eliezer-meza-cv.pdf` and it will be served at `/cv/eliezer-meza-cv.pdf`
