import Link from "next/link";
import { site } from "@/config/site";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="foot">
          <div className="about">
            <Logo light />
            <p>{site.tagline}</p>
          </div>
          <div>
            <h4>Company</h4>
            <ul>
              <li><Link href="/vision">Our vision</Link></li>
              <li><Link href="/portfolio">Portfolio</Link></li>
              <li><Link href="/news">News</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4>Contact</h4>
            <ul>
              <li><a href={`mailto:${site.email}`}>{site.email}</a></li>
            </ul>
          </div>
          <div>
            <h4>Registered office</h4>
            <ul>
              <li>{site.name}</li>
              <li>{site.address[0]}</li>
              <li>{site.address[1]}</li>
            </ul>
          </div>
        </div>
        <div className="legal">
          <span>
            &copy; 2026 {site.name}. Registered in England and Wales, company
            number {site.companyNumber}.
          </span>
          <nav aria-label="Legal">
            <Link href="/privacy-policy">Privacy policy</Link>
            <Link href="/cookie-policy">Cookie policy</Link>
            <Link href="/terms">Terms of use</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
