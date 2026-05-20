import Link from "next/link";
import { FadeIn } from "@/components/FadeIn";

const placeholders = [
  { id: 1, label: "Logo" },
  { id: 2, label: "Logo" },
  { id: 3, label: "Logo" },
  { id: 4, label: "Logo" },
];

export function SpeakingPress() {
  return (
    <section
      id="press"
      className="section border-t border-[color:var(--color-border)]"
      aria-labelledby="press-heading"
    >
      <div className="container-content">
        <FadeIn>
          <p className="eyebrow mb-4">Speaking &amp; Press</p>
          <h2
            id="press-heading"
            className="display text-4xl lg:text-5xl tracking-tight max-w-3xl"
          >
            Featured and forthcoming.
          </h2>
          <p className="mt-6 text-base text-[color:var(--color-muted)] max-w-2xl leading-relaxed">
            Press inquiries and speaking requests welcome.{" "}
            <Link
              href="/press"
              className="text-[color:var(--color-text)] underline decoration-[color:var(--color-accent)] underline-offset-4 hover:text-[color:var(--color-accent)] transition-colors"
            >
              View the press kit
            </Link>
            .
          </p>
        </FadeIn>

        <ul className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-px bg-[color:var(--color-border)] border border-[color:var(--color-border)]">
          {placeholders.map((p, i) => (
            <FadeIn key={p.id} as="li" delay={i * 0.04}>
              <div className="flex items-center justify-center h-32 bg-[color:var(--color-bg)] text-[color:var(--color-muted)] text-xs tracking-widest uppercase">
                [{p.label}]
              </div>
            </FadeIn>
          ))}
        </ul>
      </div>
    </section>
  );
}
