import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { theme } from "../theme";
import { content } from "../content";
import { Hero as HeroMotif } from "../images";

export function HeroBlock() {
  return (
    <section style={{ background: "var(--tpl-bg)" }}>
      <div className="mx-auto max-w-6xl px-5 pt-12 pb-20 md:px-8 md:pt-20 md:pb-24">
        <div className="grid items-center gap-12 md:grid-cols-12 md:gap-12">
          <div className="md:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full px-3 py-1.5"
              style={{
                background: "var(--tpl-accent-soft)",
                color: "var(--tpl-accent)",
              }}
            >
              <span
                className="inline-block h-2 w-2 rounded-full"
                style={{ background: "var(--tpl-accent)" }}
                aria-hidden="true"
              />
              <p
                className="text-xs font-medium"
                style={{ fontFamily: "var(--tpl-font-body)" }}
              >
                {content.hero.eyebrow}
              </p>
            </div>
            <h1
              className="mt-6 text-5xl leading-[1.05] md:text-6xl lg:text-7xl"
              style={{
                color: "var(--tpl-ink)",
                fontFamily: "var(--tpl-font-display)",
                fontWeight: theme.type.displayWeight,
                letterSpacing: theme.type.displayTracking,
              }}
            >
              {content.hero.headline}
            </h1>
            <p
              className="mt-7 max-w-xl text-lg leading-relaxed"
              style={{
                color: "var(--tpl-muted)",
                fontFamily: "var(--tpl-font-body)",
              }}
            >
              {content.hero.sub}
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Link
                href={theme.primaryCta.href}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm transition hover:opacity-90"
                style={{
                  background: "var(--tpl-accent)",
                  color: "var(--tpl-accent-ink)",
                  borderRadius: `var(--tpl-radius)`,
                  fontFamily: "var(--tpl-font-body)",
                  fontWeight: 600,
                }}
              >
                {theme.primaryCta.label}
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              {content.hero.secondaryLink && (
                <Link
                  href={content.hero.secondaryLink.href}
                  className="inline-flex items-center gap-2 px-5 py-3 text-sm transition hover:opacity-80"
                  style={{
                    background: "var(--tpl-card)",
                    color: "var(--tpl-ink)",
                    border: `1px solid var(--tpl-line)`,
                    borderRadius: `var(--tpl-radius)`,
                    fontFamily: "var(--tpl-font-body)",
                    fontWeight: 500,
                  }}
                >
                  {content.hero.secondaryLink.label}
                </Link>
              )}
            </div>
          </div>
          <div className="md:col-span-5">
            <div className="relative overflow-hidden" style={{ aspectRatio: "4 / 5", borderRadius: `var(--tpl-radius)` }}>
              <HeroMotif theme={theme} className="block h-full w-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
