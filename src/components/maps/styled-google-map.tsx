"use client";

import { useEffect, useRef, useState } from "react";
import { DEMO_LOCATION, GOOGLE_MAPS_API_KEY, GOOGLE_MAPS_MAP_ID } from "@/lib/maps";

const MUTED_MAP_STYLES = [
  { featureType: "poi", stylers: [{ visibility: "off" }] },
  { featureType: "transit", stylers: [{ visibility: "off" }] },
  { featureType: "water", elementType: "geometry", stylers: [{ color: "#dbeafe" }] },
  { featureType: "landscape", elementType: "geometry", stylers: [{ color: "#f4f4f5" }] },
  { featureType: "road", elementType: "geometry", stylers: [{ color: "#ffffff" }] },
  { featureType: "road", elementType: "labels.text.fill", stylers: [{ color: "#9ca3af" }] },
  { featureType: "administrative", elementType: "labels.text.fill", stylers: [{ color: "#a1a1aa" }] },
];

type GoogleMapsNamespace = {
  maps: {
    Map: new (
      element: HTMLElement,
      options: Record<string, unknown>,
    ) => { setOptions: (options: Record<string, unknown>) => void };
    Marker: new (options: Record<string, unknown>) => { setMap: (map: unknown) => void };
  };
};

declare global {
  interface Window {
    google?: GoogleMapsNamespace;
  }
}

let mapsScriptPromise: Promise<void> | null = null;

function loadGoogleMapsScript(apiKey: string) {
  if (mapsScriptPromise) return mapsScriptPromise;

  mapsScriptPromise = new Promise((resolve, reject) => {
    if (window.google?.maps) {
      resolve();
      return;
    }

    const existing = document.querySelector<HTMLScriptElement>('script[data-google-maps="true"]');
    if (existing) {
      existing.addEventListener("load", () => resolve(), { once: true });
      existing.addEventListener("error", () => reject(new Error("Google Maps failed to load")), {
        once: true,
      });
      return;
    }

    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=${encodeURIComponent(apiKey)}`;
    script.async = true;
    script.defer = true;
    script.dataset.googleMaps = "true";
    script.onload = () => resolve();
    script.onerror = () => reject(new Error("Google Maps failed to load"));
    document.head.appendChild(script);
  });

  return mapsScriptPromise;
}

function StyledMapPlaceholder() {
  return (
    <div
      className="flex h-[280px] w-full flex-col items-center justify-center gap-3 px-6 text-center"
      style={{
        background: "linear-gradient(160deg, #f4f4f5 0%, #e4e4e7 100%)",
      }}
    >
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-white">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
        </svg>
      </div>
      <div>
        <p className="text-sm font-medium text-neutral-800">Styled JS map preview</p>
        <p className="mt-1 text-xs text-neutral-500">
          Set <code className="rounded bg-white px-1 py-0.5">NEXT_PUBLIC_GOOGLE_MAPS_API_KEY</code> for live
          rendering.
        </p>
      </div>
    </div>
  );
}

export function StyledGoogleMap() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [ready, setReady] = useState(false);
  const [failed, setFailed] = useState(false);
  const hasApiKey = Boolean(GOOGLE_MAPS_API_KEY);

  useEffect(() => {
    if (!hasApiKey || !containerRef.current) return;

    let cancelled = false;

    loadGoogleMapsScript(GOOGLE_MAPS_API_KEY)
      .then(() => {
        if (cancelled || !containerRef.current || !window.google?.maps) return;

        const mapOptions: Record<string, unknown> = {
          center: { lat: DEMO_LOCATION.lat, lng: DEMO_LOCATION.lng },
          zoom: 15,
          disableDefaultUI: true,
          zoomControl: true,
          styles: MUTED_MAP_STYLES,
        };

        if (GOOGLE_MAPS_MAP_ID) {
          mapOptions.mapId = GOOGLE_MAPS_MAP_ID;
        }

        const map = new window.google.maps.Map(containerRef.current, mapOptions);

        new window.google.maps.Marker({
          map,
          position: { lat: DEMO_LOCATION.lat, lng: DEMO_LOCATION.lng },
          title: DEMO_LOCATION.fullAddress,
        });

        setReady(true);
      })
      .catch(() => {
        if (!cancelled) setFailed(true);
      });

    return () => {
      cancelled = true;
    };
  }, [hasApiKey]);

  return (
    <div className="overflow-hidden rounded-xl border border-neutral-200">
      <div className="border-b border-neutral-200 bg-neutral-50 px-5 py-3">
        <p className="text-sm font-medium text-neutral-900">{DEMO_LOCATION.street}</p>
        <p className="text-xs text-neutral-500">Muted palette, hidden POIs, custom marker</p>
      </div>
      {!hasApiKey || failed ? (
        <StyledMapPlaceholder />
      ) : (
        <div className="relative h-[280px]">
          {!ready ? (
            <div className="absolute inset-0 flex items-center justify-center bg-neutral-50 text-sm text-neutral-500">
              Loading map…
            </div>
          ) : null}
          <div
            ref={containerRef}
            className="h-full w-full"
            aria-label={`Styled map of ${DEMO_LOCATION.fullAddress}`}
            role="img"
          />
        </div>
      )}
    </div>
  );
}
