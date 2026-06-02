// Service Worker for Lone Mountain Heights
// Implements caching strategies for Core Web Vitals optimization

const CACHE_NAME = 'lonemountainheights-v1';
const STATIC_CACHE = 'static-v1';
const DYNAMIC_CACHE = 'dynamic-v1';

// Assets to cache immediately
const STATIC_ASSETS = [
  '/',
  '/homes',
  '/about',
  '/contact',
  '/neighborhoods',
  '/market-report',
  '/sales',
  '/valuation',
  '/amenities',
  '/schools',
  '/guide',
  '/blog',
  '/app.css',
  '/critical.css',
  '/manifest.json',
];

// Install event - cache static assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches
      .open(STATIC_CACHE)
      .then((cache) => {
        console.log('Caching static assets');
        return cache.addAll(STATIC_ASSETS);
      })
      .then(() => {
        console.log('Static assets cached successfully');
        return self.skipWaiting();
      }),
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            if (cacheName !== STATIC_CACHE && cacheName !== DYNAMIC_CACHE) {
              console.log('Deleting old cache:', cacheName);
              return caches.delete(cacheName);
            }
          }),
        );
      })
      .then(() => {
        console.log('Service Worker activated');
        return self.clients.claim();
      }),
  );
});

// Fetch event - implement caching strategies
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Skip non-GET requests
  if (request.method !== 'GET') {
    return;
  }

  // Skip chrome-extension and other non-http requests
  if (!url.protocol.startsWith('http')) {
    return;
  }

  // Strategy: Cache First for static assets
  if (isStaticAsset(request)) {
    event.respondWith(cacheFirst(request));
    return;
  }

  // Strategy: Network First for API calls
  if (isApiRequest(request)) {
    event.respondWith(networkFirst(request));
    return;
  }

  // Strategy: Stale While Revalidate for pages
  if (isPageRequest(request)) {
    event.respondWith(staleWhileRevalidate(request));
    return;
  }

  // Default: Network First
  event.respondWith(networkFirst(request));
});

// Cache First strategy - for static assets
async function cacheFirst(request) {
  try {
    const cachedResponse = await caches.match(request);
    if (cachedResponse) {
      return cachedResponse;
    }

    const networkResponse = await fetch(request);
    if (networkResponse.ok) {
      const cache = await caches.open(STATIC_CACHE);
      cache.put(request, networkResponse.clone());
    }
    return networkResponse;
  } catch (error) {
    console.error('Cache First failed:', error);
    return new Response('Offline', { status: 503 });
  }
}

// Network First strategy - for API calls
async function networkFirst(request) {
  try {
    const networkResponse = await fetch(request);
    if (networkResponse.ok) {
      const cache = await caches.open(DYNAMIC_CACHE);
      cache.put(request, networkResponse.clone());
    }
    return networkResponse;
  } catch (error) {
    console.log('Network failed, trying cache:', error);
    const cachedResponse = await caches.match(request);
    if (cachedResponse) {
      return cachedResponse;
    }
    return new Response('Offline', { status: 503 });
  }
}

// Stale While Revalidate strategy - for pages
async function staleWhileRevalidate(request) {
  const cache = await caches.open(DYNAMIC_CACHE);
  const cachedResponse = await cache.match(request);

  const fetchPromise = fetch(request)
    .then((networkResponse) => {
      if (networkResponse.ok) {
        cache.put(request, networkResponse.clone());
      }
      return networkResponse;
    })
    .catch(() => cachedResponse);

  return cachedResponse || fetchPromise;
}

// Helper functions to determine request type
function isStaticAsset(request) {
  const url = new URL(request.url);
  return url.pathname.match(
    /\.(css|js|png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)$/,
  );
}

function isApiRequest(request) {
  const url = new URL(request.url);
  return url.pathname.startsWith('/api/') || url.hostname.includes('api');
}

function isPageRequest(request) {
  const url = new URL(request.url);
  return (
    url.pathname === '/' ||
    url.pathname.startsWith('/homes') ||
    url.pathname.startsWith('/about') ||
    url.pathname.startsWith('/contact') ||
    url.pathname.startsWith('/neighborhoods') ||
    url.pathname.startsWith('/market-report') ||
    url.pathname.startsWith('/sales') ||
    url.pathname.startsWith('/valuation') ||
    url.pathname.startsWith('/amenities') ||
    url.pathname.startsWith('/schools') ||
    url.pathname.startsWith('/guide') ||
    url.pathname.startsWith('/blog')
  );
}

// Background sync for offline form submissions
self.addEventListener('sync', (event) => {
  if (event.tag === 'background-sync') {
    event.waitUntil(doBackgroundSync());
  }
});

async function doBackgroundSync() {
  // Handle offline form submissions
  console.log('Background sync triggered');
  // Implementation would depend on specific form handling needs
}

// Push notifications (if needed)
self.addEventListener('push', (event) => {
  if (event.data) {
    const data = event.data.json();
    const options = {
      body: data.body,
      icon: '/images/icons/favicon.png',
      badge: '/images/icons/favicon.png',
      vibrate: [100, 50, 100],
      data: {
        dateOfArrival: Date.now(),
        primaryKey: 1,
      },
      actions: [
        {
          action: 'explore',
          title: 'View Property',
          icon: '/images/icons/favicon.png',
        },
        {
          action: 'close',
          title: 'Close',
          icon: '/images/icons/favicon.png',
        },
      ],
    };

    event.waitUntil(self.registration.showNotification(data.title, options));
  }
});

// Handle notification clicks
self.addEventListener('notificationclick', (event) => {
  event.notification.close();

  if (event.action === 'explore') {
    event.waitUntil(clients.openWindow('/homes'));
  }
});

// Cache size management
async function manageCacheSize() {
  const cacheNames = await caches.keys();
  const maxCacheSize = 50 * 1024 * 1024; // 50MB

  for (const cacheName of cacheNames) {
    const cache = await caches.open(cacheName);
    const keys = await cache.keys();

    if (keys.length > 100) {
      // Limit number of cached items
      const keysToDelete = keys.slice(0, keys.length - 100);
      await Promise.all(keysToDelete.map((key) => cache.delete(key)));
    }
  }
}

// Periodic cache cleanup
setInterval(manageCacheSize, 24 * 60 * 60 * 1000); // Daily cleanup
