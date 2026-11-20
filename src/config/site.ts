export const site = {
  name: "Nara Innovations Ltd",
  shortName: "NARA Innovations",
  url: "https://narainnovations.com",
  email: "info@narainnovations.com",
  tagline: "Shaping Tomorrow Through Technology",
  description:
    "Nara Innovations builds software for the tasks people and businesses must do and struggle to keep on top of. We started with compliance.",
  companyNumber: "17589395",
  address: ["128 City Road", "London EC1V 2NX", "United Kingdom"],
  legalUpdated: "20 November 2026",
} as const;

export const nav = [
  { href: "/", label: "Home" },
  { href: "/vision", label: "Our vision" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/news", label: "News" },
  { href: "/contact", label: "Contact" },
] as const;
