import Link from 'next/link';
import { CalendlyLink } from '@/components/shared/CalendlyLink';
import { RealScoutOfficeListings } from '@/components/shared/JsonLd';
import { GBP_URLS, NAP } from '@/lib/schema';

export function SiteFooter() {
  return (
    <>
      <section
        className="border-t border-slate-200 bg-slate-50 px-4 py-10"
        aria-label="Current Lone Mountain Heights listings"
      >
        <div className="mx-auto max-w-6xl text-center">
          <h2 className="mb-2 text-2xl font-bold text-[var(--heading-color)]">
            Homes for Sale in Lone Mountain Heights
          </h2>
          <p className="mb-6 text-[var(--text-color)]">
            Browse current listings $500K–$800K — Dr. Jan Duffy, your local expert
          </p>
          <RealScoutOfficeListings />
        </div>
      </section>

      <footer className="bg-[var(--heading-color)] px-4 py-12 text-white">
        <div className="mx-auto grid max-w-6xl gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h4 className="mb-4 text-lg font-bold text-white">{NAP.name}</h4>
            <p className="mb-2 text-sm text-white/80">Berkshire Hathaway HomeServices Nevada Properties</p>
            <p className="mb-2 text-sm text-white/80">Head of Lone Mountain Heights Team</p>
            <p className="mb-2 text-sm text-white/80">License {NAP.license}</p>
            <p className="mb-2 text-sm text-white/80">{NAP.fullAddress}</p>
            <p className="text-sm text-white/80"><strong>Hours:</strong> {NAP.hours}</p>
          </div>
          <div>
            <h4 className="mb-4 text-lg font-bold text-white">Contact</h4>
            <p className="mb-2"><CalendlyLink text="📅 Schedule time with me" className="text-white/90 hover:text-white" /></p>
            <p className="mb-2"><a href={NAP.telHref} className="text-white/90 hover:text-white">📞 Call {NAP.telDisplay}</a></p>
            <p className="mb-2"><a href={GBP_URLS.directions} target="_blank" rel="noopener noreferrer" className="text-white/90 hover:text-white">📍 Directions</a></p>
            <p className="mb-2"><a href={GBP_URLS.reviews} target="_blank" rel="noopener noreferrer" className="text-white/90 hover:text-white">⭐ View Google Reviews</a></p>
            <p><a href={`mailto:${NAP.email}`} className="text-white/90 hover:text-white">✉️ {NAP.email}</a></p>
          </div>
          <div>
            <h4 className="mb-4 text-lg font-bold text-white">Quick Links</h4>
            <p className="mb-2"><a href="https://drjanduffy.realscout.com/homesearch/shared-searches/U2hhcmVhYmxlU2VhcmNoTGluay0yOTMx" target="_blank" rel="noopener noreferrer" className="text-white/90 hover:text-white">🔍 Search All Homes</a></p>
            <p className="mb-2"><Link href="/homes" className="text-white/90 hover:text-white">Browse Listings</Link></p>
            <p className="mb-2"><Link href="/sales" className="text-white/90 hover:text-white">Recent Sales</Link></p>
            <p className="mb-2"><Link href="/valuation" className="text-white/90 hover:text-white">Home Valuation</Link></p>
            <p><Link href="/market-report" className="text-white/90 hover:text-white">Market Report</Link></p>
          </div>
          <div>
            <h4 className="mb-4 text-lg font-bold text-white">Local Expertise</h4>
            <p className="mb-2"><Link href="/neighborhoods" className="text-white/90 hover:text-white">Neighborhoods & Communities</Link></p>
            <p className="mb-2"><Link href="/guide" className="text-white/90 hover:text-white">Living in Lone Mountain Heights</Link></p>
            <p className="mb-2"><Link href="/schools" className="text-white/90 hover:text-white">School Information</Link></p>
            <p><Link href="/amenities" className="text-white/90 hover:text-white">Local Amenities</Link></p>
          </div>
        </div>
        <div className="mx-auto mt-8 max-w-6xl border-t border-white/20 pt-6 text-center text-sm text-white/80">
          <p>&copy; 2026 Lone Mountain Heights | Homes by Dr. Jan Duffy {NAP.license}. Berkshire Hathaway HomeServices Nevada Properties. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}

export function GlobalSearchBar() {
  return (
    <section className="border-b border-slate-200 bg-slate-50 px-4 py-2" aria-label="Quick search">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-3">
        <Link href="/homes" className="rounded-md px-3 py-1.5 text-sm font-medium text-[var(--text-color)] hover:bg-blue-50 hover:text-[var(--heading-color)]">
          🔍 Search All Homes
        </Link>
        <Link href="/valuation" className="rounded-md px-3 py-1.5 text-sm font-medium text-[var(--text-color)] hover:bg-blue-50 hover:text-[var(--heading-color)]">
          💰 Home Value
        </Link>
        <CalendlyLink text="Schedule time with me" className="rounded-md px-3 py-1.5 text-sm font-medium text-[var(--text-color)] hover:bg-blue-50 hover:text-[var(--heading-color)]" />
        <a
          href="https://drjanduffy.realscout.com/homesearch/shared-searches/U2hhcmVhYmxlU2VhcmNoTGluay0yOTMx"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-md bg-[var(--accent-color)] px-3 py-1.5 text-sm font-semibold text-[var(--heading-color)] hover:opacity-90"
        >
          Open Full Search
        </a>
      </div>
    </section>
  );
}
