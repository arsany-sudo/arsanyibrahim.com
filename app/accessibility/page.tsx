import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { PERSON } from "@/lib/site";

export const metadata: Metadata = {
  title: "Accessibility statement",
  description: "How arsanyibrahim.com works toward WCAG 2.2 AA and how to report an accessibility barrier.",
  alternates: { canonical: "/accessibility" },
};

const UPDATED = "November 17, 2026";

export default function AccessibilityPage() {
  return (
    <LegalPage eyebrow="Legal" title="Accessibility statement" updated={UPDATED}>
      <p>
        We want everyone to be able to use arsanyibrahim.com, including people who use screen readers, keyboard
        navigation, magnification, voice control or other assistive technology.
      </p>

      <h2 id="standard">Our standard</h2>
      <p>
        We aim to meet the Web Content Accessibility Guidelines (WCAG) 2.2 at Level AA. Every change to the site is
        checked automatically with the axe accessibility engine at desktop and phone widths, checked for layout at
        320 pixels wide, and reviewed for keyboard access, visible focus, text alternatives and color contrast.
      </p>

      <h2 id="measures">What the site does</h2>
      <ul>
        <li>A skip link, a single main heading per page and a logical heading order.</li>
        <li>Labels on every form field and spoken status messages when the form is sent.</li>
        <li>Text alternatives for meaningful images.</li>
        <li>Animations turn off when your device is set to reduce motion.</li>
        <li>Pages reflow at 320 pixels wide and remain usable at 200 percent zoom.</li>
      </ul>
      <p>We do not use accessibility overlay widgets.</p>

      <h2 id="limits">Known limitations</h2>
      <p>
        Links to other companies&apos; websites lead to sites we do not control, which may not meet the same standard.
      </p>

      <h2 id="feedback">Report a barrier</h2>
      <p>
        If anything on this site is hard to use, tell us what page you were on and what went wrong, and we will work to
        fix it and get you the information another way in the meantime. Email{" "}
        <a href={`mailto:${PERSON.email}`}>{PERSON.email}</a> or call{" "}
        <a href={`tel:${PERSON.phoneRaw}`}>{PERSON.phone}</a>. We aim to reply within [CONFIRM: response time, for
        example 5 business days].
      </p>
    </LegalPage>
  );
}
