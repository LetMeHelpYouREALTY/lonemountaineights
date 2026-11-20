import type { NextConfig } from 'next';

/**
 * CSP for RealScout (em.realscout.com script + www/drjanduffy.realscout.com API),
 * Calendly, Google Fonts CSS the widget loads, Mapbox autofill, and Google Maps iframe.
 *
 * Keep widgetbe.com OUT of connect-src and do not load its script: once /config
 * succeeds, WidgetBe injects a sitewide CTA with 702-500-1942 instead of this
 * site's 702-500-1955. RealScout widgets do not depend on widgetbe.
 */
const contentSecurityPolicy = [
  "default-src 'self'",
  [
    "script-src 'self' 'unsafe-inline' 'unsafe-eval'",
    'https://em.realscout.com',
    'https://www.realscout.com',
    'https://*.realscout.com',
    'https://assets.calendly.com',
  ].join(' '),
  [
    "connect-src 'self'",
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
  [
    'frame-src',
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
      {
        source: '/locations',
        destination: '/neighborhoods',
        permanent: true,
      },
      {
        source: '/faq',
        destination: '/#faq-heading',
        permanent: false,
      },
      {
        source: '/listings',
        destination: '/homes',
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
