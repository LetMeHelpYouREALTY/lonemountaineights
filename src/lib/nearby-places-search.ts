import { COMMUNITY } from '@/lib/community-config';
import { AMENITY_CATEGORIES, type AmenityCategoryId } from '@/lib/nearby-amenities';

const cache = new Map<string, Promise<google.maps.places.Place[]>>();

export function searchCategory(
  center: google.maps.LatLngLiteral,
  categoryId: AmenityCategoryId,
): Promise<google.maps.places.Place[]> {
  const cat = AMENITY_CATEGORIES.find((c) => c.id === categoryId);
  if (!cat) {
    return Promise.resolve([]);
  }

  let p = cache.get(categoryId);
  if (!p) {
    p = (async () => {
      const { Place } = (await google.maps.importLibrary('places')) as google.maps.PlacesLibrary;
      const { places } = await Place.searchNearby({
        fields: ['displayName', 'location', 'formattedAddress', 'googleMapsURI'],
        locationRestriction: {
          center,
          radius: 5000,
        },
        includedPrimaryTypes: cat.includedTypes,
        maxResultCount: 10,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any -- Places API rankPreference string (senior review pattern)
        rankPreference: 'POPULARITY' as any,
      });
      return places;
    })();
    p.catch(() => cache.delete(categoryId));
    cache.set(categoryId, p);
  }
  return p;
}

export function searchCategoryForCommunity(categoryId: AmenityCategoryId) {
  return searchCategory(COMMUNITY.center, categoryId);
}
