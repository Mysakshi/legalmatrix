'use client';

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

export default function SpecializedServices() {
    return (
        <section
            id="specialized"
            className="section-padding scroll-mt-20"
            style={{ backgroundColor: '#ffffff' }}
        >
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <span
                        className="inline-block px-4 py-1.5 rounded-full uppercase tracking-tighter text-xs font-black mb-4"
                        style={{ backgroundColor: 'rgba(16, 185, 129, 0.1)', color: '#059669' }}
                    >
                        Specialized Solutions
                    </span>
                    <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-4 inline-block relative">
                        Strategic <span className="text-secondary">Consulting</span>
                        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-12 h-1 bg-gradient-to-r from-primary to-secondary rounded-full" />
                    </h2>
                    <p className="text-gray-500 max-w-xl mx-auto mt-6 text-lg font-medium">
                        Focused expertise for critical society management and redevelopment transitions
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {specializedGroups.map((group, i) => (
                        <div
                            key={group.title}
                            className="group relative bg-white rounded-3xl overflow-hidden shadow-md border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-400 card-shine"
                        >
                            {/* Top gradient header */}
                            <div
                                className="px-6 pt-8 pb-6"
                                style={{ background: `linear-gradient(135deg, ${group.color}22, ${group.color}08)` }}
                            >
                                <div
                                    className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-4 transition-transform duration-300 group-hover:scale-110 shadow-sm"
                                    style={{ background: group.color }}
                                >
                                    <span>{group.icon}</span>
                                </div>
                                <h3
                                    className="text-lg font-black tracking-tight"
                                    style={{ color: group.color }}
                                >
                                    {group.title}
                                </h3>
                            </div>

                            {/* Items */}
                            <div className="px-6 pb-8 space-y-4">
                                {group.items.map((item) => (
                                    <div key={item} className="flex items-center gap-3 group/item">
                                        <div
                                            className="w-1.5 h-1.5 rounded-full flex-shrink-0 transition-transform duration-200 group-hover/item:scale-150"
                                            style={{ background: group.color }}
                                        />
                                        <span className="text-gray-600 text-[13px] font-black group-hover/item:text-gray-900 transition-colors uppercase tracking-tight">{item}</span>
                                    </div>
                                ))}
                            </div>

                            {/* Bottom accent */}
                            <div
                                className="absolute bottom-0 left-0 right-0 h-1 opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                                style={{ background: `linear-gradient(90deg, ${group.color}, transparent)` }}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
