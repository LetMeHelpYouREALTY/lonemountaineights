'use client';

import { useEffect, useRef } from 'react';

const AGENT_ENCODED_ID = 'QWdlbnQtMjI1MDUw';

type RealScoutMountProps = {
  html: string;
  className?: string;
  /** Reserved height while the custom element upgrades / paints */
  minHeight?: number;
};

/**
 * Mount RealScout custom elements after the client is ready.
 * dangerouslySetInnerHTML inside client trees (esp. tabbed heroes) often leaves
 * empty upgraded hosts; setting innerHTML in useEffect reconnects reliably.
 */
function RealScoutMount({ html, className, minHeight = 120 }: RealScoutMountProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const host = ref.current;
    if (!host) return;

    const tagMatch = html.match(/<(realscout-[a-z0-9-]+)/i);
    const tag = tagMatch?.[1]?.toLowerCase();

    const mount = () => {
      if (!ref.current) return;
      ref.current.innerHTML = html;
    };

    mount();

    if (!tag) return;

    let cancelled = false;
    const ensureDefined = async () => {
      try {
        if (!customElements.get(tag)) {
          await customElements.whenDefined(tag);
        }
      } catch {
        // Script may still be loading; retry once after a short delay.
        await new Promise((r) => setTimeout(r, 800));
      }
      if (cancelled || !ref.current) return;
      // Re-insert so connectedCallback runs after the definition exists.
      if (!ref.current.querySelector(tag)) {
        mount();
      }
    };

    void ensureDefined();
    return () => {
      cancelled = true;
    };
  }, [html]);

  return (
    <div
      ref={ref}
      className={className ? `realscout-widget-wrap ${className}` : 'realscout-widget-wrap'}
      style={{ minHeight }}
      suppressHydrationWarning
    />
  );
}

export function RealScoutOfficeListings({
  className,
  priceMin = '500000',
  priceMax = '800000',
}: {
  className?: string;
  priceMin?: string;
  priceMax?: string;
}) {
  const html = `<realscout-office-listings agent-encoded-id="${AGENT_ENCODED_ID}" sort-order="NEWEST" listing-status="For Sale" property-types="SFR,MF,TC" price-min="${priceMin}" price-max="${priceMax}"></realscout-office-listings>`;
  return <RealScoutMount html={html} className={className} minHeight={280} />;
}

export function RealScoutSimpleSearch({ className }: { className?: string }) {
  const html = `<realscout-simple-search agent-encoded-id="${AGENT_ENCODED_ID}"></realscout-simple-search>`;
  return <RealScoutMount html={html} className={className} minHeight={72} />;
}

export function RealScoutHomeValue({ className }: { className?: string }) {
  const html = `<realscout-home-value agent-encoded-id="${AGENT_ENCODED_ID}"></realscout-home-value>`;
  return <RealScoutMount html={html} className={className} minHeight={220} />;
}
