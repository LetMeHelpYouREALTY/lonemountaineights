import type { Metadata } from 'next';
import { HomesBrowse } from '@/components/sections/HomesBrowse';
import { JsonLd } from '@/components/shared/JsonLd';
import { generateBreadcrumbSchema, generateFAQSchema } from '@/lib/schema';
import { generateWebPageSchema } from '@/lib/structured-data';
import { homesFAQs } from '@/lib/faqs';
import { buildPageMetadata } from '@/lib/site-metadata';

const PAGE_TITLE = 'Lone Mountain Heights Homes for Sale | Las Vegas 89129';
const PAGE_DESCRIPTION =
  'Browse homes for sale in Lone Mountain Heights, Las Vegas 89129, with live MLS listings and buyer guidance from REALTOR® Dr. Jan Duffy.';

export const metadata: Metadata = buildPageMetadata({
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  path: '/homes',
});

export default function HomesPage() {
  return (
    <>
      <JsonLd
        data={[
          generateWebPageSchema({
            name: PAGE_TITLE,
            description: PAGE_DESCRIPTION,
            path: '/homes',
            includeSpeakable: true,
          }),
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
