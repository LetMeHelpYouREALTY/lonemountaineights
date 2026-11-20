import type { ReactNode } from 'react';
import { PageHero } from '@/components/layouts/PageHero';
import { CalendlyLink } from '@/components/shared/CalendlyLink';
import type { HeroImage } from '@/lib/hero-images';
import { NAP } from '@/lib/schema';

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
  image,
}: {
  title: string;
  subtitle?: string;
  badge?: string;
  image?: HeroImage;
}) {
  return <PageHero title={title} subtitle={subtitle} badge={badge} image={image} />;
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
          href={NAP.telHref}
          className="rounded-lg bg-[var(--accent-color)] px-6 py-3 font-semibold text-[var(--heading-color)] hover:opacity-90"
        >
          📞 {NAP.telDisplay}
        </a>
        <CalendlyLink
          text="Schedule time with me"
          className="rounded-lg border-2 border-white px-6 py-3 font-semibold hover:bg-white hover:text-[var(--heading-color)]"
        />
        <a
          href="/contact"
          className="rounded-lg border-2 border-white/60 px-6 py-3 font-semibold hover:bg-white/10"
        >
          Contact & Directions
        </a>
      </div>
    </section>
  );
}

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
