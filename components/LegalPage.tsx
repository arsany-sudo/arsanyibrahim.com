import type { ReactNode } from "react";

// Shared layout for /privacy, /terms and /accessibility. Prose styles live here so the pages stay plain JSX.
export function LegalPage({
  eyebrow,
  title,
  updated,
  children,
}: {
  eyebrow: string;
  title: string;
  updated: string;
  children: ReactNode;
}) {
  return (
    <section className="section" aria-labelledby="legal-heading">
      <div className="container-content max-w-3xl">
        <p className="eyebrow mb-4">{eyebrow}</p>
        <h1 id="legal-heading" className="display text-4xl lg:text-5xl tracking-tight">
          {title}
        </h1>
        <p className="mt-4 text-sm text-[color:var(--color-muted)]">Last updated: {updated}</p>
        <div className="mt-10 space-y-5 leading-relaxed text-[color:var(--color-text)] [&_h2]:display [&_h2]:text-2xl [&_h2]:mt-12 [&_h2]:mb-2 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2 [&_a]:underline [&_a]:underline-offset-4 [&_a]:decoration-[color:var(--color-accent)] [&_a:hover]:text-[color:var(--color-accent)]">
          {children}
        </div>
      </div>
    </section>
  );
}
