'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useCallback, useEffect, useRef, useState } from 'react';
import { CalendlyLink } from '@/components/shared/CalendlyLink';
import { NAP } from '@/lib/schema';

type NavLink = { href: string; label: string };

const searchLinks: NavLink[] = [
  { href: '/homes', label: 'Search All Homes' },
  { href: '/property-types/3-bedroom-homes', label: '3 Bedroom Homes' },
  { href: '/price-ranges/600k-800k', label: 'Homes $600K–$800K' },
  { href: '/valuation', label: 'Home Value Calculator' },
];

const buyerLinks: NavLink[] = [
  { href: '/homes', label: 'Browse All Listings' },
  { href: '/neighborhoods', label: 'Neighborhoods' },
  { href: '/sales', label: 'Recent Sales' },
  { href: '/market-report', label: 'Market Data' },
];

const sellerLinks: NavLink[] = [
  { href: '/valuation', label: 'Home Valuation' },
  { href: '/market-report', label: 'Market Analysis' },
  { href: '/amenities', label: 'Local Amenities' },
  { href: '/contact', label: 'Selling Process' },
];

const aboutLinks: NavLink[] = [
  { href: '/about', label: 'About Dr. Jan' },
  { href: '/gallery', label: 'Photo Gallery' },
  { href: '/careers', label: 'Careers' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
];

function NavDropdown({
  label,
  links,
  id,
  openId,
  setOpenId,
}: {
  label: string;
  links: NavLink[];
  id: string;
  openId: string | null;
  setOpenId: (id: string | null) => void;
}) {
  const open = openId === id;
  return (
    <li className="relative">
      <button
        type="button"
        className="flex items-center gap-1 px-3 py-2 text-xs font-bold tracking-wider text-[var(--heading-color)] hover:text-[var(--accent-color)]"
        aria-expanded={open}
        onClick={() => setOpenId(open ? null : id)}
      >
        {label} <span className="text-[10px]">▼</span>
      </button>
      {open && (
        <div className="absolute left-0 top-full z-50 min-w-[220px] rounded-lg border border-slate-200 bg-white py-2 shadow-lg">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-[var(--accent-color)]"
              onClick={() => setOpenId(null)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </li>
  );
}

export function Navigation() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const navRef = useRef<HTMLElement>(null);

  const closeAll = useCallback(() => {
    setMobileOpen(false);
    setOpenDropdown(null);
  }, []);

  useEffect(() => {
    closeAll();
  }, [pathname, closeAll]);

  useEffect(() => {
    function onClickOutside(e: MouseEvent) {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
      }
    }
    document.addEventListener('click', onClickOutside);
    return () => document.removeEventListener('click', onClickOutside);
  }, []);

  return (
    <header ref={navRef} className="sticky top-0 z-40 border-b border-slate-200 bg-white shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3">
        <Link href="/" className="shrink-0" onClick={closeAll}>
          <div className="flex flex-col leading-tight">
            <span className="text-sm font-bold tracking-wide text-[var(--heading-color)] md:text-base">
              DR. JAN DUFFY
            </span>
            <span className="text-[10px] font-medium text-[var(--text-light)] md:text-xs">
              LONE MOUNTAIN HEIGHTS EXPERT
            </span>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main navigation">
          <ul className="flex items-center" role="menubar">
            <NavDropdown label="SEARCH" links={searchLinks} id="search" openId={openDropdown} setOpenId={setOpenDropdown} />
            <NavDropdown label="BUYERS" links={buyerLinks} id="buyers" openId={openDropdown} setOpenId={setOpenDropdown} />
            <NavDropdown label="SELLERS" links={sellerLinks} id="sellers" openId={openDropdown} setOpenId={setOpenDropdown} />
            {[
              { href: '/neighborhoods', label: 'COMMUNITIES' },
              { href: '/luxury', label: 'LUXURY' },
              { href: '/about', label: 'AGENTS' },
              { href: '/contact', label: 'OFFICES' },
            ].map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`px-3 py-2 text-xs font-bold tracking-wider hover:text-[var(--accent-color)] ${
                    pathname === item.href ? 'text-[var(--accent-color)]' : 'text-[var(--heading-color)]'
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <NavDropdown label="ABOUT US" links={aboutLinks} id="about" openId={openDropdown} setOpenId={setOpenDropdown} />
            <li>
              <Link href="/careers" className="px-3 py-2 text-xs font-bold tracking-wider text-[var(--heading-color)] hover:text-[var(--accent-color)]">
                CAREERS
              </Link>
            </li>
            <li>
              <Link href="/blog" className="px-3 py-2 text-xs font-bold tracking-wider text-[var(--heading-color)] hover:text-[var(--accent-color)]">
                BLOG
              </Link>
            </li>
          </ul>
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <CalendlyLink
            text="Schedule time with me"
            className="rounded-md bg-[var(--accent-color)] px-3 py-2 text-xs font-semibold text-[var(--heading-color)]"
          />
          <a
            href={NAP.telHref}
            className="rounded-md border border-[var(--heading-color)] px-3 py-2 text-xs font-semibold text-[var(--heading-color)] hover:bg-[var(--heading-color)] hover:text-white"
          >
            📞 CALL {NAP.telDisplay}
          </a>
        </div>

        <button
          type="button"
          className="flex flex-col gap-1.5 p-2 lg:hidden"
          aria-label="Toggle mobile menu"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <span className="block h-0.5 w-6 bg-[var(--heading-color)]" />
          <span className="block h-0.5 w-6 bg-[var(--heading-color)]" />
          <span className="block h-0.5 w-6 bg-[var(--heading-color)]" />
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-slate-200 bg-white px-4 py-4 lg:hidden">
          <div className="space-y-4">
            {[...searchLinks, ...buyerLinks, ...sellerLinks, ...aboutLinks].map((link) => (
              <Link
                key={`${link.href}-${link.label}`}
                href={link.href}
                className="block text-sm font-medium text-slate-700"
                onClick={closeAll}
              >
                {link.label}
              </Link>
            ))}
            <CalendlyLink text="Schedule time with me" className="block text-sm font-semibold text-[var(--accent-color)]" />
            <a href={NAP.telHref} className="block text-sm font-semibold text-[var(--heading-color)]">
              📞 Call {NAP.telDisplay}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
