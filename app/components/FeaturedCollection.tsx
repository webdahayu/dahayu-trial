"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Eye, ShoppingBag } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import { products as allProducts } from "../data/products";

// Get 6 featured products (sorted alphabetically, mix of categories)
const products = allProducts
  .slice()
  .sort((a, b) => a.name.localeCompare(b.name))
  .slice(0, 6);

function ProductCard({
  product,
  index,
}: {
  product: (typeof products)[0];
  index: number;
}) {
  const [isHovered, setIsHovered] = useState(false);
  const mouseXValue = useMotionValue(0);
  const mouseYValue = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseYValue, [-0.5, 0.5], [15, -15]));
  const rotateY = useSpring(useTransform(mouseXValue, [-0.5, 0.5], [-15, 15]));

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    mouseXValue.set(xPct);
    mouseYValue.set(yPct);
  }

  function handleMouseLeave() {
    mouseXValue.set(0);
    mouseYValue.set(0);
    setIsHovered(false);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.21, 0.45, 0.27, 0.9],
      }}
      className="group perspective-container"
    >
      <Link href={`/produk/${product.id}`}>
        <motion.div
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={handleMouseLeave}
          style={{
            rotateX,
            rotateY,
            transformStyle: "preserve-3d",
          }}
          className="relative bg-dark-lighter rounded-3xl overflow-hidden border border-gold/10 hover:border-gold/30 transition-all duration-500 cursor-pointer flex flex-col h-full"
        >
          {/* Image Container */}
          <div className="relative h-[400px] overflow-hidden shrink-0">
            <motion.img
              src={product.images?.[0] || ""}
              alt={product.name}
              className="w-full h-full object-cover"
              animate={{
                scale: isHovered ? 1.1 : 1,
              }}
              transition={{ duration: 0.6, ease: [0.21, 0.45, 0.27, 0.9] }}
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/50 to-transparent opacity-60" />

            {/* Floating number */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: isHovered ? 1 : 0 }}
              className="absolute top-6 right-6 w-16 h-16 rounded-full glass-effect flex items-center justify-center"
            >
              <span className="text-gold text-2xl font-serif font-bold">
                {index + 1}
              </span>
            </motion.div>

            {/* Hover Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: isHovered ? 1 : 0 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 bg-gradient-to-br from-gold/20 via-transparent to-gold-dark/20 backdrop-blur-sm flex items-center justify-center gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-14 h-14 rounded-full glass-effect flex items-center justify-center text-gold hover:bg-gold hover:text-dark transition-all duration-300"
              >
                <Eye size={20} />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-14 h-14 rounded-full glass-effect flex items-center justify-center text-gold hover:bg-gold hover:text-dark transition-all duration-300"
              >
                <ShoppingBag size={20} />
              </motion.button>
            </motion.div>

            {/* Category Badge */}
            <div className="absolute top-6 left-6">
              <div className="px-4 py-2 glass-effect rounded-full">
                <span className="text-gold text-xs font-medium tracking-wider uppercase">
                  {product.category}
                </span>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-8 flex flex-col flex-1">
            <motion.div
              animate={{
                y: isHovered ? -5 : 0,
              }}
              transition={{ duration: 0.3 }}
              className="flex flex-col h-full"
            >
              <h3 className="text-2xl md:text-3xl font-serif font-bold text-cream mb-2 group-hover:text-gold transition-colors duration-300">
                {product.name}
              </h3>
              <p className="text-cream/50 text-sm mb-4 font-sans line-clamp-2 flex-1">
                {product.description}
              </p>
              <div className="flex items-center justify-between mt-auto">
                <span className="text-gold-light text-xl font-semibold">
                  {product.price}
                </span>
                <motion.div
                  className="w-8 h-8"
                  animate={{ rotate: isHovered ? 45 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-full h-full border-2 border-gold/30 group-hover:border-gold transform rotate-45" />
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Decorative corner elements */}
          <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-gold/20 group-hover:border-gold/50 transition-colors duration-500" />
          <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-gold/20 group-hover:border-gold/50 transition-colors duration-500" />
        </motion.div>
      </Link>
    </motion.div>
  );
}

export default function FeaturedCollection() {
  return (
    <section
      id="koleksi"
      className="relative py-32 px-4 md:px-8 lg:px-16 bg-dark overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-gold/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-gold-light/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          {/* Decorative line */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="w-20 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="w-2 h-2 bg-gold transform rotate-45"
            />
            <div className="w-20 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
          </div>

          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-gold text-sm md:text-base font-light tracking-[0.3em] mb-6 font-sans uppercase"
          >
            Koleksi Eksklusif
          </motion.h2>

          <h3 className="text-5xl md:text-7xl font-serif font-bold mb-8">
            <span className="block text-gradient">Karya Seni yang</span>
            <span className="block text-cream mt-2">Menyatu dengan Alam</span>
          </h3>

          <p className="text-cream/60 text-lg max-w-3xl mx-auto font-sans leading-relaxed">
            Setiap perhiasan Dahayu terinspirasi dari keindahan bentuk alam
            <br className="hidden md:block" />
            dari pucuk daun, bunga, hingga butiran padi yang melambangkan
            kehidupan.
            <br className="hidden md:block" />
            Melalui sentuhan para pengrajin, bentuk-bentuk itu menjelma menjadi
            karya
            <br className="hidden md:block" />
            yang mengalirkan <span className="text-gold">energi lembut</span>,
            mengingatkan setiap perempuan
            <br className="hidden md:block" />
            akan kekuatan, keanggunan, dan kecantikan sejatinya.
          </p>
        </motion.div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mt-20"
        >
          <Link
            href="/koleksi"
            className="group inline-flex items-center gap-4 px-12 py-6 bg-transparent border-2 border-gold/30 text-gold font-semibold rounded-full hover:bg-gold hover:text-dark hover:border-gold transition-all duration-500 transform hover:scale-105"
          >
            <span className="tracking-wider">Lihat Semua Koleksi</span>
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-6 h-6 border-2 border-current transform rotate-45"
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
