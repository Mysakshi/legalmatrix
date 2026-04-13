'use client';

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

export default function Principles() {
    return (
        <section id="principles" className="section-padding bg-white scroll-mt-20">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <span
                        className="inline-block px-4 py-1.5 rounded-full uppercase tracking-tighter text-xs font-black mb-4"
                        style={{ backgroundColor: 'rgba(245, 158, 11, 0.1)', color: '#d97706' }}
                    >
                        Our Core Values
                    </span>
                    <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-4 inline-block relative">
                        Our <span className="text-primary">Principles</span>
                        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-12 h-1 bg-gradient-to-r from-primary to-secondary rounded-full" />
                    </h2>
                    <p className="text-gray-500 max-w-xl mx-auto mt-6 text-lg font-medium">
                        The foundation of trust and excellence that guides everything we do
                    </p>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
                    {principles.map((p, i) => (
                        <div
                            key={p.title}
                            className="group relative bg-white rounded-2xl p-6 border border-gray-100 hover-lift card-shine cursor-default"
                            style={{ animationDelay: `${i * 100}ms` }}
                        >
                            {/* Top accent bar */}
                            <div
                                className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl transition-all duration-300 group-hover:h-1.5"
                                style={{ background: p.color }}
                            />

                            {/* Icon */}
                            <div
                                className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-5 mt-3 transition-transform duration-300 group-hover:scale-110"
                                style={{ background: `${p.color}18` }}
                            >
                                {p.icon}
                            </div>

                            <h3
                                className="text-base font-black mb-3 transition-colors duration-200"
                                style={{ color: p.color }}
                            >
                                {p.title}
                            </h3>
                            <p className="text-gray-600 text-[13px] leading-relaxed font-medium">{p.description}</p>

                            {/* Bottom dot indicator */}
                            <div
                                className="absolute bottom-4 right-4 w-2 h-2 rounded-full opacity-40 group-hover:opacity-100 transition-opacity duration-300"
                                style={{ background: p.color }}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
