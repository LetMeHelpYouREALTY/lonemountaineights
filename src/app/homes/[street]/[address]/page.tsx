import type { Metadata } from 'next';
import { CalendlyLink } from '@/components/shared/CalendlyLink';
import { CalendlyScheduleSection } from '@/components/shared/CalendlyScheduleSection';
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
    title: { absolute: `${propertyAddress} | Lone Mountain Heights Homes` },
    description: `Ask Dr. Jan Duffy about ${propertyAddress} on ${streetName} in Lone Mountain Heights, Las Vegas 89129.`,
    alternates: {
      canonical: `https://www.lonemountainheights.com/homes/${street}/${address}`,
    },
    // Any street/address renders here without MLS data behind it; keep these out of the index.
    robots: { index: false, follow: true },
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
        <a href={NAP.telHref} className="font-semibold text-[var(--heading-color)] underline underline-offset-2">
          {NAP.telDisplay}
        </a>
        {' '}or{' '}
        <CalendlyLink
          text="schedule a showing"
          event="showing"
          placement="property-detail"
          className="font-semibold text-[var(--heading-color)] underline underline-offset-2"
        />
        .
      </p>
      <CalendlyScheduleSection
        title="Schedule a Showing"
        description={`Ask Dr. Jan Duffy about ${propertyAddress} or similar homes in Lone Mountain Heights.`}
        event="showing"
        placement="property-schedule"
        className="mb-8"
      />
      <section className="my-8">
        <h2 className="mb-4 text-xl font-semibold text-[var(--heading-color)]">More Las Vegas Listings</h2>
        <RealScoutOfficeListings />
      </section>
    </PageContainer>
  );
}
