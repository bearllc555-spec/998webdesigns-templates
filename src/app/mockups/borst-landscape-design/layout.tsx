import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { templateModule } from "@/templates/07-borst-landscape-design";
import { ThemeStyle } from "@/lib/theme-style";
import { BorstFloatingHeader } from "@/templates/07-borst-landscape-design/blocks/borst-floating-header";
import { BorstFooter } from "@/templates/07-borst-landscape-design/blocks/borst-footer";

const { theme } = templateModule;

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: `${theme.meta.name} | ${theme.meta.industry}`,
  description: theme.meta.tagline,
};

export default function BorstLayout({ children }: { children: React.ReactNode }) {
  return (
    <div
      data-template={theme.meta.slug}
      className={plusJakarta.variable}
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
      <BorstFloatingHeader />
      <main id="main">{children}</main>
      <BorstFooter />
    </div>
  );
}
