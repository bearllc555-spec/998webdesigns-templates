import { theme } from "../theme";
import { content } from "../content";

const SERVICE_PHOTOS = [
  "/templates/maple-street-bakery/hero.jpg",
  "/templates/maple-street-bakery/hero.jpg",
  "/templates/maple-street-bakery/croissant.jpg",
  "/templates/maple-street-bakery/croissant.jpg",
  "/templates/maple-street-bakery/interior.jpg",
  "/templates/maple-street-bakery/coffee.jpg",
];

export function ServicesBlock() {
  return (
    <section
      className="border-y"
      style={{ borderColor: "var(--tpl-line)", background: "var(--tpl-card)" }}
    >
      <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <div className="max-w-2xl">
          <p
            className="text-xs"
            style={{
              color: "var(--tpl-accent)",
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              fontFamily: "var(--tpl-font-body)",
              fontWeight: 600,
            }}
          >
            {content.services.sectionLabel}
          </p>
          <h2
            className="mt-5 text-4xl leading-tight md:text-6xl"
            style={{
              color: "var(--tpl-ink)",
              fontFamily: "var(--tpl-font-display)",
              fontWeight: theme.type.displayWeight,
              letterSpacing: theme.type.displayTracking,
              fontStyle: "italic",
            }}
          >
            {content.services.sectionHeadline}
          </h2>
          <p
            className="mt-5 text-base leading-relaxed"
            style={{
              color: "var(--tpl-muted)",
              fontFamily: "var(--tpl-font-body)",
            }}
          >
            {content.services.sectionSub}
          </p>
        </div>
        <ul className="mt-14 grid gap-10 sm:grid-cols-2 md:grid-cols-3 md:gap-12">
          {content.services.items.map((it, i) => (
            <li key={it.name}>
              <div
                className="relative overflow-hidden"
                style={{ borderRadius: `var(--tpl-radius)`, aspectRatio: "4 / 3" }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={SERVICE_PHOTOS[i % SERVICE_PHOTOS.length]}
                  alt={it.name}
                  loading="lazy"
                  decoding="async"
                  className="block h-full w-full object-cover"
                />
              </div>
              <h3
                className="mt-5 text-2xl leading-snug"
                style={{
                  color: "var(--tpl-ink)",
                  fontFamily: "var(--tpl-font-display)",
                  fontWeight: theme.type.displayWeight,
                  letterSpacing: theme.type.displayTracking,
                }}
              >
                {it.name}
              </h3>
              <p
                className="mt-2 text-sm leading-relaxed"
                style={{
                  color: "var(--tpl-muted)",
                  fontFamily: "var(--tpl-font-body)",
                }}
              >
                {it.summary}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
