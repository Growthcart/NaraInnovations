import type { Metadata } from "next";
import { site } from "@/config/site";
import {
  CgGapWindow,
  FamilyList,
  GapCard,
  StageCard,
} from "@/components/Mockups";
import { Card, FeaturePanel, Standards } from "@/components/Panels";
import { SmartLink } from "@/components/SmartLink";
import { VideoHero } from "@/components/VideoHero";

export const metadata: Metadata = {
  title: "Our vision",
  alternates: { canonical: "/vision" },
};

export default function VisionPage() {
  return (
    <>
      <VideoHero
        sub
        label="Our vision"
        title="We want the necessary tasks in work and life to take less time and go wrong less often."
      />

      <section className="block model">
        <div className="wrap">
          <div className="split">
            <div>
              <p className="label">The problem we see</p>
              <h2>
                Too much of a working week goes on tasks that have nothing to do
                with why the business exists.
              </h2>
            </div>
            <div className="copy">
              <p>
                Owners and managers spend hours on rules, records and
                deadlines. The work matters, because a missed step can be
                costly, but it is rarely what they are good at or what they
                want to be doing.
              </p>
              <p>
                People face the same thing outside work, with forms,
                applications and deadlines of their own.
              </p>
              <p>
                The tools they are given are often no better than a shared
                spreadsheet and a calendar reminder. We think they deserve
                better ones.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="block pillars">
        <div className="wrap">
          <p className="label" style={{ marginBottom: 14 }}>
            What we are building
          </p>
          <h2 className="pillars-h">
            A technology company that builds and runs its own products
          </h2>
          <div className="pgrid">
            <Card
              visual={
                <StageCard
                  title="One product"
                  chip="One job"
                  rows={["A difficult, necessary job", "Made easier to do well"]}
                />
              }
              title="One job, done well"
              href="/portfolio"
              cta="See our portfolio"
            >
              <p>
                Each product takes one difficult, necessary job and makes it
                easier to do well.
              </p>
            </Card>
            <Card
              visual={
                <GapCard
                  title="What we look for"
                  footLabel="Result"
                  footValue="Worth building"
                />
              }
              title="How we choose"
              href="/portfolio"
              cta="See our portfolio"
            >
              <p>
                We look for work that is important, repeated often, and poorly
                served by the software available today.
              </p>
            </Card>
            <Card
              visual={<FamilyList />}
              title="A family of products"
              href="/news"
              cta="Read our news"
            >
              <p>
                Over time we will run a family of products under the Nara
                Innovations name, each serving a different need with the same
                standards for design, security and support.
              </p>
            </Card>
          </div>
        </div>
      </section>

      <section className="block">
        <div className="wrap">
          <FeaturePanel
            badge="Our focus"
            title="Compliance"
            ctaHref="/portfolio"
            ctaLabel="See Compliance Guru"
            visual={<CgGapWindow />}
          >
            <p>The work of following rules and being able to show that you have.</p>
            <p>
              Compliance is where the gap between what businesses must do and
              the help they get is widest. Our first product, Compliance Guru,
              serves UK sponsor licence holders. We will move into other areas
              as we find problems we can solve well.
            </p>
          </FeaturePanel>
        </div>
      </section>

      <section className="block pillars">
        <div className="wrap">
          <p className="label" style={{ marginBottom: 14 }}>
            What we hold ourselves to
          </p>
          <h2 className="pillars-h">Our standards</h2>
          <Standards />
        </div>
      </section>

      <section className="block">
        <div className="wrap">
          <div className="band">
            <div>
              <p className="label">About the company</p>
              <p className="band-t">
                {site.name} is registered in England and Wales and based in
                London.
              </p>
            </div>
            <SmartLink href={`mailto:${site.email}`} className="btn btn-light">
              {site.email}
            </SmartLink>
          </div>
        </div>
      </section>
    </>
  );
}
