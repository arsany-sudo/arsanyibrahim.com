import Link from "next/link";

export default function NotFound() {
  return (
    <section className="section">
      <div className="container-content max-w-2xl text-center">
        <p className="eyebrow mb-4">404</p>
        <h1 className="display text-5xl lg:text-6xl tracking-tight">
          That page is missing.
        </h1>
        <p className="mt-6 text-base text-[color:var(--color-muted)] leading-relaxed">
          The link is broken, the page moved, or it never existed. Try the
          homepage instead.
        </p>
        <div className="mt-10 flex justify-center gap-4 flex-wrap">
          <Link
            href="/"
            className="inline-flex items-center justify-center bg-[color:var(--color-accent)] text-[color:var(--color-bg)] px-6 py-3 text-sm font-medium hover:bg-[color:var(--color-text)] transition-colors"
          >
            Back to home
          </Link>
          <Link
            href="/about"
            className="inline-flex items-center justify-center border border-[color:var(--color-border)] px-6 py-3 text-sm hover:border-[color:var(--color-accent)] hover:text-[color:var(--color-accent)] transition-colors"
          >
            Read the about page
          </Link>
        </div>
      </div>
    </section>
  );
}
