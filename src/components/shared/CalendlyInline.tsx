import { CALENDLY_INLINE_EMBED_URL, CALENDLY_URL } from '@/lib/calendly';

type CalendlyInlineProps = {
  minHeight?: number;
  className?: string;
};

/**
 * Iframe embed — does not depend on widget.js, so it renders reliably on static pages.
 */
export function CalendlyInline({ minHeight = 700, className = '' }: CalendlyInlineProps) {
  return (
    <div
      className={`w-full overflow-hidden rounded-lg border border-slate-200 bg-white ${className}`}
      style={{ minWidth: '320px', height: `${minHeight}px` }}
    >
      <iframe
        src={CALENDLY_INLINE_EMBED_URL}
        title="Schedule a free 15-minute conversation with Dr. Jan Duffy"
        width="100%"
        height="100%"
        style={{ border: 0, minHeight: `${minHeight}px` }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
      <p className="sr-only">
        <a href={CALENDLY_URL}>Schedule time with Dr. Jan Duffy on Calendly</a>
      </p>
    </div>
  );
}
