import type { TemplateContent } from "../types";

export const content: TemplateContent = {
  business: {
    name: "YogaCentric",
    legalName: "YogaCentric Studio",
    address: "238 Colfax Ave\nClifton, NJ 07013",
    phone: "(973) 778-1344",
    email: "Lisseth@yogacentricstudio.com",
    hours: [
      "Mon to Fri, morning and evening classes",
      "Saturday workshops by schedule",
      "Sunday restorative and special events",
    ],
    socials: [
      { label: "Instagram", icon: "instagram", href: "#" },
      { label: "Facebook", icon: "facebook", href: "#" },
    ],
  },
  hero: {
    eyebrow: "Clifton, NJ - since 2005",
    headline: "Find your balance with YogaCentric.",
    sub: "Join us in transforming your body and mind through yoga classes for every level - from first-time beginners to seasoned practitioners across Passaic County.",
    secondaryLink: {
      label: "Explore classes",
      href: "/templates/yogacentric-studio/services",
    },
  },
  services: {
    sectionLabel: "Services",
    sectionHeadline: "Yoga for every body and every mind",
    sectionSub:
      "Explore our diverse offerings designed to help you find balance, flexibility, and peace of mind.",
    items: [
      {
        name: "Beginner Yoga",
        summary:
          "Perfect for those just starting their yoga journey. Basic postures, breathing techniques, and alignment in a patient, welcoming room. No experience required - just an open mind.",
      },
      {
        name: "Gentle Flow",
        summary:
          "A slower-paced vinyasa that links breath to movement without the intensity. Ideal for easing back into practice or building a sustainable daily habit.",
      },
      {
        name: "Yoga Centric",
        summary:
          "Our signature class - a full-body flow that blends strength, flexibility, and mindfulness. Build stamina, improve mobility, and leave energized.",
      },
    ],
  },
  about: {
    eyebrow: "Who we are",
    headline: "Where wellness meets community",
    body: [
      "YogaCentric has been in Clifton since 2005. The sense of community is felt in the camaraderie our students share with their teachers. Our instructors come from a wide range of yoga backgrounds - from yoga fusion with weights to gentle yoga and everything in between.",
    ],
    stats: [
      { label: "Years in Clifton", value: "20+" },
      { label: "Google rating", value: "5.0" },
      { label: "Class styles", value: "12+" },
    ],
  },
  testimonials: [
    {
      quote:
        "Always a great class at YogaCentric. All the instructors are so kind and generous with their time and their patience.",
      name: "Michelle Malone",
      role: "Yoga enthusiast",
    },
    {
      quote:
        "These classes have brought so much peace into my life. I'm more balanced and calm.",
      name: "Teresa Van Maerssen",
      role: "Wellness seeker",
    },
    {
      quote:
        "Classes and teachers are excellent from beginning to advanced. I've been going for 3 years and look forward to each class.",
      name: "Raymond J Haskoor",
      role: "Regular member",
    },
    {
      quote:
        "Nice cozy intimate studio with parking. Friendly staff and clients. Every class is different - you will never be disappointed.",
      name: "Valentina Lazirko",
      role: "14-year student",
    },
  ],
  ctaBanner: {
    headline: "Transform your body, mind, and life",
    sub: "Whether you're looking to improve your health, reduce stress, or enhance your well-being, yoga offers benefits that carry into your everyday life.",
    cta: {
      label: "Book a class",
      href: "/templates/yogacentric-studio/contact",
    },
  },
  footer: {
    blurb:
      "A cozy Clifton studio creating balance between silence, self, and joy. Serving Passaic County since 2005.",
  },
};

export const heroStats = [
  { value: "20+", label: "Years in Clifton" },
  { value: "5.0", label: "Google rating" },
  { value: "12+", label: "Class styles" },
];

export const serviceImages = [
  "/templates/yogacentric-studio/svc-beginner.jpg",
  "/templates/yogacentric-studio/svc-power.jpg",
  "/templates/yogacentric-studio/svc-restorative.jpg",
];

export const trainers = [
  { name: "Robin", specialty: "Vinyasa & Power Yoga", photo: "/templates/yogacentric-studio/trainer-robin.jpg" },
  { name: "Catherine", specialty: "Reiki & Restorative Yoga", photo: "/templates/yogacentric-studio/trainer-catherine.jpg" },
  { name: "Brandi", specialty: "Restorative & Breathwork", photo: "/templates/yogacentric-studio/trainer-brandi.jpg" },
  { name: "Angela", specialty: "Sound Healing & Meditation", photo: "/templates/yogacentric-studio/trainer-angela.jpg" },
  { name: "Lisseth", specialty: "Studio Director & Hatha", photo: "/templates/yogacentric-studio/trainer-lisseth.jpg" },
  { name: "Robin", specialty: "Gentle Flow & Beginners", photo: "/templates/yogacentric-studio/trainer-robin-2.jpg" },
];

export const benefits = [
  {
    title: "Move with ease",
    body: "Yoga helps lengthen and strengthen muscles, improving flexibility and range of motion. With regular practice, you'll notice greater mobility, fewer aches, and better posture.",
  },
  {
    title: "Boost overall wellness",
    body: "Yoga supports a healthy heart, improves circulation, and promotes better sleep. It can also lower blood pressure and boost your immune system.",
  },
  {
    title: "Find peace of mind",
    body: "Breath control and mindfulness reduce stress, anxiety, and mental tension. Focus on the present moment and carry calm into your everyday life.",
  },
];

export const pricingPlans = [
  {
    name: "Drop-In Class",
    price: "$20",
    unit: "/class",
    description:
      "Ideal for unpredictable schedules or trying a class before committing to a membership.",
    cta: "View pricing",
    href: "/templates/yogacentric-studio/pricing",
    featured: false,
  },
  {
    name: "10-Class Pass",
    price: "$120",
    unit: "save $80",
    description:
      "For those who value flexibility and want to experience our full class schedule before a monthly membership.",
    cta: "View pricing",
    href: "/templates/yogacentric-studio/pricing",
    featured: false,
  },
  {
    name: "Custom Yoga Plans",
    price: "Let's talk",
    unit: "",
    description:
      "Whether you're building a foundation or deepening your practice, custom plans help you reach your wellness goals.",
    cta: "Contact us",
    href: "/templates/yogacentric-studio/contact",
    featured: false,
  },
];

export const faqs = [
  {
    q: "What types of yoga classes do you offer?",
    a: "We offer Beginner Yoga, Gentle Flow, our signature Yoga Centric class, restorative sessions, sound healing workshops, and special events like Full Moon Reiki & Restorative Yoga.",
  },
  {
    q: "Do I need prior experience to join?",
    a: "Not at all. Beginner Yoga and Gentle Flow are designed for first-timers. Our teachers are patient and generous with their time - many students return after years away from the mat.",
  },
  {
    q: "How do I book a class?",
    a: "Call us at (973) 778-1344, email Lisseth@yogacentricstudio.com, or use the contact form on this site. We'll get you on the schedule for your first visit.",
  },
  {
    q: "What should I bring to class?",
    a: "Wear comfortable clothes you can move in. We have mats available, but you're welcome to bring your own. Arrive a few minutes early - there's parking on-site.",
  },
  {
    q: "Are workshops and special events included in memberships?",
    a: "Drop-in and class passes cover regular studio classes. Workshops like Full Moon Reiki are ticketed separately and tend to sell out - watch our newsletter for dates.",
  },
  {
    q: "Where are you located?",
    a: "238 Colfax Ave, Clifton, NJ 07013. We're a cozy, intimate studio serving Clifton, Passaic County, and students who drive in from Fair Lawn and surrounding towns.",
  },
];

export const footerLinks = [
  { label: "Home", href: "/templates/yogacentric-studio" },
  { label: "Services", href: "/templates/yogacentric-studio/services" },
  { label: "Contact", href: "/templates/yogacentric-studio/contact" },
  { label: "Pricing", href: "/templates/yogacentric-studio/pricing" },
  { label: "Trainers", href: "/templates/yogacentric-studio/trainers" },
];

export const contactNote =
  "YogaCentric strives to create a perfect balance between silence, self, and joy. Whether you're a beginner or a seasoned yogi, we can't wait to welcome you into the community.";
