import type { Metadata } from "next";
import { templateModule } from "@/templates/07-borst-landscape-design";
import { ThemeStyle } from "@/lib/theme-style";
import { SiteHeader } from "@/components/site/header";
import { BorstFooter } from "@/templates/07-borst-landscape-design/blocks/borst-footer";

const { theme } = templateModule;

export const metadata: Metadata = {
  title: `${theme.meta.name} | ${theme.meta.industry}`,
  description: theme.meta.tagline,
};

export default function BorstLayout({ children }: { children: React.ReactNode }) {
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
      <BorstFooter />
    </div>
  );
}
