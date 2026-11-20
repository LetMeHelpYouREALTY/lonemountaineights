'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useCallback, useEffect, useRef, useState } from 'react';
import { AgentPortrait } from '@/components/shared/AgentPortrait';
import { CalendlyLink } from '@/components/shared/CalendlyLink';
import { NAP } from '@/lib/schema';

type NavLink = { href: string; label: string };

const searchLinks: NavLink[] = [
  { href: '/homes', label: 'All Lone Mountain Heights Homes' },
  { href: '/property-types/3-bedroom-homes', label: '3-Bedroom Homes in 89129' },
  { href: '/price-ranges/600k-800k', label: 'Homes $600K–$800K' },
  { href: '/luxury', label: 'Luxury Homes $1M+' },
  { href: '/valuation', label: 'Home Value Estimate' },
];

const buyerLinks: NavLink[] = [
  { href: '/guide', label: 'Living in Lone Mountain Heights' },
  { href: '/sales', label: 'Recent Sales' },
  { href: '/market-report', label: 'Market Report' },
  { href: '/faq/hoa-fees', label: 'HOA Fees FAQ' },
  { href: '/tools', label: 'Buyer Tools & Calculators' },
];

const sellerLinks: NavLink[] = [
  { href: '/valuation', label: 'Free Home Valuation' },
  { href: '/market-intelligence', label: 'Market Intelligence' },
  { href: '/sales', label: 'Comparable Sales' },
  { href: '/contact', label: 'Listing Consultation' },
];

const communityLinks: NavLink[] = [
  { href: '/neighborhoods', label: 'Lone Mountain Heights Neighborhoods' },
  { href: '/locations/lone-mountain-ranch', label: 'Lone Mountain Ranch' },
  { href: '/locations/desert-vista-estates', label: 'Desert Vista Estates' },
  { href: '/amenities', label: 'Parks, Trails & Amenities' },
  { href: '/schools', label: 'Schools & CCSD Zoning' },
];

const aboutLinks: NavLink[] = [
  { href: '/about', label: 'About Dr. Jan Duffy' },
  { href: '/blog', label: 'Blog & Market Updates' },
  { href: '/gallery', label: 'Photo Gallery' },
  { href: '/careers', label: 'Careers' },
  { href: '/contact', label: 'Contact' },
];

const mobileLinks: NavLink[] = [
  ...new Map(
    [...searchLinks, ...buyerLinks, ...sellerLinks, ...communityLinks, ...aboutLinks].map((link) => [link.href, link]),
  ).values(),
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
  const menuId = `nav-menu-${id}`;
  return (
    <li className="relative">
      <button
        type="button"
        className="flex items-center gap-1 whitespace-nowrap px-2 py-2 text-xs font-bold tracking-wider text-[var(--heading-color)] hover:text-[var(--accent-color)] xl:px-3"
        aria-expanded={open}
        aria-controls={menuId}
        onClick={() => setOpenId(open ? null : id)}
      >
        {label} <span aria-hidden="true" className="text-[10px]">▼</span>
      </button>
      {/* Rendered while closed so every nav link stays in the server HTML for crawlers. */}
      <div
        id={menuId}
        className={`absolute left-0 top-full z-50 min-w-[240px] rounded-lg border border-slate-200 bg-white py-2 shadow-lg ${
          open ? 'block' : 'hidden'
        }`}
      >
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-[var(--accent-dark)]"
            onClick={() => setOpenId(null)}
          >
            {link.label}
          </Link>
        ))}
      </div>
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
        <Link href="/" className="flex shrink-0 items-center gap-3" onClick={closeAll}>
          <AgentPortrait size={40} linked={false} eager />
          <div className="flex flex-col leading-tight">
            <span className="text-sm font-bold tracking-wide text-[var(--heading-color)] md:text-base">
              DR. JAN DUFFY
            </span>
            <span className="text-[10px] font-medium text-[var(--text-light)] md:text-xs lg:hidden xl:inline">
              LONE MOUNTAIN HEIGHTS EXPERT
            </span>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main navigation">
          <ul className="flex items-center">
            <NavDropdown label="SEARCH" links={searchLinks} id="search" openId={openDropdown} setOpenId={setOpenDropdown} />
            <NavDropdown label="BUYERS" links={buyerLinks} id="buyers" openId={openDropdown} setOpenId={setOpenDropdown} />
            <NavDropdown label="SELLERS" links={sellerLinks} id="sellers" openId={openDropdown} setOpenId={setOpenDropdown} />
            <NavDropdown label="COMMUNITIES" links={communityLinks} id="communities" openId={openDropdown} setOpenId={setOpenDropdown} />
            <li>
              <Link
                href="/luxury"
                aria-current={pathname === '/luxury' ? 'page' : undefined}
                className={`whitespace-nowrap px-2 py-2 text-xs font-bold tracking-wider hover:text-[var(--accent-color)] xl:px-3 ${
                  pathname === '/luxury' ? 'text-[var(--accent-dark)]' : 'text-[var(--heading-color)]'
                }`}
              >
                LUXURY
              </Link>
            </li>
            <NavDropdown label="ABOUT" links={aboutLinks} id="about" openId={openDropdown} setOpenId={setOpenDropdown} />
          </ul>
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <CalendlyLink
            text="Schedule time with me"
            className="whitespace-nowrap rounded-md bg-[var(--accent-color)] px-3 py-2 text-xs font-semibold text-[var(--heading-color)]"
          />
          <a
            href={NAP.telHref}
            aria-label={`Call Dr. Jan Duffy at ${NAP.telDisplay}`}
            className="whitespace-nowrap rounded-md border border-[var(--heading-color)] px-3 py-2 text-xs font-semibold text-[var(--heading-color)] hover:bg-[var(--heading-color)] hover:text-white"
          >
            <span aria-hidden="true">📞</span>
            <span className="hidden xl:inline"> CALL {NAP.telDisplay}</span>
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
            {mobileLinks.map((link) => (
              <Link
                key={link.href}
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
