import type { TemplateContent } from "../types";

export const content: TemplateContent = {
  business: {
    name: "Borst Landscape & Design",
    legalName: "Borst Landscape & Design",
    address: "260 W Crescent Ave, Suite 1\nAllendale, NJ 07401",
    phone: "(201) 785-9400",
    email: "info@borstlandscape.com",
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
    eyebrow: "Allendale, NJ — since 1989",
    headline: "Let us bring life to your garden.",
    sub: "Lorem ipsum dolor sit amet consectetur adipiscing elidolor mattis sit phasellus mollis sit aliquam sit nullam neques.",
    secondaryLink: {
      label: "Browse services",
      href: "/templates/borst-landscape-design/services",
    },
  },
  services: {
    sectionLabel: "Services",
    sectionHeadline: "Explore our wide range of services.",
    sectionSub:
      "Lorem ipsum dolor sit amet consectetur sed tristique fermentum malesuada massa cursus vel vulputate lorem tincidunt.",
    items: [
      { name: "Garden design", summary: "Lorem ipsum dolor sit amet consectetur sed tristique fermentum malesuada massa." },
      { name: "Flower planting", summary: "Lorem ipsum dolor sit amet consectetur sed tristique fermentum malesuada massa." },
      { name: "Garden maintenance", summary: "Lorem ipsum dolor sit amet consectetur sed tristique fermentum malesuada massa." },
      { name: "Lawn mowing", summary: "Lorem ipsum dolor sit amet consectetur sed tristique fermentum malesuada massa." },
      { name: "Leaf removal", summary: "Lorem ipsum dolor sit amet consectetur sed tristique fermentum malesuada massa." },
      { name: "Pond maintenance", summary: "Lorem ipsum dolor sit amet consectetur sed tristique fermentum malesuada massa." },
    ],
  },
  about: {
    eyebrow: "About us",
    headline: "Why choose us?",
    body: [
      "Lorem ipsum dolor sit amet consectetur sed tristique fermentum malesuada massa cursus vel vulputate lorem tincidunt vulputate sollicitudin sit viverra viverra.",
    ],
    stats: [
      { label: "Founded", value: "1989" },
      { label: "Years serving Bergen County", value: "35+" },
      { label: "Active maintenance accounts", value: "400+" },
    ],
  },
  testimonials: [
    { quote: "Fantastic landscaping service with remarkable results. Highly recommended!", name: "John Carter", role: "@john_c" },
    { quote: "Transformed our yard into a beautiful outdoor oasis, absolutely stunning.", name: "Sophie Moore", role: "@sophi_m" },
    { quote: "Exceptional service and breathtaking results. Our garden looks amazing!", name: "Matt Cannon", role: "@matt_c" },
    { quote: "Highly professional team delivering top-notch landscaping every single time.", name: "Lilly Woods", role: "@lilly_w" },
    { quote: "Impressive transformation of our outdoor space, couldn't be happier!", name: "Sandy Houston", role: "@sandy_h" },
    { quote: "Expert landscapers who deliver incredible results. Our yard is gorgeous!", name: "Patrick Meyer", role: "@patrick_m" },
    { quote: "Unmatched expertise and dedication to landscaping perfection every time.", name: "Kathie Corl", role: "@kathie_c" },
    { quote: "Exceeded all our expectations with their landscaping skills and creativity.", name: "Andy Smith", role: "@andy_s" },
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
      "A full-service landscape design and maintenance company serving homeowners and commercial spaces with detail-first outdoor work.",
  },
};

// Featured work band under hero (GardenView Home V1 pattern)
export const featuredTestimonial = {
  quote: "Reliable and meticulous work made the renovation process easy.",
  name: "Sophie Moore",
  role: "Ridgewood, NJ",
  avatar: "/templates/borst-landscape-design/avatar-sophie-moore.jpg",
  image: "/templates/borst-landscape-design/meticulous-work.jpg",
};

// Why-choose-us two pillars
export const pillars = [
  {
    icon: "/templates/borst-landscape-design/icon-eco-friendly.svg",
    title: "Eco friendly",
    body: "Hendrerit sagittis pretium enim mi duis euol.",
  },
  {
    icon: "/templates/borst-landscape-design/icon-love.svg",
    title: "Done with love",
    body: "Hendrerit sagittis pretium enim mi duis euol.",
  },
];

// Service card photo + icon mapping
export const serviceAssets = [
  { thumb: "/templates/borst-landscape-design/slot-003.jpg", icon: "/templates/borst-landscape-design/icon-garden-design.svg" },
  { thumb: "/templates/borst-landscape-design/slot-004.jpg", icon: "/templates/borst-landscape-design/icon-flower-planting.svg" },
  { thumb: "/templates/borst-landscape-design/slot-005.jpg", icon: "/templates/borst-landscape-design/icon-garden-maintenance.svg" },
  { thumb: "/templates/borst-landscape-design/svc-lawn-mowing.jpg", icon: "/templates/borst-landscape-design/icon-lawn-mowing.svg" },
  { thumb: "/templates/borst-landscape-design/svc-leaf-removal.jpg", icon: "/templates/borst-landscape-design/icon-leaf-removal.svg" },
  { thumb: "/templates/borst-landscape-design/svc-pond-maintenance.jpg", icon: "/templates/borst-landscape-design/icon-pond-maintenance.svg" },
];

// Portfolio images (home grid — six tiles, 3x2)
export const portfolio = [
  { title: "Front entry redesign with boxwood parterre", location: "Saddle River, NJ", image: "/templates/borst-landscape-design/slot-006.jpg" },
  { title: "Pool surround and outdoor kitchen", location: "Franklin Lakes, NJ", image: "/templates/borst-landscape-design/slot-007.jpg" },
  { title: "Corporate campus seasonal program", location: "Mahwah, NJ", image: "/templates/borst-landscape-design/slot-008.jpg" },
  { title: "Estate woodland edge", location: "Upper Saddle River, NJ", image: "/templates/borst-landscape-design/slot-009.jpg" },
  { title: "Streetscape replant", location: "Allendale, NJ", image: "/templates/borst-landscape-design/slot-010.jpg" },
  { title: "Garden design and seasonal color", location: "Wyckoff, NJ", image: "/templates/borst-landscape-design/slot-011.jpg" },
];

// 3-step process
export const process = [
  { label: "STEP 01", title: "Contact us", body: "Lorem ipsum dolor sit amet consectetur sed tristique fermentum malesuada." },
  { label: "STEP 02", title: "Schedule an appointment", body: "Lorem ipsum dolor sit amet consectetur sed tristique fermentum malesuada." },
  { label: "STEP 03", title: "Get your project done", body: "Lorem ipsum dolor sit amet consectetur sed tristique fermentum malesuada." },
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
    image: "/templates/borst-landscape-design/slot-013.jpg",
    href: "#",
  },
  {
    title: "How to choose a garden that suits your personal needs: A step-by-step guide",
    category: "News",
    date: "Aug 19, 2024",
    image: "/templates/borst-landscape-design/slot-014.jpg",
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
