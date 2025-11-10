"use client";

import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Phone, Mail, MapPin, Clock, Send, MessageCircle } from "lucide-react";
import { useState } from "react";

export default function KontakPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Create WhatsApp message
    const message =
      `Halo Dahayu Jewelry,\n\n` +
      `Nama: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Telepon: ${formData.phone}\n\n` +
      `Pesan:\n${formData.message}`;

    const phoneNumber = "6281234567890"; // Replace with actual WhatsApp number
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  const handleWhatsAppDirect = () => {
    const phoneNumber = "6281234567890"; // Replace with actual WhatsApp number
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
              className="text-5xl md:text-7xl font-serif font-bold mb-6"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <span className="text-gradient">Hubungi Kami</span>
            </motion.h1>
            <p className="text-cream/70 text-lg md:text-xl max-w-2xl mx-auto font-light">
              Kami siap membantu Anda menemukan perhiasan impian
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-gradient mb-6">
                  Informasi Kontak
                </h2>
                <p className="text-cream/70 text-lg leading-relaxed">
                  Jangan ragu untuk menghubungi kami. Tim kami siap membantu
                  Anda dengan senang hati.
                </p>
              </div>

              <div className="space-y-6">
                {[
                  {
                    icon: MapPin,
                    title: "Alamat",
                    content: "Jl. Sunset Road No. 88, Seminyak, Bali 80361",
                    link: "https://maps.google.com",
                  },
                  {
                    icon: Phone,
                    title: "Telepon",
                    content: "+62 812-3456-7890",
                    link: "tel:+6281234567890",
                  },
                  {
                    icon: Mail,
                    title: "Email",
                    content: "info@dahayujewelry.com",
                    link: "mailto:info@dahayujewelry.com",
                  },
                  {
                    icon: Clock,
                    title: "Jam Operasional",
                    content: "Senin - Sabtu: 09:00 - 18:00\nMinggu: Tutup",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
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
                className="w-full bg-green-600 hover:bg-green-700 text-white px-8 py-5 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 transition-colors shadow-lg shadow-green-600/30 luxury-glow"
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

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-dark-lighter p-8 md:p-10 rounded-3xl border border-gold/10 luxury-glow perspective-container">
                <h3 className="text-2xl font-serif font-bold text-cream mb-6">
                  Kirim Pesan
                </h3>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-cream/70 mb-2">
                      Nama Lengkap
                    </label>
                    <motion.input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      whileFocus={{ scale: 1.02, borderColor: "#c6a664" }}
                      className="w-full px-4 py-3 bg-dark border border-gold/20 rounded-xl text-cream focus:border-gold focus:outline-none transition-colors"
                      placeholder="Masukkan nama Anda"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-cream/70 mb-2">
                      Email
                    </label>
                    <motion.input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      whileFocus={{ scale: 1.02, borderColor: "#c6a664" }}
                      className="w-full px-4 py-3 bg-dark border border-gold/20 rounded-xl text-cream focus:border-gold focus:outline-none transition-colors"
                      placeholder="nama@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-cream/70 mb-2">
                      Nomor Telepon
                    </label>
                    <motion.input
                      type="tel"
                      id="phone"
                      required
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      whileFocus={{ scale: 1.02, borderColor: "#c6a664" }}
                      className="w-full px-4 py-3 bg-dark border border-gold/20 rounded-xl text-cream focus:border-gold focus:outline-none transition-colors"
                      placeholder="+62 812-3456-7890"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-cream/70 mb-2"
                    >
                      Pesan
                    </label>
                    <motion.textarea
                      id="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      whileFocus={{ scale: 1.02, borderColor: "#c6a664" }}
                      className="w-full px-4 py-3 bg-dark border border-gold/20 rounded-xl text-cream focus:border-gold focus:outline-none transition-colors resize-none"
                      placeholder="Tuliskan pesan Anda di sini..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02, y: -3 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-gold hover:bg-gold-light text-dark px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-3 transition-colors shadow-lg shadow-gold/30 luxury-glow"
                  >
                    <motion.div
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Send className="w-5 h-5" />
                    </motion.div>
                    Kirim Pesan
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </div>
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
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3944.2076870524744!2d115.15906431478246!3d-8.680377893772972!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd2409b0e5e80db%3A0xe27334e8ccb9b32!2sSeminyak%2C%20Bali!5e0!3m2!1sen!2sid!4v1234567890123!5m2!1sen!2sid"
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
