import type { TemplateTheme } from "@/templates/types";

export function templateCssVars(theme: TemplateTheme): string {
  return `
    --tpl-bg: ${theme.palette.bg};
    --tpl-ink: ${theme.palette.ink};
    --tpl-muted: ${theme.palette.mutedInk};
    --tpl-line: ${theme.palette.line};
    --tpl-card: ${theme.palette.card};
    --tpl-accent: ${theme.palette.accent};
    --tpl-accent-ink: ${theme.palette.accentInk};
    --tpl-accent-soft: ${theme.palette.accentSoft};
    --tpl-radius: ${theme.radius}px;
    --tpl-font-display: ${theme.type.display};
    --tpl-font-body: ${theme.type.body};
    --tpl-display-weight: ${theme.type.displayWeight};
    --tpl-body-weight: ${theme.type.bodyWeight};
    --tpl-display-tracking: ${theme.type.displayTracking};
  `.replace(/\s+/g, " ");
}

export function ThemeStyle({ theme }: { theme: TemplateTheme }) {
  const css = `:root, [data-template="${theme.meta.slug}"] { ${templateCssVars(theme)} }`;
  return <style dangerouslySetInnerHTML={{ __html: css }} />;
}
