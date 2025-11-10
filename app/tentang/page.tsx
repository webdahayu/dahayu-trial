"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
  Leaf,
  Heart,
  Award,
  Sparkles,
  Users,
  Shield,
  Clock,
} from "lucide-react";

export default function TentangPage() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 150]);
  const y2 = useTransform(scrollY, [0, 500], [0, -100]);

  return (
    <main className="min-h-screen bg-dark">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="grain-overlay" />

        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-linear-to-br from-dark via-green-dark/20 to-dark" />
          <motion.div
            style={{ y: y1 }}
            className="absolute top-20 right-20 w-96 h-96 bg-gold/10 rounded-full blur-3xl"
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
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80&auto=format&fit=crop"
                  alt="Handcrafted Gold Jewelry"
                  className="w-full h-[600px] object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-dark via-dark/20 to-transparent" />
              </div>

              {/* Floating card */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -bottom-10 -right-10 bg-gold p-8 rounded-2xl shadow-2xl max-w-xs"
              >
                <div className="text-dark text-4xl font-bold mb-2">27+</div>
                <div className="text-dark/80 font-medium">
                  Tahun Pengalaman (sejak 1998)
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-gradient">
                Cerita Kami
              </h2>

              <div className="space-y-4 text-cream/70 text-lg leading-relaxed">
                <p>
                  Dahayu Jewelry lahir dari mimpi dan tekad tiga ibu rumah
                  tangga luar biasa yang memiliki visi yang sama: menghadirkan
                  keindahan perhiasan emas Bali yang otentik ke seluruh dunia.
                  Dimulai dari ruang tamu kecil di Seminyak pada tahun 1998,
                  kami bertiga—Ibu Wayan, Ibu Made, dan Ibu Ketut—bersatu dengan
                  modal awal kepercayaan dan keahlian warisan keluarga dalam
                  mengolah emas.
                </p>
                <p>
                  Sebagai ibu rumah tangga, kami memahami nilai sebenarnya dari
                  perhiasan: bukan hanya tentang kemewahan, tetapi tentang
                  kenangan, warisan, dan cinta yang abadi. Setiap perhiasan yang
                  kami ciptakan adalah hasil dari perpaduan sempurna antara
                  teknik tradisional Bali yang telah diwariskan turun-temurun
                  dengan sentuhan desain kontemporer yang elegan.
                </p>
                <p>
                  Perjalanan kami tidak selalu mudah. Dari mengerjakan satu
                  perhiasan per minggu, hingga kini melayani ribuan pelanggan
                  dari berbagai belahan dunia, kami tetap memegang teguh prinsip
                  bahwa setiap karya harus dibuat dengan cinta, kesabaran, dan
                  dedikasi penuh—seperti kami merawat keluarga kami sendiri.
                </p>
              </div>

              <div className="flex gap-4 pt-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-gold mb-1">1000+</div>
                  <div className="text-cream/60 text-sm">Pelanggan Puas</div>
                </div>
                <div className="w-px bg-gold/20" />
                <div className="text-center">
                  <div className="text-3xl font-bold text-gold mb-1">500+</div>
                  <div className="text-cream/60 text-sm">Desain Eksklusif</div>
                </div>
                <div className="w-px bg-gold/20" />
                <div className="text-center">
                  <div className="text-3xl font-bold text-gold mb-1">100%</div>
                  <div className="text-cream/60 text-sm">Emas Asli</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gradient mb-6">
              Filosofi Dahayu
            </h2>
            <p className="text-cream/70 text-lg max-w-3xl mx-auto">
              Tiga prinsip yang menjadi landasan setiap karya kami
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="relative"
            >
              <div className="bg-linear-to-br from-gold/10 to-transparent p-10 rounded-3xl border border-gold/20 h-full">
                <div className="w-20 h-20 bg-gold/20 rounded-full flex items-center justify-center mb-6 mx-auto border-2 border-gold/40">
                  <span className="text-4xl font-serif font-bold text-gold">
                    1
                  </span>
                </div>
                <h3 className="text-2xl font-serif font-bold text-cream mb-4 text-center">
                  Kejujuran adalah Mahkota
                </h3>
                <p className="text-cream/70 leading-relaxed text-center">
                  Setiap gram emas yang kami gunakan adalah murni dan
                  tersertifikasi. Kami percaya bahwa kepercayaan pelanggan
                  adalah harta paling berharga, lebih dari emas itu sendiri.
                  Transparansi penuh tentang kualitas, harga, dan proses
                  pembuatan adalah komitmen kami kepada Anda.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="relative"
            >
              <div className="bg-linear-to-br from-gold/10 to-transparent p-10 rounded-3xl border border-gold/20 h-full">
                <div className="w-20 h-20 bg-gold/20 rounded-full flex items-center justify-center mb-6 mx-auto border-2 border-gold/40">
                  <span className="text-4xl font-serif font-bold text-gold">
                    2
                  </span>
                </div>
                <h3 className="text-2xl font-serif font-bold text-cream mb-4 text-center">
                  Kasih Sayang dalam Setiap Detil
                </h3>
                <p className="text-cream/70 leading-relaxed text-center">
                  Sebagai ibu, kami tahu pentingnya perhatian terhadap detail.
                  Setiap perhiasan dibuat dengan kesabaran dan kelembutan yang
                  sama seperti kami merawat keluarga. Tidak ada yang
                  terburu-buru, tidak ada yang diabaikan. Setiap lengkungan,
                  setiap kilau, dikerjakan dengan penuh cinta.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="relative"
            >
              <div className="bg-linear-to-br from-gold/10 to-transparent p-10 rounded-3xl border border-gold/20 h-full">
                <div className="w-20 h-20 bg-gold/20 rounded-full flex items-center justify-center mb-6 mx-auto border-2 border-gold/40">
                  <span className="text-4xl font-serif font-bold text-gold">
                    3
                  </span>
                </div>
                <h3 className="text-2xl font-serif font-bold text-cream mb-4 text-center">
                  Warisan untuk Generasi
                </h3>
                <p className="text-cream/70 leading-relaxed text-center">
                  Kami tidak hanya membuat perhiasan untuk hari ini, tetapi
                  untuk masa depan. Setiap karya dirancang untuk menjadi warisan
                  keluarga yang dapat diturunkan dari generasi ke generasi.
                  Kualitas yang abadi, desain yang timeless—itulah janji kami
                  untuk Anda dan keluarga Anda.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Founders Quote */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 relative"
          >
            <div className="max-w-4xl mx-auto bg-dark-lighter p-12 rounded-3xl border border-gold/20 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-32 h-32 bg-gold/5 rounded-full blur-3xl" />
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-gold/5 rounded-full blur-3xl" />

              <div className="relative z-10">
                <div className="text-gold text-6xl font-serif mb-6 text-center opacity-50">
                  "
                </div>
                <p className="text-cream/90 text-xl md:text-2xl font-light text-center leading-relaxed mb-8 italic">
                  Kami memulai dengan satu impian sederhana: membuat perhiasan
                  yang tidak hanya indah, tetapi juga bermakna. Setiap pelanggan
                  adalah bagian dari keluarga besar kami. Kepuasan Anda adalah
                  kebanggaan kami, dan kepercayaan Anda adalah harta paling
                  berharga yang kami jaga.
                </p>
                <div className="text-center">
                  <div className="text-gold font-semibold text-lg mb-1">
                    Ibu Wayan, Ibu Made & Ibu Ketut
                  </div>
                  <div className="text-cream/60">Pendiri Dahayu Jewelry</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="relative py-20 bg-dark-lighter">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gradient mb-6">
              Nilai-Nilai Kami
            </h2>
            <p className="text-cream/70 text-lg max-w-2xl mx-auto">
              Prinsip yang menjadi fondasi setiap karya kami
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Leaf,
                title: "Keaslian",
                description:
                  "100% emas murni dengan sertifikat keaslian yang terjamin",
              },
              {
                icon: Heart,
                title: "Keahlian",
                description:
                  "Dikerjakan oleh pengrajin master dengan pengalaman puluhan tahun",
              },
              {
                icon: Award,
                title: "Kualitas Premium",
                description:
                  "Standar kualitas tertinggi dalam setiap detail produk",
              },
              {
                icon: Sparkles,
                title: "Desain Eksklusif",
                description:
                  "Karya seni yang unik dan tidak akan Anda temukan di tempat lain",
              },
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-dark p-8 rounded-2xl border border-gold/10 hover:border-gold/30 transition-all"
              >
                <value.icon className="w-12 h-12 text-gold mb-4" />
                <h3 className="text-xl font-serif font-bold text-cream mb-3">
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
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gradient mb-6">
              Proses Pembuatan
            </h2>
            <p className="text-cream/70 text-lg max-w-2xl mx-auto">
              Dari konsep hingga menjadi karya seni yang sempurna
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Desain & Konsep",
                description:
                  "Setiap perhiasan dimulai dengan sketsa detail dan pemilihan bahan berkualitas premium",
                image:
                  "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80&auto=format&fit=crop",
              },
              {
                step: "02",
                title: "Pengerjaan Master",
                description:
                  "Pengrajin ahli mengolah emas dengan teknik tradisional yang telah teruji berabad-abad",
                image:
                  "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80&auto=format&fit=crop",
              },
              {
                step: "03",
                title: "Finishing & QC",
                description:
                  "Pemolesan akhir dan quality control ketat untuk hasil yang sempurna",
                image:
                  "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80&auto=format&fit=crop",
              },
            ].map((process, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="group relative"
              >
                <div className="relative rounded-2xl overflow-hidden mb-6">
                  <img
                    src={process.image}
                    alt={process.title}
                    className="w-full h-80 object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-dark via-dark/50 to-transparent" />

                  <div className="absolute top-6 left-6 w-16 h-16 bg-gold rounded-full flex items-center justify-center">
                    <span className="text-dark text-xl font-bold">
                      {process.step}
                    </span>
                  </div>
                </div>

                <h3 className="text-2xl font-serif font-bold text-cream mb-3">
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
      <section className="relative py-20 bg-dark-lighter">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gradient mb-6">
              Mengapa Memilih Kami
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "Garansi Seumur Hidup",
                description:
                  "Kami menjamin keaslian dan kualitas produk dengan garansi seumur hidup",
              },
              {
                icon: Users,
                title: "Konsultasi Gratis",
                description:
                  "Tim ahli kami siap membantu Anda memilih perhiasan yang sempurna",
              },
              {
                icon: Clock,
                title: "Custom Design",
                description:
                  "Wujudkan perhiasan impian Anda dengan layanan desain khusus",
              },
            ].map((reason, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-8"
              >
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gold/10 rounded-full mb-6 border-2 border-gold/30">
                  <reason.icon className="w-10 h-10 text-gold" />
                </div>
                <h3 className="text-xl font-serif font-bold text-cream mb-3">
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
