'use client';

import { FAQSection } from '@/components/sections/FAQSection';
import { ListingsBelowHero } from '@/components/sections/ListingsBelowHero';
import { CalendlyLink } from '@/components/shared/CalendlyLink';
import { CalendlyScheduleSection } from '@/components/shared/CalendlyScheduleSection';
import { homesFAQs } from '@/lib/faqs';

const REALSCOUT_SEARCH =
  'https://drjanduffy.realscout.com/homesearch/shared-searches/U2hhcmVhYmxlU2VhcmNoTGluay0yOTMx';

export function HomesBrowse() {
  return (
    <>
      <header className="bg-gradient-to-br from-[var(--accent-color)] to-[var(--accent-light)] px-4 py-12 text-center text-[var(--heading-color)]">
        <div className="mx-auto max-w-4xl">
          <h1 className="mb-4 text-3xl font-bold md:text-4xl">
            Lone Mountain Heights Homes for Sale | Las Vegas 89129
          </h1>
          <p className="mb-8 text-lg opacity-90">
            Live MLS listings curated by Dr. Jan Duffy — your complete real estate partner
          </p>
          <div className="rounded-xl bg-white p-6 text-left shadow-lg">
            <h2 className="mb-2 text-xl font-bold">Open full MLS search</h2>
            <p className="mb-4 text-sm text-[var(--text-light)]">
              Advanced filters, saved searches, and instant alerts on every Lone Mountain Heights listing
            </p>
            <a
              href={REALSCOUT_SEARCH}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-[var(--heading-color)] px-6 py-3 font-semibold text-white hover:opacity-90"
            >
              Search all homes in Lone Mountain Heights →
            </a>
          </div>
        </div>
      </header>

      <ListingsBelowHero priceMin="600000" priceMax="1500000" />

      <div className="mx-auto max-w-6xl px-4 py-8 md:px-8">
        <section className="mb-10 rounded-xl border border-slate-200 bg-[var(--warm-cream)] p-8 text-center">
          <h2 className="mb-2 text-2xl font-bold text-[var(--heading-color)]">Need a curated shortlist?</h2>
          <p className="mb-6 text-[var(--text-light)]">
            Dr. Jan Duffy matches buyers to streets, lot sizes, and floor plans — schedule a free 15-minute call.
          </p>
          <CalendlyLink
            text="Schedule time with me"
            className="inline-block rounded-lg bg-[var(--accent-color)] px-6 py-3 font-semibold text-[var(--heading-color)] hover:opacity-90"
          />
        </section>

        <FAQSection faqs={homesFAQs} title="Lone Mountain Heights Homes — Frequently Asked Questions" />

        <CalendlyScheduleSection
          title="Find the Right Home with Dr. Jan Duffy"
          description="Schedule a free 15-minute call for a personalized home search in Lone Mountain Heights."
        />
      </div>
    </>
  );
}