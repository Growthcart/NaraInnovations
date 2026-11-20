export const site = {
  name: "Nara Innovations Ltd",
  shortName: "NARA Innovations",
  url: "https://narainnovations.com",
  email: "info@narainnovations.com",
  homeTitle:
    "Nara Innovations - Strategic investments in technology, AI and innovation",
  tagline: "Shaping Tomorrow Through Technology",
  description:
    "Nara Innovations builds software for the tasks people and businesses must do and struggle to keep on top of. We started with compliance.",
  companyNumber: "17589395",
  address: ["128 City Road", "London EC1V 2NX", "United Kingdom"],
  legalUpdated: "20 November 2026",
} as const;

// `hint` is the short line shown under each title in the mobile menu.
export const nav = [
  { href: "/", label: "Home", hint: "Back to the start" },
  { href: "/vision", label: "Our vision", hint: "Why we build" },
  { href: "/portfolio", label: "Portfolio", hint: "Our products" },
  { href: "/news", label: "News", hint: "Company updates" },
  { href: "/contact", label: "Contact", hint: "Talk to us" },
] as const;
