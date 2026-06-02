'use client';

import { useEffect } from 'react';
import { CALENDLY_URL } from '@/lib/schema';

export function CalendlyInline() {
  useEffect(() => {
    const init = () => {
      const Calendly = (window as Window & {
        Calendly?: { initInlineWidget: (opts: { url: string; parentElement: HTMLElement }) => void };
      }).Calendly;
      const el = document.getElementById('calendly-inline');
      if (Calendly && el && !el.querySelector('iframe')) {
        Calendly.initInlineWidget({ url: CALENDLY_URL, parentElement: el });
      }
    };
    if ((window as Window & { Calendly?: unknown }).Calendly) {
      init();
    } else {
      const t = setInterval(() => {
        if ((window as Window & { Calendly?: unknown }).Calendly) {
          clearInterval(t);
          init();
        }
      }, 200);
      return () => clearInterval(t);
    }
  }, []);

  return (
    <div
      id="calendly-inline"
      className="min-h-[700px] w-full overflow-hidden rounded-lg"
      aria-label="Schedule a call with Dr. Jan Duffy"
    />
  );
}
