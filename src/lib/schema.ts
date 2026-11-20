// @ts-nocheck
// Schema Markup Generator for Real Estate Rich Snippets
// NAP matches Google Business Profile - Dr. Jan Duffy, License S.0197614.LLC
// Berkshire Hathaway HomeServices Nevada Properties

import { generateSiteGraphSchema, GEO_COORDINATES } from './structured-data';

const NAP = {
  name: 'Dr. Jan Duffy',
  telephone: '+1-702-500-1955',
  email: 'DrDuffySells@LoneMountainHeights.com',
  address: {
    streetAddress: 'Lone Mountain Heights',
    addressLocality: 'Las Vegas',
    addressRegion: 'NV',
    postalCode: '89129',
    addressCountry: 'US',
  },
  broker: 'Berkshire Hathaway HomeServices Nevada Properties',
  license: 'S.0197614.LLC',
  hours: 'Available 7 Days a Week',
  fullAddress: 'Lone Mountain Heights, Las Vegas, NV 89129',
  telHref: 'tel:+17025001955',
  telDisplay: '702-500-1955',
  smsHref: 'sms:7025001955',
};

// GBP URLs - update when actual Place ID is available for View Google Reviews
// Calendly – Dr. Jan's scheduling link
export { CALENDLY_URL } from './calendly';

export const GBP_URLS = {
  directions:
    'https://www.google.com/maps/dir/?api=1&destination=Lone+Mountain+Heights,+Las+Vegas,+NV+89129',
  reviews:
    'https://www.google.com/maps/place/Lone+Mountain+Heights,+Las+Vegas,+NV+89129/@36.2569,-115.2419,15z',
  mapEmbed:
    'https://maps.google.com/maps?q=Lone+Mountain+Heights,+Las+Vegas,+NV+89129&t=&z=14&ie=UTF8&iwloc=&output=embed',
};

export function generateRealEstateSchema(_property) {
  return {
    '@context': 'https://schema.org',
    '@type': 'RealEstateAgent',
    name: NAP.name,
    description:
      'Lone Mountain Heights Real Estate Expert - 500+ Las Vegas Transactions',
    url: 'https://www.lonemountainheights.com',
    telephone: NAP.telephone,
    email: NAP.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: NAP.address.streetAddress,
      addressLocality: NAP.address.addressLocality,
      addressRegion: NAP.address.addressRegion,
      postalCode: NAP.address.postalCode,
      addressCountry: NAP.address.addressCountry,
    },
    areaServed: {
      '@type': 'City',
      name: 'Las Vegas',
      containedInPlace: {
        '@type': 'State',
        name: 'Nevada',
      },
    },
    serviceType: 'Real Estate Services',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Lone Mountain Heights Real Estate Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Home Sales',
            description:
              'Expert real estate services for selling homes in Lone Mountain Heights',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Home Purchases',
            description:
              'Professional assistance buying homes in Lone Mountain Heights',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Home Valuation',
            description: 'Instant home value estimates with market analysis',
          },
        },
      ],
    },
  };
}

export function generatePropertySchema(property) {
  return {
    '@context': 'https://schema.org',
    '@type': 'RealEstateListing',
    name: property.address,
    description: `${property.bedrooms} bedroom, ${property.bathrooms} bathroom home in Lone Mountain Heights`,
    url: `https://www.lonemountainheights.com/homes/${property.id}`,
    image: property.image,
    offers: {
      '@type': 'Offer',
      price: property.price,
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
      validFrom: new Date().toISOString(),
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: property.address,
      addressLocality: 'Las Vegas',
      addressRegion: 'NV',
      postalCode: NAP.address.postalCode,
      addressCountry: 'US',
    },
    floorSize: {
      '@type': 'QuantitativeValue',
      value: property.sqft,
      unitCode: 'SQF',
    },
    numberOfRooms: property.bedrooms,
    numberOfBathroomsTotal: property.bathrooms,
    numberOfBedrooms: property.bedrooms,
    additionalProperty: [
      {
        '@type': 'PropertyValue',
        name: 'Lot Size',
        value: property.lotSize,
      },
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
    ],
    amenityFeature: property.pool
      ? [
          {
            '@type': 'LocationFeatureSpecification',
            name: 'Swimming Pool',
            value: true,
          },
        ]
      : [],
    geo: {
      '@type': 'GeoCoordinates',
      latitude: GEO_COORDINATES.latitude,
      longitude: GEO_COORDINATES.longitude,
    },
    provider: {
      '@type': 'RealEstateAgent',
      '@id': 'https://www.lonemountainheights.com/#realestate-agent',
    },
  };
}

export function generateLocalBusinessSchema() {
  return generateSiteGraphSchema({
    name: NAP.name,
    telephone: NAP.telephone,
    email: NAP.email,
    license: NAP.license,
    broker: NAP.broker,
    address: NAP.address,
    gbpMapUrl: GBP_URLS.reviews,
  });
}

export { NAP };

export {
  generateBreadcrumbSchema,
  generateFAQSchema,
  generatePlaceSchema,
  generateSiteGraphSchema,
  generateWebPageSchema,
  GEO_COORDINATES,
  SCHEMA_IDS,
} from './structured-data';

// Real Estate specific FAQ data