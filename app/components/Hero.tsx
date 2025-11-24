"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const heroImages = [
  {
    landscape: "/hero-section/landscape/1.png",
    portrait: "/hero-section/potrait/1p.png",
  },
  {
    landscape: "/hero-section/landscape/2.png",
    portrait: "/hero-section/potrait/2p.png",
  },
  {
    landscape: "/hero-section/landscape/3.png",
    portrait: "/hero-section/potrait/3p.png",
  },
  {
    landscape: "/hero-section/landscape/4.png",
    portrait: "/hero-section/potrait/4p.png",
  },
  {
    landscape: "/hero-section/landscape/5.png",
    portrait: "/hero-section/potrait/5p.png",
  },
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full bg-dark overflow-hidden">
      {/* Image Carousel Background */}
      <div className="relative z-0 w-full">
        <AnimatePresence initial={false}>
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full"
          >
            {/* Mobile - Portrait */}
            <img
              src={heroImages[currentIndex].portrait}
              alt="Dahayu Jewelry"
              className="w-full h-auto md:hidden"
              loading="eager"
              decoding="async"
              fetchPriority="high"
            />

            {/* Desktop - Landscape */}
            <img
              src={heroImages[currentIndex].landscape}
              alt="Dahayu Jewelry"
              className="w-full h-auto hidden md:block"
              loading="eager"
              decoding="async"
              fetchPriority="high"
            />
          </motion.div>
        </AnimatePresence>

        {/* Placeholder to maintain height */}
        <img
          src={heroImages[0].portrait}
          alt=""
          className="w-full h-auto md:hidden invisible"
          aria-hidden="true"
          loading="eager"
        />
        <img
          src={heroImages[0].landscape}
          alt=""
          className="w-full h-auto hidden md:block invisible"
          aria-hidden="true"
          loading="eager"
        />

        {/* Carousel indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex gap-2">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-gold w-8"
                  : "bg-cream/30 hover:bg-cream/50"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Grain overlay */}
      <div className="grain-overlay z-10" />

      {/* Vignette effect */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-dark/50 pointer-events-none z-10" />
    </section>
  );
}
