import type { TemplateContent } from "../types";

export const content: TemplateContent = {
  business: {
    name: "Maple Street Bakery",
    legalName: "Maple Street Bakery & Cafe",
    address: "412 Maple Street\nBrattleboro, VT 05301",
    phone: "(802) 555-0179",
    email: "hello@maplestreetbakery.example",
    hours: [
      "Tue to Fri, 7am to 3pm",
      "Sat to Sun, 8am to 2pm",
      "Closed Mondays",
    ],
    socials: [
      { label: "Instagram", icon: "instagram", href: "#" },
      { label: "Facebook", icon: "facebook", href: "#" },
    ],
  },
  hero: {
    eyebrow: "Open Tuesday through Sunday",
    headline: "The kind of bakery you walk to.",
    sub: "A small kitchen on Maple Street making real bread, slow pastries, and the kind of espresso that earns a chair. Two bakers, one oven, no shortcuts.",
    secondaryLink: {
      label: "Today's bake list",
      href: "/mockups/maple-street-bakery/menu",
    },
  },
  services: {
    sectionLabel: "From the bench",
    sectionHeadline: "What we make. Mostly every day.",
    sectionSub:
      "Doughs are mixed the night before. Bread comes out of the oven by 7am. Pastries are baked through the morning. When it is gone for the day it is gone for the day!",
    items: [
      { name: "Country sourdough loaf", summary: "Long-fermented wild leaven. 32 hour cold proof." },
      { name: "Honey wheat sandwich loaf", summary: "Soft pan loaf, sliced on request. Vermont honey." },
      { name: "Cardamom butter morning bun", summary: "Laminated dough rolled with brown sugar and cardamom." },
      { name: "Almond and pear croissant", summary: "Three day croissant dough, frangipane, poached pear." },
      { name: "Maple oat scone", summary: "Real maple. Real cream. Crisp edges, tender inside." },
      { name: "Espresso and cortado", summary: "Speeder & Earl's beans, roasted in Burlington each Friday." },
    ],
  },
  about: {
    eyebrow: "About the bakery",
    headline: "Two bakers. One oven. The same starter since 2014.",
    body: [
      "Hannah Reilly started Maple Street out of a borrowed kitchen in 2014 with a copy of Tartine, a five-pound bag of T65, and an opinion that the neighborhood deserved better bread than it had.",
      "Twelve years later we still mix the night before, still bake by 7am, and still write the day's bake list in chalk on the wall. The starter has a name. We do not say what it is.",
    ],
    stats: [
      { label: "Year opened", value: "2014" },
      { label: "Loaves per week", value: "Around 480" },
      { label: "Saturdays sold out by 11am", value: "All of them" },
    ],
  },
  testimonials: [
    {
      quote:
        "I came in Saturday morning for a single loaf and left with a scone, a coffee, a tin of butter, and an espresso for my husband who was not even there. That is the level of trust this bakery has built.",
      name: "Sarah K.",
      role: "Customer since 2017",
    },
    {
      quote:
        "The almond croissant is the best one between Boston and Montreal and I have tested the claim with care.",
      name: "Daniel V.",
      role: "Pastry-chef-turned-loyal-civilian",
    },
    {
      quote:
        "Three years of Saturday mornings here. The bread is the bread. The chair by the window is the chair by the window. I do not need anywhere else.",
      name: "Annie L.",
      role: "Brattleboro resident",
    },
  ],
  ctaBanner: {
    headline: "Order for pickup. Skip the line. Keep the chair.",
    sub: "We open the order list at 6am for same-day. Friday and Saturday tend to fill by 9.",
    cta: {
      label: "Place a pickup order",
      href: "/mockups/maple-street-bakery/order-ahead",
    },
  },
  footer: {
    blurb:
      "A small neighborhood bakery on Maple Street, Brattleboro, since 2014. Bread, pastry, coffee, and a single corner chair worth fighting for.",
  },
};

export const menuSections = [
  {
    title: "Bread",
    note: "Out of the oven by 7am. Sold whole or half. Sliced on request.",
    items: [
      { name: "Country sourdough loaf", note: "32 hour cold proof", price: "$9" },
      { name: "Seeded country loaf", note: "Sesame, flax, sunflower", price: "$10" },
      { name: "Honey wheat sandwich loaf", note: "Vermont honey", price: "$8" },
      { name: "Olive and rosemary fougasse", note: "Friday only", price: "$11" },
      { name: "Walnut levain", note: "Saturday only, in limited number", price: "$12" },
    ],
  },
  {
    title: "Pastry",
    note: "Baked through the morning. When it is gone it is gone.",
    items: [
      { name: "Almond and pear croissant", note: "Three day dough, frangipane, poached pear", price: "$6.50" },
      { name: "Plain butter croissant", note: "Plugra butter, lightly burnished", price: "$5.25" },
      { name: "Cardamom butter morning bun", note: "Laminated, brown sugar, cardamom", price: "$5.75" },
      { name: "Maple oat scone", note: "Real maple, real cream", price: "$4.75" },
      { name: "Chocolate brioche knot", note: "Saturday and Sunday only", price: "$5.50" },
    ],
  },
  {
    title: "Coffee and drinks",
    note: "Speeder & Earl's beans from Burlington, roasted each Friday.",
    items: [
      { name: "Espresso", note: "Two shots", price: "$3.75" },
      { name: "Cortado", note: "Two shots, four ounces of milk", price: "$4.50" },
      { name: "Cappuccino", note: "Dry, traditional", price: "$4.75" },
      { name: "Drip coffee", note: "Refills on the house", price: "$3.50" },
      { name: "Hot chocolate", note: "Bittersweet, no sugar added", price: "$4.50" },
    ],
  },
];
