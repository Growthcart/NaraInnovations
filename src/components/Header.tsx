"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav, site } from "@/config/site";
import { Arrow, NavIcon, type NavIconName } from "./icons";
import { Logo } from "./Logo";

const rowIcons: Record<string, NavIconName> = {
  "/": "home",
  "/vision": "eye",
  "/portfolio": "briefcase",
  "/news": "newspaper",
  "/contact": "mail",
};

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // While the mobile menu is open: stop the page behind it scrolling,
  // close on Escape, and close if the window grows to desktop width.
  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    const onResize = () => {
      if (window.innerWidth > 760) setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, [open]);

  return (
    <header>
      <div className={`wrap nav${open ? " open" : ""}`}>
        <Logo />
        <ul id="site-nav">
          {nav.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={pathname === item.href ? "active" : undefined}
                aria-current={pathname === item.href ? "page" : undefined}
                onClick={() => setOpen(false)}
              >
                <span className="nav-ico">
                  <NavIcon name={rowIcons[item.href]} />
                </span>
                <span className="nav-text">
                  <span className="nav-label">{item.label}</span>
                  <span className="nav-hint">{item.hint}</span>
                </span>
                <span className="nav-chev">
                  <NavIcon name="chevron" />
                </span>
              </Link>
            </li>
          ))}
          <li className="nav-foot">
            <Link
              href="/contact"
              className="btn btn-dark nav-cta"
              onClick={() => setOpen(false)}
            >
              Get in touch <Arrow />
            </Link>
            <p className="nav-foot-meta">
              <a href={`mailto:${site.email}`}>{site.email}</a>
              <span>{site.tagline}</span>
            </p>
          </li>
        </ul>
        <Link href="/contact" className="btn btn-dark" onClick={() => setOpen(false)}>
          Get in touch <Arrow />
        </Link>
        <button
          type="button"
          className="menu-btn"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="site-nav"
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
            <path
              d={open ? "M6 6l12 12M18 6L6 18" : "M4 7h16M4 12h16M4 17h16"}
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              fill="none"
            />
          </svg>
        </button>
      </div>
    </header>
  );
}
