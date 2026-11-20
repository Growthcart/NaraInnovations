import { site } from "@/config/site";
import { CgMarkSvg } from "./icons";

/* Small decorative UI previews used inside cards and panels.
   They are purely visual, so the parent wrappers set aria-hidden. */

export function StageCard({
  title,
  chip,
  rows,
}: {
  title: string;
  chip: string;
  rows: string[];
}) {
  return (
    <div className="ui ui-stage">
      <div className="ui-top">
        <span className="ui-name">{title}</span>
        <span className="ui-chip">{chip}</span>
      </div>
      {rows.map((r, i) => (
        <div className={`ui-row${i === rows.length - 1 ? " last" : ""}`} key={r}>
          <span>{r}</span>
          <span className="ok" />
        </div>
      ))}
    </div>
  );
}

export function ChecklistStack() {
  return (
    <div className="stack">
      <div className="ui ui-line l1">
        <span className="tick on" />
        <span className="t">Details checked</span>
        <span className="badge">AI</span>
      </div>
      <div className="ui ui-line l2">
        <span className="tick" />
        <span className="t">Reminder sent</span>
        <span className="r">Automated</span>
      </div>
      <div className="ui ui-line l3">
        <span className="tick" />
        <span className="t">Draft prepared</span>
        <span className="r">Ready</span>
      </div>
    </div>
  );
}

function Level({ filled }: { filled: 1 | 3 }) {
  return (
    <span className="lvl">
      <i className="f" />
      <i className={filled === 3 ? "f" : undefined} />
      <i className={filled === 3 ? "f" : undefined} />
    </span>
  );
}

export function GapCard({
  title,
  footLabel,
  footValue,
}: {
  title: string;
  footLabel: string;
  footValue: string;
}) {
  return (
    <div className="ui gap">
      <div className="gap-h">
        <span>{title}</span>
      </div>
      <div className="gap-r">
        <span>Important work</span>
        <Level filled={3} />
      </div>
      <div className="gap-r">
        <span>Repeated often</span>
        <Level filled={3} />
      </div>
      <div className="gap-r">
        <span>Well served by software</span>
        <Level filled={1} />
      </div>
      <div className="gap-f">
        <span className="ok" />
        <span>
          <small>{footLabel}</small>
          {footValue}
        </span>
      </div>
    </div>
  );
}

export function FamilyList() {
  return (
    <div className="ui port">
      <div className="port-h">
        <span>Nara Innovations</span>
        <span className="ui-chip">Family</span>
      </div>
      <div className="port-r">
        <span className="pdot pd-dark">01</span>
        <span className="pn"><b>Compliance Guru</b><small>Launching soon</small></span>
      </div>
      <div className="port-r">
        <span className="pdot pd-grey">02</span>
        <span className="pn"><b>Next product</b><small>Coming</small></span>
      </div>
      <div className="port-r">
        <span className="pdot pd-grey">03</span>
        <span className="pn"><b>Future product</b><small>Coming</small></span>
      </div>
    </div>
  );
}

export function PortfolioList() {
  return (
    <div className="ui port">
      <div className="port-h">
        <span>Portfolio</span>
        <span className="ui-chip">2026</span>
      </div>
      <div className="port-r">
        <span className="pdot pd-dark">01</span>
        <span className="pn"><b>Compliance Guru</b><small>Sponsor licence compliance</small></span>
        <span className="st st-soon">Launching soon</span>
      </div>
      <div className="port-r">
        <span className="pdot pd-grey">02</span>
        <span className="pn"><b>Next product</b><small>Choosing carefully</small></span>
        <span className="st">Soon</span>
      </div>
    </div>
  );
}

export function MailCard({
  subject,
  widths,
}: {
  subject: string;
  widths: [number, number, number];
}) {
  return (
    <div className="ui mail">
      <div className="mail-r"><small>To</small>{site.email}</div>
      <div className="mail-r"><small>Subject</small>{subject}</div>
      <div className="mail-b">
        {widths.map((w) => (
          <i key={w} style={{ width: `${w}%` }} />
        ))}
      </div>
    </div>
  );
}

export function AddressCard() {
  return (
    <div className="ui addr">
      <div className="addr-h"><span className="pin" />Registered office</div>
      <p>
        <b>{site.name}</b>
        <br />
        {site.address[0]}
        <br />
        {site.address[1]}
        <br />
        {site.address[2]}
      </p>
    </div>
  );
}

/** Browser-window preview of the Compliance Guru product. */
export function CgProductWindow() {
  return (
    <div className="cg-win">
      <div className="cg-bar"><i /><i /><i /></div>
      <div className="cg-head">
        <span className="cg-mark"><CgMarkSvg /></span>
        <span className="cg-name"><b>compliance</b> guru</span>
      </div>
      <div className="cg-body">
        <p className="cg-line"><b>Sponsor compliance for</b> Your Business Ltd</p>
        <div className="cg-card">
          <p className="cg-k">Sponsor licence</p>
          <p className="cg-v">Home Office duties <span className="cg-tag">On track</span></p>
        </div>
        <div className="cg-card cg-ghost" />
      </div>
    </div>
  );
}

/** Browser-window preview of the compliance gap (meters). */
export function CgGapWindow() {
  return (
    <div className="cg-win">
      <div className="cg-bar"><i /><i /><i /></div>
      <div className="cg-body" style={{ paddingTop: 28 }}>
        <p className="cg-line"><b>The compliance gap</b></p>
        <div className="cg-card">
          <p className="cg-k">What businesses must do</p>
          <div className="meter"><i style={{ width: "92%" }} /></div>
        </div>
        <div className="cg-card">
          <p className="cg-k">The help they get today</p>
          <div className="meter low"><i style={{ width: "28%" }} /></div>
        </div>
        <div className="cg-card cg-ghost" />
      </div>
    </div>
  );
}
