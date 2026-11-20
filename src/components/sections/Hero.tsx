import Image from 'next/image';
import Link from 'next/link';
import { CalendlyLink } from '@/components/shared/CalendlyLink';
import { AgentPortrait } from '@/components/shared/AgentPortrait';
import { NAP } from '@/lib/schema';
import { getCloudflareUrl } from '@/lib/cloudflare-images';

const heroImage = getCloudflareUrl('/images/hero/hero-las-vegas.png', { width: 1920, quality: 85 });

export function Hero() {
  const imgSrc = heroImage.startsWith('http') ? heroImage : '/images/hero/hero-las-vegas.png';

  return (
    <section className="relative min-h-[min(70vh,640px)] overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={imgSrc}
          alt=""
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--heading-color)]/92 via-[var(--heading-color)]/75 to-[var(--heading-color)]/50" />
      </div>

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col gap-8 px-4 py-16 md:flex-row md:items-end md:justify-between md:py-24">
        <div className="max-w-2xl text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.55)]">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-[var(--accent-light)]">
            Las Vegas · Lone Mountain Heights · 89129
          </p>
          <h1 className="mb-4 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
            Luxury homes &amp; estates in Lone Mountain Heights
          </h1>
          <p className="text-lg text-white/95 md:text-xl">
            Mountain views, established northwest Las Vegas pockets, and private-client guidance from{' '}
            {NAP.name}, Berkshire Hathaway HomeServices Nevada Properties.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/homes"
              className="rounded-lg bg-[var(--accent-color)] px-6 py-3 text-sm font-semibold text-[var(--heading-color)] hover:opacity-90"
            >
              Browse MLS homes
            </Link>
            <CalendlyLink
              text="Schedule a consultation"
              className="rounded-lg bg-white px-6 py-3 text-sm font-semibold text-[var(--heading-color)] hover:bg-white/90"
            />
            <a
              href={NAP.telHref}
              className="rounded-lg border border-white/80 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10"
            >
              Call {NAP.telDisplay}
            </a>
          </div>
        </div>

        <div className="flex items-center gap-4 rounded-2xl border border-white/20 bg-white/10 p-4 backdrop-blur-md md:max-w-xs">
          <AgentPortrait size={72} />
          <div className="text-white">
            <p className="text-sm font-bold">{NAP.name}</p>
            <p className="text-xs text-white/85">Lone Mountain Heights specialist</p>
            <Link href="/about" className="mt-1 inline-block text-xs font-semibold text-[var(--accent-light)] underline-offset-2 hover:underline">
              View profile →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}