import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { FAQSection } from '@/components/sections/FAQSection';
import { Breadcrumbs, ContactCTA } from '@/components/layouts/PageHeader';
import { PageHero } from '@/components/layouts/PageHero';
import { AuthorByline } from '@/components/shared/AuthorByline';
import { CalendlyScheduleSection } from '@/components/shared/CalendlyScheduleSection';
import { ListingsBelowHero } from '@/components/sections/ListingsBelowHero';
import { JsonLd } from '@/components/shared/JsonLd';
import type { CalendlyEvent } from '@/lib/calendly';
import type { HeroImage } from '@/lib/hero-images';
import { generateFAQSchema } from '@/lib/schema';
import {
  generateBreadcrumbSchema,
  generateWebPageSchema,
} from '@/lib/structured-data';
import { buildPageMetadata as buildSiteMetadata, SITE_URL } from '@/lib/site-metadata';

type FAQ = { question: string; answer: string };
type Crumb = { name: string; href?: string };

type ContentPageProps = {
  title: string;
  h1: string;
  description: string;
  canonical: string;
  breadcrumbs: Crumb[];
  faqs?: FAQ[];
  faqTitle?: string;
  children: ReactNode;
  schema?: Record<string, unknown>[];
  showCta?: boolean;
  showHero?: boolean;
  heroImage?: HeroImage;
  listingsBelowHero?: false | { priceMin?: string; priceMax?: string; title?: string; description?: string };
  calendlyEvent?: CalendlyEvent;
};

export function buildPageMetadata(
  title: string,
  description: string,
  canonical: string,
): Metadata {
  return buildSiteMetadata({ title, description, path: canonical });
}

export function ContentPage({
  title,
  h1,
  description,
  canonical,
  breadcrumbs,
  faqs,
  faqTitle,
  children,
  schema = [],
  showCta = true,
  showHero = false,
  heroImage,
  listingsBelowHero,
  calendlyEvent = 'consult',
}: ContentPageProps) {
  const placement = `page${canonical.replace(/\//g, '-')}`;
  const listingsStrip =
    listingsBelowHero === false
      ? null
      : listingsBelowHero ?? (showHero ? {} : null);
  const breadcrumbSchema = generateBreadcrumbSchema(
    breadcrumbs.map((b) => ({
      name: b.name,
      url: b.href ? `${SITE_URL}${b.href}` : `${SITE_URL}${canonical}`,
    })),
  );
  const schemas: Record<string, unknown>[] = [
    generateWebPageSchema({
      name: h1,
      description,
      path: canonical,
      includeSpeakable: Boolean(faqs?.length),
    }),
    breadcrumbSchema,
    ...schema,
  ];
  if (faqs?.length) schemas.push(generateFAQSchema(faqs));

  return (
    <>
      <JsonLd data={schemas} />
      {showHero && <PageHero title={h1} subtitle={description} image={heroImage} />}
      {listingsStrip && (
        <ListingsBelowHero
          title={listingsStrip.title}
          description={listingsStrip.description}
          priceMin={listingsStrip.priceMin}
          priceMax={listingsStrip.priceMax}
        />
      )}
      <div className="mx-auto max-w-6xl px-4 py-8 md:px-8">
        <Breadcrumbs items={breadcrumbs} />
        {!showHero && (
          <>
            <h1 className="mb-4 text-3xl font-bold text-[var(--heading-color)]">{h1}</h1>
            <p className="mb-8 max-w-3xl text-lg leading-relaxed text-[var(--text-color)]">{description}</p>
          </>
        )}
        <AuthorByline />
        {children}
        {faqs && faqs.length > 0 && (
          <FAQSection
            faqs={faqs}
            title={faqTitle ?? `${title.split(/[|:]/)[0].trim()} FAQs`}
            calendlyEvent={calendlyEvent}
            calendlyPlacement={`${placement}-faq`}
          />
        )}
        {showCta && (
          <>
            <CalendlyScheduleSection event={calendlyEvent} placement={`${placement}-schedule`} />
            <ContactCTA calendlyEvent={calendlyEvent} calendlyPlacement={`${placement}-cta`} />
          </>
        )}
      </div>
    </>
  );
}
