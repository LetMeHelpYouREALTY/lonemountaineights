/**
 * Server endpoint: GET /api/cloudflare-images
 *
 * Fetches images from Cloudflare Images V2 API using efficient server-side
 * filtering via `creator` (site-level) and `meta.category` (folder-level).
 * Keeps CF_API_TOKEN server-side (never exposed to browser).
 *
 * Query params:
 *   ?prefix=photos           → creator=lonemountaineights & meta.category=photos
 *   ?prefix=agents           → creator=lonemountaineights & meta.category=agents
 *   ?prefix=hero             → creator=lonemountaineights & meta.category=hero
 *   (no prefix)              → creator=lonemountaineights (all site images)
 *   ?variant=card            → default delivery variant (default: card)
 *   ?limit=50                → max images to return (default: 100, max: 1000)
 *
 * Returns JSON: { images: [{ id, url, variants, filename, uploaded, meta }], total, prefix }
 */

const CF_API_BASE = 'https://api.cloudflare.com/client/v4';
const SITE_CREATOR = 'lonemountaineights';

// Cache duration: 5 minutes (avoid hammering API on every page load)
const CACHE_MAX_AGE = 300;

/** @type {import('@sveltejs/kit').RequestHandler} */
export async function GET({ url }) {
  const CF_ACCOUNT_ID = process.env.CF_ACCOUNT_ID || import.meta.env.CF_ACCOUNT_ID;
  const CF_API_TOKEN = process.env.CF_API_TOKEN || import.meta.env.CF_API_TOKEN;
  const CF_ACCOUNT_HASH = process.env.VITE_CF_ACCOUNT_HASH || import.meta.env.VITE_CF_ACCOUNT_HASH;

  if (!CF_ACCOUNT_ID || !CF_API_TOKEN) {
    return new Response(
      JSON.stringify({ error: 'Cloudflare credentials not configured' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } },
    );
  }

  // Parse query params
  const prefix = url.searchParams.get('prefix') || '';
  const variant = url.searchParams.get('variant') || 'card';
  const limit = Math.min(parseInt(url.searchParams.get('limit') || '100', 10), 1000);

  try {
    const images = [];
    let continuationToken = null;

    do {
      // Build V2 API URL with server-side filters
      let apiUrl = `${CF_API_BASE}/accounts/${CF_ACCOUNT_ID}/images/v2?per_page=${Math.min(limit, 1000)}`;

      // Server-side filter: only images uploaded by this site
      apiUrl += `&creator=${encodeURIComponent(SITE_CREATOR)}`;

      // Server-side filter: narrow to a specific category/folder via metadata
      if (prefix) {
        apiUrl += `&meta.category[eq]=${encodeURIComponent(prefix)}`;
      }

      if (continuationToken) {
        apiUrl += `&continuation_token=${encodeURIComponent(continuationToken)}`;
      }

      const res = await fetch(apiUrl, {
        headers: { Authorization: `Bearer ${CF_API_TOKEN}` },
      });

      if (!res.ok) {
        throw new Error(`Cloudflare API error: ${res.status}`);
      }

      const json = await res.json();
      if (!json.success) {
        throw new Error(`Cloudflare API error: ${JSON.stringify(json.errors)}`);
      }

      // All returned images already match our filters (server-side)
      for (const img of json.result?.images || []) {
        images.push({
          id: img.id,
          filename: img.filename,
          uploaded: img.uploaded,
          meta: img.meta || {},
          // Build delivery URLs for common variants
          variants: {
            heroxl: `https://imagedelivery.net/${CF_ACCOUNT_HASH}/${img.id}/heroxl`,
            hero: `https://imagedelivery.net/${CF_ACCOUNT_HASH}/${img.id}/hero`,
            desktop: `https://imagedelivery.net/${CF_ACCOUNT_HASH}/${img.id}/desktop`,
            og: `https://imagedelivery.net/${CF_ACCOUNT_HASH}/${img.id}/og`,
            tablet: `https://imagedelivery.net/${CF_ACCOUNT_HASH}/${img.id}/tablet`,
            card: `https://imagedelivery.net/${CF_ACCOUNT_HASH}/${img.id}/card`,
            thumb: `https://imagedelivery.net/${CF_ACCOUNT_HASH}/${img.id}/thumb`,
            avatar: `https://imagedelivery.net/${CF_ACCOUNT_HASH}/${img.id}/avatar`,
          },
          // Default display URL
          url: `https://imagedelivery.net/${CF_ACCOUNT_HASH}/${img.id}/${variant}`,
        });

        if (images.length >= limit) break;
      }

      continuationToken = json.result?.continuation_token || null;
    } while (continuationToken && images.length < limit);

    // Fallback: if server-side creator filter returned nothing,
    // try client-side ID prefix matching for older uploads without creator field
    if (images.length === 0) {
      const idPrefix = prefix ? `${SITE_CREATOR}/${prefix}` : SITE_CREATOR;
      let ct = null;

      do {
        let apiUrl = `${CF_API_BASE}/accounts/${CF_ACCOUNT_ID}/images/v2?per_page=${Math.min(limit, 1000)}`;
        if (ct) apiUrl += `&continuation_token=${encodeURIComponent(ct)}`;

        const res = await fetch(apiUrl, {
          headers: { Authorization: `Bearer ${CF_API_TOKEN}` },
        });
        if (!res.ok) break;

        const json = await res.json();
        if (!json.success) break;

        for (const img of json.result?.images || []) {
          if (img.id?.startsWith(idPrefix + '/')) {
            images.push({
              id: img.id,
              filename: img.filename,
              uploaded: img.uploaded,
              meta: img.meta || {},
              variants: {
                heroxl: `https://imagedelivery.net/${CF_ACCOUNT_HASH}/${img.id}/heroxl`,
                hero: `https://imagedelivery.net/${CF_ACCOUNT_HASH}/${img.id}/hero`,
                desktop: `https://imagedelivery.net/${CF_ACCOUNT_HASH}/${img.id}/desktop`,
                og: `https://imagedelivery.net/${CF_ACCOUNT_HASH}/${img.id}/og`,
                tablet: `https://imagedelivery.net/${CF_ACCOUNT_HASH}/${img.id}/tablet`,
                card: `https://imagedelivery.net/${CF_ACCOUNT_HASH}/${img.id}/card`,
                thumb: `https://imagedelivery.net/${CF_ACCOUNT_HASH}/${img.id}/thumb`,
                avatar: `https://imagedelivery.net/${CF_ACCOUNT_HASH}/${img.id}/avatar`,
              },
              url: `https://imagedelivery.net/${CF_ACCOUNT_HASH}/${img.id}/${variant}`,
            });
          }
          if (images.length >= limit) break;
        }

        ct = json.result?.continuation_token || null;
      } while (ct && images.length < limit);
    }

    // Sort by upload date (newest first)
    images.sort((a, b) => new Date(b.uploaded) - new Date(a.uploaded));

    return new Response(
      JSON.stringify({
        images,
        total: images.length,
        prefix: prefix || '(all)',
        filterMethod: images.length > 0 ? 'server-side' : 'none',
      }),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
          'Cache-Control': `public, max-age=${CACHE_MAX_AGE}, s-maxage=${CACHE_MAX_AGE}`,
        },
      },
    );
  } catch (err) {
    return new Response(
      JSON.stringify({ error: err.message }),
      { status: 500, headers: { 'Content-Type': 'application/json' } },
    );
  }
}
