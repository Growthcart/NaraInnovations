import type { ReactNode } from "react";
import { site } from "@/config/site";
import { VideoHero } from "./VideoHero";

export function LegalPage({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <>
      <VideoHero sub label="Legal" title={title} />
      <section className="block pillars">
        <div className="wrap">
          <div className="legal-card prose">
            <p className="updated">Last updated: {site.legalUpdated}</p>
            {children}
          </div>
        </div>
      </section>
    </>
  );
}
