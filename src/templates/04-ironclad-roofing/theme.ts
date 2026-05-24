import type { TemplateTheme } from "../types";

export const theme: TemplateTheme = {
  meta: {
    slug: "ironclad-roofing",
    name: "Ironclad",
    industry: "Roofing and exteriors",
    tagline: "Built once. Built right. Built local.",
    publishedAt: "2026-05-21T10:03:00Z",
  },
  palette: {
    bg: "#15171A",
    ink: "#F2F2EF",
    mutedInk: "#9CA0A6",
    line: "#2A2D32",
    card: "#1B1E22",
    accent: "#F25C05",
    accentInk: "#15171A",
    accentSoft: "#3C2818",
  },
  type: {
    display: "var(--font-geist-sans)",
    body: "var(--font-archivo)",
    displayWeight: 900,
    bodyWeight: 500,
    displayTracking: "-0.012em",
    scale: "industrial",
  },
  radius: 0,
  density: "tight",
  motion: "subtle",
  primaryCta: {
    label: "Get a free estimate",
    href: "/mockups/ironclad-roofing/estimate",
  },
  nav: [
    { label: "Services", href: "/mockups/ironclad-roofing/services" },
    { label: "Projects", href: "/mockups/ironclad-roofing/projects" },
    { label: "Estimate", href: "/mockups/ironclad-roofing/estimate" },
    { label: "About", href: "/mockups/ironclad-roofing/about" },
  ],
};
