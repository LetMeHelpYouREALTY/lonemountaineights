/**
 * Curated nearby places for SEO copy, fallback UI, and ItemList schema.
 * Each entry includes a primary-source URL; addresses verified against that source (2026-09-27).
 */

export type AmenityCategoryId =
  | 'restaurants'
  | 'cafes'
  | 'grocery'
  | 'parks'
  | 'golf'
  | 'healthcare'
  | 'pharmacies'
  | 'shopping'
  | 'parking'
  | 'fitness'
  | 'schools';

export type CuratedPlace = {
  name: string;
  category: AmenityCategoryId;
  address?: string;
  lat: number;
  lng: number;
  schemaType:
    | 'Restaurant'
    | 'CafeOrCoffeeShop'
    | 'GroceryStore'
    | 'Park'
    | 'GolfCourse'
    | 'Hospital'
    | 'Pharmacy'
    | 'ShoppingCenter'
    | 'School'
    | 'ExerciseGym';
  sourceUrl: string;
  note?: string;
};

export type AmenityCategory = {
  id: AmenityCategoryId;
  label: string;
  /** Google Places (New) `includedTypes` for searchNearby */
  includedTypes: string[];
};

export const AMENITY_CATEGORIES: AmenityCategory[] = [
  { id: 'parks', label: 'Parks', includedTypes: ['park', 'national_park', 'hiking_area'] },
  { id: 'schools', label: 'Schools', includedTypes: ['school', 'primary_school', 'secondary_school'] },
  { id: 'grocery', label: 'Grocery', includedTypes: ['grocery_store', 'supermarket'] },
  { id: 'restaurants', label: 'Restaurants', includedTypes: ['restaurant'] },
  { id: 'cafes', label: 'Cafes', includedTypes: ['cafe', 'coffee_shop'] },
  { id: 'shopping', label: 'Shopping', includedTypes: ['shopping_mall', 'department_store'] },
  { id: 'golf', label: 'Golf', includedTypes: ['golf_course'] },
  { id: 'healthcare', label: 'Healthcare', includedTypes: ['hospital', 'doctor'] },
  { id: 'pharmacies', label: 'Pharmacies', includedTypes: ['pharmacy', 'drugstore'] },
  { id: 'fitness', label: 'Fitness', includedTypes: ['gym', 'fitness_center'] },
  { id: 'parking', label: 'Parking', includedTypes: ['parking'] },
];

export const CURATED_NEARBY_PLACES: CuratedPlace[] = [
  {
    name: 'Lone Mountain Regional Park',
    category: 'parks',
    address: '9825 W Lone Mountain Rd, Las Vegas, NV 89129',
    lat: 36.2468,
    lng: -115.3119,
    schemaType: 'Park',
    sourceUrl:
      'https://www.clarkcountynv.gov/government/departments/parks___recreation/services/area_reservations/',
    note: 'Clark County regional park with trails and reservable picnic areas.',
  },
  {
    name: 'Majestic Park',
    category: 'parks',
    address: '9902 W Gowan Rd, Las Vegas, NV 89147',
    lat: 36.0712,
    lng: -115.2945,
    schemaType: 'Park',
    sourceUrl: 'https://www.lasvegasnevada.gov/Residents/Parks-Facilities/Majestic-Park',
    note: 'City of Las Vegas softball complex and open space west of the 215.',
  },
  {
    name: 'Trigono Hills Park',
    category: 'parks',
    address: '3805 Cliff Shadows Pkwy, Las Vegas, NV 89129',
    lat: 36.2581,
    lng: -115.2725,
    schemaType: 'Park',
    sourceUrl: 'https://www.lasvegasnevada.gov/Residents/Parks-Facilities/Trigono-Hills',
  },
  {
    name: 'Red Rock Canyon National Conservation Area',
    category: 'parks',
    address: '1000 Scenic Loop Dr, Las Vegas, NV 89161',
    lat: 36.1353,
    lng: -115.4279,
    schemaType: 'Park',
    sourceUrl: 'https://www.blm.gov/visit/red-rock-canyon-national-conservation-area',
    note: 'BLM visitor center and scenic loop west of Las Vegas.',
  },
  {
    name: 'Eileen Conners Elementary School',
    category: 'schools',
    address: '3810 Shadow Peak St, Las Vegas, NV 89129',
    lat: 36.2562,
    lng: -115.2688,
    schemaType: 'School',
    sourceUrl: 'https://www.connerselementary.com/apps/contact/',
  },
  {
    name: 'Walter Johnson Junior High School',
    category: 'schools',
    address: '7701 Ducharme Ave, Las Vegas, NV 89145',
    lat: 36.1789,
    lng: -115.2812,
    schemaType: 'School',
    sourceUrl: 'https://www.johnsonjhs.org/apps/contact/',
  },
  {
    name: 'Centennial High School',
    category: 'schools',
    address: '10200 Centennial Pkwy, Las Vegas, NV 89149',
    lat: 36.2745,
    lng: -115.2842,
    schemaType: 'School',
    sourceUrl: 'https://www.centennialhighschool.org/apps/contact/',
  },
  {
    name: 'Costco Wholesale (Centennial)',
    category: 'grocery',
    address: '6555 N Decatur Blvd, Las Vegas, NV 89131',
    lat: 36.2815,
    lng: -115.2075,
    schemaType: 'GroceryStore',
    sourceUrl: 'https://www.costco.com/warehouse-locations/warehouse-737.html',
  },
  {
    name: 'Walmart Supercenter (Centennial Hills)',
    category: 'grocery',
    address: '8060 W Tropical Pkwy, Las Vegas, NV 89149',
    lat: 36.2718,
    lng: -115.2664,
    schemaType: 'GroceryStore',
    sourceUrl: 'https://www.walmart.com/store/2884-las-vegas-nv',
  },
  {
    name: 'Downtown Summerlin',
    category: 'shopping',
    address: '1980 Festival Plaza Dr, Las Vegas, NV 89135',
    lat: 36.1597,
    lng: -115.3336,
    schemaType: 'ShoppingCenter',
    sourceUrl: 'https://summerlin.com/downtown-summerlin/',
  },
  {
    name: 'Canyon Gate Country Club',
    category: 'golf',
    address: '2001 Canyon Gate Dr, Las Vegas, NV 89117',
    lat: 36.1785,
    lng: -115.3245,
    schemaType: 'GolfCourse',
    sourceUrl: 'https://www.invitedclubs.com/clubs/canyon-gate-country-club/contact-us/',
  },
  {
    name: 'Summerlin Hospital Medical Center',
    category: 'healthcare',
    address: '657 N Town Center Dr, Las Vegas, NV 89144',
    lat: 36.1795,
    lng: -115.333,
    schemaType: 'Hospital',
    sourceUrl: 'https://www.summerlinhospital.com/about/contact-us',
  },
  {
    name: 'Centennial Hills Hospital Medical Center',
    category: 'healthcare',
    address: '6900 N Durango Dr, Las Vegas, NV 89149',
    lat: 36.288,
    lng: -115.29,
    schemaType: 'Hospital',
    sourceUrl: 'https://www.centennialhillshospital.com/about/contact-us',
  },
];

export const AMENITIES_PAGE_FAQS = [
  {
    question: 'What grocery stores are near Lone Mountain Heights?',
    answer:
      'Residents commonly shop at Costco on North Decatur Boulevard, Walmart on West Tropical Parkway, and grocers along Durango Drive and the 215 Beltway corridor. Drive times vary with traffic and which entrance you use from Lone Mountain Heights.',
  },
  {
    question: 'How far is Lone Mountain Heights from the Las Vegas Strip?',
    answer:
      'The Strip is roughly 20–25 minutes by car in typical off-peak traffic via the 215 Beltway and I-15. Rush-hour commutes can run longer; plan on approximately 30 minutes when traffic is heavy.',
  },
  {
    question: 'Are there hospitals near Lone Mountain Heights?',
    answer:
      'Yes. Summerlin Hospital Medical Center and Centennial Hills Hospital Medical Center are both within a short drive of Lone Mountain Heights, along with urgent care and physician offices in Summerlin and Centennial Hills.',
  },
  {
    question: 'What parks and trails are closest to Lone Mountain Heights?',
    answer:
      'Lone Mountain Regional Park, Trigono Hills Park, and Majestic Park are common northwest valley options. Red Rock Canyon National Conservation Area is west of the valley for longer hikes and scenic drives.',
  },
  {
    question: 'Which CCSD schools are assigned to Lone Mountain Heights addresses?',
    answer:
      'Clark County School District assignments can include campuses such as Eileen Conners Elementary, Walter Johnson Junior High, and Centennial High School depending on your street. Verify current zoning with the CCSD Zoning Search before you buy.',
  },
  {
    question: 'How long does it take to reach Downtown Summerlin?',
    answer:
      'Downtown Summerlin is approximately 15–20 minutes from Lone Mountain Heights in normal traffic via Charleston Boulevard or the 215 Beltway, depending on your starting street.',
  },
  {
    question: 'Is golf accessible from Lone Mountain Heights?',
    answer:
      'Canyon Gate Country Club is adjacent to the northwest Las Vegas area near Lone Mountain, and additional public and private courses are available in Summerlin and Centennial Hills within a short drive.',
  },
  {
    question: 'How far is Harry Reid International Airport from Lone Mountain Heights?',
    answer:
      'Harry Reid International Airport is approximately 25–35 minutes by car via the 215 Beltway and I-15 in typical conditions. Allow extra time for peak travel periods.',
  },
];

export type AmenityContentSection = {
  id: string;
  title: string;
  paragraphs: string[];
};

export const AMENITIES_CONTENT_SECTIONS: AmenityContentSection[] = [
  {
    id: 'dining',
    title: 'Dining & Cafes',
    paragraphs: [
      'Lone Mountain Heights sits between established west-side retail corridors and Summerlin. You will find national chains, local favorites, and coffee shops along Durango Drive, Centennial Parkway, and Charleston Boulevard.',
      'Many residents grab groceries and a quick meal in Centennial Hills or Summerlin after work, while weekend dining often heads to Downtown Summerlin or Red Rock Resort area restaurants.',
    ],
  },
  {
    id: 'parks-recreation',
    title: 'Parks & Recreation',
    paragraphs: [
      'Lone Mountain Regional Park offers desert trail access near the Lone Mountain summit. Trigono Hills Park adds playgrounds, sports fields, and shaded play areas.',
      'Red Rock Canyon National Conservation Area is a signature outdoor destination west of Las Vegas — ideal for hiking, cycling, and scenic drives without leaving the valley.',
    ],
  },
  {
    id: 'golf',
    title: 'Golf',
    paragraphs: [
      'Canyon Gate Country Club is the landmark private course adjacent to the Lone Mountain area. Additional public and resort courses in Summerlin and the west valley are within a short drive for league play and stay-and-play visitors.',
    ],
  },
  {
    id: 'healthcare',
    title: 'Healthcare',
    paragraphs: [
      'Summerlin Hospital Medical Center and Centennial Hills Hospital Medical Center anchor acute care for the northwest valley. Urgent care, imaging, and specialty clinics cluster along Town Center Drive, Durango, and the 215 Beltway.',
    ],
  },
  {
    id: 'shopping',
    title: 'Shopping & Errands',
    paragraphs: [
      'Big-box shopping includes Costco on North Decatur Boulevard and Walmart on West Tropical Parkway. Downtown Summerlin adds department stores, boutiques, and dining in a walkable district roughly 15–20 minutes away in typical traffic.',
    ],
  },
  {
    id: 'schools',
    title: 'Schools',
    paragraphs: [
      'Households in Lone Mountain Heights are served by Clark County School District campuses that may include Eileen Conners Elementary, Walter Johnson Junior High, and Centennial High School depending on the address.',
      'Which CCSD schools are assigned to Lone Mountain Heights addresses? Verify with the CCSD Zoning Search before you write an offer.',
    ],
  },
  {
    id: 'commute',
    title: 'Commute & Regional Access',
    paragraphs: [
      'The 215 Beltway links Lone Mountain Heights to Summerlin, Centennial Hills, the Strip corridor, and Harry Reid International Airport. Charleston Boulevard and US-95 provide additional east-west routes across the valley.',
      'Approximate drive times (traffic-dependent): Downtown Summerlin 15–20 minutes; Las Vegas Strip 20–30 minutes; Harry Reid International Airport 25–35 minutes.',
    ],
  },
];

export function placesForCategory(category: AmenityCategoryId): CuratedPlace[] {
  return CURATED_NEARBY_PLACES.filter((p) => p.category === category);
}
