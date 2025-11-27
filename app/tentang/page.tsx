"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Leaf, Heart, Award, Sparkles, Users, Shield } from "lucide-react";

export default function TentangPage() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 150]);
  const y2 = useTransform(scrollY, [0, 500], [0, -100]);

  return (
    <main className="min-h-screen bg-dark relative overflow-hidden">
      <Navbar />

      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{
            y: [0, -50, 0],
            x: [0, 30, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            y: [0, 40, 0],
            x: [0, -25, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-1/3 left-0 w-80 h-80 bg-gold-light/5 rounded-full blur-3xl"
        />
      </div>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="grain-overlay" />

        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-linear-to-br from-dark via-green-dark/20 to-dark" />
          <motion.div
            style={{ y: y1 }}
            className="absolute top-20 right-20 w-96 h-96 bg-gold/10 rounded-full blur-3xl animate-glow"
          />

          {/* Luxury Ornamental Elements */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            className="absolute top-40 left-20 w-32 h-32 border-2 border-gold/20"
            style={{ borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%" }}
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-40 right-32 w-24 h-24 border border-gold/10"
            style={{ borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%" }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 text-center">
          {/* Luxury Emblem */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mb-8 flex justify-center"
          >
            <div className="relative">
              {/* Outer ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 w-32 h-32 rounded-full border-2 border-gold/30"
                style={{
                  transform: "translate(-50%, -50%)",
                  left: "50%",
                  top: "50%",
                }}
              />
              {/* Inner emblem */}
              <div className="relative w-32 h-32 rounded-full bg-gradient-to-br from-gold/20 via-gold/5 to-transparent border border-gold/40 backdrop-blur-sm flex items-center justify-center overflow-hidden">
                <motion.img
                  src="/logo.png"
                  alt="Dahayu Logo"
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="w-20 h-20 object-contain"
                />
              </div>
              {/* Decorative corners */}
              <div className="absolute -top-2 -left-2 w-3 h-3 border-t-2 border-l-2 border-gold/60" />
              <div className="absolute -top-2 -right-2 w-3 h-3 border-t-2 border-r-2 border-gold/60" />
              <div className="absolute -bottom-2 -left-2 w-3 h-3 border-b-2 border-l-2 border-gold/60" />
              <div className="absolute -bottom-2 -right-2 w-3 h-3 border-b-2 border-r-2 border-gold/60" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <motion.div
                className="w-16 h-px bg-linear-to-r from-transparent via-gold to-transparent"
                animate={{ scaleX: [0.8, 1, 0.8] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles className="w-6 h-6 text-gold" />
              </motion.div>
              <motion.div
                className="w-16 h-px bg-linear-to-r from-transparent via-gold to-transparent"
                animate={{ scaleX: [0.8, 1, 0.8] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
              />
            </div>

            <h1 className="text-5xl md:text-7xl font-serif font-light mb-6">
              <span className="text-gradient">Tentang Dahayu</span>
            </h1>
            <p className="text-cream/70 text-lg md:text-xl max-w-3xl mx-auto font-light leading-relaxed">
              Warisan keindahan Bali dalam setiap karya emas yang kami ciptakan
              dengan penuh dedikasi dan keahlian tradisional
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="relative py-20">
        {/* Decorative side ornaments */}
        <motion.div
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 opacity-20"
        >
          <div className="w-1 h-32 bg-gradient-to-b from-transparent via-gold to-transparent" />
        </motion.div>
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 opacity-20"
        >
          <div className="w-1 h-32 bg-gradient-to-b from-transparent via-gold to-transparent" />
        </motion.div>

        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative perspective-container"
            >
              {/* Decorative frame corners */}
              <div className="absolute -top-4 -left-4 w-16 h-16 border-t-2 border-l-2 border-gold/40 z-10" />
              <div className="absolute -top-4 -right-4 w-16 h-16 border-t-2 border-r-2 border-gold/40 z-10" />
              <div className="absolute -bottom-4 -left-4 w-16 h-16 border-b-2 border-l-2 border-gold/40 z-10" />
              <div className="absolute -bottom-4 -right-4 w-16 h-16 border-b-2 border-r-2 border-gold/40 z-10" />

              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.5 }}
                className="relative rounded-2xl overflow-hidden luxury-glow"
              >
                <motion.img
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.7 }}
                  src="/anniv.jpg"
                  alt="Handcrafted Gold Jewelry"
                  className="w-full h-[600px] object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-dark via-dark/20 to-transparent" />

                {/* Golden shimmer overlay */}
                <motion.div
                  animate={{
                    x: ["-100%", "100%"],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatDelay: 2,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 w-1/3 bg-gradient-to-r from-transparent via-gold/20 to-transparent skew-x-12"
                />
              </motion.div>

              {/* Floating card */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -bottom-10 -right-10 bg-gold p-8 rounded-2xl shadow-2xl max-w-xs luxury-glow"
              >
                <div className="text-dark text-4xl font-light mb-2">5+</div>
                <div className="text-dark/80 font-medium">Tahun Pengalaman</div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              {/* Section ornament */}
              <div className="flex items-center gap-4 mb-8">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="w-8 h-8 border border-gold/40"
                  style={{ borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%" }}
                />
                <div className="h-px flex-1 bg-gradient-to-r from-gold/40 to-transparent" />
              </div>

              <h2 className="text-4xl md:text-5xl font-serif font-light text-gradient relative">
                Cerita Kami
                {/* Decorative accent */}
                <motion.div
                  animate={{ scaleX: [0, 1] }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="absolute -bottom-2 left-0 w-20 h-1 bg-gradient-to-r from-gold to-transparent"
                />
              </h2>

              <div className="space-y-4 text-cream/70 text-lg leading-relaxed">
                <p>
                  Dahayu lahir dari keyakinan bahwa setiap perempuan memiliki
                  energi yang tak tergantikan yaitu kekuatan lembut yang tumbuh
                  dari keinginan untuk mengenal dan mencintai diri sendiri.
                </p>
                <p>
                  Setiap karya Dahayu bukan sekadar hiasan, melainkan jejak
                  kecil dari momen ketika seorang perempuan berani kembali pada
                  dirinya sendiri; pada keindahan yang alami, tenang, dan penuh
                  makna.
                </p>
                <p>
                  Dengan sentuhan pengrajin yang peka pada setiap detail, Dahayu
                  menghadirkan karya yang memadukan keinginan, keindahan, dan
                  makna hidup. Di sinilah seni dan energi bertemu dengan
                  keindahan batin perempuan modern.
                </p>
                <p className="italic text-gold/80">
                  Dahayu Jewelry — Jewelry with a Soul.
                  <br />
                  Where Desire Meets Creation.
                </p>
              </div>

              <div className="flex gap-4 pt-4">
                <motion.div
                  className="text-center"
                  whileHover={{ scale: 1.1, y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="text-3xl font-light text-gold mb-1">925</div>
                  <div className="text-cream/60 text-sm">Perak</div>
                </motion.div>
                <div className="w-px bg-gold/20" />
                <motion.div
                  className="text-center"
                  whileHover={{ scale: 1.1, y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="text-3xl font-light text-gold mb-1">
                    Emas 18K
                  </div>
                  <div className="text-cream/60 text-sm">Kualitas Premium</div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="relative py-20">
        {/* Luxury background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, #c6a664 1px, transparent 0)`,
              backgroundSize: "40px 40px",
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            {/* Ornamental header */}
            <div className="flex items-center justify-center gap-6 mb-8">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              >
                <div className="w-12 h-12 border-2 border-gold/30 transform rotate-45" />
              </motion.div>
              <div className="relative">
                <div className="w-2 h-2 bg-gold rounded-full" />
                <motion.div
                  animate={{ scale: [1, 1.5, 1], opacity: [1, 0, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute inset-0 w-2 h-2 bg-gold rounded-full"
                />
              </div>
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              >
                <div className="w-12 h-12 border-2 border-gold/30 transform rotate-45" />
              </motion.div>
            </div>

            <h2 className="text-4xl md:text-5xl font-serif font-light text-gradient mb-6">
              Filosofi Dahayu
            </h2>
            <p className="text-cream/70 text-lg max-w-3xl mx-auto leading-relaxed">
              Tiga napas yang menjiwai setiap karya kami.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="relative"
            >
              <div className="bg-linear-to-br from-gold/10 to-transparent p-10 rounded-3xl border border-gold/20 h-full luxury-glow perspective-container">
                <motion.div
                  className="w-20 h-20 bg-gold/20 rounded-full flex items-center justify-center mb-6 mx-auto border-2 border-gold/40"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <span className="text-4xl font-serif font-light text-gold">
                    1
                  </span>
                </motion.div>
                <h3 className="text-2xl font-serif font-light text-cream mb-4 text-center">
                  Keindahan yang Berasal dari Ketulusan
                </h3>
                <p className="text-cream/70 leading-relaxed text-center">
                  Setiap karya Dahayu dimulai dari niat yang jujur niat untuk
                  menghadirkan makna, bukan sekadar kemewahan. Bagi kami,
                  keindahan sejati lahir dari ketulusan: dari proses yang sabar,
                  bahan yang terpilih dengan hati, dan dari tangan pengrajin
                  yang bekerja dalam keheningan, menyalurkan cinta ke setiap
                  detail.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="relative"
            >
              <div className="bg-linear-to-br from-gold/10 to-transparent p-10 rounded-3xl border border-gold/20 h-full luxury-glow perspective-container">
                <motion.div
                  className="w-20 h-20 bg-gold/20 rounded-full flex items-center justify-center mb-6 mx-auto border-2 border-gold/40"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <span className="text-4xl font-serif font-light text-gold">
                    2
                  </span>
                </motion.div>
                <h3 className="text-2xl font-serif font-light text-cream mb-4 text-center">
                  Cinta yang Menghidupkan Karya
                </h3>
                <p className="text-cream/70 leading-relaxed text-center">
                  Kami percaya bahwa setiap perhiasan memiliki energi. Saat
                  dibuat dengan kasih, ia memancarkan kekuatan lembut yang dapat
                  dirasakan pemakainya. Cinta itu mengalir dalam setiap lekuk
                  desain dari inspirasi alam, filosofi kehidupan, hingga makna
                  yang mengingatkan perempuan untuk kembali pada dirinya
                  sendiri: anggun, kuat, dan penuh cahaya.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="relative"
            >
              <div className="bg-linear-to-br from-gold/10 to-transparent p-10 rounded-3xl border border-gold/20 h-full luxury-glow perspective-container">
                <motion.div
                  className="w-20 h-20 bg-gold/20 rounded-full flex items-center justify-center mb-6 mx-auto border-2 border-gold/40"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <span className="text-4xl font-serif font-light text-gold">
                    3
                  </span>
                </motion.div>
                <h3 className="text-2xl font-serif font-light text-cream mb-4 text-center">
                  Warisan Makna, Bukan Sekadar Benda
                </h3>
                <p className="text-cream/70 leading-relaxed text-center">
                  Dahayu tidak menciptakan perhiasan untuk masa kini saja,
                  tetapi untuk diwariskan bukan hanya sebagai benda, melainkan
                  sebagai cerita. Cerita tentang cinta, perjuangan, dan
                  perjalanan diri seorang perempuan. Karena kami percaya, setiap
                  karya Dahayu membawa doa dan makna yang akan tetap hidup dari
                  satu generasi ke generasi berikutnya.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Founders Quote */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            className="mt-16 relative"
          >
            <div className="max-w-4xl mx-auto bg-dark-lighter p-12 rounded-3xl border border-gold/20 relative overflow-hidden luxury-glow perspective-container">
              <motion.div
                className="absolute top-0 left-0 w-32 h-32 bg-gold/5 rounded-full blur-3xl"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 4, repeat: Infinity }}
              />
              <motion.div
                className="absolute bottom-0 right-0 w-32 h-32 bg-gold/5 rounded-full blur-3xl"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 4, repeat: Infinity, delay: 2 }}
              />

              <div className="relative z-10">
                <motion.div
                  className="text-gold text-6xl font-serif mb-6 text-center opacity-50"
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 6, repeat: Infinity }}
                >
                  "
                </motion.div>
                <h3 className="text-2xl font-serif font-light text-gold mb-6 text-center">
                  Kata Para Pendiri Dahayu
                </h3>
                <p className="text-cream/90 text-xl md:text-2xl font-light text-center leading-relaxed mb-8 italic">
                  Kami memulai dengan satu impian sederhana: menciptakan
                  perhiasan yang tidak hanya indah, tapi juga menghidupkan
                  makna. Bagi kami, setiap pelanggan adalah bagian dari keluarga
                  besar Dahayu. Kepercayaan Anda adalah cahaya yang menuntun
                  kami untuk terus berkarya dengan hati.
                </p>
                <div className="text-center">
                  <div className="text-gold font-normal text-lg mb-1">
                    Ibu Dewa Ayu, Ibu Indah & Ibu Mely
                  </div>
                  <div className="text-cream/60">Pendiri Dahayu Jewelry</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="relative py-20 bg-dark-lighter overflow-hidden">
        {/* Elegant corner ornaments */}
        <div className="absolute top-0 left-0 w-64 h-64 border-l-2 border-t-2 border-gold/10 opacity-50" />
        <div className="absolute top-0 right-0 w-64 h-64 border-r-2 border-t-2 border-gold/10 opacity-50" />
        <div className="absolute bottom-0 left-0 w-64 h-64 border-l-2 border-b-2 border-gold/10 opacity-50" />
        <div className="absolute bottom-0 right-0 w-64 h-64 border-r-2 border-b-2 border-gold/10 opacity-50" />

        {/* Floating particles */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              delay: i * 0.5,
            }}
            className="absolute w-1 h-1 bg-gold rounded-full"
            style={{
              left: `${10 + i * 12}%`,
              top: `${20 + (i % 3) * 30}%`,
            }}
          />
        ))}

        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            {/* Luxury star emblem */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
              className="inline-block mb-6"
            >
              <div className="text-gold text-5xl">✦</div>
            </motion.div>

            <h2 className="text-4xl md:text-5xl font-serif font-light text-gradient mb-6">
              Nilai-Nilai Kami
            </h2>
            <p className="text-cream/70 text-lg max-w-3xl mx-auto leading-relaxed">
              Empat prinsip yang menuntun setiap ciptaan Dahayu.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
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
                icon: Award,
                title: "✨ Kualitas yang Dirasakan",
                description:
                  "Kami menjaga standar tertinggi di setiap detail, dari desain hingga hasil akhir yang nyaman dan anggun dikenakan. Bagi Dahayu, kualitas bukan hanya tentang tampilan, tetapi tentang perasaan yang ditinggalkan saat seseorang mengenakannya.",
              },
              {
                icon: Sparkles,
                title: "🌸 Desain yang Bermakna",
                description:
                  "Setiap desain Dahayu terinspirasi dari keindahan alam dan filosofi kehidupan. Unik, berkarakter, dan penuh cerita diciptakan untuk mengingatkan setiap perempuan bahwa keindahan sejati selalu tumbuh dari dalam diri.",
              },
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-dark p-8 rounded-2xl border border-gold/10 hover:border-gold/30 transition-all luxury-glow"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <value.icon className="w-12 h-12 text-gold mb-4" />
                </motion.div>
                <h3 className="text-xl font-serif font-light text-cream mb-3">
                  {value.title}
                </h3>
                <p className="text-cream/70 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-light text-gradient mb-6">
              Proses Pembuatan
            </h2>
            <p className="text-cream/70 text-lg max-w-3xl mx-auto leading-relaxed">
              Dari niat dan tangan, lahirlah karya yang bermakna.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Desain & Konsep",
                description:
                  "Setiap perhiasan Dahayu berawal dari intuisi dan filosofi. Kami menggambar setiap lekuk dengan penuh kesadaran, terinspirasi oleh bentuk-bentuk alam yang melambangkan kekuatan dan kelembutan. Bukan sekadar desain, tetapi ungkapan rasa dan keindahan yang hidup dalam setiap detail.",
                image: "/proses-pembuatan/1.png",
              },
              {
                step: "02",
                title: "Pengerjaan oleh Pengrajin Ahli",
                description:
                  "Dari sketsa menjadi wujud nyata, setiap detail dibentuk oleh tangan pengrajin berpengalaman. Mereka bekerja dengan ketenangan dan presisi, memadukan teknik tradisional dan sentuhan modern. Dalam setiap pukulan kecil, tersimpan rasa hormat terhadap alam dan nilai luhur warisan budaya.",
                image: "/proses-pembuatan/2.png",
              },
              {
                step: "03",
                title: "Penyempurnaan Akhir",
                description:
                  "Tahap terakhir adalah perwujudan dari ketelitian dan cinta terhadap hasil terbaik. Setiap karya melalui proses finishing dan quality control yang cermat, hingga tercipta perhiasan yang halus, nyaman dikenakan, dan memancarkan keanggunan alami dari setiap sisi.",
                image: "/proses-pembuatan/3.png",
              },
            ].map((process, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -10 }}
                className="group relative"
              >
                <div className="relative rounded-2xl overflow-hidden mb-6 perspective-container luxury-glow">
                  <motion.img
                    src={process.image}
                    alt={process.title}
                    className="w-full h-80 object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.7 }}
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-dark via-dark/50 to-transparent" />

                  <motion.div
                    className="absolute top-6 left-6 w-16 h-16 bg-gold rounded-full flex items-center justify-center"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <span className="text-dark text-xl font-light">
                      {process.step}
                    </span>
                  </motion.div>
                </div>

                <h3 className="text-2xl font-serif font-light text-cream mb-3">
                  {process.title}
                </h3>
                <p className="text-cream/70 leading-relaxed">
                  {process.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="relative py-20 bg-dark-lighter overflow-hidden">
        {/* Radial gradient overlay */}
        <div className="absolute inset-0 bg-gradient-radial from-gold/5 via-transparent to-transparent" />

        {/* Geometric luxury pattern */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-5"
        >
          <div
            className="absolute inset-0 border-2 border-gold"
            style={{ borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%" }}
          />
          <div
            className="absolute inset-8 border border-gold"
            style={{ borderRadius: "70% 30% 30% 70% / 70% 70% 30% 30%" }}
          />
        </motion.div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            {/* Luxury divider */}
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="w-24 h-px bg-gradient-to-r from-transparent to-gold" />
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                className="text-gold text-3xl"
              >
                ✦
              </motion.div>
              <div className="w-24 h-px bg-gradient-to-l from-transparent to-gold" />
            </div>

            <h2 className="text-4xl md:text-5xl font-serif font-light text-gradient mb-6">
              Mengapa Memilih Dahayu
            </h2>
            <p className="text-cream/70 text-lg max-w-3xl mx-auto leading-relaxed">
              Karena setiap karya kami dibuat dengan hati, dan ditujukan untuk
              menyentuh hati Anda.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "🛡️ Jaminan Keaslian & Perawatan",
                description:
                  "Setiap karya Dahayu dibuat dari bahan berkualitas tinggi dan melalui proses yang penuh ketelitian. Kami menjamin keaslian serta standar terbaik di setiap produk, dan menyediakan layanan perawatan agar perhiasan Anda selalu terjaga keindahannya seiring waktu.",
              },
              {
                icon: Users,
                title: "💬 Konsultasi dengan Hati",
                description:
                  "Kami percaya bahwa setiap perempuan memiliki makna dan gaya yang berbeda. Tim kami siap membantu Anda menemukan perhiasan yang paling sesuai yang tidak hanya memperindah tampilan, tetapi juga menumbuhkan rasa percaya diri dan ketenangan.",
              },
              {
                icon: Sparkles,
                title: "🌸 Makna yang Menemani",
                description:
                  "Setiap karya Dahayu diciptakan tidak sekadar untuk dikenakan. Kehadirannya menjadi pengingat bahwa keindahan sesungguhnya berasal dari dalam diri, dan setiap perjalanan perempuan pantas dihormati serta dirayakan.",
              },
            ].map((reason, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.05 }}
                className="text-center p-8"
              >
                <motion.div
                  className="inline-flex items-center justify-center w-20 h-20 bg-gold/10 rounded-full mb-6 border-2 border-gold/30"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <reason.icon className="w-10 h-10 text-gold" />
                </motion.div>
                <h3 className="text-xl font-serif font-light text-cream mb-3">
                  {reason.title}
                </h3>
                <p className="text-cream/70">{reason.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
