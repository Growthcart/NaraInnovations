import type { MetadataRoute } from "next";
import { site } from "@/config/site";

// Update lastModified when a page's content changes.
const pages: { path: string; priority: number; lastModified: string }[] = [
  { path: "", priority: 1, lastModified: "2026-11-20" },
  { path: "/vision", priority: 0.8, lastModified: "2026-11-20" },
  { path: "/portfolio", priority: 0.8, lastModified: "2026-11-20" },
  { path: "/news", priority: 0.7, lastModified: "2026-11-20" },
  { path: "/contact", priority: 0.7, lastModified: "2026-11-20" },
  { path: "/privacy-policy", priority: 0.3, lastModified: "2026-11-20" },
  { path: "/cookie-policy", priority: 0.3, lastModified: "2026-11-20" },
  { path: "/terms", priority: 0.3, lastModified: "2026-11-20" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return pages.map((p) => ({
    url: `${site.url}${p.path}`,
    lastModified: p.lastModified,
    changeFrequency: "monthly",
    priority: p.priority,
  }));
}
