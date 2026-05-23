import type { TemplateTheme } from "../types";

export const theme: TemplateTheme = {
  meta: {
    slug: "borst-landscape-design",
    name: "GardenView",
    industry: "Landscape design, build, and maintenance",
    tagline: "Let us bring life to your garden.",
    galleryPreview: "/templates/borst-landscape-design/slot-001.jpg",
    publishedAt: "2026-05-22T13:00:00Z",
  },
  palette: {
    bg: "#FFFFFF",
    ink: "#051F19",
    mutedInk: "#708580",
    line: "#E7EBEA",
    card: "#F7FBF9",
    accent: "#008151",
    accentInk: "#FFFFFF",
    accentSoft: "#D4F5DC",
  },
  type: {
    display: "var(--font-plus-jakarta)",
    body: "var(--font-plus-jakarta)",
    displayWeight: 700,
    bodyWeight: 400,
    displayTracking: "-0.02em",
    scale: "modern",
  },
  radius: 16,
  density: "normal",
  motion: "subtle",
  primaryCta: {
    label: "Get in touch",
    href: "/templates/borst-landscape-design/contact",
  },
  nav: [
    { label: "Home", href: "/templates/borst-landscape-design" },
    { label: "About", href: "/templates/borst-landscape-design/about" },
    { label: "Services", href: "/templates/borst-landscape-design/services" },
    { label: "Portfolio", href: "/templates/borst-landscape-design/portfolio" },
    { label: "Contact", href: "/templates/borst-landscape-design/contact" },
  ],
};

// Borst-specific palette tokens beyond the standard TemplatePalette
export const extendedPalette = {
  darkSection: "#11332B",
  pinkSoft: "#FFF5F6",
};
