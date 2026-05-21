import type { TemplateTheme } from "../types";

export const theme: TemplateTheme = {
  meta: {
    slug: "tidewater-cpa",
    name: "Tidewater Partners",
    industry: "Accounting and advisory",
    tagline: "Counsel for the close-held company and the careful family.",
    publishedAt: "2026-05-21T10:05:00Z",
  },
  palette: {
    bg: "#FAFAF8",
    ink: "#0B1B2B",
    mutedInk: "#5A6470",
    line: "#E2E0D8",
    card: "#FFFFFF",
    accent: "#B8923E",
    accentInk: "#0B1B2B",
    accentSoft: "#EDE5D1",
  },
  type: {
    display: "var(--font-playfair)",
    body: "var(--font-ibm-plex)",
    displayWeight: 600,
    bodyWeight: 400,
    displayTracking: "-0.012em",
    scale: "structured",
  },
  radius: 0,
  density: "normal",
  motion: "still",
  primaryCta: {
    label: "Contact the firm",
    href: "/templates/tidewater-cpa/contact",
  },
  nav: [
    { label: "Services", href: "/templates/tidewater-cpa/services" },
    { label: "Industries", href: "/templates/tidewater-cpa/industries" },
    { label: "Insights", href: "/templates/tidewater-cpa/insights" },
    { label: "Partners", href: "/templates/tidewater-cpa/partners" },
    { label: "Contact", href: "/templates/tidewater-cpa/contact" },
  ],
};
