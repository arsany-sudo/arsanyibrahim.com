import { test, expect, type Page, type Browser } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";
import { readFileSync } from "node:fs";

const ORIGIN = "http://localhost:3100";
const reg = JSON.parse(readFileSync("compliance/trackers.json", "utf8"));
const trackers: { vendor: string; hosts: string[]; loads: string; waitsForConsent: boolean }[] = reg.trackers;
const allowed = trackers.filter((t) => t.loads === "browser").flatMap((t) => t.hosts);
const pii = 'input[type=email], input[type=tel], :is(input,textarea):is([name*=email i],[id*=email i],[name*=phone i],[id*=phone i],[name*=mobile i],[id*=mobile i],[name*=tel i],[id*=tel i])';

// Page list comes from the live sitemap (never hand-written) plus a 404 probe.
async function pagePaths() {
  const xml = await (await fetch(`${ORIGIN}/sitemap.xml`)).text();
  const paths = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => new URL(m[1]).pathname);
  return [...paths, "/compliance-404-probe"];
}

// Runs fn on every page (4 at a time), each in its own context where every non-local request is
// aborted and recorded. fn gets the page and the third-party hosts contacted (requests + CSP violations).
async function eachPage(
  browser: Browser, width: number, fn: (page: Page, path: string, hosts: string[]) => Promise<void>,
  { height = 900, reduce = false } = {},
) {
  // 4 pages at a time per test: all at once timed out on a cold server and will on small CI runners.
  const queue = await pagePaths();
  await Promise.all(Array.from({ length: 4 }, async () => {
    for (let path = queue.shift(); path; path = queue.shift()) await visit(path);
  }));
  async function visit(path: string) {
    const ctx = await browser.newContext({ viewport: { width, height }, reducedMotion: reduce ? "reduce" : "no-preference" });
    const page = await ctx.newPage();
    const seen: string[] = [];
    await page.route("**/*", (r) => {
      const u = r.request().url();
      if (!/^https?:/.test(u) || new URL(u).origin === ORIGIN) return r.continue();
      seen.push(u);
      return r.abort();
    });
    await page.addInitScript(() => {
      const w = window as unknown as { __cspViolations: string[] };
      w.__cspViolations = [];
      document.addEventListener("securitypolicyviolation", (e) => w.__cspViolations.push(e.blockedURI));
    });
    await page.goto(path, { waitUntil: "load" });
    // Late-injected tags (tag managers, deferred pixels) fire after load; let the network settle first.
    await page.waitForLoadState("networkidle");
    const csp = await page.evaluate(() => (window as unknown as { __cspViolations: string[] }).__cspViolations);
    const hosts = [...new Set([...seen, ...csp]
      .filter((u) => /^https?:\/\//.test(u)).map((u) => new URL(u)).filter((u) => u.origin !== ORIGIN).map((u) => u.host))];
    try { await fn(page, path, hosts); } finally { await ctx.close(); }
  }
}

const text = (page: Page) => page.locator("body").innerText();

for (const width of [1440, 390]) {
  test(`A registry + B consent at ${width}`, async ({ browser }) => {
    await eachPage(browser, width, async (_p, path, hosts) => {
      const bad = hosts.filter((h) => !allowed.includes(h));
      expect.soft(bad, `${path} @${width}: unregistered third-party host(s): ${bad.join(", ")}`).toEqual([]);
      for (const t of trackers.filter((t) => t.waitsForConsent)) {
        const hit = hosts.filter((h) => t.hosts.includes(h));
        expect.soft(hit, `${t.vendor} contacted before consent on ${path} @${width}: ${hit.join(", ")}`).toEqual([]);
      }
    });
  });

  test(`E axe at ${width}`, async ({ browser }) => {
    await eachPage(browser, width, async (page, path) => {
      await page.waitForTimeout(2200);
      const { violations } = await new AxeBuilder({ page }).withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa", "wcag22aa"]).analyze();
      const msg = violations.map((v) => `${v.id} (${v.impact}): ${v.nodes.slice(0, 3).map((n) => n.target.join(" ")).join(" | ")}`);
      expect.soft(msg, `${path} @${width} axe: ${msg.join("; ")}`).toEqual([]);
    }, { reduce: true });
  });
}

test("C policy names every vendor", async ({ page }) => {
  await page.goto(reg.privacyPolicyPath);
  const t = (await text(page)).toLowerCase();
  const missing = trackers.map((x) => x.vendor).filter((v) => !t.includes(v.toLowerCase()));
  expect(missing, `${reg.privacyPolicyPath} does not name vendor(s): ${missing.join(", ")}`).toEqual([]);
});

test("D forms", async ({ browser }) => {
  await eachPage(browser, 1440, async (page, path) => {
    const problems: string[] = [];
    for (const [i, f] of (await page.locator("form").all()).entries()) {
      if (!(await f.locator(pii).count())) continue;
      if (!(await f.locator('a[href="/privacy"], a[href$="/privacy"]').count())) problems.push(`form #${i} has no privacy policy link`);
      for (const c of await f.locator("input[type=checkbox]").all()) {
        if (!(await c.isChecked())) continue;
        const label = await c.evaluate((el: HTMLInputElement) => `${el.name} ${el.id} ${[...(el.labels ?? [])].map((l) => l.textContent).join(" ")}`);
        if (/sms|text message|mobile/i.test(label)) problems.push(`form #${i}: SMS checkbox checked by default (${label.trim()})`);
        if (/email|newsletter|marketing/i.test(label)) problems.push(`form #${i}: email/marketing checkbox checked by default (${label.trim()})`);
      }
    }
    expect.soft(problems, `${path}: ${problems.join("; ")}`).toEqual([]);
  });
});

test("E no horizontal scroll at 320", async ({ browser }) => {
  await eachPage(browser, 320, async (page, path) => {
    const [sw, cw] = await page.evaluate(() => [document.documentElement.scrollWidth, document.documentElement.clientWidth]);
    expect.soft(sw, `${path} scrolls horizontally at 320px (scrollWidth ${sw} > clientWidth ${cw})`).toBeLessThanOrEqual(cw);
  }, { height: 800 });
});

test("F footer links", async ({ browser }) => {
  await eachPage(browser, 1440, async (page, path) => {
    const missing: string[] = [];
    for (const p of ["/privacy", "/terms", "/accessibility"]) {
      if (!(await page.locator(`footer a[href="${p}"], footer a[href$="${p}"]`).count())) missing.push(p);
    }
    expect.soft(missing, `${path}: footer missing link(s) to ${missing.join(", ")}`).toEqual([]);
  });
});

test("G draft markers", async ({ browser }) => {
  await eachPage(browser, 1440, async (page, path) => {
    const t = await text(page);
    const found = ["[CONFIRM", "[ATTORNEY"].filter((m) => t.includes(m));
    expect.soft(found, `${path}: draft marker(s) still visible: ${found.join(", ")}`).toEqual([]);
  });
});
