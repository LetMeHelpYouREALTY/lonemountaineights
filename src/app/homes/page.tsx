import type { Metadata } from 'next';
import { HomesBrowse } from '@/components/sections/HomesBrowse';
import { JsonLd } from '@/components/shared/JsonLd';
import { generateBreadcrumbSchema, generateFAQSchema } from '@/lib/schema';
import { homesFAQs } from '@/lib/faqs';

export const metadata: Metadata = {
  title: 'Lone Mountain Heights Homes for Sale | Las Vegas 89129',
  description:
    'Browse exclusive homes for sale in Lone Mountain Heights, Las Vegas 89129. Dr. Jan Duffy expert insights on every listing.',
  alternates: { canonical: 'https://lonemountainheights.com/homes' },
};

export default function HomesPage() {
  return (
    <>
      <JsonLd
        data={[
          generateBreadcrumbSchema([
            { name: 'Home', url: 'https://lonemountainheights.com' },
            { name: 'Homes for Sale', url: 'https://lonemountainheights.com/homes' },
          ]),
          generateFAQSchema(homesFAQs),
        ]}
      />
      <HomesBrowse />
    </>
  );
}
