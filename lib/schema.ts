import { COMPANIES, FAQ, PERSON, POSTS, SITE, type Company } from "./site";

const personRef = { "@id": PERSON.id };
const eliteCreatif = COMPANIES.find((c) => c.slug === "elite-creatif")!;

const locality = {
  "@type": "PostalAddress",
  addressLocality: PERSON.address.locality,
  addressRegion: PERSON.address.region,
  addressCountry: PERSON.address.country,
};

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
    email: `mailto:${PERSON.email}`,
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
    worksFor: {
      "@type": "Organization",
      "@id": eliteCreatif.schemaId,
      name: eliteCreatif.name,
      url: eliteCreatif.website,
    },
    address: locality,
    knowsAbout: [...PERSON.knowsAbout],
    knowsLanguage: ["English"],
    sameAs: PERSON.socials.map((s) => s.url),
  };
}

export function orgNode(c: Company) {
  const parent = c.parent && COMPANIES.find((p) => p.slug === c.parent);
  return {
    "@type": "Organization",
    "@id": c.schemaId,
    name: c.name,
    url: c.website ?? `${SITE.url}/companies/${c.slug}`,
    description: c.short,
    // Founder for founder/co-founder roles; partners are listed as members.
    ...(c.role === "Partner"
      ? {
          member: {
            "@type": "OrganizationRole",
            roleName: "Partner",
            member: personRef,
          },
        }
      : { founder: personRef }),
    ...(c.founded ? { foundingDate: c.founded } : {}),
    ...(c.location ? { address: locality } : {}),
    ...(parent ? { parentOrganization: { "@id": parent.schemaId } } : {}),
  };
}

function webSiteNode() {
  return {
    "@type": "WebSite",
    "@id": `${SITE.url}/#website`,
    url: SITE.url,
    name: SITE.name,
    description:
      "Personal site of Arsany Ibrahim, strategist and operator, founder of Elite Créatif.",
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
      ...COMPANIES.map(orgNode),
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
