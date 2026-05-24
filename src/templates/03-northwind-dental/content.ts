import type { TemplateContent } from "../types";

export const content: TemplateContent = {
  business: {
    name: "Northwind Dental",
    legalName: "Northwind Family Dental PLLC",
    address: "2300 NE 15th Avenue, Suite 110\nPortland, OR 97232",
    phone: "(503) 555-0142",
    email: "hello@northwinddental.example",
    hours: [
      "Mon to Thu, 7am to 5pm",
      "Friday, 8am to 1pm",
      "Saturday by appointment",
      "Closed Sunday",
    ],
    socials: [
      { label: "Instagram", icon: "instagram", href: "#" },
      { label: "Facebook", icon: "facebook", href: "#" },
      { label: "LinkedIn", icon: "linkedin", href: "#" },
    ],
  },
  hero: {
    eyebrow: "Now accepting new patients",
    headline: "Calm, modern dentistry for the whole family.",
    sub: "Same-day cleanings, gentle cosmetic work, and a practice that respects your time. Most visits run thirty minutes, start to finish.",
    secondaryLink: {
      label: "What to expect on your first visit",
      href: "/mockups/northwind-dental/new-patients",
    },
  },
  services: {
    sectionLabel: "What we do",
    sectionHeadline: "Real outcomes, in plain language.",
    sectionSub:
      "Every service below is described by what changes for you, not by procedure code. If you cannot tell what we do, we have not done our job.",
    items: [
      { name: "Routine cleaning and exam", summary: "Get your cleaning, x-rays, and exam in thirty minutes flat." },
      { name: "Whitening that actually works", summary: "Two to three shades brighter in a single visit, no sensitivity." },
      { name: "Invisalign clear aligners", summary: "Straight teeth in four to twelve months, scanned on day one." },
      { name: "Crowns and same-day repair", summary: "Chipped or cracked tooth restored in one visit, milled in office." },
      { name: "Family checkups for kids", summary: "Calm, low-fluoride first visits as early as their first birthday." },
      { name: "Sleep apnea and night guards", summary: "Comfortable nightguards fitted in two visits, covered by most plans." },
    ],
  },
  about: {
    eyebrow: "About the practice",
    headline: "A small practice run by two dentists who like the work.",
    body: [
      "Dr Anna Park and Dr Marcus Webb opened Northwind in 2018 with one shared idea: a dental practice can run on time. The schedule is the contract.",
      "Three operatories. Two hygienists. Same-day digital scans, no goopy impressions, and a coffee machine in the waiting room that we have been told to be proud of.",
    ],
    stats: [
      { label: "Year opened", value: "2018" },
      { label: "Average visit", value: "32 min" },
      { label: "Insurance plans accepted", value: "12 major" },
    ],
  },
  testimonials: [
    {
      quote:
        "I have been to a lot of dentists. This is the first one that ran ten minutes early. My cleaning was done before my coffee got cold.",
      name: "Carlos M.",
      role: "Patient since 2021",
    },
    {
      quote:
        "Dr Park walked my five-year-old through her first cleaning in a way that made the next year feel easy. We have been every six months since.",
      name: "Allison T.",
      role: "Parent of two",
    },
    {
      quote:
        "Got the chipped front tooth fixed on a lunch break. Could not see the seam at the end of it.",
      name: "Wes L.",
      role: "New patient, 2025",
    },
  ],
  ctaBanner: {
    headline: "Book a visit in under a minute.",
    sub: "Most slots open within the week. We will text the reminder twenty four hours ahead.",
    cta: {
      label: "Book a visit",
      href: "/mockups/northwind-dental/book-a-visit",
    },
  },
  footer: {
    blurb:
      "A modern family and cosmetic dental practice in NE Portland. Two dentists, three operatories, and one rule about running on time.",
  },
};
