/** Page content config for SEO-rich inner pages */
export type PageConfig = {
  title: string;
  h1: string;
  description: string;
  canonical: string;
  body: string[];
  faqKey?: string;
};

export const pageConfigs: Record<string, PageConfig> = {
  amenities: {
    title: 'Lone Mountain Heights Amenities | Parks, Trails & Shopping',
    h1: 'Local Amenities Near Lone Mountain Heights',
    description:
      'Explore parks, shopping, dining, and recreation near Lone Mountain Heights, Las Vegas 89129. Dr. Jan Duffy guides buyers to the lifestyle that fits.',
    canonical: '/amenities',
    body: [
      'Lone Mountain Heights offers easy access to Lone Mountain Discovery Park, Majestic Park, Trigono Hills Park, and the Lone Mountain Summit Trail.',
      'Shopping includes Centennial Center with Costco, Target, and Walmart. The 215 Beltway and Summerlin Parkway provide quick commutes across Las Vegas.',
      'Dr. Jan Duffy helps buyers evaluate amenity access street-by-street — because location within 89129 affects both lifestyle and resale value.',
    ],
    faqKey: 'amenitiesFAQs',
  },
  neighborhoods: {
    title: 'Lone Mountain Heights Neighborhoods | Las Vegas 89129',
    h1: 'Neighborhoods & Communities in Lone Mountain Heights',
    description:
      'Explore Lone Mountain Ranch, Desert Vista Estates, and every neighborhood and community in Lone Mountain Heights 89129 with Dr. Jan Duffy.',
    canonical: '/neighborhoods',
    body: [
      'Lone Mountain Heights is not one uniform area — neighborhoods and communities differ in lot size, views, HOA fees, and school access.',
      'Dr. Jan Duffy specializes in matching buyers to the right street and subdivision based on budget, lifestyle, and long-term investment goals.',
      'Browse location guides for Lone Mountain Ranch and Desert Vista Estates, or schedule a consultation for a personalized neighborhood tour.',
    ],
    faqKey: 'neighborhoodsFAQs',
  },
  schools: {
    title: 'Lone Mountain Heights Schools | CCSD Guide Las Vegas 89129',
    h1: 'Schools Serving Lone Mountain Heights',
    description:
      'Schools serving Lone Mountain Heights, Las Vegas 89129 — CCSD attendance zones, campus names, and private options, with boundary checks from Dr. Jan Duffy.',
    canonical: '/schools',
    body: [
      'Lone Mountain Heights is served by Clark County School District schools including Eileen Conners Elementary, Walter Johnson Junior High, and Centennial High School. Assignments vary by address, so verify zoning with CCSD before you buy.',
      'The area also offers access to Somerset Academy Lone Mountain and private options like The Meadows School.',
      'Dr. Jan Duffy helps relocating buyers verify school boundaries before they buy — a critical step in Lone Mountain Heights real estate.',
    ],
    faqKey: 'schoolsFAQs',
  },
  guide: {
    title: 'Living in Lone Mountain Heights | Complete Community Guide',
    h1: 'Complete Guide to Living in Lone Mountain Heights',
    description:
      'Everything you need to know about living in Lone Mountain Heights, Las Vegas 89129 — homes, lifestyle, schools, and market trends.',
    canonical: '/guide',
    body: [
      'Lone Mountain Heights is a gated community developed between 2001–2005 featuring 3–5 bedroom homes from 2,500–4,400 sq ft with mature landscaping and mountain views.',
      'The community balances suburban tranquility with access to Summerlin amenities, golf, and major employment centers via the 215 Beltway.',
      'Use this guide as a starting point, then call Dr. Jan Duffy for street-level advice on lots, HOA rules, and recent sales.',
    ],
    faqKey: 'guideFAQs',
  },
  'market-report': {
    title: 'Lone Mountain Heights Market Report | Las Vegas 89129 Trends',
    h1: 'Lone Mountain Heights Market Report',
    description:
      'Monthly market analysis for Lone Mountain Heights, Las Vegas 89129 — prices, inventory, days on market, and trends from Dr. Jan Duffy.',
    canonical: '/market-report',
    body: [
      'Prices and days on market in Lone Mountain Heights shift month to month and vary by price point, condition, and street — the live MLS listings on this page show what is for sale today.',
      'For pricing, offers, and timing, recent closed sales on your street matter more than zip-code averages.',
      'Request a free custom market report from Dr. Jan Duffy for your specific street or subdivision.',
    ],
    faqKey: 'marketReportFAQs',
  },
  sales: {
    title: 'Recent Sales in Lone Mountain Heights | Las Vegas 89129',
    h1: 'Recent Lone Mountain Heights Sales',
    description:
      'See recent home sales in Lone Mountain Heights, Las Vegas 89129, and request a comparable-sales analysis for any address from Dr. Jan Duffy.',
    canonical: '/sales',
    body: [
      'Understanding recent sales is essential for pricing, offers, and investment decisions in Lone Mountain Heights.',
      'Dr. Jan Duffy maintains detailed knowledge of closed transactions across every neighborhood and community in 89129.',
      'Browse featured listings above, or ask Dr. Jan for a comparable-sales analysis on any Lone Mountain Heights address.',
    ],
    faqKey: 'salesFAQs',
  },
  tools: {
    title: 'Real Estate Tools | Lone Mountain Heights Calculators',
    h1: 'Real Estate Tools & Calculators',
    description:
      'Home value calculator, mortgage tools, and home finder resources for Lone Mountain Heights buyers and sellers.',
    canonical: '/tools',
    body: [
      'Use our RealScout home value widget for instant estimates, then follow up with Dr. Jan Duffy for a professional comp analysis.',
      'Mortgage calculators and pre-approval guidance help Lone Mountain Heights buyers shop with confidence in the $500K–$1M+ range.',
      'Schedule a consultation to build a personalized buying or selling plan.',
    ],
    faqKey: 'toolsFAQs',
  },
  careers: {
    title: 'Real Estate Careers in Las Vegas | Dr. Jan Duffy Team',
    h1: 'Real Estate Careers with Dr. Jan Duffy',
    description:
      'Join the Lone Mountain Heights team led by Dr. Jan Duffy. Las Vegas real estate career opportunities.',
    canonical: '/careers',
    body: [
      'Dr. Jan Duffy leads a hyperlocal team focused exclusively on Lone Mountain Heights and surrounding 89129 communities.',
      'The team provides training, marketing technology, and referral network access.',
      'Schedule a Calendly call with Dr. Jan Duffy to discuss career opportunities on the Lone Mountain Heights team — no web forms required.',
    ],
    faqKey: 'careersFAQs',
  },
  blog: {
    title: 'Lone Mountain Heights Real Estate Blog | Dr. Jan Duffy',
    h1: 'Lone Mountain Heights Real Estate Blog',
    description:
      'Market updates, neighborhood news, and expert tips for Lone Mountain Heights homeowners and buyers from Dr. Jan Duffy.',
    canonical: '/blog',
    body: [
      'Stay informed with weekly market insights, neighborhood spotlights, and buyer/seller guides for Lone Mountain Heights.',
      'Read the complete guide to living in Lone Mountain Heights or this week\'s market update.',
    ],
    faqKey: 'blogFAQs',
  },
  gallery: {
    title: 'Photo Gallery | Lone Mountain Heights Homes & Community',
    h1: 'Lone Mountain Heights Photo Gallery',
    description:
      'See Lone Mountain, the peak Lone Mountain Heights is named for, and full MLS photo galleries for every home for sale in Las Vegas 89129.',
    canonical: '/gallery',
    body: [
      'Lone Mountain Heights takes its name from Lone Mountain, the freestanding desert peak in northwest Las Vegas. Mountain views and mature landscaping run throughout the community.',
      'Every active listing above opens to its full MLS photo set. Dr. Jan Duffy uses professional photography and video for every listing she represents.',
    ],
  },
  'market-intelligence': {
    title: 'Market Intelligence | Lone Mountain Heights Investment Data',
    h1: 'Lone Mountain Heights Market Intelligence',
    description:
      'Investment insights, ROI analysis, and market intelligence for Lone Mountain Heights real estate from Dr. Jan Duffy.',
    canonical: '/market-intelligence',
    body: [
      'Appreciation in Lone Mountain Heights varies by subdivision and price band, so Dr. Jan Duffy pulls year-over-year closed-sale data for the streets you are considering.',
      'Dr. Jan Duffy provides ROI analysis for investors considering rental, flip, or long-hold strategies in 89129.',
      'Request a custom investment brief tailored to your goals and budget.',
    ],
    faqKey: 'marketReportFAQs',
  },
  neighborhood: {
    title: 'Lone Mountain Heights Neighborhood Overview | 89129',
    h1: 'Lone Mountain Heights Neighborhood Overview',
    description:
      'Overview of the Lone Mountain Heights community in Las Vegas 89129 — homes, lifestyle, and real estate with Dr. Jan Duffy.',
    canonical: '/neighborhood',
    body: [
      'Lone Mountain Heights is a northwest Las Vegas community known for gated streets and mountain views.',
      'Contact Dr. Jan Duffy for a personalized neighborhood orientation.',
    ],
    faqKey: 'neighborhoodsFAQs',
  },
  'price-ranges/600k-800k': {
    title: 'Homes $600K–$800K in Lone Mountain Heights | Las Vegas',
    h1: 'Homes $600K–$800K in Lone Mountain Heights',
    description:
      'Browse Lone Mountain Heights homes priced between $600,000 and $800,000. Expert guidance from Dr. Jan Duffy, Las Vegas 89129.',
    canonical: '/price-ranges/600k-800k',
    body: [
      'The $600K–$800K range covers many updated single-story and two-story Lone Mountain Heights homes, often with pools and mountain views.',
      'Dr. Jan Duffy knows which streets offer the best value in this band and which homes have the strongest resale potential.',
    ],
    faqKey: 'priceRangeFAQs',
  },
  'property-types/3-bedroom-homes': {
    title: '3 Bedroom Homes in Lone Mountain Heights | Las Vegas 89129',
    h1: '3 Bedroom Homes in Lone Mountain Heights',
    description:
      'Find 3 bedroom homes for sale in Lone Mountain Heights, Las Vegas 89129 with Dr. Jan Duffy.',
    canonical: '/property-types/3-bedroom-homes',
    body: [
      'Three-bedroom homes in Lone Mountain Heights typically range from 1,750–2,500 sq ft.',
      'Dr. Jan Duffy maintains an updated search of all 3-bedroom listings in 89129 — schedule a call for a curated list.',
    ],
    faqKey: 'propertyTypeFAQs',
  },
  'locations/lone-mountain-ranch': {
    title: 'Lone Mountain Ranch Homes for Sale | Las Vegas 89129',
    h1: 'Lone Mountain Ranch',
    description:
      'Homes for sale in Lone Mountain Ranch, Lone Mountain Heights, Las Vegas 89129. Dr. Jan Duffy local expert.',
    canonical: '/locations/lone-mountain-ranch',
    body: [
      'Lone Mountain Ranch is a sought-after community within Lone Mountain Heights known for larger lots and mountain views.',
      'Dr. Jan Duffy can pull every active listing and recent closed sale on any Lone Mountain Ranch street.',
    ],
    faqKey: 'locationsLoneMountainRanch',
  },
  'locations/desert-vista-estates': {
    title: 'Desert Vista Estates Homes for Sale | Las Vegas 89129',
    h1: 'Desert Vista Estates',
    description:
      'Homes for sale in Desert Vista Estates, Lone Mountain Heights, Las Vegas 89129 with Dr. Jan Duffy.',
    canonical: '/locations/desert-vista-estates',
    body: [
      'Desert Vista Estates offers a quiet setting within Lone Mountain Heights near public schools and community amenities.',
      'Contact Dr. Jan Duffy for current listings, recent sales, and off-market opportunities in Desert Vista Estates.',
    ],
    faqKey: 'locationsDesertVista',
  },
  'faq/best-schools': {
    title: 'Public Schools Near Lone Mountain Heights | FAQ',
    h1: 'What Are the Public Schools Near Lone Mountain Heights?',
    description:
      'FAQ: Nearby public schools serving Lone Mountain Heights, Las Vegas 89129. Expert answer from Dr. Jan Duffy.',
    canonical: '/faq/best-schools',
    body: [
      'Lone Mountain Heights is served by Clark County School District (CCSD) schools. Assignments vary by address — always verify boundaries with CCSD before purchasing.',
      'Dr. Jan Duffy helps buyers map school zones to specific streets and listings in 89129.',
    ],
  },
  'faq/hoa-fees': {
    title: 'HOA Fees in Lone Mountain Heights | Las Vegas 89129 FAQ',
    h1: 'HOA Fees in Lone Mountain Heights',
    description:
      'FAQ: HOA fees and community costs in Lone Mountain Heights, Las Vegas 89129. Dr. Jan Duffy explains.',
    canonical: '/faq/hoa-fees',
    body: [
      'HOA fees in Lone Mountain Heights vary by subdivision and cover gated access, common area maintenance, and community amenities.',
      'Dr. Jan Duffy provides exact HOA amounts and rules for any listing you are considering.',
    ],
  },
  'faq/home-prices-2025': {
    title: 'Lone Mountain Heights Home Prices, Las Vegas 89129 | FAQ',
    h1: 'Lone Mountain Heights Home Prices',
    description:
      'What drives home prices in Lone Mountain Heights, Las Vegas 89129 — street, lot size, and upgrades — and how to get current comparable sales.',
    canonical: '/faq/home-prices-2025',
    body: [
      'Lone Mountain Heights prices vary widely by street, lot size, and upgrades, and luxury properties list above $1M. Asking prices change weekly, so a current comparable-sales report is the reliable number for any one address.',
      'Contact Dr. Jan Duffy for a free updated market report with current comps for your target price range.',
    ],
  },
  'blog/this-week-in-lone-mountain-heights': {
    title: 'This Week in Lone Mountain Heights | Market Update',
    h1: 'This Week in Lone Mountain Heights',
    description:
      'Weekly market update for Lone Mountain Heights, Las Vegas 89129 — new listings, sales, and trends from Dr. Jan Duffy.',
    canonical: '/blog/this-week-in-lone-mountain-heights',
    body: [
      'Each week Dr. Jan Duffy tracks new listings, pending sales, and price changes across Lone Mountain Heights neighborhoods and communities.',
      'Subscribe to updates by scheduling a consultation or calling 702-500-1955 for the latest 89129 market snapshot.',
    ],
  },
  'blog/complete-guide-living-lone-mountain-heights': {
    title: 'Complete Guide to Living in Lone Mountain Heights',
    h1: 'Complete Guide to Living in Lone Mountain Heights',
    description:
      'The definitive guide to living in Lone Mountain Heights, Las Vegas 89129 — homes, schools, amenities, and lifestyle.',
    canonical: '/blog/complete-guide-living-lone-mountain-heights',
    body: [
      'Lone Mountain Heights is a gated master-planned community in northwest Las Vegas (89129) built primarily between 2001 and 2005.',
      'Homes range from 2,500 to 4,400 sq ft with 3–5 bedrooms, mature landscaping, and mountain views throughout.',
      'Schedule a call with Dr. Jan Duffy to discuss buying or selling in Lone Mountain Heights.',
    ],
    faqKey: 'guideFAQs',
  },
};
