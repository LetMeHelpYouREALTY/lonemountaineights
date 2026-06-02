import type { Metadata } from 'next';
import { getAbsoluteImageUrl } from '@/lib/cloudflare-images';

export const SITE_URL = 'https://lonemountainheights.com';
export const SITE_NAME = 'Lone Mountain Heights Real Estate';

export const DEFAULT_OG_IMAGE_PATH = '/images/og/og-image.png';
export const OG_IMAGE_WIDTH = 1200;
export const OG_IMAGE_HEIGHT = 630;
export const DEFAULT_OG_IMAGE_ALT =
  'Lone Mountain Heights homes for sale in Las Vegas 89129 — Dr. Jan Duffy, Berkshire Hathaway real estate expert';

type PageMetadataOptions = {
  title: string;
  description: string;
  path?: string;
  ogImagePath?: string;
  ogImageAlt?: string;
};

/** Absolute OG/Twitter image URL (Cloudflare CDN when enabled, else site origin). */
export function getDefaultOgImageUrl(): string {
  return getAbsoluteImageUrl(DEFAULT_OG_IMAGE_PATH, OG_IMAGE_WIDTH);
}

export function buildPageMetadata({
  title,
  description,
  path = '/',
  ogImagePath = DEFAULT_OG_IMAGE_PATH,
  ogImageAlt = DEFAULT_OG_IMAGE_ALT,
}: PageMetadataOptions): Metadata {
  const canonical = path === '/' ? SITE_URL : `${SITE_URL}${path}`;
  const ogImageUrl = getAbsoluteImageUrl(ogImagePath, OG_IMAGE_WIDTH);

  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: SITE_NAME,
      locale: 'en_US',
      type: 'website',
      images: [
        {
          url: ogImageUrl,
          width: OG_IMAGE_WIDTH,
          height: OG_IMAGE_HEIGHT,
          alt: ogImageAlt,
          type: 'image/png',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImageUrl],
    },
  };
}

/** Default social preview metadata for root layout (fallback for all routes). */
export function getDefaultSocialMetadata(): Pick<Metadata, 'openGraph' | 'twitter'> {
  const ogImageUrl = getDefaultOgImageUrl();
  const title = 'Lone Mountain Heights Real Estate | Dr. Jan Duffy | Las Vegas 89129';
  const description =
    'Find homes for sale in Lone Mountain Heights, Las Vegas 89129. Dr. Jan Duffy leads the Berkshire Hathaway HomeServices Lone Mountain Heights Team.';

  return {
    openGraph: {
      type: 'website',
      locale: 'en_US',
      siteName: SITE_NAME,
      url: SITE_URL,
      title,
      description,
      images: [
        {
          url: ogImageUrl,
          width: OG_IMAGE_WIDTH,
          height: OG_IMAGE_HEIGHT,
          alt: DEFAULT_OG_IMAGE_ALT,
          type: 'image/png',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImageUrl],
    },
  };
}
