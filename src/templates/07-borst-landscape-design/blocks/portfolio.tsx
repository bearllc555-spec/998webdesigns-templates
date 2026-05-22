import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { theme } from "../theme";
import { portfolio } from "../content";

export function PortfolioBlock() {
  return (
    <section style={{ background: "var(--tpl-bg)" }}>
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
              Portfolio
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
              Our past projects of landscaping work.
            </h2>
          </div>
        </div>
        <ul className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {portfolio.map((p) => (
            <li
              key={p.title}
              className="overflow-hidden"
              style={{ borderRadius: 24, border: "1px solid var(--tpl-line)" }}
            >
              <div className="relative overflow-hidden" style={{ aspectRatio: "1 / 1" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={p.image}
                  alt={p.title}
                  className="block h-full w-full object-cover transition hover:scale-105"
                />
              </div>
            </li>
          ))}
        </ul>
        <div className="mt-12 flex justify-center">
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
        </div>
      </div>
    </section>
  );
}
