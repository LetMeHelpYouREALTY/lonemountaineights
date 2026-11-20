import { REVIEW_PROFILES } from '@/lib/brand';
import { NAP } from '@/lib/schema';

// Testimonials need real, consented client reviews before they appear here.
const metrics = [
  { value: '500+', label: 'Las Vegas Transactions' },
  { value: '2008', label: 'Licensed in Nevada Since' },
  {
    value: `${REVIEW_PROFILES.realtorCom.rating}★`,
    label: `Realtor.com Rating (${REVIEW_PROFILES.realtorCom.reviewCount} Reviews)`,
  },
  { value: '89129', label: 'Hyperlocal Focus' },
];

export function TrustSignals() {
  const { realtorCom } = REVIEW_PROFILES;
  return (
    <section className="py-12" aria-label="Trust signals">
      <div className="mb-10 grid grid-cols-2 gap-4 md:grid-cols-4">
        {metrics.map((m) => (
          <div key={m.label} className="rounded-xl border border-slate-200 bg-white p-4 text-center shadow-sm">
            <div className="mb-1 text-2xl font-bold text-[var(--heading-color)]">{m.value}</div>
            <div className="text-sm font-medium text-[var(--text-color)]">{m.label}</div>
          </div>
        ))}
      </div>

      <section
        className="mx-auto max-w-3xl rounded-xl border border-slate-200 bg-[var(--warm-cream)] p-8 text-center"
        aria-labelledby="client-reviews-heading"
      >
        <h2 id="client-reviews-heading" className="mb-3 text-2xl font-bold text-[var(--heading-color)]">
          Client Reviews for Dr. Jan Duffy
        </h2>
        <p className="mb-1 text-4xl font-bold text-[var(--heading-color)]">
          {realtorCom.rating}
          <span aria-hidden="true">★</span>
          <span className="sr-only"> out of 5 stars</span>
        </p>
        <p className="mb-6 text-[var(--text-color)]">
          From {realtorCom.reviewCount} verified client reviews on Realtor.com (checked {realtorCom.checked}).
        </p>
        <a
          href={realtorCom.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block rounded-lg bg-[var(--heading-color)] px-6 py-3 font-semibold text-white hover:opacity-90"
        >
          Read Dr. Jan Duffy&apos;s reviews on Realtor.com
          <span className="sr-only"> (opens in a new tab)</span>
        </a>
      </section>

      <p className="mt-8 text-center text-sm text-[var(--text-light)]">
        {NAP.name} · Las Vegas REALTOR® · Licensed since 2008 · 35 years in Las Vegas
      </p>
    </section>
  );
}
