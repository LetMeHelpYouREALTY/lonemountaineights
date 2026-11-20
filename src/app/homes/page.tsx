import type { Metadata } from 'next';
import { HomesBrowse } from '@/components/sections/HomesBrowse';
import { JsonLd } from '@/components/shared/JsonLd';
import { generateBreadcrumbSchema, generateFAQSchema } from '@/lib/schema';
import { homesFAQs } from '@/lib/faqs';
import { buildPageMetadata } from '@/lib/site-metadata';

export const metadata: Metadata = buildPageMetadata({
  title: 'Lone Mountain Heights Listings | Live MLS Search 89129',
  description:
    'Search live MLS listings in Lone Mountain Heights, Las Vegas 89129, then book a free 15-minute call with Dr. Jan Duffy to tour any home.',
  path: '/homes',
});

export default function HomesPage() {
  return (
    <>
      <JsonLd
        data={[
          generateBreadcrumbSchema([
            { name: 'Home', url: 'https://www.lonemountainheights.com' },
            { name: 'Homes for Sale', url: 'https://www.lonemountainheights.com/homes' },
          ]),
          generateFAQSchema(homesFAQs),
        ]}
      />
      <HomesBrowse />
    </>
  );
}
