import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'imagedelivery.net' },
      { protocol: 'https', hostname: 'drjanduffy.realscout.com' },
    ],
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
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://em.realscout.com https://www.realscout.com https://assets.calendly.com https://widgetbe.com",
              "connect-src 'self' https://www.realscout.com https://em.realscout.com https://calendly.com https://www.calendly.com https://assets.calendly.com https://*.calendly.com",
              "style-src 'self' 'unsafe-inline' https://assets.calendly.com https://fonts.googleapis.com",
              "font-src 'self' https://fonts.gstatic.com",
              "img-src 'self' data: https: blob:",
              "frame-src https://calendly.com https://www.calendly.com https://*.calendly.com https://www.google.com https://maps.google.com",
            ].join('; '),
          },
        ],
      },
    ];
  },
};

export default nextConfig;
