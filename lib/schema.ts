import { COMPANIES, FAQ, PERSON, POSTS, SITE } from "./site";

const personRef = { "@id": PERSON.id };
const eliteCreatif = COMPANIES.find((c) => c.slug === "elite-creatif")!;
const osynra = COMPANIES.find((c) => c.slug === "osynra")!;
const gabal = COMPANIES.find((c) => c.slug === "gabal-travel")!;
const omni = COMPANIES.find((c) => c.slug === "omni-insight")!;

function personNode() {
  return {
    "@type": "Person",
    "@id": PERSON.id,
    name: PERSON.fullName,
    alternateName: [PERSON.alternateName],
    givenName: PERSON.givenName,
    familyName: PERSON.familyName,
    url: `${SITE.url}/`,
    mainEntityOfPage: `${SITE.url}/about`,
    image: {
      "@type": "ImageObject",
      url: `${SITE.url}${PERSON.headshot.path}`,
      width: PERSON.headshot.width,
      height: PERSON.headshot.height,
      caption: PERSON.headshot.caption,
    },
    jobTitle: PERSON.jobTitle,
    description: PERSON.description,
    disambiguatingDescription: PERSON.disambiguatingDescription,
    worksFor: { "@id": eliteCreatif.schemaId },
    founder: COMPANIES.map((c) => ({ "@id": c.schemaId })),
    address: {
      "@type": "PostalAddress",
      addressLocality: PERSON.address.locality,
      addressRegion: PERSON.address.region,
      addressCountry: PERSON.address.country,
    },
    knowsAbout: [...PERSON.knowsAbout],
    knowsLanguage: ["English"],
    nationality: {
      "@type": "Country",
      name: "United States",
    },
    sameAs: [
      ...PERSON.socials.map((s) => s.url),
      "https://elitecreatif.com/about",
    ],
  };
}

function eliteCreatifNode() {
  return {
    "@type": "Organization",
    "@id": eliteCreatif.schemaId,
    name: eliteCreatif.name,
    legalName: eliteCreatif.legalName,
    url: eliteCreatif.url,
    logo: "https://elitecreatif.com/logo.png",
    founder: personRef,
    foundingDate: "2018",
    foundingLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: PERSON.address.locality,
        addressRegion: PERSON.address.region,
        addressCountry: PERSON.address.country,
      },
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: PERSON.address.street,
      addressLocality: PERSON.address.city,
      addressRegion: PERSON.address.region,
      postalCode: PERSON.address.postalCode,
      addressCountry: PERSON.address.country,
    },
    areaServed: "United States",
    industry: eliteCreatif.industry,
  };
}

function otherOrgNode(c: typeof COMPANIES[number]) {
  return {
    "@type": "Organization",
    "@id": c.schemaId,
    name: c.name,
    url: c.url,
    founder: personRef,
    industry: c.industry,
  };
}

function webSiteNode() {
  return {
    "@type": "WebSite",
    "@id": `${SITE.url}/#website`,
    url: SITE.url,
    name: SITE.name,
    description:
      "Personal site of Arsany Ibrahim, marketing strategist and founder of Elite Créatif.",
    publisher: personRef,
    inLanguage: SITE.locale,
  };
}

function profilePageNode() {
  return {
    "@type": "ProfilePage",
    "@id": `${SITE.url}/#profile`,
    url: SITE.url,
    mainEntity: personRef,
    inLanguage: SITE.locale,
  };
}

export function masterGraph() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      personNode(),
      eliteCreatifNode(),
      otherOrgNode(osynra),
      otherOrgNode(gabal),
      otherOrgNode(omni),
      webSiteNode(),
      profilePageNode(),
    ],
  };
}

export function faqGraph() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ.slice(0, 4).map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: {
        "@type": "Answer",
        text: a,
      },
    })),
  };
}

export function articleGraph(slug: string) {
  const post = POSTS.find((p) => p.slug === slug);
  if (!post) return null;
  const canonical = `${SITE.url}/writing/${post.slug}`;
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt,
    author: personRef,
    publisher: personRef,
    mainEntityOfPage: canonical,
    url: canonical,
    image: post.image ? `${SITE.url}${post.image}` : undefined,
  };
}

export function breadcrumbGraph(
  items: ReadonlyArray<{ name: string; url: string }>,
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
