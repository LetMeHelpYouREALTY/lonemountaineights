import {
  amenitiesFAQs,
  blogFAQs,
  careersFAQs,
  guideFAQs,
  locationsFAQs,
  marketReportFAQs,
  neighborhoodsFAQs,
  priceRangeFAQs,
  propertyTypeFAQs,
  salesFAQs,
  schoolsFAQs,
  toolsFAQs,
} from '@/lib/faqs';
import { pageConfigs, type PageConfig } from '@/lib/page-config';

type FAQ = { question: string; answer: string };

const faqMap: Record<string, FAQ[]> = {
  amenitiesFAQs,
  neighborhoodsFAQs,
  schoolsFAQs,
  guideFAQs,
  marketReportFAQs,
  salesFAQs,
  toolsFAQs,
  careersFAQs,
  blogFAQs,
  priceRangeFAQs,
  propertyTypeFAQs,
  locationsLoneMountainRanch: locationsFAQs['lone-mountain-ranch'],
  locationsDesertVista: locationsFAQs['desert-vista-estates'],
};

export function getPageConfig(slug: string): PageConfig | undefined {
  return pageConfigs[slug];
}

export function getPageFaqs(faqKey?: string): FAQ[] | undefined {
  if (!faqKey) return undefined;
  return faqMap[faqKey];
}

type Crumb = { name: string; href?: string };

/** Parent crumbs for nested routes; only /blog exists as its own page, the rest map to hubs. */
const SECTION_HUBS: Record<string, Crumb | null> = {
  blog: { name: 'Blog', href: '/blog' },
  locations: { name: 'Neighborhoods', href: '/neighborhoods' },
  'price-ranges': { name: 'Homes for Sale', href: '/homes' },
  'property-types': { name: 'Homes for Sale', href: '/homes' },
  faq: null,
};

export function getBreadcrumbs(canonical: string, h1: string): Crumb[] {
  const segments = canonical.split('/').filter(Boolean);
  const crumbs: Crumb[] = [{ name: 'Home', href: '/' }];
  if (segments.length > 1) {
    const hub = SECTION_HUBS[segments[0]];
    if (hub) crumbs.push(hub);
  }
  crumbs.push({ name: h1.split('|')[0].trim() });
  return crumbs;
}
