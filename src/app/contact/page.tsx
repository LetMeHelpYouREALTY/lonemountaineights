import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHeader, BtnPrimary, BtnSecondary } from '@/components/layouts/PageHeader';
import { FAQSection } from '@/components/sections/FAQSection';
import { CalendlyLink } from '@/components/shared/CalendlyLink';
import { CalendlyInline } from '@/components/shared/CalendlyInline';
import { JsonLd, RealScoutOfficeListings } from '@/components/shared/JsonLd';
import { contactFAQs } from '@/lib/faqs';
import { generateBreadcrumbSchema, generateFAQSchema, GBP_URLS, NAP } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Contact Dr. Jan Duffy | Lone Mountain Heights Expert | Las Vegas 89129',
  description: `Contact Dr. Jan Duffy for expert real estate services in Lone Mountain Heights, Las Vegas 89129. Call ${NAP.telDisplay} or schedule a consultation.`,
  alternates: { canonical: 'https://lonemountainheights.com/contact' },
};

const highlights = [
  '500+ Las Vegas transactions',
  'Deep Lone Mountain Heights expertise',
  'Knows every street and subdivision',
  'Personalized market analysis',
  'Proven track record of success',
];

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={[
          generateBreadcrumbSchema([
            { name: 'Home', url: 'https://lonemountainheights.com' },
            { name: 'Contact', url: 'https://lonemountainheights.com/contact' },
          ]),
          generateFAQSchema(contactFAQs),
          {
            '@context': 'https://schema.org',
            '@type': 'ContactPage',
            name: 'Contact Dr. Jan Duffy - Lone Mountain Heights Real Estate Expert',
            url: 'https://lonemountainheights.com/contact',
            mainEntity: {
              '@type': 'RealEstateAgent',
              name: NAP.name,
              telephone: NAP.telephone,
              email: NAP.email,
              license: NAP.license,
            },
          },
        ]}
      />

      <PageHeader
        title="Contact Dr. Jan Duffy"
        subtitle="Ready to buy or sell in Lone Mountain Heights, Las Vegas 89129? Let's talk!"
      />

      <div className="mx-auto max-w-6xl px-4 py-10 md:px-8">
        <div className="mb-10 grid gap-8 lg:grid-cols-2">
          <div className="rounded-xl bg-white p-6 shadow-md md:p-8">
            <h2 className="mb-4 text-2xl font-bold text-[var(--heading-color)]">Get in Touch</h2>
            <p className="mb-6 text-[var(--text-light)]">
              Dr. Jan Duffy is here to help with all your Lone Mountain Heights real estate needs.
            </p>
            <div className="mb-8 flex flex-wrap gap-3">
              <CalendlyLink text="Schedule time with me" className="rounded-lg bg-[var(--accent-color)] px-4 py-2 font-semibold text-[var(--heading-color)]" />
              <BtnPrimary href={NAP.telHref}>Call {NAP.telDisplay}</BtnPrimary>
              <BtnSecondary href={GBP_URLS.directions}>Directions</BtnSecondary>
              <BtnSecondary href={GBP_URLS.reviews}>View Google Reviews</BtnSecondary>
            </div>

            <div className="space-y-4">
              {[
                { icon: '📞', title: 'Call or Text', value: NAP.telDisplay, href: NAP.telHref, note: 'Available 7 days a week' },
                { icon: '✉️', title: 'Email', value: NAP.email, href: `mailto:${NAP.email}`, note: 'Response within 2 hours' },
                { icon: '📍', title: 'Location', value: NAP.fullAddress, note: 'All Lone Mountain Heights neighborhoods and communities' },
              ].map((m) => (
                <div key={m.title} className="flex gap-4 rounded-lg bg-[var(--warm-cream)] p-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--accent-color)] text-lg">{m.icon}</span>
                  <div>
                    <h3 className="font-semibold text-[var(--heading-color)]">{m.title}</h3>
                    {m.href ? (
                      <a href={m.href} className="font-medium text-[var(--accent-color)] hover:underline">{m.value}</a>
                    ) : (
                      <p>{m.value}</p>
                    )}
                    <p className="text-sm italic text-[var(--text-light)]">{m.note}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-lg bg-slate-50 p-5">
              <h3 className="mb-3 font-bold text-[var(--heading-color)]">Why Choose Dr. Jan?</h3>
              <ul className="space-y-2">
                {highlights.map((h) => (
                  <li key={h} className="flex items-start gap-2 text-sm text-[var(--text-color)]">
                    <span className="font-bold text-green-600">✓</span> {h}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="rounded-xl bg-white p-6 shadow-md md:p-8">
            <h2 className="mb-2 text-2xl font-bold text-[var(--heading-color)]">Schedule a Consultation</h2>
            <p className="mb-4 text-[var(--text-light)]">
              Book a time — Dr. Jan will call or meet to discuss your Lone Mountain Heights goals.
            </p>
            <CalendlyInline />
          </div>
        </div>

        <section className="mb-10 rounded-xl bg-white p-6 shadow-md">
          <h2 className="mb-2 text-2xl font-bold text-[var(--heading-color)]">Find Us</h2>
          <p className="mb-4 text-[var(--text-light)]">
            Lone Mountain Heights service area — {NAP.name}, Berkshire Hathaway HomeServices Nevada Properties
          </p>
          <div className="overflow-hidden rounded-lg shadow">
            <iframe
              title="Lone Mountain Heights, Las Vegas NV - Dr. Jan Duffy Real Estate"
              src={GBP_URLS.mapEmbed}
              width="100%"
              height="400"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </section>

        <section className="mb-10 text-center">
          <h2 className="mb-2 text-2xl font-bold text-[var(--heading-color)]">Current Lone Mountain Heights Listings</h2>
          <p className="mb-6 text-[var(--text-light)]">Browse our latest homes for sale while you&apos;re here</p>
          <RealScoutOfficeListings priceMin="700000" priceMax="1500000" />
        </section>

        <FAQSection faqs={contactFAQs} title="Contact Dr. Jan Duffy — Frequently Asked Questions" />
      </div>
    </>
  );
}
