type Breadcrumb = { name: string; href?: string };

export function Breadcrumbs({ items }: { items: Breadcrumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-6 text-sm text-[var(--text-light)]">
      <ol className="flex flex-wrap items-center gap-2">
        {items.map((item, i) => (
          <li key={item.name} className="flex items-center gap-2">
            {i > 0 && <span aria-hidden="true">/</span>}
            {item.href ? (
              <a href={item.href} className="hover:text-[var(--accent-color)]">
                {item.name}
              </a>
            ) : (
              <span className="font-medium text-[var(--heading-color)]">{item.name}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export function PageHeader({
  title,
  subtitle,
  badge,
}: {
  title: string;
  subtitle?: string;
  badge?: string;
}) {
  return (
    <header className="bg-gradient-to-br from-[var(--accent-color)] to-[var(--accent-light)] px-4 py-12 text-center text-[var(--heading-color)] md:py-16">
      <div className="mx-auto max-w-4xl">
        {badge && (
          <div className="mb-4 inline-block rounded-md bg-[var(--heading-color)] px-4 py-2 text-xs font-semibold text-white">
            {badge}
          </div>
        )}
        <h1 className="mb-4 text-3xl font-bold md:text-4xl">{title}</h1>
        {subtitle && <p className="text-lg opacity-90">{subtitle}</p>}
      </div>
    </header>
  );
}

export function ContactCTA({
  heading = 'Ready to take your next step?',
  subtext = 'Buy or sell in Lone Mountain Heights with Dr. Jan Duffy.',
}: {
  heading?: string;
  subtext?: string;
}) {
  return (
    <section className="my-10 rounded-xl bg-[var(--heading-color)] p-8 text-center text-white">
      <h2 className="mb-2 text-2xl font-bold">{heading}</h2>
      <p className="mb-6 text-white/90">{subtext}</p>
      <div className="flex flex-wrap justify-center gap-4">
        <a
          href="tel:+17022221964"
          className="rounded-lg bg-[var(--accent-color)] px-6 py-3 font-semibold text-[var(--heading-color)] hover:opacity-90"
        >
          📞 702-222-1964
        </a>
        <a
          href="/contact"
          className="rounded-lg border-2 border-white px-6 py-3 font-semibold hover:bg-white hover:text-[var(--heading-color)]"
        >
          Contact Us
        </a>
        <a
          href="https://calendly.com/drjanduffy/15min"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-lg border-2 border-white/60 px-6 py-3 font-semibold hover:bg-white/10"
        >
          Schedule Consultation
        </a>
      </div>
    </section>
  );
}

import type { ReactNode } from 'react';

export function BtnPrimary({
  href,
  children,
  external,
}: {
  href: string;
  children: ReactNode;
  external?: boolean;
}) {
  const cls =
    'inline-block rounded-lg bg-[var(--accent-color)] px-5 py-2.5 font-semibold text-[var(--heading-color)] transition hover:opacity-90';
  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
        {children}
      </a>
    );
  }
  return (
    <a href={href} className={cls}>
      {children}
    </a>
  );
}

export function BtnSecondary({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="inline-block rounded-lg border-2 border-[var(--heading-color)] px-5 py-2.5 font-semibold text-[var(--heading-color)] transition hover:bg-[var(--heading-color)] hover:text-white"
    >
      {children}
    </a>
  );
}
