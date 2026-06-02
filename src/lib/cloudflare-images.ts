/**
 * Cloudflare Images — mapping, URL generation, and responsive helpers
 *
 * Images are uploaded to Cloudflare Images storage and delivered via
 * imagedelivery.net CDN with flexible variants (on-the-fly transforms).
 *
 * Delivery URL format:
 *   https://imagedelivery.net/<ACCOUNT_HASH>/<IMAGE_ID>/w=<WIDTH>,quality=<Q>,format=auto
 *
 * In development (CF_ENABLED=false) all helpers fall back to the original
 * local /images/… path so the site works without a Cloudflare account.
 */

// ---------------------------------------------------------------------------
// Config — reads from Vite env at build time
// ---------------------------------------------------------------------------

/** Cloudflare Images account hash (public, appears in delivery URLs) */
export const CF_ACCOUNT_HASH = process.env.NEXT_PUBLIC_CF_ACCOUNT_HASH || '';

/** Master switch — set NEXT_PUBLIC_CF_IMAGES_ENABLED=true in .env to activate */
export const CF_ENABLED =
  process.env.NEXT_PUBLIC_CF_IMAGES_ENABLED === 'true' &&
  CF_ACCOUNT_HASH !== '';

// ---------------------------------------------------------------------------
// Image map — original path → Cloudflare Image ID
//
// Populated by running:  node scripts/upload-to-cloudflare.js
// After upload, paste the generated map here and commit.
// ---------------------------------------------------------------------------

/**
 * @type {Record<string, string>}
 * Key:   local path as used in src attributes (e.g. "/images/hero/hero-las-vegas.png")
 * Value: Cloudflare Image UUID returned by the upload API
 */
export const IMAGE_MAP: Record<string, string> = {
  '/images/agents/design 0001_new 2.jpg': 'lonemountaineights/agents/design-0001.jpg',
  '/images/agents/design 0002_new 2.jpg': 'lonemountaineights/agents/design-0002.jpg',
  '/images/agents/design 0003 _new 03.jpg': 'lonemountaineights/agents/design-0003.jpg',
  '/images/agents/design 0003_2_new 2.jpg': 'lonemountaineights/agents/design-0003-2.jpg',
  '/images/agents/design 04_new 2.jpg': 'lonemountaineights/agents/design-04.jpg',
  '/images/agents/design 05_new 2.jpg': 'lonemountaineights/agents/design-05.jpg',
  '/images/agents/dr-jan-duffy.jpg': 'lonemountaineights/agents/dr-jan-duffy.jpg',
  '/images/agents/zillowDr Jan new.jpg': 'lonemountaineights/agents/zillowdr-jan.jpg',
  '/images/hero/hero-las-vegas.png': 'lonemountaineights/hero/hero-las-vegas.png',
  '/images/hero/Lone_Mountain.jpg': 'lonemountaineights/hero/lone-mountain.jpg',
  '/images/og/og-image.png': 'lonemountaineights/og/og-image.png',
  '/images/photos/home-featured-1.jpg': 'lonemountaineights/photos/home-featured-1.jpg',
  '/images/photos/home-featured-2.jpg': 'lonemountaineights/photos/home-featured-2.jpg',
  '/images/photos/home-featured-3.jpg': 'lonemountaineights/photos/home-featured-3.jpg',
  '/images/photos/las-vegas-neighborhood.jpg': 'lonemountaineights/photos/las-vegas-neighborhood.jpg',
  '/images/photos/placeholder.jpg': 'lonemountaineights/photos/placeholder.jpg',
};

// ---------------------------------------------------------------------------
// URL helpers
// ---------------------------------------------------------------------------

/** Default responsive srcset breakpoints */
export const BREAKPOINTS = [320, 640, 1024, 1920];

/** Default image quality (1-100) */
export const DEFAULT_QUALITY = 85;

/**
 * Available named variants (created via --setup-variants in upload script).
 * Named variants maximise CDN cache hits for common sizes.
 * @type {Record<string, { width: number, fit: string }>}
 */
export const NAMED_VARIANTS = {
  heroxl:  { width: 2560, height: 1440, fit: 'cover' },
  hero:    { width: 1920, fit: 'cover' },
  desktop: { width: 1920, height: 1080, fit: 'scale-down' },
  og:      { width: 1200, fit: 'cover' },
  tablet:  { width: 1024, height: 768,  fit: 'scale-down' },
  card:    { width: 640,  fit: 'cover' },
  thumb:   { width: 320,  fit: 'cover' },
  avatar:  { width: 160,  fit: 'cover' },
};

/**
 * Build a Cloudflare Images delivery URL for the given local path.
 * Uses flexible variants (on-the-fly transforms via URL params).
 *
 * @param {string} localPath  — e.g. "/images/hero/hero-las-vegas.png"
 * @param {object} [opts]
 * @param {number} [opts.width]   — desired width in px (omit for original)
 * @param {number} [opts.height]  — desired height in px
 * @param {number} [opts.quality] — 1-100, default 85
 * @param {string} [opts.fit]     — cover | contain | crop | scale-down | pad
 * @param {string} [opts.format]  — auto | webp | avif | json (default "auto")
 * @returns {string} Full URL — either imagedelivery.net or original local path
 */
type ImageOpts = {
  width?: number;
  height?: number;
  quality?: number;
  fit?: string;
  format?: string;
};

export function getCloudflareUrl(localPath: string, opts: ImageOpts = {}): string {
  if (!CF_ENABLED) return localPath;

  const imageId = IMAGE_MAP[localPath];
  if (!imageId) return localPath; // not uploaded yet → fall back to local

  const {
    width,
    height,
    quality = DEFAULT_QUALITY,
    fit = 'cover',
    format = 'auto',
  } = opts;

  // Build transform string
  const parts = [];
  if (width) parts.push(`w=${width}`);
  if (height) parts.push(`h=${height}`);
  parts.push(`quality=${quality}`);
  parts.push(`fit=${fit}`);
  parts.push(`format=${format}`);

  const transforms = parts.join(',');
  return `https://imagedelivery.net/${CF_ACCOUNT_HASH}/${imageId}/${transforms}`;
}

/**
 * Build a Cloudflare Images delivery URL using a named variant.
 * Named variants are pre-defined server-side and maximise CDN cache hits.
 *
 * URL format: https://imagedelivery.net/{HASH}/{ID}/{VARIANT_NAME}
 *
 * @param {string} localPath   — e.g. "/images/hero/hero-las-vegas.png"
 * @param {string} variantName — one of: hero, card, thumb, og, avatar
 * @returns {string} Full URL — imagedelivery.net with named variant, or local fallback
 */
export function getVariantUrl(localPath: string, variantName: string): string {
  if (!CF_ENABLED) return localPath;

  const imageId = IMAGE_MAP[localPath];
  if (!imageId) return localPath;

  return `https://imagedelivery.net/${CF_ACCOUNT_HASH}/${imageId}/${variantName}`;
}

/**
 * Generate a srcset string for responsive images.
 *
 * @param {string} localPath  — e.g. "/images/photos/home-featured-1.jpg"
 * @param {object} [opts]
 * @param {number[]} [opts.widths]  — breakpoint widths (default BREAKPOINTS)
 * @param {number}   [opts.quality] — 1-100
 * @returns {string} srcset attribute value, or empty string if CF disabled
 */
export function getSrcset(localPath: string, opts: { widths?: number[]; quality?: number } = {}): string {
  if (!CF_ENABLED) return '';

  const imageId = IMAGE_MAP[localPath];
  if (!imageId) return '';

  const { widths = BREAKPOINTS, quality = DEFAULT_QUALITY } = opts;

  return widths
    .map(
      (w) =>
        `https://imagedelivery.net/${CF_ACCOUNT_HASH}/${imageId}/w=${w},quality=${quality},fit=cover,format=auto ${w}w`,
    )
    .join(', ');
}

/**
 * Get a single optimised URL for OG / meta images (fixed 1200px width).
 *
 * @param {string} localPath
 * @param {number} [width=1200]
 * @returns {string}
 */
export function getOgImageUrl(localPath: string, width = 1200): string {
  return getCloudflareUrl(localPath, { width, quality: 90, fit: 'cover' });
}

// ---------------------------------------------------------------------------
// Absolute-URL helpers (for OG tags, JSON-LD, meta tags)
// ---------------------------------------------------------------------------

/** Site origin — used when CF is disabled to build absolute URLs */
export const SITE_ORIGIN = 'https://lonemountainheights.com';

/**
 * Get an absolute image URL suitable for OG / meta / JSON-LD.
 * Returns a Cloudflare delivery URL when enabled, otherwise the full
 * https://lonemountainheights.com/images/… URL.
 *
 * @param {string} localPath — e.g. "/images/og/og-image.png"
 * @param {number} [width=1200]
 * @returns {string} Always an absolute URL
 */
export function getAbsoluteImageUrl(localPath: string, width = 1200): string {
  if (CF_ENABLED) {
    const cfUrl = getOgImageUrl(localPath, width);
    if (cfUrl !== localPath) return cfUrl; // successfully resolved
  }
  // Fall back to site origin + local path
  return `${SITE_ORIGIN}${localPath}`;
}
