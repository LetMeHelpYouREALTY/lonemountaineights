'use client';

import { CALENDLY_READY_EVENT, CALENDLY_URL, openCalendlyPopup } from '@/lib/calendly';
import { useEffect, useState } from 'react';

type CalendlyLinkProps = {
  text?: string;
  className?: string;
};

export function CalendlyLink({
  text = 'Schedule time with me',
  className = '',
}: CalendlyLinkProps) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const markReady = () => setReady(true);
    if (typeof window !== 'undefined' && (window as Window & { Calendly?: unknown }).Calendly) {
      setReady(true);
    }
    window.addEventListener(CALENDLY_READY_EVENT, markReady);
    return () => window.removeEventListener(CALENDLY_READY_EVENT, markReady);
  }, []);

  function handleClick(e: React.MouseEvent<HTMLAnchorElement>) {
    e.preventDefault();
    openCalendlyPopup();
  }

  return (
    <a
      href={CALENDLY_URL}
      className={`transition-opacity hover:opacity-90 ${className}`}
      onClick={handleClick}
      aria-label={ready ? text : `${text} (opens Calendly)`}
    >
      {text}
    </a>
  );
}
