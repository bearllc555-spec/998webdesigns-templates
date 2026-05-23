import { DEMO_LOCATION, getDirectionsUrl, getEmbedUrl } from "@/lib/maps";

type CompactMapStripProps = {
  variant?: "default" | "silver";
  mapTitle?: string;
};

export function CompactMapStrip({ variant = "default", mapTitle = "Map Layout M" }: CompactMapStripProps) {
  const directionsUrl = getDirectionsUrl();
  const isSilver = variant === "silver";

  return (
    <div
      className={`overflow-hidden rounded-xl${isSilver ? "" : " border border-neutral-200"}`}
      style={isSilver ? { border: "1px solid #c9cdd4" } : undefined}
    >
      <div
        className={
          isSilver
            ? "flex flex-wrap items-center justify-between gap-3 px-5 py-3"
            : "flex flex-wrap items-center justify-between gap-3 border-b border-neutral-200 bg-neutral-50 px-5 py-3"
        }
        style={
          isSilver
            ? {
                background: "linear-gradient(135deg, #e8eaed 0%, #c9cdd4 50%, #d8dbe1 100%)",
                borderBottom: "1px solid #c9cdd4",
              }
            : undefined
        }
      >
        <div className="flex items-center gap-3">
          <div
            className={
              isSilver
                ? "flex h-7 w-7 shrink-0 items-center justify-center rounded-full"
                : "flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-blue-600"
            }
            style={
              isSilver
                ? { background: "linear-gradient(135deg, #b0b8c4 0%, #8d97a5 100%)" }
                : undefined
            }
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="white" aria-hidden="true">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
            </svg>
          </div>
          <div>
            <p
              className={isSilver ? "text-sm font-semibold" : "text-sm font-medium text-neutral-900"}
              style={isSilver ? { color: "#3a3f47" } : undefined}
            >
              {DEMO_LOCATION.street}
            </p>
            <p className="text-xs" style={isSilver ? { color: "#6b7280" } : undefined}>
              <span className={isSilver ? undefined : "text-neutral-500"}>{DEMO_LOCATION.city}</span>
            </p>
          </div>
        </div>
        <a
          href={directionsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={
            isSilver
              ? "rounded-full px-3 py-1.5 text-xs font-medium transition"
              : "text-xs font-medium text-blue-600 hover:underline"
          }
          style={
            isSilver
              ? {
                  background: "rgba(255,255,255,0.55)",
                  color: "#3a3f47",
                  border: "1px solid rgba(180,185,195,0.8)",
                }
              : undefined
          }
        >
          {isSilver ? "Get directions ↗" : "Directions ↗"}
        </a>
      </div>
      <iframe
        title={mapTitle}
        src={getEmbedUrl(14)}
        width="100%"
        height="180"
        style={{
          border: 0,
          display: "block",
          ...(isSilver ? { filter: "grayscale(100%) contrast(1.05)" } : {}),
        }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}
