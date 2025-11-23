import { Metadata } from "next";
import { siteConfig } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Baca artikel menarik tentang perhiasan, tips perawatan emas dan perak, inspirasi desain, dan cerita di balik setiap karya Dahayu Jewelry.",
  keywords: [
    "blog perhiasan",
    "tips perawatan emas",
    "perawatan perhiasan",
    "inspirasi jewelry",
    "cerita dahayu",
    "artikel perhiasan bali",
  ],
  openGraph: {
    title: "Blog | Dahayu Jewelry",
    description:
      "Artikel menarik tentang perhiasan, tips perawatan, dan cerita di balik setiap karya Dahayu Jewelry.",
    url: `${siteConfig.url}/blog`,
    siteName: siteConfig.name,
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Dahayu Jewelry Blog",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog | Dahayu Jewelry",
    description:
      "Artikel menarik tentang perhiasan, tips perawatan, dan cerita di balik karya kami.",
    images: ["/logo.png"],
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
