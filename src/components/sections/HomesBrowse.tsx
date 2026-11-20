'use client';

import Image from 'next/image';
import { FAQSection } from '@/components/sections/FAQSection';
import { CalendlyScheduleSection } from '@/components/shared/CalendlyScheduleSection';
import { HeroRealScoutBand } from '@/components/sections/HeroRealScoutBand';
import { RealScoutOfficeListings } from '@/components/shared/JsonLd';
import { homesFAQs } from '@/lib/faqs';
import { formatPrice } from '@/lib/format';
import { featuredHomes, type HomeListing } from '@/lib/listings-data';

export function HomesBrowse() {
  return (
    <>
      <header className="bg-gradient-to-br from-[var(--accent-color)] to-[var(--accent-light)] px-4 py-12 text-center text-[var(--heading-color)]">
        <div className="mx-auto max-w-4xl">
          <h1 className="mb-4 text-3xl font-bold md:text-4xl">
            Lone Mountain Heights Homes for Sale | Las Vegas 89129
          </h1>
          <p className="mb-8 text-lg opacity-90">
            Exclusive listings hand-picked by Dr. Jan Duffy — Your Complete Real Estate Partner
          </p>
          <p className="mt-4 text-sm font-semibold">
            Search live MLS inventory below, then browse {featuredHomes.length} curated examples with
            Dr. Jan&apos;s notes.
          </p>
        </div>
      </header>

      <HeroRealScoutBand listingsTitle="Homes for sale in Lone Mountain Heights" />

      <div className="mx-auto max-w-6xl px-4 py-8 md:px-8">
        <div className="mb-8 grid gap-6 sm:grid-cols-2">
          {featuredHomes.map((home) => (
            <HomeCard key={home.id} home={home} />
          ))}
        </div>

        <FAQSection faqs={homesFAQs} title="Lone Mountain Heights Homes — Frequently Asked Questions" />

        <CalendlyScheduleSection
          title="Find the Right Home with Dr. Jan Duffy"
          description="Schedule a free 15-minute call for a personalized home search in Lone Mountain Heights."
        />

        <section className="mt-10 rounded-xl bg-slate-50 p-8 text-center">
          <h2 className="mb-2 text-2xl font-bold text-[var(--heading-color)]">Complete MLS Database</h2>
          <p className="mb-6 text-[var(--text-light)]">
            All available homes for sale in Lone Mountain Heights with real-time updates
          </p>
          <RealScoutOfficeListings priceMin="600000" priceMax="1200000" />
        </section>
      </div>
    </>
  );
}

function HomeCard({ home }: { home: HomeListing }) {
  return (
    <article className="overflow-hidden rounded-xl bg-white shadow-md transition hover:-translate-y-1 hover:shadow-lg">
      <div className="relative h-52">
        <Image src={home.image} alt={home.address} fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
        <div className="absolute bottom-3 left-3 rounded-lg bg-black/80 px-3 py-1 font-bold text-white">
          {formatPrice(home.price)}
        </div>
        {home.pool && (
          <span className="absolute right-3 top-3 rounded-full bg-[var(--accent-color)] px-2 py-1 text-xs font-semibold text-[var(--heading-color)]">
            Pool
          </span>
        )}
      </div>
      <div className="p-5">
        <h3 className="mb-2 font-semibold text-[var(--heading-color)]">{home.address}</h3>
        <p className="mb-3 text-sm text-[var(--text-light)]">
          {home.bedrooms} bed · {home.bathrooms} bath · {home.sqft.toLocaleString()} sqft · {home.lotSize}
        </p>
        <div className="mb-3 flex flex-wrap gap-1">
          {[home.homeStyle, String(home.yearBuilt), `${home.garage} car`, home.view].map((f) => (
            <span key={f} className="rounded-full bg-slate-100 px-2 py-0.5 text-xs">
              {f}
            </span>
          ))}
        </div>
        <div className="border-l-4 border-[var(--accent-color)] bg-[var(--warm-cream)] p-3 text-sm">
          <strong className="text-[var(--accent-color)]">Dr. Jan&apos;s Insight:</strong> {home.insight}
        </div>
      </div>
    </article>
  );
}