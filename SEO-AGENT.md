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
- What the merge rule checks, whatever the file: in a fix/seo-* pull request every file must already exist and only be modified (no new, deleted or renamed files); in a blog/* pull request every file must be a new post. It never merges a route, API, middleware, proxy, robots, config, package, script or HTML file, a changed line over 2,000 characters, or a changed line that adds or removes code (process.env, fetch, import, require, eval, script, iframe and similar tags, event handlers), a redirect, noindex, nofollow, disallow or canonical rule, or a URL whose host is not on the hosts list in .github/seo-automerge.json. Deny words are also checked after undoing look-alike tricks (HTML entities, escapes, zero-width characters, soft hyphens, accents, Cyrillic or Greek letters). Outside the page and post files, only .ts, .js and .json files may change on their own, and only with plain data lines (a key with a quoted string, number, list or dotted name, a closing bracket, or a // comment); a component or markup file there (.tsx, .astro, .xml, .svg) waits for Arsany.
- Page and component files (app/**/*.tsx, components/**) auto-merge only for internal links inside existing sentences (a site path, plain classes only, no new import line), alt text, the literal title and description string lines of a page's metadata object (a title object such as { absolute } waits), and rewording an existing H1 to H3 in place (same attributes, no style, at most 120 characters). Body copy (Hero, About, FAQ and any other sentence) and new copy wait for Arsany. lib/schema.ts and lib/llms.ts merge on their own only as plain data lines and // comments, with URLs only to the hosts listed in .github/seo-automerge.json. New files, including new routes under app/, wait for Arsany.
- Never edit anything under .github, package files, config files, env files or app/api.

## Off limits on this site
- The contact form and app/contact, app/api, tracking or analytics code.
- lib/site.ts facts: numbers, titles, bios, company descriptions and outbound company URLs. A wrong fact or a dead outbound link is reported, not rewritten.
- No blog on this site: Run: Weekly blog is off. Blog auto-merge is disabled in .github/seo-automerge.json.

## Known open items (not for the agent to decide)
- www vs apex redirect.
- gabaltravel.com outbound link in lib/site.ts.
- Google and Bing verification values in lib/site.ts still say REPLACE_AFTER_LAUNCH.
