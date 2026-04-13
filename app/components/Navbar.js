'use client';

import { useState, useEffect } from 'react';
import { Menu, X, Scale, Phone, Mail, ArrowRight } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Team', href: '/team' },
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
        ? 'bg-white/90 backdrop-blur-lg shadow-xl border-b border-blue-50'
        : 'bg-primary/10 backdrop-blur-sm'
        }`}
    >
      {/* Top bar */}
      <div
        className={`bg-primary text-white text-[11px] px-6 overflow-hidden transition-all duration-500 ease-in-out font-bold ${scrolled ? 'max-h-0 opacity-0' : 'max-h-12 py-2 opacity-100'
          }`}
      >
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-4">
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
      </div>

      {/* Main nav */}
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-3 group">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-secondary to-secondary-dark flex items-center justify-center shadow-lg group-hover:shadow-secondary/50 transition-all duration-300">
            <Scale className="w-6 h-6 text-[#0f172a]" />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center">
              <span className={`text-2xl font-black tracking-tighter ${scrolled ? 'text-primary' : 'text-white'}`}>LEGAL</span>
              <span className="text-2xl font-black text-secondary tracking-tighter">MATRIX</span>
            </div>
            <p className={`text-[10px] leading-none font-bold uppercase tracking-widest ${scrolled ? 'text-gray-400' : 'text-white/50'}`}>Excellence & Trust</p>
          </div>
        </a>

        {/* Desktop links */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`px-4 py-2 text-[13px] font-black uppercase tracking-wider transition-all duration-300 relative group rounded-lg ${scrolled ? 'text-gray-600 hover:text-primary' : 'text-white/80 hover:text-white'
                }`}
            >
              {link.label}
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-secondary group-hover:w-full transition-all duration-300 rounded-full opacity-0 group-hover:opacity-100" />
            </a>
          ))}
          <a
            href="#contact"
            className="ml-6 px-8 py-3 bg-secondary hover:bg-secondary-dark text-[#0f172a] text-xs font-black uppercase tracking-widest rounded-full shadow-lg hover:shadow-secondary/40 hover:-translate-y-0.5 transition-all duration-300"
          >
            Consultation
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          className={`lg:hidden p-3 rounded-2xl transition-all ${scrolled ? 'bg-gray-100 text-gray-800' : 'bg-white/10 text-white'
            }`}
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden bg-white shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] transition-all duration-500 overflow-hidden ${mobileOpen ? 'max-h-screen border-t border-gray-100' : 'max-h-0'
          }`}
      >
        <div className="p-8 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-2xl font-black text-gray-800 hover:text-primary transition-colors flex items-center justify-between group"
            >
              {link.label}
              <ArrowRight className="w-6 h-6 opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all" />
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMobileOpen(false)}
            className="mt-6 py-5 text-center bg-primary text-white text-base font-black uppercase tracking-widest rounded-2xl shadow-xl hover:shadow-primary/40"
          >
            Get Consultation
          </a>
        </div>
      </div>
    </header>
  );
}
