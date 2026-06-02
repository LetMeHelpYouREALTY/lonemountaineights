import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHeader, BtnPrimary } from '@/components/layouts/PageHeader';
import { FAQSection } from '@/components/sections/FAQSection';
import { CalendlyLink } from '@/components/shared/CalendlyLink';
import { CalendlyScheduleSection } from '@/components/shared/CalendlyScheduleSection';
import { JsonLd, RealScoutHomeValue } from '@/components/shared/JsonLd';
import { valuationFAQs } from '@/lib/faqs';
import { formatDate, formatPrice } from '@/lib/format';
import { generateBreadcrumbSchema, generateFAQSchema, NAP } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Lone Mountain Heights Home Valuation | Las Vegas 89129',
  description:
    "Get instant home valuation for Lone Mountain Heights, Las Vegas 89129. Dr. Jan Duffy's expert market analysis and pricing strategy.",
  alternates: { canonical: 'https://lonemountainheights.com/valuation' },
};

const comparableSales = [
  { address: '4567 Mountain Ridge Dr', price: 875000, sqft: 2450, daysOnMarket: 5, soldDate: '2024-01-15' },
  { address: '7890 Desert View Ln', price: 725000, sqft: 1890, daysOnMarket: 12, soldDate: '2024-01-12' },
  { address: '2345 Lone Mountain Way', price: 950000, sqft: 3200, daysOnMarket: 8, soldDate: '2024-01-10' },
  { address: '6789 Canyon Heights Blvd', price: 680000, sqft: 1750, daysOnMarket: 18, soldDate: '2024-01-08' },
];

const marketStats = [
  { value: '$847K', label: 'Average Sale Price' },
  { value: '23', label: 'Days on Market' },
  { value: '98%', label: 'List to Sale Ratio' },
  { value: '47', label: 'Active Listings' },
];

export default function ValuationPage() {
  return (
    <>
      <JsonLd
        data={[
          generateBreadcrumbSchema([
            { name: 'Home', url: 'https://lonemountainheights.com' },
            { name: 'Home Valuation', url: 'https://lonemountainheights.com/valuation' },
          ]),
          generateFAQSchema(valuationFAQs),
        ]}
      />

      <PageHeader
        badge="Berkshire Hathaway HomeServices"
        title="Lone Mountain Heights Home Valuation"
        subtitle="Instant home valuation with Dr. Jan Duffy's expert market analysis"
      />

      <div className="mx-auto max-w-3xl px-4 py-10 md:px-8">
        <section className="mb-8 rounded-xl bg-white p-6 shadow-md md:p-8">
          <h2 className="mb-1 text-2xl font-bold text-[var(--heading-color)]">Get Your Home&apos;s Value</h2>
          <p className="mb-6 text-[var(--text-light)]">Free instant valuation powered by local market data</p>
          <RealScoutHomeValue />
        </section>

        <section className="mb-8 rounded-xl bg-white p-6 shadow-md md:p-8">
          <h2 className="mb-6 text-center text-2xl font-bold text-[var(--heading-color)]">
            Lone Mountain Heights Market Overview
          </h2>
          <div className="mb-8 grid grid-cols-2 gap-4 md:grid-cols-4">
            {marketStats.map((s) => (
              <div
                key={s.label}
                className="rounded-xl bg-gradient-to-br from-[var(--accent-color)] to-[var(--accent-light)] p-4 text-center text-[var(--heading-color)]"
              >
                <div className="text-2xl font-bold">{s.value}</div>
                <div className="text-xs uppercase tracking-wide opacity-90">{s.label}</div>
              </div>
            ))}
          </div>

          <h3 className="mb-4 text-lg font-bold text-[var(--heading-color)]">Recent Comparable Sales</h3>
          <div className="overflow-x-auto rounded-lg border border-slate-200">
            <table className="w-full min-w-[500px] text-sm">
              <thead className="bg-[var(--heading-color)] text-left text-white">
                <tr>
                  <th className="p-3">Address</th>
                  <th className="p-3">Sale Price</th>
                  <th className="p-3">Sq Ft</th>
                  <th className="p-3">DOM</th>
                  <th className="p-3">Sold</th>
                </tr>
              </thead>
              <tbody>
                {comparableSales.map((sale) => (
                  <tr key={sale.address} className="border-t border-slate-100 hover:bg-slate-50">
                    <td className="p-3 font-medium text-[var(--heading-color)]">{sale.address}</td>
                    <td className="p-3 font-bold text-[var(--accent-color)]">{formatPrice(sale.price)}</td>
                    <td className="p-3">{sale.sqft.toLocaleString()}</td>
                    <td className="p-3">{sale.daysOnMarket} days</td>
                    <td className="p-3 text-[var(--text-light)]">{formatDate(sale.soldDate)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <FAQSection faqs={valuationFAQs} title="Home Valuation FAQs — Lone Mountain Heights" />

        <CalendlyScheduleSection
          title="Get a Personalized Home Valuation"
          description="After your instant estimate, schedule a free call with Dr. Jan Duffy for a detailed pricing strategy."
        />

        <section className="rounded-xl bg-slate-50 p-8 text-center">
          <h3 className="mb-2 text-xl font-bold text-[var(--heading-color)]">Ready to Sell Your Home?</h3>
          <p className="mb-6 text-[var(--text-light)]">
            Get a detailed market analysis and pricing strategy from Dr. Jan Duffy
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <BtnPrimary href={NAP.telHref}>Call {NAP.telDisplay}</BtnPrimary>
            <CalendlyLink
              text="Schedule time with me"
              className="inline-block rounded-lg border-2 border-[var(--heading-color)] px-5 py-2.5 font-semibold text-[var(--heading-color)] transition hover:bg-[var(--heading-color)] hover:text-white"
            />
          </div>
        </section>
      </div>
    </>
  );
}
