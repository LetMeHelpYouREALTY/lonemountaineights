import Image from 'next/image';
import { BRAND_ASSETS, BROKERAGE } from '@/lib/brand';

type BrokerBadgeProps = {
  className?: string;
};

/** Visible BHHS Nevada affiliation — complements Organization schema for GEO trust. */
export function BrokerBadge({ className = '' }: BrokerBadgeProps) {
  return (
    <a
      href={BROKERAGE.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex flex-col items-center gap-2 rounded-lg bg-white px-4 py-3 shadow-sm transition hover:opacity-95 ${className}`}
      aria-label={`${BROKERAGE.name} — official broker site`}
    >
      <Image
        src={BRAND_ASSETS.brokerWordmark}
        alt={BROKERAGE.name}
        width={220}
        height={42}
        className="h-auto w-[200px] max-w-full object-contain"
      />
      <span className="text-center text-[11px] leading-snug text-slate-600">
        Broker of record affiliation · {BROKERAGE.officeAddress}
      </span>
    </a>
  );
}