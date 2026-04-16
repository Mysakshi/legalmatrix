'use client';

import { ArrowRight, Phone, Mail, Scale } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
    return (
        <section
            id="hero"
            className="relative min-h-screen flex items-center justify-center overflow-hidden"
        >
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
                        alt="Legal Matrix Background"
                        className="w-full h-full object-cover"
                    />
                </motion.div>
                {/* Master Overlay for Readability */}
                <div className="absolute inset-0 bg-gradient-to-b from-primary-dark/90 via-primary-dark/80 to-primary-dark/95" />
                <div className="absolute inset-0 bg-black/40" />

                {/* Decorative background elements */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 0.2, scale: 1 }}
                        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                        className="absolute -top-24 -right-24 w-96 h-96 rounded-full"
                        style={{ background: 'radial-gradient(circle, var(--secondary), transparent 70%)' }}
                    />
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 0.1, scale: 1.1 }}
                        transition={{ duration: 3, repeat: Infinity, repeatType: "reverse", delay: 1 }}
                        className="absolute bottom-0 -left-24 w-80 h-80 rounded-full"
                        style={{ background: 'radial-gradient(circle, var(--accent), transparent 70%)' }}
                    />
                    <div
                        className="absolute inset-0 opacity-[0.03]"
                        style={{
                            backgroundImage: 'linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)',
                            backgroundSize: '40px 40px',
                        }}
                    />
                </div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20 grid lg:grid-cols-2 gap-16 items-center">
                {/* Left Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="flex flex-col items-start"
                >
                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-2 mb-8 backdrop-blur-sm shadow-lg shadow-black/20"
                    >
                        <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
                        <span className="text-sm font-semibold text-white/90 uppercase tracking-widest">Premium Consultancy</span>
                    </motion.div>

                    {/* Logo / Brand */}
                    <div className="mb-6">
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.8 }}
                            className="text-6xl sm:text-7xl lg:text-8xl font-black tracking-ultra-tight leading-[0.85] text-balance"
                        >
                            <span className="text-white block">LEGAL</span>
                            <motion.span
                                initial={{ x: -20, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: 0.6, duration: 0.8 }}
                                className="text-secondary block"
                            >
                                MATRIX
                            </motion.span>
                        </motion.h1>
                    </div>

                    {/* Tagline */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8, duration: 0.8 }}
                        className="text-2xl sm:text-3xl font-light text-white/90 mb-6 leading-tight tracking-tight text-balance"
                    >
                        Your Partner in <span className="text-secondary font-bold">Co-Operative Housing</span> Success
                    </motion.p>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1, duration: 0.8 }}
                        className="text-lg text-white/70 mb-10 max-w-lg leading-relaxed font-medium"
                    >
                        End-to-end legal advisory and compliance support for housing societies, ensuring transparency and legal peace of mind.
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.2, duration: 0.8 }}
                        className="flex flex-wrap gap-5 mb-16"
                    >
                        <a
                            href="#services"
                            className="group flex items-center gap-2 px-10 py-5 bg-secondary hover:bg-secondary-dark text-primary-dark font-black rounded-full transition-all duration-300 hover:shadow-2xl hover:shadow-amber-500/40 hover:-translate-y-1 text-base shadow-xl"
                        >
                            Our Services
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                        </a>
                        <a
                            href="#contact"
                            className="px-10 py-5 bg-white/10 hover:bg-white/20 text-white font-bold rounded-full border border-white/30 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 text-base shadow-lg"
                        >
                            Contact Us
                        </a>
                    </motion.div>

                    {/* Stats */}
                    <div className="flex flex-wrap gap-12 border-t border-white/10 pt-10">
                        {[
                            { value: '6+', label: 'Firms', delay: 1.4 },
                            { value: '15+', label: 'Specialists', delay: 1.5 },
                            { value: '1000+', label: 'Societies', delay: 1.6 },
                        ].map((stat) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: stat.delay }}
                            >
                                <p className="text-4xl font-black text-secondary tracking-tighter">{stat.value}</p>
                                <p className="text-[10px] text-white/50 font-bold uppercase tracking-[0.2em] mt-1">{stat.label}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Right: Glass Overlay Card */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="hidden lg:flex justify-end relative h-[600px] w-full items-center"
                >
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                        className="w-full max-w-[450px] p-10 glass-card border-white/20 rounded-[3rem] shadow-2xl relative"
                    >
                        <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/10 rounded-full blur-3xl -mr-16 -mt-16" />

                        <div className="flex items-center gap-6 mb-8">
                            <div className="w-16 h-16 rounded-2xl bg-secondary/20 flex items-center justify-center shadow-xl">
                                <Scale className="w-8 h-8 text-secondary" />
                            </div>
                            <h3 className="text-white text-3xl font-black tracking-ultra-tight">Legal Mastery</h3>
                        </div>

                        <p className="text-white/70 text-lg leading-relaxed mb-10 font-medium">
                            Setting the standard for excellence in co-operative housing consultancy and management.
                        </p>

                        <div className="space-y-5">
                            {[
                                'Full Compliance Audit',
                                'Expert Legal Counsel',
                                'Defaulter Management',
                                'Redevelopment Support',
                            ].map((item, idx) => (
                                <motion.div
                                    key={item}
                                    initial={{ opacity: 0, x: -10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.8 + (idx * 0.1) }}
                                    className="flex items-center gap-4 group"
                                >
                                    <div className="w-2.5 h-2.5 rounded-full bg-secondary group-hover:scale-125 transition-transform shadow-[0_0_10px_var(--color-secondary)]" />
                                    <span className="text-white/80 text-sm font-bold uppercase tracking-widest">{item}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Floating Interaction Point */}
                    <motion.div
                        animate={{ y: [0, -15, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute top-10 -left-6 bg-white rounded-2xl px-6 py-4 shadow-2xl flex items-center gap-3 border border-gray-100 z-20"
                    >
                        <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center">
                            <Phone className="w-5 h-5 text-secondary-dark" />
                        </div>
                        <div>
                            <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Expert Advice</p>
                            <p className="text-sm font-black text-primary">7377033000</p>
                        </div>
                    </motion.div>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2 }}
                className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
            >
                <motion.div
                    animate={{ height: [48, 24, 48], opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-[1px] h-12 bg-gradient-to-b from-transparent via-white/50 to-transparent"
                />
                <span className="text-white/30 text-[10px] font-bold uppercase tracking-[0.2em]">Scroll</span>
            </motion.div>
        </section>
    );
}
