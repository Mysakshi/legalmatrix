'use client';

import { Building2 } from 'lucide-react';

const firms = [
    {
        name: 'Legalmatrix Solution Pvt Ltd',
        type: 'Private Limited',
        icon: '🏢',
        color: '#F59E0B',
    },
    {
        name: 'Legalmatrix Law Solutions',
        type: 'Legal Advisory',
        icon: '⚖️',
        color: '#10B981',
    },
    {
        name: 'Legalmatrix Redevelopment LLP',
        type: 'LLP',
        icon: '🏗️',
        color: '#F59E0B',
    },
    {
        name: 'Legalmatrix Law LLP',
        type: 'LLP',
        icon: '📜',
        color: '#10B981',
    },
    {
        name: 'Legalmatrix Law Firm',
        type: 'Law Firm',
        icon: '🏛️',
        color: '#F59E0B',
    },
    {
        name: 'First Property Management LLP',
        type: 'Property Management',
        icon: '🔑',
        color: '#10B981',
    },
];

export default function Firms() {
    return (
        <section
            id="firms"
            className="section-padding scroll-mt-20"
            style={{
                backgroundColor: '#0f172a',
                background: 'linear-gradient(135deg, #0f172a 0%, #1e3a8a 50%, #0f172a 100%)',
            }}
        >
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-20">
                    <span
                        className="inline-block px-4 py-1.5 rounded-full uppercase tracking-tighter text-xs font-black mb-4"
                        style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', color: '#ffffff' }}
                    >
                        Our Unified Network
                    </span>
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6 inline-block relative">
                        LegalMatrix <span className="text-secondary">Firms</span>
                        <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-20 h-1.5 bg-secondary rounded-full" />
                    </h2>
                    <p className="text-white/60 max-w-2xl mx-auto mt-8 text-xl font-medium leading-relaxed">
                        A robust ecosystem of specialized legal and management firms delivering integrated excellence.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {firms.map((firm, i) => (
                        <div
                            key={firm.name}
                            className="group relative rounded-[2.5rem] p-10 border border-white/10 hover:border-white/20 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.5)] cursor-default overflow-hidden"
                            style={{
                                background: 'rgba(255,255,255,0.03)',
                                backdropFilter: 'blur(20px)',
                            }}
                        >
                            {/* Decorative background circle */}
                            <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/5 rounded-full blur-3xl group-hover:bg-white/10 transition-colors" />

                            {/* Icon */}
                            <div
                                className="w-16 h-16 rounded-[1.25rem] flex items-center justify-center text-3xl mb-8 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 shadow-2xl relative z-10"
                                style={{
                                    backgroundColor: firm.color,
                                    boxShadow: `0 10px 30px -5px ${firm.color}66`,
                                }}
                            >
                                <span className="filter drop-shadow-lg">{firm.icon}</span>
                            </div>

                            {/* Content */}
                            <h3 className="text-white font-black text-xl mb-3 leading-[1.3] group-hover:text-secondary transition-colors duration-300 relative z-10">
                                {firm.name}
                            </h3>
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/10 relative z-10">
                                <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: firm.color }} />
                                <span className="text-[10px] font-black text-white/80 uppercase tracking-widest">
                                    {firm.type}
                                </span>
                            </div>

                            {/* Corner accent */}
                            <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-br from-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
