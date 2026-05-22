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
    eyebrow: "Bergen County, NJ - since 1989",
    headline: "Let us bring life to your landscape.",
    sub: "An award-winning, full-service landscape design-build firm in Allendale, New Jersey. Thirty-five years of transforming Bergen County properties with an organic, environmentally conscious hand.",
    secondaryLink: {
      label: "Browse services",
      href: "/templates/borst-landscape-design/services",
    },
  },
  services: {
    sectionLabel: "Services",
    sectionHeadline: "Explore our wide range of services.",
    sectionSub:
      "Design through installation through the season-by-season care that keeps a property looking the way it should. One team, on the property, year after year.",
    items: [
      { name: "Landscape design", summary: "Master plans, planting design, and concept drawings tailored to your property and your patience." },
      { name: "Flower planting", summary: "Seasonal color rotations and perennial gardens, planted by hand, in the right window for the zone." },
      { name: "Garden maintenance", summary: "Weekly visits to keep beds composed, edges crisp, and the perennial garden looking like the day it was installed." },
      { name: "Lawn mowing", summary: "Crew-cut lawns on a consistent schedule, with organic-based fertility programs tuned to Bergen County turf." },
      { name: "Leaf removal", summary: "Fall and spring cleanups handled in a single visit, with bagged or mulched leaves per your preference." },
      { name: "Pond maintenance", summary: "Year-round care for residential water features - filtration, planting, and seasonal opening and closing." },
    ],
  },
  about: {
    eyebrow: "About us",
    headline: "Why choose us?",
    body: [
      "An award-winning, nationally recognized firm with thirty-five years of work across Bergen County, built around a stable bench of designers, certified installation technicians, and maintenance managers.",
    ],
    stats: [
      { label: "Founded", value: "1989" },
      { label: "Years serving Bergen County", value: "35+" },
      { label: "Active maintenance accounts", value: "400+" },
    ],
  },
  testimonials: [
    { quote: "Fantastic landscaping service with remarkable results. Highly recommended!", name: "John Carter", role: "@johncarter" },
    { quote: "Transformed our yard into a beautiful outdoor oasis, absolutely stunning.", name: "Sophie Moore", role: "@sophiemoore" },
    { quote: "Exceptional service and breathtaking results. Our garden looks amazing!", name: "Matt Cannon", role: "@mattcannon" },
    { quote: "Highly professional team delivering top-notch landscaping every single time.", name: "Lilly Woods", role: "@lillywoods" },
    { quote: "Impressive transformation of our outdoor space, couldn't be happier!", name: "Sandy Houston", role: "@sandyhouston" },
    { quote: "Expert landscapers who deliver incredible results. Our yard is gorgeous!", name: "Patrick Meyer", role: "@patrickmeyer" },
    { quote: "Unmatched expertise and dedication to landscaping perfection every time.", name: "Kathie Corl", role: "@kathiecorl" },
    { quote: "Exceeded all our expectations with their landscaping skills and creativity.", name: "Andy Smith", role: "@andysmith" },
  ],
  ctaBanner: {
    headline: "Get in touch",
    sub: "Get in touch to design a beautiful landscape today.",
    cta: {
      label: "Get in touch",
      href: "/templates/borst-landscape-design/contact",
    },
  },
  footer: {
    blurb:
      "An award-winning, full-service landscape design-build and maintenance firm in Allendale, NJ. Serving Bergen County and the surrounding North Jersey area since 1989.",
  },
};

// Featured testimonial band (full-width image + overlay)
export const featuredTestimonial = {
  quote: "Reliable and meticulous work made the renovation process easy.",
  name: "Sophie Moore",
  role: "Ridgewood, NJ",
  avatar: "/templates/borst-landscape-design/avatar-sophie-moore.jpg",
  image: "/templates/borst-landscape-design/gallery-01.jpg",
};

// Why-choose-us two pillars
export const pillars = [
  {
    icon: "/templates/borst-landscape-design/icon-eco-friendly.svg",
    title: "Eco friendly",
    body: "Organic-based fertility programs, IPM, and a careful hand with the chemistry. Better for the property and the dog.",
  },
  {
    icon: "/templates/borst-landscape-design/icon-love.svg",
    title: "Done with love",
    body: "The same crews on your property year after year. People who actually care how the bed looks at the end of the day.",
  },
];

// Service card photo + icon mapping
export const serviceAssets = [
  { thumb: "/templates/borst-landscape-design/svc-garden-design.jpg", icon: "/templates/borst-landscape-design/icon-garden-design.svg" },
  { thumb: "/templates/borst-landscape-design/svc-flower-planting.jpg", icon: "/templates/borst-landscape-design/icon-flower-planting.svg" },
  { thumb: "/templates/borst-landscape-design/svc-garden-maintenance.jpg", icon: "/templates/borst-landscape-design/icon-garden-maintenance.svg" },
  { thumb: "/templates/borst-landscape-design/svc-lawn-mowing.jpg", icon: "/templates/borst-landscape-design/icon-lawn-mowing.svg" },
  { thumb: "/templates/borst-landscape-design/svc-leaf-removal.jpg", icon: "/templates/borst-landscape-design/icon-leaf-removal.svg" },
  { thumb: "/templates/borst-landscape-design/svc-pond-maintenance.jpg", icon: "/templates/borst-landscape-design/icon-pond-maintenance.svg" },
];

// Six portfolio images
export const portfolio = [
  { title: "Stone terrace and perennial garden", location: "Ridgewood, NJ", image: "/templates/borst-landscape-design/gallery-01.jpg" },
  { title: "Front entry redesign with boxwood parterre", location: "Saddle River, NJ", image: "/templates/borst-landscape-design/gallery-02.jpg" },
  { title: "Pool surround and outdoor kitchen", location: "Franklin Lakes, NJ", image: "/templates/borst-landscape-design/gallery-03.jpg" },
  { title: "Corporate campus seasonal program", location: "Mahwah, NJ", image: "/templates/borst-landscape-design/gallery-04.jpg" },
  { title: "Estate woodland edge", location: "Upper Saddle River, NJ", image: "/templates/borst-landscape-design/gallery-05.jpg" },
  { title: "Streetscape replant", location: "Allendale, NJ", image: "/templates/borst-landscape-design/gallery-06.jpg" },
];

// 3-step process
export const process = [
  { label: "STEP 01", title: "Contact us", body: "Tell us about your property in a short note. We follow up the same business day to schedule a walk-through." },
  { label: "STEP 02", title: "Schedule an appointment", body: "A senior designer walks the site, listens to what you have in mind, and asks the questions that shape the plan." },
  { label: "STEP 03", title: "Get your project done", body: "Within the week, you receive a written scope, a planting list, and an install schedule tied to the season." },
];

// 8 testimonial avatars
export const testimonialAvatars = [
  "/templates/borst-landscape-design/avatar-john-carter.jpg",
  "/templates/borst-landscape-design/avatar-sophie-moore.jpg",
  "/templates/borst-landscape-design/avatar-matt-cannon.jpg",
  "/templates/borst-landscape-design/avatar-lilly-woods.jpg",
  "/templates/borst-landscape-design/avatar-sandy-houston.jpg",
  "/templates/borst-landscape-design/avatar-patrick-meyer.jpg",
  "/templates/borst-landscape-design/avatar-kathie-corl.jpg",
  "/templates/borst-landscape-design/avatar-andy-smith.jpg",
];

// Blog preview
export const blogPosts = [
  {
    title: "Landscape design 101: Basics for a beautiful yard",
    category: "Articles",
    date: "Aug 19, 2024",
    image: "/templates/borst-landscape-design/blog-landscape-design-101.jpg",
    href: "#",
  },
  {
    title: "How to choose a garden that suits your personal needs: A step-by-step guide",
    category: "News",
    date: "Aug 19, 2024",
    image: "/templates/borst-landscape-design/blog-how-to-choose-garden.jpg",
    href: "#",
  },
];

// Instagram strip
export const instagramTiles = [
  "/templates/borst-landscape-design/ig-01.jpg",
  "/templates/borst-landscape-design/ig-02.jpg",
  "/templates/borst-landscape-design/ig-03.jpg",
  "/templates/borst-landscape-design/ig-04.jpg",
];

// Footer pages columns
export const footerLinks = {
  mainPages: [
    { label: "Home", href: "/templates/borst-landscape-design" },
    { label: "About", href: "/templates/borst-landscape-design/about" },
    { label: "Services", href: "/templates/borst-landscape-design/services" },
    { label: "Portfolio", href: "/templates/borst-landscape-design/portfolio" },
    { label: "Contact", href: "/templates/borst-landscape-design/contact" },
  ],
  utility: [
    { label: "Free quote", href: "/templates/borst-landscape-design/contact" },
    { label: "Maintenance accounts", href: "/templates/borst-landscape-design/services" },
    { label: "Commercial snow", href: "/templates/borst-landscape-design/services" },
    { label: "Careers", href: "#" },
    { label: "Privacy policy", href: "#" },
    { label: "Terms", href: "#" },
  ],
};
