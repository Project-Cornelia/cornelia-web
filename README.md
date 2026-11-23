# Project Cornelia — Website

Website for **Project Cornelia AINA Foundation**, a women-led organisation working to make every
woman's voice central to modern democratic discourse.

Built with **Next.js 15 (App Router) + Payload CMS 3**, with **Cloudinary** for media storage and a
**Turso (SQLite/libsql)** database.

## Tech stack

| Layer      | Technology                                          |
| ---------- | --------------------------------------------------- |
| Framework  | Next.js 15 (App Router)                             |
| UI         | React 19, Tailwind CSS 3                            |
| CMS        | Payload CMS 3 (`@payloadcms/next`, `@payloadcms/db-sqlite`) |
| Rich text  | Lexical editor                                      |
| Database   | Turso (SQLite via libsql)                           |
| Media      | Cloudinary (via `@payloadcms/plugin-cloud-storage`) |

## Getting started

```bash
# 1. Install dependencies
npm install

# 2. Configure environment variables
cp .env.example .env.local
# Fill in .env.local (see "Environment variables" below)

# 3. Run the dev server
npm run dev
# http://localhost:3000
```

### Production build

```bash
npm run build
npm run start
```

## Environment variables

Copy `.env.example` to `.env.local` (local) or set these in your hosting platform:

| Variable                        | Required | Description                                     |
| ------------------------------- | -------- | ----------------------------------------------- |
| `NEXT_PUBLIC_SITE_URL`          | yes      | Canonical site URL (no trailing slash)          |
| `PAYLOAD_SECRET`                | yes      | Strong random secret (`openssl rand -base64 32`) |
| `TURSO_DB_URL`                  | yes      | Turso/libsql database URL                       |
| `AUTH_TOKEN`                    | yes      | Turso database auth token                       |
| `CLOUDINARY_CLOUD_NAME`         | yes      | Cloudinary cloud name                           |
| `CLOUDINARY_API_KEY`            | yes      | Cloudinary API key                              |
| `CLOUDINARY_API_SECRET`         | yes      | Cloudinary API secret                           |
| `NEXT_PUBLIC_MAINTENANCE_MODE`  | no       | Set `true` to serve the `/maintenance` page     |
| `NEXT_PUBLIC_YOUTUBE_VIDEO_ID`  | no       | YouTube video ID/URL for the homepage video     |

Never commit `.env.local` or any file containing secrets.

## Content management

Content is managed in the Payload admin at `/admin`. Collections:

- **Users** — admin accounts
- **Publications** (`Articles & Reports`) — blog posts, research reports, and research articles
- **Resources** (`Toolkits`) — downloadable guides and toolkits
- **Members** — team member profiles
- **Initiatives** (`Initiatives & Events`) — initiatives and events
- **Media** — images uploaded to Cloudinary
- **Messages** — contact form submissions

The public pages pull from these collections via the local API (`src/lib/cms.js`) with a fallback to
`public/data/*.json` seed data while a collection is empty.

## Pages

- `/` — Home
- `/about`, `/our-work`, `/initiatives`, `/resources`, `/members`
- `/contact`, `/donations`, `/privacy`, `/terms`
- `/resources/[section]/[slug]` — article/report detail pages

## Deployment

The app is designed to run on any Node.js host (Vercel, Netlify, a VPS, etc.). Ensure all required
environment variables are set and run `npm run build && npm start`. The Payload admin and REST API are
served from the same Next.js app.
