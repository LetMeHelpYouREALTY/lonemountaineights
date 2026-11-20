import { RealScoutOfficeListings } from '@/components/shared/JsonLd';

const FULL_SEARCH_URL =
  'https://drjanduffy.realscout.com/homesearch/shared-searches/U2hhcmVhYmxlU2VhcmNoTGluay0yOTMx';

type ListingsBelowHeroProps = {
  title?: string;
  description?: string;
  priceMin?: string;
  priceMax?: string;
  className?: string;
};

function compactPrice(value: string): string {
  const amount = Number(value);
  if (amount >= 1_000_000) return `$${Number((amount / 1_000_000).toFixed(1))}M`;
  return `$${Math.round(amount / 1000)}K`;
}

/**
 * RealScout office-listings feed. The feed covers the whole BHHS Nevada Properties
 * office (Las Vegas Valley), not only 89129, so copy must not call these
 * "Lone Mountain Heights listings".
 */
export function ListingsBelowHero({
  title = 'Live Las Vegas MLS Listings',
  description,
  priceMin = '500000',
  priceMax = '800000',
  className = '',
}: ListingsBelowHeroProps) {
  const range = `${compactPrice(priceMin)}–${compactPrice(priceMax)}`;
  const summary =
    description ??
    `Newest ${range} listings from Dr. Jan Duffy's Berkshire Hathaway HomeServices Nevada Properties office across the Las Vegas Valley, updated automatically from the MLS.`;

  return (
    <section
      className={`border-b border-slate-200 bg-slate-50 px-4 py-8 ${className}`}
      aria-labelledby="live-listings-heading"
    >
      <div className="mx-auto max-w-6xl">
        <h2
          id="live-listings-heading"
          className="mb-2 text-center text-2xl font-bold text-[var(--heading-color)]"
        >
          {title}
        </h2>
        <p className="mx-auto mb-6 max-w-3xl text-center text-[var(--text-color)]">{summary}</p>
        <RealScoutOfficeListings priceMin={priceMin} priceMax={priceMax} />
        <p className="mt-4 text-center text-sm">
          <a
            href={FULL_SEARCH_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-[var(--heading-color)] underline underline-offset-2 hover:opacity-80"
          >
            Open the full Las Vegas home search
            <span className="sr-only"> (opens RealScout in a new tab)</span>
          </a>
        </p>
      </div>
    </section>
  );
}
