import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { theme } from "../theme";
import { content, serviceAssets } from "../content";

export function ServicesBlock() {
  return (
    <section style={{ background: "var(--tpl-card)" }}>
      <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <div className="grid items-end gap-8 md:grid-cols-12">
          <div className="md:col-span-8">
            <p
              className="text-xs"
              style={{
                color: "var(--tpl-accent)",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                fontFamily: "var(--tpl-font-body)",
                fontWeight: 600,
              }}
            >
              {content.services.sectionLabel}
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
              {content.services.sectionHeadline}
            </h2>
          </div>
          <p
            className="text-base leading-relaxed md:col-span-4"
            style={{ color: "var(--tpl-muted)", fontFamily: "var(--tpl-font-body)" }}
          >
            {content.services.sectionSub}
          </p>
        </div>
        <ul className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {content.services.items.map((it, i) => {
            const asset = serviceAssets[i];
            return (
              <li
                key={it.name}
                className="overflow-hidden transition hover:-translate-y-0.5"
                style={{
                  background: "var(--tpl-bg)",
                  border: "1px solid var(--tpl-line)",
                  borderRadius: 24,
                }}
              >
                <div className="relative overflow-hidden" style={{ aspectRatio: "16 / 11" }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={asset.thumb}
                    alt={it.name}
                    className="block h-full w-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-start gap-4">
                    <div
                      className="inline-flex h-11 w-11 shrink-0 items-center justify-center"
                      style={{ background: "var(--tpl-accent-soft)", borderRadius: 14 }}
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={asset.icon} alt="" className="h-5 w-5" />
                    </div>
                    <div className="flex-1">
                      <h3
                        className="text-lg leading-snug"
                        style={{
                          color: "var(--tpl-ink)",
                          fontFamily: "var(--tpl-font-display)",
                          fontWeight: 700,
                        }}
                      >
                        {it.name}
                      </h3>
                      <p
                        className="mt-2 text-sm leading-relaxed"
                        style={{ color: "var(--tpl-muted)" }}
                      >
                        {it.summary}
                      </p>
                    </div>
                  </div>
                  <Link
                    href="/templates/borst-landscape-design/services"
                    className="mt-5 inline-flex items-center gap-2 text-sm transition hover:opacity-80"
                    style={{ color: "var(--tpl-accent)", fontWeight: 600 }}
                  >
                    Learn more
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </div>
              </li>
            );
          })}
        </ul>
        <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
          <Link
            href={theme.primaryCta.href}
            className="inline-flex items-center gap-2 px-6 py-3 text-sm transition hover:opacity-90"
            style={{
              background: "var(--tpl-accent)",
              color: "var(--tpl-accent-ink)",
              borderRadius: 999,
              fontFamily: "var(--tpl-font-body)",
              fontWeight: 600,
            }}
          >
            Get in touch
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
          <Link
            href="/templates/borst-landscape-design/services"
            className="inline-flex items-center gap-2 px-5 py-3 text-sm transition hover:opacity-80"
            style={{
              background: "var(--tpl-bg)",
              color: "var(--tpl-ink)",
              border: "1px solid var(--tpl-line)",
              borderRadius: 999,
              fontFamily: "var(--tpl-font-body)",
              fontWeight: 500,
            }}
          >
            Browse all services
          </Link>
        </div>
      </div>
    </section>
  );
}
