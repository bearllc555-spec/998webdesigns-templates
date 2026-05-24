import type { TemplateContent } from "../types";

export const content: TemplateContent = {
  business: {
    name: "Ironclad Roofing",
    legalName: "Ironclad Roofing & Exteriors LLC",
    address: "4421 Industrial Blvd\nKnoxville, TN 37917",
    phone: "(865) 555-0163",
    email: "estimate@ironcladroofing.example",
    hours: [
      "Mon to Fri, 7am to 6pm",
      "Saturday, 8am to 1pm",
      "Closed Sunday",
    ],
    socials: [
      { label: "Facebook", icon: "facebook", href: "#" },
      { label: "Instagram", icon: "instagram", href: "#" },
      { label: "YouTube", icon: "youtube", href: "#" },
    ],
  },
  hero: {
    eyebrow: "Knoxville. Since 1987.",
    headline: "BUILT ONCE. BUILT RIGHT. BUILT LOCAL.",
    sub: "Asphalt, metal, and standing-seam roofing for East Tennessee homes and shops. Same crew on your roof from tear-off to clean-up. No subs.",
    secondaryLink: {
      label: "See the work",
      href: "/mockups/ironclad-roofing/projects",
    },
  },
  services: {
    sectionLabel: "Services",
    sectionHeadline: "FIVE TRADES. ONE CREW.",
    sectionSub:
      "We do the roof, the gutters, the siding, the soffit, and the storm work. The truck pulls up once.",
    items: [
      { name: "Asphalt shingle roofing", summary: "30 to 50 year architectural shingles. Most homes in one day." },
      { name: "Standing-seam metal", summary: "24 and 26 gauge panels in 12 colors. Built to outlive the mortgage." },
      { name: "Seamless gutters and guards", summary: "5 and 6 inch K-style, fabricated on-truck. No more leaf duty." },
      { name: "Siding and exteriors", summary: "Hardie plank, vinyl, and cedar. Same crew, same warranty." },
      { name: "Storm damage and insurance", summary: "We meet the adjuster on the roof. Most claims approved without a fight." },
    ],
  },
  about: {
    eyebrow: "About Ironclad",
    headline: "Thirty-nine years. Same county. Same handshake.",
    body: [
      "Frank Hollister started Ironclad in 1987 with a borrowed truck and a tarp. Today the company runs three full crews, all in-house, all year-round.",
      "We have not subcontracted a roof in fifteen years. The man on your roof has a phone, a clean shirt, and a name on his check that says Ironclad.",
    ],
    stats: [
      { label: "Years in business", value: "39" },
      { label: "Roofs installed", value: "4,200+" },
      { label: "Locally owned", value: "100%" },
    ],
  },
  testimonials: [
    {
      quote:
        "Tornado took a third of the roof off in 2024. Frank had a tarp on it by sundown and a new roof on it by Friday. Insurance paid every dollar.",
      name: "Jim B.",
      role: "Powell, TN, customer since 2018",
    },
    {
      quote:
        "Five competing bids on a metal roof. Ironclad was not the cheapest and not the most expensive. They were the only ones who came back the next day with a written warranty.",
      name: "Karla M.",
      role: "Farragut, TN, 2025 install",
    },
    {
      quote:
        "Old man Hollister himself did the inspection. Sixty-one years old, still up the ladder, still pointing at things with a finger. That is the company.",
      name: "Brett H.",
      role: "Strawberry Plains, TN",
    },
  ],
  ctaBanner: {
    headline: "GET A FREE ESTIMATE THIS WEEK.",
    sub: "Most estimates done in 24 hours. We come out, we measure, we write the number. Take it or leave it.",
    cta: {
      label: "Request my estimate",
      href: "/mockups/ironclad-roofing/estimate",
    },
  },
  footer: {
    blurb:
      "East Tennessee roofing and exteriors since 1987. Same crew, same county, same handshake. Asphalt, metal, gutters, siding, and storm work.",
  },
};
