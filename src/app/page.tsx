import type { Metadata } from 'next';
import Link from 'next/link';
import { Hero } from '@/components/sections/Hero';
import { ListingsBelowHero } from '@/components/sections/ListingsBelowHero';
import { TrustSignals } from '@/components/sections/TrustSignals';
import { FAQSection } from '@/components/sections/FAQSection';
import { AgentPortrait } from '@/components/shared/AgentPortrait';
import { CalendlyLink } from '@/components/shared/CalendlyLink';
import { CalendlyScheduleSection } from '@/components/shared/CalendlyScheduleSection';
import { JsonLd } from '@/components/shared/JsonLd';
import { generateFAQSchema, NAP } from '@/lib/schema';
import { generateWebPageSchema } from '@/lib/structured-data';
import { homeFAQs } from '@/lib/faqs';
import { buildPageMetadata, SITE_URL } from '@/lib/site-metadata';

const PAGE_TITLE = 'Lone Mountain Heights Real Estate | Dr. Jan Duffy';
const PAGE_DESCRIPTION =
  'Lone Mountain Heights homes for sale in Las Vegas 89129: live MLS listings, free home values, and private consultations with REALTOR® Dr. Jan Duffy.';

export const metadata: Metadata = buildPageMetadata({
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  path: '/',
  ogImageAlt:
    'Lone Mountain Heights homes for sale in Las Vegas 89129 — Dr. Jan Duffy, local real estate expert',
});

const services = [
  { icon: '📸', title: 'Professional Photography & Videography', desc: 'High-quality marketing materials that showcase your home\'s best features.' },
  { icon: '🏠', title: 'Open House & Virtual Tours', desc: 'Expertly executed open houses and 3D virtual tours to maximize exposure.' },
  { icon: '✨', title: 'Staging Consultation', desc: 'Staging advice to help your home show well online and in person.' },
  { icon: '📊', title: 'Data-Driven Market Analysis', desc: 'Pricing based on current MLS comps and neighborhood-specific data.' },
  { icon: '🤝', title: 'Expert Negotiation', desc: 'Skilled representation to secure the best terms whether buying or selling.' },
  { icon: '📱', title: '7-Day Availability', desc: 'Available seven days a week at every step of your purchase or sale.' },
];

const quickLinks = [
  { href: '/tools', icon: '🧮', title: 'Real Estate Tools', desc: 'Instant home value estimate, live MLS search, and online scheduling' },
  { href: '/valuation', icon: '💰', title: 'Home Valuation', desc: 'An instant estimate, then a comparative market analysis from Dr. Jan Duffy' },
  { href: '/market-intelligence', icon: '📈', title: 'Investment Info', desc: 'Sold comps, rent comps, HOA leasing rules, and ROI analysis for 89129' },
  { href: '/neighborhoods', icon: '🗺️', title: 'Neighborhood Guide', desc: 'Neighborhoods, parks and trails, school zoning, and amenities' },
];

const areaFacts = [
  { term: 'Location', detail: 'Northwest Las Vegas, Nevada, ZIP code 89129' },
  {
    term: 'Landmark',
    detail:
      'Lone Mountain, a rocky butte just inside the 215 Beltway. Its summit trail climbs about 550 feet in 1.2 miles.',
  },
  {
    term: 'Parks',
    detail: 'Lone Mountain Regional Park, Lone Mountain Discovery Park, Majestic Park, and Trigono Hills Park',
  },
  { term: 'Nearby', detail: 'Summerlin and Red Rock Canyon National Conservation Area' },
  {
    term: 'Public schools',
    detail: 'Clark County School District (CCSD), assigned by street address. Check any address at ccsd.net/zoning.',
  },
  {
    term: 'Listings on this site',
    detail: 'Live MLS data through RealScout, updated automatically',
  },
  {
    term: 'Local REALTOR®',
    detail: `${NAP.name}, ${NAP.broker}, license ${NAP.license}, ${NAP.telDisplay}`,
  },
];

export default function HomePage() {
  return (
    <>
      <JsonLd
        data={[
          generateWebPageSchema({
            name: PAGE_TITLE,
            description: PAGE_DESCRIPTION,
            path: '/',
            includeSpeakable: true,
          }),
          generateFAQSchema(homeFAQs),
          {
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL }],
          },
        ]}
      />

      <Hero />

      <ListingsBelowHero priceMin="500000" priceMax="1000000" />

      <div className="mx-auto max-w-6xl px-4 py-8 md:px-8">
        <TrustSignals />

        <section
          className="my-10 grid gap-8 rounded-xl border border-slate-200 bg-white p-6 shadow-sm md:grid-cols-[auto_1fr] md:items-center md:p-10"
          aria-labelledby="meet-agent-heading"
        >
          <AgentPortrait size={176} linked={false} className="mx-auto" />
          <div>
            <h2 id="meet-agent-heading" className="mb-3 text-2xl font-bold text-[var(--heading-color)]">
              Meet Dr. Jan Duffy, Your Lone Mountain Heights REALTOR®
            </h2>
            <p className="mb-4 leading-relaxed text-[var(--text-color)]">
              Dr. Jan Duffy is a Las Vegas REALTOR® with Berkshire Hathaway HomeServices Nevada
              Properties (Nevada license {NAP.license}). She has been licensed since 2008, has lived in
              Las Vegas for 35 years, and has 500+ Las Vegas transactions. She leads the Lone Mountain
              Heights Team and focuses on homes in ZIP 89129.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/about"
                className="rounded-lg border-2 border-[var(--heading-color)] px-5 py-2.5 font-semibold text-[var(--heading-color)] hover:bg-[var(--heading-color)] hover:text-white"
              >
                About Dr. Jan Duffy
              </Link>
              <a
                href={NAP.telHref}
                className="rounded-lg bg-[var(--heading-color)] px-5 py-2.5 font-semibold text-white hover:opacity-90"
              >
                📞 {NAP.telDisplay}
              </a>
            </div>
          </div>
        </section>

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
              <span className="sr-only"> (opens RealScout in a new tab)</span>
            </a>
            <Link href="/valuation" className="rounded-lg border-2 border-[var(--heading-color)] px-6 py-3 font-semibold text-[var(--heading-color)] hover:bg-[var(--heading-color)] hover:text-white">
              Get Home Valuation
            </Link>
            <CalendlyLink
              text="Schedule time with me"
              placement="home-next-step"
              className="rounded-lg bg-[var(--accent-color)] px-6 py-3 font-semibold text-[var(--heading-color)] hover:opacity-90"
            />
          </div>
        </section>

        <section className="my-12" aria-labelledby="area-facts-heading">
          <h2 id="area-facts-heading" className="mb-2 text-center text-3xl font-bold text-[var(--heading-color)]">
            Lone Mountain Heights at a Glance
          </h2>
          <p className="mb-8 text-center text-sm text-[var(--text-light)]">Facts checked November 2026</p>
          <dl className="mx-auto grid max-w-4xl gap-x-8 gap-y-4 rounded-xl border border-slate-200 bg-white p-6 shadow-sm sm:grid-cols-[max-content_1fr] md:p-8">
            {areaFacts.map((fact) => (
              <div key={fact.term} className="contents">
                <dt className="font-semibold text-[var(--heading-color)]">{fact.term}</dt>
                <dd className="text-[var(--text-color)]">{fact.detail}</dd>
              </div>
            ))}
          </dl>
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

        <FAQSection
          faqs={homeFAQs}
          title="Lone Mountain Heights Real Estate FAQs"
          calendlyPlacement="home-faq"
        />

        <CalendlyScheduleSection
          title="Talk with Dr. Jan Duffy"
          description="Schedule a free 15-minute private conversation about buying or selling in Lone Mountain Heights, Las Vegas 89129."
          placement="home-schedule"
        />

        <section className="my-12 rounded-xl bg-[var(--heading-color)] p-8 text-center text-white">
          <h2 className="mb-4 text-2xl font-bold">Work with Dr. Jan Duffy</h2>
          <p className="mb-6 text-white/90">Your complete real estate partner for Lone Mountain Heights, Las Vegas 89129</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href={NAP.telHref} className="rounded-lg bg-[var(--accent-color)] px-6 py-3 font-semibold text-[var(--heading-color)]">
              📞 {NAP.telDisplay}
            </a>
            <CalendlyLink
              text="Schedule time with me"
              placement="home-work-with"
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
