'use client';

import { motion } from 'framer-motion';

const specializedGroups = [
    {
        title: 'Formation & Handover',
        icon: '🏗️',
        color: '#1E3A8A',
        items: [
            'Formation of CHS',
            'Society Handover',
            'DDR Office',
            'Society Maintenance',
        ],
    },
    {
        title: 'Compliance & Audit',
        icon: '📋',
        color: '#F59E0B',
        items: [
            'Society Legal Monthly Compliance',
            'Defaulter Management',
            'Audit Services',
            'Society Conveyance',
        ],
    },
    {
        title: 'Redevelopment & Legal',
        icon: '⚖️',
        color: '#10B981',
        items: [
            'Society Redevelopment',
            'Demarcation',
            'Name Change',
            'NCLT Services',
        ],
    },
];

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
};

const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

export default function SpecializedServices() {
    return (
        <section
            id="specialized"
            className="section-padding scroll-mt-20 overflow-hidden"
            style={{ backgroundColor: '#ffffff' }}
        >
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <span
                        className="inline-block px-4 py-1.5 rounded-full uppercase tracking-tighter text-xs font-black mb-4"
                        style={{ backgroundColor: 'rgba(16, 185, 129, 0.1)', color: '#059669' }}
                    >
                        Specialized Solutions
                    </span>
                    <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-4 inline-block relative tracking-ultra-tight text-balance">
                        Strategic <span className="text-secondary">Consulting</span>
                        <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: "3.5rem" }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5, duration: 0.8 }}
                            className="absolute -bottom-2 left-1/2 -translate-x-1/2 h-1.5 bg-gradient-to-r from-primary to-secondary rounded-full"
                        />
                    </h2>
                    <p className="text-gray-500 max-w-xl mx-auto mt-6 text-lg font-medium text-balance">
                        Focused expertise for critical society management and redevelopment transitions
                    </p>
                </motion.div>

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid md:grid-cols-3 gap-8"
                >
                    {specializedGroups.map((group, i) => (
                        <motion.div
                            key={group.title}
                            variants={item}
                            whileHover={{ y: -10 }}
                            className="group relative glass-card-light rounded-3xl overflow-hidden shadow-md border border-white/50 hover:shadow-2xl transition-all duration-400 card-shine"
                        >
                            {/* Decorative background glow per card */}
                            <div
                                className="absolute -top-10 -right-10 w-32 h-32 blur-3xl rounded-full opacity-10 group-hover:opacity-20 transition-opacity"
                                style={{ background: group.color }}
                            />

                            {/* Top gradient header */}
                            <div
                                className="px-6 pt-8 pb-6 border-b border-gray-100"
                                style={{ background: `linear-gradient(135deg, ${group.color}11, transparent)` }}
                            >
                                <motion.div
                                    whileHover={{ scale: 1.1, rotate: 5 }}
                                    className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-4 shadow-sm relative z-10"
                                    style={{ background: group.color }}
                                >
                                    <span>{group.icon}</span>
                                </motion.div>
                                <h3
                                    className="text-xl font-black tracking-tight"
                                    style={{ color: group.color }}
                                >
                                    {group.title}
                                </h3>
                            </div>

                            {/* Items */}
                            <div className="px-6 pb-8 pt-6 space-y-4">
                                {group.items.map((item, idx) => (
                                    <div key={item} className="flex items-center gap-3 group/item">
                                        <motion.div
                                            initial={{ scale: 0 }}
                                            whileInView={{ scale: 1 }}
                                            transition={{ delay: 0.5 + (idx * 0.1) }}
                                            className="w-2 h-2 rounded-full flex-shrink-0 transition-transform duration-200 group-hover/item:scale-150"
                                            style={{ background: group.color }}
                                        />
                                        <span className="text-gray-700 text-sm font-bold group-hover/item:text-primary transition-colors tracking-tight uppercase tracking-widest text-[11px]">{item}</span>
                                    </div>
                                ))}
                            </div>

                            {/* Bottom accent */}
                            <div
                                className="absolute bottom-0 left-0 right-0 h-1.5 opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                                style={{ background: `linear-gradient(90deg, ${group.color}, transparent)` }}
                            />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
