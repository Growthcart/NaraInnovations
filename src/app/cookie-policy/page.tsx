import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage } from "@/components/LegalPage";
import { site } from "@/config/site";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Cookie Policy | Nara Innovations",
  description:
    "Which cookies narainnovations.com uses, what they do, and how to manage your cookie choices.",
  path: "/cookie-policy",
});

export default function CookiePage() {
  return (
    <LegalPage title="Cookie policy">
      <p>
        This policy explains how narainnovations.com uses cookies. A cookie is a
        small text file that a website saves on your device.
      </p>

      <h2>What we use</h2>
      <p>
        We use one cookie, set by our cookie consent tool, CookieYes. It is
        needed so the site can remember your cookie choices. It is not used to
        track you.
      </p>
      <table>
        <thead>
          <tr>
            <th>Cookie</th>
            <th>What it does</th>
            <th>How long it lasts</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>cookieyes-consent</td>
            <td>
              Remembers whether you accepted or rejected cookies, so we do not
              ask you again on every visit
            </td>
            <td>1 year</td>
          </tr>
        </tbody>
      </table>
      <p>
        We do not use analytics, advertising or tracking cookies on this
        website. If that changes, we will update this page first and ask for
        your consent where the law requires it.
      </p>

      <h2>Your choices</h2>
      <p>
        When you first visit, the cookie banner lets you accept or reject
        cookies. You can also change your mind at any time by clearing the
        cookies for this site in your browser settings. The banner will then
        appear again on your next visit.
      </p>
      <p>
        Most browsers also let you block or delete cookies. If you block the
        cookie above, the banner may appear on every visit.
      </p>

      <h2>More information</h2>
      <p>
        Our <Link href="/privacy-policy">Privacy policy</Link> explains how we
        use personal information. For any question, email {site.email}.
      </p>
    </LegalPage>
  );
}
