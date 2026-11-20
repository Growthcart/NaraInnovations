import type { MetadataRoute } from "next";
import { site } from "@/config/site";

const routes = [
  "",
  "/vision",
  "/portfolio",
  "/news",
  "/contact",
  "/privacy-policy",
  "/cookie-policy",
  "/terms",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((r) => ({ url: `${site.url}${r}` }));
}
