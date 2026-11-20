import Image from 'next/image';
import type { ReactNode } from 'react';
import { HERO_IMAGES, type HeroImage } from '@/lib/hero-images';

type PageHeroProps = {
  title: string;
  subtitle?: string;
  badge?: string;
  image?: HeroImage;
  children?: ReactNode;
};

export function PageHero({ title, subtitle, badge, image = HERO_IMAGES.loneMountain, children }: PageHeroProps) {
  return (
    <header className="relative isolate overflow-hidden bg-slate-950 px-4 py-16 text-center text-white md:py-24">
      <Image
        src={image.src}
        alt={image.alt}
        fill
        priority
        placeholder="blur"
        sizes="100vw"
        className="-z-20 object-cover"
        style={{ objectPosition: image.position }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-b from-slate-950/65 via-[var(--heading-color)]/55 to-slate-950/80"
      />
      <div className="mx-auto max-w-4xl">
        {badge && (
          <p className="mb-5 inline-block rounded-full border border-[var(--accent-color)]/70 bg-slate-950/40 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--accent-light)]">
            {badge}
          </p>
        )}
        <h1 className="mb-4 text-3xl font-bold leading-tight text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)] md:text-5xl">
          {title}
        </h1>
        <div
          aria-hidden="true"
          className="mx-auto mb-5 h-1 w-20 rounded-full bg-gradient-to-r from-[var(--accent-color)] to-[var(--accent-light)]"
        />
        {subtitle && <p className="mx-auto max-w-2xl text-lg text-white/90 md:text-xl">{subtitle}</p>}
        {children}
      </div>
    </header>
  );
}
