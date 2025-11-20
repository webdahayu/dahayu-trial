"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Sparkles } from "lucide-react";
import { products } from "../data/products";

const categories = ["Semua", "Anting", "Cincin", "Bros"];

export default function KoleksiPage() {
  const [selectedCategory, setSelectedCategory] = useState("Semua");

  const filteredProducts =
    selectedCategory === "Semua"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  return (
    <main className="min-h-screen bg-dark relative overflow-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20">
        <div className="grain-overlay" />

        {/* Animated background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-linear-to-br from-dark via-green-dark/20 to-dark opacity-90" />
          <motion.div
            animate={{
              y: [0, -40, 0],
              x: [0, 30, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-0 right-1/4 w-96 h-96 bg-gold/10 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              y: [0, 50, 0],
              x: [0, -40, 0],
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-gold-light/10 rounded-full blur-3xl"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-16 h-px bg-linear-to-r from-transparent via-gold to-transparent" />
              <Sparkles className="w-6 h-6 text-gold" />
              <div className="w-16 h-px bg-linear-to-r from-transparent via-gold to-transparent" />
            </div>

            <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6">
              <span className="text-gradient">Koleksi Premium</span>
            </h1>
            <p className="text-cream/70 text-lg md:text-xl max-w-2xl mx-auto font-light">
              Temukan perhiasan emas eksklusif yang dirancang khusus untuk Anda
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="relative py-8 border-y border-gold/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category)}
                className={`px-8 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-gold text-dark shadow-lg shadow-gold/20"
                    : "bg-dark-lighter text-cream border border-gold/20 hover:border-gold/50"
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="perspective-container"
              >
                <Link href={`/produk/${product.id}`}>
                  <div className="group relative bg-dark-lighter rounded-2xl overflow-hidden border border-gold/10 hover:border-gold/30 transition-all duration-500 cursor-pointer luxury-glow flex flex-col h-full">
                    {/* Image */}
                    <div className="relative h-[400px] overflow-hidden shrink-0">
                      <motion.img
                        whileHover={{ scale: 1.15 }}
                        transition={{ duration: 0.6 }}
                        src={product.images?.[0] || product.image}
                        alt={product.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-dark via-dark/50 to-transparent opacity-60" />

                      {/* Shimmer effect */}
                      <motion.div
                        initial={{ x: "-100%" }}
                        whileHover={{ x: "100%" }}
                        transition={{ duration: 0.8 }}
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-gold/20 to-transparent"
                      />

                      {/* Hover overlay */}
                      <div className="absolute inset-0 bg-gold/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                      {/* Category badge */}
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        className="absolute top-4 left-4 px-4 py-2 bg-dark/80 backdrop-blur-sm rounded-full border border-gold/30"
                      >
                        <span className="text-gold text-sm font-medium">
                          {product.category}
                        </span>
                      </motion.div>
                    </div>

                    {/* Content */}
                    <div className="p-6 flex flex-col flex-1">
                      <h3 className="text-xl font-serif font-bold text-cream mb-2 group-hover:text-gold transition-colors">
                        {product.name}
                      </h3>
                      <p className="text-cream/60 text-sm mb-4 line-clamp-2 flex-1">
                        {product.description}
                      </p>

                      <div className="flex items-center justify-between mt-auto">
                        <span className="text-gold text-lg font-semibold">
                          {product.price}
                        </span>
                        <motion.div
                          whileHover={{ x: 5 }}
                          className="text-cream/70 text-sm flex items-center gap-2"
                        >
                          Lihat Detail
                          <span>→</span>
                        </motion.div>
                      </div>
                    </div>

                    {/* Decorative corners */}
                    <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-gold/20 group-hover:border-gold/50 transition-colors" />
                    <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-gold/20 group-hover:border-gold/50 transition-colors" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
