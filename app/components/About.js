'use client';

import { CheckCircle, Scale } from 'lucide-react';
import { motion } from 'framer-motion';

const highlights = [
    'Expert legal advisory for CHS',
    'Full MCS Act 1960 compliance',
    'Trusted by 1000+ societies',
    'Multi-disciplinary legal & audit team',
];

export default function About() {
    return (
        <section
            id="about"
            className="section-padding scroll-mt-20 overflow-hidden relative"
            style={{ backgroundColor: '#ffffff' }}
        >
            {/* Background Texture */}
            <div className="absolute inset-0 bg-pattern-dots opacity-[0.3] pointer-events-none" />
            <div className="absolute inset-0 bg-mesh-gradient opacity-[0.4] pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Section header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <span
                        className="inline-block px-4 py-1.5 rounded-full uppercase tracking-tighter text-xs font-black mb-4"
                        style={{ backgroundColor: 'rgba(30, 58, 138, 0.1)', color: '#1E3A8A' }}
                    >
                        About Us
                    </span>
                    <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-4 inline-block relative tracking-ultra-tight text-balance">
                        About <span className="text-primary">LegalMatrix</span>
                        <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: "3rem" }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5, duration: 0.8 }}
                            className="absolute -bottom-2 left-1/2 -translate-x-1/2 h-1.5 bg-gradient-to-r from-primary to-secondary rounded-full"
                        />
                    </h2>
                    <p className="text-gray-500 max-w-xl mx-auto text-lg font-medium mt-6 text-balance">
                        Your trusted partner in co-operative housing legal compliance
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-20 items-center">
                    {/* Left: Text */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                        className="space-y-8"
                    >
                        <div>
                            <p className="text-gray-800 text-xl sm:text-2xl leading-relaxed font-semibold mb-8 tracking-tight text-balance">
                                <span className="text-primary font-black border-b-4 border-secondary pb-1">LegalMatrix</span> provides tailored legal solutions for cooperative housing societies, ensuring absolute compliance.
                            </p>
                            <p className="text-gray-600 leading-relaxed text-lg sm:text-xl font-medium text-balance">
                                Our team of experienced legal professionals, chartered accountants, and compliance specialists work together to deliver comprehensive solutions that simplify the complex legal landscape for housing societies across Maharashtra.
                            </p>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-4">
                            {highlights.map((item, idx) => (
                                <motion.div
                                    key={item}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="flex items-center gap-3 p-4 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all group"
                                >
                                    <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                                        <CheckCircle className="w-5 h-5 text-accent" />
                                    </div>
                                    <span className="text-gray-700 font-bold text-sm tracking-tight">{item}</span>
                                </motion.div>
                            ))}
                        </div>

                        <div className="flex flex-wrap gap-5 pt-4">
                            <motion.a
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                href="/services"
                                className="px-10 py-5 bg-primary text-white font-black rounded-full text-base hover:shadow-2xl hover:shadow-blue-900/40 transition-all shadow-xl"
                            >
                                Explore Services
                            </motion.a>
                            <motion.a
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                href="/contact"
                                className="px-10 py-5 border-2 border-primary text-primary font-black rounded-full text-base hover:bg-primary hover:text-white transition-all shadow-lg"
                            >
                                Get in Touch
                            </motion.a>
                        </div>
                    </motion.div>

                    {/* Right: Visual */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                        className="relative group"
                    >
                        {/* Decorative background glow */}
                        <div className="absolute -inset-10 bg-primary/5 blur-[100px] rounded-full group-hover:bg-primary/10 transition-all duration-700 pointer-events-none" />

                        <div className="relative rounded-[3.5rem] overflow-hidden shadow-2xl border border-white/50 h-[600px] group"
                        >
                            <motion.img
                                src="/images/12.jpg"
                                alt="Legal Matrix Vision"
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                initial={{ scale: 1.2 }}
                                whileInView={{ scale: 1 }}
                                transition={{ duration: 1.5 }}
                            />
                            {/* Overlay Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-primary/60 via-transparent to-transparent opacity-80" />

                            {/* Vision Card Overlay */}
                            <div className="absolute inset-0 flex items-center justify-center p-12">
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.5, duration: 0.8 }}
                                    className="text-center text-white glass-card p-10 rounded-[3rem] border border-white/20"
                                >
                                    <div className="w-20 h-20 rounded-3xl bg-secondary/20 flex items-center justify-center mx-auto mb-6">
                                        <Scale className="w-10 h-10 text-secondary" />
                                    </div>
                                    <h3 className="text-3xl font-black mb-4 tracking-tighter">Our Vision</h3>
                                    <p className="text-white/80 text-base leading-relaxed max-w-xs mx-auto font-medium">
                                        Empowering cooperative housing societies with absolute transparency and mutual trust.
                                    </p>
                                </motion.div>
                            </div>

                            {/* Floating decorative items */}
                            <motion.div
                                animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
                                transition={{ duration: 4, repeat: Infinity }}
                                className="absolute top-10 right-10 w-40 h-40 bg-secondary/20 rounded-full blur-3xl pointer-events-none"
                            />
                        </div>

                        {/* Floating Stats Card - Restored with Glassmorphism */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5, duration: 0.8 }}
                            whileHover={{ y: -5, scale: 1.02 }}
                            className="absolute -bottom-10 right-0 sm:-right-8 glass-card-light rounded-[2.5rem] p-10 border border-white/50 flex gap-10 cursor-pointer transition-shadow shadow-2xl"
                        >
                            <div className="text-center">
                                <p className="text-4xl font-black text-primary tracking-tighter">1K+</p>
                                <p className="text-[10px] text-gray-500 font-black uppercase tracking-[0.2em] mt-2">Societies</p>
                            </div>
                            <div className="w-px bg-primary/10" />
                            <div className="text-center">
                                <p className="text-4xl font-black text-secondary tracking-tighter">15+</p>
                                <p className="text-[10px] text-gray-500 font-black uppercase tracking-[0.2em] mt-2">Experts</p>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
