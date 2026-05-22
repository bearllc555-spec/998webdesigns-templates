import type { TemplateTheme } from "../types";

export const theme: TemplateTheme = {
  meta: {
    slug: "borst-landscape-design",
    name: "Borst Landscape & Design",
    industry: "Landscape design, build, and maintenance",
    tagline: "Committed to being the best. Naturally.",
    publishedAt: "2026-05-22T12:00:00Z",
  },
  palette: {
    bg: "#FAF7F0",
    ink: "#1B2519",
    mutedInk: "#5A6757",
    line: "#E3DDD0",
    card: "#FFFFFF",
    accent: "#2D5A3D",
    accentInk: "#FAF7F0",
    accentSoft: "#DDEBDF",
  },
  type: {
    display: "var(--font-fraunces)",
    body: "var(--font-source)",
    displayWeight: 500,
    bodyWeight: 400,
    displayTracking: "-0.018em",
    scale: "editorial",
  },
  radius: 4,
  density: "normal",
  motion: "subtle",
  primaryCta: {
    label: "Get a free quote",
    href: "/templates/borst-landscape-design/contact",
  },
  nav: [
    { label: "Services", href: "/templates/borst-landscape-design/services" },
    { label: "Portfolio", href: "/templates/borst-landscape-design/portfolio" },
    { label: "About", href: "/templates/borst-landscape-design/about" },
    { label: "Contact", href: "/templates/borst-landscape-design/contact" },
  ],
};
