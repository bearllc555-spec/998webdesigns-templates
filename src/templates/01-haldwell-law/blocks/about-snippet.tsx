import Link from "next/link";
import { theme } from "../theme";
import { content } from "../content";

export function AboutSnippet() {
  return (
    <section style={{ background: "var(--tpl-card)" }} className="border-b" id="about">
      <div
        className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28"
        style={{ borderColor: "var(--tpl-line)" }}
      >
        <div className="grid gap-12 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-7">
            <p
              className="text-xs uppercase"
              style={{
                color: "var(--tpl-accent)",
                letterSpacing: "0.22em",
                fontFamily: "var(--tpl-font-body)",
                fontWeight: 600,
              }}
            >
              {content.about.eyebrow}
            </p>
            <h2
              className="mt-6 text-3xl leading-tight md:text-5xl"
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
              className="mt-8 space-y-5 text-lg leading-relaxed"
              style={{
                color: "var(--tpl-ink)",
                fontFamily: "var(--tpl-font-body)",
              }}
            >
              {content.about.body.map((p, i) => (
                <p key={i} className={i === 0 ? "haldwell-dropcap" : ""}>
                  {p}
                </p>
              ))}
            </div>
            <style>{`
              .haldwell-dropcap::first-letter {
                font-family: var(--tpl-font-display);
                font-weight: ${theme.type.displayWeight};
                font-size: 4.5em;
                line-height: 0.92;
                color: var(--tpl-accent);
                float: left;
                padding-right: 0.12em;
                margin-top: 0.06em;
              }
            `}</style>
            <Link
              href="/templates/haldwell-law/attorneys"
              className="mt-10 inline-flex items-center gap-2 text-sm transition hover:opacity-70"
              style={{
                color: "var(--tpl-ink)",
                fontFamily: "var(--tpl-font-body)",
                fontWeight: 500,
              }}
            >
              <span className="border-b" style={{ borderColor: "var(--tpl-line)" }}>
                Meet the attorneys
              </span>
            </Link>
          </div>
          <aside className="md:col-span-5">
            <div className="space-y-6">
              {content.about.stats?.map((s) => (
                <div
                  key={s.label}
                  className="border-t pt-5"
                  style={{ borderColor: "var(--tpl-line)" }}
                >
                  <p
                    className="text-5xl leading-none md:text-6xl"
                    style={{
                      color: "var(--tpl-ink)",
                      fontFamily: "var(--tpl-font-display)",
                      fontWeight: theme.type.displayWeight,
                      letterSpacing: theme.type.displayTracking,
                    }}
                  >
                    {s.value}
                  </p>
                  <p
                    className="mt-3 text-xs uppercase"
                    style={{
                      color: "var(--tpl-muted)",
                      letterSpacing: "0.22em",
                      fontFamily: "var(--tpl-font-body)",
                    }}
                  >
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-10 overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/templates/haldwell-law/library.jpg"
                alt="The Haldwell and Carr library"
                loading="lazy"
                decoding="async"
                className="block h-auto w-full object-cover"
                style={{ aspectRatio: "4 / 3" }}
              />
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
