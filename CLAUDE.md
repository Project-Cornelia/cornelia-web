# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev          # Dev server at http://localhost:3000
npm run build        # Production build (runs next-sitemap postbuild)
npm run start        # Run production build
npm run lint         # ESLint
payload generate:importmap  # Regenerate PayloadCMS import map (run after adding collections/globals)
```

Environment setup:
```bash
cp .env.example .env.local
```

## Architecture

**Dual-app structure** — Next.js App Router with two route groups:

- `src/app/(frontend)/` — Public website (all visitor-facing pages)
- `src/app/(payload)/` — PayloadCMS admin at `/admin` and API at `/api/[...payload]`

**PayloadCMS** (`src/payload.config.js`) runs embedded in Next.js via `withPayload()` wrapper in `next.config.mjs`. Uses SQLite (`payload.db`) via `@payloadcms/db-sqlite`. Currently has two collections: `users` (auth) and `articles`. The CMS is the Phase 3 target — frontend pages currently read from static JSON files, not the CMS.

**Frontend data flow** — Static content lives in `public/data/` as JSON files (`publications.json`, `resources.json`). Pages fetch these at runtime via `fetch('/data/filename.json')`. This is the interim pattern before CMS integration.

**Maintenance mode** — `src/middleware.js` checks `NEXT_PUBLIC_MAINTENANCE_MODE=true` and rewrites all routes to `/maintenance`. Toggle this env var to enable/disable Phase 0.

**Design system** — Tailwind extended with a full Material Design 3-style token set in `tailwind.config.js`. Key tokens:
- `bg-surface` / `text-on-surface` — page backgrounds and body text
- `bg-primary` / `text-primary` — brand color (`#785249` warm brown)
- `font-body-md` / `font-headline-lg` etc. — typed font utilities (Libre Caslon Text + SeoulHangang)
- `pt-section-padding-desktop` / `pt-section-padding-mobile` — section spacing

**Component pattern** — All page components are `'use client'` and compose `<Header>` + section components + `<Footer>`. Section components use `useScrollReveal()` hook (`src/hooks/useScrollReveal.js`) for IntersectionObserver-based fade-in animations.

**Phased redesign** — The project is mid-redesign:
- Phase 0: Maintenance page (done, toggled via env)
- Phase 1: Homepage (done — `HeroSection`, `TimelineSection`, `ThreePillarsSection`, `PublicationsSection`)
- Phase 2: Other pages (in progress)
- Phase 3: CMS integration (PayloadCMS wired up, collections TBD)
- Phase 4: Article publishing + research repository

## Key Files

| File | Purpose |
|------|---------|
| `src/payload.config.js` | CMS collections, globals, DB adapter |
| `src/middleware.js` | Maintenance mode redirect logic |
| `tailwind.config.js` | Full design token definitions |
| `src/components/Header.js` | Fixed glass-morphism nav with logo |
| `src/components/Footer.js` | Footer with social/contact links |
| `public/data/publications.json` | Article data (read by publications pages) |
| `public/data/resources.json` | Resources data |
| `.kiro/specs/website-redesign/requirements.md` | Full phased redesign spec |

## Adding New Content to Publications

Publications are loaded from `public/data/publications.json`. Each article needs: `id`, `title`, `slug`, `author`, `date`, `category`, `excerpt`, `image`, `content` (HTML string).

The dynamic route `src/app/(frontend)/publications/[slug]/page.js` finds articles by matching `slug` field.

## PayloadCMS Notes

- Admin URL: `http://localhost:3000/admin`
- After modifying collections or globals in `payload.config.js`, run `npm run generate:importmap`
- DB file `payload.db` is local SQLite — not committed to git
- `PAYLOAD_SECRET` env var required in production (defaults to a hardcoded dev key)
