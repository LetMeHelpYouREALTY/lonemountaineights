import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { FAQSection } from '@/components/sections/FAQSection';
import { Breadcrumbs, ContactCTA } from '@/components/layouts/PageHeader';
import { CalendlyScheduleSection } from '@/components/shared/CalendlyScheduleSection';
import { JsonLd } from '@/components/shared/JsonLd';
import { generateBreadcrumbSchema, generateFAQSchema } from '@/lib/schema';

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
};

export function buildPageMetadata(
  title: string,
  description: string,
  canonical: string,
): Metadata {
  return {
    title,
    description,
    alternates: { canonical: `https://lonemountainheights.com${canonical}` },
  };
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
}: ContentPageProps) {
  const breadcrumbSchema = generateBreadcrumbSchema(
    breadcrumbs.map((b, i) => ({
      name: b.name,
      url: b.href ? `https://lonemountainheights.com${b.href}` : `https://lonemountainheights.com${canonical}`,
    })),
  );
  const schemas: Record<string, unknown>[] = [breadcrumbSchema, ...schema];
  if (faqs?.length) schemas.push(generateFAQSchema(faqs));

  return (
    <>
      <JsonLd data={schemas} />
      {showHero && (
        <header className="bg-gradient-to-br from-[var(--accent-color)] to-[var(--accent-light)] px-4 py-12 text-center text-[var(--heading-color)]">
          <div className="mx-auto max-w-4xl">
            <h1 className="mb-4 text-3xl font-bold md:text-4xl">{h1}</h1>
            <p className="text-lg opacity-90">{description}</p>
          </div>
        </header>
      )}
      <div className="mx-auto max-w-6xl px-4 py-8 md:px-8">
        <Breadcrumbs items={breadcrumbs} />
        {!showHero && (
          <>
            <h1 className="mb-4 text-3xl font-bold text-[var(--heading-color)]">{h1}</h1>
            <p className="mb-8 max-w-3xl text-lg leading-relaxed text-[var(--text-color)]">{description}</p>
          </>
        )}
        {children}
        {faqs && faqs.length > 0 && (
          <FAQSection faqs={faqs} title={faqTitle ?? `${title} — FAQs`} />
        )}
        {showCta && (
          <>
            <CalendlyScheduleSection />
            <ContactCTA />
          </>
        )}
      </div>
    </>
  );
}
