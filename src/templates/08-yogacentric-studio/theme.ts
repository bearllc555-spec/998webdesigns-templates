import type { TemplateTheme } from "../types";

/** Temporary deploy tell — bump one step on every YogaCentric change. */
export const TEMPLATE_VERSION = "v07";

export const theme: TemplateTheme = {
  meta: {
    slug: "yogacentric-studio",
    name: "YogaCentric",
    industry: "Yoga studio",
    tagline: "Find your balance with YogaCentric.",
    publishedAt: "2026-05-21T18:00:00Z",
  },
  palette: {
    bg: "#FFFFFF",
    ink: "#131313",
    mutedInk: "#777874",
    line: "#E3E3E3",
    card: "#F6F6F6",
    accent: "#FFFFFF",
    accentInk: "#131313",
    accentSoft: "#DFECFE",
  },
  type: {
    display: "var(--font-inter)",
    body: "var(--font-inter)",
    displayWeight: 700,
    bodyWeight: 400,
    displayTracking: "-0.03em",
    scale: "modern",
  },
  radius: 16,
  density: "airy",
  motion: "subtle",
  primaryCta: {
    label: "Book a class",
    href: "/templates/yogacentric-studio/contact",
  },
  nav: [
    { label: "Services", href: "/templates/yogacentric-studio/services" },
    { label: "Trainers", href: "/templates/yogacentric-studio/trainers" },
    { label: "Plans", href: "/templates/yogacentric-studio/pricing" },
    { label: "Contact", href: "/templates/yogacentric-studio/contact" },
  ],
};

export const extendedPalette = {
  sectionAlt: "#ECEDE7",
  lime: "#ECF86E",
  blueSoft: "#DFECFE",
  pinkSoft: "#F9DFFA",
};
