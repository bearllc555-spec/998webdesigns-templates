import Link from "next/link";
import { theme } from "../theme";
import { content } from "../content";

export function AboutSnippet() {
  return (
    <section style={{ background: "var(--tpl-bg)" }}>
      <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <div className="grid gap-12 md:grid-cols-12 md:gap-12">
          <aside className="md:col-span-5">
            <div
              className="relative overflow-hidden"
              style={{ borderRadius: `var(--tpl-radius)`, aspectRatio: "4 / 5" }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/templates/maple-street-bakery/baker-1.jpg"
                alt="A baker shaping dough on the bench"
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
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                fontFamily: "var(--tpl-font-body)",
                fontWeight: 600,
              }}
            >
              {content.about.eyebrow}
            </p>
            <h2
              className="mt-5 text-4xl leading-tight md:text-5xl"
              style={{
                color: "var(--tpl-ink)",
                fontFamily: "var(--tpl-font-display)",
                fontWeight: theme.type.displayWeight,
                letterSpacing: theme.type.displayTracking,
                fontStyle: "italic",
              }}
            >
              {content.about.headline}
            </h2>
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
            <div
              className="mt-10 grid grid-cols-3 gap-4 border-t pt-8"
              style={{ borderColor: "var(--tpl-line)" }}
            >
              {content.about.stats?.map((s) => (
                <div key={s.label}>
                  <p
                    className="text-2xl leading-tight md:text-3xl"
                    style={{
                      color: "var(--tpl-ink)",
                      fontFamily: "var(--tpl-font-display)",
                      fontWeight: theme.type.displayWeight,
                    }}
                  >
                    {s.value}
                  </p>
                  <p
                    className="mt-2 text-xs"
                    style={{
                      color: "var(--tpl-muted)",
                      letterSpacing: "0.14em",
                      textTransform: "uppercase",
                      fontFamily: "var(--tpl-font-body)",
                    }}
                  >
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
            <Link
              href="/templates/maple-street-bakery/our-bakers"
              className="mt-10 inline-flex items-center gap-2 text-sm transition hover:opacity-70"
              style={{
                color: "var(--tpl-ink)",
                fontFamily: "var(--tpl-font-body)",
                fontWeight: 500,
                textDecoration: "underline",
                textUnderlineOffset: "4px",
                textDecorationColor: "var(--tpl-accent)",
                textDecorationThickness: "2px",
              }}
            >
              Meet the bakers
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
