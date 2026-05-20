import Link from "next/link";
import { PERSON } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-[color:var(--color-border)] mt-16">
      <div className="container-content py-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="display text-2xl">Arsany Ibrahim</p>
          <p className="text-sm text-[color:var(--color-muted)] mt-2">
            Marketing strategist. Founder of Elite Créatif.
          </p>
          <address className="not-italic text-sm text-[color:var(--color-muted)] mt-4 leading-relaxed">
            {PERSON.address.street}
            <br />
            {PERSON.address.city}, {PERSON.address.region}{" "}
            {PERSON.address.postalCode}
            <br />
            <a
              href={`mailto:${PERSON.email}`}
              className="hover:text-[color:var(--color-text)] transition-colors"
            >
              {PERSON.email}
            </a>
          </address>
        </div>
        <div className="flex flex-col gap-3 md:items-end">
          <ul className="flex gap-4 text-sm">
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
          <p className="text-xs text-[color:var(--color-muted)]">
            © {new Date().getFullYear()} Arsany Ibrahim. All rights reserved.{" "}
            <Link
              href="/press"
              className="hover:text-[color:var(--color-text)] underline underline-offset-4"
            >
              Press kit
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
