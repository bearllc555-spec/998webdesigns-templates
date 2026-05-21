import type { TemplateTheme } from "../types";

export const theme: TemplateTheme = {
  meta: {
    slug: "maple-street-bakery",
    name: "Maple Street",
    industry: "Bakery and cafe",
    tagline: "A small neighborhood bakery. Bread starts at 4am.",
    publishedAt: "2026-05-21T10:01:00Z",
  },
  palette: {
    bg: "#FBF6EE",
    ink: "#2A1A12",
    mutedInk: "#7A5A48",
    line: "#E9D9C2",
    card: "#FFFFFF",
    accent: "#C2522C",
    accentInk: "#FBF6EE",
    accentSoft: "#E9C9A1",
  },
  type: {
    display: "var(--font-fraunces)",
    body: "var(--font-inter)",
    displayWeight: 600,
    bodyWeight: 400,
    displayTracking: "-0.025em",
    scale: "warm",
  },
  radius: 4,
  density: "normal",
  motion: "lively",
  primaryCta: {
    label: "Order for pickup",
    href: "/templates/maple-street-bakery/order-ahead",
  },
  nav: [
    { label: "Menu", href: "/templates/maple-street-bakery/menu" },
    { label: "Our bakers", href: "/templates/maple-street-bakery/our-bakers" },
    { label: "Visit", href: "/templates/maple-street-bakery/visit" },
    { label: "Order ahead", href: "/templates/maple-street-bakery/order-ahead" },
  ],
};
