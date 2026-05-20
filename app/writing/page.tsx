import type { Metadata } from "next";
import Link from "next/link";
import { FadeIn } from "@/components/FadeIn";
import { POSTS } from "@/lib/site";

export const metadata: Metadata = {
  title: "Writing",
  description:
    "Essays and notes from Arsany Ibrahim on paid media strategy, founder-led brand building, and AI-native software.",
  alternates: { canonical: "/writing" },
  openGraph: {
    title: "Writing — Arsany Ibrahim",
    description:
      "Essays on paid media, founder-led brands, and AI-native software.",
    url: "/writing",
    type: "website",
  },
};

const dateFmt = new Intl.DateTimeFormat("en-US", {
  year: "numeric",
  month: "long",
  day: "numeric",
});

export default function WritingIndexPage() {
  return (
    <section className="section" aria-labelledby="writing-index-heading">
      <div className="container-content max-w-3xl">
        <FadeIn>
          <p className="eyebrow mb-4">Writing</p>
          <h1
            id="writing-index-heading"
            className="display text-5xl lg:text-6xl tracking-tight"
          >
            Notes from the work.
          </h1>
          <p className="mt-6 text-base text-[color:var(--color-muted)] max-w-xl leading-relaxed">
            Essays on paid media, founder-led brand building, and the new wave
            of AI-native software companies. Written for operators and founders,
            not search engines.
          </p>
        </FadeIn>

        {POSTS.length > 0 ? (
          <ul className="mt-16 divide-y divide-[color:var(--color-border)] border-t border-b border-[color:var(--color-border)]">
            {POSTS.map((p, i) => (
              <FadeIn key={p.slug} as="li" delay={i * 0.04}>
                <Link
                  href={`/writing/${p.slug}`}
                  className="group block py-8 hover:opacity-90"
                >
                  <div className="flex items-baseline justify-between gap-4">
                    <p className="text-xs text-[color:var(--color-muted)] whitespace-nowrap">
                      {dateFmt.format(new Date(p.publishedAt))}
                    </p>
                    <p className="text-xs text-[color:var(--color-muted)]">
                      {p.readingMinutes} min
                    </p>
                  </div>
                  <h2 className="display text-3xl tracking-tight mt-3 group-hover:text-[color:var(--color-accent)] transition-colors">
                    {p.title}
                  </h2>
                  <p className="mt-3 text-base text-[color:var(--color-text)]/80 leading-relaxed">
                    {p.description}
                  </p>
                </Link>
              </FadeIn>
            ))}
          </ul>
        ) : (
          <div className="mt-16 p-12 border border-dashed border-[color:var(--color-border)] text-center">
            <p className="text-[color:var(--color-muted)]">
              First posts landing soon.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
