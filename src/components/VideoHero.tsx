import type { ReactNode } from "react";

type Props = {
  label: string;
  title: ReactNode;
  lead?: string[];
  ctas?: ReactNode;
  sub?: boolean;
};

export function VideoHero({ label, title, lead, ctas, sub = false }: Props) {
  return (
    <section className={`hero hero-video${sub ? " sub" : ""}`}>
      <video
        className="hv"
        autoPlay
        muted
        loop
        playsInline
        preload={sub ? "metadata" : "auto"}
        poster="/media/hero-poster.jpg"
        aria-hidden="true"
      >
        <source src="/media/hero.mp4" type="video/mp4" />
      </video>
      <div className="hv-overlay" />
      <div className="wrap hero-content">
        <div className="hero-in">
          <p className="label">
            <i />
            {label}
          </p>
          <h1>{title}</h1>
          {lead?.map((t) => (
            <p className="lead" key={t}>
              {t}
            </p>
          ))}
          {ctas ? <div className="ctas">{ctas}</div> : null}
        </div>
      </div>
    </section>
  );
}
