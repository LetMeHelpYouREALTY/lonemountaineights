'use client';

import Link from 'next/link';
import { AmenityMap } from '@/components/maps/AmenityMap';
import { COMMUNITY } from '@/lib/community-config';

type NearbyAmenitiesSectionProps = {
  title?: string;
  compact?: boolean;
  className?: string;
};

export function NearbyAmenitiesSection({
  title = `Life Near ${COMMUNITY.name}`,
  compact = true,
  className = '',
}: NearbyAmenitiesSectionProps) {
  return (
    <section className={`my-12 ${className}`} aria-labelledby="nearby-amenities-heading">
      <div className="mb-6 text-center">
        <h2 id="nearby-amenities-heading" className="text-2xl font-bold text-[var(--heading-color)] md:text-3xl">
          {title}
        </h2>
        <p className="mx-auto mt-2 max-w-2xl text-[var(--text-color)]">
          Parks, schools, grocery, and healthcare within minutes of {COMMUNITY.name},{' '}
          {COMMUNITY.city} {COMMUNITY.postalCode}.
        </p>
      </div>
      <AmenityMap compact={compact} />
      <p className="mt-4 text-center">
        <Link
          href="/amenities"
          className="inline-flex items-center gap-1 font-semibold text-[var(--accent-dark)] hover:underline"
        >
          View full Nearby Amenities guide →
        </Link>
      </p>
    </section>
  );
}
