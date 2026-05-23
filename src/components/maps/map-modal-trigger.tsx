"use client";

import { useEffect, useRef, useState } from "react";
import { MapPinIcon } from "@/components/maps/map-pin-icon";
import { DEMO_LOCATION, getDirectionsUrl, getEmbedUrl } from "@/lib/maps";

export function MapModalTrigger() {
  const [open, setOpen] = useState(false);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const directionsUrl = getDirectionsUrl();

  useEffect(() => {
    if (!open) return;

    closeButtonRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <>
      <div className="overflow-hidden rounded-xl border border-neutral-200 bg-white p-6">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div className="flex items-start gap-3">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-neutral-900 text-white">
              <MapPinIcon />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-neutral-500">Find us</p>
              <p
                className="mt-1 text-lg font-semibold leading-snug text-neutral-900"
                style={{ fontFamily: "var(--font-geist-sans), system-ui, sans-serif" }}
              >
                {DEMO_LOCATION.street}
              </p>
              <p className="text-sm text-neutral-500">{DEMO_LOCATION.city}</p>
              <p className="mt-2 text-sm text-neutral-600">{DEMO_LOCATION.hours}</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-4 py-2 text-xs font-medium text-white transition hover:bg-blue-700"
            >
              See map
            </button>
            <a
              href={directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-neutral-50 px-4 py-2 text-xs font-medium text-neutral-700 transition hover:border-neutral-400"
            >
              Directions
            </a>
          </div>
        </div>
      </div>

      {open ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <button
            type="button"
            aria-label="Close map"
            className="absolute inset-0 bg-neutral-950/60"
            onClick={() => setOpen(false)}
          />
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="map-modal-title"
            className="relative z-10 w-full max-w-3xl overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-2xl"
          >
            <div className="flex items-center justify-between border-b border-neutral-200 px-5 py-4">
              <div>
                <p id="map-modal-title" className="text-sm font-semibold text-neutral-900">
                  {DEMO_LOCATION.street}
                </p>
                <p className="text-xs text-neutral-500">{DEMO_LOCATION.city}</p>
              </div>
              <button
                ref={closeButtonRef}
                type="button"
                onClick={() => setOpen(false)}
                className="rounded-full border border-neutral-200 px-3 py-1.5 text-xs font-medium text-neutral-700 transition hover:border-neutral-400"
              >
                Close
              </button>
            </div>
            <iframe
              title="Modal map"
              src={getEmbedUrl(15)}
              width="100%"
              height="420"
              style={{ border: 0, display: "block" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      ) : null}
    </>
  );
}
