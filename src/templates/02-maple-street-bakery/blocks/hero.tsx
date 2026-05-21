import Link from "next/link";
import { theme } from "../theme";
import { content } from "../content";

export function HeroBlock() {
  return (
    <section style={{ background: "var(--tpl-bg)" }}>
      <div className="mx-auto max-w-6xl px-5 pt-10 pb-20 md:px-8 md:pt-16 md:pb-28">
        <div className="grid gap-10 md:grid-cols-12 md:gap-12">
          <div className="md:col-span-7">
            <div className="flex items-center gap-3">
              <span
                className="inline-block h-2 w-2 rounded-full"
                style={{ background: "var(--tpl-accent)" }}
                aria-hidden="true"
              />
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
                {content.hero.eyebrow}
              </p>
            </div>
            <h1
              className="mt-6 text-5xl leading-[1.04] md:text-7xl"
              style={{
                color: "var(--tpl-ink)",
                fontFamily: "var(--tpl-font-display)",
                fontWeight: theme.type.displayWeight,
                letterSpacing: theme.type.displayTracking,
                fontStyle: "italic",
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
            <div className="mt-9 flex flex-wrap items-center gap-5">
              <Link
                href={theme.primaryCta.href}
                className="inline-flex items-center justify-center px-6 py-3 text-sm transition hover:opacity-90"
                style={{
                  background: "var(--tpl-accent)",
                  color: "var(--tpl-accent-ink)",
                  borderRadius: `var(--tpl-radius)`,
                  fontFamily: "var(--tpl-font-body)",
                  fontWeight: 600,
                }}
              >
                {theme.primaryCta.label}
              </Link>
              {content.hero.secondaryLink && (
                <Link
                  href={content.hero.secondaryLink.href}
                  className="text-sm transition hover:opacity-70"
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
                  {content.hero.secondaryLink.label}
                </Link>
              )}
            </div>
          </div>
          <div className="md:col-span-5">
            <div className="relative overflow-hidden" style={{ aspectRatio: "4 / 5", borderRadius: `var(--tpl-radius)` }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/templates/maple-street-bakery/hero.jpg"
                alt="Fresh sourdough loaves on the bakery bench"
                loading="eager"
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
