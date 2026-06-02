import type { Metadata } from 'next';
import Script from 'next/script';
import { Inter } from 'next/font/google';
import { GlobalSearchBar, SiteFooter } from '@/components/layouts/SiteFooter';
import { Navigation } from '@/components/layouts/Navigation';
import { CalendlyBadge } from '@/components/shared/CalendlyBadge';
import { CalendlyScript } from '@/components/shared/CalendlyScript';
import { JsonLd } from '@/components/shared/JsonLd';
import {
  generateFAQSchema,
  generateLocalBusinessSchema,
  realEstateFAQs,
} from '@/lib/schema';
import { getDefaultSocialMetadata } from '@/lib/site-metadata';
import './globals.css';
import '@/styles/ranchStyles.css';
import '@/styles/realscout-widgets.css';

const inter = Inter({ subsets: ['latin'], display: 'swap' });

const defaultSocial = getDefaultSocialMetadata();

export const metadata: Metadata = {
  metadataBase: new URL('https://lonemountainheights.com'),
  title: {
    default: 'Lone Mountain Heights Real Estate | Dr. Jan Duffy | Las Vegas 89129',
    template: '%s | Lone Mountain Heights | Dr. Jan Duffy',
  },
  description:
    'Find homes for sale in Lone Mountain Heights, Las Vegas 89129. Dr. Jan Duffy leads the Berkshire Hathaway HomeServices Lone Mountain Heights Team.',
  robots: { index: true, follow: true },
  openGraph: defaultSocial.openGraph,
  twitter: defaultSocial.twitter,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const localBusinessSchema = generateLocalBusinessSchema();
  const faqSchema = generateFAQSchema(realEstateFAQs);

  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/images/icons/favicon.png" />
        <link rel="apple-touch-icon" href="/images/icons/favicon.png" />
        <link rel="preconnect" href="https://em.realscout.com" crossOrigin="" />
        <link rel="preconnect" href="https://www.realscout.com" crossOrigin="" />
        <link rel="preconnect" href="https://assets.calendly.com" crossOrigin="" />
        <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet" />
        <JsonLd data={[localBusinessSchema, faqSchema]} />
      </head>
      <body className={inter.className}>
        <Navigation />
        <hr className="m-0 border-t border-slate-200" aria-hidden="true" />
        <GlobalSearchBar />
        <main id="main-content">{children}</main>
        <SiteFooter />
        <CalendlyBadge />
        <CalendlyScript />

        <Script
          src="https://em.realscout.com/widgets/realscout-web-components.umd.js"
          strategy="afterInteractive"
        />
        <Script id="widget-tracker" strategy="lazyOnload">{`
          (function(w,i,d,g,e,t){w["WidgetTrackerObject"]=g;(w[g]=w[g]||function()
          {(w[g].q=w[g].q||[]).push(arguments);}),(w[g].ds=1*new Date());(e="script"),
          (t=d.createElement(e)),(e=d.getElementsByTagName(e)[0]);t.async=1;t.src=i;
          e.parentNode.insertBefore(t,e);})
          (window,"https://widgetbe.com/agent",document,"widgetTracker");
          window.widgetTracker("create", "WT-XQHVYQWW");
          window.widgetTracker("send", "pageview");
        `}</Script>
      </body>
    </html>
  );
}
