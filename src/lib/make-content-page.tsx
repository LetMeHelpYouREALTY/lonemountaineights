import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { AnswerLead } from '@/components/sections/AnswerLead';
import { ContentPage, buildPageMetadata } from '@/components/layouts/ContentPage';
import { getBreadcrumbs, getPageConfig, getPageFaqs } from '@/lib/content-page';

import { generatePlaceSchema } from '@/lib/structured-data';

const LOCATION_SLUGS = new Set([
  'locations/lone-mountain-ranch',
  'locations/desert-vista-estates',
]);

const SCHOOL_ZONING_SLUGS = new Set(['schools', 'faq/best-schools']);

export function makeContentPage(slug: string) {
  const config = getPageConfig(slug);
  if (!config) throw new Error(`Missing page config: ${slug}`);
  const pageConfig = config;

  const faqs = getPageFaqs(pageConfig.faqKey);
  const breadcrumbs = getBreadcrumbs(pageConfig.canonical, pageConfig.h1);

  const extraSchema = LOCATION_SLUGS.has(slug)
    ? [
        generatePlaceSchema({
          name: pageConfig.h1,
          description: pageConfig.description,
          path: pageConfig.canonical,
        }),
      ]
    : [];

  function Page() {
    return (
      <ContentPage
        title={pageConfig.title}
        h1={pageConfig.h1}
        description={pageConfig.description}
        canonical={pageConfig.canonical}
        breadcrumbs={breadcrumbs}
        faqs={faqs}
        schema={extraSchema}
        calendlyEvent={pageConfig.calendlyEvent}
        listingsBelowHero={pageConfig.listings}
        showCta
        showHero
      >
          {slug === 'market-report' && (
            <AnswerLead
              updatedLabel="Updated November 2026"
              heading="How do I read the Lone Mountain Heights market?"
              answer="Use live MLS inventory on this site for actives, then ask Dr. Jan Duffy for sold comps on your street in 89129. She explains days on market, list-to-sale ratios, and pricing strategy for your specific home—not a citywide average."
            />
          )}
          <div className="prose prose-slate mb-8 max-w-none">
            {pageConfig.body.map((paragraph) => (
              <p key={paragraph.slice(0, 40)} className="mb-4 leading-relaxed text-[var(--text-color)]">
                {paragraph}
              </p>
            ))}
          </div>
          {SCHOOL_ZONING_SLUGS.has(slug) && (
            <p className="mb-8">
              <a
                href="https://www.ccsd.net/zoning"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-lg bg-[var(--accent-color)] px-5 py-2.5 font-semibold text-[var(--heading-color)] hover:opacity-90"
              >
                Look up school zoning on ccsd.net
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </p>
          )}
          {slug === 'blog' && (
            <div className="mb-8 grid gap-4 sm:grid-cols-2">
              <Link href="/blog/complete-guide-living-lone-mountain-heights" className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md">
                <h3 className="font-semibold text-[var(--heading-color)]">Complete Guide to Living Here</h3>
                <p className="text-sm text-[var(--text-light)]">Location, homes, parks and trails, and school zoning in 89129</p>
              </Link>
              <Link href="/blog/this-week-in-lone-mountain-heights" className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md">
                <h3 className="font-semibold text-[var(--heading-color)]">This Week in Lone Mountain Heights</h3>
                <p className="text-sm text-[var(--text-light)]">New listings, pending sales, and price changes</p>
              </Link>
            </div>
          )}
          {slug === 'gallery' && (
            <figure className="mb-8 overflow-hidden rounded-xl bg-white shadow-md">
              <Image
                src="/images/hero/Lone_Mountain.jpg"
                alt="Lone Mountain, a rocky desert butte in northwest Las Vegas, rising above neighborhoods with mountains behind it"
                width={2992}
                height={2000}
                sizes="(min-width: 1152px) 1088px, 100vw"
                className="h-auto w-full"
              />
              <figcaption className="px-4 py-3 text-sm text-[var(--text-light)]">
                Lone Mountain, northwest Las Vegas (ZIP 89129).
              </figcaption>
            </figure>
          )}
          {slug === 'tools' && (
            <div className="mb-8 rounded-xl bg-white p-6 shadow-md">
              <h2 className="mb-4 text-xl font-bold text-[var(--heading-color)]">Home Value Calculator</h2>
              <p className="mb-4 text-sm text-[var(--text-light)]">Get an instant estimate, then confirm with Dr. Jan Duffy.</p>
              <Link href="/valuation" className="inline-block rounded-lg bg-[var(--accent-color)] px-5 py-2.5 font-semibold text-[var(--heading-color)]">
                Go to Valuation Tool →
              </Link>
            </div>
          )}
        </ContentPage>
    );
  }

  const metadata: Metadata = buildPageMetadata(pageConfig.title, pageConfig.description, pageConfig.canonical);

  return { Page, metadata };
}
