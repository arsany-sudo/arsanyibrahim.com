import { FadeIn } from "@/components/FadeIn";
import { ContactForm } from "@/components/ContactForm";
import { PERSON } from "@/lib/site";

export function ContactSection() {
  return (
    <section
      id="contact"
      className="section border-t border-[color:var(--color-border)]"
      aria-labelledby="contact-heading"
    >
      <div className="container-content grid grid-cols-1 lg:grid-cols-12 gap-12">
        <FadeIn className="lg:col-span-5">
          <p className="eyebrow mb-4">Contact</p>
          <h2
            id="contact-heading"
            className="display text-4xl lg:text-5xl tracking-tight"
          >
            Let&apos;s talk.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-[color:var(--color-text)]/85 max-w-md">
            Pitching a project, a podcast, or a publication? Send a note. I read
            every message.
          </p>

          <dl className="mt-10 space-y-6 text-sm">
            <div>
              <dt className="eyebrow mb-1">Email</dt>
              <dd>
                <a
                  href={`mailto:${PERSON.email}`}
                  className="text-base text-[color:var(--color-text)] hover:text-[color:var(--color-accent)] transition-colors"
                >
                  {PERSON.email}
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
            <div>
              <dt className="eyebrow mb-1">Office</dt>
              <dd>
                <address className="not-italic text-base leading-relaxed text-[color:var(--color-text)]/90">
                  {PERSON.address.street}
                  <br />
                  {PERSON.address.city}, {PERSON.address.region}{" "}
                  {PERSON.address.postalCode}
                </address>
              </dd>
            </div>
          </dl>

          <ul className="mt-10 flex gap-5 text-sm">
            {PERSON.socials.map((s) => (
              <li key={s.name}>
                <a
                  href={s.url}
                  target="_blank"
                  rel="me noopener noreferrer"
                  className="text-[color:var(--color-muted)] hover:text-[color:var(--color-accent)] transition-colors"
                >
                  {s.name}
                </a>
              </li>
            ))}
          </ul>
        </FadeIn>

        <FadeIn className="lg:col-span-7" delay={0.05}>
          <div className="bg-[color:var(--color-surface)] border border-[color:var(--color-border)] p-6 lg:p-10">
            <ContactForm />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
