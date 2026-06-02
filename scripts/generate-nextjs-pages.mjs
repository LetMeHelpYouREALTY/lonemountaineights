#!/usr/bin/env node
/**
 * Generates Next.js App Router pages from archived SvelteKit routes.
 * Extracts title/description from svelte:head and creates page.tsx stubs.
 */
import { readFileSync, writeFileSync, mkdirSync, existsSync, readdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = fileURLToPath(new URL('.', import.meta.url));
const ROOT = join(__dirname, '..');
const ARCHIVE = join(ROOT, '_archive', 'svelte-routes');
const APP = join(ROOT, 'src', 'app');

function walk(dir, acc = []) {
  for (const entry of readdirSyncSafe(dir)) {
    const full = join(dir, entry);
    if (entry === '+page.svelte') acc.push(dirname(full));
    else if (!entry.startsWith('+') && !entry.includes('.')) {
      try {
        walk(full, acc);
      } catch {
        /* not a dir */
      }
    }
  }
  return acc;
}

function readdirSyncSafe(dir) {
  try {
    return readdirSync(dir);
  } catch {
    return [];
  }
}
function extractMeta(content) {
  const titleMatch = content.match(/<title>([^<]+)<\/title>/);
  const descMatch = content.match(/<meta\s+name="description"\s+content="([^"]+)"/);
  const h1Match = content.match(/<h1[^>]*>([^<]+)<\/h1>/);
  return {
    title: titleMatch?.[1]?.trim() || null,
    description: descMatch?.[1]?.trim() || null,
    h1: h1Match?.[1]?.trim() || null,
  };
}

function routeFromArchivePath(archivePath) {
  const rel = archivePath.replace(ARCHIVE, '').replace(/\\/g, '/');
  return rel || '/';
}

function slugToTitle(slug) {
  return slug
    .split('-')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');
}

function generatePage(route, meta) {
  const segments = route === '/' ? [] : route.split('/').filter(Boolean);
  const lastSegment = segments[segments.length - 1] || 'home';
  const defaultTitle = `${slugToTitle(lastSegment)} | Lone Mountain Heights | Dr. Jan Duffy`;
  const title = meta.title || defaultTitle;
  const description =
    meta.description ||
    `Expert Lone Mountain Heights real estate information from Dr. Jan Duffy, Las Vegas 89129.`;
  const h1 = meta.h1 || slugToTitle(lastSegment);

  return `import type { Metadata } from 'next';
import Link from 'next/link';
import { PageContainer } from '@/components/shared/JsonLd';
import { RealScoutOfficeListings } from '@/components/shared/JsonLd';
import { NAP } from '@/lib/schema';

export const metadata: Metadata = {
  title: ${JSON.stringify(title.replace(' | Lone Mountain Heights | Dr. Jan Duffy', '').replace(' | Dr. Jan Duffy', ''))},
  description: ${JSON.stringify(description)},
  alternates: { canonical: 'https://lonemountainheights.com${route === '/' ? '' : route}' },
};

export default function Page() {
  return (
    <PageContainer>
      <h1 className="mb-4 text-3xl font-bold text-[var(--heading-color)]">${h1.replace(/'/g, "\\'")}</h1>
      <p className="mb-6 leading-relaxed text-[var(--text-color)]">
        ${description.replace(/'/g, "\\'")}
      </p>
      <p className="mb-8 text-[var(--text-light)]">
        Contact {NAP.name} at{' '}
        <a href={NAP.telHref} className="font-semibold text-[var(--accent-color)]">{NAP.telDisplay}</a>
        {' '}or{' '}
        <Link href="/contact" className="font-semibold text-[var(--accent-color)]">schedule a consultation</Link>.
      </p>
      <section className="my-8">
        <h2 className="mb-4 text-xl font-semibold text-[var(--heading-color)]">Current Listings</h2>
        <RealScoutOfficeListings />
      </section>
    </PageContainer>
  );
}
`;
}

const routes = walk(ARCHIVE);
let created = 0;

for (const archivePath of routes) {
  const route = routeFromArchivePath(archivePath);
  if (route === '/') continue; // homepage already exists

  const sveltePath = join(archivePath, '+page.svelte');
  let content = '';
  try {
    content = readFileSync(sveltePath, 'utf-8');
  } catch {
    continue;
  }

  const meta = extractMeta(content);
  const segments = route.split('/').filter(Boolean);
  const pageDir = join(APP, ...segments);
  const pagePath = join(pageDir, 'page.tsx');

  if (existsSync(pagePath)) continue;

  mkdirSync(pageDir, { recursive: true });
  writeFileSync(pagePath, generatePage(route, meta));
  created++;
  console.log(`Created ${pagePath}`);
}

console.log(`\nDone. Created ${created} pages.`);
