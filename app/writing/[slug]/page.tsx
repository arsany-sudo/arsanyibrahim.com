import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AuthorBio } from "@/components/AuthorBio";
import { FadeIn } from "@/components/FadeIn";
import { JsonLd } from "@/components/JsonLd";
import { articleGraph, breadcrumbGraph } from "@/lib/schema";
import { PERSON, POSTS, SITE } from "@/lib/site";

type Params = { slug: string };

const dateFmt = new Intl.DateTimeFormat("en-US", {
  year: "numeric",
  month: "long",
  day: "numeric",
});

export function generateStaticParams(): Params[] {
  return POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = POSTS.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `/writing/${post.slug}` },
    authors: [{ name: PERSON.fullName, url: `${SITE.url}/about` }],
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      url: `/writing/${post.slug}`,
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
      authors: [`${SITE.url}/about`],
      images: post.image ? [post.image] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: post.image ? [post.image] : undefined,
    },
  };
}

export default async function WritingPostPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const post = POSTS.find((p) => p.slug === slug);
  if (!post) notFound();

  const article = articleGraph(post.slug);
  const breadcrumb = breadcrumbGraph([
    { name: "Home", url: `${SITE.url}/` },
    { name: "Writing", url: `${SITE.url}/writing` },
    { name: post.title, url: `${SITE.url}/writing/${post.slug}` },
  ]);

  return (
    <article className="section" itemScope itemType="https://schema.org/Article">
      {article && (
        <JsonLd id={`schema-article-${post.slug}`} data={article} />
      )}
      <JsonLd id={`schema-breadcrumb-${post.slug}`} data={breadcrumb} />

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
                  href="/writing"
                  className="hover:text-[color:var(--color-accent)]"
                >
                  Writing
                </Link>
              </li>
            </ol>
          </nav>

          <header>
            <h1
              className="display text-4xl lg:text-6xl tracking-tight leading-[1.05]"
              itemProp="headline"
            >
              {post.title}
            </h1>
            <p className="mt-6 text-base text-[color:var(--color-muted)] flex flex-wrap items-center gap-x-4 gap-y-2">
              <span>
                By{" "}
                <Link
                  href="/about"
                  className="text-[color:var(--color-text)] underline decoration-[color:var(--color-accent)] underline-offset-4 hover:text-[color:var(--color-accent)] transition-colors"
                  rel="author"
                  itemProp="author"
                >
                  {PERSON.fullName}
                </Link>
              </span>
              <span aria-hidden>·</span>
              <time dateTime={post.publishedAt} itemProp="datePublished">
                {dateFmt.format(new Date(post.publishedAt))}
              </time>
              <span aria-hidden>·</span>
              <span>{post.readingMinutes} min read</span>
            </p>
          </header>
        </FadeIn>

        <FadeIn delay={0.05}>
          <div
            className="mt-12 prose-content"
            itemProp="articleBody"
          >
            {post.body.map((block, i) => {
              if (block.type === "h2") {
                return (
                  <h2
                    key={i}
                    className="display text-3xl tracking-tight mt-12 mb-4"
                  >
                    {block.text}
                  </h2>
                );
              }
              return (
                <p
                  key={i}
                  className="text-lg leading-relaxed text-[color:var(--color-text)]/90 mt-6"
                >
                  {block.text}
                </p>
              );
            })}
          </div>
        </FadeIn>

        <AuthorBio />
      </div>
    </article>
  );
}
