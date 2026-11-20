import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage } from "@/components/LegalPage";
import { site } from "@/config/site";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Privacy Policy | Nara Innovations",
  description:
    "How Nara Innovations Ltd collects and uses personal information on narainnovations.com, and your rights under UK data protection law.",
  path: "/privacy-policy",
});

export default function PrivacyPage() {
  return (
    <LegalPage title="Privacy policy">
      <p>
        This policy explains how {site.name} uses personal information
        collected through this website, narainnovations.com.
      </p>
      <p>
        It covers this website only. Our products, including Compliance Guru,
        have their own privacy notices.
      </p>

      <h2>Who we are</h2>
      <p>
        {site.name} is the controller of the personal information described in
        this policy. We are registered in England and Wales under company
        number {site.companyNumber}.
      </p>
      <p>
        Our registered office is {site.address[0]}, {site.address[1]}.
      </p>
      <p>For any privacy question, email {site.email}.</p>

      <h2>The information we collect</h2>
      <p>
        <strong>Information you send us.</strong> If you email us, we receive
        your name, your email address and whatever you include in your message.
      </p>
      <p>
        <strong>Technical information.</strong> When you visit the site, our
        hosting provider records standard log data such as your IP address,
        browser type, the pages requested and the time of the request.
      </p>
      <p>
        <strong>Cookies and analytics.</strong> This website uses one cookie,
        set by our cookie consent tool, to remember your cookie choices. When
        the consent tool loads, its provider receives your IP address and
        browser details so it can show the banner and record your choice. We do
        not use analytics, advertising or tracking tools. See our{" "}
        <Link href="/cookie-policy">Cookie policy</Link> for details.
      </p>
      <p>
        This website has no contact forms, user accounts or payment facilities,
        and we do not ask for any special category information through it.
      </p>

      <h2>How we use it and our lawful basis</h2>
      <table>
        <thead>
          <tr>
            <th>What we do</th>
            <th>Lawful basis</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Reply to your emails and deal with your enquiry</td>
            <td>
              Legitimate interests (running our business and answering people
              who contact us)
            </td>
          </tr>
          <tr>
            <td>Remember and record your cookie choices</td>
            <td>
              Legal obligation and legitimate interests (respecting your
              choices and being able to show that we do)
            </td>
          </tr>
          <tr>
            <td>Take steps you ask for before entering into a contract</td>
            <td>Contract</td>
          </tr>
          <tr>
            <td>Keep the website secure and working</td>
            <td>
              Legitimate interests (protecting our site and its visitors)
            </td>
          </tr>
          <tr>
            <td>Meet legal and regulatory requirements</td>
            <td>Legal obligation</td>
          </tr>
        </tbody>
      </table>
      <p>
        We do not sell personal information, and we do not use it for automated
        decisions that have a legal or similar effect on you.
      </p>

      <h2>Who we share it with</h2>
      <p>
        We share personal information only with suppliers who help us run the
        website, our email and our cookie banner, and only so far as they need
        it:
      </p>
      <ul>
        <li>our website hosting provider</li>
        <li>our email provider</li>
        <li>our cookie consent provider, CookieYes</li>
      </ul>
      <p>
        We may also disclose information where the law requires it, or to
        professional advisers where needed.
      </p>

      <h2>Transfers outside the UK</h2>
      <p>
        Some of our suppliers may process information outside the UK. Where that
        happens, we make sure it is protected by a safeguard recognised under UK
        data protection law, such as UK adequacy regulations or the
        International Data Transfer Agreement.
      </p>

      <h2>How long we keep it</h2>
      <p>
        We keep email enquiries for up to 24 months after our last contact with
        you, unless we need them for longer for legal reasons.
      </p>
      <p>Server logs are kept for the period set by our hosting provider.</p>

      <h2>Your rights</h2>
      <p>Under UK data protection law you can ask us to:</p>
      <ul>
        <li>give you a copy of your personal information</li>
        <li>correct information that is wrong or incomplete</li>
        <li>delete your information</li>
        <li>restrict how we use it</li>
        <li>stop using it, where we rely on legitimate interests</li>
        <li>pass it to you or another organisation in a portable format</li>
      </ul>
      <p>
        To use any of these rights, email {site.email}. We will reply within one
        month.
      </p>

      <h2>Complaints</h2>
      <p>
        If you are unhappy with how we have handled your information, please
        tell us first at {site.email} so we can try to put it right.
      </p>
      <p>
        You can also complain to the Information Commissioner&rsquo;s Office at{" "}
        <a href="https://ico.org.uk">ico.org.uk</a> or on 0303 123 1113.
      </p>

      <h2>Children</h2>
      <p>
        This website is for businesses and is not aimed at children. We do not
        knowingly collect information from children.
      </p>

      <h2>Changes to this policy</h2>
      <p>
        We may update this policy from time to time. The date at the top shows
        when it was last changed.
      </p>
    </LegalPage>
  );
}
