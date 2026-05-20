export const SITE = {
  url: "https://arsanyibrahim.com",
  name: "Arsany Ibrahim",
  title: "Arsany Ibrahim — Marketing Strategist & Founder of Elite Créatif",
  description:
    "Arsany Ibrahim is a Los Angeles marketing strategist and founder of Elite Créatif, a paid media and communications agency managing over $20M in ad spend.",
  ogDescription:
    "Los Angeles marketing strategist. Founder of Elite Créatif. Managing $20M+ in paid media for brands across pharma, CPG, hospitality, and tech.",
  twitterDescription:
    "Los Angeles marketing strategist. $20M+ in managed ad spend.",
  ogImage: "/og-image.jpg",
  twitterHandle: "@ArsanyIbr",
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
  alternateName: "Arsany",
  jobTitle: "Marketing Strategist & Founder",
  formalTitle: "CEO and Principal Strategist, Elite Créatif",
  disambiguatingDescription:
    "Founder and CEO of Elite Créatif, a Los Angeles digital marketing agency",
  description:
    "Arsany Ibrahim is a Los Angeles marketing strategist and founder of Elite Créatif, a paid media and communications agency managing over $20M in ad spend.",
  oneLiner:
    "Arsany Ibrahim is a Los Angeles marketing strategist and founder of Elite Créatif, a paid media and communications agency managing over $20M in ad spend for brands across pharma, CPG, hospitality, and tech.",
  shortBio:
    "I'm Arsany. I'm a marketing strategist and the founder of Elite Créatif, a full-service paid advertising and communications agency in Los Angeles. We've managed over $20M in ad spend across Google, Meta, TikTok, Snapchat, and LinkedIn. When I'm not running the agency, I'm building software in telehealth, travel, and marketing analytics.",
  longBio: [
    "Arsany Ibrahim is a Los Angeles based marketing strategist and the founder and CEO of Elite Créatif, a full-service paid advertising and communications agency headquartered in Northridge, California, with a satellite studio in San Jose. Since founding the agency in 2018, Arsany has overseen more than $20 million in managed ad spend across Google, Meta, TikTok, Snapchat, and LinkedIn for brands in healthcare, consumer packaged goods, hospitality, and B2B technology.",
    "Beyond the agency, Arsany builds software. He's the founder of Osynra, a direct-to-consumer telehealth brand; Gabal Travel Agency, a luxury travel conglomerate; and Omni-Insight, an enterprise marketing analytics platform. He works as a non-technical founder, using AI-assisted development tools to ship production software.",
    "Arsany's approach to marketing is direct, data-led, and refreshingly free of agency jargon. He writes and speaks about paid media strategy, founder-led brand building, and the new generation of AI-native software companies.",
  ],
  email: "arsany@elitecreatif.com",
  phone: "+1 (818) 661-3478",
  phoneRaw: "+18186613478",
  address: {
    street: "9017 Reseda Blvd, Suite 210",
    city: "Northridge",
    region: "CA",
    postalCode: "91324",
    country: "US",
    locality: "Los Angeles",
  },
  headshot: {
    path: "/arsany-ibrahim-headshot.jpg",
    width: 1200,
    height: 1200,
    caption: "Arsany Ibrahim, founder and CEO of Elite Créatif",
  },
  socials: [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/arsany-ibrahim/",
      handle: "arsany-ibrahim",
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/arsanyib/",
      handle: "@arsanyib",
    },
    { name: "X", url: "https://x.com/ArsanyIbr", handle: "@ArsanyIbr" },
    {
      name: "GitHub",
      url: "https://github.com/arsany-sudo",
      handle: "arsany-sudo",
    },
  ],
  knowsAbout: [
    "Marketing strategy",
    "Paid media",
    "Google Ads",
    "Meta Ads",
    "TikTok Ads",
    "Performance marketing",
    "Search engine optimization",
    "Public relations",
    "Marketing analytics",
    "Direct-to-consumer marketing",
    "Brand strategy",
    "AI-assisted software development",
  ],
} as const;

export type CompanySlug =
  | "elite-creatif"
  | "osynra"
  | "gabal-travel"
  | "omni-insight";

export const COMPANIES: ReadonlyArray<{
  slug: CompanySlug;
  name: string;
  legalName?: string;
  url: string;
  domain: string;
  short: string;
  long: string[];
  industry: string;
  founded?: string;
  location?: string;
  schemaId: string;
}> = [
  {
    slug: "elite-creatif",
    name: "Elite Créatif",
    legalName: "Elite Cratif LLC",
    url: "https://elitecreatif.com",
    domain: "elitecreatif.com",
    short:
      "Full-service paid advertising and communications agency. Los Angeles. Since 2018.",
    long: [
      "Elite Créatif is a full-service paid advertising and communications agency founded in 2018. Headquartered in Northridge, California, with a satellite studio in San Jose, the agency works with brands in pharma, CPG, hospitality, and B2B tech.",
      "Services span paid media, SEO, PR, social media management, branding, and web development. The team has managed over $20 million in ad spend across Google, Meta, TikTok, Snapchat, and LinkedIn.",
    ],
    industry: "Marketing and Advertising",
    founded: "2018",
    location: "Northridge, California",
    schemaId: "https://elitecreatif.com/#organization",
  },
  {
    slug: "omni-insight",
    name: "Omni-Insight",
    url: "https://omniinsight.com",
    domain: "omniinsight.com",
    short: "Enterprise marketing analytics platform.",
    long: [
      "Omni-Insight is an enterprise marketing analytics platform built to consolidate paid, owned, and earned media performance into a single source of truth for marketing teams.",
    ],
    industry: "Marketing Analytics Software",
    schemaId: "https://omniinsight.com/#organization",
  },
  {
    slug: "osynra",
    name: "Osynra",
    url: "https://osynra.com",
    domain: "osynra.com",
    short: "Direct-to-consumer telehealth brand.",
    long: [
      "Osynra is a direct-to-consumer telehealth brand connecting patients to licensed providers for accessible, prescription-grade care.",
    ],
    industry: "Telehealth",
    schemaId: "https://osynra.com/#organization",
  },
  {
    slug: "gabal-travel",
    name: "Gabal Travel Agency",
    url: "https://gabaltravel.com",
    domain: "gabaltravel.com",
    short: "Luxury travel conglomerate.",
    long: [
      "Gabal Travel Agency is a luxury travel conglomerate curating bespoke itineraries and private travel experiences for discerning clients.",
    ],
    industry: "Travel",
    schemaId: "https://gabaltravel.com/#organization",
  },
];

export const TIMELINE: ReadonlyArray<{
  year: string;
  label: string;
}> = [
  { year: "2018", label: "Founded Elite Créatif" },
  { year: "2024", label: "Crossed $10M in managed ad spend" },
  {
    year: "2026",
    label: "Launched Omni-Insight, Osynra, and Gabal Travel",
  },
  { year: "Today", label: "Managing $20M+ across 5 channels" },
];

export const WORK: ReadonlyArray<{
  client: string;
  industry: string;
  year: string;
  challenge: string;
  whatWeDid: string;
  result: string;
}> = [
  {
    client: "RE Pharmacy",
    industry: "Specialty Pharmacy",
    year: "2024",
    challenge:
      "Drive qualified patient enrollment for a specialty pharmacy operating in a regulated, low-trust category.",
    whatWeDid:
      "Built a paid search and Meta program with creative and landing pages tailored to specific condition cohorts. Layered conversion tracking with HIPAA-conscious tagging.",
    result: "3x qualified patient inquiries quarter over quarter.",
  },
  {
    client: "CocoJojo",
    industry: "Consumer Packaged Goods",
    year: "2024",
    challenge:
      "Scale a coconut-oil personal-care brand profitably across Amazon and DTC.",
    whatWeDid:
      "Restructured Meta and TikTok creative testing around UGC and bundle offers. Rebuilt the DTC funnel with sharper offer pages.",
    result: "ROAS improved from 1.8 to 3.4 in 90 days.",
  },
  {
    client: "Papa K's Mediterranean Kitchen",
    industry: "Restaurant",
    year: "2025",
    challenge:
      "Build a steady delivery and dine-in pipeline for a Mediterranean kitchen in a competitive LA market.",
    whatWeDid:
      "Launched local Meta and Google campaigns around lunch, family meal, and catering intents. Tightened daypart targeting and creative around peak hours.",
    result: "Online orders up 142% year over year.",
  },
];

export const FAQ: ReadonlyArray<{
  q: string;
  a: string;
}> = [
  {
    q: "Who is Arsany Ibrahim?",
    a: "Arsany Ibrahim is a marketing strategist and the founder and CEO of Elite Créatif, a Los Angeles paid advertising and communications agency. He has managed over $20 million in ad spend for brands across pharmaceutical, consumer packaged goods, hospitality, and technology sectors since founding the agency in 2018.",
  },
  {
    q: "What is Elite Créatif?",
    a: "Elite Créatif is a full-service paid advertising and communications agency founded by Arsany Ibrahim in 2018. Headquartered in Northridge, California, with a satellite studio in San Jose, the agency offers paid media, SEO, PR, social media management, branding, and web development.",
  },
  {
    q: "What companies has Arsany Ibrahim founded?",
    a: "Arsany Ibrahim is the founder of four companies: Elite Créatif (digital marketing agency), Osynra (direct-to-consumer telehealth), Gabal Travel Agency (luxury travel conglomerate), and Omni-Insight (enterprise marketing analytics platform).",
  },
  {
    q: "Where is Arsany Ibrahim based?",
    a: "Arsany Ibrahim is based in Los Angeles, California. Elite Créatif is headquartered in Northridge with a satellite studio in San Jose.",
  },
  {
    q: "What industries does Arsany Ibrahim work with?",
    a: "Arsany Ibrahim and Elite Créatif work with brands in pharmaceutical and healthcare, consumer packaged goods, hospitality, restaurants, and B2B technology sectors.",
  },
  {
    q: "How do I contact Arsany Ibrahim?",
    a: "You can reach Arsany Ibrahim through Elite Créatif at arsany@elitecreatif.com or by phone at +1 (818) 661-3478. The agency office is located at 9017 Reseda Blvd, Suite 210, Northridge, CA 91324.",
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
