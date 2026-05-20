import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FadeIn } from "@/components/FadeIn";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbGraph } from "@/lib/schema";
import { COMPANIES, PERSON, SITE } from "@/lib/site";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return COMPANIES.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const company = COMPANIES.find((c) => c.slug === slug);
  if (!company) return {};
  const title = `${company.name}`;
  const description = `${company.name} — ${company.short} Founded by Arsany Ibrahim.`;
  return {
    title,
    description,
    alternates: { canonical: `/companies/${company.slug}` },
    openGraph: {
      title: `${company.name} — founded by Arsany Ibrahim`,
      description,
      url: `/companies/${company.slug}`,
      type: "website",
    },
  };
}

export default async function CompanyPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const company = COMPANIES.find((c) => c.slug === slug);
  if (!company) notFound();

  const breadcrumb = breadcrumbGraph([
    { name: "Home", url: `${SITE.url}/` },
    { name: "Companies", url: `${SITE.url}/#companies` },
    { name: company.name, url: `${SITE.url}/companies/${company.slug}` },
  ]);

  return (
    <article className="section">
      <JsonLd id={`schema-breadcrumb-${company.slug}`} data={breadcrumb} />
      <div className="container-content max-w-3xl">
        <FadeIn>
          <nav aria-label="Breadcrumb" className="mb-10">
            <ol className="flex items-center gap-2 text-xs text-[color:var(--color-muted)]">
              <li>
                <Link
                  href="/"
                  className="hover:text-[color:var(--color-accent)]"
                >
                  Home
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li>
                <Link
                  href="/#companies"
                  className="hover:text-[color:var(--color-accent)]"
                >
                  Companies
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li className="text-[color:var(--color-text)]">{company.name}</li>
            </ol>
          </nav>

          <p className="eyebrow mb-4">
            {company.industry}
            {company.founded ? ` · Founded ${company.founded}` : ""}
          </p>
          <h1 className="display text-5xl lg:text-6xl tracking-tight">
            {company.name}
          </h1>
          {company.legalName ? (
            <p className="text-sm text-[color:var(--color-muted)] mt-2">
              Legal entity: {company.legalName}
            </p>
          ) : null}
        </FadeIn>

        <FadeIn delay={0.05}>
          <div className="mt-10 space-y-6 text-lg leading-relaxed text-[color:var(--color-text)]/90">
            {company.long.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <dl className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm border-t border-[color:var(--color-border)] pt-8">
            <div>
              <dt className="eyebrow mb-1">Founder</dt>
              <dd>
                <Link
                  href="/about"
                  className="hover:text-[color:var(--color-accent)]"
                >
                  {PERSON.fullName}
                </Link>
              </dd>
            </div>
            <div>
              <dt className="eyebrow mb-1">Industry</dt>
              <dd>{company.industry}</dd>
            </div>
            {company.location ? (
              <div>
                <dt className="eyebrow mb-1">Location</dt>
                <dd>{company.location}</dd>
              </div>
            ) : null}
            <div>
              <dt className="eyebrow mb-1">Website</dt>
              <dd>
                <a
                  href={company.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[color:var(--color-accent)] hover:underline underline-offset-4"
                >
                  {company.domain} ↗
                </a>
              </dd>
            </div>
          </dl>
        </FadeIn>

        <FadeIn delay={0.15}>
          <div className="mt-12 flex flex-wrap gap-4">
            <a
              href={company.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-[color:var(--color-accent)] text-[color:var(--color-bg)] px-6 py-3 text-sm font-medium hover:bg-[color:var(--color-text)] transition-colors"
            >
              Visit {company.name}
            </a>
            <Link
              href="/#companies"
              className="inline-flex items-center justify-center border border-[color:var(--color-border)] px-6 py-3 text-sm hover:border-[color:var(--color-accent)] hover:text-[color:var(--color-accent)] transition-colors"
            >
              All companies
            </Link>
          </div>
        </FadeIn>
      </div>
    </article>
  );
}
