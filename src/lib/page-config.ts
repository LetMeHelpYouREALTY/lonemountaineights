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
    title: 'Lone Mountain Heights Amenities | Parks, Shopping & Recreation',
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
    title: 'Lone Mountain Heights Neighborhoods & Communities Guide | Las Vegas 89129',
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
      'School information for Lone Mountain Heights, Las Vegas 89129 — CCSD assignments, ratings, and private options from Dr. Jan Duffy.',
    canonical: '/schools',
    body: [
      'Families in Lone Mountain Heights are served by Clark County School District schools including Eileen Conners Elementary, Walter Johnson Junior High, and Centennial High School.',
      'The area also offers access to Somerset Academy Lone Mountain and private options like The Meadows School.',
      'Dr. Jan Duffy helps relocating families verify school boundaries before they buy — a critical step in Lone Mountain Heights real estate.',
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
      'Dr. Jan Duffy has guided hundreds of buyers and sellers through Lone Mountain Heights — use this guide as a starting point, then call for hyperlocal advice.',
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
      'The Lone Mountain Heights market averages approximately $847,000 with homes selling in about 12–23 days depending on price point and condition.',
      'Inventory remains tight in the 89129 zip code, supporting strong list-to-sale ratios for well-priced, well-marketed properties.',
      'Request a free custom market report from Dr. Jan Duffy for your specific street or subdivision.',
    ],
    faqKey: 'marketReportFAQs',
  },
  sales: {
    title: 'Recent Sales in Lone Mountain Heights | Las Vegas 89129',
    h1: 'Recent Lone Mountain Heights Sales',
    description:
      'See recent home sales in Lone Mountain Heights, Las Vegas 89129. Dr. Jan Duffy tracks every transaction in the community.',
    canonical: '/sales',
    body: [
      'Understanding recent sales is essential for pricing, offers, and investment decisions in Lone Mountain Heights.',
      'Dr. Jan Duffy maintains detailed knowledge of closed transactions across every neighborhood and community in 89129.',
      'Browse current listings below or contact Dr. Jan for a comp analysis on any address.',
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
    title: 'Real Estate Careers | Join Dr. Jan Duffy Team',
    h1: 'Real Estate Careers with Dr. Jan Duffy',
    description:
      'Join the Berkshire Hathaway HomeServices Lone Mountain Heights team led by Dr. Jan Duffy. Las Vegas real estate career opportunities.',
    canonical: '/careers',
    body: [
      'Dr. Jan Duffy leads a hyperlocal team focused exclusively on Lone Mountain Heights and surrounding 89129 communities.',
      'Berkshire Hathaway HomeServices Nevada Properties provides training, marketing technology, and global network access.',
      'Contact Dr. Jan Duffy to discuss career opportunities on the Lone Mountain Heights team.',
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
      'Photos of Lone Mountain Heights homes, community, and Las Vegas 89129 lifestyle from Dr. Jan Duffy.',
    canonical: '/gallery',
    body: [
      'Explore the beauty of Lone Mountain Heights — mountain views, mature landscaping, and quality construction throughout the community.',
      'Dr. Jan Duffy uses professional photography and video for every listing to maximize exposure and buyer engagement.',
    ],
  },
  'market-intelligence': {
    title: 'Market Intelligence | Lone Mountain Heights Investment Data',
    h1: 'Lone Mountain Heights Market Intelligence',
    description:
      'Investment insights, ROI analysis, and market intelligence for Lone Mountain Heights real estate from Dr. Jan Duffy.',
    canonical: '/market-intelligence',
    body: [
      'Lone Mountain Heights has shown strong year-over-year appreciation with limited inventory supporting long-term value.',
      'Dr. Jan Duffy provides ROI analysis for investors considering rental, flip, or long-hold strategies in 89129.',
      'Request a custom investment brief tailored to your goals and budget.',
    ],
    faqKey: 'marketReportFAQs',
  },
  neighborhood: {
    title: 'Lone Mountain Heights Neighborhood Overview',
    h1: 'Lone Mountain Heights Neighborhood Overview',
    description:
      'Overview of the Lone Mountain Heights community in Las Vegas 89129 — homes, lifestyle, and real estate with Dr. Jan Duffy.',
    canonical: '/neighborhood',
    body: [
      'Lone Mountain Heights is one of Las Vegas\'s most desirable northwest communities, known for gated streets, quality builders, and mountain views.',
      'Dr. Jan Duffy is the recognized local expert — contact her for a personalized neighborhood orientation.',
    ],
    faqKey: 'neighborhoodsFAQs',
  },
  'price-ranges/600k-800k': {
    title: 'Homes $600K–$800K in Lone Mountain Heights',
    h1: 'Homes $600K–$800K in Lone Mountain Heights',
    description:
      'Browse Lone Mountain Heights homes priced between $600,000 and $800,000. Expert guidance from Dr. Jan Duffy, Las Vegas 89129.',
    canonical: '/price-ranges/600k-800k',
    body: [
      'The $600K–$800K range is the sweet spot for many Lone Mountain Heights families — updated single-story and two-story homes with pools and mountain views.',
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
      'Three-bedroom homes in Lone Mountain Heights typically range from 1,750–2,500 sq ft and appeal to growing families and professionals.',
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
      'Dr. Jan Duffy has closed numerous transactions in Lone Mountain Ranch and knows every active and recent sale on each street.',
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
      'Desert Vista Estates offers a quiet, family-friendly setting within Lone Mountain Heights with strong school access and community amenities.',
      'Contact Dr. Jan Duffy for current listings, recent sales, and off-market opportunities in Desert Vista Estates.',
    ],
    faqKey: 'locationsDesertVista',
  },
  'faq/best-schools': {
    title: 'Best Schools Near Lone Mountain Heights | FAQ',
    h1: 'What Are the Best Schools Near Lone Mountain Heights?',
    description:
      'FAQ: Best schools serving Lone Mountain Heights, Las Vegas 89129. Expert answer from Dr. Jan Duffy.',
    canonical: '/faq/best-schools',
    body: [
      'Lone Mountain Heights is served by highly rated CCSD schools. Assignments vary by address — always verify boundaries before purchasing.',
      'Dr. Jan Duffy helps families map school zones to specific streets and listings in 89129.',
    ],
  },
  'faq/hoa-fees': {
    title: 'HOA Fees in Lone Mountain Heights | FAQ',
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
    title: 'Lone Mountain Heights Home Prices 2025 | FAQ',
    h1: 'Lone Mountain Heights Home Prices in 2025',
    description:
      'FAQ: Current home prices and market trends in Lone Mountain Heights, Las Vegas 89129 for 2025.',
    canonical: '/faq/home-prices-2025',
    body: [
      'Average sale prices in Lone Mountain Heights are approximately $847,000 with a range from the mid-$600s to $1M+ for luxury properties.',
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
      'Subscribe to updates by scheduling a consultation or calling 702-222-1964 for the latest 89129 market snapshot.',
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
      'Dr. Jan Duffy is the community\'s leading real estate expert — schedule a call to discuss buying or selling in Lone Mountain Heights.',
    ],
    faqKey: 'guideFAQs',
  },
};
