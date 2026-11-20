const BHHS_URL = 'https://www.bhhsnv.com';
const LOGO_SRC = '/images/brand/bhhs-nevada-properties.svg';

type BrokerageLockupProps = {
  className?: string;
};

/** Affiliation lockup — full company name (brand-guideline safe), links to BHHS Nevada. */
export function BrokerageLockup({ className = '' }: BrokerageLockupProps) {
  return (
    <a
      href={BHHS_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex flex-col gap-2 ${className}`}
      aria-label="Berkshire Hathaway HomeServices Nevada Properties (opens in a new tab)"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={LOGO_SRC}
        alt="Berkshire Hathaway HomeServices Nevada Properties"
        width={320}
        height={60}
        className="h-auto w-full max-w-xs rounded"
      />
    </a>
  );
}

export const BROKERAGE_LOGO_PATH = LOGO_SRC;
export const BROKERAGE_URL = BHHS_URL;
