import Link from "next/link";
import { FadeIn } from "@/components/FadeIn";
import { COMPANIES } from "@/lib/site";

export function Companies() {
  return (
    <section
      id="companies"
      className="section border-t border-[color:var(--color-border)]"
      aria-labelledby="companies-heading"
    >
      <div className="container-content">
        <FadeIn>
          <p className="eyebrow mb-4">Companies</p>
          <h2
            id="companies-heading"
            className="display text-4xl lg:text-5xl tracking-tight max-w-3xl"
          >
            Four companies. One founder.
          </h2>
        </FadeIn>

        <ul className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-px bg-[color:var(--color-border)] border border-[color:var(--color-border)]">
          {COMPANIES.map((c, i) => (
            <FadeIn key={c.slug} as="li" delay={i * 0.05}>
              <Link
                href={`/companies/${c.slug}`}
                className="group flex flex-col h-full bg-[color:var(--color-bg)] p-8 lg:p-10 hover:bg-[color:var(--color-surface)] transition-colors"
              >
                <div className="flex items-center justify-between">
                  <h3 className="display text-3xl tracking-tight group-hover:text-[color:var(--color-accent)] transition-colors">
                    {c.name}
                  </h3>
                  <span
                    aria-hidden
                    className="text-[color:var(--color-muted)] group-hover:text-[color:var(--color-accent)] transition-colors"
                  >
                    →
                  </span>
                </div>
                <p className="text-xs mt-2 text-[color:var(--color-muted)] tracking-wider uppercase">
                  {c.industry}
                  {c.founded ? ` · Since ${c.founded}` : ""}
                </p>
                <p className="mt-6 text-base text-[color:var(--color-text)]/85 leading-relaxed flex-1">
                  {c.short}
                </p>
                <p className="mt-6 text-xs text-[color:var(--color-muted)]">
                  {c.domain}
                </p>
              </Link>
            </FadeIn>
          ))}
        </ul>
      </div>
    </section>
  );
}
