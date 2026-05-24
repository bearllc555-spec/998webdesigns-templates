export type TemplatePalette = {
  bg: string;
  ink: string;
  mutedInk: string;
  line: string;
  card: string;
  accent: string;
  accentInk: string;
  accentSoft: string;
};

export type TemplateTypeScale =
  | "editorial"
  | "modern"
  | "industrial"
  | "serene"
  | "warm"
  | "structured";

export type TemplateMeta = {
  slug: string;
  name: string;
  industry: string;
  tagline: string;
  publishedAt: string;
  /** Gallery card thumbnail; defaults to /mockups/{slug}/hero.jpg */
  galleryPreview?: string;
};

export type TemplateTheme = {
  meta: TemplateMeta;
  palette: TemplatePalette;
  type: {
    display: string;
    body: string;
    displayWeight: number;
    bodyWeight: number;
    displayTracking: string;
    scale: TemplateTypeScale;
  };
  radius: 0 | 4 | 8 | 16;
  density: "tight" | "normal" | "airy";
  motion: "still" | "subtle" | "lively";
  primaryCta: {
    label: string;
    href: string;
  };
  nav: {
    label: string;
    href: string;
  }[];
};

export type TemplateContent = {
  business: {
    name: string;
    legalName: string;
    address: string;
    phone: string;
    email: string;
    hours: string[];
    socials: {
      label: string;
      href: string;
      icon: "instagram" | "facebook" | "linkedin" | "twitter" | "youtube";
    }[];
  };
  hero: {
    eyebrow?: string;
    headline: string;
    sub: string;
    secondaryLink?: {
      label: string;
      href: string;
    };
  };
  services: {
    sectionLabel: string;
    sectionHeadline: string;
    sectionSub: string;
    items: {
      number?: string;
      name: string;
      summary: string;
    }[];
  };
  about: {
    eyebrow?: string;
    headline: string;
    body: string[];
    stats?: {
      label: string;
      value: string;
    }[];
  };
  testimonials: {
    quote: string;
    name: string;
    role: string;
    avatar?: string;
  }[];
  ctaBanner: {
    headline: string;
    sub?: string;
    cta: {
      label: string;
      href: string;
    };
  };
  footer: {
    blurb: string;
  };
};

export type TemplateMotifs = {
  hero: string;
  tile: string;
  portrait: string;
  wide: string;
};

export type TemplateModule = {
  theme: TemplateTheme;
  content: TemplateContent;
  motifs: TemplateMotifs;
};
