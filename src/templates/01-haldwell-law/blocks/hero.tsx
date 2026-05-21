import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Hero as HeroSvg } from "../images";
import { theme } from "../theme";
import { content } from "../content";

export function HeroBlock() {
  return (
    <section
      style={{ background: "var(--tpl-bg)" }}
      className="border-b"
    >
      <div
        className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24"
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
              {content.hero.eyebrow}
            </p>
            <h1
              className="mt-6 text-5xl leading-[1.05] md:text-7xl"
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
              className="mt-8 max-w-xl text-lg leading-relaxed md:text-xl"
              style={{
                color: "var(--tpl-muted)",
                fontFamily: "var(--tpl-font-body)",
              }}
            >
              {content.hero.sub}
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-8">
              <Link
                href={theme.primaryCta.href}
                className="inline-flex items-center justify-center px-6 py-3 text-sm transition hover:opacity-90"
                style={{
                  background: "var(--tpl-accent)",
                  color: "var(--tpl-accent-ink)",
                  fontFamily: "var(--tpl-font-body)",
                  fontWeight: 600,
                  letterSpacing: "0.04em",
                }}
              >
                {theme.primaryCta.label}
              </Link>
              {content.hero.secondaryLink && (
                <Link
                  href={content.hero.secondaryLink.href}
                  className="group inline-flex items-center gap-2 text-sm transition hover:opacity-70"
                  style={{
                    color: "var(--tpl-ink)",
                    fontFamily: "var(--tpl-font-body)",
                    fontWeight: 500,
                  }}
                >
                  <span
                    className="border-b"
                    style={{ borderColor: "var(--tpl-line)" }}
                  >
                    {content.hero.secondaryLink.label}
                  </span>
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" aria-hidden="true" />
                </Link>
              )}
            </div>
          </div>
          <div className="md:col-span-5">
            <HeroSvg seed={1} theme={theme} className="h-auto w-full" />
          </div>
        </div>
      </div>
    </section>
  );
}
