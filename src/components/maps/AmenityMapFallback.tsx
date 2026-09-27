import Link from 'next/link';
import { communityEmbedMapUrl, COMMUNITY } from '@/lib/community-config';
import {
  AMENITY_CATEGORIES,
  CURATED_NEARBY_PLACES,
  type AmenityCategoryId,
} from '@/lib/nearby-amenities';

type AmenityMapFallbackProps = {
  activeCategory?: AmenityCategoryId;
  compact?: boolean;
  showCuratedList?: boolean;
};

export function AmenityMapFallback({
  activeCategory = 'parks',
  compact = false,
  showCuratedList = true,
}: AmenityMapFallbackProps) {
  const heightClass = compact ? 'min-h-[280px] h-[280px]' : 'min-h-[420px] h-[420px]';
  const filtered = CURATED_NEARBY_PLACES.filter((p) => p.category === activeCategory).slice(0, 8);

  return (
    <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
      <iframe
        title={`Map of ${COMMUNITY.name}, ${COMMUNITY.city}`}
        src={communityEmbedMapUrl()}
        className={`w-full border-0 ${heightClass}`}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      />
      {showCuratedList && (
        <div className="border-t border-slate-100 p-4 md:p-6">
          <p className="mb-3 text-sm text-[var(--text-light)]">
            Interactive amenity search loads when Google Maps is configured. Featured places near{' '}
            {COMMUNITY.name}:
          </p>
          <ul className="grid gap-2 sm:grid-cols-2">
            {(filtered.length > 0 ? filtered : CURATED_NEARBY_PLACES.slice(0, 6)).map((place) => (
              <li key={place.name} className="text-sm">
                <span className="font-medium text-[var(--heading-color)]">{place.name}</span>
                <span className="block text-[var(--text-light)]">{place.address}</span>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-sm">
            <Link href="/amenities" className="font-semibold text-[var(--accent-dark)] hover:underline">
              Explore the full Nearby Amenities guide →
            </Link>
          </p>
        </div>
      )}
      <p className="sr-only">
        Category filters available on the full amenities page:{' '}
        {AMENITY_CATEGORIES.map((c) => c.label).join(', ')}
      </p>
    </div>
  );
}
