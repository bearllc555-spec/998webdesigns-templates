"use client";

import Link from "next/link";
import { content } from "../content";
import { getDirectionsUrl, getEmbedUrl } from "@/lib/maps";

const MAP_ADDRESS = content.business.address.replace(/\n/g, ", ");

/** Muted forest palette — matches Borst dark footer and sage accent. */
export function BorstFooterMap() {
  const embedUrl = getEmbedUrl(14, MAP_ADDRESS);
  const directionsUrl = getDirectionsUrl(MAP_ADDRESS);

  return (
    <section
      className="border-t"
      style={{ borderColor: "rgba(255,255,255,0.12)", background: "#0E2A24" }}
      aria-label="Office location map"
    >
      <div className="mx-auto max-w-7xl px-5 py-8 md:px-8 md:py-10">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p
              className="text-xs uppercase tracking-[0.18em]"
              style={{ color: "rgba(255,255,255,0.45)" }}
            >
              Visit us
            </p>
            <p
              className="mt-2 text-lg font-semibold whitespace-pre-line"
              style={{ color: "#FFFFFF", fontFamily: "var(--tpl-font-display)" }}
            >
              {content.business.address}
            </p>
          </div>
          <Link
            href={directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center justify-center px-5 py-2.5 text-sm font-semibold transition hover:opacity-90"
            style={{
              background: "var(--tpl-accent)",
              color: "var(--tpl-accent-ink)",
              borderRadius: 999,
              fontFamily: "var(--tpl-font-body)",
            }}
          >
            Get directions
          </Link>
        </div>
      </div>

      <div className="borst-map-shell relative w-full overflow-hidden">
        <div className="borst-map-tint pointer-events-none absolute inset-0 z-10" aria-hidden="true" />
        <iframe
          title={`Map showing ${content.business.name}`}
          src={embedUrl}
          className="borst-map-frame block h-[220px] w-full border-0 sm:h-[280px] md:h-[320px]"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </div>

      <style>{`
        .borst-map-frame {
          filter: grayscale(35%) sepia(18%) hue-rotate(118deg) saturate(0.75) brightness(0.88) contrast(1.08);
        }
        .borst-map-tint {
          background: linear-gradient(
            180deg,
            rgba(14, 42, 36, 0.08) 0%,
            rgba(14, 42, 36, 0) 28%,
            rgba(14, 42, 36, 0) 72%,
            rgba(14, 42, 36, 0.22) 100%
          );
        }
      `}</style>
    </section>
  );
}
