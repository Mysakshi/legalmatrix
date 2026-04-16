'use client';

import { ChevronRight, Home } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function PageHero({ title, subtitle, breadcrumb = [] }) {
    return (
        <section className="relative pt-32 pb-16 overflow-hidden">
            {/* Background Image with Parallax and Overlay */}
            <div className="absolute inset-0 z-0">
                <motion.div
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="absolute inset-0"
                >
                    <img
                        src="/images/11.jpg"
                        alt="Subpage Background"
                        className="w-full h-full object-cover"
                    />
                </motion.div>
                <div className="absolute inset-0 bg-gradient-to-b from-primary-dark/95 via-primary-dark/90 to-primary-dark/95 opacity-90" />
            </div>
            {/* Decorative Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 45, 0],
                        opacity: [0.1, 0.2, 0.1]
                    }}
                    transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -top-24 -right-24 w-96 h-96 rounded-full blur-[100px]"
                    style={{ background: 'var(--secondary)' }}
                />
                <motion.div
                    animate={{
                        scale: [1, 1.3, 1],
                        rotate: [0, -45, 0],
                        opacity: [0.05, 0.15, 0.05]
                    }}
                    transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute bottom-0 -left-24 w-80 h-80 rounded-full blur-[80px]"
                    style={{ background: 'var(--accent)' }}
                />
                <div
                    className="absolute inset-0 opacity-[0.03]"
                    style={{
                        backgroundImage: 'linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)',
                        backgroundSize: '40px 40px',
                    }}
                />
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="flex flex-col items-center text-center">
                    {/* Breadcrumb */}
                    <motion.nav
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="flex items-center gap-2 mb-6 bg-white/5 border border-white/10 px-4 py-2 rounded-full backdrop-blur-md shadow-lg"
                    >
                        <Link href="/" className="text-white/60 hover:text-secondary transition-colors">
                            <Home className="w-4 h-4" />
                        </Link>
                        <ChevronRight className="w-4 h-4 text-white/20" />
                        {breadcrumb.map((item, idx) => (
                            <div key={idx} className="flex items-center gap-2">
                                {idx > 0 && <ChevronRight className="w-4 h-4 text-white/20" />}
                                <span className={`text-sm font-bold uppercase tracking-widest ${idx === breadcrumb.length - 1 ? 'text-secondary' : 'text-white/60'}`}>
                                    {item.label}
                                </span>
                            </div>
                        ))}
                    </motion.nav>

                    {/* Title */}
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-4xl sm:text-6xl font-black text-white mb-4 tracking-tight leading-tight uppercase"
                    >
                        {title.split(' ').map((word, i) => (
                            <span key={i} className={i === title.split(' ').length - 1 ? 'text-secondary' : ''}>
                                {word}{' '}
                            </span>
                        ))}
                    </motion.h1>

                    <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: "4rem" }}
                        transition={{ duration: 1, delay: 0.6 }}
                        className="h-1.5 bg-secondary rounded-full mb-6"
                    />

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                        className="text-lg text-white/70 max-w-2xl font-medium leading-relaxed"
                    >
                        {subtitle}
                    </motion.p>
                </div>
            </div>
        </section>
    );
}
