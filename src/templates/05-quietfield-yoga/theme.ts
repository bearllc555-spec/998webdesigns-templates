import type { TemplateTheme } from "../types";

export const theme: TemplateTheme = {
  meta: {
    slug: "quietfield-yoga",
    name: "Quietfield",
    industry: "Yoga collective",
    tagline: "A quieter way to begin.",
    publishedAt: "2026-05-21T10:04:00Z",
  },
  palette: {
    bg: "#F1EFE9",
    ink: "#2C2E29",
    mutedInk: "#6F7269",
    line: "#D8D4C9",
    card: "#F7F5EF",
    accent: "#6B8068",
    accentInk: "#F7F5EF",
    accentSoft: "#D6DDD0",
  },
  type: {
    display: "var(--font-geist-sans)",
    body: "var(--font-inter)",
    displayWeight: 400,
    bodyWeight: 400,
    displayTracking: "0.005em",
    scale: "serene",
  },
  radius: 0,
  density: "airy",
  motion: "still",
  primaryCta: {
    label: "See the schedule",
    href: "/templates/quietfield-yoga/schedule",
  },
  nav: [
    { label: "Classes", href: "/templates/quietfield-yoga/classes" },
    { label: "Teachers", href: "/templates/quietfield-yoga/teachers" },
    { label: "Schedule", href: "/templates/quietfield-yoga/schedule" },
    { label: "Visit", href: "/templates/quietfield-yoga/visit" },
  ],
};
