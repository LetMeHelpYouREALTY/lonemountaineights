import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/site-metadata';

export default function robots(): MetadataRoute.Robots {
  const allowPublic = { allow: '/' as const, disallow: ['/api/'] as string[] };

  return {
    rules: [
      { userAgent: '*', ...allowPublic },
      // Allow AI crawlers for AEO — content is public marketing/FAQ (llms.txt at /llms.txt)
      { userAgent: 'GPTBot', ...allowPublic },
      { userAgent: 'Google-Extended', ...allowPublic },
      { userAgent: 'PerplexityBot', ...allowPublic },
      { userAgent: 'anthropic-ai', ...allowPublic },
      { userAgent: 'ClaudeBot', ...allowPublic },
      { userAgent: 'Applebot-Extended', ...allowPublic },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL.replace('https://', ''),
  };
}
