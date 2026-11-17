<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

## Compliance rules (every change, every agent)

- Adding, removing or changing any tracker, pixel, analytics, chat widget, embed, font CDN or other third-party script: update `compliance/trackers.json`, the privacy policy (`app/privacy/page.tsx`, its "Who receives it" and tracking sections and its `UPDATED` date) and the Content-Security-Policy in `next.config.ts` in the same change. Today the site has no consent banner because it loads no trackers; adding one means adding a consent setup in the same change. Never load a third-party script any other way.
- Adding or changing a form (today only `components/ContactForm.tsx`): consent text and a privacy policy link next to it; SMS consent is a separate unchecked optional box with the full SMS disclosure; email consent never pre-checked; consent proof (time, IP, page, exact text) saved with the contact.
- Adding a new data use, vendor, email or SMS program, payment, subscription or account feature: update `app/privacy/page.tsx`, `app/terms/page.tsx` and add SMS terms if texts are sent, in the same change, with "Last updated" dates.
- Adding or changing a page or component: it must pass WCAG 2.2 AA (axe clean at 1440 and 390 wide, no overflow at 320, keyboard reachable, visible focus, labels, alt text, contrast, 24px targets, pausable motion, captions for speech) and carry the footer legal links in `components/Footer.tsx` (privacy, terms, accessibility). New pages go in `app/sitemap.ts` so the guard checks them.
- New claims, testimonials, reviews, client names or logos, results, prices or guarantees (`lib/site.ts`): only if real, provable and approved. Never AI-generated testimonials or people passed off as real.
- Health sites: no patient data in code, logs, analytics or outside models; nothing from Bask or GoHighLevel goes to an outside model or service. Never log form submissions (see `app/api/contact/route.ts`).
- Run the compliance guard (`npm run check`: lint, build, then `tests/compliance.spec.ts`) before every push. CI runs it too (`.github/workflows/compliance.yml`). A legal page change is a draft for Arsany (and an attorney when it changes rights, disputes or liability) and never ships without his OK.
- Re-run the full audit prompt (claude/site-compliance-audit-prompt.md in the Weekly Ops project) every 6 months, or right away when a new law or a demand letter shows up. Last audit: `docs/compliance-audit-2026-11-17.md`.
