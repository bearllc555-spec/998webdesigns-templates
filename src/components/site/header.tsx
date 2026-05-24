import Link from "next/link";
import type { TemplateTheme } from "@/templates/types";

export function SiteHeader({ theme }: { theme: TemplateTheme }) {
  const slug = theme.meta.slug;
  return (
    <header
      className="border-b"
      style={{
        background: "var(--tpl-bg)",
        borderColor: "var(--tpl-line)",
      }}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-5 py-5 md:px-8">
        <Link
          href={`/mockups/${slug}`}
          className="inline-flex items-baseline gap-2"
          aria-label={`${theme.meta.name} home`}
        >
          <span
            className="text-lg leading-none md:text-xl"
            style={{
              color: "var(--tpl-accent)",
              fontFamily: "var(--tpl-font-display)",
              fontWeight: theme.type.displayWeight,
              letterSpacing: theme.type.displayTracking,
            }}
          >
            {theme.meta.name}
          </span>
        </Link>
        <nav className="hidden items-center gap-7 md:flex">
          {theme.nav.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className="text-sm hover:opacity-70"
              style={{
                color: "var(--tpl-ink)",
                fontFamily: "var(--tpl-font-body)",
                fontWeight: theme.type.bodyWeight,
              }}
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <Link
          href={theme.primaryCta.href}
          className="inline-flex items-center justify-center px-4 py-2 text-sm transition"
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
      </div>
    </header>
  );
}
