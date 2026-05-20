import Image from "next/image";
import Link from "next/link";
import { FadeIn } from "@/components/FadeIn";

export function Hero() {
  return (
    <section className="section pt-16 lg:pt-24" aria-labelledby="hero-heading">
      <div className="container-content grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
        <div className="lg:col-span-7 order-2 lg:order-1">
          <FadeIn>
            <p className="eyebrow mb-6">Los Angeles · Since 2018</p>
            <h1
              id="hero-heading"
              className="hero-h1 text-[color:var(--color-text)]"
            >
              Arsany Ibrahim
            </h1>
            <p className="display text-2xl lg:text-3xl mt-6 text-[color:var(--color-muted)]">
              Marketing Strategist. Founder of Elite Créatif.
            </p>
            <p className="mt-8 text-lg leading-relaxed max-w-2xl text-[color:var(--color-text)]/90">
              I help brands grow through paid media, content, and PR. Currently
              running a Los Angeles agency managing $20M+ in ad spend, and
              shipping software in telehealth, travel, and marketing analytics.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-[color:var(--color-accent)] text-[color:var(--color-bg)] px-6 py-3 text-sm font-medium hover:bg-[color:var(--color-text)] transition-colors"
              >
                Work with me
              </Link>
              <Link
                href="#work"
                className="inline-flex items-center justify-center border border-[color:var(--color-border)] px-6 py-3 text-sm hover:border-[color:var(--color-accent)] hover:text-[color:var(--color-accent)] transition-colors"
              >
                See the work
              </Link>
            </div>
          </FadeIn>
        </div>

        <div className="lg:col-span-5 order-1 lg:order-2">
          <FadeIn delay={0.1}>
            <div className="relative aspect-[3/4] w-full overflow-hidden bg-[color:var(--color-surface)] border border-[color:var(--color-border)]">
              <Image
                src="/arsany-hero-portrait.png"
                alt="Portrait of Arsany Ibrahim, marketing strategist and founder of Elite Créatif"
                fill
                priority
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
