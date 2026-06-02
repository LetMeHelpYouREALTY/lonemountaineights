import type { Metadata } from 'next';
import Link from 'next/link';
import { Hero } from '@/components/sections/Hero';
import { TrustSignals } from '@/components/sections/TrustSignals';
import { FAQSection } from '@/components/sections/FAQSection';
import { CalendlyLink } from '@/components/shared/CalendlyLink';
import { CalendlyScheduleSection } from '@/components/shared/CalendlyScheduleSection';
import { JsonLd, RealScoutOfficeListings } from '@/components/shared/JsonLd';
import { generateFAQSchema } from '@/lib/schema';
import { homeFAQs } from '@/lib/faqs';
import { buildPageMetadata } from '@/lib/site-metadata';

export const metadata: Metadata = buildPageMetadata({
  title: 'Lone Mountain Heights Homes for Sale | Dr. Jan Duffy Expert | Las Vegas 89129',
  description:
    'Find your dream home in Lone Mountain Heights, Las Vegas 89129. Dr. Jan Duffy offers exclusive listings, market insights, and personalized service.',
  path: '/',
  ogImageAlt:
    'Lone Mountain Heights homes for sale in Las Vegas 89129 — Dr. Jan Duffy, Berkshire Hathaway real estate expert',
});

const services = [
  { icon: '📸', title: 'Professional Photography & Videography', desc: 'High-quality marketing materials that showcase your home\'s best features.' },
  { icon: '🏠', title: 'Open House & Virtual Tours', desc: 'Expertly executed open houses and 3D virtual tours to maximize exposure.' },
  { icon: '✨', title: 'Staging Consultation', desc: 'Proven staging strategies to help your home sell faster and for top dollar.' },
  { icon: '📊', title: 'Data-Driven Market Analysis', desc: 'Accurate pricing based on current comps and neighborhood-specific insights.' },
  { icon: '🤝', title: 'Expert Negotiation', desc: 'Skilled representation to secure the best terms whether buying or selling.' },
  { icon: '📱', title: '24/7 Support & Communication', desc: 'Responsive availability throughout every step of your real estate journey.' },
];

const quickLinks = [
  { href: '/tools', icon: '🧮', title: 'Real Estate Tools', desc: 'Home value calculator, mortgage calculator, and home finder quiz' },
  { href: '/tools', icon: '📋', title: 'Mortgage Helpers', desc: 'Mortgage calculator, pre-approval guidance, and financing resources' },
  { href: '/market-intelligence', icon: '📈', title: 'Investment Info', desc: 'Market trends, ROI analysis, and investment property insights' },
  { href: '/neighborhoods', icon: '🗺️', title: 'Neighborhood Guide', desc: 'Neighborhoods, communities, amenities, schools, and lifestyle features' },
];

export default function HomePage() {
  return (
    <>
      <JsonLd
        data={[
          generateFAQSchema(homeFAQs),
          {
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://lonemountainheights.com' }],
          },
        ]}
      />

      <Hero />

      <div className="mx-auto max-w-6xl px-4 py-8 md:px-8">
        <TrustSignals />

        <section className="my-10 rounded-xl border border-[var(--accent-dark)]/30 bg-gradient-to-br from-[var(--accent-light)] to-[var(--accent-color)]/40 p-8 text-center shadow-sm">
          <h2 className="mb-2 text-2xl font-bold text-[var(--heading-color)]">Ready to take your next step?</h2>
          <p className="mb-6 text-[var(--text-color)]">Buy or sell your home in Lone Mountain Heights with a trusted local expert.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://drjanduffy.realscout.com/homesearch/shared-searches/U2hhcmVhYmxlU2VhcmNoTGluay0yOTMx"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-[var(--heading-color)] px-6 py-3 font-semibold text-[var(--accent-light)] hover:opacity-90"
            >
              View Current Homes
            </a>
            <Link href="/valuation" className="rounded-lg border-2 border-[var(--heading-color)] px-6 py-3 font-semibold text-[var(--heading-color)] hover:bg-[var(--heading-color)] hover:text-white">
              Get Home Valuation
            </Link>
            <CalendlyLink
              text="Schedule time with me"
              className="rounded-lg bg-[var(--accent-color)] px-6 py-3 font-semibold text-[var(--heading-color)] hover:opacity-90"
            />
          </div>
        </section>

        <section className="my-12">
          <h2 className="mb-2 text-center text-3xl font-bold text-[var(--heading-color)]">Additional Services</h2>
          <p className="mx-auto mb-8 max-w-xl text-center text-[var(--text-light)]">
            We&apos;re passionate about helping our clients achieve their real estate goals with a full suite of professional services.
          </p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <div key={s.title} className="rounded-xl border border-slate-200 bg-[var(--warm-cream)] p-6 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-md">
                <div className="mb-3 text-3xl">{s.icon}</div>
                <h3 className="mb-2 font-semibold text-[var(--heading-color)]">{s.title}</h3>
                <p className="text-sm text-[var(--text-light)]">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="my-12 rounded-xl border border-slate-200 bg-slate-50 p-8">
          <h2 className="mb-2 text-center text-3xl font-bold text-[var(--heading-color)]">Current Lone Mountain Heights Listings</h2>
          <p className="mb-6 text-center text-[var(--text-color)]">Browse our latest homes for sale in Lone Mountain Heights, Las Vegas 89129</p>
          <RealScoutOfficeListings priceMin="500000" priceMax="1000000" />
        </section>

        <section className="my-12 rounded-xl bg-slate-50 p-8">
          <h2 className="mb-8 text-center text-3xl font-bold text-[var(--heading-color)]">Everything You Need to Know</h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {quickLinks.map((q) => (
              <Link key={q.title} href={q.href} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
                <div className="mb-3 text-3xl">{q.icon}</div>
                <h3 className="mb-2 text-lg font-semibold text-[var(--heading-color)]">{q.title}</h3>
                <p className="text-sm text-[var(--text-light)]">{q.desc}</p>
              </Link>
            ))}
          </div>
        </section>

        <FAQSection faqs={homeFAQs} title="Lone Mountain Heights Real Estate FAQs" />

        <CalendlyScheduleSection
          title="Talk with Dr. Jan Duffy"
          description="Schedule a free 15-minute private conversation about buying or selling in Lone Mountain Heights, Las Vegas 89129."
        />

        <section className="my-12 rounded-xl bg-[var(--heading-color)] p-8 text-center text-white">
          <h2 className="mb-4 text-2xl font-bold">Work with Dr. Jan Duffy</h2>
          <p className="mb-6 text-white/90">Your complete real estate partner for Lone Mountain Heights, Las Vegas 89129</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:+17022221964" className="rounded-lg bg-[var(--accent-color)] px-6 py-3 font-semibold text-[var(--heading-color)]">
              📞 702-222-1964
            </a>
            <CalendlyLink
              text="Schedule time with me"
              className="rounded-lg border-2 border-white px-6 py-3 font-semibold hover:bg-white hover:text-[var(--heading-color)]"
            />
            <Link href="/contact" className="rounded-lg border-2 border-white/60 px-6 py-3 font-semibold hover:bg-white/10">
              Contact & Directions
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
