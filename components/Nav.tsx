import Link from "next/link";

const links = [
  { href: "/about", label: "About" },
  { href: "/#work", label: "Work" },
  { href: "/writing", label: "Writing" },
  { href: "/press", label: "Press" },
  { href: "/contact", label: "Contact" },
];

export function Nav() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-[color:var(--color-bg)]/70 border-b border-[color:var(--color-border)]">
      <nav
        className="container-content flex items-center justify-between h-16"
        aria-label="Primary"
      >
        <Link
          href="/"
          className="display text-lg tracking-tight hover:text-[color:var(--color-accent)] transition-colors"
        >
          Arsany Ibrahim
        </Link>
        <ul className="flex items-center gap-6 text-sm">
          {links.map((l) => (
            <li key={l.href} className="hidden sm:block">
              <Link
                href={l.href}
                className="text-[color:var(--color-muted)] hover:text-[color:var(--color-text)] transition-colors"
              >
                {l.label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="/contact"
              className="sm:hidden text-sm text-[color:var(--color-text)] underline decoration-[color:var(--color-accent)] underline-offset-4"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
