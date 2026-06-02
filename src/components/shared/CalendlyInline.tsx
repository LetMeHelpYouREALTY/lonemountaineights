'use client';

import { useEffect, useId } from 'react';
import { CALENDLY_URL } from '@/lib/schema';

type CalendlyInlineProps = {
  minHeight?: number;
  className?: string;
};

export function CalendlyInline({ minHeight = 700, className = '' }: CalendlyInlineProps) {
  const reactId = useId();
  const containerId = `calendly-inline-${reactId.replace(/:/g, '')}`;

  useEffect(() => {
    const init = () => {
      const Calendly = (
        window as Window & {
          Calendly?: { initInlineWidget: (opts: { url: string; parentElement: HTMLElement }) => void };
        }
      ).Calendly;
      const el = document.getElementById(containerId);
      if (Calendly && el && !el.querySelector('iframe')) {
        Calendly.initInlineWidget({ url: CALENDLY_URL, parentElement: el });
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
  }, [containerId]);

  return (
    <div
      id={containerId}
      className={`calendly-inline-widget w-full overflow-hidden rounded-lg ${className}`}
      style={{ minWidth: '320px', height: `${minHeight}px` }}
      aria-label="Schedule a call with Dr. Jan Duffy"
    />
  );
}
