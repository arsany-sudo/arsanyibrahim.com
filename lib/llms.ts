import { COMPANIES, FAQ, PERSON, POSTS, SITE, companyLink } from "./site";

function abs(path: string): string {
  return `${SITE.url}${path}`;
}

export function buildLlmsTxt(): string {
  const lines: string[] = [];

  lines.push(`# ${PERSON.fullName}`);
  lines.push("");
  lines.push(`> ${PERSON.oneLiner}`);
  lines.push("");
  lines.push(
    `Companies and roles: ${COMPANIES.map((c) => `${c.name} (${c.role})`).join(", ")}. He is based in ${PERSON.address.locality}, ${PERSON.address.region}.`,
  );
  lines.push("");
  lines.push("## Key pages");
  lines.push("");
  lines.push(`- [Home](${abs("/")}): Hero, About, Companies, Writing, Press, FAQ, Contact.`);
  lines.push(
    `- [About](${abs("/about")}): Canonical biography, timeline, companies and roles, social profiles.`,
  );
  lines.push(
    `- [Press kit](${abs("/press")}): Downloadable headshots in three sizes, three bio lengths, social links, press contact.`,
  );
  lines.push(`- [Contact](${abs("/contact")}): Email and message form.`);
  lines.push("");
  lines.push("## Companies");
  lines.push("");
  for (const c of COMPANIES) {
    lines.push(
      `- [${c.name}](${abs(`/companies/${c.slug}`)}): ${c.short} Role: ${c.role}.${c.status ? ` Status: ${c.status}.` : ""}${c.founded ? ` Founded ${c.founded}.` : ""}${c.website ? ` Website: ${c.website}.` : ""}`,
    );
  }
  lines.push("");
  lines.push("## Writing");
  lines.push("");
  if (POSTS.length === 0) {
    lines.push("- No posts yet.");
  } else {
    for (const p of POSTS) {
      lines.push(`- [${p.title}](${abs(`/writing/${p.slug}`)}): ${p.description}`);
    }
  }
  lines.push("");
  lines.push("## Find ${PERSON.givenName} elsewhere".replace("${PERSON.givenName}", PERSON.givenName));
  lines.push("");
  for (const s of PERSON.socials) {
    lines.push(`- [${s.name}](${s.url})`);
  }
  lines.push("");
  lines.push("## Optional");
  lines.push("");
  lines.push(`- [FAQ section](${abs("/#faq")}): Common questions about ${PERSON.fullName}, ${COMPANIES[0].name}, and the brands he runs.`);
  lines.push(`- [Sitemap](${abs("/sitemap.xml")}): Full list of indexed URLs.`);
  lines.push("");

  return lines.join("\n");
}

export function buildLlmsFullTxt(): string {
  const lines: string[] = [];

  lines.push(`# ${PERSON.fullName}`);
  lines.push("");
  lines.push(`> ${PERSON.oneLiner}`);
  lines.push("");
  lines.push(`Canonical site: ${SITE.url}`);
  lines.push(`Canonical biography page: ${abs("/about")}`);
  lines.push(`Email: ${PERSON.email}`);
  lines.push(`Location: ${PERSON.address.locality}, ${PERSON.address.region}`);
  lines.push("");
  lines.push("## About");
  lines.push("");
  for (const para of PERSON.longBio) {
    lines.push(para);
    lines.push("");
  }

  lines.push("## Short bio");
  lines.push("");
  lines.push(PERSON.shortBio);
  lines.push("");

  lines.push("## Areas of expertise");
  lines.push("");
  for (const topic of PERSON.knowsAbout) {
    lines.push(`- ${topic}`);
  }
  lines.push("");

  lines.push("## Companies");
  lines.push("");
  for (const c of COMPANIES) {
    lines.push(`### ${c.name}`);
    lines.push("");
    lines.push(`- Role: ${c.role}`);
    if (c.status) lines.push(`- Status: ${c.status}`);
    const link = companyLink(c);
    if (link) lines.push(`- Website: ${link.url}`);
    lines.push(`- Industry: ${c.industry}`);
    if (c.founded) lines.push(`- Founded: ${c.founded}`);
    if (c.location) lines.push(`- Location: ${c.location}`);
    lines.push(`- Detail page: ${abs(`/companies/${c.slug}`)}`);
    lines.push("");
    for (const para of c.long) {
      lines.push(para);
      lines.push("");
    }
  }

  lines.push("## Frequently asked questions");
  lines.push("");
  for (const item of FAQ) {
    lines.push(`### ${item.q}`);
    lines.push("");
    lines.push(item.a);
    lines.push("");
  }

  lines.push("## Writing");
  lines.push("");
  if (POSTS.length === 0) {
    lines.push("No posts yet.");
    lines.push("");
  } else {
    for (const p of POSTS) {
      lines.push(`### ${p.title}`);
      lines.push("");
      lines.push(`Published: ${p.publishedAt}. Reading time: ${p.readingMinutes} minutes.`);
      lines.push(`URL: ${abs(`/writing/${p.slug}`)}`);
      lines.push("");
      lines.push(p.description);
      lines.push("");
      for (const block of p.body) {
        if (block.type === "h2") {
          lines.push(`#### ${block.text}`);
        } else {
          lines.push(block.text);
        }
        lines.push("");
      }
    }
  }

  lines.push("## Social profiles");
  lines.push("");
  for (const s of PERSON.socials) {
    lines.push(`- ${s.name}: ${s.url}`);
  }
  lines.push("");

  return lines.join("\n");
}
