import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { theme } from "../theme";
import { content } from "../content";

export function HeroBlock() {
  return (
    <section
      className="relative overflow-hidden"
      style={{ background: "var(--tpl-bg)" }}
    >
      <div className="mx-auto max-w-6xl px-5 pt-16 pb-24 md:px-8 md:pt-24 md:pb-32">
        <div className="grid items-center gap-12 md:grid-cols-12">
          <div className="md:col-span-7">
            <p
              className="text-xs font-bold"
              style={{
                color: "var(--tpl-accent)",
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                fontFamily: "var(--tpl-font-body)",
              }}
            >
              {content.hero.eyebrow}
            </p>
            <h1
              className="mt-7 text-5xl leading-[0.95] md:text-7xl lg:text-[7.5rem]"
              style={{
                color: "var(--tpl-ink)",
                fontFamily: "var(--tpl-font-display)",
                fontWeight: theme.type.displayWeight,
                letterSpacing: theme.type.displayTracking,
                textTransform: "uppercase",
              }}
            >
              {content.hero.headline}
            </h1>
            <span
              className="mt-6 inline-block h-1 w-24"
              style={{ background: "var(--tpl-accent)" }}
              aria-hidden="true"
            />
            <p
              className="mt-8 max-w-xl text-lg leading-relaxed"
              style={{
                color: "var(--tpl-muted)",
                fontFamily: "var(--tpl-font-body)",
              }}
            >
              {content.hero.sub}
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-5">
              <Link
                href={theme.primaryCta.href}
                className="inline-flex items-center justify-center gap-2 px-7 py-4 text-sm transition hover:opacity-90"
                style={{
                  background: "var(--tpl-accent)",
                  color: "var(--tpl-accent-ink)",
                  fontFamily: "var(--tpl-font-body)",
                  fontWeight: 700,
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                }}
              >
                {theme.primaryCta.label}
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              {content.hero.secondaryLink && (
                <Link
                  href={content.hero.secondaryLink.href}
                  className="inline-flex items-center gap-2 px-7 py-4 text-sm transition hover:opacity-90"
                  style={{
                    color: "var(--tpl-ink)",
                    border: `2px solid var(--tpl-line)`,
                    fontFamily: "var(--tpl-font-body)",
                    fontWeight: 700,
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                  }}
                >
                  {content.hero.secondaryLink.label}
                </Link>
              )}
            </div>
          </div>
          <div className="md:col-span-5">
            <div className="relative overflow-hidden" style={{ aspectRatio: "4 / 5" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/mockups/ironclad-roofing/crew.jpg"
                alt="Ironclad roofing crew on the job"
                loading="eager"
                decoding="async"
                className="block h-full w-full object-cover"
              />
              <div
                className="pointer-events-none absolute inset-x-0 bottom-0 h-1"
                style={{ background: "var(--tpl-accent)" }}
                aria-hidden="true"
              />
            </div>
          </div>
        </div>
      </div>
      <DiagonalDivider />
    </section>
  );
}

export function DiagonalDivider() {
  return (
    <div aria-hidden="true" style={{ background: "var(--tpl-bg)" }}>
      <svg
        viewBox="0 0 1600 80"
        preserveAspectRatio="none"
        className="block h-12 w-full md:h-16"
        role="presentation"
      >
        <polygon points="0,0 1600,0 1600,80 0,40" fill="var(--tpl-card)" />
      </svg>
    </div>
  );
}
