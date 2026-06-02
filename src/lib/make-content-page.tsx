import type { Metadata } from 'next';
import Link from 'next/link';
import { ContentPage, buildPageMetadata } from '@/components/layouts/ContentPage';
import { RealScoutOfficeListings } from '@/components/shared/JsonLd';
import { getBreadcrumbs, getPageConfig, getPageFaqs } from '@/lib/content-page';

import { generatePlaceSchema } from '@/lib/structured-data';

const LOCATION_SLUGS = new Set([
  'locations/lone-mountain-ranch',
  'locations/desert-vista-estates',
]);

type Props = { slug: string };

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
        showCta
        showHero
      >
          <div className="prose prose-slate mb-8 max-w-none">
            {pageConfig.body.map((paragraph) => (
              <p key={paragraph.slice(0, 40)} className="mb-4 leading-relaxed text-[var(--text-color)]">
                {paragraph}
              </p>
            ))}
          </div>
          {slug === 'blog' && (
            <div className="mb-8 grid gap-4 sm:grid-cols-2">
              <Link href="/blog/complete-guide-living-lone-mountain-heights" className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md">
                <h3 className="font-semibold text-[var(--heading-color)]">Complete Guide to Living Here</h3>
                <p className="text-sm text-[var(--text-light)]">The definitive Lone Mountain Heights community guide</p>
              </Link>
              <Link href="/blog/this-week-in-lone-mountain-heights" className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md">
                <h3 className="font-semibold text-[var(--heading-color)]">This Week in Lone Mountain Heights</h3>
                <p className="text-sm text-[var(--text-light)]">Weekly market update and new listings</p>
              </Link>
            </div>
          )}
          {slug === 'gallery' && (
            <div className="mb-8 grid grid-cols-2 gap-4 md:grid-cols-3">
              {['/images/photos/home-featured-1.jpg', '/images/photos/home-featured-2.jpg', '/images/photos/home-featured-3.jpg', '/images/photos/las-vegas-neighborhood.jpg', '/images/hero/hero-las-vegas.png', '/images/hero/Lone_Mountain.jpg'].map((src) => (
                // eslint-disable-next-line @next/next/no-img-element
                <img key={src} src={src} alt="Lone Mountain Heights" className="aspect-video rounded-lg object-cover shadow" loading="lazy" />
              ))}
            </div>
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
          <section className="my-8">
            <h2 className="mb-4 text-xl font-semibold text-[var(--heading-color)]">Current Listings</h2>
            <RealScoutOfficeListings />
          </section>
        </ContentPage>
    );
  }

  const metadata: Metadata = buildPageMetadata(pageConfig.title, pageConfig.description, pageConfig.canonical);

  return { Page, metadata };
}
