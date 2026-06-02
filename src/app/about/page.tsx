import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { PageHeader, BtnPrimary, BtnSecondary } from '@/components/layouts/PageHeader';
import { FAQSection } from '@/components/sections/FAQSection';
import { CalendlyLink } from '@/components/shared/CalendlyLink';
import { CalendlyInline } from '@/components/shared/CalendlyInline';
import { JsonLd, RealScoutOfficeListings } from '@/components/shared/JsonLd';
import { aboutFAQs } from '@/lib/faqs';
import { generateBreadcrumbSchema, generateFAQSchema, GBP_URLS, NAP } from '@/lib/schema';
import { getAbsoluteImageUrl } from '@/lib/cloudflare-images';

export const metadata: Metadata = {
  title: 'About Dr. Jan Duffy | Lone Mountain Heights Expert | Las Vegas 89129',
  description:
    'Meet Dr. Jan Duffy, your complete real estate partner in Lone Mountain Heights, Las Vegas 89129. Berkshire Hathaway team leader and hyperlocal expert.',
  alternates: { canonical: 'https://lonemountainheights.com/about' },
};

const advantages = [
  { icon: '📊', title: 'Data-Driven Valuations', desc: 'Advanced valuation technology with comps, trends, and neighborhood-specific insights.' },
  { icon: '🏆', title: 'Luxury Market Focus', desc: 'Global luxury resources for affluent buyers and sellers in Lone Mountain Heights.' },
  { icon: '🤝', title: 'Forever Agent Commitment', desc: 'Long-term support for every client — not just the transaction.' },
  { icon: '📈', title: 'Advanced Marketing Tools', desc: 'Digital marketing including Zillow Showcase for maximum listing exposure.' },
  { icon: '🌍', title: 'Global Network Access', desc: '1,600+ Berkshire Hathaway offices worldwide and $154.7B in sales volume.' },
  { icon: '❤️', title: 'Community Impact', desc: 'Committed to service in Las Vegas and the Lone Mountain Heights community.' },
];

const stats = [
  { value: '500+', label: 'Las Vegas Transactions' },
  { value: '89129', label: 'Hyperlocal Focus' },
  { value: '1,600+', label: 'BHHS Offices Worldwide' },
  { value: '$154.7B', label: 'Network Sales Volume' },
];

export default function AboutPage() {
  const agentImage = getAbsoluteImageUrl('/images/agents/dr-jan-duffy.jpg', 400);

  return (
    <>
      <JsonLd
        data={[
          generateBreadcrumbSchema([
            { name: 'Home', url: 'https://lonemountainheights.com' },
            { name: 'About', url: 'https://lonemountainheights.com/about' },
          ]),
          generateFAQSchema(aboutFAQs),
          {
            '@context': 'https://schema.org',
            '@type': 'Person',
            name: 'Dr. Jan Duffy',
            jobTitle: 'Head of Berkshire Hathaway HomeServices Lone Mountain Heights Team',
            url: 'https://lonemountainheights.com/about',
            telephone: NAP.telephone,
            email: NAP.email,
            image: agentImage,
            worksFor: {
              '@type': 'Organization',
              name: 'Berkshire Hathaway HomeServices Nevada Properties',
            },
          },
        ]}
      />

      <PageHeader
        badge="Berkshire Hathaway HomeServices · Lone Mountain Heights Team"
        title="About Dr. Jan Duffy"
        subtitle="Head of the Berkshire Hathaway HomeServices Lone Mountain Heights Team — your complete real estate partner"
      />

      <div className="mx-auto max-w-6xl px-4 py-10 md:px-8">
        <div className="mb-12 grid gap-10 md:grid-cols-2 md:items-start">
          <div className="relative aspect-square max-w-md overflow-hidden rounded-2xl shadow-lg">
            <Image
              src="/images/agents/dr-jan-duffy.jpg"
              alt="Dr. Jan Duffy - Lone Mountain Heights Real Estate Expert"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 400px"
              priority
            />
          </div>
          <div>
            <h2 className="mb-4 text-2xl font-bold text-[var(--heading-color)]">
              Your Lone Mountain Heights Expert
            </h2>
            <p className="mb-4 leading-relaxed text-[var(--text-color)]">
              Dr. Jan Duffy brings 500+ Las Vegas transactions, deep neighborhood knowledge, and Berkshire Hathaway
              resources to every buyer and seller in Lone Mountain Heights, Las Vegas 89129. She knows every street,
              every subdivision, and every opportunity in the community.
            </p>
            <p className="mb-6 leading-relaxed text-[var(--text-color)]">
              License {NAP.license} · {NAP.hours} · {NAP.fullAddress}
            </p>
            <div className="flex flex-wrap gap-3">
              <CalendlyLink
                text="Schedule time with me"
                className="rounded-lg bg-[var(--accent-color)] px-5 py-2.5 font-semibold text-[var(--heading-color)]"
              />
              <BtnSecondary href={NAP.telHref}>Call {NAP.telDisplay}</BtnSecondary>
            </div>
          </div>
        </div>

        <div className="mb-12 grid grid-cols-2 gap-4 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="rounded-xl bg-[var(--warm-cream)] p-4 text-center">
              <div className="text-2xl font-bold text-[var(--accent-color)]">{s.value}</div>
              <div className="text-sm text-[var(--text-light)]">{s.label}</div>
            </div>
          ))}
        </div>

        <h2 className="mb-6 text-center text-2xl font-bold text-[var(--heading-color)]">
          Berkshire Hathaway Advantages
        </h2>
        <div className="mb-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {advantages.map((a) => (
            <div key={a.title} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="mb-3 text-2xl">{a.icon}</div>
              <h3 className="mb-2 font-semibold text-[var(--heading-color)]">{a.title}</h3>
              <p className="text-sm text-[var(--text-light)]">{a.desc}</p>
            </div>
          ))}
        </div>

        <FAQSection faqs={aboutFAQs} title="About Dr. Jan Duffy — FAQs" />

        <section className="mt-10 text-center">
          <h2 className="mb-4 text-xl font-bold text-[var(--heading-color)]">Current Listings</h2>
          <RealScoutOfficeListings />
        </section>
      </div>
    </>
  );
}
