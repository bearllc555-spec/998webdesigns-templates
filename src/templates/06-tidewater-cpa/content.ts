import type { TemplateContent } from "../types";

export const content: TemplateContent = {
  business: {
    name: "Tidewater Partners",
    legalName: "Tidewater Partners CPA PC",
    address: "211 Granby Street, Suite 800\nNorfolk, VA 23510",
    phone: "(757) 555-0114",
    email: "office@tidewaterpartners.example",
    hours: [
      "Mon to Fri, 8am to 6pm",
      "Tax season hours, Sat 9am to 1pm",
      "Closed Sunday",
    ],
    socials: [
      { label: "LinkedIn", icon: "linkedin", href: "#" },
    ],
  },
  hero: {
    eyebrow: "Norfolk and Richmond, Virginia",
    headline: "Counsel for the close-held company and the careful family.",
    sub: "Tidewater Partners is a four-partner regional accounting firm advising owner-led businesses, family offices, and the institutions that hold them.",
    secondaryLink: {
      label: "Read the latest insight",
      href: "/mockups/tidewater-cpa/insights",
    },
  },
  services: {
    sectionLabel: "Services",
    sectionHeadline: "Six services. Practiced together.",
    sectionSub:
      "The firm is structured so that no engagement runs without a partner attached. The depth of a national firm, in the bench of a small one.",
    items: [
      { number: "01", name: "Audit and assurance", summary: "Year-end audits, reviews, and compilations for closely held companies and not-for-profit institutions." },
      { number: "02", name: "Tax planning and compliance", summary: "Federal and multi-state planning, owner-level tax modeling, and the routine compliance that sits underneath." },
      { number: "03", name: "Outsourced controller and CFO", summary: "Monthly close, cash-flow forecasting, board-grade reporting, and the controls behind them." },
      { number: "04", name: "Estate and succession structures", summary: "Wealth-transfer planning, trust accounting, and the long-arc tax view for the next generation." },
      { number: "05", name: "Mergers, sales, and quality of earnings", summary: "Sell-side and buy-side advisory for transactions in the ten to one-hundred-million range." },
      { number: "06", name: "Forensic and dispute support", summary: "Litigation-grade accounting in shareholder disputes, fiduciary matters, and white-collar inquiries." },
    ],
  },
  about: {
    eyebrow: "About the firm",
    headline: "Founded 2004. Four partners. One bench.",
    body: [
      "Tidewater Partners was founded in 2004 by two CPAs who had spent a combined thirty years in the regional offices of Big Four firms and wanted a different way to practice.",
      "Today the firm is four partners and twenty staff across two offices on the Virginia coast. We sit on twelve industry sectors. We have published research with two universities. We do not advertise.",
    ],
    stats: [
      { label: "Founded", value: "2004" },
      { label: "Partners", value: "Four" },
      { label: "Clients", value: "380" },
      { label: "Industries", value: "12" },
    ],
  },
  testimonials: [
    {
      quote:
        "Our family office moved to Tidewater after a quiet introduction. Five years in, we have one partner who knows the trust, one who knows the company, and a closing process I would actually describe as graceful.",
      name: "Henry M.",
      role: "Trustee, four-generation family office",
    },
    {
      quote:
        "We were preparing for a sale and called three firms for a quality-of-earnings reading. Tidewater asked the most pointed question on the call. We hired them in the same week.",
      name: "Diane R.",
      role: "CEO, regional logistics company",
    },
    {
      quote:
        "I have worked with national firms and with sole practitioners. Tidewater sits between the two, and it sits there on purpose.",
      name: "Jonathan A.",
      role: "Family-office attorney, Richmond",
    },
  ],
  ctaBanner: {
    headline: "A first conversation is held by a partner.",
    sub: "We can tell you within an hour whether the engagement fits the firm. Most of these calls do not.",
    cta: {
      label: "Speak with a partner",
      href: "/mockups/tidewater-cpa/contact",
    },
  },
  footer: {
    blurb:
      "A four-partner regional accounting and advisory firm on the Virginia coast. Tax, audit, advisory, family office, and transaction services since 2004.",
  },
};

export const industries = [
  { name: "Manufacturing and distribution", summary: "Cost accounting, multi-state nexus, inventory and supply-chain advisory." },
  { name: "Maritime and logistics", summary: "Vessel taxation, port-state issues, and revenue recognition under multi-leg contracts." },
  { name: "Professional services", summary: "Partnership tax, owner compensation strategy, and bench-planning for senior departures." },
  { name: "Construction and real estate", summary: "Percentage-of-completion accounting, like-kind exchanges, and cost-segregation studies." },
  { name: "Family offices", summary: "Trust accounting, multigenerational structures, philanthropy, and household reporting." },
  { name: "Not-for-profit", summary: "A-133 single audits, board-grade reporting, and endowment accounting." },
];

export const offices = [
  {
    city: "Norfolk",
    address: "211 Granby Street, Suite 800\nNorfolk, VA 23510",
    phone: "(757) 555-0114",
    role: "Headquarters",
  },
  {
    city: "Richmond",
    address: "905 East Cary Street, 4th Floor\nRichmond, VA 23219",
    phone: "(804) 555-0186",
    role: "Family office and estate practice",
  },
];

export const partners = [
  {
    name: "Margaret R. Eddy, CPA",
    role: "Managing partner",
    bio: "Audit and assurance, founded the firm in 2004 after fifteen years at a national firm's Tidewater office.",
  },
  {
    name: "James A. Carrick, CPA",
    role: "Partner, tax",
    bio: "Federal and multi-state tax practice. Leads the firm's owner-led business engagements.",
  },
  {
    name: "Helena Park, CPA, JD",
    role: "Partner, estate and family office",
    bio: "Joined 2011. Cross-trained in tax law and trust accounting. Runs the Richmond office.",
  },
  {
    name: "Daniel M. West, CPA",
    role: "Partner, transactions",
    bio: "Joined 2016 from a New York advisory practice. Heads quality of earnings and transaction support.",
  },
];

export const insights = [
  {
    date: "May 2026",
    category: "Tax",
    title: "Late-year cash planning for owner-led companies",
    summary:
      "Four moves to consider before the fourth-quarter close, none of which require a new tax bill.",
  },
  {
    date: "April 2026",
    category: "Audit",
    title: "What a partner-attached audit actually changes",
    summary:
      "A note on bench size, partner attachment, and what changes when the partner sits at every close meeting.",
  },
  {
    date: "March 2026",
    category: "Family office",
    title: "The intergenerational reporting package, examined",
    summary:
      "How four generations of one family reads the same monthly report, and what we learned from sitting in the room.",
  },
];
