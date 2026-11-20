const CALENDLY_ORIGIN = 'https://calendly.com/drjanduffy';
const UTM_SOURCE = 'lonemountainheights.com';

/** Dr. Jan Duffy's Calendly event types, keyed by visitor intent. */
export const CALENDLY_EVENTS = {
  consult: {
    slug: 'dr-duffy-private-15-min-conversation',
    label: 'a free 15-minute conversation',
  },
  buyer: { slug: 'buyer-consultation-30-min', label: 'a 30-minute buyer consultation' },
  showing: { slug: 'showing', label: 'a home showing' },
  listing: { slug: 'listing-consultation', label: 'a listing consultation' },
} as const;

export type CalendlyEvent = keyof typeof CALENDLY_EVENTS;

/**
 * Booking URL with fleet UTM tags. `placement` becomes utm_content so each CTA
 * on the site is attributable in Calendly reporting.
 */
export function calendlyUrl(event: CalendlyEvent = 'consult', placement = 'site'): string {
  const params = new URLSearchParams({
    utm_source: UTM_SOURCE,
    utm_medium: 'website',
    utm_content: placement,
  });
  return `${CALENDLY_ORIGIN}/${CALENDLY_EVENTS[event].slug}?${params.toString()}`;
}

/** Iframe embed URL — works without widget.js (reliable in Next.js). */
export function calendlyInlineUrl(event: CalendlyEvent = 'consult', placement = 'inline'): string {
  return `${calendlyUrl(event, placement)}&hide_event_type_details=1&hide_gdpr_banner=1`;
}

export const CALENDLY_URL = calendlyUrl('consult', 'site');

export const CALENDLY_READY_EVENT = 'calendly-ready';

export function notifyCalendlyReady(): void {
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new Event(CALENDLY_READY_EVENT));
  }
}

export type CalendlyWindow = Window & {
  Calendly?: {
    initPopupWidget: (opts: { url: string }) => void;
    initBadgeWidget: (opts: {
      url: string;
      text: string;
      color: string;
      textColor: string;
      branding: boolean;
    }) => void;
    initInlineWidget: (opts: { url: string; parentElement: HTMLElement }) => void;
  };
};

export function getCalendly(): CalendlyWindow['Calendly'] {
  return (window as CalendlyWindow).Calendly;
}

export function openCalendlyPopup(url: string = CALENDLY_URL): void {
  const Calendly = getCalendly();
  if (Calendly) {
    Calendly.initPopupWidget({ url });
  } else {
    window.open(url, '_blank', 'noopener,noreferrer');
  }
}
