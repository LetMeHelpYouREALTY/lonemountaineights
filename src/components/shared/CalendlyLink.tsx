'use client';

import {
  CALENDLY_READY_EVENT,
  type CalendlyEvent,
  calendlyUrl,
  openCalendlyPopup,
} from '@/lib/calendly';
import { useEffect, useState } from 'react';

type CalendlyLinkProps = {
  text?: string;
  className?: string;
  event?: CalendlyEvent;
  /** utm_content value naming where this link sits on the site. */
  placement?: string;
};

export function CalendlyLink({
  text = 'Schedule time with me',
  className = '',
  event = 'consult',
  placement = 'site',
}: CalendlyLinkProps) {
  const [ready, setReady] = useState(false);
  const url = calendlyUrl(event, placement);

  useEffect(() => {
    const markReady = () => setReady(true);
    if (typeof window !== 'undefined' && (window as Window & { Calendly?: unknown }).Calendly) {
      setReady(true);
    }
    window.addEventListener(CALENDLY_READY_EVENT, markReady);
    return () => window.removeEventListener(CALENDLY_READY_EVENT, markReady);
  }, []);

  function handleClick(e: React.MouseEvent<HTMLAnchorElement>) {
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;
    e.preventDefault();
    openCalendlyPopup(url);
  }

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`transition-opacity hover:opacity-90 ${className}`}
      onClick={handleClick}
    >
      {text}
      <span className="sr-only">
        {ready ? ' (opens Calendly scheduler)' : ' (opens Calendly in a new tab)'}
      </span>
    </a>
  );
}
