import Link from "next/link";
import { FadeIn } from "@/components/FadeIn";

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
            Working on a story?
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
      </div>
    </section>
  );
}
