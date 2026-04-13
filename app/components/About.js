'use client';

import { CheckCircle, Scale } from 'lucide-react';

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
            className="section-padding scroll-mt-20"
            style={{ backgroundColor: '#F8FAFC' }}
        >
            <div className="max-w-7xl mx-auto">
                {/* Section header */}
                <div className="text-center mb-16">
                    <span
                        className="inline-block px-4 py-1.5 rounded-full uppercase tracking-tighter text-xs font-black mb-4"
                        style={{ backgroundColor: 'rgba(30, 58, 138, 0.1)', color: '#1E3A8A' }}
                    >
                        About Us
                    </span>
                    <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-4 inline-block relative">
                        About <span className="text-primary">LegalMatrix</span>
                        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-12 h-1 bg-gradient-to-r from-primary to-secondary rounded-full" />
                    </h2>
                    <p className="text-gray-500 max-w-xl mx-auto text-lg font-medium mt-6">
                        Your trusted partner in co-operative housing legal compliance
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-20 items-center animate-fade-in-up">
                    {/* Left: Text */}
                    <div className="space-y-8">
                        <div>
                            <p className="text-gray-800 text-xl sm:text-2xl leading-relaxed font-semibold mb-8">
                                <span className="text-primary font-black border-b-4 border-secondary pb-1">LegalMatrix</span> provides tailored legal solutions for cooperative housing societies, ensuring absolute compliance.
                            </p>
                            <p className="text-gray-600 leading-relaxed text-lg sm:text-xl font-medium">
                                Our team of experienced legal professionals, chartered accountants, and compliance specialists work together to deliver comprehensive solutions that simplify the complex legal landscape for housing societies across Maharashtra.
                            </p>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-4">
                            {highlights.map((item) => (
                                <div key={item} className="flex items-center gap-3 p-4 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all">
                                    <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                                        <CheckCircle className="w-5 h-5 text-accent" />
                                    </div>
                                    <span className="text-gray-700 font-bold text-sm tracking-tight">{item}</span>
                                </div>
                            ))}
                        </div>

                        <div className="flex flex-wrap gap-5 pt-4">
                            <a
                                href="/services"
                                className="px-10 py-5 bg-primary text-white font-black rounded-full text-base hover:shadow-2xl hover:shadow-blue-900/40 hover:-translate-y-1 transition-all"
                            >
                                Explore Services
                            </a>
                            <a
                                href="/contact"
                                className="px-10 py-5 border-2 border-primary text-primary font-black rounded-full text-base hover:bg-primary hover:text-white transition-all shadow-lg"
                            >
                                Get in Touch
                            </a>
                        </div>
                    </div>

                    {/* Right: Visual */}
                    <div className="relative group">
                        {/* Decorative background glow */}
                        <div className="absolute -inset-10 bg-primary/5 blur-[100px] rounded-full group-hover:bg-primary/10 transition-all duration-700 pointer-events-none" />

                        <div className="relative rounded-[3.5rem] overflow-hidden shadow-2xl border border-white/50 card-shine"
                            style={{
                                background: 'linear-gradient(135deg, #1E3A8A 0%, #172554 100%)',
                                minHeight: '550px',
                            }}
                        >
                            {/* Decorative grid */}
                            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#fff 0.5px, transparent 0.5px)', backgroundSize: '24px 24px' }} />

                            <div className="absolute inset-0 flex items-center justify-center p-12">
                                <div className="text-center text-white">
                                    <div className="text-9xl mb-8 filter drop-shadow-[0_20px_50px_rgba(245,158,11,0.3)] animate-pulse">⚖️</div>
                                    <h3 className="text-4xl font-black mb-6 tracking-tighter">Our Core Vision</h3>
                                    <p className="text-white/70 text-lg leading-relaxed max-w-xs mx-auto font-medium">
                                        Empowering cooperative housing societies with strict legal compliance, absolute transparency, and mutual trust.
                                    </p>
                                </div>
                            </div>

                            {/* Floating decorative items */}
                            <div className="absolute top-10 right-10 w-40 h-40 bg-secondary/20 rounded-full blur-3xl animate-pulse" />
                            <div className="absolute bottom-10 left-10 w-32 h-32 bg-accent/20 rounded-full blur-3xl animate-pulse" />
                        </div>

                        {/* Floating Stats Card */}
                        <div className="absolute -bottom-10 right-0 sm:-right-6 bg-white rounded-[2.5rem] p-10 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.2)] border border-gray-100 flex gap-10 hover-lift">
                            <div className="text-center">
                                <p className="text-4xl font-black text-primary tracking-tighter">1K+</p>
                                <p className="text-[10px] text-gray-400 font-black uppercase tracking-widest mt-2">Societies</p>
                            </div>
                            <div className="w-px bg-gray-100" />
                            <div className="text-center">
                                <p className="text-4xl font-black text-secondary tracking-tighter">15+</p>
                                <p className="text-[10px] text-gray-400 font-black uppercase tracking-widest mt-2">Experts</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
