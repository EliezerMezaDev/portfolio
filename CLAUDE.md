# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — dev server at `http://localhost:4321`
- `npm run build` — generates `public/og.png` via `scripts/generate-og.mjs`, then `astro build` → `dist/`
- `npm run preview` — serve the production build locally

No test suite, no linter configured. Deploy: static `dist/` (Netlify; live at https://eamz.netlify.app).

## Architecture

Astro 6 static site, Tailwind v4 (via `@tailwindcss/vite`, not `@astrojs/tailwind`), self-hosted fonts.

### i18n is entirely client-side — this is the load-bearing decision

There is **no `/es/` routing**. Every page is built once with English baked into the static HTML. `src/scripts/i18n-client.ts` (imported in `Base.astro`) runs on the client, detects language (localStorage `lang` → `navigator.language` → `en`), and rewrites text in place. `window.toggleLang()` (Header button) flips it.

The body is `visibility: hidden` until the script applies the correct language — prevents a flash of English for ES users. Re-applied on `astro:after-swap` (View Transitions).

Translatable content uses data attributes the client script reads:
- `data-i18n="dot.path"` — global UI strings, resolved against `src/i18n/en.md` / `es.md` frontmatter
- `data-bilingual` + `data-content-en` / `data-content-es` — a single text node (per-project)
- `data-bilingual-list` — JSON-encoded `string[]`
- `data-bilingual-tools` — JSON-encoded `{name, reason}[]`

`.astro` files render the **English** value inline (so static HTML/SEO is valid English) AND emit the ES value in a data attribute. When adding translatable text, do both.

`src/utils/md.ts` renders a tiny markdown subset (`**bold**`, `*italic*`) — that's why i18n strings can contain `**`.

### Content collection: `projects` (single bilingual file)

Defined in `src/content.config.ts`. Both languages live in **one** `.md` per project under `src/content/projects/` — top-level `en:` and `es:` frontmatter objects (schema `projectTranslation`), plus shared `order`, `type` (`own` | `third-party`), `stack`, optional `gallery`/`repo_url`/`preview_url`. There are no separate EN/ES files and no slug maps.

Detail pages: `src/pages/projects/[slug].astro` (slug = file id) → `layouts/Project.astro`.

### Note: README.md is partly outdated

It describes a `cases/` collection, two files per language, `esSlugMap`/`enSlugMap`, and Astro built-in i18n routing. None of that exists in the current code — the structure above (`projects/`, single bilingual file, client-side i18n) is authoritative.

### Layout / SEO

`layouts/Base.astro` centralizes `<head>`: canonical URL, OpenGraph/Twitter (image is `/og.png`), optional JSON-LD, font preloads. Page-specific pages pass `jsonLd`, `canonicalUrl`, etc.

Home sections live in `src/modules/home/components/sections/`; CV in `src/modules/cv/`.
