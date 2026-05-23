import Link from "next/link";
import { DEMO_LOCATION, getDirectionsUrl, getStaticMapUrl } from "@/lib/maps";

function StaticMapPlaceholder() {
  return (
    <div
      className="relative flex h-full min-h-[180px] w-full items-center justify-center overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #eef0f3 0%, #dde2e8 50%, #e8ebef 100%)",
      }}
    >
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "linear-gradient(#c9cdd4 1px, transparent 1px), linear-gradient(90deg, #c9cdd4 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />
      <div className="relative flex flex-col items-center gap-2 text-neutral-500">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-white shadow-sm">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
          </svg>
        </div>
        <p className="text-xs font-medium">Static map preview</p>
      </div>
    </div>
  );
}

export function StaticMapThumbnail() {
  const staticMapUrl = getStaticMapUrl({ width: 640, height: 180, zoom: 15 });
  const directionsUrl = getDirectionsUrl();

  return (
    <div className="overflow-hidden rounded-xl border border-neutral-200">
      <div className="grid md:grid-cols-[minmax(0,1fr)_280px]">
        <Link
          href={directionsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative block min-h-[180px] overflow-hidden border-b border-neutral-200 md:border-b-0 md:border-r"
          aria-label={`Open ${DEMO_LOCATION.fullAddress} in Google Maps`}
        >
          {staticMapUrl ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={staticMapUrl}
              alt={`Map showing ${DEMO_LOCATION.fullAddress}`}
              className="h-full min-h-[180px] w-full object-cover transition group-hover:opacity-95"
              loading="lazy"
            />
          ) : (
            <StaticMapPlaceholder />
          )}
        </Link>
        <div className="flex flex-col justify-center gap-4 p-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-blue-600">Visit us</p>
            <p
              className="mt-2 text-lg font-semibold leading-snug text-neutral-900"
              style={{ fontFamily: "var(--font-geist-sans), system-ui, sans-serif" }}
            >
              {DEMO_LOCATION.street}
            </p>
            <p className="text-sm text-neutral-500">{DEMO_LOCATION.city}</p>
          </div>
          <Link
            href={directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 self-start rounded-full border border-neutral-200 bg-neutral-50 px-4 py-2 text-xs font-medium text-neutral-700 transition hover:border-neutral-400"
          >
            Get directions
          </Link>
        </div>
      </div>
    </div>
  );
}
