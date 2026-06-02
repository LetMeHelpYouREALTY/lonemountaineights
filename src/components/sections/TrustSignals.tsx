import { NAP } from '@/lib/schema';

const testimonials = [
  {
    name: 'Sarah & Michael Chen',
    location: 'Lone Mountain Ranch',
    text: 'Dr. Jan Duffy made our dream home purchase seamless. Her knowledge of Lone Mountain Heights is unmatched.',
    transaction: 'Home Purchase - $875,000',
  },
  {
    name: 'Robert Martinez',
    location: 'Desert Vista Estates',
    text: "Sold our home in 3 days above asking price! Dr. Jan's marketing strategy and staging advice were incredible.",
    transaction: 'Home Sale - $650,000',
  },
  {
    name: 'Jennifer & David Thompson',
    location: 'Mountain View Heights',
    text: 'From first-time buyers to now selling our second home, Dr. Jan has been our trusted advisor.',
    transaction: 'Home Sale - $1,200,000',
  },
];

const metrics = [
  { value: '500+', label: 'Las Vegas Transactions' },
  { value: '12 Days', label: 'Avg. Days on Market' },
  { value: '5.0', label: 'Google Rating' },
  { value: '89129', label: 'Hyperlocal Focus' },
];

export function TrustSignals() {
  return (
    <section className="py-12" aria-label="Trust signals">
      <div className="mb-10 grid grid-cols-2 gap-4 md:grid-cols-4">
        {metrics.map((m) => (
          <div key={m.label} className="rounded-xl border border-slate-200 bg-white p-4 text-center shadow-sm">
            <div className="text-2xl font-bold text-[var(--accent-color)]">{m.value}</div>
            <div className="text-sm text-[var(--text-light)]">{m.label}</div>
          </div>
        ))}
      </div>

      <h2 className="mb-6 text-center text-2xl font-bold text-[var(--heading-color)]">
        What Lone Mountain Heights Clients Say
      </h2>
      <div className="grid gap-6 md:grid-cols-3">
        {testimonials.map((t) => (
          <blockquote key={t.name} className="rounded-xl border border-slate-200 bg-[var(--warm-cream)] p-6">
            <p className="mb-4 text-sm leading-relaxed text-[var(--text-color)]">&ldquo;{t.text}&rdquo;</p>
            <footer>
              <cite className="not-italic">
                <strong className="text-[var(--heading-color)]">{t.name}</strong>
                <span className="block text-xs text-[var(--text-light)]">{t.location} · {t.transaction}</span>
              </cite>
            </footer>
          </blockquote>
        ))}
      </div>

      <p className="mt-8 text-center text-sm text-[var(--text-light)]">
        {NAP.name} · License {NAP.license} · Berkshire Hathaway HomeServices Nevada Properties
      </p>
    </section>
  );
}
