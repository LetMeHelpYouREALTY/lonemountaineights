// @ts-nocheck
// Local SEO Pack for Lone Mountain Heights Real Estate
// Optimized for "homes for sale Lone Mountain Heights" type searches

import { getAbsoluteImageUrl } from './cloudflare-images.js';

export const localSEOConfig = {
  // Primary location data
  location: {
    name: 'Lone Mountain Heights',
    city: 'Las Vegas',
    state: 'Nevada',
    stateAbbr: 'NV',
    zipCode: '89129',
    county: 'Clark County',
    coordinates: {
      latitude: 36.2569,
      longitude: -115.2419,
    },
    areaCode: '702',
    timeZone: 'America/Los_Angeles',
  },

  // Service area boundaries
  serviceArea: {
    primary: 'Lone Mountain Heights',
    secondary: [
      'Lone Mountain West',
      'Centennial Hills',
      'Shadow Hills',
      'El Capitan Ranch',
      'North Shore',
      'Providence',
      'Elkhorn Springs',
      'Painted Desert',
    ],
    zipCodes: ['89129', '89128', '89131', '89134'],
  },

  // High-value local keywords (70% of traffic)
  primaryKeywords: [
    'homes for sale Lone Mountain Heights',
    'Lone Mountain Heights real estate',
    'houses for sale Lone Mountain Heights Las Vegas',
    'Lone Mountain Heights homes for sale 89129',
    'Lone Mountain Heights real estate agent',
    'Lone Mountain Heights homes for sale Las Vegas',
    'Lone Mountain Heights real estate listings',
    'Lone Mountain Heights property values',
    'Lone Mountain Heights market trends',
    'Lone Mountain Heights home prices',
  ],

  // Long-tail keywords
  longTailKeywords: [
    'homes for sale near Lone Mountain Park Las Vegas',
    'Lone Mountain Heights gated community homes',
    'Lone Mountain Heights 89129 real estate',
    'Lone Mountain Heights homes with mountain views',
    'Lone Mountain Heights luxury homes for sale',
    'Lone Mountain Heights single family homes',
    'Lone Mountain Heights townhouses for sale',
    'Lone Mountain Heights condos for sale',
    'Lone Mountain Heights new construction homes',
    'Lone Mountain Heights homes with pools',
  ],

  // Mobile-first keywords
  mobileKeywords: [
    'homes for sale near me Lone Mountain Heights',
    'Lone Mountain Heights real estate near me',
    'Lone Mountain Heights homes for sale mobile',
    'Lone Mountain Heights real estate app',
    'Lone Mountain Heights property search mobile',
  ],

  // Local business information
  businessInfo: {
    name: 'Dr. Jan Duffy Real Estate Team',
    legalName: 'Lone Mountain Heights | Homes by Dr. Jan Duffy S.0197614',
    description:
      'Leading real estate team specializing in Lone Mountain Heights, Las Vegas. 500+ successful transactions in the Lone Mountain area.',
    phone: '702-222-1964',
    email: 'jan@lonemountainheights.com',
    website: 'https://lonemountainheights.com',
    address: {
      street: 'Lone Mountain Heights',
      city: 'Las Vegas',
      state: 'NV',
      zipCode: '89129',
    },
    hours: '24/7 Available',
    license: 'S.0197614',
    broker: 'Berkshire Hathaway HomeServices Nevada Properties',
  },
};

// Generate hyper-local schema markup
export function generateLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'RealEstateAgent',
    '@id': 'https://lonemountainheights.com/#realestateagent',
    name: localSEOConfig.businessInfo.name,
    description: localSEOConfig.businessInfo.description,
    url: localSEOConfig.businessInfo.website,
    telephone: localSEOConfig.businessInfo.phone,
    email: localSEOConfig.businessInfo.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: localSEOConfig.businessInfo.address.street,
      addressLocality: localSEOConfig.businessInfo.address.city,
      addressRegion: localSEOConfig.businessInfo.address.state,
      postalCode: localSEOConfig.businessInfo.address.zipCode,
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: localSEOConfig.location.coordinates.latitude,
      longitude: localSEOConfig.location.coordinates.longitude,
    },
    areaServed: {
      '@type': 'City',
      name: localSEOConfig.location.city,
      containedInPlace: {
        '@type': 'State',
        name: localSEOConfig.location.state,
      },
    },
    serviceType: 'Real Estate Services',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Real Estate Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Home Buying Services',
            description:
              'Expert assistance finding homes in Lone Mountain Heights',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Home Selling Services',
            description:
              'Professional home selling services for Lone Mountain Heights properties',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Home Valuation',
            description:
              'Accurate home valuation for Lone Mountain Heights properties',
          },
        },
      ],
    },
    makesOffer: {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: 'Lone Mountain Heights Real Estate Services',
        description:
          'Complete real estate services for Lone Mountain Heights, Las Vegas',
      },
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5.0',
      reviewCount: '500',
      bestRating: '5',
      worstRating: '1',
    },
    priceRange: '$$',
    currenciesAccepted: 'USD',
    paymentAccepted: 'Cash, Check, Credit Card, Financing',
    openingHours: 'Mo-Su 00:00-23:59',
    sameAs: [
      'https://www.facebook.com/lonemountainheightsrealestate',
      'https://www.instagram.com/lonemountainheightsrealestate',
      'https://www.linkedin.com/in/dr-jan-duffy-real-estate',
    ],
  };
}

// Generate location-specific schema
export function generateLocationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Place',
    '@id': 'https://lonemountainheights.com/#location',
    name: localSEOConfig.location.name,
    description:
      'Gated community in Las Vegas with 3-5 bedroom homes featuring mountain views',
    address: {
      '@type': 'PostalAddress',
      streetAddress: localSEOConfig.location.name,
      addressLocality: localSEOConfig.location.city,
      addressRegion: localSEOConfig.location.state,
      postalCode: localSEOConfig.location.zipCode,
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: localSEOConfig.location.coordinates.latitude,
      longitude: localSEOConfig.location.coordinates.longitude,
    },
    containedInPlace: {
      '@type': 'City',
      name: localSEOConfig.location.city,
      containedInPlace: {
        '@type': 'State',
        name: localSEOConfig.location.state,
      },
    },
    additionalProperty: [
      {
        '@type': 'PropertyValue',
        name: 'Community Type',
        value: 'Gated Community',
      },
      {
        '@type': 'PropertyValue',
        name: 'Development Years',
        value: '2001-2005',
      },
      {
        '@type': 'PropertyValue',
        name: 'Home Sizes',
        value: '2,500-4,400 sq ft',
      },
      {
        '@type': 'PropertyValue',
        name: 'Bedrooms',
        value: '3-5 bedrooms',
      },
    ],
  };
}

// Generate FAQ schema for local searches
export function generateLocalFAQSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is Lone Mountain Heights?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Lone Mountain Heights is a quiet, gated community in Las Vegas, Nevada (zip code 89129) developed between 2001-2005. It features 3-5 bedroom homes (2,500-4,400 sq ft) with mature landscaping and spectacular mountain views.',
        },
      },
      {
        '@type': 'Question',
        name: 'How much do homes cost in Lone Mountain Heights?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Home prices in Lone Mountain Heights vary by size and features, typically ranging from the mid-$400s to high-$700s for single-family homes, with luxury properties reaching $1M+. Condos start in the mid-$300s, and townhouses range from $400s to $600s.',
        },
      },
      {
        '@type': 'Question',
        name: 'What schools serve Lone Mountain Heights?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Lone Mountain Heights is served by excellent CCSD schools including Eileen Conners Elementary, Somerset Academy Lone Mountain, Walter Johnson Junior High, and Centennial High School. The area also has access to The Meadows School for private education.',
        },
      },
      {
        '@type': 'Question',
        name: 'What amenities are near Lone Mountain Heights?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Lone Mountain Heights is near Lone Mountain Discovery Park, Majestic Park, Trigono Hills Park, and the Lone Mountain Summit Trail. Shopping includes Centennial Center with Costco, Target, and Walmart. The area offers easy access to the 215 Beltway and Summerlin Parkway.',
        },
      },
      {
        '@type': 'Question',
        name: 'Who is the best real estate agent for Lone Mountain Heights?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Dr. Jan Duffy is the Head of the Berkshire Hathaway HomeServices Team for Lone Mountain Heights, with 500+ successful transactions in the Lone Mountain area. She knows every sale, every street, and every opportunity in the community.',
        },
      },
    ],
  };
}

// Generate breadcrumb schema
export function generateBreadcrumbSchema(breadcrumbs) {
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

// Generate property schema for listings
export function generatePropertySchema(property) {
  return {
    '@context': 'https://schema.org',
    '@type': 'RealEstateListing',
    name: `${property.bedrooms} Bedroom Home in Lone Mountain Heights`,
    description:
      property.insight ||
      `Beautiful ${property.bedrooms} bedroom home in Lone Mountain Heights`,
    url: `https://lonemountainheights.com/homes/${property.id}`,
    image: property.image,
    address: {
      '@type': 'PostalAddress',
      streetAddress: property.address,
      addressLocality: 'Las Vegas',
      addressRegion: 'NV',
      postalCode: '89129',
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: localSEOConfig.location.coordinates.latitude,
      longitude: localSEOConfig.location.coordinates.longitude,
    },
    offers: {
      '@type': 'Offer',
      price: property.price,
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
      validFrom: new Date().toISOString(),
    },
    numberOfRooms: property.bedrooms,
    numberOfBathroomsTotal: property.bathrooms,
    floorSize: {
      '@type': 'QuantitativeValue',
      value: property.sqft,
      unitCode: 'SQF',
    },
    additionalProperty: [
      {
        '@type': 'PropertyValue',
        name: 'Home Style',
        value: property.homeStyle,
      },
      {
        '@type': 'PropertyValue',
        name: 'Year Built',
        value: property.yearBuilt,
      },
      {
        '@type': 'PropertyValue',
        name: 'Garage Spaces',
        value: property.garage,
      },
      {
        '@type': 'PropertyValue',
        name: 'Pool',
        value: property.pool ? 'Yes' : 'No',
      },
    ],
  };
}

// Generate local business hours schema
export function generateBusinessHoursSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'RealEstateAgent',
    name: localSEOConfig.businessInfo.name,
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
          'Sunday',
        ],
        opens: '00:00',
        closes: '23:59',
        validFrom: '2025-01-01',
        validThrough: '2025-12-31',
      },
    ],
  };
}

// Generate service area schema
export function generateServiceAreaSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'RealEstateAgent',
    name: localSEOConfig.businessInfo.name,
    areaServed: localSEOConfig.serviceArea.secondary.map((area) => ({
      '@type': 'City',
      name: area,
      containedInPlace: {
        '@type': 'State',
        name: localSEOConfig.location.state,
      },
    })),
  };
}

// Generate review schema
export function generateReviewSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Review',
    itemReviewed: {
      '@type': 'RealEstateAgent',
      name: localSEOConfig.businessInfo.name,
    },
    author: {
      '@type': 'Person',
      name: 'Lone Mountain Heights Client',
    },
    reviewRating: {
      '@type': 'Rating',
      ratingValue: '5',
      bestRating: '5',
    },
    reviewBody:
      'Dr. Jan Duffy knows every sale, every street, every opportunity in Lone Mountain Heights. Her team leadership and local expertise made our home buying experience exceptional.',
  };
}

// Generate organization schema
export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'RealEstateAgent',
    name: localSEOConfig.businessInfo.name,
    alternateName: 'Lone Mountain Heights Real Estate Team',
    description: localSEOConfig.businessInfo.description,
    url: localSEOConfig.businessInfo.website,
    logo: 'https://lonemountainheights.com/logo.png',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: localSEOConfig.businessInfo.phone,
      contactType: 'customer service',
      areaServed: localSEOConfig.location.city,
      availableLanguage: 'English',
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: localSEOConfig.businessInfo.address.street,
      addressLocality: localSEOConfig.businessInfo.address.city,
      addressRegion: localSEOConfig.businessInfo.address.state,
      postalCode: localSEOConfig.businessInfo.address.zipCode,
      addressCountry: 'US',
    },
    sameAs: [
      'https://www.facebook.com/lonemountainheightsrealestate',
      'https://www.instagram.com/lonemountainheightsrealestate',
      'https://www.linkedin.com/in/dr-jan-duffy-real-estate',
    ],
  };
}

// Generate local SEO meta tags
export function generateLocalSEOMetaTags(pageType = 'home') {
  const baseKeywords = localSEOConfig.primaryKeywords.join(', ');
  const longTailKeywords = localSEOConfig.longTailKeywords.join(', ');
  const mobileKeywords = localSEOConfig.mobileKeywords.join(', ');

  const allKeywords = `${baseKeywords}, ${longTailKeywords}, ${mobileKeywords}`;

  return {
    title: `Lone Mountain Heights Real Estate | Dr. Jan Duffy Team | Las Vegas 89129`,
    description: `Find homes for sale in Lone Mountain Heights, Las Vegas 89129. Dr. Jan Duffy leads the Berkshire Hathaway HomeServices Nevada Properties team as your complete real estate partner. Expert local knowledge.`,
    keywords: allKeywords,
    canonical: `https://lonemountainheights.com/${pageType}`,
    openGraph: {
      title: `Lone Mountain Heights Real Estate | Dr. Jan Duffy Team`,
      description: `Expert real estate services for Lone Mountain Heights, Las Vegas. 500+ successful transactions.`,
      type: 'website',
      url: `https://lonemountainheights.com/${pageType}`,
      siteName: 'Lone Mountain Heights Real Estate',
      locale: 'en_US',
      image: getAbsoluteImageUrl('/images/og/og-image.png'),
    },
    twitter: {
      card: 'summary_large_image',
      title: `Lone Mountain Heights Real Estate | Dr. Jan Duffy Team`,
      description: `Expert real estate services for Lone Mountain Heights, Las Vegas. 500+ successful transactions.`,
      image: getAbsoluteImageUrl('/images/og/og-image.png'),
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

// Generate sitemap data
export function generateSitemapData() {
  return {
    pages: [
      {
        url: '/',
        changefreq: 'daily',
        priority: 1.0,
        lastmod: new Date().toISOString(),
      },
      {
        url: '/homes',
        changefreq: 'hourly',
        priority: 0.9,
        lastmod: new Date().toISOString(),
      },
      {
        url: '/valuation',
        changefreq: 'weekly',
        priority: 0.8,
        lastmod: new Date().toISOString(),
      },
      {
        url: '/sales',
        changefreq: 'daily',
        priority: 0.8,
        lastmod: new Date().toISOString(),
      },
      {
        url: '/neighborhoods',
        changefreq: 'weekly',
        priority: 0.7,
        lastmod: new Date().toISOString(),
      },
      {
        url: '/about',
        changefreq: 'monthly',
        priority: 0.6,
        lastmod: new Date().toISOString(),
      },
      {
        url: '/contact',
        changefreq: 'monthly',
        priority: 0.6,
        lastmod: new Date().toISOString(),
      },
    ],
  };
}

// Generate local business JSON-LD
export function generateLocalBusinessJSONLD() {
  return {
    '@context': 'https://schema.org',
    '@type': 'RealEstateAgent',
    name: localSEOConfig.businessInfo.name,
    description: localSEOConfig.businessInfo.description,
    url: localSEOConfig.businessInfo.website,
    telephone: localSEOConfig.businessInfo.phone,
    email: localSEOConfig.businessInfo.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: localSEOConfig.businessInfo.address.street,
      addressLocality: localSEOConfig.businessInfo.address.city,
      addressRegion: localSEOConfig.businessInfo.address.state,
      postalCode: localSEOConfig.businessInfo.address.zipCode,
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: localSEOConfig.location.coordinates.latitude,
      longitude: localSEOConfig.location.coordinates.longitude,
    },
    areaServed: {
      '@type': 'City',
      name: localSEOConfig.location.city,
      containedInPlace: {
        '@type': 'State',
        name: localSEOConfig.location.state,
      },
    },
    serviceType: 'Real Estate Services',
    priceRange: '$$',
    currenciesAccepted: 'USD',
    paymentAccepted: 'Cash, Check, Credit Card, Financing',
    openingHours: 'Mo-Su 00:00-23:59',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5.0',
      reviewCount: '500',
      bestRating: '5',
      worstRating: '1',
    },
  };
}

// Export all schema functions
export const schemaGenerators = {
  localBusiness: generateLocalBusinessSchema,
  location: generateLocationSchema,
  localFAQ: generateLocalFAQSchema,
  breadcrumb: generateBreadcrumbSchema,
  property: generatePropertySchema,
  businessHours: generateBusinessHoursSchema,
  serviceArea: generateServiceAreaSchema,
  review: generateReviewSchema,
  organization: generateOrganizationSchema,
  localBusinessJSONLD: generateLocalBusinessJSONLD,
};

// Export configuration
export default localSEOConfig;
