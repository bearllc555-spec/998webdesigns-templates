import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { theme } from "../theme";
import { content } from "../content";

export function ServicesBlock({ compact = false }: { compact?: boolean }) {
  const items = compact ? content.services.items.slice(0, 3) : content.services.items;
  return (
    <section style={{ background: "var(--tpl-bg)" }} className="border-b" id="practice">
      <div
        className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28"
        style={{ borderColor: "var(--tpl-line)" }}
      >
        <div className="grid gap-12 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-4">
            <p
              className="text-xs uppercase"
              style={{
                color: "var(--tpl-accent)",
                letterSpacing: "0.22em",
                fontFamily: "var(--tpl-font-body)",
                fontWeight: 600,
              }}
            >
              {content.services.sectionLabel}
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
              {content.services.sectionHeadline}
            </h2>
            <p
              className="mt-6 max-w-sm text-base leading-relaxed"
              style={{
                color: "var(--tpl-muted)",
                fontFamily: "var(--tpl-font-body)",
              }}
            >
              {content.services.sectionSub}
            </p>
            {compact && (
              <Link
                href="/templates/haldwell-law/practice-areas"
                className="mt-10 inline-flex items-center gap-2 text-sm transition hover:opacity-70"
                style={{
                  color: "var(--tpl-ink)",
                  fontFamily: "var(--tpl-font-body)",
                  fontWeight: 500,
                }}
              >
                <span className="border-b" style={{ borderColor: "var(--tpl-line)" }}>
                  All practice areas
                </span>
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            )}
          </div>
          <ul className="md:col-span-8">
            {items.map((it, i) => (
              <li
                key={it.number ?? it.name}
                className={`grid grid-cols-[auto_1fr] gap-6 py-8 md:gap-12 md:py-10 ${
                  i === 0 ? "border-t" : "border-t"
                }`}
                style={{ borderColor: "var(--tpl-line)" }}
              >
                <p
                  className="text-2xl leading-none md:text-3xl"
                  style={{
                    color: "var(--tpl-accent)",
                    fontFamily: "var(--tpl-font-display)",
                    fontWeight: 500,
                  }}
                >
                  {it.number}
                </p>
                <div>
                  <h3
                    className="text-xl md:text-2xl"
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
                    className="mt-3 max-w-prose text-base leading-relaxed"
                    style={{
                      color: "var(--tpl-muted)",
                      fontFamily: "var(--tpl-font-body)",
                    }}
                  >
                    {it.summary}
                  </p>
                </div>
              </li>
            ))}
            <li className="border-t" style={{ borderColor: "var(--tpl-line)" }} aria-hidden="true" />
          </ul>
        </div>
      </div>
    </section>
  );
}
