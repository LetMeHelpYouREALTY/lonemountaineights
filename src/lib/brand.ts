import { SITE_URL } from '@/lib/site-metadata';

/** Hosted brand assets — keep crawlable absolute URLs for JSON-LD. */
export const BRAND_ASSETS = {
  agentPhoto: `${SITE_URL}/images/agents/dr-jan-duffy.jpg`,
  /** Portrait favicon used as RealEstateAgent.logo (practice brand). */
  agentLogo: `${SITE_URL}/images/icons/favicon.png`,
  /** Square ≥112px BHHS lockup for Organization.logo (Google logo guidelines). */
  organizationLogo: `${SITE_URL}/images/logos/bhhs-organization-logo.png`,
  /** Horizontal BHHS Nevada wordmark for footer / visible trust. */
  brokerWordmark: '/images/logos/bhhs-nevada.png',
  brokerMark: '/images/logos/bhhs-mark.png',
} as const;

export const BROKERAGE = {
  name: 'Berkshire Hathaway HomeServices Nevada Properties',
  shortName: 'BHHS Nevada Properties',
  url: 'https://www.bhhsnv.com/',
  nationalUrl: 'https://www.berkshirehathawayhomeservices.com',
  brokerOfRecord: 'Forrest Barbee',
  officeAddress: '3185 St. Rose Parkway, Suite 100, Henderson, NV 89052',
} as const;

/**
 * Cross-platform identity for Person / RealEstateAgent sameAs (E-E-A-T + GEO).
 * Only profiles that are Dr. Jan Duffy herself — the brokerage is linked via
 * worksFor/memberOf, and association pages (e.g. Las Vegas REALTORS®) are not her.
 */
export const AGENT_SAME_AS = [
  'https://g.co/kgs/uwtzcWj',
  'https://www.instagram.com/drjanduffy/',
  'https://www.facebook.com/DrJanDuffyRealtorCentennialHills/',
  'https://www.youtube.com/@DrDuffy',
  'https://x.com/drjanduffy',
  'https://www.tiktok.com/@dr.janduffy',
] as const;

export const ORGANIZATION_SAME_AS = [
  BROKERAGE.url,
  BROKERAGE.nationalUrl,
] as const;