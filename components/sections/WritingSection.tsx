import Link from "next/link";
import { FadeIn } from "@/components/FadeIn";
import { POSTS } from "@/lib/site";

const dateFmt = new Intl.DateTimeFormat("en-US", {
  year: "numeric",
  month: "short",
  day: "numeric",
});

export function WritingSection() {
  const recent = POSTS.slice(0, 3);
  return (
    <section
      id="writing"
      className="section border-t border-[color:var(--color-border)]"
      aria-labelledby="writing-heading"
    >
      <div className="container-content">
        <FadeIn>
          <div className="flex items-end justify-between flex-wrap gap-4">
            <div>
              <p className="eyebrow mb-4">Writing</p>
              <h2
                id="writing-heading"
                className="display text-4xl lg:text-5xl tracking-tight"
              >
                Notes from the work.
              </h2>
            </div>
            <Link
              href="/writing"
              className="text-sm text-[color:var(--color-muted)] hover:text-[color:var(--color-accent)] transition-colors"
            >
              All posts →
            </Link>
          </div>
        </FadeIn>

        {recent.length > 0 ? (
          <ul className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            {recent.map((p, i) => (
              <FadeIn key={p.slug} as="li" delay={i * 0.05}>
                <Link
                  href={`/writing/${p.slug}`}
                  className="group flex flex-col h-full p-6 border border-[color:var(--color-border)] hover:border-[color:var(--color-accent)] transition-colors"
                >
                  <p className="text-xs text-[color:var(--color-muted)]">
                    {dateFmt.format(new Date(p.publishedAt))} ·{" "}
                    {p.readingMinutes} min read
                  </p>
                  <h3 className="display text-2xl tracking-tight mt-3 group-hover:text-[color:var(--color-accent)] transition-colors">
                    {p.title}
                  </h3>
                  <p className="mt-4 text-sm text-[color:var(--color-text)]/85 leading-relaxed flex-1">
                    {p.description}
                  </p>
                  <span className="mt-6 text-sm text-[color:var(--color-accent)]">
                    Read →
                  </span>
                </Link>
              </FadeIn>
            ))}
          </ul>
        ) : (
          <FadeIn>
            <div className="mt-12 p-12 border border-dashed border-[color:var(--color-border)] text-center">
              <p className="text-[color:var(--color-muted)]">
                First posts landing soon.{" "}
                <Link
                  href="/writing"
                  className="underline underline-offset-4 hover:text-[color:var(--color-accent)]"
                >
                  Visit the writing index
                </Link>
                .
              </p>
            </div>
          </FadeIn>
        )}
      </div>
    </section>
  );
}
