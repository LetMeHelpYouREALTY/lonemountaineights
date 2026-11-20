'use client';

import { CALENDLY_READY_EVENT, calendlyUrl, getCalendly } from '@/lib/calendly';
import { useEffect } from 'react';

function initBadge() {
  const Calendly = getCalendly();
  if (Calendly && !document.querySelector('.calendly-badge-widget')) {
    Calendly.initBadgeWidget({
      url: calendlyUrl('consult', 'floating-badge'),
      text: 'Schedule time with me',
      color: '#d4af37',
      textColor: '#1e3a8a',
      branding: false,
    });
  }
}

export function CalendlyBadge() {
  useEffect(() => {
    if (getCalendly()) {
      initBadge();
      return;
    }

    const onReady = () => initBadge();
    window.addEventListener(CALENDLY_READY_EVENT, onReady);
    return () => window.removeEventListener(CALENDLY_READY_EVENT, onReady);
  }, []);

  return null;
}
