import type { Metadata } from "next";
import Image from "next/image";
import { FadeIn } from "@/components/FadeIn";
import { COMPANIES, PERSON, TIMELINE } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Arsany Ibrahim is a Los Angeles marketing strategist and founder of Elite Créatif. He has overseen more than $20M in managed ad spend and founded four companies.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About — Arsany Ibrahim",
    description:
      "Marketing strategist, founder of Elite Créatif, and founder of Osynra, Gabal Travel, and Omni-Insight.",
    type: "profile",
    url: "/about",
  },
};

export default function AboutPage() {
  return (
    <article className="section">
      <div className="container-content grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        <FadeIn className="lg:col-span-5 lg:sticky lg:top-24">
          <div className="relative aspect-[3/4] w-full overflow-hidden bg-[color:var(--color-surface)] border border-[color:var(--color-border)]">
            <Image
              src="/arsany-about-portrait.png"
              alt={`Portrait of ${PERSON.fullName}`}
              fill
              priority
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover"
            />
          </div>
        </FadeIn>

        <div className="lg:col-span-7">
          <FadeIn>
            <p className="eyebrow mb-4">About</p>
            <h1 className="display text-5xl lg:text-6xl tracking-tight leading-none">
              Arsany Ibrahim
            </h1>
            <p className="display text-2xl mt-4 text-[color:var(--color-muted)]">
              {PERSON.formalTitle}
            </p>
          </FadeIn>

          <FadeIn delay={0.05}>
            <div className="mt-10 space-y-6 text-lg leading-relaxed text-[color:var(--color-text)]/90">
              {PERSON.longBio.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <section className="mt-16" aria-labelledby="timeline-heading">
              <h2
                id="timeline-heading"
                className="display text-3xl tracking-tight"
              >
                Timeline
              </h2>
              <ol className="mt-8 border-t border-[color:var(--color-border)]">
                {TIMELINE.map((t) => (
                  <li
                    key={t.year + t.label}
                    className="grid grid-cols-[120px_1fr] gap-6 py-4 border-b border-[color:var(--color-border)]"
                  >
                    <span className="display text-[color:var(--color-accent)] text-xl">
                      {t.year}
                    </span>
                    <span className="text-base text-[color:var(--color-text)]/90">
                      {t.label}
                    </span>
                  </li>
                ))}
              </ol>
            </section>
          </FadeIn>

          <FadeIn delay={0.15}>
            <section className="mt-16" aria-labelledby="companies-heading">
              <h2
                id="companies-heading"
                className="display text-3xl tracking-tight"
              >
                Companies founded
              </h2>
              <ul className="mt-8 space-y-4">
                {COMPANIES.map((c) => (
                  <li
                    key={c.slug}
                    className="flex items-baseline justify-between gap-6 py-3 border-b border-[color:var(--color-border)]"
                  >
                    <div>
                      <p className="display text-xl">{c.name}</p>
                      <p className="text-sm text-[color:var(--color-muted)] mt-1">
                        {c.short}
                      </p>
                    </div>
                    <a
                      href={c.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-[color:var(--color-muted)] hover:text-[color:var(--color-accent)] whitespace-nowrap"
                    >
                      {c.domain} ↗
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          </FadeIn>

          <FadeIn delay={0.2}>
            <section className="mt-16" aria-labelledby="elsewhere-heading">
              <h2
                id="elsewhere-heading"
                className="display text-3xl tracking-tight"
              >
                Find me elsewhere
              </h2>
              <ul className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-4">
                {PERSON.socials.map((s) => (
                  <li key={s.name}>
                    <a
                      href={s.url}
                      target="_blank"
                      rel="me noopener noreferrer"
                      className="block p-4 border border-[color:var(--color-border)] hover:border-[color:var(--color-accent)] transition-colors"
                    >
                      <p className="text-sm">{s.name}</p>
                      <p className="text-xs text-[color:var(--color-muted)] mt-1">
                        {s.handle}
                      </p>
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          </FadeIn>
        </div>
      </div>
    </article>
  );
}
