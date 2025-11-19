"use client";

import { motion } from "framer-motion";
import { useParams, useRouter } from "next/navigation";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { ShoppingBag, Share2, Heart, ArrowLeft, Check } from "lucide-react";
import { useState } from "react";
import { products } from "../../data/products";

export default function ProductDetailPage() {
  const params = useParams();
  const router = useRouter();
  const [selectedImage, setSelectedImage] = useState(0);
  const [liked, setLiked] = useState(false);

  const product = products.find((p) => p.id === parseInt(params.id as string));

  if (!product) {
    return (
      <div className="min-h-screen bg-dark flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl text-cream mb-4">Produk tidak ditemukan</h1>
          <button
            onClick={() => router.push("/koleksi")}
            className="text-gold hover:underline"
          >
            Kembali ke Koleksi
          </button>
        </div>
      </div>
    );
  }

  const handleWhatsAppOrder = () => {
    const message =
      `Halo, saya tertarik dengan produk:\n\n` +
      `Nama: ${product.name}\n` +
      `Harga: ${product.price}\n` +
      `Material: ${product.material}\n` +
      `Berat: ${product.weight}\n\n` +
      `Mohon informasi lebih lanjut.`;

    const phoneNumber = "6281234567890"; // Replace with actual WhatsApp number
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <main className="min-h-screen bg-dark relative overflow-hidden">
      <Navbar />

      {/* Animated Background */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{
            y: [0, -30, 0],
            x: [0, 20, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            y: [0, 40, 0],
            x: [0, -30, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-1/4 left-0 w-80 h-80 bg-gold-light/5 rounded-full blur-3xl"
        />
      </div>

      {/* Back Button */}
      <div className="pt-32 pb-8 max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          whileHover={{ x: -5 }}
          onClick={() => router.push("/koleksi")}
          className="flex items-center gap-2 text-cream/70 hover:text-gold transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          Kembali ke Koleksi
        </motion.button>
      </div>

      {/* Product Detail */}
      <section className="relative pb-20 z-10">
        <div className="grain-overlay" />

        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Image Gallery */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Main Image */}
              <div className="relative mb-6 rounded-2xl overflow-hidden border border-gold/20 luxury-glow group">
                <motion.img
                  key={selectedImage}
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  src={product.images?.[selectedImage] || product.image}
                  alt={product.name}
                  className="w-full h-[600px] object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Favorite Button */}
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setLiked(!liked)}
                  className="absolute top-6 right-6 w-12 h-12 bg-dark/80 backdrop-blur-sm rounded-full border border-gold/30 flex items-center justify-center"
                >
                  <Heart
                    className={`w-6 h-6 ${
                      liked ? "fill-gold text-gold" : "text-cream"
                    }`}
                  />
                </motion.button>
              </div>

              {/* Thumbnail Gallery */}
              <div className="grid grid-cols-3 gap-4">
                {product.images?.map((image, index) => (
                  <motion.button
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    onClick={() => setSelectedImage(index)}
                    className={`relative rounded-xl overflow-hidden border-2 transition-all ${
                      selectedImage === index ? "border-gold" : "border-gold/20"
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${product.name} ${index + 1}`}
                      className="w-full h-32 object-cover"
                    />
                  </motion.button>
                ))}
              </div>
            </motion.div>

            {/* Product Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div>
                <span className="inline-block px-4 py-2 bg-gold/10 border border-gold/30 rounded-full text-gold text-sm mb-4">
                  {product.category}
                </span>
                <h1 className="text-4xl md:text-5xl font-serif font-bold text-gradient mb-4">
                  {product.name}
                </h1>
                <p className="text-cream/70 text-lg leading-relaxed">
                  {product.description}
                </p>
              </div>

              {/* Price */}
              <div className="py-6 border-y border-gold/20">
                <div className="text-3xl font-bold text-gold">
                  {product.price}
                </div>
                <p className="text-cream/60 text-sm mt-2">
                  Harga sudah termasuk pajak
                </p>
              </div>

              {/* Specifications */}
              <div className="space-y-3">
                <h3 className="text-xl font-serif font-bold text-cream">
                  Spesifikasi
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-dark-lighter p-4 rounded-xl border border-gold/10">
                    <div className="text-cream/60 text-sm mb-1">Material</div>
                    <div className="text-cream font-semibold">
                      {product.material}
                    </div>
                  </div>
                  <div className="bg-dark-lighter p-4 rounded-xl border border-gold/10">
                    <div className="text-cream/60 text-sm mb-1">Berat</div>
                    <div className="text-cream font-semibold">
                      {product.weight}
                    </div>
                  </div>
                  <div className="bg-dark-lighter p-4 rounded-xl border border-gold/10 col-span-2">
                    <div className="text-cream/60 text-sm mb-1">Dimensi</div>
                    <div className="text-cream font-semibold">
                      {product.dimensions}
                    </div>
                  </div>
                </div>
              </div>

              {/* Features */}
              <div className="space-y-3">
                <h3 className="text-xl font-serif font-bold text-cream">
                  Keunggulan
                </h3>
                <ul className="space-y-2">
                  {product.features?.map((feature, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <Check className="w-5 h-5 text-gold mt-0.5 shrink-0" />
                      <span className="text-cream/80">{feature}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* CTA Buttons */}
              <div className="flex gap-4 pt-6">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleWhatsAppOrder}
                  className="flex-1 bg-gold text-dark px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center gap-3 hover:bg-gold-light transition-colors shadow-lg shadow-gold/20"
                >
                  <ShoppingBag className="w-6 h-6" />
                  Beli via WhatsApp
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-14 h-14 bg-dark-lighter border border-gold/30 rounded-full flex items-center justify-center hover:border-gold transition-colors"
                >
                  <Share2 className="w-6 h-6 text-gold" />
                </motion.button>
              </div>

              {/* Story */}
              <div className="bg-linear-to-br from-gold/5 to-transparent p-6 rounded-2xl border border-gold/10">
                <h3 className="text-xl font-serif font-bold text-cream mb-3">
                  Cerita Produk
                </h3>
                <p className="text-cream/70 leading-relaxed">{product.story}</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
