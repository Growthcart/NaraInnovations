import type { ReactNode } from "react";
import { SmartLink } from "./SmartLink";

/** Black feature panel with a browser-window preview on the right (.cg). */
export function FeaturePanel({
  badge,
  title,
  children,
  ctaHref,
  ctaLabel,
  visual,
}: {
  badge: string;
  title: string;
  children: ReactNode;
  ctaHref: string;
  ctaLabel: string;
  visual: ReactNode;
}) {
  return (
    <div className="cg">
      <div className="cg-text">
        <span className="cg-badge">{badge}</span>
        <h2>{title}</h2>
        {children}
        <SmartLink href={ctaHref} className="btn btn-light" arrow>
          {ctaLabel}
        </SmartLink>
      </div>
      <div className="cg-vis" aria-hidden="true">
        {visual}
      </div>
    </div>
  );
}

/** Light-blue tile with a UI preview, then title, text and an outline button (.pcard). */
export function Card({
  visual,
  title,
  children,
  href,
  cta,
}: {
  visual: ReactNode;
  title: string;
  children: ReactNode;
  href?: string;
  cta?: string;
}) {
  return (
    <article className="pcard">
      <div className="pvis" aria-hidden="true">
        {visual}
      </div>
      <h3>{title}</h3>
      {children}
      {href && cta ? (
        <SmartLink href={href} className="pbtn">
          {cta}
        </SmartLink>
      ) : null}
    </article>
  );
}

const standards = [
  ["01", "Usefulness first", "A product earns its place by saving time or reducing risk for the people using it."],
  ["02", "Honest claims", "We say what our products do and what they do not do. Software can support good decisions, and the decisions stay with the people using it."],
  ["03", "Respect for data", "We collect what a product needs and no more, and we protect it in line with UK data protection law."],
  ["04", "Long-term thinking", "We build products we plan to run and improve for years."],
];

export function Standards() {
  return (
    <div className="vgrid">
      {standards.map(([n, h, p]) => (
        <div key={n}>
          <span className="mn">{n}</span>
          <h3>{h}</h3>
          <p>{p}</p>
        </div>
      ))}
    </div>
  );
}
