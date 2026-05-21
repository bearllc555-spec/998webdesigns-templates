import type { TemplateTheme } from "../types";

export const theme: TemplateTheme = {
  meta: {
    slug: "haldwell-law",
    name: "Haldwell & Carr",
    industry: "Boutique law firm",
    tagline: "Quiet authority. Modern practice.",
    publishedAt: "2026-05-21T10:00:00Z",
  },
  palette: {
    bg: "#F4EFE6",
    ink: "#14202B",
    mutedInk: "#5A6473",
    line: "#DCD3C2",
    card: "#FBF8F1",
    accent: "#8B6B3F",
    accentInk: "#FBF8F1",
    accentSoft: "#E8DFCB",
  },
  type: {
    display: "var(--font-cormorant)",
    body: "var(--font-source)",
    displayWeight: 600,
    bodyWeight: 400,
    displayTracking: "-0.018em",
    scale: "editorial",
  },
  radius: 0,
  density: "airy",
  motion: "subtle",
  primaryCta: {
    label: "Schedule a consultation",
    href: "/templates/haldwell-law/contact",
  },
  nav: [
    { label: "Practice areas", href: "/templates/haldwell-law/practice-areas" },
    { label: "Attorneys", href: "/templates/haldwell-law/attorneys" },
    { label: "Insights", href: "/templates/haldwell-law/insights" },
    { label: "Contact", href: "/templates/haldwell-law/contact" },
  ],
};
