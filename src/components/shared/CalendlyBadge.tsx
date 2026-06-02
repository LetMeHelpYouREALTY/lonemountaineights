'use client';

import { useEffect } from 'react';
import { CALENDLY_URL } from '@/lib/schema';

export function CalendlyBadge() {
  useEffect(() => {
    const init = () => {
      const Calendly = (
        window as Window & {
          Calendly?: {
            initBadgeWidget: (opts: {
              url: string;
              text: string;
              color: string;
              textColor: string;
              branding: boolean;
            }) => void;
          };
        }
      ).Calendly;
      if (Calendly && !document.querySelector('.calendly-badge-widget')) {
        Calendly.initBadgeWidget({
          url: CALENDLY_URL,
          text: 'Schedule time with me',
          color: '#0069ff',
          textColor: '#ffffff',
          branding: false,
        });
      }
    };

    if ((window as Window & { Calendly?: unknown }).Calendly) {
      init();
    } else {
      const timer = setInterval(() => {
        if ((window as Window & { Calendly?: unknown }).Calendly) {
          clearInterval(timer);
          init();
        }
      }, 200);
      return () => clearInterval(timer);
    }
  }, []);

  return null;
}
