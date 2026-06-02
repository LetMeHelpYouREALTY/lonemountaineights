import type { Metadata } from 'next';
import Image from 'next/image';
import { FAQSection } from '@/components/sections/FAQSection';
import { CalendlyLink } from '@/components/shared/CalendlyLink';
import { CalendlyScheduleSection } from '@/components/shared/CalendlyScheduleSection';
import { JsonLd, RealScoutOfficeListings } from '@/components/shared/JsonLd';
import { luxuryFAQs } from '@/lib/faqs';
import { luxuryHomes } from '@/lib/listings-data';
import { formatPrice } from '@/lib/format';
import { generateFAQSchema, NAP } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Luxury Homes in Lone Mountain Heights | Dr. Jan Duffy',
  description:
    'Discover luxury homes in Lone Mountain Heights with Dr. Jan Duffy. Premium properties with mountain views, pools, and high-end amenities.',
  alternates: { canonical: 'https://lonemountainheights.com/luxury' },
};

const stats = [
  { value: '$1.2M', label: 'Average Luxury Home Price' },
  { value: '4,200', label: 'Average Square Feet' },
  { value: '98%', label: 'Luxury Market Retention' },
];

export default function LuxuryPage() {
  return (
    <>
      <JsonLd data={[generateFAQSchema(luxuryFAQs)]} />

      <header className="bg-gradient-to-br from-slate-900 to-slate-700 px-4 py-16 text-center text-white">
        <div className="mx-auto max-w-3xl">
          <h1 className="mb-4 bg-gradient-to-r from-[var(--accent-color)] to-[var(--accent-light)] bg-clip-text text-4xl font-bold text-transparent md:text-5xl">
            Luxury Homes in Lone Mountain Heights
          </h1>
          <p className="text-lg text-white/90">
            Premium properties with breathtaking mountain views, high-end amenities, and exceptional quality
          </p>
        </div>
      </header>

      <div className="mx-auto max-w-6xl px-4 py-10 md:px-8">
        <div className="mb-12 grid grid-cols-3 gap-6 text-center">
          {stats.map((s) => (
            <div key={s.label}>
              <div className="text-3xl font-bold text-[var(--accent-color)]">{s.value}</div>
              <div className="text-sm text-[var(--text-light)]">{s.label}</div>
            </div>
          ))}
        </div>

        <div className="mb-12 grid gap-6 md:grid-cols-3">
          {luxuryHomes.map((home) => (
            <article key={home.id} className="overflow-hidden rounded-xl bg-white shadow-md transition hover:-translate-y-1 hover:shadow-lg">
              <div className="relative h-52">
                <Image src={home.image} alt={home.address} fill className="object-cover" sizes="33vw" />
                <div className="absolute right-3 top-3 rounded-full bg-[var(--accent-color)] px-3 py-1 text-sm font-bold text-[var(--heading-color)]">
                  {formatPrice(home.price)}
                </div>
              </div>
              <div className="p-5">
                <h3 className="mb-2 font-semibold text-[var(--heading-color)]">{home.address}</h3>
                <p className="mb-3 text-sm text-[var(--text-light)]">
                  {home.beds} bed · {home.baths} bath · {home.sqft.toLocaleString()} sqft
                </p>
                <div className="mb-4 flex flex-wrap gap-1">
                  {home.features.map((f) => (
                    <span key={f} className="rounded-full bg-slate-100 px-2 py-0.5 text-xs">{f}</span>
                  ))}
                </div>
                <CalendlyLink
                  text="Schedule Showing"
                  className="block w-full rounded-lg bg-[var(--heading-color)] py-2 text-center text-sm font-semibold text-white hover:opacity-90"
                />
              </div>
            </article>
          ))}
        </div>

        <FAQSection faqs={luxuryFAQs} title="Luxury Homes in Lone Mountain Heights — FAQs" />

        <CalendlyScheduleSection
          title="Schedule a Luxury Home Consultation"
          description="Book a private conversation with Dr. Jan Duffy about luxury properties in Lone Mountain Heights."
        />

        <section className="my-10 text-center">
          <h2 className="mb-2 text-2xl font-bold text-[var(--heading-color)]">Current Luxury Listings</h2>
          <p className="mb-6 text-[var(--text-light)]">Browse our latest luxury homes for sale in Lone Mountain Heights</p>
          <RealScoutOfficeListings priceMin="1000000" priceMax="5000000" />
        </section>

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
            <a href={NAP.telHref} className="rounded-lg border-2 border-[var(--heading-color)] px-6 py-3 font-semibold text-[var(--heading-color)]">
              Call {NAP.telDisplay}
            </a>
          </div>
        </section>
      </div>
    </>
  );
}
