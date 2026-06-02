'use client';

import Image from 'next/image';
import { useMemo, useState } from 'react';
import { FAQSection } from '@/components/sections/FAQSection';
import { CalendlyLink } from '@/components/shared/CalendlyLink';
import { CalendlyScheduleSection } from '@/components/shared/CalendlyScheduleSection';
import { RealScoutOfficeListings } from '@/components/shared/JsonLd';
import { homesFAQs } from '@/lib/faqs';
import { formatPrice } from '@/lib/format';
import { featuredHomes, type HomeListing } from '@/lib/listings-data';

const REALSCOUT_SEARCH =
  'https://drjanduffy.realscout.com/homesearch/shared-searches/U2hhcmVhYmxlU2VhcmNoTGluay0yOTMx';

export function HomesBrowse() {
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [bedrooms, setBedrooms] = useState('');
  const [propertyType, setPropertyType] = useState('');
  const [luxuryOnly, setLuxuryOnly] = useState(false);
  const [poolOnly, setPoolOnly] = useState(false);

  const filtered = useMemo(() => {
    return featuredHomes.filter((h) => {
      if (minPrice && h.price < Number(minPrice)) return false;
      if (maxPrice && h.price > Number(maxPrice)) return false;
      if (bedrooms && h.bedrooms < Number(bedrooms)) return false;
      if (propertyType && h.propertyType !== propertyType) return false;
      if (luxuryOnly && !h.isLuxury) return false;
      if (poolOnly && !h.pool) return false;
      return true;
    });
  }, [minPrice, maxPrice, bedrooms, propertyType, luxuryOnly, poolOnly]);

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
          <div className="rounded-xl bg-white p-6 text-left shadow-lg">
            <h2 className="mb-2 text-xl font-bold">🔍 Search All Available Homes</h2>
            <p className="mb-4 text-sm text-[var(--text-light)]">
              Access our complete MLS database with advanced search filters and real-time updates
            </p>
            <a
              href={REALSCOUT_SEARCH}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-[var(--heading-color)] px-6 py-3 font-semibold text-white hover:opacity-90"
            >
              🏠 Search All Homes in Lone Mountain Heights →
            </a>
          </div>
          <p className="mt-6 text-sm font-semibold">{filtered.length} featured homes below</p>
        </div>
      </header>

      <div className="mx-auto max-w-6xl px-4 py-8 md:px-8">
        <div className="mb-8 grid gap-8 lg:grid-cols-[260px_1fr]">
          <aside className="h-fit rounded-xl bg-white p-5 shadow-md lg:sticky lg:top-24">
            <h3 className="mb-4 font-bold text-[var(--heading-color)]">Filter Homes</h3>
            <div className="space-y-4 text-sm">
              <div>
                <label className="mb-1 block font-medium">Min Price</label>
                <input type="number" value={minPrice} onChange={(e) => setMinPrice(e.target.value)} className="w-full rounded border px-3 py-2" placeholder="500000" />
              </div>
              <div>
                <label className="mb-1 block font-medium">Max Price</label>
                <input type="number" value={maxPrice} onChange={(e) => setMaxPrice(e.target.value)} className="w-full rounded border px-3 py-2" placeholder="1000000" />
              </div>
              <div>
                <label className="mb-1 block font-medium">Bedrooms</label>
                <select value={bedrooms} onChange={(e) => setBedrooms(e.target.value)} className="w-full rounded border px-3 py-2">
                  <option value="">Any</option>
                  <option value="3">3+</option>
                  <option value="4">4+</option>
                  <option value="5">5+</option>
                </select>
              </div>
              <div>
                <label className="mb-1 block font-medium">Property Type</label>
                <select value={propertyType} onChange={(e) => setPropertyType(e.target.value)} className="w-full rounded border px-3 py-2">
                  <option value="">Any</option>
                  <option value="Single Family">Single Family</option>
                  <option value="Condo">Condo</option>
                  <option value="Townhouse">Townhouse</option>
                </select>
              </div>
              <label className="flex items-center gap-2">
                <input type="checkbox" checked={luxuryOnly} onChange={(e) => setLuxuryOnly(e.target.checked)} />
                Luxury only
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" checked={poolOnly} onChange={(e) => setPoolOnly(e.target.checked)} />
                Pool
              </label>
              <button
                type="button"
                onClick={() => { setMinPrice(''); setMaxPrice(''); setBedrooms(''); setPropertyType(''); setLuxuryOnly(false); setPoolOnly(false); }}
                className="text-sm font-semibold text-[var(--accent-color)] underline"
              >
                Clear all
              </button>
            </div>
          </aside>

          <div>
            {filtered.length === 0 ? (
              <div className="rounded-xl bg-white p-12 text-center shadow-md">
                <h3 className="mb-2 text-xl font-bold">No homes match your criteria</h3>
                <p className="mb-4 text-[var(--text-light)]">Try adjusting filters or talk with Dr. Jan about off-market opportunities.</p>
                <CalendlyLink
                  text="Schedule time with me"
                  className="inline-block rounded-lg bg-[var(--accent-color)] px-5 py-2.5 font-semibold text-[var(--heading-color)] hover:opacity-90"
                />
              </div>
            ) : (
              <div className="grid gap-6 sm:grid-cols-2">
                {filtered.map((home) => (
                  <HomeCard key={home.id} home={home} />
                ))}
              </div>
            )}
          </div>
        </div>

        <FAQSection faqs={homesFAQs} title="Lone Mountain Heights Homes — Frequently Asked Questions" />

        <CalendlyScheduleSection
          title="Find the Right Home with Dr. Jan Duffy"
          description="Schedule a free 15-minute call for a personalized home search in Lone Mountain Heights."
        />

        <section className="mt-10 rounded-xl bg-slate-50 p-8 text-center">
          <h2 className="mb-2 text-2xl font-bold text-[var(--heading-color)]">Complete MLS Database</h2>
          <p className="mb-6 text-[var(--text-light)]">All available homes for sale in Lone Mountain Heights with real-time updates</p>
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
            <span key={f} className="rounded-full bg-slate-100 px-2 py-0.5 text-xs">{f}</span>
          ))}
        </div>
        <div className="border-l-4 border-[var(--accent-color)] bg-[var(--warm-cream)] p-3 text-sm">
          <strong className="text-[var(--accent-color)]">Dr. Jan&apos;s Insight:</strong> {home.insight}
        </div>
      </div>
    </article>
  );
}
