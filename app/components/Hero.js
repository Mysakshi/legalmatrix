'use client';

import { ArrowRight, Phone, Mail, Scale } from 'lucide-react';

export default function Hero() {
    return (
        <section
            id="hero"
            className="relative min-h-screen flex items-center justify-center overflow-hidden"
            style={{
                backgroundColor: '#1E3A8A',
                background: 'linear-gradient(135deg, #0f172a 0%, #1E3A8A 50%, #1e40af 100%)',
            }}
        >
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div
                    className="absolute -top-24 -right-24 w-96 h-96 rounded-full opacity-20"
                    style={{ background: 'radial-gradient(circle, var(--secondary), transparent 70%)' }}
                />
                <div
                    className="absolute bottom-0 -left-24 w-80 h-80 rounded-full opacity-10"
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

            <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20 grid lg:grid-cols-2 gap-16 items-center">
                {/* Left Content */}
                <div className="flex flex-col items-start">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-2 mb-8 backdrop-blur-sm">
                        <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
                        <span className="text-sm font-semibold text-white/90">Expert Housing Society Consultants</span>
                    </div>

                    {/* Logo / Brand */}
                    <div className="mb-6">
                        <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.9]">
                            <span className="text-white block">LEGAL</span>
                            <span className="text-secondary block">MATRIX</span>
                        </h1>
                    </div>

                    {/* Tagline */}
                    <p className="text-2xl sm:text-3xl font-light text-white/90 mb-6 leading-tight">
                        Your Partner in <span className="text-secondary font-bold">Co-Operative Housing</span> Success
                    </p>

                    <p className="text-lg text-white/70 mb-10 max-w-lg leading-relaxed font-medium">
                        End-to-end legal advisory and compliance support for housing societies, ensuring transparency and legal peace of mind.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-wrap gap-5 mb-16">
                        <a
                            href="#services"
                            className="group flex items-center gap-2 px-10 py-5 bg-secondary hover:bg-secondary-dark text-primary-dark font-black rounded-full transition-all duration-300 hover:shadow-2xl hover:shadow-amber-500/40 hover:-translate-y-1 text-base"
                        >
                            Our Services
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                        </a>
                        <a
                            href="#contact"
                            className="px-10 py-5 bg-white/10 hover:bg-white/20 text-white font-bold rounded-full border border-white/30 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 text-base"
                        >
                            Contact Us
                        </a>
                    </div>

                    {/* Stats */}
                    <div className="flex flex-wrap gap-12 border-t border-white/10 pt-10">
                        {[
                            { value: '6+', label: 'Firms' },
                            { value: '15+', label: 'Specialists' },
                            { value: '1000+', label: 'Societies' },
                        ].map((stat) => (
                            <div key={stat.label}>
                                <p className="text-4xl font-black text-secondary">{stat.value}</p>
                                <p className="text-xs text-white/50 font-bold uppercase tracking-widest mt-1">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right: Floating Premium Card */}
                <div className="hidden lg:flex justify-end relative">
                    {/* Decorative glow */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-secondary/20 blur-[100px] rounded-full" />

                    <div className="relative">
                        <div
                            className="w-[400px] rounded-[2.5rem] p-10 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] border border-white/20 overflow-hidden relative"
                            style={{
                                background: 'rgba(255,255,255,0.05)',
                                backdropFilter: 'blur(30px)',
                            }}
                        >
                            <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/10 rounded-full blur-3xl -mr-16 -mt-16" />

                            <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-secondary to-secondary-dark flex items-center justify-center mb-8 shadow-2xl relative z-10">
                                <Scale className="w-10 h-10 text-primary-dark" />
                            </div>

                            <h3 className="text-white text-3xl font-black mb-4 tracking-tight leading-tight">Legal Excellence at Scale</h3>
                            <p className="text-white/70 text-base leading-relaxed mb-8">
                                Specialist management and legal solutions tailored specifically for the housing community.
                            </p>

                            <div className="space-y-4">
                                {[
                                    'Full MCS Act Compliance',
                                    'Society Formation Support',
                                    'Dispute Resolution Experts',
                                    'Annual Return Filing',
                                ].map((item) => (
                                    <div key={item} className="flex items-center gap-4 group">
                                        <div className="w-2 h-2 rounded-full bg-accent group-hover:scale-125 transition-transform shadow-[0_0_8px_var(--color-accent)]" />
                                        <span className="text-white/80 text-sm font-semibold">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Floating Interaction Points */}
                        <div className="absolute -top-6 -right-6 bg-white rounded-2xl px-6 py-4 shadow-2xl flex items-center gap-3 border border-gray-100 animate-bounce duration-slow">
                            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                                <Phone className="w-5 h-5 text-primary" />
                            </div>
                            <div>
                                <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Call Now</p>
                                <p className="text-sm font-black text-primary">7377033000</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
                <div className="w-[1px] h-12 bg-gradient-to-b from-transparent via-white/50 to-transparent" />
                <span className="text-white/30 text-[10px] font-bold uppercase tracking-[0.2em]">Scroll</span>
            </div>
        </section>
    );
}
