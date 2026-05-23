"use client";

import { useState } from "react";
import { MapPinIcon } from "@/components/maps/map-pin-icon";
import { DEMO_LOCATION, getDirectionsUrl, getEmbedUrl } from "@/lib/maps";

export function MapExpandOnClick() {
  const [expanded, setExpanded] = useState(false);
  const directionsUrl = getDirectionsUrl();

  return (
    <div className="overflow-hidden rounded-xl border border-neutral-200">
      <div className="flex flex-wrap items-start justify-between gap-4 p-6">
        <div className="flex items-start gap-3">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-blue-600 text-white">
            <MapPinIcon />
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-blue-600">Location</p>
            <p
              className="mt-1 text-lg font-semibold leading-snug text-neutral-900"
              style={{ fontFamily: "var(--font-geist-sans), system-ui, sans-serif" }}
            >
              {DEMO_LOCATION.street}
            </p>
            <p className="text-sm text-neutral-500">{DEMO_LOCATION.city}</p>
            <div className="mt-3 space-y-1">
              <p className="text-sm text-neutral-600">
                <span className="font-medium text-neutral-900">Hours:</span> {DEMO_LOCATION.hours}
              </p>
              <p className="text-sm text-neutral-600">
                <span className="font-medium text-neutral-900">Phone:</span> {DEMO_LOCATION.phone}
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => setExpanded((open) => !open)}
            className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-neutral-50 px-4 py-2 text-xs font-medium text-neutral-700 transition hover:border-neutral-400"
          >
            {expanded ? "Hide map" : "Show map"}
          </button>
          <a
            href={directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-4 py-2 text-xs font-medium text-neutral-700 transition hover:border-neutral-400"
          >
            Get directions
          </a>
        </div>
      </div>
      {expanded ? (
        <iframe
          title="Expanded map"
          src={getEmbedUrl(15)}
          width="100%"
          height="280"
          style={{ border: 0, display: "block" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      ) : null}
    </div>
  );
}
