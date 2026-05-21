import Link from "next/link";
import type { TemplateTheme, TemplateContent } from "@/templates/types";

export function CtaBanner({
  theme,
  content,
}: {
  theme: TemplateTheme;
  content: TemplateContent;
}) {
  return (
    <section
      className="border-y"
      style={{
        borderColor: "var(--tpl-line)",
        background: "var(--tpl-accent-soft)",
      }}
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-14 md:flex-row md:items-end md:justify-between md:px-8 md:py-16">
        <div className="max-w-2xl">
          <h2
            className="text-3xl leading-tight md:text-4xl"
            style={{
              color: "var(--tpl-ink)",
              fontFamily: "var(--tpl-font-display)",
              fontWeight: theme.type.displayWeight,
              letterSpacing: theme.type.displayTracking,
            }}
          >
            {content.ctaBanner.headline}
          </h2>
          {content.ctaBanner.sub && (
            <p
              className="mt-3 text-base leading-relaxed"
              style={{ color: "var(--tpl-muted)", fontFamily: "var(--tpl-font-body)" }}
            >
              {content.ctaBanner.sub}
            </p>
          )}
        </div>
        <Link
          href={content.ctaBanner.cta.href}
          className="inline-flex shrink-0 items-center justify-center px-6 py-3 text-sm transition hover:opacity-90"
          style={{
            background: "var(--tpl-accent)",
            color: "var(--tpl-accent-ink)",
            borderRadius: `var(--tpl-radius)`,
            fontFamily: "var(--tpl-font-body)",
            fontWeight: 600,
          }}
        >
          {content.ctaBanner.cta.label}
        </Link>
      </div>
    </section>
  );
}
