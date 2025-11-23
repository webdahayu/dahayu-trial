import { Metadata } from "next";
import { siteConfig } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Kontak Kami",
  description:
    "Hubungi Dahayu Jewelry untuk konsultasi dan pemesanan perhiasan emas & perak. Kami siap membantu Anda menemukan perhiasan yang sempurna. WhatsApp: +62 857-2336-8060",
  keywords: [
    "kontak dahayu jewelry",
    "hubungi dahayu",
    "pesan perhiasan",
    "jewelry order",
    "whatsapp jewelry",
    "bali jewelry contact",
  ],
  openGraph: {
    title: "Kontak Kami | Dahayu Jewelry",
    description:
      "Hubungi kami untuk konsultasi dan pemesanan perhiasan. WhatsApp: +62 857-2336-8060",
    url: `${siteConfig.url}/kontak`,
    siteName: siteConfig.name,
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: `${siteConfig.url}/hero-section/landscape/dahayu-landscape-1.jpg`,
        width: 1200,
        height: 630,
        alt: "Contact Dahayu Jewelry",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kontak Kami | Dahayu Jewelry",
    description:
      "Hubungi kami untuk konsultasi dan pemesanan perhiasan. WhatsApp: +62 857-2336-8060",
    images: [`${siteConfig.url}/hero-section/landscape/dahayu-landscape-1.jpg`],
  },
};

export default function KontakLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
