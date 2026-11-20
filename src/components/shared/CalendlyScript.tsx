'use client';

import { useEffect } from 'react';
import Script from 'next/script';
import { notifyCalendlyReady } from '@/lib/calendly';

const CALENDLY_CSS = 'https://assets.calendly.com/assets/external/widget.css';

/** Load Calendly JS + CSS after hydration so widget.css is not render-blocking on LCP. */
export function CalendlyScript() {
  useEffect(() => {
    if (document.querySelector(`link[href="${CALENDLY_CSS}"]`)) return;
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = CALENDLY_CSS;
    document.head.appendChild(link);
  }, []);

  return (
    <Script
      id="calendly-widget"
      src="https://assets.calendly.com/assets/external/widget.js"
      strategy="lazyOnload"
      onLoad={notifyCalendlyReady}
    />
  );
}
