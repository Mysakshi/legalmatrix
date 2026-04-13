'use client';

import { ChevronRight, Home } from 'lucide-react';
import Link from 'next/link';

export default function PageHero({ title, subtitle, breadcrumb = [] }) {
    return (
        <section
            className="relative pt-32 pb-16 overflow-hidden"
            style={{
                background: 'linear-gradient(135deg, #0f172a 0%, #1E3A8A 100%)',
            }}
        >
            {/* Decorative Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div
                    className="absolute -top-24 -right-24 w-96 h-96 rounded-full opacity-20 blur-[100px]"
                    style={{ background: 'var(--secondary)' }}
                />
                <div
                    className="absolute bottom-0 -left-24 w-80 h-80 rounded-full opacity-10 blur-[80px]"
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
                    <nav className="flex items-center gap-2 mb-6 bg-white/5 border border-white/10 px-4 py-2 rounded-full backdrop-blur-md">
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
                    </nav>

                    {/* Title */}
                    <h1 className="text-4xl sm:text-6xl font-black text-white mb-4 tracking-tight leading-tight">
                        {title.split(' ').map((word, i) => (
                            <span key={i} className={i === title.split(' ').length - 1 ? 'text-secondary' : ''}>
                                {word}{' '}
                            </span>
                        ))}
                    </h1>

                    <div className="w-16 h-1 bg-secondary rounded-full mb-6" />

                    <p className="text-lg text-white/70 max-w-2xl font-medium leading-relaxed">
                        {subtitle}
                    </p>
                </div>
            </div>
        </section>
    );
}
