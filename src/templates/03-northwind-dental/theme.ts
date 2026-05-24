import type { TemplateTheme } from "../types";

export const theme: TemplateTheme = {
  meta: {
    slug: "northwind-dental",
    name: "Northwind Dental",
    industry: "Family and cosmetic dentistry",
    tagline: "Calm, modern care for the whole family.",
    publishedAt: "2026-05-21T10:02:00Z",
  },
  palette: {
    bg: "#FFFFFF",
    ink: "#0E1116",
    mutedInk: "#5B6470",
    line: "#E5E8EE",
    card: "#F7F9FC",
    accent: "#2C7BE5",
    accentInk: "#FFFFFF",
    accentSoft: "#E6F0FB",
  },
  type: {
    display: "var(--font-geist-sans)",
    body: "var(--font-manrope)",
    displayWeight: 700,
    bodyWeight: 400,
    displayTracking: "-0.022em",
    scale: "modern",
  },
  radius: 16,
  density: "normal",
  motion: "subtle",
  primaryCta: {
    label: "Book a visit",
    href: "/mockups/northwind-dental/book-a-visit",
  },
  nav: [
    { label: "Services", href: "/mockups/northwind-dental/services" },
    { label: "New patients", href: "/mockups/northwind-dental/new-patients" },
    { label: "Our team", href: "/mockups/northwind-dental/team" },
    { label: "Book", href: "/mockups/northwind-dental/book-a-visit" },
  ],
};
