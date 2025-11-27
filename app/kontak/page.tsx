"use client";

import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";

export default function KontakPage() {
  const handleWhatsAppDirect = () => {
    const phoneNumber = "6285723368060"; // WhatsApp number
    const message = "Halo, saya ingin bertanya tentang produk Dahayu Jewelry.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <main className="min-h-screen bg-dark relative overflow-hidden">
      <Navbar />

      {/* Animated Background Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ y: [0, -80, 0], x: [0, 50, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ y: [0, 60, 0], x: [0, -40, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-gold-light/15 rounded-full blur-3xl"
        />
      </div>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="grain-overlay" />

        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-linear-to-br from-dark via-green-dark/20 to-dark" />
          <motion.div
            animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
            transition={{ duration: 20, repeat: Infinity }}
            className="absolute top-20 right-20 w-96 h-96 bg-gold/10 rounded-full blur-3xl animate-glow"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="text-5xl md:text-7xl font-serif font-light mb-6"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <span className="text-gradient">Dahayu Jewelry</span>
            </motion.h1>
            <p className="text-cream/70 text-lg md:text-xl max-w-3xl mx-auto font-light leading-relaxed">
              Setiap karya adalah perjalanan yang dirancang dengan hati.
              <br className="hidden md:block" />
              Bukan sekadar perhiasan, tetapi cara kami merayakan ketulusan
              dalam bentuk yang abadi.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="relative py-20">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-serif font-light text-gradient mb-6">
                Hubungi Kami
              </h2>
              <p className="text-cream/70 text-lg leading-relaxed">
                Kami dengan senang hati menjawab setiap pertanyaan Anda dan
                membantu menemukan perhiasan yang bermakna.
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  icon: MapPin,
                  title: "📍 Product dititpkan pada alamat",
                  content:
                    "Rumah Mode Andara, Jl. Tukad Barito No. 58X, Panjer Denpasar, Bali – Indonesia",
                  link: "https://maps.google.com",
                },
                {
                  icon: Phone,
                  title: "📞 Telepon",
                  content: "+62 857-2336-8060",
                  link: "tel:+6285723368060",
                },
                {
                  icon: Phone,
                  title: "📞 Telepon Andara",
                  content: "+62 811-3857-299",
                  link: "tel:+628113857299",
                },
                {
                  icon: Phone,
                  title: "⭐ NB",
                  content:
                    "Untuk memastikan stock tersedia, silahkan menghubungi nomor Dahayu di atas.",
                  link: "tel:+628113857299",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="flex gap-4 p-6 bg-dark-lighter rounded-2xl border border-gold/10 hover:border-gold/30 transition-all group luxury-glow"
                >
                  <div className="flex-shrink-0">
                    <motion.div
                      className="w-14 h-14 bg-gold/10 rounded-full flex items-center justify-center border border-gold/30 group-hover:bg-gold/20 transition-colors"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <item.icon className="w-7 h-7 text-gold" />
                    </motion.div>
                  </div>
                  <div className="flex-1">
                    <div className="text-cream/60 text-sm mb-1">
                      {item.title}
                    </div>
                    {item.link ? (
                      <a
                        href={item.link}
                        className="text-cream text-lg font-medium hover:text-gold transition-colors whitespace-pre-line"
                      >
                        {item.content}
                      </a>
                    ) : (
                      <div className="text-cream text-lg font-medium whitespace-pre-line">
                        {item.content}
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* WhatsApp CTA */}
            <motion.button
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleWhatsAppDirect}
              className="w-full bg-green-600 hover:bg-green-700 text-white px-8 py-5 rounded-2xl font-normal text-lg flex items-center justify-center gap-3 transition-colors shadow-lg shadow-green-600/30 luxury-glow"
            >
              <motion.div
                animate={{ rotate: [0, 15, -15, 0] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <MessageCircle className="w-6 h-6" />
              </motion.div>
              Chat via WhatsApp
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Map Section */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.3 }}
            className="rounded-3xl overflow-hidden border border-gold/20 luxury-glow perspective-container"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3944.5179842850564!2d115.22821507501644!3d-8.645234691374567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd23f8b4c0f8c75%3A0x5c3b3f3b3f3b3f3b!2sJl.%20Tukad%20Barito%20No.58X%2C%20Panjer%2C%20Denpasar%20Selatan%2C%20Kota%20Denpasar%2C%20Bali!5e0!3m2!1sen!2sid!4v1234567890123!5m2!1sen!2sid"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full"
            />
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
