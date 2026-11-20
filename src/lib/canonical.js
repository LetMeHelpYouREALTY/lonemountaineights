// Canonical URL utilities for SEO

const BASE_URL = 'https://www.lonemountainheights.com';

/**
 * Generate canonical URL for a given path
 * @param {string} path - The path to generate canonical URL for
 * @returns {string} - The canonical URL
 */
export function generateCanonicalUrl(path) {
  // Remove leading slash if present
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;

  // Ensure path doesn't end with trailing slash (except for root)
  const finalPath = cleanPath === '' ? '' : cleanPath.replace(/\/$/, '');

  return `${BASE_URL}/${finalPath}`;
}

/**
 * Generate canonical URL for property pages
 * @param {string} street - Street name
 * @param {string} address - Property address
 * @returns {string} - The canonical URL
 */
export function generatePropertyCanonicalUrl(street, address) {
  const encodedStreet = encodeURIComponent(street);
  const encodedAddress = encodeURIComponent(address);
  return `${BASE_URL}/homes/${encodedStreet}/${encodedAddress}`;
}

/**
 * Generate canonical URL for location pages
 * @param {string} location - Location name
 * @returns {string} - The canonical URL
 */
export function generateLocationCanonicalUrl(location) {
  const encodedLocation = encodeURIComponent(location);
  return `${BASE_URL}/locations/${encodedLocation}`;
}

/**
 * Generate canonical URL for property type pages
 * @param {string} propertyType - Property type
 * @returns {string} - The canonical URL
 */
export function generatePropertyTypeCanonicalUrl(propertyType) {
  const encodedType = encodeURIComponent(propertyType);
  return `${BASE_URL}/property-types/${encodedType}`;
}

/**
 * Generate canonical URL for price range pages
 * @param {string} priceRange - Price range
 * @returns {string} - The canonical URL
 */
export function generatePriceRangeCanonicalUrl(priceRange) {
  const encodedRange = encodeURIComponent(priceRange);
  return `${BASE_URL}/price-ranges/${encodedRange}`;
}

/**
 * Check if a URL is canonical
 * @param {string} url - The URL to check
 * @returns {boolean} - True if the URL is canonical
 */
export function isCanonicalUrl(url) {
  try {
    const urlObj = new URL(url);
    return (
      urlObj.hostname === 'www.lonemountainheights.com' &&
      !urlObj.pathname.endsWith('/') &&
      urlObj.pathname !== '/'
    );
  } catch {
    return false;
  }
}

/**
 * Get all canonical URLs for sitemap generation
 * @returns {Array} - Array of canonical URLs with metadata
 */
export function getAllCanonicalUrls() {
  const urls = [
    {
      url: generateCanonicalUrl('/'),
      priority: 1.0,
      changefreq: 'weekly',
      lastmod: new Date().toISOString().split('T')[0],
    },
    {
      url: generateCanonicalUrl('/homes'),
      priority: 0.95,
      changefreq: 'daily',
      lastmod: new Date().toISOString().split('T')[0],
    },
    {
      url: generateCanonicalUrl('/neighborhoods'),
      priority: 0.9,
      changefreq: 'weekly',
      lastmod: new Date().toISOString().split('T')[0],
    },
    {
      url: generateCanonicalUrl('/market-report'),
      priority: 0.85,
      changefreq: 'weekly',
      lastmod: new Date().toISOString().split('T')[0],
    },
    {
      url: generateCanonicalUrl('/sales'),
      priority: 0.8,
      changefreq: 'weekly',
      lastmod: new Date().toISOString().split('T')[0],
    },
    {
      url: generateCanonicalUrl('/valuation'),
      priority: 0.8,
      changefreq: 'weekly',
      lastmod: new Date().toISOString().split('T')[0],
    },
    {
      url: generateCanonicalUrl('/contact'),
      priority: 0.8,
      changefreq: 'monthly',
      lastmod: new Date().toISOString().split('T')[0],
    },
    {
      url: generateCanonicalUrl('/about'),
      priority: 0.75,
      changefreq: 'monthly',
      lastmod: new Date().toISOString().split('T')[0],
    },
    {
      url: generateCanonicalUrl('/amenities'),
      priority: 0.7,
      changefreq: 'monthly',
      lastmod: new Date().toISOString().split('T')[0],
    },
    {
      url: generateCanonicalUrl('/schools'),
      priority: 0.7,
      changefreq: 'monthly',
      lastmod: new Date().toISOString().split('T')[0],
    },
    {
      url: generateCanonicalUrl('/guide'),
      priority: 0.65,
      changefreq: 'monthly',
      lastmod: new Date().toISOString().split('T')[0],
    },
    {
      url: generateCanonicalUrl('/blog'),
      priority: 0.8,
      changefreq: 'daily',
      lastmod: new Date().toISOString().split('T')[0],
    },
  ];

  // Only include routes that return 200 (avoid GSC 404 / soft-404 noise)
  const locations = ['lone-mountain-ranch', 'desert-vista-estates'];
  locations.forEach((location) => {
    urls.push({
      url: generateLocationCanonicalUrl(location),
      priority: 0.8,
      changefreq: 'weekly',
      lastmod: new Date().toISOString().split('T')[0],
    });
  });

  urls.push({
    url: generatePropertyTypeCanonicalUrl('3-bedroom-homes'),
    priority: 0.75,
    changefreq: 'weekly',
    lastmod: new Date().toISOString().split('T')[0],
  });

  urls.push({
    url: generatePriceRangeCanonicalUrl('600k-800k'),
    priority: 0.75,
    changefreq: 'weekly',
    lastmod: new Date().toISOString().split('T')[0],
  });

  return urls;
}

/**
 * Generate robots.txt content with canonical directives
 * @returns {string} - Robots.txt content
 */
export function generateRobotsTxt() {
  return `# https://www.robotstxt.org/robotstxt.html
User-agent: *
Disallow: /todos/
Disallow: /api/
Allow: /

# Sitemaps
Sitemap: ${BASE_URL}/sitemap.xml
Sitemap: ${BASE_URL}/sitemap-index.xml
# Crawl-delay for respectful crawling
Crawl-delay: 1`;
}

/**
 * Generate sitemap XML content
 * @returns {string} - Sitemap XML content
 */
export function generateSitemapXml() {
  const urls = getAllCanonicalUrls();

  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;

  urls.forEach((urlData) => {
    sitemap += `
  <url>
    <loc>${urlData.url}</loc>
    <lastmod>${urlData.lastmod}</lastmod>
    <changefreq>${urlData.changefreq}</changefreq>
    <priority>${urlData.priority}</priority>
  </url>`;
  });

  sitemap += `
</urlset>`;

  return sitemap;
}
