import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { site } from "@/config/site";

export const metadata: Metadata = {
  title: "Terms of use",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <LegalPage title="Terms of use">
      <p>
        These terms apply to your use of narainnovations.com. By using the site
        you agree to them.
      </p>

      <h2>About us</h2>
      <p>
        The site is run by {site.name}, registered in England and Wales under
        company number {site.companyNumber}. Our registered office is{" "}
        {site.address[0]}, {site.address[1]}.
      </p>

      <h2>Information on this site</h2>
      <p>
        The site gives general information about Nara Innovations and its
        products. It is not legal, immigration or other professional advice, and
        you should not rely on it as such.
      </p>
      <p>
        We try to keep the site accurate and up to date, but we do not guarantee
        that it is complete or free from errors.
      </p>

      <h2>Our products</h2>
      <p>
        Use of any Nara Innovations product, including Compliance Guru, is
        governed by that product&rsquo;s own terms and privacy notice.
      </p>

      <h2>Intellectual property</h2>
      <p>
        The content, design, logos and names on this site belong to {site.name}{" "}
        or its licensors. You may view and print pages for your own reference.
        You may not copy or reuse the content for commercial purposes without
        our written permission.
      </p>

      <h2>Links to other sites</h2>
      <p>
        The site may link to other websites. We do not control them and are not
        responsible for their content.
      </p>

      <h2>Our liability</h2>
      <p>
        Nothing in these terms limits or excludes liability that cannot be
        limited or excluded by law.
      </p>
      <p>
        Subject to that, we are not liable for any loss arising from your use of
        this site or reliance on its content.
      </p>

      <h2>Changes</h2>
      <p>
        We may change the site or these terms at any time. The date at the top
        shows when they were last updated.
      </p>

      <h2>Governing law</h2>
      <p>
        These terms are governed by the law of England and Wales, and the courts
        of England and Wales have jurisdiction over any dispute.
      </p>

      <h2>Contact</h2>
      <p>Questions about these terms can be sent to {site.email}.</p>
    </LegalPage>
  );
}
