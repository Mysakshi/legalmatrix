'use client';

import { CheckCircle, Target, Eye, ShieldCheck, Scale, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const highlights = [
    'Ensuring absolute compliance with MCS Act 1960',
    'Comprehensive legal, account & audit services',
    'Expert handling of RERA & Co-op Court cases',
    'Simplifying complex legalities for societies',
];

export default function About() {
    return (
        <section
            id="about"
            className="pt-24 pb-10 px-6 scroll-mt-20 overflow-hidden relative"
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
                    <div className="flex flex-col items-center gap-2 mb-6">
                        <span
                            className="inline-block px-4 py-1.5 rounded-full uppercase tracking-tighter text-xs font-black"
                            style={{ backgroundColor: 'rgba(30, 58, 138, 0.1)', color: '#1E3A8A' }}
                        >
                            About Us
                        </span>
                        <h2 className="text-4xl sm:text-5xl font-black text-gray-900 tracking-ultra-tight text-balance">
                            About <span className="text-primary">LegalMatrix</span>
                        </h2>
                        <div className="w-24 h-1.5 bg-gradient-to-r from-primary to-secondary rounded-full mt-4" />
                    </div>
                    <p className="text-gray-500 max-w-xl mx-auto text-lg font-medium text-balance">
                        A dedicated partner bridging the gap between complex laws and everyday cooperative housing society operations.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center mb-8">
                    {/* Left: Text */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                        className="space-y-8"
                    >
                        <div>
                            <p className="text-gray-800 text-lg sm:text-xl leading-relaxed font-bold mb-6 tracking-tight text-justify text-balance">
                                We <span className="text-primary font-black">Legalmatrix</span> provide tailored legal solutions for Cooperative Housing Societies, ensuring compliance with the MCS Act 1960 and related Bye-laws.
                            </p>
                            <div className="text-gray-600 leading-relaxed text-sm sm:text-base font-medium text-balance text-justify space-y-4">
                                <p>
                                    Our services include Legal advisory, Account and Audit compliances, Formation of soceity and federation, Election of managing committee, Regulatory compliance, Dispute resolution, Recovery suits against Defaulter members, Co-operative court cases, RERA cases, Redevelopment designed to simplify the legal processes for societies.
                                </p>
                                <p>
                                    Our team has extensive experience in handling Cooperative Housing Society-related matters, ensuring that rights as a society office bearer are protected. Especially focus on trust, transparency, and practical solutions, our team bridges the gap between complex laws and everyday society operations.
                                </p>
                            </div>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-4">
                            {highlights.map((item, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="flex items-start gap-3 p-4 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all group"
                                >
                                    <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform mt-0.5">
                                        <CheckCircle className="w-4 h-4 text-accent" />
                                    </div>
                                    <span className="text-gray-700 font-bold text-sm tracking-tight leading-tight pt-1">{item}</span>
                                </motion.div>
                            ))}
                        </div>

                        <div className="flex flex-wrap gap-5 pt-2">
                            <motion.a
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                href="#services"
                                className="px-8 py-4 bg-primary text-white font-black rounded-full text-sm hover:shadow-2xl hover:shadow-blue-900/40 transition-all shadow-xl flex items-center gap-2"
                            >
                                Explore Services <ArrowRight className="w-4 h-4" />
                            </motion.a>
                        </div>
                    </motion.div>

                    {/* Right: Vision & Mission */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                        className="relative space-y-8"
                    >
                        {/* Mission Card */}
                        <motion.div
                            whileHover={{ y: -5 }}
                            className="bg-white rounded-[2.5rem] p-8 sm:p-10 border border-gray-100 shadow-xl relative overflow-hidden group"
                        >
                            <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/5 rounded-full -mr-16 -mt-16 group-hover:bg-secondary/15 transition-colors duration-500 blur-xl" />

                            <div className="flex items-center gap-5 mb-6 relative z-10">
                                <div className="w-14 h-14 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary shadow-inner">
                                    <Target className="w-7 h-7" />
                                </div>
                                <h3 className="text-2xl font-black text-gray-900 tracking-tight">Our Mission</h3>
                            </div>

                            <p className="text-gray-600 text-sm font-medium leading-relaxed relative z-10 text-justify">
                                Our mission is to carry comprehensive and compassionate legal solutions that prioritize client Satisfaction through unwavering commitment to solve their challenges. We strive to build enduring relationships with cooperative housing societies by fostering <span className="font-bold text-gray-800">Trust, Clarity and Efficiency</span>, ensuring every co-operative housing society thrives in <span className="font-bold text-gray-800">Harmony, Fairness, and Unity</span> due to legal compliances.
                            </p>
                        </motion.div>

                        {/* Vision Card */}
                        <motion.div
                            whileHover={{ y: -5 }}
                            className="bg-primary text-white rounded-[2.5rem] p-8 sm:p-10 border border-primary-light shadow-[0_30px_60px_-15px_rgba(30,58,138,0.4)] relative overflow-hidden group"
                        >
                            <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-white/5 rounded-full blur-3xl group-hover:bg-white/10 transition-colors duration-500" />

                            <div className="flex items-center gap-5 mb-6 relative z-10">
                                <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center text-white shadow-inner backdrop-blur-sm border border-white/20">
                                    <Eye className="w-7 h-7" />
                                </div>
                                <h3 className="text-2xl font-black tracking-tight">Our Vision</h3>
                            </div>

                            <p className="text-white/80 text-sm font-medium leading-relaxed relative z-10 text-justify">
                                We envision a future where cooperative housing societies thrive as trusted and harmonious communities, guided by expert legal compliance and unwavering support. Our aim is to build long-term relationships by simplifying legal complexities, fostering trust, and delivering services with responsibility and excellence. We strive to be recognized as the foremost legal partner for housing societies, inspiring confidence and collaboration at every step.
                            </p>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
