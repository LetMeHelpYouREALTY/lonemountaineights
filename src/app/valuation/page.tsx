import type { Metadata } from 'next';
import { PageHeader } from '@/components/layouts/PageHeader';
import { ListingsBelowHero } from '@/components/sections/ListingsBelowHero';
import { FAQSection } from '@/components/sections/FAQSection';
import { CalendlyLink } from '@/components/shared/CalendlyLink';
import { CalendlyScheduleSection } from '@/components/shared/CalendlyScheduleSection';
import { JsonLd, RealScoutHomeValue } from '@/components/shared/JsonLd';
import { valuationFAQs } from '@/lib/faqs';
import { generateBreadcrumbSchema, generateFAQSchema, NAP } from '@/lib/schema';
import { generateWebPageSchema } from '@/lib/structured-data';
import { buildPageMetadata } from '@/lib/site-metadata';

export const metadata: Metadata = buildPageMetadata({
  title: 'Lone Mountain Heights Home Valuation | Las Vegas 89129',
  description:
    "Get an instant home value estimate for Lone Mountain Heights, Las Vegas 89129, then a comparative market analysis and pricing plan from Dr. Jan Duffy.",
  path: '/valuation',
});

export default function ValuationPage() {
  return (
    <>
      <JsonLd
        data={[
          generateWebPageSchema({
            name: 'Lone Mountain Heights Home Valuation | Dr. Jan Duffy',
            description:
              'Instant home value estimates for Lone Mountain Heights, Las Vegas 89129 with follow-up from Dr. Jan Duffy.',
            path: '/valuation',
            includeSpeakable: true,
          }),
          generateBreadcrumbSchema([
            { name: 'Home', url: 'https://www.lonemountainheights.com' },
            { name: 'Home Valuation', url: 'https://www.lonemountainheights.com/valuation' },
          ]),
          generateFAQSchema(valuationFAQs),
        ]}
      />

      <PageHeader
        badge="Dr. Jan Duffy, REALTOR®"
        title="Lone Mountain Heights Home Valuation"
        subtitle="Instant home valuation with Dr. Jan Duffy's expert market analysis"
      />

      <div className="border-b border-slate-200 bg-white px-4 py-10">
        <div className="mx-auto max-w-3xl rounded-xl border border-slate-200 bg-white p-6 shadow-md md:p-8">
          <h2 className="mb-1 text-2xl font-bold text-[var(--heading-color)]">Get Your Home&apos;s Value</h2>
          <p className="mb-6 text-[var(--text-light)]">
            Free instant valuation powered by RealScout — then schedule a call for comps and pricing strategy
          </p>
          <RealScoutHomeValue />
        </div>
      </div>

      <ListingsBelowHero priceMin="500000" priceMax="1200000" />

      <div className="mx-auto max-w-3xl px-4 py-10 md:px-8">

        <section className="mb-8 rounded-xl bg-white p-6 shadow-md md:p-8 text-center">
          <h2 className="mb-3 text-xl font-bold text-[var(--heading-color)]">Want a seller pricing consult?</h2>
          <p className="mb-6 text-[var(--text-light)]">
            Dr. Jan Duffy reviews condition, upgrades, and recent closed sales street-by-street in 89129 — no
            generic national averages.
          </p>
          <CalendlyLink
            text="Book a listing consultation"
            event="listing"
            placement="valuation-pricing-consult"
            className="inline-block rounded-lg bg-[var(--accent-color)] px-6 py-3 font-semibold text-[var(--heading-color)] hover:opacity-90"
          />
        </section>

        <FAQSection
          faqs={valuationFAQs}
          title="Home Valuation FAQs — Lone Mountain Heights"
          calendlyEvent="listing"
          calendlyPlacement="valuation-faq"
        />

        <CalendlyScheduleSection
          title="Get a Personalized Home Valuation"
          description="After your instant estimate, book a listing consultation with Dr. Jan Duffy for comps and a pricing strategy."
          event="listing"
          placement="valuation-schedule"
        />

        <section className="rounded-xl bg-slate-50 p-8 text-center">
          <h3 className="mb-2 text-xl font-bold text-[var(--heading-color)]">Ready to Sell Your Home?</h3>
          <p className="mb-6 text-[var(--text-light)]">
            Get a detailed market analysis and pricing strategy from Dr. Jan Duffy
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={NAP.telHref}
              className="inline-block rounded-lg bg-[var(--heading-color)] px-5 py-2.5 font-semibold text-white"
            >
              Call {NAP.telDisplay}
            </a>
            <CalendlyLink
              text="Book a listing consultation"
              event="listing"
              placement="valuation-sell-cta"
              className="inline-block rounded-lg border-2 border-[var(--heading-color)] px-5 py-2.5 font-semibold text-[var(--heading-color)] transition hover:bg-[var(--heading-color)] hover:text-white"
            />
          </div>
        </section>
      </div>
    </>
  );
}