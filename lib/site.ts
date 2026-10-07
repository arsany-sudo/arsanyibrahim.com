export const SITE = {
  url: "https://arsanyibrahim.com",
  name: "Arsany Ibrahim",
  title: "Arsany Ibrahim | Strategist and Operator",
  description:
    "Arsany Ibrahim is a Los Angeles strategist and operator building a portfolio of companies, starting with Elite Créatif, a paid media agency with more than $20M in managed ad spend.",
  ogDescription:
    "Los Angeles strategist and operator. Founder of Elite Créatif. Owner and co-owner of companies in telehealth, ecommerce, travel, production and software.",
  twitterDescription:
    "Los Angeles strategist and operator building a portfolio of companies, starting with Elite Créatif.",
  ogImage: "/og-image.jpg",
  twitterHandle: "@arsanyandco",
  locale: "en-US",
  verification: {
    google: "REPLACE_AFTER_LAUNCH",
    bing: "REPLACE_AFTER_LAUNCH",
  },
} as const;

export const PERSON = {
  id: `${SITE.url}/#person`,
  fullName: "Arsany Ibrahim",
  givenName: "Arsany",
  familyName: "Ibrahim",
  alternateName: "arsanyandco",
  jobTitle: "Strategist and Operator",
  formalTitle: "Strategist and operator. Founder of Elite Créatif.",
  disambiguatingDescription:
    "Los Angeles strategist and operator, founder of the paid media agency Elite Créatif",
  description:
    "Arsany Ibrahim is a Los Angeles strategist and operator building a portfolio of companies, starting with Elite Créatif.",
  oneLiner:
    "Arsany Ibrahim is a Los Angeles strategist and operator building a portfolio of companies, starting with Elite Créatif.",
  // First person, used on the home page.
  intro:
    "I'm Arsany. I build and run companies I own. Marketing is the engine: I founded Elite Créatif in 2018, and the agency has managed more than $20 million in ad spend across Google, Meta, TikTok, Snapchat and LinkedIn. Next to it sit companies I own or co-own in telehealth, ecommerce, travel, production and software.",
  // Third person, used in the press kit (about 50 words).
  shortBio:
    "Arsany Ibrahim is a Los Angeles strategist and operator. He founded Elite Créatif in 2018, a paid media and marketing agency that has managed more than $20 million in ad spend. He also owns or co-owns companies in telehealth, ecommerce, travel, production and software, and runs them on AI systems he builds himself.",
  // Third person, about 150 words.
  longBio: [
    "Arsany Ibrahim is a Los Angeles strategist and operator building a portfolio of companies he owns. Marketing is the engine. The flagship is Elite Créatif, the paid media and marketing agency he founded in 2018, which has managed more than $20 million in ad spend across Google, Meta, TikTok, Snapchat and LinkedIn for clients in healthcare, CPG, hospitality and B2B tech.",
    "Next to the agency sit Toned.health, a telehealth brand he co-founded; The Shoe Rack, a footwear ecommerce brand he is building with his partner Andrew; Gabal Travel Agency, where he is a partner on the limousine and private transportation side; Z Visuals, a production company he co-founded; and EC Ads, attribution software in development. He runs the portfolio on operating systems he builds with Claude and AI agents.",
    "Through arsanyandco, he writes about bringing perspective and morality back into business: people over money, and no hustle culture.",
  ],
  email: "arsany@elitecreatif.com",
  address: {
    locality: "Los Angeles",
    region: "CA",
    country: "US",
  },
  headshot: {
    path: "/arsany-ibrahim-headshot-1200.jpg",
    width: 1200,
    height: 1200,
    caption: "Arsany Ibrahim, strategist and operator, founder of Elite Créatif",
  },
  socials: [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/arsany-ibrahim/",
      handle: "arsany-ibrahim",
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/arsany.co/",
      handle: "@arsany.co",
    },
    { name: "X", url: "https://x.com/arsanyandco", handle: "@arsanyandco" },
    {
      name: "YouTube",
      url: "https://www.youtube.com/@arsanyandco",
      handle: "@arsanyandco",
    },
    {
      name: "Facebook",
      url: "https://www.facebook.com/profile.php?id=61594390212536",
      handle: "Arsany & co.",
    },
  ],
  knowsAbout: [
    "Marketing strategy",
    "Paid media",
    "Google Ads",
    "Meta Ads",
    "TikTok Ads",
    "Performance marketing",
    "Local SEO",
    "Marketing attribution",
    "Direct-to-consumer ecommerce",
    "Telehealth",
    "AI agents",
    "Business operations",
  ],
} as const;

export type CompanySlug =
  | "elite-creatif"
  | "toned-health"
  | "the-shoe-rack"
  | "gabal-travel"
  | "z-visuals"
  | "ec-local"
  | "ec-ads";

export type Company = {
  slug: CompanySlug;
  name: string;
  website?: string;
  short: string;
  long: string[];
  industry: string;
  role: "Founder" | "Co-founder" | "Partner";
  status?: string;
  founded?: string;
  location?: string;
  parent?: CompanySlug;
  schemaId: string;
};

const pageId = (slug: CompanySlug) =>
  `${SITE.url}/companies/${slug}#organization`;

export const COMPANIES: ReadonlyArray<Company> = [
  {
    slug: "elite-creatif",
    name: "Elite Créatif",
    website: "https://elitecreatif.com",
    short:
      "Paid media and marketing agency. Full-funnel media buying: landing pages, creative and ads.",
    long: [
      "Elite Créatif is a paid media and marketing agency founded by Arsany Ibrahim in Los Angeles in 2018. It is the flagship of his portfolio.",
      "The agency has managed more than $20 million in ad spend across Google, Meta, TikTok, Snapchat and LinkedIn, for clients in healthcare, CPG, hospitality and B2B tech. The flagship offer is full-funnel media buying: landing pages, creative and ads.",
    ],
    industry: "Marketing and Advertising",
    role: "Founder",
    founded: "2018",
    location: "Los Angeles, California",
    schemaId: "https://elitecreatif.com/#organization",
  },
  {
    slug: "toned-health",
    name: "Toned.health",
    website: "https://toned.health",
    short: "Direct-to-consumer telehealth brand for compounded GLP-1 weight loss.",
    long: [
      "Toned.health is a direct-to-consumer telehealth brand offering compounded GLP-1 weight loss. The site is live and LegitScript certified.",
      "Arsany co-founded Toned.health and co-owns it with a partner.",
    ],
    industry: "Telehealth",
    role: "Co-founder",
    status: "Live",
    schemaId: "https://toned.health/#organization",
  },
  {
    slug: "the-shoe-rack",
    name: "The Shoe Rack",
    short: "Footwear ecommerce brand built to compete with the big shoe marketplaces.",
    long: [
      "The Shoe Rack is a footwear ecommerce brand built to compete with the big shoe marketplaces. Arsany co-owns it with his partner Andrew, an established Amazon footwear seller.",
      "Arsany builds the software: the site, the back end, the catalog, and marketplace sync to eBay and Walmart, with Amazon next.",
    ],
    industry: "Ecommerce",
    role: "Partner",
    status: "Building",
    schemaId: pageId("the-shoe-rack"),
  },
  {
    slug: "gabal-travel",
    name: "Gabal Travel Agency",
    short: "Limousine and private transportation. Luxury with convenience.",
    long: [
      "Gabal Travel Agency is a travel company. Its current focus is limousine and private transportation, built on one idea: luxury and convenience in the same ride.",
      "Arsany is a partner and co-owner.",
    ],
    industry: "Travel and Private Transportation",
    role: "Partner",
    schemaId: pageId("gabal-travel"),
  },
  {
    slug: "z-visuals",
    name: "Z Visuals",
    short:
      "Photo, video and editing. Content packages for restaurants in LA and Orange County.",
    long: [
      "Z Visuals is the production company under Elite Créatif, covering photo, video and editing.",
      "It sells content packages to restaurants in Los Angeles and Orange County. Arsany co-founded it.",
    ],
    industry: "Production",
    role: "Co-founder",
    parent: "elite-creatif",
    schemaId: pageId("z-visuals"),
  },
  {
    slug: "ec-local",
    name: "EC Local",
    website: "https://eclocal.com",
    short:
      "Elite Créatif's line for local businesses. Three fixed packages: ads, local SEO and content.",
    long: [
      "EC Local is Elite Créatif's line for local businesses. It sells three fixed packages: ads, local SEO and content.",
      "The site has been live at eclocal.com since August 2026.",
    ],
    industry: "Marketing and Advertising",
    role: "Founder",
    status: "Live since Aug 2026",
    parent: "elite-creatif",
    schemaId: "https://eclocal.com/#organization",
  },
  {
    slug: "ec-ads",
    name: "EC Ads",
    short: "Marketing attribution and campaign intelligence software.",
    long: [
      "EC Ads is marketing analytics software for attribution and campaign intelligence. Arsany is the founder and owner.",
      "It is in development, with early tests running with a small group of users.",
    ],
    industry: "Marketing Analytics Software",
    role: "Founder",
    status: "In development",
    schemaId: pageId("ec-ads"),
  },
];

export function companyLink(c: Company): { url: string; label: string } | null {
  return c.website ? { url: c.website, label: new URL(c.website).host } : null;
}

export const TIMELINE: ReadonlyArray<{
  year: string;
  label: string;
}> = [
  { year: "2018", label: "Founded Elite Créatif" },
  { year: "2024", label: "Crossed $10M in managed ad spend" },
  {
    year: "2026",
    label:
      "Launched EC Local and Toned.health. Started building The Shoe Rack with partner Andrew.",
  },
  {
    year: "Now",
    label:
      "More than $20M managed across five channels. Building a portfolio of owned companies.",
  },
];

export const FAQ: ReadonlyArray<{
  q: string;
  a: string;
}> = [
  {
    q: "Who is Arsany Ibrahim?",
    a: "Arsany Ibrahim is a Los Angeles strategist and operator building a portfolio of companies, starting with Elite Créatif, the paid media and marketing agency he founded in 2018. The agency has managed more than $20 million in ad spend.",
  },
  {
    q: "What is Elite Créatif?",
    a: "Elite Créatif is a Los Angeles paid media and marketing agency founded by Arsany Ibrahim in 2018. Its flagship offer is full-funnel media buying: landing pages, creative and ads, across Google, Meta, TikTok, Snapchat and LinkedIn.",
  },
  {
    q: "What companies does Arsany Ibrahim own?",
    a: "Arsany Ibrahim founded Elite Créatif, along with its EC Local line and EC Ads, attribution software in development. He co-founded Toned.health and Z Visuals, and is a partner in The Shoe Rack and Gabal Travel Agency.",
  },
  {
    q: "Where is Arsany Ibrahim based?",
    a: "Arsany Ibrahim is based in Los Angeles, California.",
  },
  {
    q: "What industries does Elite Créatif work with?",
    a: "Elite Créatif works with clients in healthcare, consumer packaged goods, hospitality and B2B tech.",
  },
  {
    q: "How do I contact Arsany Ibrahim?",
    a: "Email arsany@elitecreatif.com, or use the contact form on this site.",
  },
];

export type Post = {
  slug: string;
  title: string;
  description: string;
  publishedAt: string;
  updatedAt: string;
  readingMinutes: number;
  body: ReadonlyArray<{ type: "p" | "h2"; text: string }>;
  image?: string;
};

export const POSTS: ReadonlyArray<Post> = [
  {
    slug: "what-twenty-million-in-ad-spend-taught-me",
    title: "What $20 million in ad spend taught me about paid media",
    description:
      "Six lessons from running paid acquisition for brands in pharma, CPG, hospitality, and B2B tech. Written for founders who pay the invoices.",
    publishedAt: "2026-04-12",
    updatedAt: "2026-04-12",
    readingMinutes: 6,
    image: "/arsany-hero-portrait.png",
    body: [
      {
        type: "p",
        text: "Most marketing advice on the internet is written by people who have never managed a media plan they had to defend on a Monday morning call. After eight years of running Elite Créatif and overseeing more than twenty million dollars in ad spend, the lessons that compound are the boring ones. Here are six.",
      },
      {
        type: "h2",
        text: "1. Creative is the lever. Targeting is the floor.",
      },
      {
        type: "p",
        text: "Once your account is structured competently, eighty percent of remaining performance gains come from creative. Audience targeting matters far less than the industry pretends. The ad itself is the thing.",
      },
      {
        type: "h2",
        text: "2. Offer beats angle. Angle beats hook. Hook beats production value.",
      },
      {
        type: "p",
        text: "If your offer is weak, no amount of clever copy will save you. If your angle is weak, the offer will not be heard. Production quality is the last thing to optimize, not the first.",
      },
      {
        type: "h2",
        text: "3. Attribution is a flashlight, not a courtroom.",
      },
      {
        type: "p",
        text: "Multi-touch models will not tell you what worked. They will tell you where to look next. Use them to direct creative and budget decisions, then look at the only number that matters at the company level, which is incremental revenue.",
      },
      { type: "h2", text: "4. Spend follows quality, not the other way around." },
      {
        type: "p",
        text: "Brands that try to buy their way out of a weak product fail. Brands that have a strong product and a clear positioning have unlimited room to scale paid.",
      },
      {
        type: "h2",
        text: "5. The platforms reward the things that are good for the platforms.",
      },
      {
        type: "p",
        text: "Optimize for the metric the platform sells against. Then back into your unit economics from there. Fighting the algorithm is more expensive than feeding it.",
      },
      {
        type: "h2",
        text: "6. The boring stuff wins.",
      },
      {
        type: "p",
        text: "Daily creative iteration. Weekly account hygiene. Monthly performance reviews. Quarterly strategy. Yearly bets. The discipline of doing the unsexy work on schedule outperforms every clever trick.",
      },
    ],
  },
];

export const PRESS_KIT = {
  headshots: [
    { size: 1200, path: "/arsany-ibrahim-headshot-1200.jpg" },
    { size: 800, path: "/arsany-ibrahim-headshot-800.jpg" },
    { size: 400, path: "/arsany-ibrahim-headshot-400.jpg" },
  ],
  inquiryEmail: "arsany@elitecreatif.com",
} as const;
