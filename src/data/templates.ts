// Template gallery manifest.
// Each entry maps to /public/t/demo-<slug>.html. Crafto template, 57 industry variants.
// Thumbnail is auto-screenshot to /public/thumbs/<slug>.jpg (generated separately).

export type Template = {
  slug: string;        // matches /public/t/demo-<slug>.html
  name: string;        // display name
  category: Category;
};

export type Category =
  | "Trades & local services"
  | "Professional services"
  | "Retail & commerce"
  | "Creative & agencies"
  | "Tech & SaaS"
  | "Hospitality & travel"
  | "Portfolio & freelance"
  | "General";

export const categories: Category[] = [
  "Trades & local services",
  "Professional services",
  "Retail & commerce",
  "Creative & agencies",
  "Tech & SaaS",
  "Hospitality & travel",
  "Portfolio & freelance",
  "General",
];

export const templates: Template[] = [
  // Trades & local services
  { slug: "barber", name: "Barber", category: "Trades & local services" },
  { slug: "beauty-salon", name: "Beauty Salon", category: "Trades & local services" },
  { slug: "elder-care", name: "Elder Care", category: "Trades & local services" },
  { slug: "gym-and-fitness", name: "Gym & Fitness", category: "Trades & local services" },
  { slug: "medical", name: "Medical", category: "Trades & local services" },
  { slug: "pizza-parlor", name: "Pizza Parlor", category: "Trades & local services" },
  { slug: "restaurant", name: "Restaurant", category: "Trades & local services" },
  { slug: "spa-salon", name: "Spa Salon", category: "Trades & local services" },
  { slug: "yoga-and-meditation", name: "Yoga & Meditation", category: "Trades & local services" },

  // Professional services
  { slug: "accounting", name: "Accounting", category: "Professional services" },
  { slug: "consulting", name: "Consulting", category: "Professional services" },
  { slug: "finance", name: "Finance", category: "Professional services" },
  { slug: "lawyer", name: "Lawyer", category: "Professional services" },
  { slug: "real-estate", name: "Real Estate", category: "Professional services" },
  { slug: "recruitment", name: "Recruitment", category: "Professional services" },

  // Retail & commerce
  { slug: "clothing-store", name: "Clothing Store", category: "Retail & commerce" },
  { slug: "decor-store", name: "Decor Store", category: "Retail & commerce" },
  { slug: "fashion-store", name: "Fashion Store", category: "Retail & commerce" },
  { slug: "jewellery-store", name: "Jewellery Store", category: "Retail & commerce" },
  { slug: "product-showcase", name: "Product Showcase", category: "Retail & commerce" },

  // Creative & agencies
  { slug: "blogger", name: "Blogger", category: "Creative & agencies" },
  { slug: "branding-agency", name: "Branding Agency", category: "Creative & agencies" },
  { slug: "branding-studio", name: "Branding Studio", category: "Creative & agencies" },
  { slug: "design-agency", name: "Design Agency", category: "Creative & agencies" },
  { slug: "digital-agency", name: "Digital Agency", category: "Creative & agencies" },
  { slug: "digital-agency-rtl", name: "Digital Agency (RTL)", category: "Creative & agencies" },
  { slug: "magazine", name: "Magazine", category: "Creative & agencies" },
  { slug: "photography", name: "Photography", category: "Creative & agencies" },
  { slug: "web-agency", name: "Web Agency", category: "Creative & agencies" },

  // Tech & SaaS
  { slug: "application", name: "Application", category: "Tech & SaaS" },
  { slug: "cryptocurrency", name: "Cryptocurrency", category: "Tech & SaaS" },
  { slug: "data-analysis", name: "Data Analysis", category: "Tech & SaaS" },
  { slug: "ebook", name: "Ebook", category: "Tech & SaaS" },
  { slug: "elearning", name: "E-learning", category: "Tech & SaaS" },
  { slug: "green-energy", name: "Green Energy", category: "Tech & SaaS" },
  { slug: "hosting", name: "Hosting", category: "Tech & SaaS" },
  { slug: "it-business", name: "IT Business", category: "Tech & SaaS" },
  { slug: "marketing", name: "Marketing", category: "Tech & SaaS" },
  { slug: "modern-business", name: "Modern Business", category: "Tech & SaaS" },
  { slug: "seo-agency", name: "SEO Agency", category: "Tech & SaaS" },
  { slug: "startup", name: "Startup", category: "Tech & SaaS" },

  // Hospitality & travel
  { slug: "conference", name: "Conference", category: "Hospitality & travel" },
  { slug: "hotel-and-resort", name: "Hotel & Resort", category: "Hospitality & travel" },
  { slug: "music-onepage", name: "Music (One Page)", category: "Hospitality & travel" },
  { slug: "travel-agency", name: "Travel Agency", category: "Hospitality & travel" },
  { slug: "wedding-invitation", name: "Wedding Invitation", category: "Hospitality & travel" },

  // Portfolio & freelance
  { slug: "freelancer", name: "Freelancer", category: "Portfolio & freelance" },
  { slug: "horizontal-portfolio", name: "Horizontal Portfolio", category: "Portfolio & freelance" },
  { slug: "interactive-portfolio", name: "Interactive Portfolio", category: "Portfolio & freelance" },
  { slug: "minimal-portfolio", name: "Minimal Portfolio", category: "Portfolio & freelance" },
  { slug: "scattered-portfolio", name: "Scattered Portfolio", category: "Portfolio & freelance" },
  { slug: "vertical-portfolio", name: "Vertical Portfolio", category: "Portfolio & freelance" },

  // General
  { slug: "architecture", name: "Architecture", category: "General" },
  { slug: "business", name: "Business", category: "General" },
  { slug: "charity", name: "Charity", category: "General" },
  { slug: "corporate", name: "Corporate", category: "General" },
  { slug: "logistics", name: "Logistics", category: "General" },
];

export const templateUrl = (slug: string) => `/t/demo-${slug}.html`;
export const thumbUrl = (slug: string) => `/thumbs/${slug}.jpg`;
