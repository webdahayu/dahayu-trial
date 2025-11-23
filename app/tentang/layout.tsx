import { Metadata } from "next";
import { siteConfig } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Tentang Kami",
  description:
    "Dahayu Jewelry adalah produsen perhiasan emas dan perak berkualitas tinggi dengan desain elegan khas Bali. Kami menghadirkan koleksi perhiasan handmade yang dibuat dengan penuh perhatian terhadap detail.",
  keywords: [
    "tentang dahayu jewelry",
    "about dahayu",
    "perhiasan bali",
    "jewelry bali",
    "handmade jewelry",
    "craftsmanship",
    "perhiasan handmade",
  ],
  openGraph: {
    title: "Tentang Kami | Dahayu Jewelry",
    description:
      "Dahayu Jewelry - Produsen perhiasan emas dan perak berkualitas tinggi dengan desain elegan khas Bali.",
    url: `${siteConfig.url}/tentang`,
    siteName: siteConfig.name,
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: `${siteConfig.url}/proses-pembuatan/proses-1.jpg`,
        width: 1200,
        height: 630,
        alt: "Dahayu Jewelry Craftsmanship",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tentang Kami | Dahayu Jewelry",
    description:
      "Dahayu Jewelry - Produsen perhiasan emas dan perak berkualitas tinggi dengan desain elegan khas Bali.",
    images: [`${siteConfig.url}/proses-pembuatan/proses-1.jpg`],
  },
};

export default function TentangLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
