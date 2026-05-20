"use client";

import { useState } from "react";

type Status = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage(null);
    const data = new FormData(e.currentTarget);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          message: data.get("message"),
          honeypot: data.get("company"),
        }),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error || "Something went wrong. Try again.");
      }
      setStatus("success");
      e.currentTarget.reset();
    } catch (err) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error ? err.message : "Something went wrong.",
      );
    }
  }

  return (
    <form
      onSubmit={onSubmit}
      className="space-y-5"
      aria-describedby="contact-form-status"
    >
      <div
        aria-hidden="true"
        className="absolute -left-[9999px] h-0 w-0 overflow-hidden"
      >
        <label>
          Company
          <input
            type="text"
            name="company"
            tabIndex={-1}
            autoComplete="off"
          />
        </label>
      </div>

      <div>
        <label
          htmlFor="contact-name"
          className="block text-xs uppercase tracking-widest text-[color:var(--color-muted)] mb-2"
        >
          Name
        </label>
        <input
          id="contact-name"
          name="name"
          type="text"
          required
          autoComplete="name"
          maxLength={120}
          className="w-full bg-transparent border border-[color:var(--color-border)] px-4 py-3 text-base focus:border-[color:var(--color-accent)] focus:outline-none transition-colors"
        />
      </div>

      <div>
        <label
          htmlFor="contact-email"
          className="block text-xs uppercase tracking-widest text-[color:var(--color-muted)] mb-2"
        >
          Email
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          required
          autoComplete="email"
          maxLength={200}
          className="w-full bg-transparent border border-[color:var(--color-border)] px-4 py-3 text-base focus:border-[color:var(--color-accent)] focus:outline-none transition-colors"
        />
      </div>

      <div>
        <label
          htmlFor="contact-message"
          className="block text-xs uppercase tracking-widest text-[color:var(--color-muted)] mb-2"
        >
          Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          required
          rows={6}
          maxLength={4000}
          className="w-full bg-transparent border border-[color:var(--color-border)] px-4 py-3 text-base resize-y focus:border-[color:var(--color-accent)] focus:outline-none transition-colors"
        />
      </div>

      <div className="flex items-center justify-between gap-4 flex-wrap">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="inline-flex items-center justify-center bg-[color:var(--color-accent)] text-[color:var(--color-bg)] px-6 py-3 text-sm font-medium hover:bg-[color:var(--color-text)] disabled:opacity-60 disabled:cursor-not-allowed transition-colors"
        >
          {status === "submitting" ? "Sending..." : "Send message"}
        </button>
        <p
          id="contact-form-status"
          role="status"
          aria-live="polite"
          className="text-sm min-h-[1.25rem]"
        >
          {status === "success" && (
            <span className="text-[color:var(--color-accent)]">
              Thanks. I&apos;ll be in touch.
            </span>
          )}
          {status === "error" && errorMessage && (
            <span className="text-red-400">{errorMessage}</span>
          )}
        </p>
      </div>
    </form>
  );
}
