import Image from "next/image";
import Link from "next/link";
import { PERSON } from "@/lib/site";

export function AuthorBio() {
  return (
    <aside
      className="mt-20 p-6 lg:p-8 border-t border-b border-[color:var(--color-border)] flex flex-col sm:flex-row gap-6 items-start"
      aria-label="About the author"
    >
      <Link
        href="/about"
        className="block flex-shrink-0"
        aria-label={`About ${PERSON.fullName}`}
      >
        <Image
          src={PERSON.headshot.path}
          alt={PERSON.headshot.caption}
          width={96}
          height={96}
          className="rounded-full border border-[color:var(--color-border)]"
        />
      </Link>
      <div className="flex-1">
        <p className="eyebrow mb-1">Written by</p>
        <p className="display text-2xl tracking-tight">
          <Link
            href="/about"
            className="hover:text-[color:var(--color-accent)] transition-colors"
          >
            {PERSON.fullName}
          </Link>
        </p>
        <p className="mt-3 text-sm leading-relaxed text-[color:var(--color-text)]/85 max-w-xl">
          Marketing strategist and founder of Elite Créatif, a Los Angeles paid
          media and communications agency. Founder of Osynra, Gabal Travel, and
          Omni-Insight.
        </p>
        <ul className="mt-4 flex gap-4 text-xs">
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
      </div>
    </aside>
  );
}
