import Link from "next/link";
import { Hero as HeroSvg } from "../images";
import { theme } from "../theme";
import { content } from "../content";

export function HeroBlock() {
  return (
    <section style={{ background: "var(--tpl-bg)" }}>
      <div className="mx-auto max-w-3xl px-5 pt-24 pb-20 text-center md:px-6 md:pt-40 md:pb-28">
        <p
          className="text-xs"
          style={{
            color: "var(--tpl-muted)",
            letterSpacing: "0.42em",
            textTransform: "uppercase",
            fontFamily: "var(--tpl-font-body)",
          }}
        >
          {content.hero.eyebrow}
        </p>
        <div
          className="mx-auto mt-5 h-px w-32"
          style={{ background: "var(--tpl-line)" }}
          aria-hidden="true"
        />
        <h1
          className="mt-12 text-5xl leading-tight md:text-7xl"
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
          className="mx-auto mt-10 max-w-xl text-lg leading-relaxed"
          style={{
            color: "var(--tpl-muted)",
            fontFamily: "var(--tpl-font-body)",
          }}
        >
          {content.hero.sub}
        </p>
        <div className="mt-14 flex flex-col items-center gap-5 md:flex-row md:justify-center md:gap-8">
          <Link
            href={theme.primaryCta.href}
            className="inline-flex items-center justify-center px-7 py-3 text-sm transition hover:opacity-90"
            style={{
              background: "var(--tpl-accent)",
              color: "var(--tpl-accent-ink)",
              fontFamily: "var(--tpl-font-body)",
              fontWeight: 500,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
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
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                borderBottom: `1px solid var(--tpl-line)`,
                paddingBottom: 4,
              }}
            >
              {content.hero.secondaryLink.label}
            </Link>
          )}
        </div>
        <div className="mt-20">
          <HeroSvg seed={1} theme={theme} className="h-auto w-full" />
        </div>
      </div>
    </section>
  );
}
