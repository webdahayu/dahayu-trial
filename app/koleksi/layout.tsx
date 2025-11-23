import { Metadata } from "next";
import { siteConfig } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Koleksi Perhiasan Emas & Perak",
  description:
    "Jelajahi koleksi lengkap perhiasan emas dan perak berkualitas tinggi dari Dahayu Jewelry. Anting, cincin, dan bros dengan desain elegan khas Bali.",
  keywords: [
    "koleksi perhiasan",
    "perhiasan emas",
    "perhiasan perak",
    "jewelry collection",
    "anting emas",
    "cincin emas",
    "bros emas",
    "Bali jewelry",
  ],
  openGraph: {
    title: "Koleksi Perhiasan Emas & Perak | Dahayu Jewelry",
    description:
      "Jelajahi koleksi lengkap perhiasan emas dan perak berkualitas tinggi. Anting, cincin, dan bros dengan desain elegan khas Bali.",
    url: `${siteConfig.url}/koleksi`,
    siteName: siteConfig.name,
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: `${siteConfig.url}/hero-section/landscape/dahayu-landscape-1.jpg`,
        width: 1200,
        height: 630,
        alt: "Dahayu Jewelry Collection",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Koleksi Perhiasan Emas & Perak | Dahayu Jewelry",
    description:
      "Jelajahi koleksi lengkap perhiasan emas dan perak berkualitas tinggi.",
    images: [`${siteConfig.url}/hero-section/landscape/dahayu-landscape-1.jpg`],
  },
};

export default function KoleksiLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
