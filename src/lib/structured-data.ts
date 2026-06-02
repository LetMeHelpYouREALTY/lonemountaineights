/**
 * JSON-LD structured data — RealEstateAgent entity graph, WebPage, Place, FAQ (AEO).
 * Aligned with schema.org + Google Search Central FAQ guidance (2025–2026).
 */

import { SITE_URL } from '@/lib/site-metadata';

export const SCHEMA_IDS = {
  agent: `${SITE_URL}/#realestate-agent`,
  person: `${SITE_URL}/#person`,
  organization: `${SITE_URL}/#organization`,
  website: `${SITE_URL}/#website`,
} as const;

/** Lone Mountain Heights, Las Vegas 89129 — GBP map pin area */
export const GEO_COORDINATES = {
  latitude: 36.2569,
  longitude: -115.2419,
};

export const AREA_SERVED_PLACES = [
  { name: 'Lone Mountain Heights', type: 'Place' as const },
  { name: 'Lone Mountain Ranch', type: 'Place' as const },
  { name: 'Desert Vista Estates', type: 'Place' as const },
  { name: 'Las Vegas', type: 'City' as const },
  { name: '89129', type: 'PostalCode' as const },
];

type FAQ = { question: string; answer: string };

type WebPageSchemaOptions = {
  name: string;
  description: string;
  path: string;
  includeSpeakable?: boolean;
};

type PlaceSchemaOptions = {
  name: string;
  description: string;
  path: string;
};

/** Sitewide @graph: RealEstateAgent + Organization + WebSite + Person (entity foundation for SEO/geo/AEO). */
export function generateSiteGraphSchema(nap: {
  name: string;
  telephone: string;
  email: string;
  license: string;
  broker: string;
  address: {
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
  };
  gbpReviewsUrl: string;
  gbpMapUrl: string;
}) {
  const logoUrl = `${SITE_URL}/images/icons/favicon.png`;
  const agentPhoto = `${SITE_URL}/images/agents/dr-jan-duffy.jpg`;

  const areaServed = AREA_SERVED_PLACES.map((place) => ({
    '@type': place.type,
    name: place.name,
    ...(place.type === 'Place' && place.name === 'Lone Mountain Heights'
      ? {
          geo: {
            '@type': 'GeoCoordinates',
            latitude: GEO_COORDINATES.latitude,
            longitude: GEO_COORDINATES.longitude,
          },
        }
      : {}),
  }));

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'RealEstateAgent',
        '@id': SCHEMA_IDS.agent,
        name: nap.name,
        description:
          'Lone Mountain Heights real estate expert serving Las Vegas 89129. 500+ Las Vegas transactions. Buy, sell, and home valuations in Lone Mountain Ranch, Desert Vista Estates, and surrounding communities.',
        url: SITE_URL,
        telephone: nap.telephone,
        email: nap.email,
        image: agentPhoto,
        logo: logoUrl,
        address: {
          '@type': 'PostalAddress',
          streetAddress: nap.address.streetAddress,
          addressLocality: nap.address.addressLocality,
          addressRegion: nap.address.addressRegion,
          postalCode: nap.address.postalCode,
          addressCountry: nap.address.addressCountry,
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: GEO_COORDINATES.latitude,
          longitude: GEO_COORDINATES.longitude,
        },
        hasMap: nap.gbpMapUrl,
        areaServed,
        serviceType: [
          'Residential real estate',
          'Home buyer representation',
          'Home seller representation',
          'Home valuation',
          'Market analysis',
        ],
        knowsAbout: [
          'Lone Mountain Heights homes for sale',
          'Las Vegas 89129 real estate',
          'Lone Mountain Ranch',
          'Desert Vista Estates',
          'Home valuation',
          'Luxury homes Las Vegas',
        ],
        hasCredential: {
          '@type': 'EducationalOccupationalCredential',
          credentialCategory: 'Real Estate License',
          name: `Nevada Real Estate License ${nap.license}`,
        },
        memberOf: { '@id': SCHEMA_IDS.organization },
        sameAs: [nap.gbpReviewsUrl, 'https://www.berkshirehathawayhomeservices.com'],
        priceRange: '$$',
        potentialAction: {
          '@type': 'ReserveAction',
          name: 'Schedule a consultation',
          target: `${SITE_URL}/contact`,
        },
      },
      {
        '@type': 'Person',
        '@id': SCHEMA_IDS.person,
        name: nap.name,
        jobTitle: 'Real Estate Agent — Lone Mountain Heights Specialist',
        url: `${SITE_URL}/about`,
        image: agentPhoto,
        telephone: nap.telephone,
        email: nap.email,
        worksFor: { '@id': SCHEMA_IDS.organization },
        knowsAbout: [
          'Lone Mountain Heights real estate',
          'Las Vegas home sales',
          '89129 neighborhoods',
        ],
      },
      {
        '@type': 'Organization',
        '@id': SCHEMA_IDS.organization,
        name: nap.broker,
        url: 'https://www.berkshirehathawayhomeservices.com',
        logo: logoUrl,
        employee: { '@id': SCHEMA_IDS.person },
      },
      {
        '@type': 'WebSite',
        '@id': SCHEMA_IDS.website,
        name: 'Lone Mountain Heights Real Estate | Dr. Jan Duffy',
        url: SITE_URL,
        description:
          'Homes for sale in Lone Mountain Heights, Las Vegas 89129. Dr. Jan Duffy, Berkshire Hathaway HomeServices.',
        publisher: { '@id': SCHEMA_IDS.agent },
        inLanguage: 'en-US',
        potentialAction: {
          '@type': 'SearchAction',
          target: {
            '@type': 'EntryPoint',
            urlTemplate: `${SITE_URL}/homes?q={search_term_string}`,
          },
          'query-input': 'required name=search_term_string',
        },
      },
    ],
  };
}

export function generateFAQSchema(faqs: FAQ[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

export function generateBreadcrumbSchema(
  breadcrumbs: { name: string; url: string }[],
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.name,
      item: crumb.url,
    })),
  };
}

/** WebPage + optional Speakable for FAQ/AEO (Google AI Overviews / voice extraction). */
export function generateWebPageSchema({
  name,
  description,
  path,
  includeSpeakable = false,
}: WebPageSchemaOptions) {
  const url = path === '/' ? SITE_URL : `${SITE_URL}${path}`;

  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${url}#webpage`,
    url,
    name,
    description,
    isPartOf: { '@id': SCHEMA_IDS.website },
    about: {
      '@type': 'Place',
      name: 'Lone Mountain Heights',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Las Vegas',
        addressRegion: 'NV',
        postalCode: '89129',
        addressCountry: 'US',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: GEO_COORDINATES.latitude,
        longitude: GEO_COORDINATES.longitude,
      },
    },
    ...(includeSpeakable
      ? {
          speakable: {
            '@type': 'SpeakableSpecification',
            cssSelector: ['#faq-heading', '.faq-answer-text'],
          },
        }
      : {}),
  };
}

/** Neighborhood / location guides — Place schema for local geo discovery. */
export function generatePlaceSchema({ name, description, path }: PlaceSchemaOptions) {
  const url = `${SITE_URL}${path}`;

  return {
    '@context': 'https://schema.org',
    '@type': 'Place',
    '@id': `${url}#place`,
    name,
    description,
    url,
    containedInPlace: {
      '@type': 'Place',
      name: 'Lone Mountain Heights',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Las Vegas',
        addressRegion: 'NV',
        postalCode: '89129',
        addressCountry: 'US',
      },
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: GEO_COORDINATES.latitude,
      longitude: GEO_COORDINATES.longitude,
    },
  };
}
