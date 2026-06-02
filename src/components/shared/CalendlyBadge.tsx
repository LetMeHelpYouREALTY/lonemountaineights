'use client';

import { CALENDLY_READY_EVENT, CALENDLY_URL, getCalendly } from '@/lib/calendly';
import { useEffect } from 'react';

function initBadge() {
  const Calendly = getCalendly();
  if (Calendly && !document.querySelector('.calendly-badge-widget')) {
    Calendly.initBadgeWidget({
      url: CALENDLY_URL,
      text: 'Schedule time with me',
      color: '#0069ff',
      textColor: '#ffffff',
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
