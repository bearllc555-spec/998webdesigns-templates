import type { Metadata } from "next";
import Link from "next/link";
import { templateModule } from "@/templates/06-tidewater-cpa";
import { offices } from "@/templates/06-tidewater-cpa/content";
import { ThemeStyle } from "@/lib/theme-style";
import { SiteHeader } from "@/components/site/header";

const { theme, content } = templateModule;

export const metadata: Metadata = {
  title: `${theme.meta.name} | ${theme.meta.industry}`,
  description: theme.meta.tagline,
};

export default function TidewaterLayout({ children }: { children: React.ReactNode }) {
  return (
    <div
      data-template={theme.meta.slug}
      style={{
        background: "var(--tpl-bg)",
        color: "var(--tpl-ink)",
        fontFamily: "var(--tpl-font-body)",
        fontWeight: theme.type.bodyWeight,
      }}
    >
      <ThemeStyle theme={theme} />
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <SiteHeader theme={theme} />
      <main id="main">{children}</main>
      <DenseFooter />
    </div>
  );
}

function DenseFooter() {
  const year = new Date().getFullYear();
  return (
    <footer
      className="border-t"
      style={{
        background: "var(--tpl-card)",
        borderColor: "var(--tpl-line)",
        color: "var(--tpl-ink)",
        fontFamily: "var(--tpl-font-body)",
      }}
    >
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
        <div className="grid gap-12 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-4">
            <p
              className="text-2xl"
              style={{
                color: "var(--tpl-ink)",
                fontFamily: "var(--tpl-font-display)",
                fontWeight: theme.type.displayWeight,
                letterSpacing: theme.type.displayTracking,
              }}
            >
              {theme.meta.name}
            </p>
            <p
              className="mt-4 max-w-sm text-sm leading-relaxed"
              style={{ color: "var(--tpl-muted)" }}
            >
              {content.footer.blurb}
            </p>
          </div>
          {offices.map((o) => (
            <div key={o.city} className="md:col-span-3">
              <p
                className="text-xs"
                style={{
                  color: "var(--tpl-muted)",
                  letterSpacing: "0.28em",
                  textTransform: "uppercase",
                  fontFamily: "var(--tpl-font-body)",
                }}
              >
                {o.city} office
              </p>
              <p
                className="mt-3 text-xs"
                style={{
                  color: "var(--tpl-accent)",
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  fontFamily: "var(--tpl-font-body)",
                  fontWeight: 600,
                }}
              >
                {o.role}
              </p>
              <p className="mt-4 whitespace-pre-line text-sm leading-relaxed">{o.address}</p>
              <p className="mt-3 text-sm">{o.phone}</p>
            </div>
          ))}
          <div className="md:col-span-2">
            <p
              className="text-xs"
              style={{
                color: "var(--tpl-muted)",
                letterSpacing: "0.28em",
                textTransform: "uppercase",
                fontFamily: "var(--tpl-font-body)",
              }}
            >
              Hours
            </p>
            <ul className="mt-4 space-y-1.5 text-sm">
              {content.business.hours.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
            <p
              className="mt-6 text-xs"
              style={{
                color: "var(--tpl-muted)",
                letterSpacing: "0.28em",
                textTransform: "uppercase",
                fontFamily: "var(--tpl-font-body)",
              }}
            >
              Pages
            </p>
            <ul className="mt-3 space-y-1.5 text-sm">
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
      </div>
      <div className="border-t" style={{ borderColor: "var(--tpl-line)" }}>
        <div
          className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-5 text-xs md:flex-row md:items-center md:justify-between md:px-8"
          style={{ color: "var(--tpl-muted)" }}
        >
          <p>
            &copy; {year} {content.business.legalName}. Member of the AICPA and the Virginia Society of CPAs.
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
