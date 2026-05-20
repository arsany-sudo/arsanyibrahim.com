import Image from "next/image";
import Link from "next/link";
import { FadeIn } from "@/components/FadeIn";
import { PERSON } from "@/lib/site";

export function AboutSection() {
  return (
    <section
      id="about"
      className="section border-t border-[color:var(--color-border)]"
      aria-labelledby="about-heading"
    >
      <div className="container-content grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
        <FadeIn className="lg:col-span-5">
          <div className="relative aspect-[3/4] w-full overflow-hidden bg-[color:var(--color-surface)] border border-[color:var(--color-border)]">
            <Image
              src="/arsany-about-portrait.png"
              alt="Arsany Ibrahim, photographed for the About page"
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover"
            />
          </div>
        </FadeIn>

        <FadeIn className="lg:col-span-7" delay={0.1}>
          <p className="eyebrow mb-4">About</p>
          <h2
            id="about-heading"
            className="display text-4xl lg:text-5xl tracking-tight"
          >
            A short version.
          </h2>
          <p className="mt-8 text-lg leading-relaxed text-[color:var(--color-text)]/90">
            {PERSON.shortBio}
          </p>
          <p className="mt-6 text-base leading-relaxed text-[color:var(--color-muted)]">
            For the long version, including the timeline and the four companies
            I&apos;ve founded,{" "}
            <Link
              href="/about"
              className="text-[color:var(--color-text)] underline decoration-[color:var(--color-accent)] underline-offset-4 hover:text-[color:var(--color-accent)] transition-colors"
            >
              read the full bio
            </Link>
            .
          </p>

          <div className="mt-10">
            <p className="eyebrow mb-3">Find me elsewhere</p>
            <ul className="flex flex-wrap gap-x-6 gap-y-3 text-sm">
              {PERSON.socials.map((s) => (
                <li key={s.name}>
                  <a
                    href={s.url}
                    target="_blank"
                    rel="me noopener noreferrer"
                    className="text-[color:var(--color-text)] hover:text-[color:var(--color-accent)] transition-colors"
                  >
                    {s.name}{" "}
                    <span className="text-[color:var(--color-muted)]">
                      {s.handle}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
