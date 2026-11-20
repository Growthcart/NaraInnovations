import { Card, FeaturePanel } from "@/components/Panels";
import {
  ChecklistStack,
  CgProductWindow,
  GapCard,
  StageCard,
} from "@/components/Mockups";
import { SmartLink } from "@/components/SmartLink";
import { VideoHero } from "@/components/VideoHero";

export default function HomePage() {
  return (
    <>
      <VideoHero
        label="Technology products, built and owned"
        title={
          <>
            Technology that makes <em>work and life</em> easier.
          </>
        }
        lead={[
          "Nara Innovations invests in, builds and runs its own technology products. Each one takes a hard, necessary task off people's hands.",
          "We started with compliance.",
        ]}
        ctas={
          <>
            <SmartLink href="/portfolio" className="btn btn-light" arrow>
              See our portfolio
            </SmartLink>
            <SmartLink href="/vision" className="btn btn-outline-w">
              Read our vision
            </SmartLink>
          </>
        }
      />

      <section className="block model">
        <div className="wrap">
          <div className="split">
            <div>
              <p className="label">What we do</p>
              <h2>
                Strategic investments in technology, AI and innovation. We
                develop future-ready products.
              </h2>
            </div>
            <div className="copy">
              <p>
                We are a technology and innovation-led company focused on
                identifying opportunities, investing in emerging technologies
                and building products for the future.
              </p>
              <p>
                From AI-powered platforms and intelligent business solutions to
                consumer-focused digital products, we bring ideas to life
                through innovation, investment and technology.
              </p>
            </div>
          </div>
          <div className="msteps">
            <div>
              <span className="mn">01</span>
              <h3>Find the gap</h3>
              <p>
                Work that is important, repeated often and poorly served by the
                software available today.
              </p>
            </div>
            <div>
              <span className="mn">02</span>
              <h3>Invest and build</h3>
              <p>
                We back the product with our own capital, team and technology,
                and build it with specialists in the field.
              </p>
            </div>
            <div>
              <span className="mn">03</span>
              <h3>Own and grow</h3>
              <p>
                We run the product long term and add to the family, one problem
                at a time.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="block pillars">
        <div className="wrap">
          <p className="label" style={{ marginBottom: 14 }}>
            Where we invest
          </p>
          <h2 className="pillars-h">
            What we put our capital and time behind
          </h2>
          <div className="pgrid">
            <Card
              visual={
                <StageCard
                  title="Investment review"
                  chip="Backed"
                  rows={[
                    "Changes how the job is done",
                    "Saves time",
                    "Cuts risk",
                  ]}
                />
              }
              title="Backing real innovation"
              href="/vision"
              cta="Learn more"
            >
              <p>
                We invest in ideas that change how a job gets done, not small
                tweaks to old software. If a product will not save time or cut
                risk, we do not back it.
              </p>
            </Card>

            <Card
              visual={<ChecklistStack />}
              title="Investing in AI and technology"
              href="/vision"
              cta="Learn more"
            >
              <p>
                We put money into AI, automation and secure cloud technology,
                so our products can check, remind and prepare the work people
                used to do by hand.
              </p>
            </Card>

            <Card
              visual={
                <GapCard
                  title="Is it a gap?"
                  footLabel="Gap found"
                  footValue="Compliance"
                />
              }
              title="Finding market gaps"
              href="/portfolio"
              cta="Learn more"
            >
              <p>
                We look for work that is important, repeated often and poorly
                served by today&rsquo;s software. Compliance was the first gap
                we found, and it will not be the last.
              </p>
            </Card>
          </div>
        </div>
      </section>

      <section className="block cg-sec">
        <div className="wrap">
          <FeaturePanel
            badge="Our first product"
            title="Compliance Guru"
            ctaHref="/portfolio"
            ctaLabel="About Compliance Guru"
            visual={<CgProductWindow />}
          >
            <p>
              Compliance Guru is built for UK businesses that hold a sponsor
              licence. It helps them stay on top of their Home Office sponsor
              compliance duties.
            </p>
          </FeaturePanel>
        </div>
      </section>
    </>
  );
}
