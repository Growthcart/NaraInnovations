import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage } from "@/components/LegalPage";
import { site } from "@/config/site";

export const metadata: Metadata = {
  title: "Cookie policy",
  alternates: { canonical: "/cookie-policy" },
};

export default function CookiePage() {
  return (
    <LegalPage title="Cookie policy">
      <p>
        <strong>This website does not use cookies.</strong>
      </p>
      <p>
        We do not set cookies on your device, and we do not use analytics,
        advertising or tracking tools on narainnovations.com.
      </p>
      <p>
        If that changes, we will update this page first and ask for your consent
        where the law requires it.
      </p>
      <p>
        Our <Link href="/privacy-policy">Privacy policy</Link> explains how we
        use personal information. For any question, email {site.email}.
      </p>
    </LegalPage>
  );
}
