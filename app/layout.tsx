import type { Metadata } from "next";
import { Playfair_Display, Poppins } from "next/font/google";
import "./globals.css";
import {
  OrganizationSchema,
  LocalBusinessSchema,
  WebsiteSchema,
} from "./components/StructuredData";
import { Analytics } from "./components/Analytics";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://dahayujewelry.com"),
  title: {
    default:
      "Dahayu Jewelry – Perhiasan Perak 925 Lapisan Emas 18 karat Premium",
    template: "%s | Dahayu Jewelry",
  },
  description:
    "Dahayu Jewelry menghadirkan perhiasan perak 925 dengan lapisan emas 18 karat premium yang dibuat dengan tangan oleh pengrajin Bali. Setiap karya terinspirasi dari keindahan alam dan filosofi kehidupan. Koleksi cincin, anting, dan bros eksklusif dengan makna mendalam.",
  keywords: [
    "perhiasan bali",
    "emas 18k",
    "perak 925",
    "jewelry bali",
    "dahayu jewelry",
    "perhiasan handmade",
    "cincin emas bali",
    "anting emas bali",
    "bros emas bali",
    "perhiasan tradisional bali",
    "luxury jewelry indonesia",
    "perhiasan premium",
    "perhiasan bermakna",
    "jewelry with soul",
  ],
  authors: [{ name: "Dahayu Jewelry" }],
  creator: "Dahayu Jewelry",
  publisher: "Dahayu Jewelry",
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://dahayujewelry.com",
    siteName: "Dahayu Jewelry",
    title: "Dahayu Jewelry – Perhiasan Perak 925 Lapisan Emas 18 karat Premium",
    description:
      "Perhiasan perak 925 dengan lapisan emas 18 karat premium handmade dari Bali. Setiap karya dibuat dengan makna mendalam, menggabungkan keindahan alam dan filosofi kehidupan.",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Dahayu Jewelry - Perhiasan Premium Bali",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dahayu Jewelry – Perhiasan Perak 925 Lapisan Emas 18 karat Premium",
    description:
      "Perhiasan perak 925 dengan lapisan emas 18 karat premium handmade dari Bali dengan makna mendalam.",
    images: ["/logo.png"],
    creator: "@dahayu.jewelry",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
  },
  alternates: {
    canonical: "https://dahayujewelry.com",
  },
  category: "jewelry",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body
        className={`${playfair.variable} ${poppins.variable} antialiased bg-cream text-green-dark`}
      >
        {/* JSON-LD Structured Data for SEO */}
        <OrganizationSchema />
        <LocalBusinessSchema />
        <WebsiteSchema />

        {/* Google Analytics */}
        <Analytics />

        {children}
      </body>
    </html>
  );
}
