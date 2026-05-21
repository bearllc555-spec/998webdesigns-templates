import { theme } from "../theme";
import { content } from "../content";

export function AboutSnippet() {
  return (
    <section
      style={{ background: "var(--tpl-card)" }}
      className="relative"
    >
      <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <div className="grid gap-12 md:grid-cols-12">
          <aside className="md:col-span-5">
            <div className="relative overflow-hidden" style={{ aspectRatio: "4 / 5" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/templates/ironclad-roofing/worker.jpg"
                alt="An Ironclad crew member on site"
                loading="lazy"
                decoding="async"
                className="block h-full w-full object-cover"
              />
            </div>
          </aside>
          <div className="md:col-span-7">
            <p
              className="text-xs"
              style={{
                color: "var(--tpl-accent)",
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                fontFamily: "var(--tpl-font-body)",
                fontWeight: 700,
              }}
            >
              {content.about.eyebrow}
            </p>
            <h2
              className="mt-5 text-4xl leading-[0.95] md:text-6xl"
              style={{
                color: "var(--tpl-ink)",
                fontFamily: "var(--tpl-font-display)",
                fontWeight: theme.type.displayWeight,
                textTransform: "uppercase",
              }}
            >
              {content.about.headline}
            </h2>
            <span
              className="mt-5 inline-block h-1 w-16"
              style={{ background: "var(--tpl-accent)" }}
              aria-hidden="true"
            />
            <div
              className="mt-7 space-y-5 text-lg leading-relaxed"
              style={{
                color: "var(--tpl-ink)",
                fontFamily: "var(--tpl-font-body)",
              }}
            >
              {content.about.body.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
