"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Leaf, Heart, Sparkles, Award } from "lucide-react";
import { useRef } from "react";

export default function About() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  const values = [
    {
      icon: Leaf,
      title: "🌿 Keaslian yang Bernilai",
      description:
        "Kami hanya menggunakan bahan berkualitas tinggi dan proses yang transparan. Namun bagi kami, keaslian sejati bukan sekadar sertifikat, melainkan ketulusan dalam menciptakan karya yang lahir dari hati.",
    },
    {
      icon: Heart,
      title: "💛 Keahlian dengan Jiwa",
      description:
        "Setiap perhiasan dikerjakan oleh pengrajin berpengalaman, dengan ketenangan dan presisi yang diwariskan dari generasi ke generasi. Bagi mereka, mencipta adalah bentuk meditasi sebuah seni yang dijalani dengan rasa.",
    },
    {
      icon: Sparkles,
      title: "✨ Kualitas yang Dirasakan",
      description:
        "Kami menjaga standar tertinggi di setiap detail, dari desain hingga hasil akhir yang nyaman dan anggun dikenakan. Bagi Dahayu, kualitas bukan hanya tentang tampilan, tetapi tentang perasaan yang ditinggalkan saat seseorang mengenakannya.",
    },
    {
      icon: Award,
      title: "🌸 Desain yang Bermakna",
      description:
        "Setiap desain Dahayu terinspirasi dari keindahan alam dan filosofi kehidupan. Unik, berkarakter, dan penuh cerita diciptakan untuk mengingatkan setiap perempuan bahwa keindahan sejati selalu tumbuh dari dalam diri.",
    },
  ];

  return (
    <section
      ref={containerRef}
      id="tentang"
      className="relative py-32 px-4 md:px-8 lg:px-16 bg-dark overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          style={{ y }}
          animate={{ x: [0, 30, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-gold/5 rounded-full blur-3xl"
        />
        <motion.div
          className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-gold-light/5 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: Image */}
          <motion.div
            style={{ opacity }}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Main Image */}
            <div className="relative h-[600px] lg:h-[700px]">
              {/* Decorative frame */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="absolute -top-6 -left-6 w-full h-full border-2 border-gold/30 rounded-[40px]"
              />

              <div className="relative h-full rounded-[40px] overflow-hidden border border-gold/20 luxury-glow perspective-container">
                <motion.img
                  src="/anniv.jpg"
                  alt="Handcrafted Gold Jewelry"
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.7 }}
                />
                <div className="absolute inset-0 bg-linear-to-t from-dark via-dark/20 to-transparent" />

                {/* Floating stats card */}
                <motion.div
                  initial={{ opacity: 0, y: 20, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  whileHover={{ y: -5 }}
                  className="absolute bottom-8 left-8 right-8"
                >
                  <div className="glass-effect p-6 rounded-2xl luxury-glow">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <p className="text-gold text-4xl font-serif font-light">
                          5+
                        </p>
                        <p className="text-cream/60 text-sm font-sans">
                          Tahun Pengalaman
                        </p>
                      </div>
                      <div>
                        <p className="text-gold text-4xl font-serif font-light">
                          Emas 18K
                        </p>
                        <p className="text-cream/60 text-sm font-sans">
                          Kualitas Premium
                        </p>
                      </div>
                    </div>
                    <div className="h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent mb-4" />
                    <p className="text-cream/80 text-sm font-sans italic text-center">
                      "Makna yang dikenakan, cerita yang diwariskan."
                    </p>
                  </div>
                </motion.div>
              </div>

              {/* Decorative elements */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute -top-8 -right-8 w-32 h-32 border-2 border-gold/20 rounded-full"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute -bottom-8 -left-8 w-24 h-24 border-2 border-gold-light/20"
              />
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:pl-8"
          >
            {/* Section Label */}
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-px bg-gold" />
              <span className="text-gold text-sm font-light tracking-[0.3em] uppercase font-sans">
                Tentang Dahayu
              </span>
            </div>

            <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif font-light mb-8 leading-[1.1]">
              <span className="block text-gradient">Jewelry with a Soul.</span>
              <span className="block text-cream mt-2">Where Desire Meets</span>
              <span className="block text-gradient mt-2">Creation</span>
            </h2>

            <div className="space-y-6 text-cream/70 text-lg leading-relaxed font-sans mb-12">
              <p>
                Dahayu lahir dari keyakinan bahwa setiap perempuan memiliki
                energi yang tak tergantikan kekuatan lembut yang tumbuh dari
                keinginan untuk mengenal dan mencintai diri sendiri. Melalui
                perhiasan, kami merayakan perjalanan itu.
              </p>
              <p>
                Setiap karya Dahayu bukan sekadar hiasan, melainkan{" "}
                <span className="text-gold-light">
                  penanda momen ketika perempuan berani kembali pada dirinya
                </span>{" "}
                pada keindahan yang alami, tenang, dan penuh makna.
              </p>
              <p>
                Dibentuk oleh tangan pengrajin yang mengerti bahasa detail,
                Dahayu menghadirkan karya yang menyatukan keinginan, keindahan,
                dan makna kehidupan. Sebuah pertemuan antara seni, energi, dan
                keindahan batin perempuan modern.
              </p>
            </div>

            {/* Values Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="group p-6 glass-effect rounded-2xl hover:bg-gold/5 transition-all duration-500 luxury-glow"
                >
                  <div className="flex items-start gap-4">
                    <motion.div
                      className="shrink-0 w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors duration-300"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <value.icon className="w-6 h-6 text-gold" />
                    </motion.div>
                    <div>
                      <h4 className="text-lg font-serif font-normal text-cream mb-2 group-hover:text-gold transition-colors duration-300">
                        {value.title}
                      </h4>
                      <p className="text-cream/60 text-sm font-sans leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-12"
            >
              <motion.a
                href="/tentang"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-3 px-8 py-4 bg-gold text-dark font-normal rounded-full hover:bg-gold-light transition-all duration-300 luxury-glow"
              >
                <span>Lihat Cerita Kami</span>
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.div>
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
