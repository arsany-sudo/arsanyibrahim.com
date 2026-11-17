# Compliance audit: arsanyibrahim.com, 2026-11-17

Branch `compliance/20261117`, cut from `origin/main` at cae672b3. Done by Claude Code. This is not legal advice. Legal page text is a DRAFT for attorney review.

Operator used in the legal pages: Elite Cratif LLC, doing business as Elite Créatif (the default entity in Arsany's standing instructions; the repo names no other operator for this site).

## 1. Inventory

### Pages and routes (from the build output and `/sitemap.xml`)

| Route | Type | Notes |
|---|---|---|
| `/` | static | Hero, companies, selected work (case results), writing, FAQ, contact form |
| `/about`, `/writing`, `/press`, `/contact` | static | `/contact` repeats the contact form |
| `/companies/elite-creatif`, `/omni-insight`, `/toned-health`, `/gabal-travel` | SSG | Company profiles with outbound links |
| `/writing/what-twenty-million-in-ad-spend-taught-me` | SSG | One article |
| `/privacy`, `/terms`, `/accessibility` | static | New in this branch (drafts) |
| `/api/contact` | dynamic, POST | Contact form handler |
| `/llms.txt`, `/llms-full.txt`, `/sitemap.xml`, `/robots.txt` | text | Not HTML pages |
| 404 | static | Checked with a probe path |

### What the site collects and where it goes

| Item | Finding | Evidence |
|---|---|---|
| Forms | One contact form (on `/` and `/contact`): name, email, message, plus a hidden honeypot field `company`. No checkboxes. Before this branch it had no privacy notice or link. | `components/ContactForm.tsx` |
| Form destination | `POST /api/contact`, which sends an email through Resend (`api.resend.com`, server side) from `site@arsanyibrahim.com` to `arsany@elitecreatif.com` (env `RESEND_FROM`, `CONTACT_TO` can override). Nothing is stored in a database. | `app/api/contact/route.ts` |
| Third-party requests in the browser | None. Playwright loaded every sitemap page plus a 404 probe at 1440 and 390 wide, waited 2.2 s, scrolled the full page: every request went to the site's own origin. Fonts are self-hosted by `next/font`; images are local. | Baseline run, 22 page loads |
| Cookies, localStorage, sessionStorage | None set, by anyone. There is no consent banner, so "before and after consent" is the same state. | Baseline run |
| Form values or URL parameters reaching a third party | None from the browser. Server side, Resend receives the form contents, as intended. Before this branch, when `RESEND_API_KEY` was missing, the full submission was written to the Vercel function log. | `app/api/contact/route.ts` (fixed) |
| Accounts, payments, subscriptions, coupons, reviews, uploads | None. | Source review |
| Content aimed at children | None. | Source review |
| Email and SMS programs | None. The only email is the notification to Arsany's own inbox. No marketing email, no SMS, no GoHighLevel connection on this site. | Source review |
| Production headers | HTTPS with HSTS (preload). No Content-Security-Policy or X-Frame-Options before this branch. Apex redirects to `www` with a 307. No cookies set. | `curl -I` on 2026-11-17 |

## 2. Findings

Severity is about legal and fine exposure for this site as it stands.

| # | Sev | Area | Finding and evidence | Risk in one sentence | Fix | Who |
|---|---|---|---|---|---|---|
| 1 | High | B | No privacy policy anywhere, while the contact form collects names and emails. | California's CalOPPA requires any commercial site that collects personal information from Californians to post a privacy policy conspicuously, whatever the company's size. | Drafted `/privacy` from the inventory; linked in the footer and in the form. | Code (done), Arsany and attorney to approve |
| 2 | High | G | Performance claims and named clients: "$20M+ in managed ad spend" (`lib/site.ts:6,8,10,31,33,35,121,176`, FAQ 225, article title 263), an anonymized pharmacy client "3x qualified inquiries" (`lib/site.ts:196`, named until this branch), CocoJojo "ROAS improved from 1.8 to 3.4 in 90 days" (205), Papa K's "Online orders up 142% year over year" (215), heading "Real budgets. Real numbers. Real outcomes." (`components/sections/Work.tsx:18`). Arsany's own brand rules (Notion, arsanyandco Content Brain) say no client names, numbers or results without written approval, and set a stricter rule for the pharmacy client; production breaks both until this pull request merges. | Under the FTC Act and California's false advertising law, every objective claim needs proof on file, and naming clients and their results without written permission invites both an FTC complaint and a client dispute. | Added a results disclaimer under the case studies and in the terms. Did not change the claims. | Pharmacy case study anonymized in this branch at Arsany's direction (the old name stays in git history and on the live site until merge). Arsany: keep proof and written permission on file for the rest, or anonymize |
| 3 | Medium | G | Inconsistent experience claim: article says "After eight years of running Elite Créatif" (`lib/site.ts:273`) while the site says it was founded in 2021 (`lib/site.ts`, FAQ 233 and schema). | A provably false statement in an ad-agency founder's own bio is an easy deceptive-claim exhibit. | Not changed (copy is Arsany's). | Arsany |
| 4 | Medium | F | No accessibility statement and no skip link. Otherwise axe found zero WCAG 2.2 AA violations on all 11 pages at 1440 and 390, and nothing overflows at 320. | Website accessibility suits under ADA Title III and California's Unruh Act keep coming, and a missing skip link and statement are among the first things demand letters cite. | Added a skip link (`app/layout.tsx`), `/accessibility` statement, footer link. | Code (done), Arsany to confirm response time |
| 5 | Medium | C | No terms of use. | Without terms there is no stated disclaimer, limit of liability, IP notice or venue if someone relies on the site's content or results. | Drafted `/terms` with [ATTORNEY] markers on liability cap, governing law, venue, arbitration and class waiver. | Attorney |
| 6 | Medium | A | When `RESEND_API_KEY` was missing, the API logged the visitor's name, email and message to Vercel logs (`app/api/contact/route.ts:72`). | Personal data in logs is an avoidable breach and retention problem. | Removed the data from the log line. | Code (done) |
| 7 | Medium | E | The sending domain `arsanyibrahim.com` has no SPF, DKIM or DMARC records and no `send.` or `resend._domainkey` records (DNS lookup 2026-11-17). Unless `RESEND_FROM` in Vercel points to a verified domain, Resend rejects the send and every contact message is lost, while the visitor sees an error. `elitecreatif.com` has SPF (Google) and DMARC `p=none`. | Not a lawsuit risk, but messages promised "I read every message" may never arrive, and spoofing of the domain is unprotected. | Verify the domain in Resend (adds DKIM and SPF records), add a DMARC record, then send one test message. | Arsany |
| 8 | Low | A | No Content-Security-Policy or X-Frame-Options in production. | A missing CSP makes it easier for an injected or accidentally added script to send visitor data elsewhere, which is exactly what wiretap suits are built on. | Added a strict CSP (`connect-src 'self'`, no third-party scripts, frames or fonts) and `X-Frame-Options: DENY` in `next.config.ts`. | Code (done) |
| 9 | Low | A | `/api/contact` has a honeypot but no rate limit or bot check. | Spam floods cost Resend quota and bury real messages; low legal risk. | Add a Vercel Firewall rate-limit rule on `/api/contact` (for example 5 per minute per IP) or Vercel BotID. Not done in code because per-instance memory limits do not hold on serverless. | Arsany (Vercel dashboard) |
| 10 | Low | G | Toned.health is described as "online weight-loss care through independently licensed providers" (`lib/site.ts:147`). Its operator, Elevate Telecare LLC, is not named. | A health service description on a third site must match what Toned.health itself says and be approved under its copy rules. | Not changed. | Arsany to confirm wording matches toned.health |
| 11 | Low | G | Unsourced statistic in the article: "eighty percent of remaining performance gains come from creative" (`lib/site.ts:281`). Gabal Travel is called a "luxury travel conglomerate" (`lib/site.ts:159`). | Low, since the article reads as opinion, but a number stated as fact invites a challenge. | Add "in my experience" or a source; confirm "conglomerate" is accurate. | Arsany |
| 12 | Low | G | Business identity: footer copyright is "Arsany Ibrahim"; schema names Elite Cratif LLC as the agency's legal name; the legal pages name Elite Cratif LLC as site operator. The office address `3952 City Terrace Dr, Los Angeles, CA 90063` and phone are published. | Mismatched operator names make it harder to enforce terms; a home address published as an office is a safety issue. | Confirm the operator and that the address is a business address. | Arsany |
| 13 | Low | G | Photo rights: headshots and portraits in `public/` (press kit invites reuse). | If a photographer holds copyright and the license does not cover press redistribution, the press kit grants rights the site does not have. | Confirm license. | Arsany |
| 14 | Low | F | Below 640 px the header shows only "Contact"; About, Work, Writing and Press have no mobile menu (`components/Nav.tsx`). Pages remain reachable from the home page. | Usability gap, minor WCAG 2.4.5 argument. | Add a mobile menu or footer navigation. Not done (design change). | Arsany |
| 15 | Low | process | The new compliance check is not a required status, and the SEO auto-merge workflow only waits for Vercel statuses. | An auto-merged SEO change could break accessibility without blocking. | In GitHub branch protection for `main`, require the `compliance` check. | Arsany |

### Area notes

**A. Tracking and privacy lawsuits.** Nothing in the browser talks to a third party and nothing is stored on the device, so current CIPA, ECPA, VPPA and pixel-suit exposure is close to zero. Your standing consent model (opt-out by default, opt-in where a state such as Washington requires it) has nothing to act on today: there is nothing to consent to, so no banner is needed and adding one would only add noise. If you add analytics later, options in order of risk: (1) cookieless first-party analytics such as Vercel Web Analytics, disclosed in the policy, honoring GPC; (2) Google Analytics with Consent Mode v2 defaulting to denied until the visitor accepts (opt-in everywhere, lowest CIPA risk); (3) opt-out banner with GPC honored, matching your standing choice, which is the setup most CIPA section 631 suits target. The guard blocks any of these from shipping until the registry, policy and CSP are updated together.

**State privacy laws.** CCPA/CPRA applies to a business only above $26,625,000 annual gross revenue, or 100,000+ California consumers, or 50%+ revenue from selling or sharing data [CONFIRM: Elite Cratif LLC is under all three]. If it applies, the policy already covers no sale or sharing, rights and GPC. No sale or sharing happens, so no "Do Not Sell or Share" or "Your Privacy Choices" link is needed. The site collects no consumer health data, so Washington's My Health My Data Act does not apply here. CalOPPA applies regardless of size (finding 1).

**D. SMS.** This site has no SMS program, no phone field and no GoHighLevel connection, so TCPA consent wording, consent proof and quiet hours do not apply. The privacy policy still carries the carrier-reviewed sentence that mobile numbers and SMS opt-in consent are never sold or shared for third-party marketing. FCC note for your other sites: the "revoke by any reasonable means" rule is in force; the "revoke-all" part was delayed repeatedly (see sources).

**E. Email.** No marketing email, no templates in the repo needing an unsubscribe. CAN-SPAM does not reach the notification email to your own inbox. DNS note in finding 7.

**F. Accessibility.** Automated: axe (WCAG 2.0, 2.1, 2.2 A and AA tags) clean on every page at 1440 and 390 before and after changes; no overflow at 320. Manual review: visible focus outline on every focusable element (`app/globals.css`), one h1 per page, labeled form fields with `role="status"` for results, decorative honeypot hidden from assistive tech, alt text present, motion is a short fade that turns off with reduced motion, no video or audio, page language `en`. Fixed: skip link. Open: finding 14. No overlay widget is installed.

**G. Everything else.** No prices, offers, guarantees, reviews or testimonials on the site. Client names CocoJojo and Papa K's Mediterranean Kitchen appear with results (the pharmacy client is now anonymous): confirm written permission for each.

## 3. What was fixed in this branch

- `app/privacy/page.tsx`, `app/terms/page.tsx`, `app/accessibility/page.tsx` (drafts) and `components/LegalPage.tsx`.
- Footer legal links on every page (`components/Footer.tsx`); privacy notice and link inside the contact form (`components/ContactForm.tsx`).
- Skip link and focusable `main` (`app/layout.tsx`).
- Results disclaimer under the case studies (`components/sections/Work.tsx`).
- No personal data in server logs (`app/api/contact/route.ts`).
- Content-Security-Policy and X-Frame-Options (`next.config.ts`).
- Legal pages added to `app/sitemap.ts`.

## 4. Kept ongoing

- `compliance/trackers.json`: registry of every outside vendor and the hosts the browser may contact (today: none in the browser; Vercel and Resend server side).
- `tests/compliance.spec.ts` with `playwright.config.ts`, run by `npm run check` (lint, build, guard) and by `.github/workflows/compliance.yml` on every pull request. The page list comes from the built sitemap. See the pull request for the proof run.
- Compliance rules block in `AGENTS.md` and `CLAUDE.md`, pointer in `SEO-AGENT.md`.

## 5. Needs Arsany

1. Approve or edit the three legal pages and resolve every [CONFIRM] marker (the guard fails until they are gone).
2. Proof on file for the $20M+, 3x, 1.8 to 3.4 ROAS and 142% claims, and written permission from CocoJojo and Papa K's to be named with results.
3. Fix "eight years" versus founded 2021.
4. Verify `arsanyibrahim.com` in Resend (or confirm `RESEND_FROM` in Vercel), add DMARC, send one test message.
5. Vercel Firewall rate limit on `/api/contact`.
6. Require the `compliance` check on `main`.

## 6. Needs an attorney

- Terms: limitation of liability scope and cap, governing law and venue, whether to add arbitration and a class action waiver.
- Privacy policy: overall review; confirm CCPA applicability statement.
- Whether naming clients with results needs anything beyond their written consent.

## 7. Questions

1. Is Elite Cratif LLC the operator of arsanyibrahim.com, or Arsany personally?
2. Is 3952 City Terrace Dr a business address you want public?
3. How long do you keep contact emails? (privacy policy retention)
4. What response time do you want to promise for accessibility requests?
5. Which business email provider hosts arsany@elitecreatif.com? (Google Workspace per SPF; the policy names it only generically)
6. Who owns the headshots and does the license allow press redistribution?
7. Is Elite Cratif LLC below the CCPA thresholds?
8. Does the Toned.health description match Toned's approved copy?

## Handoff (this repo has no other technical handoff file)

- State: PR #14 from `compliance/20261117`, not merged. Checks run: `npm run lint` clean, `npm run build` passes, `npx playwright test` 8 passed and 1 failed (draft markers, intended). Guard failure proof run on a deleted scratch branch.
- Unfinished: the [CONFIRM] and [ATTORNEY] markers on the three legal pages; the claims decisions in finding 2.
- First next action: Arsany answers the questions in section 7, then whoever picks this up replaces the markers and reruns `npm run check`.

## 8. Sources (all checked 2026-11-17)

| Rule | Status as found | Source |
|---|---|---|
| CalOPPA, Cal. Bus. & Prof. Code 22575 | In force: conspicuous privacy policy, effective date, Do Not Track disclosure (AB 370, since 2014). | [Bus. & Prof. Code 22575](https://california.public.law/codes/business_and_professions_code_section_22575), [Termageddon guide](https://termageddon.com/do-not-track-caloppa/) |
| CIPA and SB 690 | SB 690 passed the Legislature unanimously in August 2026; one firm reports it was signed September 30, 2026 (single source). The enacted version only removes private suits under the pen-register section (638.51); section 631 wiretap suits remain. *Variety Media v. Superior Court* was a tentative ruling as of August 2026. Courts are still split. | [Parker Poe, July 2026](https://www.parkerpoe.com/news/2026/07/amended-california-bill-would-narrow-litigants-website-tracking), [Duane Morris](https://www.duanemorris.com/alerts/california_legislature_passes_sb690_creating_major_curb_pixel_tracking_lawsuits_under_cipa_0926.html), [AFS Law](https://www.afslaw.com/perspectives/consumer-products-watch/pixel-pause-california-pulls-the-plug-private-cipa-pen), [NatLawReview](https://natlawreview.com/article/website-tracking-litigation-update-variety-media-and-california-sb-690) |
| CCPA thresholds | $26,625,000 revenue threshold (CPI adjusted). | [CPPA monetary thresholds](https://www.cppa.ca.gov/regulations/cpi_adjustment.html) |
| CCPA opt-out signals | GPC already must be honored as an opt-out signal where CCPA applies. The CPPA Board directed staff in August 2026 to start rulemaking to name GPC expressly: proposal only. DROP (Delete Act) live since January 1, 2026; applies to data brokers, not this site. | [WSGR](https://www.wsgr.com/en/insights/calprivacy-authorizes-rulemaking-on-opt-out-signals-raises-data-broker-fees-and-starts-the-clock-on-drop-amendment-comment-period.html), [CPPA regulations](https://www.cppa.ca.gov/regulations), [CPPA DROP](https://cppa.ca.gov/regulations/drop.html) |
| FCC TCPA consent revocation | "Any reasonable means" revocation in force since April 11, 2025. "Revoke-all" part waived to January 31, 2027; a November 2, 2026 alert reports amended rules effective November 25, 2026 (single source, not confirmed in the Federal Register). | [FCC DA 26-12](https://docs.fcc.gov/public/attachments/DA-26-12A1.pdf), [Greenspoon Marder](https://www.gmlaw.com/news/fcc-extends-waiver-on-revocation-of-consent-rules-delaying-broad-applicability-until-2027-2/), [Nelson Mullins](https://www.nelsonmullins.com/insights/alerts/fcc-download/all/fcc-adopts-overhaul-of-tcpa-consent-revocation-rules-revoke-all-narrowed-exclusive-opt-out-methods-permitted-and-fraud-alert-exemption-expanded) |
| ADA web accessibility | No Title III web rule; DOJ extended the Title II (government) deadlines to 2027 and 2028 by interim final rule on April 20, 2026; Title II uses WCAG 2.1 AA. Private Title III suits continue; courts and settlements use WCAG 2.1 AA as the benchmark. We target 2.2 AA, which covers 2.1. | [Federal Register, April 20, 2026](https://www.govinfo.gov/content/pkg/FR-2026-04-20/html/2026-07663.htm), [Jackson Lewis](https://jacksonlewis.com/insights/doj-extends-public-entities-compliance-deadline-ada-related-website-accessibility-hhss-may-2026-deadline-still-looms) |
| FTC Consumer Review and Testimonials Rule, 16 CFR 465 | In force since October 21, 2024; warning letters December 2025; civil penalties per violation. | [FTC](https://www.ftc.gov/node/86717), [Venable](https://www.venable.com/insights/publications/2025/12/ftc-signals-heightened-enforcement-of-new), [Arnold & Porter](https://www.arnoldporter.com/en/perspectives/blogs/consumer-products-and-retail-navigator/2026/01/ftc-warning-letters-over-consumer-review-rule) |
