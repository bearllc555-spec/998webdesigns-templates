import Link from "next/link";
import { theme } from "../theme";
import { content } from "../content";

export function HeroBlock() {
  return (
    <section style={{ background: "var(--tpl-bg)" }} className="border-b" >
      <div className="mx-auto max-w-6xl px-5 pt-14 pb-20 md:px-8 md:pt-20 md:pb-28">
        <div className="grid items-end gap-12 md:grid-cols-12 md:gap-12">
          <div className="md:col-span-7">
            <p
              className="text-xs"
              style={{
                color: "var(--tpl-muted)",
                letterSpacing: "0.28em",
                textTransform: "uppercase",
                fontFamily: "var(--tpl-font-body)",
              }}
            >
              {content.hero.eyebrow}
            </p>
            <h1
              className="mt-7 text-5xl leading-[1.04] md:text-7xl"
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
              className="mt-7 max-w-2xl text-lg leading-relaxed"
              style={{
                color: "var(--tpl-muted)",
                fontFamily: "var(--tpl-font-body)",
              }}
            >
              {content.hero.sub}
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-6">
              <Link
                href={theme.primaryCta.href}
                className="inline-flex items-center justify-center px-6 py-3 text-sm transition hover:opacity-90"
                style={{
                  background: "var(--tpl-ink)",
                  color: "var(--tpl-bg)",
                  fontFamily: "var(--tpl-font-body)",
                  fontWeight: 500,
                  letterSpacing: "0.04em",
                }}
              >
                {theme.primaryCta.label}
              </Link>
              {content.hero.secondaryLink && (
                <Link
                  href={content.hero.secondaryLink.href}
                  className="text-sm"
                  style={{
                    color: "var(--tpl-ink)",
                    fontFamily: "var(--tpl-font-body)",
                    fontWeight: 500,
                    borderBottom: `1px solid var(--tpl-accent)`,
                    paddingBottom: 3,
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
                src="/mockups/tidewater-cpa/hero.jpg"
                alt="The Tidewater Partners office"
                loading="eager"
                decoding="async"
                className="block h-full w-full object-cover"
              />
              <div
                className="pointer-events-none absolute inset-x-0 bottom-0 h-px"
                style={{ background: "var(--tpl-accent)" }}
                aria-hidden="true"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
