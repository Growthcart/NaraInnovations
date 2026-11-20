import type { Metadata } from "next";
import { site } from "@/config/site";
import { AddressCard, MailCard } from "@/components/Mockups";
import { Card } from "@/components/Panels";
import { VideoHero } from "@/components/VideoHero";

export const metadata: Metadata = {
  title: "Contact",
  description: "For questions about Nara Innovations or our products, email us.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <VideoHero
        sub
        label="Contact"
        title="Contact us"
        lead={["For questions about Nara Innovations or our products, email us."]}
      />

      <section className="block pillars">
        <div className="wrap">
          <div className="pgrid two">
            <Card
              visual={
                <MailCard
                  subject="Question for Nara Innovations"
                  widths={[90, 70, 50]}
                />
              }
              title="Email"
              href={`mailto:${site.email}`}
              cta="Email us"
            >
              <p className="big-v">{site.email}</p>
            </Card>
            <Card visual={<AddressCard />} title="Registered office">
              <p className="big-v">
                {site.address[0]}, {site.address[1]}
              </p>
              <p>
                {site.name}, registered in England and Wales, company number{" "}
                {site.companyNumber}.
              </p>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}
