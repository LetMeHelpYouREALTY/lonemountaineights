/* Minimal Google Maps JS types for AmenityMap (full @types/google.maps not required). */
declare namespace google.maps {
  class Map {
    constructor(el: HTMLElement, opts?: MapOptions);
    setCenter(latLng: LatLng | LatLngLiteral): void;
    setZoom(zoom: number): void;
    fitBounds(bounds: LatLngBounds): void;
  }
  class Marker {
    constructor(opts?: MarkerOptions);
    setMap(map: Map | null): void;
    addListener(event: string, handler: () => void): void;
  }
  class InfoWindow {
    constructor(opts?: InfoWindowOptions);
    setContent(content: string): void;
    open(opts?: { map: Map; anchor?: Marker }): void;
    close(): void;
  }
  class LatLngBounds {
    extend(point: LatLng | LatLngLiteral): void;
  }
  interface MapOptions {
    center?: LatLngLiteral;
    zoom?: number;
    mapId?: string;
    mapTypeControl?: boolean;
    streetViewControl?: boolean;
    fullscreenControl?: boolean;
  }
  interface MarkerOptions {
    map?: Map;
    position?: LatLngLiteral;
    title?: string;
    icon?: string | { url: string; scaledSize?: { width: number; height: number } };
  }
  interface InfoWindowOptions {
    content?: string;
  }
  interface LatLngLiteral {
    lat: number;
    lng: number;
  }
  interface ImportLibraryOptions {
    key?: string;
    v?: string;
  }
  function importLibrary(name: 'maps' | 'places' | 'marker'): Promise<unknown>;
}

interface Window {
  google?: typeof google;
}
