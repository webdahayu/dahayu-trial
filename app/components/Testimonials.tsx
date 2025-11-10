"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Wijaya",
    location: "Jakarta",
    text: "Perhiasan dari Dahayu benar-benar istimewa. Desainnya unik dan kualitas emasnya luar biasa. Saya selalu mendapat pujian setiap memakainya.",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80",
  },
  {
    id: 2,
    name: "Diana Putri",
    location: "Bali",
    text: "Sebagai orang Bali, saya bangga dengan karya Dahayu yang mempertahankan nilai seni dan budaya kami. Sungguh memukau!",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80",
  },
  {
    id: 3,
    name: "Amanda Chen",
    location: "Surabaya",
    text: "Kualitas premium dengan sentuhan personal. Cincin pernikahan kami dari Dahayu menjadi simbol cinta yang abadi.",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&q=80",
  },
];

export default function Testimonials() {
  return (
    <section className="relative py-32 px-4 md:px-8 lg:px-16 bg-dark-lighter overflow-hidden">
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

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-20 h-px bg-gold/50" />
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="w-2 h-2 bg-gold transform rotate-45"
            />
            <div className="w-20 h-px bg-gold/50" />
          </div>

          <h2 className="text-gold text-sm md:text-base font-light tracking-[0.3em] mb-6 font-sans uppercase">
            Testimoni
          </h2>

          <h3 className="text-5xl md:text-6xl font-serif font-bold mb-6">
            <span className="block text-gradient">Cerita</span>
            <span className="block text-cream">Pelanggan Kami</span>
          </h3>

          <p className="text-cream/60 text-lg max-w-2xl mx-auto font-sans">
            Kepercayaan dan kepuasan pelanggan adalah{" "}
            <span className="text-gold">kebanggaan kami</span>
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative p-8 glass-effect rounded-3xl hover:bg-gold/5 transition-all duration-500 luxury-glow perspective-container"
            >
              {/* Quote Icon */}
              <motion.div
                className="absolute top-6 right-6"
                whileHover={{ rotate: 180, scale: 1.2 }}
                transition={{ duration: 0.5 }}
              >
                <Quote className="w-12 h-12 text-gold/20 group-hover:text-gold/40 transition-colors duration-300" />
              </motion.div>

              {/* Rating */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.4 }}
                  >
                    <Star className="w-5 h-5 fill-gold text-gold" />
                  </motion.div>
                ))}
              </div>

              {/* Text */}
              <p className="text-cream/80 text-base leading-relaxed mb-8 font-sans relative z-10">
                &ldquo;{testimonial.text}&rdquo;
              </p>

              {/* Customer Info */}
              <div className="flex items-center gap-4 pt-6 border-t border-gold/10">
                <motion.img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-gold/30"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                />
                <div>
                  <h4 className="font-serif font-semibold text-cream text-lg">
                    {testimonial.name}
                  </h4>
                  <p className="text-cream/50 text-sm font-sans">
                    {testimonial.location}
                  </p>
                </div>
              </div>

              {/* Decorative corner */}
              <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-gold/20 rounded-tl-3xl group-hover:border-gold/50 transition-colors duration-500" />
            </motion.div>
          ))}
        </div>

        {/* Trust Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
        >
          {[
            { value: "500+", label: "Pelanggan Setia" },
            { value: "15+", label: "Tahun Pengalaman" },
            { value: "100%", label: "Emas Murni" },
            { value: "24K", label: "Kualitas Terjamin" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.05 }}
              className="p-6 glass-effect rounded-2xl luxury-glow"
            >
              <h4 className="text-5xl font-serif font-bold text-gradient mb-2">
                {stat.value}
              </h4>
              <p className="text-cream/60 font-sans text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
