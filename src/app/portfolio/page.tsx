import type { Metadata } from "next";
import { site } from "@/config/site";
import { pageMeta } from "@/lib/seo";
import { CgProductWindow, MailCard, PortfolioList } from "@/components/Mockups";
import { Card, FeaturePanel } from "@/components/Panels";
import { VideoHero } from "@/components/VideoHero";

export const metadata: Metadata = pageMeta({
  title: "Our Portfolio: Compliance Guru Software | Nara Innovations",
  description:
    "Compliance Guru helps UK sponsor licence holders stay on top of their Home Office sponsor duties. Launching soon from Nara Innovations.",
  path: "/portfolio",
});

export default function PortfolioPage() {
  return (
    <>
      <VideoHero
        sub
        label="Our portfolio"
        title="Each product does one job for one group of users."
      />

      <section className="block">
        <div className="wrap">
          <FeaturePanel
            badge="For UK sponsor licence holders"
            title="Compliance Guru"
            ctaHref={`mailto:${site.email}?subject=Compliance%20Guru`}
            ctaLabel="Ask about Compliance Guru"
            visual={<CgProductWindow />}
          >
            <p>
              Compliance Guru helps UK sponsor licence holders stay compliant
              with their Home Office sponsor duties.
            </p>
            <p>
              A sponsor licence comes with duties that last for as long as the
              licence is held. Compliance Guru is built to help licence holders
              keep on top of them.
            </p>
          </FeaturePanel>
        </div>
      </section>

      <section className="block pillars">
        <div className="wrap">
          <p className="label" style={{ marginBottom: 14 }}>
            What comes next
          </p>
          <h2 className="pillars-h">More products will follow</h2>
          <div className="pgrid two">
            <Card
              visual={<PortfolioList />}
              title="Our next problems"
              href="/news"
              cta="Read our news"
            >
              <p>
                We are choosing our next problems carefully. When a new product
                is ready, we will announce it on our News page.
              </p>
            </Card>
            <Card
              visual={
                <MailCard
                  subject="A job software should do better"
                  widths={[90, 75, 55]}
                />
              }
              title="Is there a job that software should be doing better?"
              href={`mailto:${site.email}`}
              cta="Email us"
            >
              <p>We like hearing about problems worth solving. Email {site.email}.</p>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}
