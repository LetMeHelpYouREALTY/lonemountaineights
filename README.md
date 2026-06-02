# Lone Mountain Heights | Dr. Jan Duffy Real Estate

Next.js 15 App Router site for **Lone Mountain Heights, Las Vegas 89129** — hyperlocal real estate with SEO, GEO, and AEO optimizations.

**Agent:** Dr. Jan Duffy · License S.0197614.LLC · Berkshire Hathaway HomeServices Nevada Properties

## Stack

- **Next.js 15** (App Router, React 19, TypeScript)
- **Tailwind CSS 4**
- **RealScout** widgets (global script + custom elements)
- **Cloudflare Images** (optional CDN via env vars)
- **Cloudflare Worker** (`workers/realscout-global-injector`) for multi-site RealScout injection

## Develop

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000)

## Build

```bash
pnpm build
pnpm start
```

For Vercel production builds, use `vercel build` per project standards.

## Environment

Copy `.env.example` to `.env.local`:

| Variable | Description |
|----------|-------------|
| `NEXT_PUBLIC_CF_IMAGES_ENABLED` | `true` to use Cloudflare Images CDN |
| `NEXT_PUBLIC_CF_ACCOUNT_HASH` | Cloudflare Images account hash |

## Project structure

```
src/
├── app/              # App Router pages (migrated from SvelteKit)
├── components/       # React components (layouts, sections, shared)
├── lib/              # Schema, FAQs, SEO, Cloudflare image helpers
└── styles/           # Global CSS supplements
public/               # Static assets (sitemap, robots, images)
_archive/svelte-routes/  # Original SvelteKit pages (reference during migration)
workers/              # Cloudflare Workers
scripts/              # Deploy & migration scripts
```

## Migration notes

This site was converted from SvelteKit to Next.js. Original Svelte pages are archived in `_archive/svelte-routes/`. Run `node scripts/generate-nextjs-pages.mjs` to regenerate stub pages from the archive.

Individual pages can be enriched by porting content from the archive into their `src/app/**/page.tsx` files.

## SEO

- LocalBusiness / RealEstateAgent JSON-LD on all pages (root layout)
- Per-page metadata via `export const metadata`
- Dynamic `sitemap.ts` and `robots.ts`
- FAQ schema for AEO on homepage and FAQ routes
