"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Testimonials() {
  return (
    <section className="relative py-16 bg-dark-lighter overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 opacity-20">
        <motion.div
          className="absolute top-0 left-1/3 w-96 h-96 bg-gold/20 rounded-full blur-3xl"
          animate={{ y: [0, -50, 0], x: [0, 30, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-0 right-1/3 w-96 h-96 bg-gold-light/20 rounded-full blur-3xl"
          animate={{ y: [0, 50, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 px-6"
        >
          <h2 className="text-gold text-sm font-light tracking-[0.3em] mb-3 font-sans uppercase">
            Testimoni
          </h2>

          <h3 className="text-4xl md:text-5xl font-serif font-light">
            <span className="text-gradient">Cerita dari Mereka </span>
            <span className="text-cream">yang Memakai Dahayu</span>
          </h3>
        </motion.div>

        {/* Testimonials Image */}
        <div className="mb-12 px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-6xl mx-auto"
          >
            <Image
              src="/testimonia.png"
              alt="Testimoni Pelanggan Dahayu"
              className="w-full h-auto rounded-2xl luxury-glow"
              width={1200}
              height={800}
              loading="lazy"
            />
          </motion.div>
        </div>

        {/* Trust Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-3 gap-6 text-center px-6"
        >
          {[
            { value: "5+", label: "Tahun Pengalaman" },
            { value: "18K", label: "Emas Premium" },
            { value: "925", label: "Perak" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.05 }}
              className="p-5 glass-effect rounded-xl luxury-glow"
            >
              <h4 className="text-4xl font-serif font-light text-gradient mb-1">
                {stat.value}
              </h4>
              <p className="text-cream/60 font-sans text-xs">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
