import { RealScoutOfficeListings } from '@/components/shared/JsonLd';

type ListingsBelowHeroProps = {
  title?: string;
  description?: string;
  priceMin?: string;
  priceMax?: string;
  className?: string;
};

function formatPrice(value: string): string {
  const n = Number(value);
  return n >= 1_000_000 ? `$${Number((n / 1_000_000).toFixed(1))}M` : `$${Math.round(n / 1000)}K`;
}

/**
 * realscout-office-listings shows the office's newest listings valley-wide (it has no location filter),
 * so copy here must not describe them as Lone Mountain Heights homes.
 */
export function ListingsBelowHero({
  title = 'Featured Las Vegas Listings',
  description,
  priceMin = '500000',
  priceMax = '800000',
  className = '',
}: ListingsBelowHeroProps) {
  const subtitle =
    description ??
    `Newest ${formatPrice(priceMin)}–${formatPrice(priceMax)} listings from Dr. Jan Duffy's office across the Las Vegas Valley, live from the MLS`;

  return (
    <section
      className={`border-b border-slate-200 bg-slate-50 px-4 py-8 ${className}`}
      aria-labelledby="listings-below-hero-heading"
    >
      <div className="mx-auto max-w-6xl">
        <h2
          id="listings-below-hero-heading"
          className="mb-2 text-center text-2xl font-bold text-[var(--heading-color)]"
        >
          {title}
        </h2>
        <p className="mb-6 text-center text-[var(--text-color)]">{subtitle}</p>
        <RealScoutOfficeListings priceMin={priceMin} priceMax={priceMax} />
      </div>
    </section>
  );
}
