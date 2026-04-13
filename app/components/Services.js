'use client';

const legalServices = [
    { icon: '🏛️', title: 'Legal Compliance Services' },
    { icon: '📝', title: 'Society Formation Registration' },
    { icon: '🔄', title: 'Society Handover Compliances' },
    { icon: '🏢', title: 'Conversion of Apartment to Society' },
    { icon: '⚖️', title: 'Legal Advice & Guidance' },
    { icon: '🗳️', title: 'Committee Election Services' },
    { icon: '🤝', title: 'Dispute Resolution Management' },
    { icon: '📜', title: 'Conveyance Deed & Deemed Conveyance' },
    { icon: '🏗️', title: 'Redevelopment' },
    { icon: '🔑', title: 'Flat Transfer Compliances' },
    { icon: '📄', title: 'NOC / Notices' },
    { icon: '👥', title: 'Training to Managing Committee' },
];

const auditServices = [
    { icon: '📊', title: 'Account Writing' },
    { icon: '💰', title: 'Advance Maintenance Account' },
    { icon: '📅', title: 'Budget Maintenance' },
    { icon: '🧾', title: 'TDS Compliances' },
    { icon: '🔍', title: 'Statutory Audit' },
    { icon: '🔧', title: 'Rectification Audit' },
    { icon: '📋', title: 'Internal Audit' },
    { icon: '📥', title: 'Income Tax Filing' },
];

function ServiceCard({ icon, title, color = 'var(--primary)' }) {
    return (
        <div
            className="group flex items-center gap-5 bg-white rounded-3xl p-6 border border-gray-100 shadow-sm hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 hover:-translate-y-2 cursor-default relative overflow-hidden card-shine"
        >
            <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full -mr-12 -mt-12 group-hover:bg-primary/10 transition-colors duration-500 pointer-events-none" />
            <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0 transition-all duration-500 group-hover:scale-110 shadow-sm shadow-black/5"
                style={{ backgroundColor: `${color}15`, border: `1px solid ${color}30` }}
            >
                {icon}
            </div>
            <span
                className="text-sm font-black text-gray-800 group-hover:text-primary leading-tight transition-colors duration-300 relative z-10"
            >
                {title}
            </span>
        </div>
    );
}

function SectionHeader({ badge, title, highlight, subtitle, badgeStyle = { backgroundColor: 'rgba(30, 58, 138, 0.1)', color: '#1E3A8A' } }) {
    return (
        <div className="text-center mb-20 animate-fade-in-up">
            <span
                className="inline-block px-4 py-1.5 rounded-full uppercase tracking-tighter text-xs font-black mb-4"
                style={badgeStyle}
            >
                {badge}
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-px font-black text-gray-900 mb-6 inline-block relative tracking-tight">
                {title} <span className="text-primary">{highlight}</span>
                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-20 h-1.5 bg-secondary rounded-full" />
            </h2>
            {subtitle && <p className="text-gray-500 max-w-2xl mx-auto mt-8 text-xl font-medium leading-relaxed">{subtitle}</p>}
        </div>
    );
}

export default function Services() {
    return (
        <>
            {/* Legal Services */}
            <section
                id="services"
                className="section-padding scroll-mt-20 overflow-hidden"
                style={{ backgroundColor: '#F8FAFC' }}
            >
                <div className="max-w-7xl mx-auto px-6 relative">
                    <SectionHeader
                        badge="Legal Services"
                        title="Our"
                        highlight="Legal Excellence"
                        subtitle="Comprehensive legal support for Maharashtra's housing societies since 2010"
                    />

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
                        {legalServices.map((s) => (
                            <ServiceCard key={s.title} icon={s.icon} title={s.title} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Account & Audit Services */}
            <section id="audit" className="section-padding bg-white scroll-mt-20 overflow-hidden">
                <div className="max-w-7xl mx-auto px-6">
                    <SectionHeader
                        badge="Finance & Audit"
                        title="Account &"
                        highlight="Audit Services"
                        subtitle="Professional financial and audit services tailored for society excellence"
                        badgeStyle={{ backgroundColor: 'rgba(245, 158, 11, 0.1)', color: '#d97706' }}
                    />
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
                        {auditServices.map((s) => (
                            <ServiceCard key={s.title} icon={s.icon} title={s.title} color="#F59E0B" />
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
