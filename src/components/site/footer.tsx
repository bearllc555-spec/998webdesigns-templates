import Link from "next/link";
import { Instagram, Facebook, Linkedin, Twitter, Youtube } from "lucide-react";
import type { TemplateTheme, TemplateContent } from "@/templates/types";

const ICONS = {
  instagram: Instagram,
  facebook: Facebook,
  linkedin: Linkedin,
  twitter: Twitter,
  youtube: Youtube,
};

export function SiteFooter({
  theme,
  content,
}: {
  theme: TemplateTheme;
  content: TemplateContent;
}) {
  const year = new Date().getFullYear();
  return (
    <footer
      className="border-t"
      style={{
        background: "var(--tpl-bg)",
        borderColor: "var(--tpl-line)",
        color: "var(--tpl-ink)",
        fontFamily: "var(--tpl-font-body)",
      }}
    >
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-14 md:grid-cols-4 md:px-8 md:py-16">
        <div className="md:col-span-2">
          <p
            className="text-2xl leading-tight"
            style={{
              color: "var(--tpl-accent)",
              fontFamily: "var(--tpl-font-display)",
              fontWeight: theme.type.displayWeight,
              letterSpacing: theme.type.displayTracking,
            }}
          >
            {theme.meta.name}
          </p>
          <p
            className="mt-4 max-w-md text-sm leading-relaxed"
            style={{ color: "var(--tpl-muted)" }}
          >
            {content.footer.blurb}
          </p>
          <div className="mt-6 flex items-center gap-3">
            {content.business.socials.map((s) => {
              const Icon = ICONS[s.icon];
              return (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="inline-flex h-9 w-9 items-center justify-center transition hover:opacity-70"
                  style={{
                    border: `1px solid var(--tpl-line)`,
                    color: "var(--tpl-ink)",
                    borderRadius: `var(--tpl-radius)`,
                  }}
                >
                  <Icon className="h-4 w-4" aria-hidden="true" />
                </a>
              );
            })}
          </div>
        </div>
        <div>
          <p
            className="mb-4 text-xs uppercase"
            style={{ color: "var(--tpl-muted)", letterSpacing: "0.16em" }}
          >
            Visit
          </p>
          <p className="text-sm leading-relaxed whitespace-pre-line">{content.business.address}</p>
          <p className="mt-4 text-sm">{content.business.phone}</p>
          <p className="mt-1 text-sm">
            <a href={`mailto:${content.business.email}`} className="hover:opacity-70">
              {content.business.email}
            </a>
          </p>
        </div>
        <div>
          <p
            className="mb-4 text-xs uppercase"
            style={{ color: "var(--tpl-muted)", letterSpacing: "0.16em" }}
          >
            Hours
          </p>
          <ul className="space-y-1.5 text-sm">
            {content.business.hours.map((h) => (
              <li key={h}>{h}</li>
            ))}
          </ul>
          <p
            className="mt-6 mb-3 text-xs uppercase"
            style={{ color: "var(--tpl-muted)", letterSpacing: "0.16em" }}
          >
            Pages
          </p>
          <ul className="space-y-1.5 text-sm">
            {theme.nav.map((n) => (
              <li key={n.href}>
                <Link href={n.href} className="hover:opacity-70">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div
        className="border-t"
        style={{ borderColor: "var(--tpl-line)" }}
      >
        <div
          className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-5 text-xs md:flex-row md:items-center md:justify-between md:px-8"
          style={{ color: "var(--tpl-muted)" }}
        >
          <p>
            &copy; {year} {content.business.legalName}. All rights reserved.
          </p>
          <p>
            Built by{" "}
            <a
              href="https://998webdesigns-com-app.vercel.app"
              className="hover:opacity-70"
              style={{ color: "var(--tpl-ink)" }}
            >
              998 web designs
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
