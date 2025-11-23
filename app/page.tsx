import { Metadata } from "next";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FeaturedCollection from "./components/FeaturedCollection";
import About from "./components/About";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Dahayu Jewelry - Perhiasan Emas Premium Bali | Jewelry with a Soul",
  description:
    "Perhiasan emas 18K dan perak 925 premium handmade dari Bali. Koleksi cincin, anting, dan bros eksklusif dengan makna mendalam. Where Desire Meets Creation.",
  openGraph: {
    title: "Dahayu Jewelry - Perhiasan Emas Premium Bali",
    description:
      "Perhiasan emas 18K dan perak 925 premium handmade dari Bali dengan makna mendalam.",
    url: "https://dahayujewelry.com",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Dahayu Jewelry",
      },
    ],
  },
};

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <FeaturedCollection />
      <About />
      <Testimonials />
      <Footer />
    </main>
  );
}
