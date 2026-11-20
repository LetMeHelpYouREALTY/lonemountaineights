import type { Metadata } from 'next';
import Link from 'next/link';
import { JsonLd, PageContainer } from '@/components/shared/JsonLd';
import { generateFAQSchema, NAP } from '@/lib/schema';
import { buildPageMetadata } from '@/lib/site-metadata';

const PAGE_TITLE = 'Lone Mountain Heights FAQ | Dr. Jan Duffy';
const PAGE_DESCRIPTION =
  'Answers about Lone Mountain Heights homes, HOA fees, school zoning, and 89129 pricing from REALTOR® Dr. Jan Duffy.';

export const metadata: Metadata = buildPageMetadata({
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  path: '/faq',
});

const faqLinks = [
  {
    href: '/faq/hoa-fees',
    question: 'What are typical HOA fees in Lone Mountain Heights?',
    answer:
      'HOA dues vary by enclave. Review the resale package for assessments, architectural rules, and any pending special assessments before you write an offer.',
  },
  {
    href: '/faq/best-schools',
    question: 'Which schools serve Lone Mountain Heights?',
    answer:
      'Addresses in ZIP 89129 are assigned through Clark County School District zoning. Confirm any street at ccsd.net/zoning before you buy.',
  },
  {
    href: '/faq/home-prices-2025',
    question: 'What do Lone Mountain Heights homes sell for?',
    answer:
      'Prices depend on lot size, views, and finishes. Dr. Jan Duffy reviews recent closed comps in the Heights before you tour or list.',
  },
];

export default function FaqIndexPage() {
  return (
    <>
      <JsonLd
        data={generateFAQSchema(
          faqLinks.map(({ question, answer }) => ({ question, answer })),
        )}
      />
      <PageContainer>
        <h1 className="mb-4 text-3xl font-bold text-[var(--heading-color)] md:text-4xl">
          Lone Mountain Heights FAQ
        </h1>
        <p className="mb-10 max-w-3xl text-lg leading-relaxed text-[var(--text-color)]">
          Straight answers for buyers and sellers in Northwest Las Vegas ZIP 89129. Call or text Dr.
          Jan Duffy at{' '}
          <a href={NAP.telHref} className="font-semibold underline underline-offset-2">
            {NAP.telDisplay}
          </a>{' '}
          for listing-specific questions.
        </p>
        <ul className="space-y-6">
          {faqLinks.map((item) => (
            <li key={item.href} className="border-b border-slate-200 pb-6">
              <h2 className="mb-2 text-xl font-semibold text-[var(--heading-color)]">
                <Link href={item.href} className="hover:underline">
                  {item.question}
                </Link>
              </h2>
              <p className="mb-2 leading-relaxed text-[var(--text-color)]">{item.answer}</p>
              <Link
                href={item.href}
                className="text-sm font-semibold text-[var(--heading-color)] underline underline-offset-2"
              >
                Read full answer
              </Link>
            </li>
          ))}
        </ul>
      </PageContainer>
    </>
  );
}
