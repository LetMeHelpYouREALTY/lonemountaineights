import {
  CALENDLY_EVENTS,
  type CalendlyEvent,
  calendlyInlineUrl,
  calendlyUrl,
} from '@/lib/calendly';

type CalendlyInlineProps = {
  minHeight?: number;
  className?: string;
  event?: CalendlyEvent;
  placement?: string;
};

/**
 * Iframe embed — does not depend on widget.js, so it renders reliably on static pages.
 */
export function CalendlyInline({
  minHeight = 700,
  className = '',
  event = 'consult',
  placement = 'inline',
}: CalendlyInlineProps) {
  const label = `Schedule ${CALENDLY_EVENTS[event].label} with Dr. Jan Duffy`;

  return (
    <div
      className={`w-full overflow-hidden rounded-lg border border-slate-200 bg-white ${className}`}
      style={{ minWidth: '320px', height: `${minHeight}px` }}
    >
      <iframe
        src={calendlyInlineUrl(event, placement)}
        title={label}
        width="100%"
        height="100%"
        style={{ border: 0, minHeight: `${minHeight}px` }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
      <p className="sr-only">
        <a href={calendlyUrl(event, placement)} target="_blank" rel="noopener noreferrer">
          {label} on Calendly (opens in a new tab)
        </a>
      </p>
    </div>
  );
}
