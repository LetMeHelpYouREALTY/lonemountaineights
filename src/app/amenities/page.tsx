import type { Metadata } from 'next';
import Link from 'next/link';
import { FAQSection } from '@/components/sections/FAQSection';
import { AmenityMap } from '@/components/maps/AmenityMap';
import { Breadcrumbs, ContactCTA } from '@/components/layouts/PageHeader';
import { CalendlyScheduleSection } from '@/components/shared/CalendlyScheduleSection';
import { JsonLd } from '@/components/shared/JsonLd';
import { CalendlyLink } from '@/components/shared/CalendlyLink';
import { COMMUNITY } from '@/lib/community-config';
import {
  AMENITIES_CONTENT_SECTIONS,
  AMENITIES_PAGE_FAQS,
  CURATED_NEARBY_PLACES,
} from '@/lib/nearby-amenities';
import { getBreadcrumbs } from '@/lib/content-page';
import { GBP_URLS } from '@/lib/schema';
import { buildPageMetadata, SITE_URL } from '@/lib/site-metadata';
import {
  generateBreadcrumbSchema,
  generateFAQSchema,
  generateFeaturedPlacesItemListSchema,
  generateWebPageSchema,
  GEO_COORDINATES,
} from '@/lib/structured-data';

const title = `Nearby Amenities in ${COMMUNITY.name}, Las Vegas | Parks, Schools & Shopping`;
const description =
  'Interactive map and local guide to parks, schools, grocery, healthcare, and shopping near Lone Mountain Heights, Las Vegas 89129. Hyperlocal insights from Dr. Jan Duffy.';
const h1 = `Nearby Amenities in ${COMMUNITY.name}, Las Vegas`;
const canonical = '/amenities';

export const metadata: Metadata = buildPageMetadata({
  title,
  description,
  path: canonical,
  ogImageAlt: `Map of restaurants, parks, and schools near ${COMMUNITY.name}, Las Vegas 89129`,
});

const breadcrumbs = getBreadcrumbs(canonical, h1);

export default function AmenitiesPage() {
  const communityPlaceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Place',
    name: COMMUNITY.name,
    address: {
      '@type': 'PostalAddress',
      addressLocality: COMMUNITY.city,
      addressRegion: COMMUNITY.region,
      postalCode: COMMUNITY.postalCode,
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: GEO_COORDINATES.latitude,
      longitude: GEO_COORDINATES.longitude,
    },
    hasMap: GBP_URLS.reviews,
  };

  return (
    <>
      <JsonLd
        data={[
          generateWebPageSchema({
            name: h1,
            description,
            path: canonical,
            includeSpeakable: true,
          }),
          generateBreadcrumbSchema(
            breadcrumbs.map((b) => ({
              name: b.name,
              url: b.href ? `${SITE_URL}${b.href}` : `${SITE_URL}${canonical}`,
            })),
          ),
          generateFAQSchema(AMENITIES_PAGE_FAQS),
          generateFeaturedPlacesItemListSchema(
            CURATED_NEARBY_PLACES,
            `Featured places near ${COMMUNITY.name}`,
          ),
          communityPlaceSchema,
        ]}
      />

      <header className="bg-gradient-to-br from-[var(--accent-color)] to-[var(--accent-light)] px-4 py-12 text-center text-[var(--heading-color)]">
        <div className="mx-auto max-w-4xl">
          <h1 className="mb-4 text-3xl font-bold md:text-4xl">{h1}</h1>
          <p className="text-lg opacity-90">{description}</p>
        </div>
      </header>

      <div className="mx-auto max-w-6xl px-4 py-8 md:px-8">
        <Breadcrumbs items={breadcrumbs} />

        <section className="mb-10" aria-labelledby="amenity-map-heading">
          <h2 id="amenity-map-heading" className="mb-4 text-2xl font-bold text-[var(--heading-color)]">
            Interactive Amenity Map
          </h2>
          <p className="mb-6 max-w-3xl text-[var(--text-color)]">
            Filter restaurants, parks, schools, grocery, and more around {COMMUNITY.name}. The map centers
            on ZIP {COMMUNITY.postalCode} at {COMMUNITY.center.lat}, {COMMUNITY.center.lng} (Google Business
            Profile area).
          </p>
          <AmenityMap />
        </section>

        {AMENITIES_CONTENT_SECTIONS.map((section) => (
          <section key={section.id} id={section.id} className="mb-10 scroll-mt-24">
            <h2 className="mb-3 text-xl font-bold text-[var(--heading-color)]">{section.title}</h2>
            {section.paragraphs.map((para) => (
              <p key={para.slice(0, 48)} className="mb-3 leading-relaxed text-[var(--text-color)]">
                {para}
              </p>
            ))}
          </section>
        ))}

        <section className="mb-10 rounded-xl border border-slate-200 bg-slate-50 p-6">
          <h2 className="mb-4 text-xl font-bold text-[var(--heading-color)]">Featured Nearby Places</h2>
          <ul className="grid gap-4 sm:grid-cols-2">
            {CURATED_NEARBY_PLACES.map((place) => (
              <li key={place.name} className="rounded-lg bg-white p-4 shadow-sm">
                <h3 className="font-semibold text-[var(--heading-color)]">{place.name}</h3>
                {place.address ? (
                  <p className="text-sm text-[var(--text-light)]">{place.address}</p>
                ) : null}
                {place.note && <p className="mt-1 text-sm text-[var(--text-color)]">{place.note}</p>}
              </li>
            ))}
          </ul>
        </section>

        <FAQSection faqs={AMENITIES_PAGE_FAQS} title={`Living in ${COMMUNITY.name} — FAQs`} />

        <section className="my-10 rounded-xl bg-[var(--heading-color)] p-8 text-center text-white">
          <h2 className="mb-3 text-2xl font-bold">Your {COMMUNITY.name} REALTOR®</h2>
          <p className="mx-auto mb-6 max-w-2xl text-white/90">
            Dr. Jan Duffy, Berkshire Hathaway HomeServices Nevada Properties, helps buyers and sellers
            navigate streets, schools, and amenities block by block in Las Vegas {COMMUNITY.postalCode}.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="tel:+17022221964"
              className="rounded-lg bg-[var(--accent-color)] px-6 py-3 font-semibold text-[var(--heading-color)]"
            >
              Call 702-222-1964
            </a>
            <CalendlyLink
              text="Schedule time with me"
              className="rounded-lg border-2 border-white px-6 py-3 font-semibold hover:bg-white hover:text-[var(--heading-color)]"
            />
            <Link href="/contact" className="rounded-lg border-2 border-white/70 px-6 py-3 font-semibold hover:bg-white/10">
              Contact & Directions
            </Link>
          </div>
        </section>

        <CalendlyScheduleSection
          title="Tour neighborhoods with a local expert"
          description={`Ask Dr. Jan Duffy about commute times, schools, and amenities before you buy in ${COMMUNITY.name}.`}
        />
        <ContactCTA />
      </div>
    </>
  );
}
