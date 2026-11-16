# SEO agent rules for this repo

Read by the scheduled SEO tasks (Site fix, Blog, monthly strategist). The task prompt is the same for every site. Everything specific to this site lives here and in the Client Roster row for this repo. If this file and the task prompt disagree on a site-specific point, this file wins. Safety limits in the task prompt always win.

## Site
- Domain: arsanyibrahim.com (personal brand site of Arsany Ibrahim). Next.js app, hosted on Vercel, project "arsany".
- Read AGENTS.md first. Read the matching guide in node_modules/next/dist/docs/ before touching Next.js code.
- Site facts, copy and company list: lib/site.ts. Structured data: lib/schema.ts. Sitemap: app/sitemap.ts. Writing pages: app/writing.

## Checks before any pull request
- npm ci
- npm run build
- npm run lint

## How changes ship
- Never push to main and never merge your own pull request.
- Site fixes: branch fix/seo-<short-issue>-<YYYYMMDD>, one pull request per issue.
- .github/workflows/seo-automerge.yml merges the pull request on its own when the Vercel build passes and every changed file is inside .github/seo-automerge.json. Otherwise it leaves a comment that says why and the pull request waits for Arsany.
- What merges on its own (third rework, 2026-11-15): Only existing app/**/*.tsx and components/**/*.tsx files can merge, every change block must replace as many lines as it removes, and each changed line must be one of: (1) a title or description key of export const metadata (or of its openGraph or twitter block) reworded in place, as one quoted string on the key's line or on the line after a bare description: key; (2) a one-line <h1> to <h6> element whose text is reworded with its tag and attributes unchanged (a heading split over several lines waits); (3) a plain alt="..." on an image tag (img, Image, Picture, Media, ShoeImage, ProductImage) reworded, when the tag opens on that line, only plain attributes come before alt and nothing else on the line changes. New text may use only letters (accented Latin letters allowed), digits, spaces and . , : ; ' & | ( ) / ? - and the en dash; no backslash, angle bracket, brace, $, backtick, = or HTML entity. Titles and headings up to 120 characters, descriptions 320, alt text 200. Everything else waits for Arsany: structured data and JSON-LD, schema and SEO helpers, metadata helpers, sitemap, robots, llms files, image lists and every other .ts, .js, .json or .txt file, a template literal or expression in a title, a link in a page or component file (that is code), an added or deleted line, a new title, seoTitle or description line, and body copy. lib/schema.ts (structured data) now always waits for Arsany. The blog lane is off.
- Never edit anything under .github, package files, config files, env files or app/api.

## Off limits on this site
- The contact form and app/contact, app/api, tracking or analytics code.
- lib/site.ts facts: numbers, titles, bios, company descriptions and outbound company URLs. A wrong fact or a dead outbound link is reported, not rewritten.
- No blog on this site: Run: Weekly blog is off. Blog auto-merge is disabled in .github/seo-automerge.json.

## Known open items (not for the agent to decide)
- www vs apex redirect.
- gabaltravel.com outbound link in lib/site.ts.
- Google and Bing verification values in lib/site.ts still say REPLACE_AFTER_LAUNCH.
