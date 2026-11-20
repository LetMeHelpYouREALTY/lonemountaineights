'use client';

import Link from 'next/link';
import { CalendlyLink } from '@/components/shared/CalendlyLink';
import {
  RealScoutOfficeListings,
  RealScoutSimpleSearch,
} from '@/components/shared/JsonLd';

type HeroRealScoutBandProps = {
  showListings?: boolean;
  priceMin?: string;
  priceMax?: string;
  listingsTitle?: string;
};

/**
 * MLS search sits directly under page heroes — not inside the hero overlay.
 */
export function HeroRealScoutBand({
  showListings = true,
  priceMin = '500000',
  priceMax = '1000000',
  listingsTitle = 'Current Lone Mountain Heights listings',
}: HeroRealScoutBandProps) {
  return (
    <section
      className="border-b border-slate-200 bg-white py-10 md:py-12"
      aria-label="Search Lone Mountain Heights homes"
    >
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <div className="rounded-2xl border border-slate-200 bg-[var(--warm-cream)] p-6 shadow-sm md:p-8">
          <h2 className="mb-1 text-2xl font-bold text-[var(--heading-color)]">
            Search Lone Mountain Heights (89129)
          </h2>
          <p className="mb-5 max-w-2xl text-sm text-[var(--text-color)]">
            Live MLS inventory curated by Dr. Jan Duffy. Refine below, then schedule a consult for
            pocket listings and offer strategy.
          </p>
          <RealScoutSimpleSearch />
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="https://drjanduffy.realscout.com/homesearch/shared-searches/U2hhcmVhYmxlU2VhcmNoTGluay0yOTMx"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-[var(--heading-color)] px-5 py-2.5 text-sm font-semibold text-white hover:opacity-90"
            >
              Open full MLS search
            </a>
            <Link
              href="/valuation"
              className="rounded-lg border-2 border-[var(--heading-color)] px-5 py-2.5 text-sm font-semibold text-[var(--heading-color)] hover:bg-[var(--heading-color)] hover:text-white"
            >
              Home valuation
            </Link>
            <CalendlyLink
              text="Schedule a consultation"
              className="rounded-lg bg-[var(--accent-color)] px-5 py-2.5 text-sm font-semibold text-[var(--heading-color)]"
            />
          </div>
        </div>

        {showListings && (
          <div className="mt-10">
            <h3 className="mb-2 text-center text-xl font-bold text-[var(--heading-color)]">
              {listingsTitle}
            </h3>
            <p className="mb-6 text-center text-sm text-[var(--text-light)]">
              Las Vegas 89129 · updated from MLS
            </p>
            <RealScoutOfficeListings priceMin={priceMin} priceMax={priceMax} />
          </div>
        )}
      </div>
    </section>
  );
}