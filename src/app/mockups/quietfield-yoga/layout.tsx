import type { Metadata } from "next";
import { templateModule } from "@/templates/05-quietfield-yoga";
import { ThemeStyle } from "@/lib/theme-style";
import { SiteHeader } from "@/components/site/header";
import { SiteFooter } from "@/components/site/footer";

const { theme, content } = templateModule;

export const metadata: Metadata = {
  title: `${theme.meta.name} | ${theme.meta.industry}`,
  description: theme.meta.tagline,
};

export default function QuietfieldLayout({ children }: { children: React.ReactNode }) {
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
      <SiteFooter theme={theme} content={content} />
    </div>
  );
}
