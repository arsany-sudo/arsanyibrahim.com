import { FadeIn } from "@/components/FadeIn";
import { WORK } from "@/lib/site";

export function Work() {
  return (
    <section
      id="work"
      className="section border-t border-[color:var(--color-border)]"
      aria-labelledby="work-heading"
    >
      <div className="container-content">
        <FadeIn>
          <p className="eyebrow mb-4">Selected work</p>
          <h2
            id="work-heading"
            className="display text-4xl lg:text-5xl tracking-tight max-w-3xl"
          >
            Real budgets. Real numbers. Real outcomes.
          </h2>
        </FadeIn>

        <ul className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-px bg-[color:var(--color-border)] border border-[color:var(--color-border)]">
          {WORK.map((w, i) => (
            <FadeIn key={w.client} as="li" delay={i * 0.05}>
              <article className="flex flex-col h-full bg-[color:var(--color-bg)] p-8 lg:p-10">
                <header>
                  <h3 className="display text-2xl tracking-tight">
                    {w.client}
                  </h3>
                  <p className="text-xs mt-2 text-[color:var(--color-muted)] tracking-wider uppercase">
                    {w.industry} · {w.year}
                  </p>
                </header>
                <dl className="mt-6 space-y-4 text-sm leading-relaxed flex-1">
                  <div>
                    <dt className="eyebrow mb-1">Challenge</dt>
                    <dd className="text-[color:var(--color-text)]/90">
                      {w.challenge}
                    </dd>
                  </div>
                  <div>
                    <dt className="eyebrow mb-1">What we did</dt>
                    <dd className="text-[color:var(--color-text)]/90">
                      {w.whatWeDid}
                    </dd>
                  </div>
                </dl>
                <p className="mt-6 pt-6 border-t border-[color:var(--color-border)] text-[color:var(--color-accent)] display text-xl">
                  {w.result}
                </p>
              </article>
            </FadeIn>
          ))}
          <FadeIn as="li" delay={WORK.length * 0.05}>
            <div className="flex items-center justify-center text-center h-full min-h-[280px] bg-[color:var(--color-bg)] p-8 border-2 border-dashed border-[color:var(--color-border)]">
              <p className="text-sm text-[color:var(--color-muted)] max-w-xs">
                Fourth case study coming soon.
              </p>
            </div>
          </FadeIn>
        </ul>
      </div>
    </section>
  );
}
