import type { CalendlyEvent } from '@/lib/calendly';

/** Page content config for SEO-rich inner pages */
export type PageConfig = {
  /** Full <title>, 60 characters or fewer (no layout template is appended). */
  title: string;
  h1: string;
  /** Meta description, 160 characters or fewer. */
  description: string;
  canonical: string;
  body: string[];
  faqKey?: string;
  /** Calendly event for this page's booking CTAs (defaults to the 15-minute call). */
  calendlyEvent?: CalendlyEvent;
  /** Price band for the live listings strip under the hero. */
  listings?: { priceMin: string; priceMax: string };
};

export const pageConfigs: Record<string, PageConfig> = {
  amenities: {
    title: 'Lone Mountain Heights Amenities: Parks, Trails, Shopping',
    h1: 'Parks, Trails & Shopping Near Lone Mountain Heights',
    description:
      'Parks, hiking trails, shopping, and commute routes near Lone Mountain Heights in Las Vegas 89129, from local REALTOR® Dr. Jan Duffy.',
    canonical: '/amenities',
    body: [
      'Lone Mountain itself is the anchor. The summit trail climbs about 550 feet in 1.2 miles from the Vegas Vista Trail trailhead, and a perimeter route circles the base of the peak.',
      'Parks in ZIP 89129 include Lone Mountain Regional Park (9825 W. Lone Mountain Rd.), Lone Mountain Discovery Park on Jensen Street, Majestic Park, and Trigono Hills Park on Cliff Shadows Parkway.',
      'For errands, Lone Mountain Plaza and a Walmart Neighborhood Market are on W. Cheyenne Ave. The 215 Beltway passes just outside Lone Mountain for commutes across the valley.',
      'Dr. Jan Duffy maps amenity access street by street, because location within 89129 affects daily life and resale value. Park and trail details checked November 2026.',
    ],
    faqKey: 'amenitiesFAQs',
    calendlyEvent: 'buyer',
  },
  neighborhoods: {
    title: 'Lone Mountain Heights Neighborhoods | Las Vegas 89129',
    h1: 'Neighborhoods & Communities in Lone Mountain Heights',
    description:
      'Compare Lone Mountain Ranch, Desert Vista Estates, and other Lone Mountain Heights neighborhoods in Las Vegas 89129 with Dr. Jan Duffy.',
    canonical: '/neighborhoods',
    body: [
      'Lone Mountain Heights is not one uniform area. Streets differ in lot size, views, HOA dues, and commute routes.',
      'Dr. Jan Duffy matches buyers to the right street and subdivision based on budget, must-haves, and long-term plans.',
      'Start with the guides for Lone Mountain Ranch and Desert Vista Estates, or book a buyer consultation for a neighborhood tour.',
    ],
    faqKey: 'neighborhoodsFAQs',
    calendlyEvent: 'buyer',
  },
  schools: {
    title: 'Schools Near Lone Mountain Heights | CCSD Zoning, 89129',
    h1: 'Schools Serving Lone Mountain Heights',
    description:
      'How to confirm CCSD school assignments for any Lone Mountain Heights address in Las Vegas 89129, plus charter and private school basics.',
    canonical: '/schools',
    body: [
      'Clark County School District (CCSD) assigns public schools by street address, and attendance zones can change from year to year.',
      'Before you write an offer, enter the property address in CCSD\'s zoning search to see the assigned elementary, middle, and high schools.',
      'Charter and private schools set their own enrollment rules, so confirm availability directly with each school.',
      'Dr. Jan Duffy can pull the zoned schools for every listing you are considering.',
    ],
    faqKey: 'schoolsFAQs',
    calendlyEvent: 'buyer',
  },
  guide: {
    title: 'Living in Lone Mountain Heights | Las Vegas 89129 Guide',
    h1: 'Complete Guide to Living in Lone Mountain Heights',
    description:
      'Living in Lone Mountain Heights, Las Vegas 89129: location, homes, parks and trails, schools, and how to buy, from REALTOR® Dr. Jan Duffy.',
    canonical: '/guide',
    body: [
      'Lone Mountain Heights is in northwest Las Vegas (ZIP 89129), near Lone Mountain, a rocky butte just inside the 215 Beltway.',
      'Homes, lot sizes, and HOA dues vary by subdivision. Check each listing for gate access and community rules.',
      'Summerlin and Red Rock Canyon National Conservation Area are a short drive away, and the 215 connects you to the rest of the valley.',
      'Dr. Jan Duffy (500+ Las Vegas transactions) can walk you through specific streets. Use this guide as a starting point, then call for local advice.',
    ],
    faqKey: 'guideFAQs',
    calendlyEvent: 'buyer',
  },
  'market-report': {
    title: 'Lone Mountain Heights Market Report | Las Vegas 89129',
    h1: 'Lone Mountain Heights Market Report',
    description:
      'How to read the Lone Mountain Heights housing market in Las Vegas 89129: live MLS inventory plus sold comps for your street from Dr. Jan Duffy.',
    canonical: '/market-report',
    body: [
      'Prices and days on market in 89129 change month to month, so this page does not publish a single average.',
      'For homes on the market now, use the live MLS listings above. For sold prices, days on market, and list-to-sale ratios on your street, Dr. Jan Duffy pulls current comps from the MLS.',
      'Book a listing consultation for a custom report on your street or subdivision.',
    ],
    faqKey: 'marketReportFAQs',
    calendlyEvent: 'listing',
  },
  sales: {
    title: 'Recent Sales in Lone Mountain Heights | Las Vegas 89129',
    h1: 'Recent Lone Mountain Heights Sales',
    description:
      'How to see recent home sales in Lone Mountain Heights, Las Vegas 89129: ask Dr. Jan Duffy for MLS sold comps on any address.',
    canonical: '/sales',
    body: [
      'Recent closed sales drive pricing, offers, and appraisals in Lone Mountain Heights.',
      'Dr. Jan Duffy pulls sold comps from the MLS for any address in 89129, including price per square foot and days on market.',
      'Browse current listings above, or book a call for a comp analysis on any address.',
    ],
    faqKey: 'salesFAQs',
  },
  tools: {
    title: 'Lone Mountain Heights Real Estate Tools | Home Value',
    h1: 'Real Estate Tools for Lone Mountain Heights',
    description:
      'Free tools for Lone Mountain Heights buyers and sellers: an instant home value estimate, live MLS search, and online scheduling with Dr. Jan Duffy.',
    canonical: '/tools',
    body: [
      'Start with the RealScout home value tool for an instant estimate, then confirm it with a comparative market analysis from Dr. Jan Duffy.',
      'Buyers can search live MLS listings and should get pre-approved before touring. Dr. Jan Duffy can explain the steps.',
      'Book a consultation to build your buying or selling plan.',
    ],
    faqKey: 'toolsFAQs',
  },
  careers: {
    title: 'Real Estate Careers | Join Dr. Jan Duffy\'s Team',
    h1: 'Real Estate Careers with Dr. Jan Duffy',
    description:
      'Join the Lone Mountain Heights Team led by Dr. Jan Duffy at Berkshire Hathaway HomeServices Nevada Properties in Las Vegas.',
    canonical: '/careers',
    body: [
      'Dr. Jan Duffy leads a hyperlocal team focused on Lone Mountain Heights and surrounding 89129 neighborhoods.',
      'The team provides training, marketing technology, and referral network access.',
      'Book a Calendly call with Dr. Jan Duffy to talk about joining the Lone Mountain Heights Team.',
    ],
    faqKey: 'careersFAQs',
  },
  blog: {
    title: 'Lone Mountain Heights Real Estate Blog | Dr. Jan Duffy',
    h1: 'Lone Mountain Heights Real Estate Blog',
    description:
      'Market updates, neighborhood guides, and buying and selling tips for Lone Mountain Heights in Las Vegas 89129 from Dr. Jan Duffy.',
    canonical: '/blog',
    body: [
      'Read Dr. Jan Duffy\'s guide to living in Lone Mountain Heights and her latest market update.',
      'For numbers on a specific street, book a call and she will pull current MLS data.',
    ],
    faqKey: 'blogFAQs',
  },
  gallery: {
    title: 'Lone Mountain Photo Gallery | Northwest Las Vegas 89129',
    h1: 'Lone Mountain Heights Photo Gallery',
    description:
      'Photos of Lone Mountain in northwest Las Vegas (89129), plus live MLS listing photos from Dr. Jan Duffy\'s Berkshire Hathaway HomeServices office.',
    canonical: '/gallery',
    body: [
      'Lone Mountain rises above the 89129 neighborhoods around it. The photo below shows the peak and the surrounding desert.',
      'For homes, browse current listing photos in the live MLS feed above. Dr. Jan Duffy uses professional photography and video for every listing she markets.',
    ],
  },
  'market-intelligence': {
    title: 'Market Intelligence | Lone Mountain Heights Investment Data',
    h1: 'Lone Mountain Heights Market Intelligence',
    description:
      'Investor guidance for Lone Mountain Heights, Las Vegas 89129: sold comps, rent comps, HOA leasing rules, and ROI analysis from Dr. Jan Duffy.',
    canonical: '/market-intelligence',
    body: [
      'Before buying in 89129 as an investor, review recent sold comps, rent comps, HOA leasing rules, and days on market.',
      'Dr. Jan Duffy provides ROI analysis for rental, flip, or long-hold strategies in Lone Mountain Heights.',
      'Book a call for an investment brief built around your goals and budget.',
    ],
    faqKey: 'marketReportFAQs',
  },
  neighborhood: {
    title: 'Lone Mountain Heights Neighborhood Overview',
    h1: 'Lone Mountain Heights Neighborhood Overview',
    description:
      'Overview of Lone Mountain Heights in northwest Las Vegas 89129: location, homes, parks, and buying or selling with Dr. Jan Duffy.',
    canonical: '/neighborhood',
    body: [
      'Lone Mountain Heights is a residential area in northwest Las Vegas (89129), near Lone Mountain and the 215 Beltway.',
      'Homes, HOA dues, lot sizes, and views vary by subdivision, so compare listings street by street.',
      'Dr. Jan Duffy focuses on 89129. Call or book a time for a personalized neighborhood orientation.',
    ],
    faqKey: 'neighborhoodsFAQs',
    calendlyEvent: 'buyer',
  },
  'price-ranges/600k-800k': {
    title: 'Homes $600K–$800K in Lone Mountain Heights',
    h1: 'Homes $600K–$800K in Lone Mountain Heights',
    description:
      'Browse Lone Mountain Heights homes priced $600,000 to $800,000 in Las Vegas 89129, with live MLS listings and guidance from Dr. Jan Duffy.',
    canonical: '/price-ranges/600k-800k',
    body: [
      'Homes in the $600K–$800K band change weekly. Use the live MLS listings above for what is on the market today.',
      'Floor plans in this range can include single-story and two-story homes, and some have pools or mountain views.',
      'Dr. Jan Duffy compares value street by street and flags homes with resale advantages or concerns.',
    ],
    faqKey: 'priceRangeFAQs',
    calendlyEvent: 'buyer',
    listings: { priceMin: '600000', priceMax: '800000' },
  },
  'property-types/3-bedroom-homes': {
    title: '3 Bedroom Homes in Lone Mountain Heights | Las Vegas 89129',
    h1: '3 Bedroom Homes in Lone Mountain Heights',
    description:
      'Find 3 bedroom homes for sale in Lone Mountain Heights, Las Vegas 89129, with live MLS listings and buyer guidance from Dr. Jan Duffy.',
    canonical: '/property-types/3-bedroom-homes',
    body: [
      'Three-bedroom homes in Lone Mountain Heights come in single-story and two-story floor plans, and size and lot vary by subdivision.',
      'Dr. Jan Duffy can set up a search for new 3-bedroom listings in 89129 and send them as they hit the market.',
    ],
    faqKey: 'propertyTypeFAQs',
    calendlyEvent: 'buyer',
  },
  'locations/lone-mountain-ranch': {
    title: 'Lone Mountain Ranch Homes for Sale | Las Vegas 89129',
    h1: 'Lone Mountain Ranch',
    description:
      'Homes for sale in Lone Mountain Ranch, part of the Lone Mountain Heights area of Las Vegas 89129, with local REALTOR® Dr. Jan Duffy.',
    canonical: '/locations/lone-mountain-ranch',
    body: [
      'Lone Mountain Ranch is one of the 89129 neighborhoods in the Lone Mountain Heights area of northwest Las Vegas.',
      'Ask Dr. Jan Duffy for current listings, recent sales, and HOA details on any Lone Mountain Ranch street.',
    ],
    faqKey: 'locationsLoneMountainRanch',
    calendlyEvent: 'buyer',
  },
  'locations/desert-vista-estates': {
    title: 'Desert Vista Estates Homes for Sale | Las Vegas 89129',
    h1: 'Desert Vista Estates',
    description:
      'Homes for sale in Desert Vista Estates, part of the Lone Mountain Heights area of Las Vegas 89129, with local REALTOR® Dr. Jan Duffy.',
    canonical: '/locations/desert-vista-estates',
    body: [
      'Desert Vista Estates is part of the Lone Mountain Heights area in northwest Las Vegas (89129), close to parks and shopping.',
      'Contact Dr. Jan Duffy for current listings, recent sales, and off-market opportunities in Desert Vista Estates.',
    ],
    faqKey: 'locationsDesertVista',
    calendlyEvent: 'buyer',
  },
  'faq/best-schools': {
    title: 'School Zoning for Lone Mountain Heights Homes | FAQ',
    h1: 'How Do I Find the Zoned Schools for a Lone Mountain Heights Home?',
    description:
      'FAQ: How to confirm Clark County School District (CCSD) school assignments for any Lone Mountain Heights address in Las Vegas 89129.',
    canonical: '/faq/best-schools',
    body: [
      'CCSD assigns schools by address, and zones can change. Enter the property address in CCSD\'s zoning search before you write an offer.',
      'Dr. Jan Duffy can pull the zoned schools for each listing you are considering in 89129.',
    ],
    calendlyEvent: 'buyer',
  },
  'faq/hoa-fees': {
    title: 'HOA Fees in Lone Mountain Heights | FAQ',
    h1: 'HOA Fees in Lone Mountain Heights',
    description:
      'FAQ: HOA fees and community costs in Lone Mountain Heights, Las Vegas 89129, and how to confirm them for any listing with Dr. Jan Duffy.',
    canonical: '/faq/hoa-fees',
    body: [
      'HOA dues in Lone Mountain Heights vary by subdivision. They can cover common-area maintenance, gates where present, and community amenities.',
      'Dr. Jan Duffy confirms exact HOA amounts, rules, and leasing restrictions for any listing you are considering.',
    ],
  },
  'faq/home-prices-2025': {
    title: 'Lone Mountain Heights Home Prices | 89129 FAQ',
    h1: 'How Much Do Homes Cost in Lone Mountain Heights?',
    description:
      'FAQ: How to check current Lone Mountain Heights home prices in Las Vegas 89129, from live MLS asking prices to recent sold comps.',
    canonical: '/faq/home-prices-2025',
    body: [
      'Lone Mountain Heights prices vary widely by size, lot, condition, and upgrades, and they move month to month.',
      'Live MLS listings show current asking prices. For what homes actually sold for, Dr. Jan Duffy pulls recent sold comps for your price range.',
      'Contact Dr. Jan Duffy for a free updated market report with current comps for your target price range.',
    ],
  },
  'blog/this-week-in-lone-mountain-heights': {
    title: 'This Week in Lone Mountain Heights | Market Update',
    h1: 'This Week in Lone Mountain Heights',
    description:
      'Market update for Lone Mountain Heights, Las Vegas 89129: new listings, pending sales, and price changes, with current comps from Dr. Jan Duffy.',
    canonical: '/blog/this-week-in-lone-mountain-heights',
    body: [
      'Dr. Jan Duffy tracks new listings, pending sales, and price changes across Lone Mountain Heights neighborhoods.',
      'Call 702-500-1955 or book a call for the latest 89129 market snapshot.',
    ],
  },
  'blog/complete-guide-living-lone-mountain-heights': {
    title: 'Complete Guide to Living in Lone Mountain Heights',
    h1: 'Complete Guide to Living in Lone Mountain Heights',
    description:
      'A guide to living in Lone Mountain Heights, Las Vegas 89129: location, homes, parks and trails, schools, and buying with Dr. Jan Duffy.',
    canonical: '/blog/complete-guide-living-lone-mountain-heights',
    body: [
      'Lone Mountain Heights is in northwest Las Vegas (89129), near Lone Mountain, a rocky butte just inside the 215 Beltway.',
      'Homes, lot sizes, and HOA dues vary by subdivision, so compare listings street by street.',
      'The Lone Mountain summit trail, Lone Mountain Regional Park, and Majestic Park are nearby, and Summerlin is a short drive south.',
      'Check school assignments for any address with CCSD\'s zoning search before you buy.',
      'Schedule a call with Dr. Jan Duffy to talk about buying or selling in Lone Mountain Heights.',
    ],
    faqKey: 'guideFAQs',
    calendlyEvent: 'buyer',
  },
};
