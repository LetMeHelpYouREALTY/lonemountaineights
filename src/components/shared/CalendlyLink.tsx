'use client';

import { CALENDLY_URL } from '@/lib/schema';

type CalendlyLinkProps = {
  text?: string;
  className?: string;
};

export function CalendlyLink({
  text = 'Schedule time with me',
  className = '',
}: CalendlyLinkProps) {
  function handleClick(e: React.MouseEvent<HTMLAnchorElement>) {
    e.preventDefault();
    const Calendly = (window as Window & { Calendly?: { initPopupWidget: (opts: { url: string }) => void } }).Calendly;
    if (Calendly) {
      Calendly.initPopupWidget({ url: CALENDLY_URL });
    } else {
      window.open(CALENDLY_URL, '_blank', 'noopener,noreferrer');
    }
  }

  return (
    <a
      href={CALENDLY_URL}
      className={`transition-opacity hover:opacity-90 ${className}`}
      onClick={handleClick}
    >
      {text}
    </a>
  );
}
