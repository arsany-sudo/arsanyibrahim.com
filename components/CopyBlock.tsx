"use client";

import { useState } from "react";

type Props = {
  label: string;
  text: string;
};

export function CopyBlock({ label, text }: Props) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  }

  return (
    <div className="border border-[color:var(--color-border)] p-6">
      <div className="flex items-center justify-between mb-4">
        <p className="eyebrow">{label}</p>
        <button
          type="button"
          onClick={copy}
          className="text-xs text-[color:var(--color-muted)] hover:text-[color:var(--color-accent)] transition-colors"
          aria-live="polite"
        >
          {copied ? "Copied" : "Copy"}
        </button>
      </div>
      <p className="text-base leading-relaxed text-[color:var(--color-text)]/90 whitespace-pre-line">
        {text}
      </p>
    </div>
  );
}
