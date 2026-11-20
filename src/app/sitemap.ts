import type { MetadataRoute } from 'next';

import { CONTENT_UPDATED, SITE_URL } from '@/lib/site-metadata';

const BASE = SITE_URL;

const routes = [
  '/',
  '/about',
  '/amenities',
  '/blog',
  '/blog/this-week-in-lone-mountain-heights',
  '/blog/complete-guide-living-lone-mountain-heights',
  '/careers',
  '/contact',
  '/faq/best-schools',
  '/faq/hoa-fees',
  '/faq/home-prices-2025',
  '/gallery',
  '/guide',
  '/homes',
  '/locations/lone-mountain-ranch',
  '/locations/desert-vista-estates',
  '/luxury',
  '/market-intelligence',
  '/market-report',
  '/neighborhood',
  '/neighborhoods',
  '/price-ranges/600k-800k',
  '/property-types/3-bedroom-homes',
  '/sales',
  '/schools',
  '/tools',
  '/valuation',
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((path) => ({
    url: `${BASE}${path === '/' ? '' : path}`,
    lastModified: CONTENT_UPDATED,
    changeFrequency: path === '/' || path === '/homes' ? 'daily' : 'weekly',
    priority: path === '/' ? 1 : path === '/homes' ? 0.9 : 0.7,
  }));
}
