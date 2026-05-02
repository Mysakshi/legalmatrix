'use client';

import { motion } from 'framer-motion';

const principles = [
    {
        icon: '⚖️',
        title: 'Ethical Practice',
        description: 'We uphold the highest ethical standards in all legal proceedings and client interactions.',
        color: '#1E3A8A',
    },
    {
        icon: '🤝',
        title: 'Mutual Trust & Honesty',
        description: 'Building long-term relationships through transparency, honesty and unwavering integrity.',
        color: '#F59E0B',
    },
    {
        icon: '👥',
        title: 'Customer Centric',
        description: 'Every solution is tailored to the unique needs of each housing society we serve.',
        color: '#10B981',
    },
    {
        icon: '📋',
        title: 'Quality Legal & Accounts',
        description: 'Delivering superior quality in both legal advisory and financial accounting services.',
        color: '#8B5CF6',
    },
    {
        icon: '🏛️',
        title: 'Principle of Our Practice',
        description: 'Driven by a commitment to excellence, compliance, and the welfare of housing communities.',
        color: '#EC4899',
    },
];

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function Principles() {
    return (
        <section id="principles" className="pt-10 pb-24 px-6 bg-white scroll-mt-20 overflow-hidden">
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
                        style={{ backgroundColor: 'rgba(245, 158, 11, 0.1)', color: '#d97706' }}
                    >
                        Our Core Values
                    </span>
                    <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-4 inline-block relative">
                        Our <span className="text-primary">Principles</span>
                        <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: "3rem" }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5, duration: 0.8 }}
                            className="absolute -bottom-2 left-1/2 -translate-x-1/2 h-1 bg-gradient-to-r from-primary to-secondary rounded-full"
                        />
                    </h2>
                    <p className="text-gray-500 max-w-xl mx-auto mt-6 text-lg font-medium">
                        The foundation of trust and excellence that guides everything we do
                    </p>
                </motion.div>

                {/* Cards */}
                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6"
                >
                    {principles.map((p, i) => (
                        <motion.div
                            key={p.title}
                            variants={item}
                            whileHover={{ y: -10, scale: 1.02 }}
                            className="group relative bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 cursor-default"
                        >
                            {/* Top accent bar */}
                            <div
                                className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl transition-all duration-300 group-hover:h-1.5"
                                style={{ background: p.color }}
                            />

                            {/* Icon */}
                            <motion.div
                                whileHover={{ rotate: 360 }}
                                transition={{ duration: 0.8 }}
                                className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-5 mt-3 transition-transform duration-300"
                                style={{ background: `${p.color}18` }}
                            >
                                {p.icon}
                            </motion.div>

                            <h3
                                className="text-base font-black mb-3 transition-colors duration-200"
                                style={{ color: p.color }}
                            >
                                {p.title}
                            </h3>
                            <p className="text-gray-600 text-[13px] leading-relaxed font-medium">{p.description}</p>

                            {/* Bottom dot indicator */}
                            <motion.div
                                animate={{ opacity: [0.4, 1, 0.4] }}
                                transition={{ duration: 2, repeat: Infinity }}
                                className="absolute bottom-4 right-4 w-2 h-2 rounded-full"
                                style={{ background: p.color }}
                            />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
