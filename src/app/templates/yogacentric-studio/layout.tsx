import type { Metadata } from "next";
import { templateModule } from "@/templates/08-yogacentric-studio";
import { ThemeStyle } from "@/lib/theme-style";
import { YogaCentricHeader } from "@/templates/08-yogacentric-studio/blocks/floating-header";
import { YogaCentricMain } from "@/templates/08-yogacentric-studio/blocks/main-shell";
import { YogaCentricFooter } from "@/templates/08-yogacentric-studio/blocks/footer";
import { MapBlock } from "@/templates/08-yogacentric-studio/blocks/map";
import { VersionLabel } from "@/templates/08-yogacentric-studio/blocks/version-label";

const { theme } = templateModule;

export const metadata: Metadata = {
  title: `${theme.meta.name} | ${theme.meta.industry}`,
  description: theme.meta.tagline,
};

export default function YogaCentricLayout({ children }: { children: React.ReactNode }) {
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
      <VersionLabel />
      <YogaCentricHeader />
      <YogaCentricMain>{children}</YogaCentricMain>
      <MapBlock />
      <YogaCentricFooter />
    </div>
  );
}
