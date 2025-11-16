"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Beranda", href: "/" },
    { name: "Koleksi", href: "/koleksi" },
    { name: "Blog", href: "/blog" },
    { name: "Tentang", href: "/tentang" },
    { name: "Kontak", href: "/kontak" },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.6, 0.05, 0.01, 0.9] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-dark/80 backdrop-blur-xl border-b border-gold/10"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <div className="flex items-center justify-between h-24">
            {/* Logo */}
            <Link href="/">
              <motion.div
                className="group relative cursor-pointer"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src="/logo.png"
                  alt="Dahayu Jewelry"
                  className="h-16 md:h-20 w-auto object-contain"
                />
                {/* Underline effect */}
                <motion.div
                  className="absolute -bottom-1 left-0 h-[2px] bg-gradient-to-r from-gold via-gold-light to-gold"
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-12">
              {navLinks.map((link, index) => {
                const isActive = pathname === link.href;
                return (
                  <Link key={link.name} href={link.href}>
                    <motion.div
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="group relative cursor-pointer"
                    >
                      <span
                        className={`font-sans font-medium text-sm tracking-wider transition-colors duration-300 ${
                          isActive
                            ? "text-gold"
                            : isScrolled
                              ? "text-cream/80 hover:text-gold"
                              : "text-cream/70 hover:text-gold-light"
                        }`}
                      >
                        {link.name}
                      </span>
                      <motion.div
                        className="absolute -bottom-1 left-0 h-px bg-gold"
                        initial={{ width: isActive ? "100%" : 0 }}
                        animate={{ width: isActive ? "100%" : 0 }}
                        whileHover={{ width: "100%" }}
                        transition={{ duration: 0.3 }}
                      />
                    </motion.div>
                  </Link>
                );
              })}
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              whileTap={{ scale: 0.9 }}
              className={`md:hidden p-3 rounded-full glass-effect transition-colors duration-300 ${
                isScrolled ? "text-cream" : "text-cream"
              }`}
            >
              <AnimatePresence mode="wait">
                {isMobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X size={24} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu size={24} />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 md:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-dark/95 backdrop-blur-xl" />

            {/* Menu Content */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.4, ease: [0.6, 0.05, 0.01, 0.9] }}
              className="absolute right-0 top-0 h-full w-full max-w-sm bg-dark-lighter border-l border-gold/20"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex flex-col h-full p-8 pt-32">
                {/* Nav Links */}
                <div className="space-y-6">
                  {navLinks.map((link, index) => {
                    const isActive = pathname === link.href;
                    return (
                      <Link key={link.name} href={link.href}>
                        <motion.div
                          initial={{ opacity: 0, x: 50 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.1 }}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="block group"
                        >
                          <div className="flex items-center gap-4 py-4 border-b border-gold/10 hover:border-gold/30 transition-colors duration-300">
                            <span
                              className={`w-8 h-[1px] transform origin-left group-hover:scale-x-150 transition-transform duration-300 ${
                                isActive ? "bg-gold scale-x-150" : "bg-gold"
                              }`}
                            />
                            <span
                              className={`text-2xl font-serif transition-colors duration-300 ${
                                isActive
                                  ? "text-gold"
                                  : "text-cream group-hover:text-gold"
                              }`}
                            >
                              {link.name}
                            </span>
                          </div>
                        </motion.div>
                      </Link>
                    );
                  })}
                </div>

                {/* Decorative Elements */}
                <div className="mt-auto pt-8">
                  <div className="flex items-center gap-4">
                    <div className="flex-1 h-[1px] bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      className="w-3 h-3 bg-gold transform rotate-45"
                    />
                    <div className="flex-1 h-[1px] bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
