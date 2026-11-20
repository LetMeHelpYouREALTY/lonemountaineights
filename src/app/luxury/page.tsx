import type { Metadata } from 'next';
import Link from 'next/link';
import { FAQSection } from '@/components/sections/FAQSection';
import { ListingsBelowHero } from '@/components/sections/ListingsBelowHero';
import { CalendlyLink } from '@/components/shared/CalendlyLink';
import { CalendlyScheduleSection } from '@/components/shared/CalendlyScheduleSection';
import { JsonLd } from '@/components/shared/JsonLd';
import { luxuryFAQs } from '@/lib/faqs';
import { generateFAQSchema, NAP } from '@/lib/schema';
import { generatePlaceSchema, generateWebPageSchema } from '@/lib/structured-data';
import { buildPageMetadata, SITE_URL } from '@/lib/site-metadata';

export const metadata: Metadata = buildPageMetadata({
  title: 'Luxury Homes in Lone Mountain Heights | Dr. Jan Duffy',
  description:
    'Discover luxury homes in Lone Mountain Heights, Las Vegas 89129. Dr. Jan Duffy curates $1M+ listings with mountain views, pools, and resort-style amenities.',
  path: '/luxury',
});

const highlights = [
  {
    icon: '🏔️',
    title: 'Mountain & city views',
    desc: 'Hand-selected streets with sightlines across northwest Las Vegas and Red Rock.',
  },
  {
    icon: '🏊',
    title: 'Resort amenities',
    desc: 'Pools, outdoor kitchens, and larger lots common in Lone Mountain Heights luxury tiers.',
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
              'Luxury real estate in Lone Mountain Heights, Las Vegas 89129 — curated MLS listings and expert guidance from Dr. Jan Duffy.',
            path: '/luxury',
            includeSpeakable: true,
          }),
          generatePlaceSchema({
            name: 'Lone Mountain Heights Luxury Homes',
            description:
              'Luxury home search in Lone Mountain Heights, Las Vegas Nevada 89129.',
            path: '/luxury',
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

      <header className="bg-gradient-to-br from-slate-900 to-slate-700 px-4 py-16 text-center text-white">
        <div className="mx-auto max-w-3xl">
          <h1 className="mb-4 bg-gradient-to-r from-[var(--accent-color)] to-[var(--accent-light)] bg-clip-text text-4xl font-bold text-transparent md:text-5xl">
            Luxury Homes in Lone Mountain Heights
          </h1>
          <p className="text-lg text-white/90">
            $1M+ properties with premium finishes, mountain views, and high-end amenities — curated by
            Dr. Jan Duffy
          </p>
        </div>
      </header>

      <ListingsBelowHero
        title="Luxury Listings in Lone Mountain Heights"
        description="Live MLS homes $1M–$5M in Las Vegas 89129"
        priceMin="1000000"
        priceMax="5000000"
      />

      <div className="mx-auto max-w-6xl px-4 py-10 md:px-8">
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

        <FAQSection faqs={luxuryFAQs} title="Luxury Homes in Lone Mountain Heights — FAQs" />

        <CalendlyScheduleSection
          title="Schedule a Luxury Home Consultation"
          description="Book a private conversation with Dr. Jan Duffy about luxury properties in Lone Mountain Heights."
        />

        <section className="rounded-xl bg-slate-50 p-8 text-center">
          <h2 className="mb-4 text-2xl font-bold text-[var(--heading-color)]">Ready to Find Your Luxury Home?</h2>
          <p className="mb-6 text-[var(--text-light)]">
            Let Dr. Jan Duffy help you discover the perfect luxury property in Lone Mountain Heights.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <CalendlyLink
              text="Schedule time with me"
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