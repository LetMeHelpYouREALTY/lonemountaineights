/**
 * realscout-global-injector — Cloudflare Worker
 *
 * Deployed across 135+ real estate domains. Handles:
 *   1. Edge proxy for RealScout script (/cdn/realscout-widgets.js)
 *   2. RealScout lazy-loading via Intersection Observer
 *   3. Page-type-aware CTA popups and floating buttons
 *   4. Schema.org JSON-LD injection (RealEstateAgent + WebPage)
 *   5. Shimmer placeholders for RealScout widgets (CLS prevention)
 *
 * Deploy:  cd workers/realscout-global-injector && npx wrangler deploy
 * Routes:  node scripts/deploy-worker-routes.js
 */

// ═══════════════════════════════════════════════════════════════════════════
// EDGE PROXY — serves RealScout bundle from same origin (eliminates 3rd-party DNS/TLS)
// ═══════════════════════════════════════════════════════════════════════════

const REALSCOUT_ORIGIN_URL = 'https://em.realscout.com/widgets/realscout-web-components.umd.js';
const PROXY_PATH = '/cdn/realscout-widgets.js';
const PROXY_CACHE_SECONDS = 3600; // 1 hour edge cache

async function handleProxyRequest(request) {
  // Check Cloudflare edge cache first
  const cache = caches.default;
  const cacheKey = new Request(request.url, request);
  const cached = await cache.match(cacheKey);
  if (cached) return cached;

  // Fetch from RealScout origin
  const upstream = await fetch(REALSCOUT_ORIGIN_URL, {
    headers: {
      'User-Agent': 'CloudflareWorker/1.0',
      'Accept': 'application/javascript',
    },
  });

  if (!upstream.ok) {
    // On upstream error, redirect to direct URL as fallback
    return Response.redirect(REALSCOUT_ORIGIN_URL, 302);
  }

  // Build cacheable response
  const body = await upstream.arrayBuffer();
  const response = new Response(body, {
    status: 200,
    headers: {
      'Content-Type': 'application/javascript; charset=utf-8',
      'Cache-Control': `public, max-age=${PROXY_CACHE_SECONDS}, s-maxage=${PROXY_CACHE_SECONDS}`,
      'Access-Control-Allow-Origin': '*',
      'X-Content-Type-Options': 'nosniff',
      'X-Proxy-Source': 'realscout-global-injector',
    },
  });

  // Store in edge cache (fire-and-forget)
  cache.put(cacheKey, response.clone());

  return response;
}

// ═══════════════════════════════════════════════════════════════════════════
// MAIN FETCH HANDLER
// ═══════════════════════════════════════════════════════════════════════════

export default {
  async fetch(request) {
    const url = new URL(request.url);

    // ── Route A: Edge proxy for RealScout script ──
    if (url.pathname === PROXY_PATH) {
      return handleProxyRequest(request);
    }

    // ── Early return for static assets — skip HTML processing ──
    const lastSegment = url.pathname.split('/').pop() || '';
    const dotIndex = lastSegment.lastIndexOf('.');
    if (dotIndex > 0) {
      const ext = lastSegment.substring(dotIndex + 1).toLowerCase();
      const staticExts = new Set([
        'js','css','png','jpg','jpeg','gif','svg','webp','avif',
        'woff','woff2','ttf','eot','ico','pdf','mp4','webm',
        'json','xml','txt','map','br','gz'
      ]);
      if (staticExts.has(ext)) {
        return fetch(request);
      }
    }

    // ── Route B: HTML injection ──
    const response = await fetch(request);

    // Only inject into HTML responses
    const contentType = response.headers.get('content-type') || '';
    if (!contentType.includes('text/html')) {
      return response;
    }

    const html = await response.text();

    const pathname = url.pathname.toLowerCase();
    const hostname = url.hostname.toLowerCase();

    const pageType = detectPageType(pathname, hostname);
    const cta = getCTAConfig(pageType);
    const schema = getSchemaMarkup(hostname, pathname, pageType);

    const headStyles = `
${schema}
<style>
  realscout-office-listings {
    --rs-listing-divider-color: #0e64c8;
    width: 100%;
  }
  realscout-home-value {
    --rs-hvw-background-color: #ffffff;
    --rs-hvw-title-color: #000000;
    --rs-hvw-subtitle-color: rgba(28, 30, 38, 0.5);
    --rs-hvw-primary-button-text-color: #ffffff;
    --rs-hvw-primary-button-color: rgb(35, 93, 137);
    --rs-hvw-secondary-button-text-color: rgb(35, 93, 137);
    --rs-hvw-secondary-button-color: #ffffff;
    --rs-hvw-widget-width: auto;
  }
  realscout-your-listings {
    --rs-listing-divider-color: rgb(101, 141, 172);
    width: 100%;
  }
  realscout-advanced-search {
    --rs-as-button-text-color: #ffffff;
    --rs-as-background-color: #ffffff;
    --rs-as-button-color: rgb(35, 93, 137);
    --rs-as-widget-width: 500px !important;
  }
  realscout-simple-search {
    --rs-ss-font-primary-color: #6a6d72;
    --rs-ss-searchbar-border-color: hsl(0, 0%, 80%);
    --rs-ss-box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
    --rs-ss-widget-width: 500px !important;
  }
  realscout-office-listings:not(:defined),
  realscout-home-value:not(:defined),
  realscout-your-listings:not(:defined),
  realscout-advanced-search:not(:defined),
  realscout-simple-search:not(:defined) {
    display: block;
    min-height: 200px;
    background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
    background-size: 200% 100%;
    animation: rs-shimmer 1.5s ease-in-out infinite;
    border-radius: 8px;
  }
  @keyframes rs-shimmer {
    0% { background-position: 200% 0; }
    100% { background-position: -200% 0; }
  }
</style>
<link rel="preconnect" href="https://em.realscout.com" crossorigin>
<link rel="dns-prefetch" href="https://em.realscout.com">
`;

    // HTML-escape CTA config values to prevent injection
    const esc = (str) => str.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#39;');

    const bodyScripts = `
<script>
(function() {
  'use strict';
  var rsLoaded = false;
  function loadRealScout() {
    if (rsLoaded) return;
    rsLoaded = true;
    var script = document.createElement('script');
    script.type = 'module';
    script.src = '${PROXY_PATH}';
    script.onerror = function() {
      var fallback = document.createElement('script');
      fallback.type = 'module';
      fallback.src = '${REALSCOUT_ORIGIN_URL}';
      document.head.appendChild(fallback);
    };
    document.head.appendChild(script);
  }
  var RS_TAGS = [
    'realscout-office-listings',
    'realscout-home-value',
    'realscout-your-listings',
    'realscout-advanced-search',
    'realscout-simple-search'
  ];
  function findAndObserve() {
    var elements = [];
    for (var i = 0; i < RS_TAGS.length; i++) {
      var found = document.querySelectorAll(RS_TAGS[i]);
      for (var j = 0; j < found.length; j++) {
        elements.push(found[j]);
      }
    }
    if (elements.length === 0) return;
    if (!('IntersectionObserver' in window)) {
      loadRealScout();
      return;
    }
    var observer = new IntersectionObserver(function(entries) {
      for (var k = 0; k < entries.length; k++) {
        if (entries[k].isIntersecting) {
          loadRealScout();
          observer.disconnect();
          return;
        }
      }
    }, { rootMargin: '300px 0px', threshold: 0 });
    for (var m = 0; m < elements.length; m++) {
      observer.observe(elements[m]);
    }
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', findAndObserve);
  } else {
    findAndObserve();
  }
})();
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500;600;700&display=swap');
  .drj-float-btn {
    position: fixed;
    bottom: 24px;
    right: 24px;
    z-index: 9998;
    font-family: 'Montserrat', sans-serif;
    animation: drj-pulse 2s ease-in-out infinite;
  }
  .drj-float-btn a {
    display: flex;
    align-items: center;
    gap: 10px;
    background: linear-gradient(135deg, #235D89 0%, #1a4a6e 100%);
    color: #fff;
    padding: 14px 24px;
    border-radius: 50px;
    text-decoration: none;
    font-weight: 600;
    font-size: 15px;
    box-shadow: 0 4px 20px rgba(35, 93, 137, 0.4);
    transition: all 0.3s ease;
  }
  .drj-float-btn a:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 28px rgba(35, 93, 137, 0.5);
    background: linear-gradient(135deg, #2a6d9e 0%, #235D89 100%);
  }
  .drj-float-btn svg { width: 20px; height: 20px; }
  @keyframes drj-pulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.02); }
  }
  .drj-popup-overlay {
    display: none;
    position: fixed;
    top: 0; left: 0;
    width: 100%; height: 100%;
    background: rgba(0, 0, 0, 0.7);
    backdrop-filter: blur(4px);
    z-index: 10000;
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  .drj-popup-overlay.drj-active {
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 1;
  }
  .drj-popup {
    background: #fff;
    border-radius: 16px;
    max-width: 480px;
    width: 90%;
    padding: 40px;
    position: relative;
    box-shadow: 0 25px 80px rgba(0, 0, 0, 0.3);
    transform: translateY(20px);
    transition: transform 0.3s ease;
    font-family: 'Montserrat', sans-serif;
  }
  .drj-popup-overlay.drj-active .drj-popup { transform: translateY(0); }
  .drj-popup-close {
    position: absolute;
    top: 16px; right: 16px;
    background: #f1f5f9;
    border: none;
    width: 32px; height: 32px;
    border-radius: 50%;
    cursor: pointer;
    font-size: 18px;
    color: #64748b;
    transition: all 0.2s;
  }
  .drj-popup-close:hover { background: #e2e8f0; color: #334155; }
  .drj-popup-badge {
    display: inline-block;
    background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%);
    color: #92400e;
    padding: 6px 14px;
    border-radius: 20px;
    font-size: 12px;
    font-weight: 600;
    margin-bottom: 16px;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }
  .drj-popup h3 {
    font-size: 26px;
    font-weight: 700;
    color: #0f172a;
    margin: 0 0 12px 0;
    line-height: 1.3;
  }
  .drj-popup p {
    color: #475569;
    font-size: 15px;
    line-height: 1.6;
    margin: 0 0 24px 0;
  }
  .drj-popup-cta {
    display: block;
    width: 100%;
    background: linear-gradient(135deg, #235D89 0%, #1a4a6e 100%);
    color: #fff;
    padding: 16px 24px;
    border: none;
    border-radius: 12px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    text-decoration: none;
    text-align: center;
    transition: all 0.3s ease;
    font-family: 'Montserrat', sans-serif;
    box-sizing: border-box;
  }
  .drj-popup-cta:hover {
    background: linear-gradient(135deg, #2a6d9e 0%, #235D89 100%);
    transform: translateY(-1px);
    box-shadow: 0 4px 16px rgba(35, 93, 137, 0.3);
    color: #fff;
  }
  .drj-popup-secondary {
    display: block;
    text-align: center;
    margin-top: 16px;
    color: #64748b;
    font-size: 14px;
    text-decoration: none;
  }
  .drj-popup-secondary:hover { color: #235D89; }
  .drj-popup-trust {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    margin-top: 20px;
    padding-top: 20px;
    border-top: 1px solid #e2e8f0;
    color: #64748b;
    font-size: 13px;
  }
  .drj-popup-trust svg { width: 16px; height: 16px; color: #22c55e; }
  @media (max-width: 640px) {
    .drj-float-btn { bottom: 16px; right: 16px; }
    .drj-float-btn a { padding: 12px 18px; font-size: 14px; }
    .drj-float-btn .drj-btn-text { display: none; }
    .drj-popup { padding: 28px; margin: 16px; }
    .drj-popup h3 { font-size: 22px; }
  }
</style>

<div class="drj-float-btn">
  <a href="tel:7025001955" id="drj-book-btn">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
      <path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
    <span class="drj-btn-text">${esc(cta.buttonText)}</span>
  </a>
</div>

<div class="drj-popup-overlay" id="drj-exit-popup">
  <div class="drj-popup">
    <button class="drj-popup-close" id="drj-popup-close">&times;</button>
    <div class="drj-popup-badge">${esc(cta.badge)}</div>
    <h3>${esc(cta.headline)}</h3>
    <p>${esc(cta.subheadline)}</p>
    <a href="tel:7025001955" class="drj-popup-cta">${esc(cta.ctaText)}</a>
    <a href="sms:7025001955" class="drj-popup-secondary">Or text me instead &rarr;</a>
    <div class="drj-popup-trust">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
      30+ years experience &bull; 500+ families helped
    </div>
  </div>
</div>

<script>
(function() {
  'use strict';
  let popupShown = false;
  const POPUP_KEY = 'drj_popup_shown';
  const POPUP_EXPIRY = 86400000;
  function wasPopupRecentlyShown() {
    try {
      const data = localStorage.getItem(POPUP_KEY);
      if (!data) return false;
      return (Date.now() - parseInt(data, 10)) < POPUP_EXPIRY;
    } catch (e) { return false; }
  }
  function markPopupShown() {
    try { localStorage.setItem(POPUP_KEY, Date.now().toString()); } catch (e) {}
  }
  function showExitPopup() {
    if (popupShown || wasPopupRecentlyShown()) return;
    popupShown = true;
    markPopupShown();
    const popup = document.getElementById('drj-exit-popup');
    if (popup) {
      popup.classList.add('drj-active');
      document.body.style.overflow = 'hidden';
    }
  }
  function hidePopup() {
    const popup = document.getElementById('drj-exit-popup');
    if (popup) {
      popup.classList.remove('drj-active');
      document.body.style.overflow = '';
    }
  }
  document.addEventListener('mouseout', function(e) {
    if (e.clientY <= 5) showExitPopup();
  });
  let lastScrollTop = 0, scrollUpCount = 0;
  window.addEventListener('scroll', function() {
    const st = window.pageYOffset || document.documentElement.scrollTop;
    if (st < lastScrollTop && st < 100) {
      scrollUpCount++;
      if (scrollUpCount > 3) showExitPopup();
    } else { scrollUpCount = 0; }
    lastScrollTop = st <= 0 ? 0 : st;
  }, { passive: true });
  setTimeout(function() {
    if (!popupShown && !wasPopupRecentlyShown() && window.pageYOffset > 300) {
      showExitPopup();
    }
  }, 45000);
  document.addEventListener('DOMContentLoaded', function() {
    const closeBtn = document.getElementById('drj-popup-close');
    const overlay = document.getElementById('drj-exit-popup');
    if (closeBtn) closeBtn.addEventListener('click', hidePopup);
    if (overlay) overlay.addEventListener('click', function(e) {
      if (e.target === overlay) hidePopup();
    });
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape') hidePopup();
    });
  });
  document.addEventListener('click', function(e) {
    const btn = e.target.closest('.drj-popup-cta, #drj-book-btn, .drj-popup-secondary');
    if (btn) {
      const label = btn.classList.contains('drj-popup-cta') ? 'popup_call_cta' :
                    btn.classList.contains('drj-popup-secondary') ? 'popup_text_cta' : 'floating_button';
      if (typeof gtag === 'function') gtag('event', 'generate_lead', { event_category: 'appointment', event_label: label, value: 1 });
      if (typeof ga === 'function') ga('send', 'event', 'appointment', 'click', label);
      if (typeof fbq === 'function') fbq('track', 'Lead', { content_name: label });
    }
  });
})();
</script>
`;

    let modifiedHtml = html.replace('</head>', headStyles + '</head>');
    modifiedHtml = modifiedHtml.replace('</body>', bodyScripts + '</body>');

    // Properly construct response with explicit status and headers
    const newHeaders = new Headers(response.headers);
    newHeaders.set('Cache-Control', 'public, max-age=300, s-maxage=300, stale-while-revalidate=600');
    newHeaders.set('X-DRJ-Injector', 'active');

    return new Response(modifiedHtml, {
      status: response.status,
      headers: newHeaders,
    });
  }
};

// ═══════════════════════════════════════════════════════════════════════════
// PAGE TYPE DETECTION
// ═══════════════════════════════════════════════════════════════════════════

function detectPageType(pathname, hostname) {
  const path = pathname.toLowerCase();
  const host = hostname.toLowerCase();
  if (path.includes('55') || path.includes('senior') || path.includes('sun-city') ||
      path.includes('del-webb') || path.includes('trilogy') || path.includes('heritage') ||
      path.includes('siena') || path.includes('anthem') || path.includes('solera') ||
      host.includes('55') || host.includes('suncity') || host.includes('delwebb') ||
      host.includes('trilogy') || host.includes('siena')) {
    return '55plus';
  }
  if (path.includes('sell') || path.includes('listing') || path.includes('home-value') ||
      path.includes('cma') || path.includes('what-is-my-home-worth') || path.includes('market-report')) {
    return 'seller';
  }
  if (path.includes('new-home') || path.includes('new-construction') || path.includes('builder') ||
      path.includes('kb-home') || path.includes('lennar') || path.includes('toll-brothers') ||
      path.includes('pulte') || path.includes('century') || path.includes('taylor-morrison') ||
      path.includes('skye-canyon') || path.includes('skye-hills') ||
      host.includes('newhome') || host.includes('newconstruction')) {
    return 'newconstruction';
  }
  if (path.includes('luxury') || path.includes('ridges') || path.includes('summit') ||
      path.includes('million') || path.includes('estate') || path.includes('macdonald') ||
      path.includes('red-rock-country') || path.includes('spanish-hills') ||
      host.includes('luxury') || host.includes('highrise') || host.includes('strip')) {
    return 'luxury';
  }
  if (path.includes('invest') || path.includes('rental') || path.includes('roi') ||
      path.includes('cash-flow') || path.includes('income-property')) {
    return 'investor';
  }
  if (path.includes('divorce') || path.includes('probate') || path.includes('estate-sale')) {
    return 'divorce';
  }
  if (path.includes('reloca') || path.includes('moving-to') || path.includes('move-to')) {
    return 'relocation';
  }
  if (path.includes('multi-gen') || path.includes('multigenerational') || path.includes('dual-master') ||
      host.includes('multigen')) {
    return 'multigen';
  }
  return 'buyer';
}

// ═══════════════════════════════════════════════════════════════════════════
// CTA CONFIGURATIONS
// ═══════════════════════════════════════════════════════════════════════════

function getCTAConfig(pageType) {
  const configs = {
    '55plus': {
      buttonText: 'Find Community',
      badge: '55+ Community Expert',
      headline: 'Find Your Perfect Active Adult Community',
      subheadline: 'Sun City, Del Webb, Heritage at Stonebridge \u2014 I know every community, every floor plan, and every lifestyle perk. Let me match you with your ideal fit.',
      ctaText: 'Call Dr. Jan: 702-500-1955'
    },
    'seller': {
      buttonText: 'Home Value',
      badge: 'Free Home Valuation',
      headline: 'Your Home May Be Worth More Than You Think',
      subheadline: 'Online estimates miss the upgrades and location premiums that matter. Get a real market analysis from someone who knows every sale in your neighborhood.',
      ctaText: 'Get My Free CMA: 702-500-1955'
    },
    'newconstruction': {
      buttonText: 'Builder Info',
      badge: 'Builder Specialist',
      headline: "Don\u2019t Miss Current Builder Incentives",
      subheadline: 'KB Home, Lennar, Toll Brothers, Century Communities \u2014 I know which lots are releasing, what incentives are running, and how to negotiate your best deal.',
      ctaText: 'Get Insider Access: 702-500-1955'
    },
    'luxury': {
      buttonText: 'Private Tour',
      badge: 'Luxury Specialist',
      headline: 'Exclusive Properties Require Expert Guidance',
      subheadline: "The Ridges, Red Rock Country Club, The Summit \u2014 I specialize in Las Vegas luxury and can show you properties before they hit the market.",
      ctaText: 'Schedule Private Tour: 702-500-1955'
    },
    'investor': {
      buttonText: 'ROI Analysis',
      badge: 'Investment Expert',
      headline: "Let\u2019s Run the Numbers Together",
      subheadline: "Cap rates, cash flow, appreciation potential \u2014 I\u2019ll help you analyze deals and find properties that actually pencil out.",
      ctaText: 'Get ROI Analysis: 702-500-1955'
    },
    'divorce': {
      buttonText: 'Private Call',
      badge: 'Confidential Support',
      headline: 'Clear Options During Uncertain Times',
      subheadline: "I\u2019ve helped many families navigate property decisions during transitions. Let\u2019s discuss your options privately \u2014 no pressure, just clarity.",
      ctaText: 'Private Consultation: 702-500-1955'
    },
    'relocation': {
      buttonText: 'Relocation Help',
      badge: 'Relocation Expert',
      headline: 'Moving to Las Vegas? Let Me Be Your Guide',
      subheadline: "From neighborhoods to schools to commute times \u2014 I\u2019ll help you find the perfect area and home for your lifestyle and budget.",
      ctaText: 'Start Your Search: 702-500-1955'
    },
    'multigen': {
      buttonText: 'Multi-Gen Expert',
      badge: 'Multi-Generational Specialist',
      headline: 'Find the Perfect Home for Your Whole Family',
      subheadline: 'Dual master suites, separate entrances, casitas \u2014 I know every multi-gen floor plan in Las Vegas and which builders offer the best options.',
      ctaText: 'Call Dr. Jan: 702-500-1955'
    },
    'buyer': {
      buttonText: 'Book Call',
      badge: 'Las Vegas Expert',
      headline: "Before You Go \u2014 Let\u2019s Talk",
      subheadline: "30+ years in Las Vegas real estate, 500+ families helped. I can show you homes before they hit the market and help you win in competitive situations.",
      ctaText: 'Call Dr. Jan: 702-500-1955'
    }
  };
  return configs[pageType] || configs.buyer;
}

// ═══════════════════════════════════════════════════════════════════════════
// SCHEMA.ORG JSON-LD
// ═══════════════════════════════════════════════════════════════════════════

function getSchemaMarkup(hostname, pathname, pageType) {
  const baseSchema = {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    "@id": `https://${hostname}/#realestateagent`,
    "name": "Dr. Jan Duffy | Las Vegas Real Estate Expert",
    "description": "Dr. Jan Duffy, REALTOR\u00ae at Berkshire Hathaway HomeServices Nevada Properties, specializes in Las Vegas real estate with 30+ years experience, $127M+ in career sales, and 500+ families served.",
    "url": `https://${hostname}/`,
    "telephone": "+17025001955",
    "image": {
      "@type": "ImageObject",
      "url": `https://${hostname}/dr-jan-duffy-profile.jpg`
    },
    "logo": {
      "@type": "ImageObject",
      "url": `https://${hostname}/logo.png`
    },
    "slogan": "Let Me Help You!",
    "foundingDate": "1994",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "8850 W. Sunset, Suite 200",
      "addressLocality": "Las Vegas",
      "addressRegion": "NV",
      "postalCode": "89148",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 36.0715,
      "longitude": -115.2891
    },
    "sameAs": [
      "https://www.youtube.com/@DrDuffy",
      "https://www.pinterest.com/DrJanDuffy/",
      "https://www.linkedin.com/company/drjanduffy/",
      "https://www.facebook.com/DrJanDuffyLasVegasStrip/",
      "https://www.instagram.com/drjanduffy/"
    ],
    "openingHoursSpecification": [{
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
      "opens": "06:00",
      "closes": "21:00"
    }],
    "areaServed": [
      { "@type": "City", "name": "Las Vegas" },
      { "@type": "City", "name": "North Las Vegas" },
      { "@type": "City", "name": "Henderson" },
      { "@type": "Place", "name": "Summerlin" },
      { "@type": "Place", "name": "Spring Valley" }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Real Estate Services",
      "itemListElement": [
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Luxury Real Estate Transactions" }},
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "First-Time Home Buyer Support" }},
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "New Construction Sales and Consulting" }},
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "55+ Active Adult Community Specialist" }},
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Relocation Services" }},
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Property Appraisals" }}
      ]
    },
    "award": ["Top Producer, Berkshire Hathaway HomeServices"],
    "memberOf": [
      { "@type": "Organization", "name": "National Association of REALTORS\u00ae" },
      { "@type": "Organization", "name": "Greater Las Vegas Association of REALTORS\u00ae" }
    ],
    "knowsAbout": getExpertiseForPageType(pageType),
    "availableLanguage": ["English", "Spanish"],
    "currenciesAccepted": "USD",
    "paymentAccepted": ["Cash", "Credit Card", "Wire Transfer"],
    "priceRange": "$$"
  };

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "url": `https://${hostname}${pathname}`,
    "name": getPageTitle(hostname, pageType),
    "description": getPageDescription(pageType),
    "isPartOf": {
      "@type": "WebSite",
      "url": `https://${hostname}/`,
      "name": `Dr. Jan Duffy - ${getDomainDescription(hostname)}`
    },
    "about": {
      "@id": `https://${hostname}/#realestateagent`
    }
  };

  return `<script type="application/ld+json">${JSON.stringify(baseSchema)}</script>\n<script type="application/ld+json">${JSON.stringify(webPageSchema)}</script>`;
}

function getExpertiseForPageType(pageType) {
  const base = ["Las Vegas Real Estate", "Nevada Housing Market", "Home Buying", "Home Selling"];
  const extras = {
    '55plus': ["55+ Communities", "Active Adult Living", "Sun City Las Vegas", "Del Webb", "Retirement Communities"],
    'seller': ["Home Valuation", "Comparative Market Analysis", "Listing Strategy", "Home Staging"],
    'newconstruction': ["New Construction Homes", "Builder Incentives", "KB Home", "Lennar", "Toll Brothers", "Century Communities"],
    'luxury': ["Luxury Real Estate", "Guard-Gated Communities", "The Ridges", "Red Rock Country Club", "High-Rise Condos"],
    'investor': ["Real Estate Investment", "Rental Properties", "Cap Rates", "Cash Flow Analysis", "ROI"],
    'divorce': ["Divorce Real Estate", "Probate Sales", "Equitable Distribution", "Court-Ordered Sales"],
    'relocation': ["Relocation Services", "California to Nevada", "Corporate Relocation", "Area Tours"],
    'multigen': ["Multi-Generational Homes", "Dual Master Suites", "Casitas", "Extended Family Living"],
    'buyer': ["Buyer Representation", "Competitive Offers", "Pre-Approval", "Neighborhood Analysis"]
  };
  return [...base, ...(extras[pageType] || extras.buyer)];
}

function getPageTitle(hostname, pageType) {
  const clean = hostname.replace('www.', '').replace('.com', '').replace(/([a-z])([A-Z])/g, '$1 $2');
  const titles = {
    '55plus': `55+ Active Adult Homes - ${clean}`,
    'seller': `Sell Your Home - ${clean}`,
    'newconstruction': `New Construction Homes - ${clean}`,
    'luxury': `Luxury Real Estate - ${clean}`,
    'investor': `Investment Properties - ${clean}`,
    'divorce': `Confidential Real Estate Services - ${clean}`,
    'relocation': `Relocating to Las Vegas - ${clean}`,
    'multigen': `Multi-Generational Homes - ${clean}`,
    'buyer': `Las Vegas Homes for Sale - ${clean}`
  };
  return titles[pageType] || titles.buyer;
}

function getPageDescription(pageType) {
  const descriptions = {
    '55plus': 'Find your perfect 55+ active adult community in Las Vegas. Sun City, Del Webb, Heritage at Stonebridge and more. Expert guidance from Dr. Jan Duffy.',
    'seller': 'Get an accurate home valuation from a Las Vegas expert with $127M+ in career sales. Your home may be worth more than online estimates show.',
    'newconstruction': 'Las Vegas new construction homes from KB Home, Lennar, Toll Brothers, Century Communities and more. Get insider access to builder incentives and lot releases.',
    'luxury': 'Las Vegas luxury real estate in The Ridges, Red Rock Country Club, The Summit and more. Private tours and off-market properties available.',
    'investor': 'Las Vegas investment property analysis \u2014 cap rates, cash flow, appreciation potential. Data-driven guidance from 30+ years of market experience.',
    'divorce': 'Confidential real estate guidance during life transitions. Discrete, quick sales that protect your privacy and interests.',
    'relocation': 'Moving to Las Vegas? Expert neighborhood guidance, area tours, and home search assistance from someone who knows every community.',
    'multigen': 'Las Vegas multi-generational homes with dual master suites, casitas, and separate entrances. Find the perfect home for your whole family.',
    'buyer': 'Search Las Vegas homes for sale with an expert who knows every neighborhood. 30+ years experience, 500+ families helped.'
  };
  return descriptions[pageType] || descriptions.buyer;
}

function getDomainDescription(hostname) {
  const host = hostname.replace('www.', '').toLowerCase();
  if (host.includes('affordable')) return 'Affordable Las Vegas Homes';
  if (host.includes('summerlin')) return 'Summerlin Real Estate';
  if (host.includes('henderson')) return 'Henderson Real Estate';
  if (host.includes('suncity') || host.includes('55')) return '55+ Communities Las Vegas';
  if (host.includes('luxury') || host.includes('highrise')) return 'Las Vegas Luxury Real Estate';
  if (host.includes('skye')) return 'Skye Canyon Homes';
  if (host.includes('centennial')) return 'Centennial Hills Homes';
  if (host.includes('maravilla')) return 'Maravilla Homes';
  if (host.includes('multigen')) return 'Multi-Generational Homes';
  if (host.includes('newhome') || host.includes('construction')) return 'New Construction Las Vegas';
  return 'Las Vegas Real Estate';
}
