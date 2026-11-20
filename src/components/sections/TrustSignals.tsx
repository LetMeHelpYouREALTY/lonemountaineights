import { NAP } from '@/lib/schema';

// Testimonials need real, consented client reviews before they appear here.
const metrics = [
  { value: '500+', label: 'Las Vegas Transactions' },
  { value: '2008', label: 'Licensed in Nevada Since' },
  { value: '5.0★', label: 'Realtor.com Rating (50 Reviews)' },
  { value: '89129', label: 'Hyperlocal Focus' },
];

export function TrustSignals() {
  return (
    <section className="py-12" aria-label="Trust signals">
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {metrics.map((m) => (
          <div key={m.label} className="rounded-xl border border-slate-200 bg-white p-4 text-center shadow-sm">
            <div className="mb-1 text-2xl font-bold text-[var(--heading-color)]">{m.value}</div>
            <div className="text-sm font-medium text-[var(--text-color)]">{m.label}</div>
          </div>
        ))}
      </div>

      <p className="mt-8 text-center text-sm text-[var(--text-light)]">
        {NAP.name} · Las Vegas REALTOR® · Licensed since 2008 · 35 years in Las Vegas
      </p>
    </section>
  );
}
