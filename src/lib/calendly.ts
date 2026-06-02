/** Dr. Jan Duffy — Calendly booking URL (single source of truth). */
export const CALENDLY_URL =
  'https://calendly.com/drjanduffy/dr-duffy-private-15-min-conversation';

/** Iframe embed URL — works without widget.js (reliable in Next.js). */
export const CALENDLY_INLINE_EMBED_URL = `${CALENDLY_URL}?hide_event_type_details=1&hide_gdpr_banner=1`;

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

export function openCalendlyPopup(): void {
  const Calendly = getCalendly();
  if (Calendly) {
    Calendly.initPopupWidget({ url: CALENDLY_URL });
  } else {
    window.open(CALENDLY_URL, '_blank', 'noopener,noreferrer');
  }
}
