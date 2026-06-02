'use client';

import Script from 'next/script';
import { notifyCalendlyReady } from '@/lib/calendly';

export function CalendlyScript() {
  return (
    <Script
      id="calendly-widget"
      src="https://assets.calendly.com/assets/external/widget.js"
      strategy="afterInteractive"
      onLoad={notifyCalendlyReady}
    />
  );
}
