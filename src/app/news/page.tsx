import type { Metadata } from "next";
import { site } from "@/config/site";
import { CgMarkSvg } from "@/components/icons";
import { VideoHero } from "@/components/VideoHero";

export const metadata: Metadata = {
  title: "News",
  description: "Company updates and product announcements from Nara Innovations.",
  alternates: { canonical: "/news" },
};

export default function NewsPage() {
  return (
    <>
      <VideoHero
        sub
        label="News"
        title="News"
        lead={["Company updates and product announcements from Nara Innovations."]}
      />

      <section className="block pillars">
        <div className="wrap">
          <article className="newsc">
            <div className="pvis news-vis" aria-hidden="true">
              <div className="ui news-logo">
                <span className="cg-mark big"><CgMarkSvg /></span>
                <span className="cg-name big"><b>compliance</b> guru</span>
                <span className="st st-soon">Launching soon</span>
              </div>
            </div>
            <div className="news-t">
              <span className="pill">Coming soon</span>
              <h2>
                Nara Innovations to launch Compliance Guru for UK sponsor
                licence holders
              </h2>
              <p>
                Nara Innovations is getting ready to launch Compliance Guru,
                its first product.
              </p>
              <p>
                Compliance Guru is built for UK businesses that hold a sponsor
                licence. It will help them stay on top of their Home Office
                sponsor compliance duties.
              </p>
              <p>
                It is the first in a planned family of products from Nara
                Innovations, a UK technology company that builds software for
                tasks people and businesses find hard to keep on top of.
              </p>
              <p>
                To hear when it launches, or for more information, email{" "}
                {site.email}.
              </p>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
