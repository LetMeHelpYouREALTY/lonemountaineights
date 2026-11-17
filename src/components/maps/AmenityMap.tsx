'use client';

import { useCallback, useEffect, useId, useRef, useState } from 'react';
import { COMMUNITY, directionsUrl } from '@/lib/community-config';
import { loadGoogleMaps, mapsAuthFailed } from '@/lib/google-maps-loader';
import {
  AMENITY_CATEGORIES,
  placesForCategory,
  type AmenityCategoryId,
} from '@/lib/nearby-amenities';
import { searchCategoryForCommunity } from '@/lib/nearby-places-search';

type PlaceResult = {
  name: string;
  address?: string;
  lat: number;
  lng: number;
};

function getApiKey(): string | undefined {
  return process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY?.trim() || undefined;
}

function buildInfoWindowContent(place: PlaceResult): HTMLElement {
  const wrap = document.createElement('div');
  wrap.style.maxWidth = '220px';
  wrap.style.padding = '4px 0';

  const title = document.createElement('strong');
  title.textContent = place.name;
  wrap.appendChild(title);

  if (place.address) {
    const addr = document.createElement('p');
    addr.style.margin = '4px 0';
    addr.style.fontSize = '13px';
    addr.style.color = '#475569';
    addr.textContent = place.address;
    wrap.appendChild(addr);
  }

  const link = document.createElement('a');
  link.href = directionsUrl(place.lat, place.lng, place.name);
  link.target = '_blank';
  link.rel = 'noopener noreferrer';
  link.style.fontSize = '13px';
  link.style.fontWeight = '600';
  link.textContent = 'Directions';
  wrap.appendChild(link);

  return wrap;
}

function curatedToResults(category: AmenityCategoryId): PlaceResult[] {
  return placesForCategory(category).map((p) => ({
    name: p.name,
    address: p.address,
    lat: p.lat,
    lng: p.lng,
  }));
}

function placeDisplayName(place: google.maps.places.Place): string | undefined {
  const dn = place.displayName;
  if (!dn) return undefined;
  if (typeof dn === 'string') return dn;
  return String(dn);
}

function placeFromGoogle(place: google.maps.places.Place): PlaceResult | null {
  const name = placeDisplayName(place);
  const loc = place.location;
  if (!name || !loc) return null;
  const { lat, lng } = loc.toJSON();
  return {
    name,
    address: place.formattedAddress ?? undefined,
    lat,
    lng,
  };
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
  const [useFallback, setUseFallback] = useState(!apiKey || mapsAuthFailed);
  const [listPlaces, setListPlaces] = useState<PlaceResult[]>(() =>
    curatedToResults(defaultCategory),
  );
  const tabsId = useId();

  const enterFallback = useCallback(() => {
    mapInstanceRef.current = null;
    communityMarkerRef.current = null;
    markersRef.current.forEach((m) => m.setMap(null));
    markersRef.current = [];
    infoWindowRef.current?.close();
    infoWindowRef.current = null;
    setMapReady(false);
    setUseFallback(true);
    setListPlaces(curatedToResults(activeCategory));
  }, [activeCategory]);

  useEffect(() => {
    const onAuthFailure = () => enterFallback();
    window.addEventListener('gmaps:auth-failure', onAuthFailure);
    return () => window.removeEventListener('gmaps:auth-failure', onAuthFailure);
  }, [enterFallback]);

  useEffect(() => {
    if (mapsAuthFailed) enterFallback();
  }, [enterFallback]);

  useEffect(() => {
    const el = mapRootRef.current;
    if (!el || useFallback) return;
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
  }, [useFallback]);

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
        scaledSize: new google.maps.Size(32, 32),
      },
    });
    marker.addListener('click', () => {
      if (!infoWindowRef.current) {
        infoWindowRef.current = new google.maps.InfoWindow();
      }
      infoWindowRef.current.setContent(
        buildInfoWindowContent({
          name: COMMUNITY.name,
          address: `${COMMUNITY.city}, ${COMMUNITY.region} ${COMMUNITY.postalCode}`,
          lat: COMMUNITY.center.lat,
          lng: COMMUNITY.center.lng,
        }),
      );
      infoWindowRef.current.open({ map, anchor: marker });
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
          infoWindowRef.current.setContent(buildInfoWindowContent(place));
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

  const searchNearby = useCallback(
    async (map: google.maps.Map, category: AmenityCategoryId) => {
      if (mapsAuthFailed) {
        setListPlaces(curatedToResults(category));
        plotPlaces(map, curatedToResults(category));
        return;
      }
      try {
        const places = await searchCategoryForCommunity(category);
        const results: PlaceResult[] = [];
        for (const raw of places) {
          const parsed = placeFromGoogle(raw);
          if (parsed) results.push(parsed);
        }
        if (results.length === 0) {
          const curated = curatedToResults(category);
          setListPlaces(curated);
          plotPlaces(map, curated);
        } else {
          setListPlaces(results);
          plotPlaces(map, results);
        }
      } catch {
        const curated = curatedToResults(category);
        setListPlaces(curated);
        plotPlaces(map, curated);
      }
    },
    [plotPlaces],
  );

  useEffect(() => {
    if (!isVisible || !apiKey || useFallback || mapsAuthFailed) return;
    let cancelled = false;

    loadGoogleMaps(apiKey)
      .then(() => {
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
      })
      .catch(() => {
        if (!cancelled) enterFallback();
      });

    return () => {
      cancelled = true;
    };
  }, [isVisible, apiKey, useFallback, compact, addCommunityMarker, enterFallback]);

  useEffect(() => {
    const map = mapInstanceRef.current;
    if (!map || !mapReady || useFallback) return;
    void searchNearby(map, activeCategory);
  }, [activeCategory, mapReady, useFallback, searchNearby]);

  useEffect(() => {
    if (useFallback) {
      setListPlaces(curatedToResults(activeCategory));
    }
  }, [activeCategory, useFallback]);

  const heightClass = compact ? 'min-h-[280px] h-[280px]' : 'min-h-[420px] h-[420px]';
  const embedSrc = `https://www.google.com/maps?q=${COMMUNITY.center.lat},${COMMUNITY.center.lng}&z=${COMMUNITY.defaultZoom}&output=embed`;

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
        className={`w-full bg-slate-100 ${heightClass}`}
      >
        {useFallback ? (
          <iframe
            title={`Map of ${COMMUNITY.name}, ${COMMUNITY.city}`}
            src={embedSrc}
            className={`w-full border-0 ${heightClass}`}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        ) : (
          <div ref={mapRootRef} className={`w-full ${heightClass}`} />
        )}
      </div>
      {!useFallback && !mapReady && (
        <p className="border-t border-slate-100 px-4 py-2 text-center text-sm text-[var(--text-light)]">
          Loading map…
        </p>
      )}
      <div className="border-t border-slate-100 p-4 md:p-6">
        <h3 className="mb-3 text-sm font-semibold text-[var(--heading-color)]">
          {AMENITY_CATEGORIES.find((c) => c.id === activeCategory)?.label ?? 'Places'} near{' '}
          {COMMUNITY.name}
        </h3>
        <ul className="grid gap-2 sm:grid-cols-2">
          {listPlaces.length > 0 ? (
            listPlaces.map((place) => (
              <li key={`${place.name}-${place.lat}`} className="text-sm">
                <span className="font-medium text-[var(--heading-color)]">{place.name}</span>
                {place.address ? (
                  <span className="block text-[var(--text-light)]">{place.address}</span>
                ) : null}
              </li>
            ))
          ) : (
            <li className="text-sm text-[var(--text-light)]">
              No additional places listed for this category. The map shows {COMMUNITY.name}.
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}
