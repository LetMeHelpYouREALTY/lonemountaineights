import type { ReactNode } from 'react';

type JsonLdProps = {
  data: Record<string, unknown> | Record<string, unknown>[];
};

export function JsonLd({ data }: JsonLdProps) {
  const items = Array.isArray(data) ? data : [data];
  return (
    <>
      {items.map((item, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(item) }}
        />
      ))}
    </>
  );
}

type RealScoutWidgetProps = {
  html: string;
  className?: string;
};

/** RealScout custom elements — script loaded once in root layout */
export function RealScoutWidget({ html, className }: RealScoutWidgetProps) {
  return (
    <div
      className={className ? `realscout-widget-wrap ${className}` : 'realscout-widget-wrap'}
      dangerouslySetInnerHTML={{ __html: html }}
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
  return (
    <RealScoutWidget
      className={className}
      html={`<realscout-office-listings agent-encoded-id="QWdlbnQtMjI1MDUw" sort-order="NEWEST" listing-status="For Sale" property-types="SFR,MF,TC" price-min="${priceMin}" price-max="${priceMax}"></realscout-office-listings>`}
    />
  );
}

export function RealScoutSimpleSearch({ className }: { className?: string }) {
  return (
    <RealScoutWidget
      className={className}
      html='<realscout-simple-search agent-encoded-id="QWdlbnQtMjI1MDUw"></realscout-simple-search>'
    />
  );
}

export function RealScoutHomeValue({ className }: { className?: string }) {
  return (
    <RealScoutWidget
      className={className}
      html='<realscout-home-value agent-encoded-id="QWdlbnQtMjI1MDUw"></realscout-home-value>'
    />
  );
}

export function PageContainer({ children }: { children: ReactNode }) {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-8 md:px-8">{children}</div>
  );
}
