import { Sparkles, Smile, AlignCenter, ShieldCheck, Baby, Moon } from "lucide-react";
import { theme } from "../theme";
import { content } from "../content";

const ICONS = [Sparkles, Smile, AlignCenter, ShieldCheck, Baby, Moon];

export function ServicesBlock() {
  return (
    <section style={{ background: "var(--tpl-card)" }}>
      <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <div className="grid gap-8 md:grid-cols-12 md:items-end">
          <div className="md:col-span-7">
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
            className="text-base leading-relaxed md:col-span-5"
            style={{
              color: "var(--tpl-muted)",
              fontFamily: "var(--tpl-font-body)",
            }}
          >
            {content.services.sectionSub}
          </p>
        </div>
        <ul className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {content.services.items.map((it, i) => {
            const Icon = ICONS[i % ICONS.length];
            return (
              <li
                key={it.name}
                className="p-7 transition hover:-translate-y-0.5"
                style={{
                  background: "var(--tpl-bg)",
                  border: `1px solid var(--tpl-line)`,
                  borderRadius: `var(--tpl-radius)`,
                  boxShadow: "0 1px 2px rgba(14, 17, 22, 0.04), 0 8px 24px rgba(14, 17, 22, 0.04)",
                }}
              >
                <div
                  className="inline-flex h-11 w-11 items-center justify-center"
                  style={{
                    background: "var(--tpl-accent-soft)",
                    color: "var(--tpl-accent)",
                    borderRadius: 12,
                  }}
                >
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <h3
                  className="mt-5 text-xl leading-snug"
                  style={{
                    color: "var(--tpl-ink)",
                    fontFamily: "var(--tpl-font-display)",
                    fontWeight: 700,
                    letterSpacing: theme.type.displayTracking,
                  }}
                >
                  {it.name}
                </h3>
                <p
                  className="mt-3 text-base leading-relaxed"
                  style={{
                    color: "var(--tpl-muted)",
                    fontFamily: "var(--tpl-font-body)",
                  }}
                >
                  {it.summary}
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
