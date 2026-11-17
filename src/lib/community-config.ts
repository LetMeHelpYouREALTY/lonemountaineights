/**
 * Lone Mountain Heights — hyperlocal map center and community identity.
 * Coordinates align with GBP map pin / schema (36.2569, -115.2419) for ZIP 89129.
 * @see https://www.google.com/maps/place/Lone+Mountain+Heights,+Las+Vegas,+NV+89129
 */
export const COMMUNITY = {
  name: 'Lone Mountain Heights',
  city: 'Las Vegas',
  region: 'NV',
  postalCode: '89129',
  center: {
    lat: 36.2569,
    lng: -115.2419,
  },
  defaultZoom: 14,
  searchRadiusMeters: 8000,
} as const;

export function communityEmbedMapUrl(): string {
  const { lat, lng } = COMMUNITY.center;
  return `https://www.google.com/maps?q=${lat},${lng}&z=${COMMUNITY.defaultZoom}&output=embed`;
}

export function directionsUrl(lat: number, lng: number, placeName?: string): string {
  const destination = placeName
    ? encodeURIComponent(`${placeName}, ${COMMUNITY.city}, ${COMMUNITY.region}`)
    : `${lat},${lng}`;
  return `https://www.google.com/maps/dir/?api=1&destination=${destination}`;
}
