import type { NextConfig } from 'next';

/**
 * CSP for RealScout (em.realscout.com script + www/drjanduffy.realscout.com API),
 * Calendly, Google Fonts CSS the widget loads, Mapbox autofill, and Google Maps iframe.
 * Also allows the Follow Up Boss tracker (widgetbe.com), which shows Follow Up
 * Boss's call-or-text box; Dr. Jan chose to keep that box on (Nov 21 2026).
 */
const contentSecurityPolicy = [
  "default-src 'self'",
  [
    "script-src 'self' 'unsafe-inline' 'unsafe-eval'",
    'https://widgetbe.com',
    'https://*.widgetbe.com',
    'https://em.realscout.com',
    'https://www.realscout.com',
    'https://*.realscout.com',
    'https://assets.calendly.com',
  ].join(' '),
  [
    "connect-src 'self'",
    'https://widgetbe.com',
    'https://*.widgetbe.com',
    'https://www.realscout.com',
    'https://em.realscout.com',
    'https://*.realscout.com',
    'https://drjanduffy.realscout.com',
    'https://api.mapbox.com',
    'https://calendly.com',
    'https://www.calendly.com',
    'https://assets.calendly.com',
    'https://*.calendly.com',
  ].join(' '),
  [
    "style-src 'self' 'unsafe-inline'",
    'https://assets.calendly.com',
    'https://fonts.googleapis.com',
    'https://em.realscout.com',
    'https://www.realscout.com',
  ].join(' '),
  [
    "font-src 'self' data:",
    'https://fonts.gstatic.com',
    'https://assets.calendly.com',
    'https://em.realscout.com',
    'https://www.realscout.com',
  ].join(' '),
  "img-src 'self' data: https: blob:",
  "worker-src 'self' blob:",
  [
    'frame-src',
    'https://widgetbe.com',
    'https://*.widgetbe.com',
    'https://calendly.com',
    'https://www.calendly.com',
    'https://*.calendly.com',
    'https://em.realscout.com',
    'https://www.realscout.com',
    'https://*.realscout.com',
    'https://drjanduffy.realscout.com',
    'https://www.google.com',
    'https://maps.google.com',
    'https://*.google.com',
  ].join(' '),
].join('; ');

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'imagedelivery.net' },
      { protocol: 'https', hostname: 'drjanduffy.realscout.com' },
      { protocol: 'https', hostname: 'em.realscout.com' },
      { protocol: 'https', hostname: 'www.realscout.com' },
    ],
  },
  async redirects() {
    return [
      // Prefer www permanently when a request still reaches the app (Vercel apex
      // domain redirect should also be set to 308 in project domain settings).
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'lonemountainheights.com' }],
        destination: 'https://www.lonemountainheights.com/:path*',
        permanent: true,
      },
      {
        source: '/locations',
        destination: '/neighborhoods',
        permanent: true,
      },
      {
        source: '/listings',
        destination: '/homes',
        permanent: true,
      },
      // Sample/demo property URLs historically listed in static sitemaps — consolidate.
      {
        source: '/homes/lone-mountain-ranch/1234-mountain-view-dr',
        destination: '/homes',
        permanent: true,
      },
      {
        source: '/homes/desert-vista-estates/5678-desert-bloom-ct',
        destination: '/homes',
        permanent: true,
      },
      // Dead routes that still appear in Search Console / old canonical lists.
      {
        source: '/locations/mountain-view-estates',
        destination: '/neighborhoods',
        permanent: true,
      },
      {
        source: '/locations/sunset-ridge',
        destination: '/neighborhoods',
        permanent: true,
      },
      {
        source: '/locations/eagle-canyon',
        destination: '/neighborhoods',
        permanent: true,
      },
      {
        source: '/property-types/4-bedroom-homes',
        destination: '/property-types/3-bedroom-homes',
        permanent: true,
      },
      {
        source: '/property-types/5-bedroom-homes',
        destination: '/property-types/3-bedroom-homes',
        permanent: true,
      },
      {
        source: '/property-types/luxury-homes',
        destination: '/luxury',
        permanent: true,
      },
      {
        source: '/property-types/corner-lot-homes',
        destination: '/homes',
        permanent: true,
      },
      {
        source: '/property-types/single-story-homes',
        destination: '/homes',
        permanent: true,
      },
      {
        source: '/property-types/homes-with-mountain-views',
        destination: '/homes',
        permanent: true,
      },
      {
        source: '/price-ranges/400k-600k',
        destination: '/price-ranges/600k-800k',
        permanent: true,
      },
      {
        source: '/price-ranges/800k-1m',
        destination: '/price-ranges/600k-800k',
        permanent: true,
      },
      {
        source: '/price-ranges/1m-plus',
        destination: '/luxury',
        permanent: true,
      },
      {
        source: '/sitemap-news.xml',
        destination: '/sitemap.xml',
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: contentSecurityPolicy,
          },
        ],
      },
    ];
  },
};

export default nextConfig;
