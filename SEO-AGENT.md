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
- Never edit anything under .github, package files, config files, env files or app/api.

## Off limits on this site
- The contact form and app/contact, app/api, tracking or analytics code.
- lib/site.ts facts: numbers, titles, bios, company descriptions and outbound company URLs. A wrong fact or a dead outbound link is reported, not rewritten.
- No blog on this site: Run: Weekly blog is off. Blog auto-merge is disabled in .github/seo-automerge.json.

## Known open items (not for the agent to decide)
- www vs apex redirect.
- gabaltravel.com outbound link in lib/site.ts.
- Google and Bing verification values in lib/site.ts still say REPLACE_AFTER_LAUNCH.
