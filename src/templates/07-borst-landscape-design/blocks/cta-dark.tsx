import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { theme } from "../theme";
import { content } from "../content";
import { extendedPalette } from "../theme";

export function CtaDarkBlock() {
  return (
    <section style={{ background: extendedPalette.darkSection }}>
      <div className="mx-auto max-w-5xl px-5 py-20 md:px-8 md:py-28 text-center">
        <p
          className="text-xs"
          style={{
            color: "var(--tpl-accent-soft)",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            fontFamily: "var(--tpl-font-body)",
            fontWeight: 600,
          }}
        >
          {content.ctaBanner.headline}
        </p>
        <h2
          className="mx-auto mt-4 max-w-3xl text-4xl leading-tight md:text-6xl"
          style={{
            color: "#FFFFFF",
            fontFamily: "var(--tpl-font-display)",
            fontWeight: theme.type.displayWeight,
            letterSpacing: theme.type.displayTracking,
          }}
        >
          {content.ctaBanner.sub}
        </h2>
        <div className="mt-9 flex justify-center">
          <Link
            href={content.ctaBanner.cta.href}
            className="inline-flex items-center gap-2 px-7 py-3.5 text-sm transition hover:opacity-90"
            style={{
              background: "var(--tpl-accent)",
              color: "var(--tpl-accent-ink)",
              borderRadius: 999,
              fontFamily: "var(--tpl-font-body)",
              fontWeight: 600,
            }}
          >
            {content.ctaBanner.cta.label}
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
