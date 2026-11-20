import type { Metadata } from "next";

/**
 * Per-page SEO metadata. The title is written in full (absolute), so it is
 * exactly what appears in search results. Keep titles to about 60 characters
 * and descriptions to about 155.
 */
export function pageMeta({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: path },
    // A page-level openGraph/twitter object replaces the layout one entirely,
    // so the shared fields and the share image are repeated here.
    openGraph: {
      type: "website",
      siteName: "NARA Innovations",
      locale: "en_GB",
      title,
      description,
      url: path,
      images: [
        {
          url: "/opengraph-image.jpg",
          width: 1200,
          height: 675,
          alt: "Nara Innovations: Shaping tomorrow through technology",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/twitter-image.jpg"],
    },
  };
}
