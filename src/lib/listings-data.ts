export type HomeListing = {
  id: number;
  address: string;
  price: number;
  bedrooms: number;
  bathrooms: number;
  sqft: number;
  lotSize: string;
  daysOnMarket: number;
  image: string;
  insight: string;
  homeStyle: string;
  yearBuilt: number;
  garage: number;
  pool: boolean;
  view: string;
  propertyType: string;
  isNewListing?: boolean;
  isLuxury?: boolean;
};

export const featuredHomes: HomeListing[] = [
  {
    id: 1, address: '1234 Mountain View Dr', price: 875000, bedrooms: 4, bathrooms: 3, sqft: 2450,
    lotSize: '0.25 acres', daysOnMarket: 8, image: '/images/photos/home-featured-1.jpg',
    insight: 'Corner lot with mountain views - premium location in the neighborhood',
    homeStyle: 'Two Story', yearBuilt: 2018, garage: 2, pool: true, view: 'Mountain',
    propertyType: 'Single Family', isNewListing: true,
  },
  {
    id: 2, address: '5678 Desert Ridge Ln', price: 725000, bedrooms: 3, bathrooms: 2, sqft: 1890,
    lotSize: '0.18 acres', daysOnMarket: 15, image: '/images/photos/home-featured-2.jpg',
    insight: 'Recently updated kitchen - great value for the area',
    homeStyle: 'Single Story', yearBuilt: 2015, garage: 2, pool: false, view: 'Golf Course',
    propertyType: 'Single Family',
  },
  {
    id: 3, address: '9012 Lone Mountain Blvd', price: 950000, bedrooms: 5, bathrooms: 4, sqft: 3200,
    lotSize: '0.35 acres', daysOnMarket: 3, image: '/images/photos/home-featured-3.jpg',
    insight: 'Luxury finishes throughout - one of the best streets in the area',
    homeStyle: 'Two Story', yearBuilt: 2020, garage: 3, pool: true, view: 'Mountain',
    propertyType: 'Single Family', isNewListing: true, isLuxury: true,
  },
  {
    id: 4, address: '3456 Canyon Heights Way', price: 680000, bedrooms: 3, bathrooms: 2, sqft: 1750,
    lotSize: '0.15 acres', daysOnMarket: 22, image: '/images/photos/home-featured-1.jpg',
    insight: 'Great starter home with potential for updates',
    homeStyle: 'Single Story', yearBuilt: 2012, garage: 2, pool: false, view: 'Neighborhood',
    propertyType: 'Single Family',
  },
  {
    id: 5, address: '7890 Desert View Ln', price: 825000, bedrooms: 4, bathrooms: 3, sqft: 2200,
    lotSize: '0.22 acres', daysOnMarket: 12, image: '/images/photos/las-vegas-neighborhood.jpg',
    insight: 'Solar panels included - significant energy savings',
    homeStyle: 'Two Story', yearBuilt: 2017, garage: 2, pool: true, view: 'Desert',
    propertyType: 'Single Family',
  },
  {
    id: 6, address: '2345 Mountain Ridge Dr', price: 750000, bedrooms: 3, bathrooms: 2, sqft: 1950,
    lotSize: '0.20 acres', daysOnMarket: 18, image: '/images/photos/home-featured-2.jpg',
    insight: 'Cul-de-sac location - quiet street with minimal traffic',
    homeStyle: 'Single Story', yearBuilt: 2016, garage: 2, pool: false, view: 'Mountain',
    propertyType: 'Single Family',
  },
];

export const luxuryHomes = [
  {
    id: 1, address: '1234 Mountain View Dr', price: 1250000, beds: 5, baths: 4, sqft: 4200,
    image: '/images/photos/home-featured-1.jpg',
    features: ['Mountain Views', 'Pool', 'Gourmet Kitchen', 'Master Suite'],
  },
  {
    id: 2, address: '5678 Desert Vista Way', price: 980000, beds: 4, baths: 3, sqft: 3800,
    image: '/images/photos/home-featured-2.jpg',
    features: ['Golf Course', 'Gated Community', 'Updated Kitchen', 'Garage'],
  },
  {
    id: 3, address: '9012 Sunset Ridge', price: 1450000, beds: 6, baths: 5, sqft: 4800,
    image: '/images/photos/home-featured-3.jpg',
    features: ['City Views', 'Wine Cellar', 'Home Theater', 'Pool'],
  },
];
