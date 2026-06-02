import type { Metadata } from 'next';
import Link from 'next/link';
import { PageContainer, RealScoutOfficeListings } from '@/components/shared/JsonLd';
import { NAP } from '@/lib/schema';

type PageProps = {
  params: Promise<{ street: string; address: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { street, address } = await params;
  const streetName = decodeURIComponent(street).replace(/-/g, ' ');
  const propertyAddress = decodeURIComponent(address).replace(/-/g, ' ');
  return {
    title: `${propertyAddress} | ${streetName} | Lone Mountain Heights Homes`,
    description: `View ${propertyAddress} on ${streetName} in Lone Mountain Heights, Las Vegas 89129. Contact Dr. Jan Duffy for details.`,
    alternates: {
      canonical: `https://lonemountainheights.com/homes/${street}/${address}`,
    },
  };
}

export default async function PropertyPage({ params }: PageProps) {
  const { street, address } = await params;
  const streetName = decodeURIComponent(street).replace(/-/g, ' ');
  const propertyAddress = decodeURIComponent(address).replace(/-/g, ' ');

  return (
    <PageContainer>
      <h1 className="mb-4 text-3xl font-bold text-[var(--heading-color)]">{propertyAddress}</h1>
      <p className="mb-6 leading-relaxed text-[var(--text-color)]">
        View {propertyAddress} on {streetName} in Lone Mountain Heights, Las Vegas 89129.
        Contact Dr. Jan Duffy for showings, market analysis, and expert negotiation.
      </p>
      <p className="mb-8 text-[var(--text-light)]">
        Contact {NAP.name} at{' '}
        <a href={NAP.telHref} className="font-semibold text-[var(--accent-color)]">{NAP.telDisplay}</a>
        {' '}or{' '}
        <Link href="/contact" className="font-semibold text-[var(--accent-color)]">schedule a consultation</Link>.
      </p>
      <section className="my-8">
        <h2 className="mb-4 text-xl font-semibold text-[var(--heading-color)]">More Lone Mountain Heights Listings</h2>
        <RealScoutOfficeListings />
      </section>
    </PageContainer>
  );
}
