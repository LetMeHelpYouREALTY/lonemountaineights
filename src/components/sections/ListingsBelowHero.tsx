import { RealScoutOfficeListings } from '@/components/shared/JsonLd';

type ListingsBelowHeroProps = {
  title?: string;
  description?: string;
  priceMin?: string;
  priceMax?: string;
  className?: string;
};

export function ListingsBelowHero({
  title = 'Current Lone Mountain Heights Listings',
  description = 'Live MLS homes in Las Vegas 89129 — updated in real time',
  priceMin,
  priceMax,
  className = '',
}: ListingsBelowHeroProps) {
  return (
    <section
      className={`border-b border-slate-200 bg-slate-50 px-4 py-8 ${className}`}
      aria-label={title}
    >
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-2 text-center text-2xl font-bold text-[var(--heading-color)]">{title}</h2>
        <p className="mb-6 text-center text-[var(--text-color)]">{description}</p>
        <RealScoutOfficeListings priceMin={priceMin} priceMax={priceMax} />
      </div>
    </section>
  );
}