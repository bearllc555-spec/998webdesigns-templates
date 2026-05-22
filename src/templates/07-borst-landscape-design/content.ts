import type { TemplateContent } from "../types";

export const content: TemplateContent = {
  business: {
    name: "Borst Landscape & Design",
    legalName: "Borst Landscape & Design, Inc.",
    address: "260 W. Crescent Ave., Suite 1\nAllendale, NJ 07401",
    phone: "(201) 785-9400",
    email: "hello@borstlandscape.com",
    hours: [
      "Mon to Fri, 9am to 5pm",
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
    eyebrow: "Serving Bergen County since 1989",
    headline: "Let us bring life to your landscape.",
    sub: "A nationally recognized, award-winning design-build firm. Thirty-five years of transforming Bergen County properties with an organic, environmentally conscious hand.",
    secondaryLink: {
      label: "Browse our services",
      href: "/templates/borst-landscape-design/services",
    },
  },
  services: {
    sectionLabel: "What we do",
    sectionHeadline: "A full-service landscape practice.",
    sectionSub:
      "Design through installation through the season-by-season care that keeps a property looking the way it should. One team, on the property, year after year.",
    items: [
      { name: "Landscape design & build", summary: "Master plans, planting design, and full installation by certified technicians who have built it before." },
      { name: "Garden design & maintenance", summary: "Seasonal color rotations, perennial gardens, and the trimming schedule that keeps them composed." },
      { name: "Organic lawn care", summary: "Organic-based fertility programs, soil testing, and overseeding tuned to Bergen County turf." },
      { name: "Tree & shrub care", summary: "Pruning, fertilization, and disease prevention from a certified arborist on staff." },
      { name: "Mosquito, flea & tick control", summary: "Organic and conventional programs from a licensed applicator, on a schedule that actually works." },
      { name: "Commercial snow removal", summary: "Plowing, salting, and sidewalk service for commercial properties across northern New Jersey." },
    ],
  },
  about: {
    eyebrow: "About the firm",
    headline: "Mark Borst started this firm in 1989. He still runs it.",
    body: [
      "Borst Landscape & Design is a full-service, award-winning landscape design-build firm headquartered in Allendale, New Jersey. Founded by Mark Borst in 1989 with one truck and one lawn mower, the firm has grown into one of the most respected landscape practices in Bergen County.",
      "The team is built around a stable bench of landscape designers, certified installation technicians, and seasonal maintenance managers. We work on residential estates, commercial properties, and the long-term, year-after-year maintenance contracts that hold them together.",
    ],
    stats: [
      { label: "Founded", value: "1989" },
      { label: "Years serving Bergen County", value: "35+" },
      { label: "Active maintenance accounts", value: "400+" },
    ],
  },
  testimonials: [
    {
      quote:
        "Mark and his crew transformed a tired front yard into something the neighbors actually stop to photograph. Two years later, the maintenance team still shows up on the same day every week.",
      name: "Jennifer K.",
      role: "Homeowner, Ridgewood",
    },
    {
      quote:
        "We hired Borst to redesign a half-acre back garden. They presented three options, took our notes, and delivered something better than any of them.",
      name: "Robert and Lila M.",
      role: "Homeowners, Saddle River",
    },
    {
      quote:
        "Borst has maintained our corporate campus for the better part of a decade. Snow at 5am, fresh mulch in April, and a real human on the phone when we need anything in between.",
      name: "Daniel W.",
      role: "Facilities manager, Mahwah",
    },
  ],
  ctaBanner: {
    headline: "Get in touch for a free on-site quote.",
    sub: "A designer will walk the property, listen to what you have in mind, and follow up with a written estimate within the week.",
    cta: {
      label: "Request a quote",
      href: "/templates/borst-landscape-design/contact",
    },
  },
  footer: {
    blurb:
      "An award-winning, full-service landscape design-build and maintenance firm in Allendale, NJ. Serving Bergen County and the surrounding North Jersey area since 1989.",
  },
};

export const process = [
  {
    label: "Step 01",
    title: "Tell us about the property",
    body: "Share a few notes and photos. We will follow up to schedule an on-site visit at no cost.",
  },
  {
    label: "Step 02",
    title: "Walk the property with a designer",
    body: "A senior designer walks the site, listens to what you have in mind, and asks the questions that shape the plan.",
  },
  {
    label: "Step 03",
    title: "Receive a written plan and quote",
    body: "Within the week, you receive a clear written scope, a planting list, and an installation schedule tied to the season.",
  },
];

export const portfolio = [
  {
    title: "Stone terrace and perennial garden",
    location: "Ridgewood, NJ",
    summary:
      "A bluestone terrace anchors a layered perennial garden built for four-season interest. Installed over six weeks; maintained year-round.",
  },
  {
    title: "Front entry redesign with boxwood parterre",
    location: "Saddle River, NJ",
    summary:
      "A formal boxwood parterre frames a re-graded entry walk and replaces a tired foundation planting. Designed to scale into thirty years.",
  },
  {
    title: "Corporate campus seasonal program",
    location: "Mahwah, NJ",
    summary:
      "A four-acre commercial property under a year-round maintenance contract. Spring color, summer turf, fall cleanup, and snow.",
  },
  {
    title: "Pool surround and outdoor kitchen",
    location: "Franklin Lakes, NJ",
    summary:
      "An integrated pool surround, outdoor kitchen, and shade-tree planting on a half-acre back property. Hardscape by our masonry team.",
  },
  {
    title: "Estate woodland edge",
    location: "Upper Saddle River, NJ",
    summary:
      "A two-acre woodland edge planted with native understory and a deer-resistant perennial palette. Year-three growing in.",
  },
  {
    title: "Streetscape replant",
    location: "Allendale, NJ",
    summary:
      "A municipal streetscape replant of twenty-two flowering trees and a curb-side perennial bed. Installed in one weekend.",
  },
];

export const team = [
  {
    name: "Mark Borst",
    role: "Founder & President",
    bio: "Started the firm in 1989 with one truck and one mower. Still walks every major design property with the client. Lives in Allendale.",
  },
  {
    name: "Christine Hoover",
    role: "Senior Designer",
    bio: "Joined in 2007. Leads the residential design team. Carries a soft spot for hydrangeas and a thirty-year planting horizon.",
  },
  {
    name: "Anthony DiPasquale",
    role: "Operations Manager",
    bio: "Twenty years in landscape installation. Runs the field crews and makes sure the schedule holds together through July.",
  },
  {
    name: "Rebecca Liu",
    role: "Account Manager",
    bio: "Your single point of contact for maintenance accounts. Returns calls the same day. Has met most of your dogs.",
  },
];
