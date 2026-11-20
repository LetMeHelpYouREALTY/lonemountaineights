'use client';

import { PageHero } from '@/components/layouts/PageHero';
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
      <PageHero
        title="Lone Mountain Heights Homes for Sale in Las Vegas 89129"
        subtitle="Live MLS listings curated by Dr. Jan Duffy — your complete real estate partner"
      >
        <div className="mx-auto mt-8 max-w-3xl rounded-xl bg-white p-6 text-left text-[var(--heading-color)] shadow-lg">
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
      </PageHero>

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