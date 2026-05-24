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
      href: "/mockups/yogacentric-studio/services",
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
      avatar: "/mockups/yogacentric-studio/reviewer-michelle.jpg",
    },
    {
      quote:
        "These classes have brought so much peace into my life. I'm more balanced and calm.",
      name: "Teresa Van Maerssen",
      role: "Wellness seeker",
      avatar: "/mockups/yogacentric-studio/reviewer-teresa.jpg",
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
    {
      quote:
        "The community here is real. You walk in stressed and leave feeling like yourself again.",
      name: "James Ortiz",
      role: "Power flow regular",
      avatar: "/mockups/yogacentric-studio/reviewer-james.jpg",
    },
    {
      quote:
        "Best decision I made this year was trying a beginner class. Welcoming from the first minute.",
      name: "Sarah Mitchell",
      role: "New member",
      avatar: "/mockups/yogacentric-studio/reviewer-sarah.jpg",
    },
  ],
  ctaBanner: {
    headline: "Transform your body, mind, and life",
    sub: "Whether you're looking to improve your health, reduce stress, or enhance your well-being, yoga offers benefits that carry into your everyday life.",
    cta: {
      label: "Book a class",
      href: "/mockups/yogacentric-studio/contact",
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
  "/mockups/yogacentric-studio/svc-beginner.jpg",
  "/mockups/yogacentric-studio/svc-power.jpg",
  "/mockups/yogacentric-studio/svc-restorative.jpg",
];

export type TrainerListItem = {
  name: string;
  specialty: string;
  photo: string;
  slug?: string;
};

export type TrainerProfile = {
  slug: string;
  name: string;
  specialty: string;
  photo: string;
  bio: string;
  coachingTitle: string;
  coachingBody: string;
  servicesHeadline: string;
  servicesIntro: string;
  offeredServices: { title: string; description: string }[];
  galleryImages: string[];
  testimonials: { quote: string; name: string; role: string; avatar?: string }[];
};

export const trainers: TrainerListItem[] = [
  {
    name: "Robin",
    specialty: "Vinyasa & Power Yoga",
    photo: "/mockups/yogacentric-studio/trainer-robin.jpg",
    slug: "robin",
  },
  {
    name: "Catherine",
    specialty: "Reiki & Restorative Yoga",
    photo: "/mockups/yogacentric-studio/trainer-catherine.jpg",
    slug: "catherine",
  },
  {
    name: "Brandi",
    specialty: "Restorative & Breathwork",
    photo: "/mockups/yogacentric-studio/trainer-brandi.jpg",
    slug: "brandi",
  },
  {
    name: "Angela",
    specialty: "Sound Healing & Meditation",
    photo: "/mockups/yogacentric-studio/trainer-angela.jpg",
    slug: "angela",
  },
  {
    name: "Lisseth",
    specialty: "Studio Director & Hatha",
    photo: "/mockups/yogacentric-studio/trainer-lisseth.jpg",
    slug: "lisseth",
  },
  {
    name: "Anastasia",
    specialty: "Gentle Flow & Beginners",
    photo: "/mockups/yogacentric-studio/trainer-robin-2.jpg",
    slug: "anastasia",
  },
];

export const trainerProfiles: Record<string, TrainerProfile> = {
  robin: {
    slug: "robin",
    name: "Robin",
    specialty: "Vinyasa & Power Yoga",
    photo: "/mockups/yogacentric-studio/trainer-robin.jpg",
    bio: "A passionate instructor at YogaCentric for more than a decade, Robin specializes in Vinyasa and power-focused flows, offering dynamic sessions that build endurance, strength, and mental resilience.",
    coachingTitle: "Personalized coaching",
    coachingBody:
      "One-on-one sessions with our yoga instructors. Get personalized guidance and encouragement to reach your specific goals.",
    servicesHeadline: "Services offered",
    servicesIntro:
      "With years of experience at our Clifton studio, Robin is dedicated to helping you achieve your wellness goals through yoga. Learn more about her approach and how she can support your journey.",
    offeredServices: [
      {
        title: "Private yoga sessions",
        description: "One-on-one sessions focused on personalized instruction and individual goals.",
      },
      {
        title: "Group classes",
        description: "Dynamic group sessions designed to improve flexibility, strength, and mindfulness.",
      },
      {
        title: "Workshops and retreats",
        description: "Immersive workshops and retreats that deepen your practice and enhance your overall wellness.",
      },
    ],
    galleryImages: [
      "/mockups/yogacentric-studio/community.jpg",
      "/mockups/yogacentric-studio/svc-power.jpg",
      "/mockups/yogacentric-studio/benefits.jpg",
      "/mockups/yogacentric-studio/svc-beginner.jpg",
    ],
    testimonials: [
      {
        quote: "Robin pushes you just enough. I leave every class feeling stronger and more centered.",
        name: "Michelle Malone",
        role: "Yoga enthusiast",
      },
      {
        quote: "The energy in Robin's vinyasa classes is incredible. I always leave feeling refreshed and motivated.",
        name: "Teresa Van Maerssen",
        role: "Wellness seeker",
      },
      {
        quote: "I've never felt so connected to my body and mind. Her classes are truly transformative.",
        name: "Raymond J Haskoor",
        role: "Regular member",
      },
      {
        quote: "Practicing with Robin has helped me find a sense of peace and balance I didn't know I was missing.",
        name: "Valentina Lazirko",
        role: "14-year student",
      },
      {
        quote: "Joining Robin's classes has been life-changing. I feel more grounded and energized every day.",
        name: "Sarah Mitchell",
        role: "Weekend warrior",
      },
      {
        quote: "She meets you where you are — beginners feel welcome, and experienced yogis still get a challenge.",
        name: "James Ortiz",
        role: "Power flow regular",
      },
    ],
  },
  catherine: {
    slug: "catherine",
    name: "Catherine",
    specialty: "Reiki & Restorative Yoga",
    photo: "/mockups/yogacentric-studio/trainer-catherine.jpg",
    bio: "Catherine blends Reiki energy work with restorative yoga to help students release tension and restore balance. Her calm, grounding classes are a favorite for anyone recovering from stress or returning to the mat after time away.",
    coachingTitle: "Personalized coaching",
    coachingBody:
      "One-on-one Reiki and restorative sessions tailored to your body, breath, and energy. Gentle guidance for students who want a slower, healing-focused practice.",
    servicesHeadline: "Services offered",
    servicesIntro:
      "Catherine brings years of Reiki training and restorative experience to YogaCentric. Explore how her sessions can support deep rest, nervous-system calm, and renewed vitality.",
    offeredServices: [
      {
        title: "Reiki sessions",
        description: "Hands-on energy work to promote relaxation, clarity, and emotional balance.",
      },
      {
        title: "Restorative yoga",
        description: "Supported poses held with props so the body can fully soften and restore.",
      },
      {
        title: "Healing workshops",
        description: "Themed workshops combining Reiki, restorative postures, and guided meditation.",
      },
    ],
    galleryImages: [
      "/mockups/yogacentric-studio/svc-restorative.jpg",
      "/mockups/yogacentric-studio/community.jpg",
      "/mockups/yogacentric-studio/benefits.jpg",
      "/mockups/yogacentric-studio/svc-beginner.jpg",
    ],
    testimonials: [
      {
        quote: "Catherine's Reiki sessions left me feeling lighter than I have in years. Truly healing.",
        name: "Donna Keane",
        role: "Restorative regular",
      },
      {
        quote: "I come for the stillness. Her restorative classes are the reset my week needs.",
        name: "Paula Russo",
        role: "Clifton local",
      },
      {
        quote: "She holds space with such care. Every student feels seen and supported.",
        name: "Mark DeGise",
        role: "Evening class member",
      },
      {
        quote: "After injury, Catherine helped me ease back in without pressure. I'm grateful.",
        name: "Lisa Annunziata",
        role: "Returning student",
      },
      {
        quote: "The Full Moon Reiki workshop was magical. I signed up for the next one immediately.",
        name: "Karen Miller",
        role: "Workshop attendee",
      },
      {
        quote: "Gentle, knowledgeable, and intuitive — exactly what restorative practice should feel like.",
        name: "Tom Gargiulo",
        role: "Monthly member",
      },
    ],
  },
  brandi: {
    slug: "brandi",
    name: "Brandi",
    specialty: "Restorative & Breathwork",
    photo: "/mockups/yogacentric-studio/trainer-brandi.jpg",
    bio: "Brandi guides restorative flows and conscious breathwork that quiet the mind and open the body. Her teaching emphasizes slow movement, intentional breathing, and the kind of deep rest busy people rarely make time for.",
    coachingTitle: "Personalized coaching",
    coachingBody:
      "Private breathwork and restorative sessions designed around your stress patterns, mobility, and goals. Learn techniques you can carry off the mat into everyday life.",
    servicesHeadline: "Services offered",
    servicesIntro:
      "Whether you need to unwind after a long week or build a sustainable breath practice, Brandi meets you with patience and clear instruction rooted in Clifton studio tradition.",
    offeredServices: [
      {
        title: "Breathwork sessions",
        description: "Guided breathing practices to reduce stress, improve focus, and support recovery.",
      },
      {
        title: "Restorative classes",
        description: "Slow, prop-supported classes that release physical tension and mental clutter.",
      },
      {
        title: "Stress-release workshops",
        description: "Focused workshops pairing breath techniques with restorative sequencing.",
      },
    ],
    galleryImages: [
      "/mockups/yogacentric-studio/benefits.jpg",
      "/mockups/yogacentric-studio/svc-restorative.jpg",
      "/mockups/yogacentric-studio/svc-beginner.jpg",
      "/mockups/yogacentric-studio/community.jpg",
    ],
    testimonials: [
      {
        quote: "Brandi's breathwork changed how I handle stress at work. Simple tools, big impact.",
        name: "Jennifer Wu",
        role: "Corporate member",
      },
      {
        quote: "I leave her restorative classes feeling like I slept eight hours.",
        name: "Chris Paladino",
        role: "Saturday regular",
      },
      {
        quote: "She explains breath in a way that finally clicks. No jargon, just results.",
        name: "Maria Santos",
        role: "New to breathwork",
      },
      {
        quote: "The studio feels safer when Brandi is teaching. Warm, steady, and present.",
        name: "David Chen",
        role: "3-year member",
      },
      {
        quote: "My shoulders used to live at my ears. Restorative with Brandi fixed that.",
        name: "Amy Rothfeld",
        role: "Desk worker",
      },
      {
        quote: "Perfect pace for beginners who want calm without feeling lost.",
        name: "Brian O'Neill",
        role: "Intro pass holder",
      },
    ],
  },
  angela: {
    slug: "angela",
    name: "Angela",
    specialty: "Sound Healing & Meditation",
    photo: "/mockups/yogacentric-studio/trainer-angela.jpg",
    bio: "Angela leads sound healing and meditation experiences that invite deep stillness. From crystal bowls to guided silence, her sessions help students unplug, listen inward, and leave with a steadier mind.",
    coachingTitle: "Personalized coaching",
    coachingBody:
      "One-on-one meditation coaching and private sound sessions for students building a consistent mindfulness practice or exploring healing sound for the first time.",
    servicesHeadline: "Services offered",
    servicesIntro:
      "Angela's work at YogaCentric connects ancient sound traditions with accessible meditation for modern lives. Discover how her offerings can anchor your week.",
    offeredServices: [
      {
        title: "Sound healing sessions",
        description: "Immersive sound baths using bowls and chimes to promote relaxation and inner calm.",
      },
      {
        title: "Meditation classes",
        description: "Guided and silent meditation practices for focus, sleep, and emotional balance.",
      },
      {
        title: "Mindfulness workshops",
        description: "Special events blending sound, breath, and meditation techniques you can practice at home.",
      },
    ],
    galleryImages: [
      "/mockups/yogacentric-studio/community.jpg",
      "/mockups/yogacentric-studio/svc-restorative.jpg",
      "/mockups/yogacentric-studio/benefits.jpg",
      "/mockups/yogacentric-studio/svc-power.jpg",
    ],
    testimonials: [
      {
        quote: "Angela's sound bath was the most relaxed I've felt in a decade. I booked again right away.",
        name: "Rachel Kim",
        role: "Sound bath fan",
      },
      {
        quote: "Meditation used to intimidate me. She makes it approachable and real.",
        name: "Steve Lambert",
        role: "First-time meditator",
      },
      {
        quote: "The bowls, the silence, the guidance — everything lands exactly where it should.",
        name: "Nina Patel",
        role: "Wellness blogger",
      },
      {
        quote: "I sleep better the night after Angela's class. That's worth every minute.",
        name: "Greg Morrison",
        role: "Evening student",
      },
      {
        quote: "Her voice and pacing create instant trust. You can let go the moment class starts.",
        name: "Helen Vasquez",
        role: "Retreat guest",
      },
      {
        quote: "Sound healing here beats anything I've tried on apps. In-person makes the difference.",
        name: "Jordan Lee",
        role: "Monthly unlimited",
      },
    ],
  },
  lisseth: {
    slug: "lisseth",
    name: "Lisseth",
    specialty: "Studio Director & Hatha",
    photo: "/mockups/yogacentric-studio/trainer-lisseth.jpg",
    bio: "As studio director, Lisseth keeps YogaCentric's Clifton community running while teaching thoughtful Hatha classes rooted in alignment and breath. She knows every corner of the schedule and every student who walks through the door.",
    coachingTitle: "Personalized coaching",
    coachingBody:
      "Private Hatha instruction and new-student guidance from the person who knows our studio best. Ideal for beginners, returning yogis, and anyone navigating class options.",
    servicesHeadline: "Services offered",
    servicesIntro:
      "Lisseth has helped grow YogaCentric since 2005. Her Hatha classes build strength and awareness step by step — and as director, she ensures every visit feels welcoming.",
    offeredServices: [
      {
        title: "Hatha yoga classes",
        description: "Alignment-focused classes that build stability, breath awareness, and confidence.",
      },
      {
        title: "Private instruction",
        description: "One-on-one sessions tailored to your level, injuries, and long-term goals.",
      },
      {
        title: "New student orientation",
        description: "Intro sessions covering studio etiquette, props, and how to choose the right classes.",
      },
    ],
    galleryImages: [
      "/mockups/yogacentric-studio/svc-beginner.jpg",
      "/mockups/yogacentric-studio/community.jpg",
      "/mockups/yogacentric-studio/svc-power.jpg",
      "/mockups/yogacentric-studio/benefits.jpg",
    ],
    testimonials: [
      {
        quote: "Lisseth welcomed me on day one and matched me to the perfect classes. The studio runs like clockwork.",
        name: "Patricia Gomez",
        role: "New member",
      },
      {
        quote: "Her Hatha classes are clear, patient, and never rushed. I finally understand alignment.",
        name: "Frank DiMarco",
        role: "Hatha regular",
      },
      {
        quote: "As director she solves problems fast — billing, schedule, anything. Real leadership.",
        name: "Susan Wright",
        role: "Family plan member",
      },
      {
        quote: "Fourteen years at this studio and Lisseth is still the heart of why I stay.",
        name: "Valentina Lazirko",
        role: "Longtime student",
      },
      {
        quote: "She remembers your name, your goals, your last class. That personal touch matters.",
        name: "Kevin Hartman",
        role: "Weekday attendee",
      },
      {
        quote: "If you're nervous about starting yoga, take her intro session. You'll feel at home immediately.",
        name: "Diane Foster",
        role: "Beginner graduate",
      },
    ],
  },
  anastasia: {
    slug: "anastasia",
    name: "Anastasia",
    specialty: "Gentle Flow & Beginners",
    photo: "/mockups/yogacentric-studio/trainer-robin-2.jpg",
    bio: "Anastasia specializes in gentle flow and true-beginner classes where no prior experience is required. She breaks poses into simple steps, celebrates small wins, and helps new students build confidence without intimidation.",
    coachingTitle: "Personalized coaching",
    coachingBody:
      "One-on-one beginner coaching for students who want extra support before joining group classes. Patient, encouraging, and focused on foundations.",
    servicesHeadline: "Services offered",
    servicesIntro:
      "New to yoga or returning after a long break? Anastasia's gentle flow classes at our Clifton studio are the friendliest place to start — mats, props, and encouragement included.",
    offeredServices: [
      {
        title: "Beginner yoga",
        description: "Foundational poses, breathing, and studio basics in a no-pressure environment.",
      },
      {
        title: "Gentle flow",
        description: "Slow, linked movement that builds mobility without intensity or overwhelm.",
      },
      {
        title: "Intro workshops",
        description: "Short workshops covering form, props, and how to choose your next classes.",
      },
    ],
    galleryImages: [
      "/mockups/yogacentric-studio/svc-beginner.jpg",
      "/mockups/yogacentric-studio/benefits.jpg",
      "/mockups/yogacentric-studio/community.jpg",
      "/mockups/yogacentric-studio/svc-restorative.jpg",
    ],
    testimonials: [
      {
        quote: "I was terrified of my first class. Anastasia made me laugh, breathe, and come back.",
        name: "Melissa Grant",
        role: "Brand-new yogi",
      },
      {
        quote: "Gentle flow with her is my favorite hour of the week. Never competitive, always kind.",
        name: "Robert Ellis",
        role: "Senior beginner",
      },
      {
        quote: "She explains every pose like she's talking to a friend. Zero ego, all support.",
        name: "Tanya Brooks",
        role: "Intro workshop alum",
      },
      {
        quote: "My doctor said try yoga. Anastasia was the right first teacher — slow and safe.",
        name: "George Nunez",
        role: "Health referral",
      },
      {
        quote: "Finally a class where I don't feel behind everyone else. Pure encouragement.",
        name: "Hannah Cole",
        role: "Gentle flow regular",
      },
      {
        quote: "She checked on me after my first visit. That small gesture kept me coming back.",
        name: "Ian Murphy",
        role: "2-month member",
      },
    ],
  },
};

export function getTrainerProfile(slug: string): TrainerProfile | undefined {
  return trainerProfiles[slug];
}

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
    href: "/mockups/yogacentric-studio/pricing",
    featured: false,
  },
  {
    name: "10-Class Pass",
    price: "$120",
    unit: "save $80",
    description:
      "For those who value flexibility and want to experience our full class schedule before a monthly membership.",
    cta: "View pricing",
    href: "/mockups/yogacentric-studio/pricing",
    featured: false,
  },
  {
    name: "Custom Yoga Plans",
    price: "Let's talk",
    unit: "",
    description:
      "Whether you're building a foundation or deepening your practice, custom plans help you reach your wellness goals.",
    cta: "Contact us",
    href: "/mockups/yogacentric-studio/contact",
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
  { label: "Home", href: "/mockups/yogacentric-studio" },
  { label: "Services", href: "/mockups/yogacentric-studio/services" },
  { label: "Contact", href: "/mockups/yogacentric-studio/contact" },
  { label: "Pricing", href: "/mockups/yogacentric-studio/pricing" },
  { label: "Trainers", href: "/mockups/yogacentric-studio/trainers" },
];

export const contactNote =
  "YogaCentric strives to create a perfect balance between silence, self, and joy. Whether you're a beginner or a seasoned yogi, we can't wait to welcome you into the community.";

export const socialLinks = [
  { label: "Instagram", href: "https://www.instagram.com/yogacentricstudio/", icon: "Instagram" },
  { label: "Facebook",  href: "https://www.facebook.com/yogacentricstudio/",  icon: "Facebook"  },
  { label: "LinkedIn",  href: "https://www.linkedin.com/company/yogacentric", icon: "Linkedin"  },
  { label: "X",         href: "https://x.com/yogacentric",                   icon: "Twitter"   },
] as const;
