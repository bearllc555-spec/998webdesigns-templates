import Link from "next/link";
import { theme } from "../theme";
import { content } from "../content";

export function AboutSnippet() {
  return (
    <section style={{ background: "var(--tpl-bg)" }}>
      <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <div className="grid gap-12 md:grid-cols-12 md:gap-12">
          <div className="md:col-span-6">
            <p
              className="text-xs"
              style={{
                color: "var(--tpl-accent)",
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                fontFamily: "var(--tpl-font-body)",
                fontWeight: 600,
              }}
            >
              {content.about.eyebrow}
            </p>
            <h2
              className="mt-4 text-4xl leading-tight md:text-5xl"
              style={{
                color: "var(--tpl-ink)",
                fontFamily: "var(--tpl-font-display)",
                fontWeight: theme.type.displayWeight,
                letterSpacing: theme.type.displayTracking,
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
            <Link
              href="/mockups/northwind-dental/team"
              className="mt-9 inline-flex items-center gap-2 text-sm"
              style={{
                color: "var(--tpl-accent)",
                fontFamily: "var(--tpl-font-body)",
                fontWeight: 600,
              }}
            >
              Meet the team
            </Link>
          </div>
          <div className="md:col-span-6">
            <div
              className="grid grid-cols-3 gap-4 p-6"
              style={{
                background: "var(--tpl-card)",
                borderRadius: `var(--tpl-radius)`,
                border: `1px solid var(--tpl-line)`,
              }}
            >
              {content.about.stats?.map((s) => (
                <div key={s.label}>
                  <p
                    className="text-3xl leading-tight md:text-4xl"
                    style={{
                      color: "var(--tpl-ink)",
                      fontFamily: "var(--tpl-font-display)",
                      fontWeight: 700,
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
            <div className="mt-6 relative overflow-hidden" style={{ borderRadius: `var(--tpl-radius)`, aspectRatio: "16 / 10" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/mockups/northwind-dental/team.jpg"
                alt="The Northwind clinic team"
                loading="lazy"
                decoding="async"
                className="block h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
