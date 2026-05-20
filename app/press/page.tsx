import type { Metadata } from "next";
import Image from "next/image";
import { CopyBlock } from "@/components/CopyBlock";
import { FadeIn } from "@/components/FadeIn";
import { PERSON, PRESS_KIT } from "@/lib/site";

export const metadata: Metadata = {
  title: "Press kit",
  description:
    "Press kit for Arsany Ibrahim — headshots in three sizes, three bio lengths, and a press inquiry contact.",
  alternates: { canonical: "/press" },
  openGraph: {
    title: "Press kit — Arsany Ibrahim",
    description: "Headshots, bios, and press contact for Arsany Ibrahim.",
    url: "/press",
    type: "website",
  },
};

export default function PressPage() {
  return (
    <section className="section" aria-labelledby="press-heading">
      <div className="container-content">
        <FadeIn>
          <p className="eyebrow mb-4">Press kit</p>
          <h1
            id="press-heading"
            className="display text-5xl lg:text-6xl tracking-tight"
          >
            Media assets and bios.
          </h1>
          <p className="mt-6 text-base text-[color:var(--color-muted)] max-w-xl leading-relaxed">
            Everything you need to file a story, book a podcast, or program a
            stage. For anything you can&apos;t find here, write to{" "}
            <a
              href={`mailto:${PRESS_KIT.inquiryEmail}`}
              className="text-[color:var(--color-text)] underline decoration-[color:var(--color-accent)] underline-offset-4 hover:text-[color:var(--color-accent)] transition-colors"
            >
              {PRESS_KIT.inquiryEmail}
            </a>
            .
          </p>
        </FadeIn>

        <FadeIn delay={0.05}>
          <div className="mt-16 relative aspect-[3/2] w-full overflow-hidden bg-[color:var(--color-surface)] border border-[color:var(--color-border)]">
            <Image
              src="/arsany-press-alt.png"
              alt={`Editorial portrait of ${PERSON.fullName}`}
              fill
              priority
              sizes="(min-width: 1200px) 1200px, 100vw"
              className="object-cover"
            />
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <section className="mt-20" aria-labelledby="headshots-heading">
            <h2
              id="headshots-heading"
              className="display text-3xl tracking-tight"
            >
              Headshots
            </h2>
            <p className="mt-3 text-sm text-[color:var(--color-muted)]">
              Right-click or tap to save. Available in three sizes.
            </p>

            <ul className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
              {PRESS_KIT.headshots.map((h) => (
                <li key={h.size}>
                  <a
                    href={h.path}
                    download={`arsany-ibrahim-${h.size}px.jpg`}
                    className="group block border border-[color:var(--color-border)] hover:border-[color:var(--color-accent)] transition-colors"
                  >
                    <div className="relative aspect-square w-full overflow-hidden bg-[color:var(--color-surface)]">
                      <Image
                        src={h.path}
                        alt={`Square headshot of Arsany Ibrahim, ${h.size}px`}
                        fill
                        sizes="(min-width: 640px) 33vw, 100vw"
                        className="object-cover"
                      />
                    </div>
                    <div className="flex items-center justify-between p-4 text-sm">
                      <span>{h.size}px square</span>
                      <span className="text-[color:var(--color-accent)] group-hover:underline underline-offset-4">
                        Download ↓
                      </span>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </section>
        </FadeIn>

        <FadeIn delay={0.15}>
          <section className="mt-20" aria-labelledby="bios-heading">
            <h2 id="bios-heading" className="display text-3xl tracking-tight">
              Bios
            </h2>
            <p className="mt-3 text-sm text-[color:var(--color-muted)]">
              Use whichever fits. Word-for-word reproduction encouraged.
            </p>

            <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4">
              <CopyBlock label="One-liner" text={PERSON.oneLiner} />
              <CopyBlock label="Short bio" text={PERSON.shortBio} />
              <CopyBlock
                label="Long bio"
                text={PERSON.longBio.join("\n\n")}
              />
            </div>
          </section>
        </FadeIn>

        <FadeIn delay={0.2}>
          <section className="mt-20" aria-labelledby="press-contact-heading">
            <h2
              id="press-contact-heading"
              className="display text-3xl tracking-tight"
            >
              Press inquiries
            </h2>
            <dl className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm">
              <div>
                <dt className="eyebrow mb-1">Email</dt>
                <dd>
                  <a
                    href={`mailto:${PRESS_KIT.inquiryEmail}`}
                    className="text-base text-[color:var(--color-text)] hover:text-[color:var(--color-accent)] transition-colors"
                  >
                    {PRESS_KIT.inquiryEmail}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="eyebrow mb-1">Phone</dt>
                <dd>
                  <a
                    href={`tel:${PERSON.phoneRaw}`}
                    className="text-base text-[color:var(--color-text)] hover:text-[color:var(--color-accent)] transition-colors"
                  >
                    {PERSON.phone}
                  </a>
                </dd>
              </div>
            </dl>
          </section>
        </FadeIn>
      </div>
    </section>
  );
}
