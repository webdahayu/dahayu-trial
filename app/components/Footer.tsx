"use client";

import { motion } from "framer-motion";
import {
  Instagram,
  MessageCircle,
  Mail,
  MapPin,
  Phone,
  ArrowUpRight,
} from "lucide-react";

export default function Footer() {
  const socialLinks = [
    {
      name: "Instagram",
      icon: Instagram,
      url: "https://instagram.com/dahayu.jewelry",
      handle: "@dahayu.jewelry",
    },
    {
      name: "WhatsApp",
      icon: MessageCircle,
      url: "https://wa.me/6285723368060",
      handle: "+62 857-2336-8060",
    },
  ];

  const quickLinks = [
    { name: "Beranda", href: "#" },
    { name: "Koleksi", href: "#koleksi" },
    { name: "Tentang Kami", href: "#tentang" },
    { name: "Kontak", href: "#kontak" },
  ];

  const collections = [
    { name: "Anting", href: "/koleksi" },
    { name: "Cincin", href: "/koleksi" },
    { name: "Bros", href: "/koleksi" },
  ];

  return (
    <footer className="relative bg-dark text-cream overflow-hidden border-t border-gold/10">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold-light/20 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-20">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
          {/* Brand Section - Takes more space */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5"
          >
            <div className="flex items-center gap-3 mb-6">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="w-2 h-2 bg-gold transform rotate-45"
              />
              <h3 className="text-4xl font-serif font-light text-gold">
                Dahayu Jewelry
              </h3>

              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="w-2 h-2 bg-gold transform rotate-45"
              />
            </div>
            <p className="text-cream/70 text-base md:text-lg font-light leading-relaxed mb-6">
              Setiap karya adalah perjalanan yang dirancang dengan hati.
              <br className="hidden md:block" />
              Bukan sekadar perhiasan, tetapi cara kami merayakan ketulusan
              dalam bentuk yang abadi.
            </p>

            {/* Address */}
            <div className="flex items-start gap-3 text-cream/60 mb-4">
              <MapPin className="w-5 h-5 text-gold mt-1 shrink-0" />
              <div className="font-sans text-sm leading-relaxed">
                <p className="text-cream/80 font-medium mb-1">
                  Product dititipkan pada alamat:
                </p>
                <p>Rumah Mode Andara</p>
                <p>Jl. Tukad Barito No. 58X</p>
                <p>Panjer Denpasar, Bali – Indonesia</p>
              </div>
            </div>

            {/* Phone Numbers */}
            <div className="space-y-2 mb-6">
              <a
                href="tel:+6285723368060"
                className="flex items-center gap-3 text-cream/60 hover:text-gold transition-colors duration-300"
              >
                <Phone className="w-5 h-5" />
                <div className="font-sans text-sm">
                  <span className="text-cream/80 block">Dahayu:</span>
                  <span>+62 857-2336-8060</span>
                </div>
              </a>
              <a
                href="tel:+628113857299"
                className="flex items-center gap-3 text-cream/60 hover:text-gold transition-colors duration-300"
              >
                <Phone className="w-5 h-5" />
                <div className="font-sans text-sm">
                  <span className="text-cream/80 block">Andara:</span>
                  <span>+62 811-3857-299</span>
                </div>
              </a>
            </div>

            {/* Note */}
            <div className="bg-gold/5 border border-gold/20 rounded-lg p-3 mb-6">
              <p className="text-cream/70 text-xs font-sans leading-relaxed">
                ⭐ <span className="font-medium text-cream/80">NB:</span> Untuk
                memastikan stock tersedia, silahkan menghubungi nomor Dahayu di
                atas.
              </p>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-12 h-12 rounded-full glass-effect flex items-center justify-center text-gold hover:bg-gold hover:text-dark transition-all duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-3"
          >
            <h4 className="text-xl font-serif font-normal text-gold mb-6">
              Navigasi
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="group flex items-center gap-2 text-cream/70 hover:text-gold transition-all duration-300 font-sans text-sm"
                  >
                    <span className="w-0 group-hover:w-6 h-px bg-gold transition-all duration-300" />
                    <span>{link.name}</span>
                    <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Collections */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <h4 className="text-xl font-serif font-normal text-gold mb-6">
              Koleksi
            </h4>
            <ul className="space-y-3">
              {collections.map((collection) => (
                <li key={collection.name}>
                  <a
                    href={collection.href}
                    className="group flex items-center gap-2 text-cream/70 hover:text-gold transition-all duration-300 font-sans text-sm"
                  >
                    <span className="w-0 group-hover:w-6 h-px bg-gold transition-all duration-300" />
                    <span>{collection.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Decorative Divider */}
        <div className="relative mb-12">
          <div className="h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-gold rotate-45"
          />
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm"
        >
          <p className="text-cream/50 font-sans">
            © {new Date().getFullYear()} Dahayu Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-cream/50 hover:text-gold transition-colors duration-300 font-sans"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-cream/50 hover:text-gold transition-colors duration-300 font-sans"
            >
              Terms of Service
            </a>
          </div>
        </motion.div>

        {/* Made with love */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center text-cream/30 text-xs mt-8 font-sans"
        >
          Dibuat dengan <span className="text-gold">❤</span> untuk keindahan
          abadi
        </motion.p>
      </div>
    </footer>
  );
}
