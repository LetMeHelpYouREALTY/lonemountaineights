import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHero } from '@/components/layouts/PageHero';
import { AnswerLead } from '@/components/sections/AnswerLead';
import { FAQSection } from '@/components/sections/FAQSection';
import { ListingsBelowHero } from '@/components/sections/ListingsBelowHero';
import { CalendlyLink } from '@/components/shared/CalendlyLink';
import { CalendlyScheduleSection } from '@/components/shared/CalendlyScheduleSection';
import { JsonLd } from '@/components/shared/JsonLd';
import { luxuryFAQs } from '@/lib/faqs';
import { generateFAQSchema, NAP } from '@/lib/schema';
import { generateWebPageSchema } from '@/lib/structured-data';
import { buildPageMetadata, SITE_URL } from '@/lib/site-metadata';

export const metadata: Metadata = buildPageMetadata({
  title: 'Luxury Homes in Lone Mountain Heights | Dr. Jan Duffy',
  description:
    'Luxury homes in Lone Mountain Heights, Las Vegas 89129: live $1M–$5M MLS listings, private showings, and pricing guidance from Dr. Jan Duffy.',
  path: '/luxury',
});

const highlights = [
  {
    icon: '🏔️',
    title: 'Mountain & city views',
    desc: 'Views vary by lot and elevation. Dr. Jan Duffy confirms sightlines before you tour.',
  },
  {
    icon: '🏊',
    title: 'Pools & outdoor living',
    desc: 'Pools, outdoor kitchens, and larger lots show up often at higher price points. Check each listing for details.',
  },
  {
    icon: '🤝',
    title: 'Private consultations',
    desc: 'Book a Calendly call for off-market intel, pricing strategy, and showing coordination.',
  },
];

export default function LuxuryPage() {
  return (
    <>
      <JsonLd
        data={[
          generateWebPageSchema({
            name: 'Luxury Homes in Lone Mountain Heights | Dr. Jan Duffy',
            description:
              'Luxury real estate in Lone Mountain Heights, Las Vegas 89129 — live MLS listings and expert guidance from Dr. Jan Duffy.',
            path: '/luxury',
            includeSpeakable: true,
          }),
          generateFAQSchema(luxuryFAQs),
          {
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
              { '@type': 'ListItem', position: 2, name: 'Luxury', item: `${SITE_URL}/luxury` },
            ],
          },
        ]}
      />

      <PageHero
        title="Luxury Homes in Lone Mountain Heights"
        subtitle="$1M+ homes in northwest Las Vegas 89129, with private showings and pricing guidance from Dr. Jan Duffy"
      />

      <ListingsBelowHero
        title="Las Vegas Luxury Listings, $1M–$5M"
        priceMin="1000000"
        priceMax="5000000"
      />

      <div className="mx-auto max-w-6xl px-4 py-10 md:px-8">
        <AnswerLead
          updatedLabel="Updated November 2026"
          heading="What counts as luxury in Lone Mountain Heights?"
          answer="Dr. Jan Duffy treats luxury inventory in Lone Mountain Heights as homes typically priced from about $1M upward with premium finishes, larger lots, and mountain or city views. Live MLS results sit under the hero — schedule Calendly for comps and showings rather than relying on static averages."
        />

        <div className="mb-12 grid gap-6 md:grid-cols-3">
          {highlights.map((item) => (
            <div
              key={item.title}
              className="rounded-xl border border-slate-200 bg-white p-6 text-center shadow-sm"
            >
              <div className="mb-3 text-3xl">{item.icon}</div>
              <h2 className="mb-2 text-lg font-semibold text-[var(--heading-color)]">{item.title}</h2>
              <p className="text-sm text-[var(--text-light)]">{item.desc}</p>
            </div>
          ))}
        </div>

        <FAQSection
          faqs={luxuryFAQs}
          title="Luxury Homes in Lone Mountain Heights — FAQs"
          calendlyEvent="buyer"
          calendlyPlacement="luxury-faq"
        />

        <CalendlyScheduleSection
          title="Schedule a Luxury Home Consultation"
          description="Book a 30-minute buyer consultation with Dr. Jan Duffy about luxury properties in Lone Mountain Heights."
          event="buyer"
          placement="luxury-schedule"
        />

        <section className="rounded-xl bg-slate-50 p-8 text-center">
          <h2 className="mb-4 text-2xl font-bold text-[var(--heading-color)]">Ready to Find Your Luxury Home?</h2>
          <p className="mb-6 text-[var(--text-light)]">
            Let Dr. Jan Duffy help you discover the perfect luxury property in Lone Mountain Heights.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <CalendlyLink
              text="Schedule a private showing"
              event="showing"
              placement="luxury-showing"
              className="rounded-lg bg-[var(--accent-color)] px-6 py-3 font-semibold text-[var(--heading-color)] hover:opacity-90"
            />
            <a
              href={NAP.telHref}
              className="rounded-lg border-2 border-[var(--heading-color)] px-6 py-3 font-semibold text-[var(--heading-color)]"
            >
              Call {NAP.telDisplay}
            </a>
            <Link
              href="/valuation"
              className="rounded-lg border-2 border-[var(--accent-color)] px-6 py-3 font-semibold text-[var(--heading-color)]"
            >
              Get Home Valuation
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}