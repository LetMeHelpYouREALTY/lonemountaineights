/**
 * Curated, verifiable nearby places for SEO copy, fallback UI, and ItemList schema.
 * Sources: CCSD school assignments, NPS/BLM for Red Rock, and established retail anchors cited on this site.
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
  address: string;
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
  note?: string;
};

export type AmenityCategory = {
  id: AmenityCategoryId;
  label: string;
  /** Google Places (New) `includedTypes` for searchNearby */
  includedTypes: string[];
};

/** Family suburban 89129 — schools included; parks and grocery emphasized after dining. */
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
    address: '6400 N Durango Dr, Las Vegas, NV 89149',
    lat: 36.2478,
    lng: -115.2897,
    schemaType: 'Park',
    note: 'Trail access toward Lone Mountain summit; popular with hikers and runners.',
  },
  {
    name: 'Majestic Park',
    category: 'parks',
    address: '7525 W Washington Ave, Las Vegas, NV 89128',
    lat: 36.1811,
    lng: -115.2678,
    schemaType: 'Park',
  },
  {
    name: 'Trigono Hills Park',
    category: 'parks',
    address: '9600 W Oso Blanca Rd, Las Vegas, NV 89149',
    lat: 36.293,
    lng: -115.298,
    schemaType: 'Park',
  },
  {
    name: 'Red Rock Canyon National Conservation Area',
    category: 'parks',
    address: '1000 Scenic Loop Dr, Las Vegas, NV 89161',
    lat: 36.1353,
    lng: -115.4279,
    schemaType: 'Park',
    note: 'Scenic loop and trailheads west of the valley.',
  },
  {
    name: 'Eileen Conners Elementary School',
    category: 'schools',
    address: '5525 Camino Eldorado, Las Vegas, NV 89149',
    lat: 36.2586,
    lng: -115.2765,
    schemaType: 'School',
  },
  {
    name: 'Walter Johnson Junior High School',
    category: 'schools',
    address: '7700 Alta Dr, Las Vegas, NV 89128',
    lat: 36.2012,
    lng: -115.2577,
    schemaType: 'School',
  },
  {
    name: 'Centennial High School',
    category: 'schools',
    address: '10200 Centennial Pkwy, Las Vegas, NV 89149',
    lat: 36.2745,
    lng: -115.2842,
    schemaType: 'School',
  },
  {
    name: 'Costco Wholesale (Centennial Hills)',
    category: 'grocery',
    address: '8011 W Deer Springs Way, Las Vegas, NV 89139',
    lat: 36.3045,
    lng: -115.291,
    schemaType: 'GroceryStore',
  },
  {
    name: 'Walmart Supercenter',
    category: 'grocery',
    address: '8400 W Centennial Pkwy, Las Vegas, NV 89149',
    lat: 36.282,
    lng: -115.285,
    schemaType: 'GroceryStore',
  },
  {
    name: 'Downtown Summerlin',
    category: 'shopping',
    address: '1980 Festival Plaza Dr, Las Vegas, NV 89135',
    lat: 36.1597,
    lng: -115.3336,
    schemaType: 'ShoppingCenter',
  },
  {
    name: 'Canyon Gate Country Club',
    category: 'golf',
    address: '2001 Canyon Gate Dr, Las Vegas, NV 89117',
    lat: 36.1785,
    lng: -115.3245,
    schemaType: 'GolfCourse',
  },
  {
    name: 'Summerlin Hospital Medical Center',
    category: 'healthcare',
    address: '657 N Town Center Dr, Las Vegas, NV 89144',
    lat: 36.1795,
    lng: -115.333,
    schemaType: 'Hospital',
  },
  {
    name: 'Centennial Hills Hospital Medical Center',
    category: 'healthcare',
    address: '6900 N Durango Dr, Las Vegas, NV 89149',
    lat: 36.288,
    lng: -115.29,
    schemaType: 'Hospital',
  },
];

export const AMENITIES_PAGE_FAQS = [
  {
    question: 'What grocery stores are near Lone Mountain Heights?',
    answer:
      'Residents commonly shop at Costco on Deer Springs Way, Walmart on Centennial Parkway, and grocers along Durango and the 215 Beltway corridor. Drive times are typically under 15 minutes depending on traffic and which entrance you use.',
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
      'Lone Mountain Regional Park, Majestic Park, and Trigono Hills Park are nearby neighborhood options. Red Rock Canyon National Conservation Area is west of the valley for longer hikes and scenic drives.',
  },
  {
    question: 'Which schools serve Lone Mountain Heights?',
    answer:
      'Clark County School District assignments include schools such as Eileen Conners Elementary, Walter Johnson Junior High, and Centennial High School. Always verify current zoning with CCSD before you buy.',
  },
  {
    question: 'How long does it take to reach Downtown Summerlin?',
    answer:
      'Downtown Summerlin is approximately 15–20 minutes from Lone Mountain Heights in normal traffic via Charleston Boulevard or the 215 Beltway, depending on your starting street.',
  },
  {
    question: 'Is golf accessible from Lone Mountain Heights?',
    answer:
      'Canyon Gate Country Club borders the northwest Las Vegas area near Lone Mountain, and additional public and private courses are available in Summerlin and Centennial Hills within a short drive.',
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
      'Lone Mountain Regional Park offers desert trail access toward the Lone Mountain summit. Majestic Park and Trigono Hills Park add playgrounds, sports fields, and green space for families.',
      'Red Rock Canyon National Conservation Area is the signature outdoor destination west of Las Vegas — ideal for hiking, cycling, and scenic drives without leaving the valley.',
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
      'Big-box shopping includes Costco on Deer Springs Way and Walmart on Centennial Parkway. Downtown Summerlin adds department stores, boutiques, and dining in a walkable district roughly 15–20 minutes away in typical traffic.',
    ],
  },
  {
    id: 'schools',
    title: 'Schools',
    paragraphs: [
      'Families in Lone Mountain Heights are served by Clark County School District campuses including Eileen Conners Elementary, Walter Johnson Junior High, and Centennial High School. Somerset Academy Lone Mountain and private options are also available in the northwest valley.',
      'Dr. Jan Duffy recommends confirming school boundaries with CCSD for your exact street before writing an offer.',
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
