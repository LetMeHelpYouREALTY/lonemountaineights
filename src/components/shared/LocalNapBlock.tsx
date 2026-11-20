import { GBP_URLS, NAP } from '@/lib/schema';

type LocalNapBlockProps = {
  className?: string;
  showMap?: boolean;
};

/** Visible NAP + Call / Directions / Reviews — GBP-aligned GEO block. */
export function LocalNapBlock({ className = '', showMap = true }: LocalNapBlockProps) {
  return (
    <section
      className={`rounded-xl border border-white/15 bg-white/5 p-5 ${className}`}
      aria-label="Business contact and location"
    >
      <h3 className="mb-3 text-lg font-bold text-white">{NAP.name}</h3>
      <p className="mb-1 text-sm text-white/85">{NAP.fullAddress}</p>
      <p className="mb-1 text-sm text-white/85">
        <a href={NAP.telHref} className="underline-offset-2 hover:underline">
          {NAP.telDisplay}
        </a>
      </p>
      <p className="mb-4 text-sm text-white/85">
        <a href={`mailto:${NAP.email}`} className="underline-offset-2 hover:underline">
          {NAP.email}
        </a>
      </p>
      <p className="mb-4 text-sm text-white/80">
        <strong>Hours:</strong> {NAP.hours}
      </p>
      <div className="mb-4 flex flex-wrap gap-2">
        <a
          href={NAP.telHref}
          className="rounded-md bg-[var(--accent-color)] px-3 py-2 text-sm font-semibold text-[var(--heading-color)] hover:opacity-90"
        >
          Call
        </a>
        <a
          href={GBP_URLS.directions}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-md border border-white/30 px-3 py-2 text-sm font-semibold text-white hover:bg-white/10"
        >
          Directions
        </a>
        <a
          href={GBP_URLS.reviews}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-md border border-white/30 px-3 py-2 text-sm font-semibold text-white hover:bg-white/10"
        >
          View Google Reviews
        </a>
      </div>
      {showMap && (
        <div className="overflow-hidden rounded-lg border border-white/20">
          <iframe
            title="Map of Lone Mountain Heights, Las Vegas NV 89129"
            src={GBP_URLS.mapEmbed}
            className="h-44 w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      )}
    </section>
  );
}
