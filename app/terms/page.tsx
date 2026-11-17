import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage } from "@/components/LegalPage";
import { PERSON } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of use",
  description: "The terms that apply when you use arsanyibrahim.com.",
  alternates: { canonical: "/terms" },
};

const UPDATED = "November 17, 2026";

export default function TermsPage() {
  return (
    <LegalPage eyebrow="Legal" title="Terms of use" updated={UPDATED}>
      <p>
        arsanyibrahim.com is the personal site of {PERSON.fullName}, operated by Elite Cratif LLC, which does business
        as Elite Créatif (&quot;we&quot;, &quot;us&quot;). By using the site you agree to these terms. If you do not
        agree, please do not use the site.
      </p>

      <h2 id="use">Using the site</h2>
      <p>
        You may read, share and link to the site for personal and editorial purposes. Please do not misuse it: no
        attempts to break, overload or gain unauthorized access to it, no automated scraping that degrades it, and no
        use of the contact form to send spam, unlawful content or anything you do not have the right to send.
      </p>

      <h2 id="ip">Content and intellectual property</h2>
      <p>
        The text, photographs, design and other content on this site belong to {PERSON.fullName} or Elite Cratif LLC.
        Photos and bios in the <Link href="/press">press kit</Link> may be used to cover{" "}
        {PERSON.fullName} with credit. Any other use needs our written permission. Company names and logos belong to
        their owners.
      </p>

      <h2 id="no-advice">No professional advice</h2>
      <p>
        Articles and other content on this site share opinions and experience. They are not legal, financial, tax,
        medical or other professional advice, and reading them does not create a client relationship. Work with Elite
        Créatif or any other company named here happens only under a separate written agreement.
      </p>

      <h2 id="results">Results and examples</h2>
      <p>
        Case studies and figures on this site describe past work for specific clients under specific conditions. They
        are not a promise or guarantee that anyone will get the same or similar results. Results depend on many factors
        outside our control.
      </p>

      <h2 id="links">Links to other sites</h2>
      <p>
        The site links to companies Arsany founded or works with and to social media profiles. Those sites have their
        own terms and privacy policies, and we are not responsible for their content or practices.
      </p>

      <h2 id="disclaimer">Disclaimer</h2>
      <p>
        The site is provided &quot;as is&quot; and &quot;as available&quot;. To the fullest extent the law allows, we
        make no warranties of any kind, express or implied, including warranties of accuracy, fitness for a particular
        purpose and non-infringement, and we do not promise the site will be uninterrupted or error-free.
      </p>

      <h2 id="changes">Changes</h2>
      <p>
        We may update these terms. The date at the top shows when they last changed. Continuing to use the site after a
        change means you accept the updated terms.
      </p>

      <h2 id="contact">Contact</h2>
      <p>
        Questions about these terms: <a href={`mailto:${PERSON.email}`}>{PERSON.email}</a>. How we handle personal
        information is covered in the <Link href="/privacy">privacy policy</Link>.
      </p>
    </LegalPage>
  );
}
