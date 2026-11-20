import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'imagedelivery.net' },
      { protocol: 'https', hostname: 'drjanduffy.realscout.com' },
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
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://em.realscout.com https://www.realscout.com https://assets.calendly.com https://widgetbe.com https://*.widgetbe.com",
              // Keep widgetbe.com out of connect-src: once its /config call succeeds, the widgetbe
              // CTA pop-up renders on every page with 702-500-1942 instead of the site's 702-500-1955.
              // RealScout widgets do not depend on widgetbe.
              "connect-src 'self' https://www.realscout.com https://em.realscout.com https://calendly.com https://www.calendly.com https://assets.calendly.com https://*.calendly.com",
              "style-src 'self' 'unsafe-inline' https://assets.calendly.com https://fonts.googleapis.com https://em.realscout.com https://www.realscout.com",
              "font-src 'self' data: https://fonts.gstatic.com https://assets.calendly.com",
              "img-src 'self' data: https: blob:",
              "frame-src https://calendly.com https://www.calendly.com https://*.calendly.com https://em.realscout.com https://www.realscout.com https://www.google.com https://maps.google.com https://*.google.com",
            ].join('; '),
          },
        ],
      },
    ];
  },
};

export default nextConfig;
