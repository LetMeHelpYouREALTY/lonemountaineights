'use client';

import { useCallback, useEffect, useId, useRef, useState } from 'react';
import { COMMUNITY, directionsUrl } from '@/lib/community-config';
import {
  AMENITY_CATEGORIES,
  CURATED_NEARBY_PLACES,
  placesForCategory,
  type AmenityCategoryId,
} from '@/lib/nearby-amenities';
import { AmenityMapFallback } from '@/components/maps/AmenityMapFallback';

const MAPS_SCRIPT_ID = 'google-maps-js';

type PlaceResult = {
  name: string;
  address?: string;
  rating?: number;
  lat: number;
  lng: number;
};

function getApiKey(): string | undefined {
  return process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY?.trim() || undefined;
}

function loadGoogleMapsScript(apiKey: string): Promise<void> {
  return new Promise((resolve, reject) => {
    if (typeof window === 'undefined') {
      reject(new Error('no window'));
      return;
    }
    if (window.google?.maps) {
      resolve();
      return;
    }
    const existing = document.getElementById(MAPS_SCRIPT_ID) as HTMLScriptElement | null;
    if (existing) {
      existing.addEventListener('load', () => resolve());
      existing.addEventListener('error', () => reject(new Error('maps script error')));
      return;
    }
    const script = document.createElement('script');
    script.id = MAPS_SCRIPT_ID;
    script.src = `https://maps.googleapis.com/maps/api/js?key=${encodeURIComponent(apiKey)}&libraries=places&loading=async`;
    script.async = true;
    script.defer = true;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error('maps script error'));
    document.head.appendChild(script);
  });
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function infoWindowHtml(place: PlaceResult): string {
  const rating =
    place.rating != null
      ? `<p style="margin:4px 0;font-size:13px;">Rating: ${place.rating.toFixed(1)}</p>`
      : '';
  const address = place.address
    ? `<p style="margin:4px 0;font-size:13px;color:#475569;">${escapeHtml(place.address)}</p>`
    : '';
  const dir = directionsUrl(place.lat, place.lng, place.name);
  return `<div style="max-width:220px;padding:4px 0;">
    <strong>${escapeHtml(place.name)}</strong>
    ${rating}
    ${address}
    <a href="${dir}" target="_blank" rel="noopener noreferrer" style="font-size:13px;font-weight:600;">Directions</a>
  </div>`;
}

type AmenityMapProps = {
  compact?: boolean;
  defaultCategory?: AmenityCategoryId;
  className?: string;
};

export function AmenityMap({
  compact = false,
  defaultCategory = 'parks',
  className = '',
}: AmenityMapProps) {
  const apiKey = getApiKey();
  const mapRootRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<google.maps.Map | null>(null);
  const markersRef = useRef<google.maps.Marker[]>([]);
  const communityMarkerRef = useRef<google.maps.Marker | null>(null);
  const infoWindowRef = useRef<google.maps.InfoWindow | null>(null);
  const [activeCategory, setActiveCategory] = useState<AmenityCategoryId>(defaultCategory);
  const [isVisible, setIsVisible] = useState(false);
  const [mapReady, setMapReady] = useState(false);
  const [loadFailed, setLoadFailed] = useState(!apiKey);
  const tabsId = useId();

  useEffect(() => {
    const el = mapRootRef.current;
    if (!el || loadFailed) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: '120px', threshold: 0.1 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [loadFailed]);

  const clearMarkers = useCallback(() => {
    markersRef.current.forEach((m) => m.setMap(null));
    markersRef.current = [];
  }, []);

  const addCommunityMarker = useCallback((map: google.maps.Map) => {
    if (communityMarkerRef.current) {
      communityMarkerRef.current.setMap(null);
    }
    const marker = new google.maps.Marker({
      map,
      position: COMMUNITY.center,
      title: COMMUNITY.name,
      icon: {
        url: 'https://maps.google.com/mapfiles/ms/icons/red-dot.png',
        scaledSize: { width: 32, height: 32 },
      },
    });
    marker.addListener('click', () => {
      if (!infoWindowRef.current) {
        infoWindowRef.current = new google.maps.InfoWindow();
      }
      infoWindowRef.current.setContent(
        infoWindowHtml({
          name: COMMUNITY.name,
          address: `${COMMUNITY.city}, ${COMMUNITY.region} ${COMMUNITY.postalCode}`,
          lat: COMMUNITY.center.lat,
          lng: COMMUNITY.center.lng,
        }),
      );
      infoWindowRef.current?.open({ map, anchor: marker });
    });
    communityMarkerRef.current = marker;
  }, []);

  const plotPlaces = useCallback(
    (map: google.maps.Map, places: PlaceResult[]) => {
      clearMarkers();
      const bounds = new google.maps.LatLngBounds();
      bounds.extend(COMMUNITY.center);

      places.forEach((place) => {
        const marker = new google.maps.Marker({
          map,
          position: { lat: place.lat, lng: place.lng },
          title: place.name,
        });
        marker.addListener('click', () => {
          if (!infoWindowRef.current) {
            infoWindowRef.current = new google.maps.InfoWindow();
          }
          infoWindowRef.current.setContent(infoWindowHtml(place));
          infoWindowRef.current.open({ map, anchor: marker });
        });
        markersRef.current.push(marker);
        bounds.extend({ lat: place.lat, lng: place.lng });
      });

      if (places.length > 0) {
        map.fitBounds(bounds);
      } else {
        map.setCenter(COMMUNITY.center);
        map.setZoom(COMMUNITY.defaultZoom);
      }
    },
    [clearMarkers],
  );

  const curatedToResults = useCallback((category: AmenityCategoryId): PlaceResult[] => {
    return placesForCategory(category).map((p) => ({
      name: p.name,
      address: p.address,
      lat: p.lat,
      lng: p.lng,
    }));
  }, []);

  const searchNearby = useCallback(
    async (map: google.maps.Map, category: AmenityCategoryId) => {
      const cat = AMENITY_CATEGORIES.find((c) => c.id === category);
      if (!cat) return;

      try {
        const placesLib = (await google.maps.importLibrary('places')) as {
          Place?: {
            searchNearby: (req: Record<string, unknown>) => Promise<{ places: unknown[] }>;
          };
        };
        const Place = placesLib.Place;
        if (!Place?.searchNearby) {
          plotPlaces(map, curatedToResults(category));
          return;
        }

        const request = {
          fields: ['displayName', 'location', 'formattedAddress', 'rating'],
          locationRestriction: {
            center: {
              latitude: COMMUNITY.center.lat,
              longitude: COMMUNITY.center.lng,
            },
            radius: COMMUNITY.searchRadiusMeters,
          },
          includedPrimaryTypes: cat.includedTypes,
          maxResultCount: 15,
        };

        const { places } = await Place.searchNearby(request);
        const results: PlaceResult[] = [];

        for (const raw of places) {
          const place = raw as {
            displayName?: string;
            formattedAddress?: string;
            rating?: number;
            location?: { lat: () => number; lng: () => number };
          };
          const name = place.displayName;
          const loc = place.location;
          if (!name || !loc) continue;
          results.push({
            name,
            address: place.formattedAddress,
            rating: place.rating,
            lat: loc.lat(),
            lng: loc.lng(),
          });
        }

        if (results.length === 0) {
          plotPlaces(map, curatedToResults(category));
        } else {
          plotPlaces(map, results);
        }
      } catch {
        plotPlaces(map, curatedToResults(category));
      }
    },
    [curatedToResults, plotPlaces],
  );

  useEffect(() => {
    if (!isVisible || !apiKey || loadFailed) return;
    let cancelled = false;

    (async () => {
      try {
        await loadGoogleMapsScript(apiKey);
        if (cancelled || !mapRootRef.current) return;

        const mapId = process.env.NEXT_PUBLIC_GOOGLE_MAPS_MAP_ID?.trim();
        const map = new google.maps.Map(mapRootRef.current, {
          center: COMMUNITY.center,
          zoom: COMMUNITY.defaultZoom,
          ...(mapId ? { mapId } : {}),
          mapTypeControl: !compact,
          streetViewControl: !compact,
          fullscreenControl: true,
        });
        mapInstanceRef.current = map;
        infoWindowRef.current = new google.maps.InfoWindow();
        addCommunityMarker(map);
        if (!cancelled) setMapReady(true);
      } catch {
        if (!cancelled) setLoadFailed(true);
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [isVisible, apiKey, loadFailed, compact, addCommunityMarker]);

  useEffect(() => {
    const map = mapInstanceRef.current;
    if (!map || !mapReady || loadFailed) return;
    void searchNearby(map, activeCategory);
  }, [activeCategory, mapReady, loadFailed, searchNearby]);

  const heightClass = compact ? 'min-h-[280px] h-[280px]' : 'min-h-[420px] h-[420px]';

  if (loadFailed) {
    return (
      <AmenityMapFallback activeCategory={activeCategory} compact={compact} showCuratedList={!compact} />
    );
  }

  return (
    <div className={`overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm ${className}`}>
      <div
        role="tablist"
        aria-label="Amenity categories"
        className="flex gap-2 overflow-x-auto border-b border-slate-100 p-3"
        id={tabsId}
      >
        {AMENITY_CATEGORIES.map((cat) => {
          const selected = cat.id === activeCategory;
          return (
            <button
              key={cat.id}
              type="button"
              role="tab"
              aria-selected={selected}
              aria-controls={`${tabsId}-panel`}
              id={`${tabsId}-${cat.id}`}
              onClick={() => setActiveCategory(cat.id)}
              className={`shrink-0 rounded-full px-3 py-1.5 text-sm font-medium transition focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-color)] ${
                selected
                  ? 'bg-[var(--heading-color)] text-white'
                  : 'bg-slate-100 text-[var(--text-color)] hover:bg-slate-200'
              }`}
            >
              {cat.label}
            </button>
          );
        })}
      </div>
      <div
        id={`${tabsId}-panel`}
        role="tabpanel"
        aria-labelledby={`${tabsId}-${activeCategory}`}
        ref={mapRootRef}
        className={`w-full bg-slate-100 ${heightClass}`}
      />
      {!mapReady && (
        <p className="border-t border-slate-100 px-4 py-2 text-center text-sm text-[var(--text-light)]">
          Loading map…
        </p>
      )}
      <p className="sr-only">
        Static reference places include{' '}
        {CURATED_NEARBY_PLACES.map((p) => p.name).join(', ')}.
      </p>
    </div>
  );
}
