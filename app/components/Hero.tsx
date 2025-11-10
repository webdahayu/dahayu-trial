"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 150]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-dark pt-24">
      {/* Grain overlay */}
      <div className="grain-overlay" />

      {/* Animated background with complex gradients */}
      <div className="absolute inset-0">
        {/* Main gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-dark via-green-dark/30 to-dark opacity-90" />

        {/* Animated liquid shapes */}
        <motion.div
          style={{ y: y1 }}
          className="absolute -top-40 -right-40 w-[800px] h-[800px] liquid-shape bg-gradient-radial from-gold/20 via-gold/10 to-transparent blur-3xl"
        />
        <motion.div
          style={{ y: y2 }}
          className="absolute -bottom-40 -left-40 w-[600px] h-[600px] liquid-shape bg-gradient-radial from-gold-light/20 via-gold-light/10 to-transparent blur-3xl"
        />

        {/* Floating geometric shapes */}
        <motion.div
          animate={{
            rotate: 360,
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-1/4 right-1/4 w-32 h-32 border border-gold/20 rounded-[30%]"
          style={{ transform: "rotate(45deg)" }}
        />
        <motion.div
          animate={{
            rotate: -360,
            y: [0, 30, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-1/3 left-1/3 w-24 h-24 border-2 border-gold-light/10"
        />

        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(198, 166, 100, 0.5) 1px, transparent 1px),
              linear-gradient(90deg, rgba(198, 166, 100, 0.5) 1px, transparent 1px)
            `,
            backgroundSize: "100px 100px",
          }}
        />
      </div>

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 flex flex-col items-center justify-center min-h-[calc(100vh-6rem)] px-4 text-center py-12"
      >
        {/* Decorative line top */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100px" }}
          transition={{ duration: 1, delay: 0.5 }}
          className="h-[1px] bg-gradient-to-r from-transparent via-gold to-transparent mb-8"
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mb-6 space-y-6"
        >
          {/* Small title */}
          <motion.h2
            initial={{ opacity: 0, letterSpacing: "0.5em" }}
            animate={{ opacity: 1, letterSpacing: "0.3em" }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-gold text-sm md:text-base font-light tracking-[0.3em] mb-4 font-sans uppercase"
          >
            Dahayu Jewelry
          </motion.h2>

          {/* Main title with gradient */}
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif font-bold mb-6 leading-[0.9]">
            <span className="block text-gradient">Keindahan</span>
            <span className="block text-cream mt-4">Abadi dalam</span>
            <span className="block text-gradient mt-4">Kilau Alam</span>
          </h1>

          {/* Decorative diamond shape */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="inline-block w-3 h-3 bg-gold transform rotate-45 mx-auto my-6"
          />

          <p className="text-cream/60 text-lg md:text-xl font-light max-w-2xl mx-auto font-sans leading-relaxed">
            Perhiasan emas premium yang menggabungkan
            <br className="hidden md:block" />
            <span className="text-gold-light">
              keindahan alam tropis Bali
            </span>{" "}
            dengan
            <br className="hidden md:block" />
            keahlian pengrajin tradisional
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 mt-12"
        >
          <Link href="/koleksi">
            <div className="group relative px-10 py-5 bg-gold text-dark font-semibold rounded-full overflow-hidden transition-all duration-500 transform hover:scale-105 cursor-pointer">
              <span className="relative z-10">Jelajahi Koleksi</span>
              <div className="absolute inset-0 bg-gold-light transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </div>
          </Link>
          <Link href="/tentang">
            <div className="group relative px-10 py-5 bg-transparent border-2 border-gold/30 text-cream font-semibold rounded-full overflow-hidden backdrop-blur-sm hover:border-gold transition-all duration-500 transform hover:scale-105 cursor-pointer">
              <span className="relative z-10 group-hover:text-gold-light transition-colors duration-300">
                Tentang Kami
              </span>
              <div className="absolute inset-0 bg-gold/10 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-right" />
            </div>
          </Link>
        </motion.div>

        {/* Decorative line bottom */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100px" }}
          transition={{ duration: 1, delay: 1 }}
          className="h-[1px] bg-gradient-to-r from-transparent via-gold to-transparent mt-12"
        />

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.4 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-gold/60 text-xs tracking-widest uppercase">
              Scroll
            </span>
            <ChevronDown className="w-6 h-6 text-gold" />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Vignette effect */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-dark/50 pointer-events-none" />
    </section>
  );
}
