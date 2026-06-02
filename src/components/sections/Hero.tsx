'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { RealScoutHomeValue, RealScoutSimpleSearch } from '@/components/shared/JsonLd';
import { CalendlyInline } from '@/components/shared/CalendlyInline';
import { CalendlyLink } from '@/components/shared/CalendlyLink';
import { getCloudflareUrl } from '@/lib/cloudflare-images';

const heroImage = getCloudflareUrl('/images/hero/hero-las-vegas.png', { width: 1920, quality: 85 });

export function Hero() {
  const [activeTab, setActiveTab] = useState<'search' | 'valuation' | 'schedule'>('search');

  return (
    <section className="relative min-h-[70vh] overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={heroImage.startsWith('http') ? heroImage : '/images/hero/hero-las-vegas.png'}
          alt="Lone Mountain Heights Las Vegas skyline"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--heading-color)]/92 via-[var(--heading-color)]/75 to-[var(--heading-color)]/55" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-4 py-16 md:py-24">
        <div className="mb-10 max-w-2xl text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.55)]">
          <h1 className="mb-4 text-4xl font-bold leading-tight text-white md:text-5xl">
            Find Your Dream Home in Lone Mountain Heights
          </h1>
          <p className="text-lg text-white md:text-xl">
            Las Vegas&apos;s premier community with mountain views, luxury amenities, and exceptional value
          </p>
        </div>

        <div className="max-w-3xl rounded-2xl border border-slate-200 bg-white p-6 shadow-xl md:p-8">
          <div className="mb-6 flex gap-2">
            <button
              type="button"
              onClick={() => setActiveTab('search')}
              className={`flex-1 rounded-lg px-3 py-3 text-sm font-semibold transition ${
                activeTab === 'search'
                  ? 'bg-[var(--heading-color)] text-white shadow-sm'
                  : 'border border-slate-300 bg-white text-[var(--heading-color)] hover:bg-slate-50'
              }`}
            >
              🏠 Search
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('valuation')}
              className={`flex-1 rounded-lg px-3 py-3 text-sm font-semibold transition ${
                activeTab === 'valuation'
                  ? 'bg-[var(--heading-color)] text-white shadow-sm'
                  : 'border border-slate-300 bg-white text-[var(--heading-color)] hover:bg-slate-50'
              }`}
            >
              💰 Value
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('schedule')}
              className={`flex-1 rounded-lg px-3 py-3 text-sm font-semibold transition ${
                activeTab === 'schedule'
                  ? 'bg-[var(--heading-color)] text-white shadow-sm'
                  : 'border border-slate-300 bg-white text-[var(--heading-color)] hover:bg-slate-50'
              }`}
            >
              📅 Schedule
            </button>
          </div>

          {activeTab === 'search' ? (
            <div>
              <h2 className="mb-1 text-xl font-bold text-[var(--heading-color)]">Search Properties</h2>
              <p className="mb-4 text-sm text-[var(--text-color)]">Find your perfect home in Lone Mountain Heights</p>
              <RealScoutSimpleSearch />
            </div>
          ) : activeTab === 'valuation' ? (
            <div>
              <h2 className="mb-1 text-xl font-bold text-[var(--heading-color)]">Get Your Home&apos;s Value</h2>
              <p className="mb-4 text-sm text-[var(--text-color)]">Free instant valuation powered by local market data</p>
              <RealScoutHomeValue />
            </div>
          ) : (
            <div>
              <h2 className="mb-1 text-xl font-bold text-[var(--heading-color)]">Schedule with Dr. Jan Duffy</h2>
              <p className="mb-4 text-sm text-[var(--text-color)]">
                Book a free 15-minute private conversation about buying or selling in Lone Mountain Heights
              </p>
              <CalendlyInline minHeight={580} />
            </div>
          )}

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="https://drjanduffy.realscout.com/homesearch/shared-searches/U2hhcmVhYmxlU2VhcmNoTGluay0yOTMx"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-[var(--accent-color)] px-5 py-2.5 text-sm font-semibold text-[var(--heading-color)] hover:opacity-90"
            >
              Open Full Search
            </a>
            <Link
              href="/valuation"
              className="rounded-lg border-2 border-[var(--heading-color)] px-5 py-2.5 text-sm font-semibold text-[var(--heading-color)] hover:bg-[var(--heading-color)] hover:text-white"
            >
              Detailed Valuation
            </Link>
            <CalendlyLink
              text="Schedule time with me"
              className="rounded-lg bg-[var(--heading-color)] px-5 py-2.5 text-sm font-semibold text-white hover:opacity-90"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
