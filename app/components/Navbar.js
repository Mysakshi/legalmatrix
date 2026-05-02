'use client';

import { useState, useEffect } from 'react';
import { Menu, X, Scale, Phone, Mail, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Team', href: '/team' },
  { label: 'Clients', href: '/clients' },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
        ? 'bg-white/95 backdrop-blur-xl shadow-[0_10px_40px_-15px_rgba(30,58,138,0.2)] border-b border-secondary/20'
        : 'bg-primary/10 backdrop-blur-md border-b border-transparent'
        }`}
    >
      {/* Top bar */}
      <AnimatePresence>
        {!scrolled && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="bg-primary text-white text-[11px] px-6 overflow-hidden font-bold"
          >
            <div className="max-w-7xl mx-auto py-2 flex flex-wrap justify-between items-center gap-4">
              <div className="flex gap-6">
                <span className="opacity-90 flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-secondary" /> 7377033000
                </span>
                <span className="opacity-90 flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-secondary" /> office@legalmatrixindia.com
                </span>
              </div>
              <span className="opacity-90 flex items-center gap-1.5">
                <Scale className="w-3.5 h-3.5 text-secondary" /> Pune, Maharashtra
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main nav */}
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-3 group">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className={`flex-shrink-0 transition-all duration-300 rounded-xl flex items-center justify-center ${scrolled ? 'h-12 sm:h-14 py-1' : 'h-12 sm:h-14 bg-white/95 shadow-[0_0_20px_rgba(255,255,255,0.1)] px-3 py-1.5'
              }`}
          >
            <img src="/images/logo1.png" alt="LegalMatrix" className="h-full w-auto object-contain" />
          </motion.div>
        </a>

        {/* Desktop links */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <motion.a
              key={link.label}
              whileHover={{ y: -2 }}
              href={link.href}
              className={`px-4 py-2 text-[13px] font-black uppercase tracking-wider transition-all duration-300 relative group rounded-lg ${scrolled ? 'text-gray-600 hover:text-primary' : 'text-white/80 hover:text-white'
                }`}
            >
              {link.label}
              <motion.span
                layoutId="nav-underline"
                className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-secondary group-hover:w-full transition-all duration-300 rounded-full opacity-0 group-hover:opacity-100"
              />
            </motion.a>
          ))}
          <motion.a
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            href="#contact"
            className="ml-6 px-8 py-3 bg-secondary hover:bg-secondary-dark text-[#0f172a] text-xs font-black uppercase tracking-widest rounded-full shadow-lg transition-all duration-300"
          >
            Consultation
          </motion.a>
        </nav>

        {/* Mobile hamburger */}
        <motion.button
          whileTap={{ scale: 0.9 }}
          className={`lg:hidden p-3 rounded-2xl transition-all ${scrolled ? 'bg-gray-100 text-gray-800' : 'bg-white/10 text-white'
            }`}
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </motion.button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden bg-white shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] overflow-hidden border-t border-gray-100"
          >
            <div className="p-8 flex flex-col gap-4">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.1 }}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-2xl font-black text-gray-800 hover:text-primary transition-colors flex items-center justify-between group"
                >
                  {link.label}
                  <ArrowRight className="w-6 h-6 opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all" />
                </motion.a>
              ))}
              <motion.a
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="mt-6 py-5 text-center bg-primary text-white text-base font-black uppercase tracking-widest rounded-2xl shadow-xl hover:shadow-primary/40"
              >
                Get Consultation
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
