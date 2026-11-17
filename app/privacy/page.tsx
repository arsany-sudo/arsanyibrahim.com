import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage } from "@/components/LegalPage";
import { PERSON } from "@/lib/site";

// Written from compliance/trackers.json. Any tracker or vendor change updates this page and its date.
export const metadata: Metadata = {
  title: "Privacy policy",
  description: "What arsanyibrahim.com collects, why, who receives it, and how to reach us about your data.",
  alternates: { canonical: "/privacy" },
};

const UPDATED = "November 17, 2026";

export default function PrivacyPage() {
  const a = PERSON.address;
  return (
    <LegalPage eyebrow="Legal" title="Privacy policy" updated={UPDATED}>
      <p>
        This policy covers arsanyibrahim.com, the personal site of {PERSON.fullName}. The site is operated by
        Elite Cratif LLC (&quot;we&quot;, &quot;us&quot;). It explains what we collect when you visit or write to us,
        why, who receives it, and the choices you have.
      </p>

      <h2 id="collect">What we collect</h2>
      <ul>
        <li>
          <strong>What you send through the contact form:</strong> your name, your email address and your message.
          A hidden spam-trap field is also submitted; real visitors leave it empty.
        </li>
        <li>
          <strong>What you send by email or phone:</strong> whatever you choose to include.
        </li>
        <li>
          <strong>Technical data every web server receives:</strong> your IP address, browser and device type, the
          page requested and the time. Our hosting provider records this in server logs.
        </li>
      </ul>
      <p>
        We do not use cookies, analytics, advertising pixels, session recording, chat widgets or embedded content
        from other companies on this site. Fonts and images are served from our own domain. We do not knowingly
        collect sensitive personal information, and we ask that you not send health, financial or government ID
        details through the form.
      </p>

      <h2 id="use">How we use it</h2>
      <ul>
        <li>To read and reply to your message.</li>
        <li>To keep the site running, secure and free of spam and abuse.</li>
        <li>To meet legal obligations.</li>
      </ul>
      <p>We do not use what you send to build advertising profiles, and we do not add you to a mailing list.</p>

      <h2 id="vendors">Who receives it</h2>
      <p>We share personal information only with service providers that run the site for us:</p>
      <ul>
        <li>
          <strong>Vercel</strong> hosts the site and processes the technical data listed above.
        </li>
        <li>
          <strong>Resend</strong> delivers contact form submissions to our inbox as email.
        </li>
        <li>
          <strong>Our business email provider</strong> stores the messages we receive and send.
        </li>
      </ul>
      <p>
        We may also disclose information when the law requires it, to protect our rights or safety, or as part of a
        sale or reorganization of the business.
      </p>

      <h2 id="sell-share">We do not sell or share your information</h2>
      <p>
        We do not sell personal information and do not share it for cross-context behavioral advertising. We have
        not done so in the past 12 months. Because there is nothing to opt out of, there is no &quot;Do Not Sell or
        Share&quot; link on this site.
      </p>

      <h2 id="text-messages">Text messages</h2>
      <p>
        This site does not run a text message program and does not ask for your mobile number. If you give us a
        mobile number in any other way, we will not sell or share it, or any text message opt-in consent, with third
        parties for their marketing purposes.
      </p>

      <h2 id="email">Email</h2>
      <p>
        We email you only to reply to a message you sent. We do not send newsletters or marketing email from this
        site. If you want us to stop writing to you, reply and say so, or write to the address below.
      </p>

      <h2 id="tracking">Cookies, tracking, Do Not Track and Global Privacy Control</h2>
      <p>
        This site sets no cookies and loads no third-party trackers, so your browser&apos;s Do Not Track or Global
        Privacy Control (GPC) setting does not change anything here. If we ever add a tracking tool, we will list it
        on this page first and treat a GPC signal as a request to opt out of the sale or sharing of your personal
        information.
      </p>

      <h2 id="retention">How long we keep it</h2>
      <p>
        We keep contact messages for as long as we need them to respond and to keep a record of the conversation
        [CONFIRM: retention period for contact emails, for example 3 years]. Server logs are kept by Vercel for a
        limited period set by its plan, after which they are deleted.
      </p>

      <h2 id="rights">Your choices and rights</h2>
      <p>
        Wherever you live, you can ask us to tell you what personal information we hold about you, to correct it, or to
        delete it. Depending on your state or country you may have further rights under laws such as the California
        Consumer Privacy Act. Email{" "}
        <a href={`mailto:${PERSON.email}`}>{PERSON.email}</a> with your request. We may need to confirm your identity
        before acting on it, and we will not treat you differently for making a request. You can name an authorized
        agent to ask for you. If we turn down a request, we will explain why and how to appeal.
      </p>

      <h2 id="children">Children</h2>
      <p>
        This site is for adults and is not directed to children under 13. We do not knowingly collect personal
        information from children. If you believe a child has sent us information, contact us and we will delete it.
      </p>

      <h2 id="security">Security</h2>
      <p>
        The site is served only over HTTPS, and we limit who can read contact messages. No system is perfectly
        secure, so please do not send anything you would not want exposed.
      </p>

      <h2 id="changes">Changes to this policy</h2>
      <p>
        When we change this policy we will update the date at the top of this page. Significant changes will be noted
        here.
      </p>

      <h2 id="contact">Contact</h2>
      <p>
        Elite Cratif LLC
        <br />
        {a.street}, {a.city}, {a.region} {a.postalCode}
        <br />
        <a href={`mailto:${PERSON.email}`}>{PERSON.email}</a>
        <br />
        <a href={`tel:${PERSON.phoneRaw}`}>{PERSON.phone}</a>
      </p>
      <p>
        See also the <Link href="/terms">terms of use</Link> and the{" "}
        <Link href="/accessibility">accessibility statement</Link>.
      </p>
    </LegalPage>
  );
}
