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

export function getBreadcrumbs(canonical: string, h1: string): Crumb[] {
  const segments = canonical.split('/').filter(Boolean);
  const crumbs: Crumb[] = [{ name: 'Home', href: '/' }];
  let path = '';
  for (let i = 0; i < segments.length; i++) {
    path += `/${segments[i]}`;
    const isLast = i === segments.length - 1;
    crumbs.push({
      name: isLast ? h1.split('|')[0].trim() : segments[i].replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase()),
      ...(isLast ? {} : { href: path }),
    });
  }
  return crumbs;
}
