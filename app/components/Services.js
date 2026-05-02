'use client';

import { motion } from 'framer-motion';

const legalServices = [
    { icon: '📝', title: 'Guidance for MC Meetings Notice & Minutes' },
    { icon: '🏛️', title: 'Preparation of AGM/SGM Notice & Minutes' },
    { icon: '📄', title: 'Issuing Member NOCs (Loans, MSEB, PMC)' },
    { icon: '⚠️', title: 'Defaulter Management & Legal Notices' },
    { icon: '✉️', title: 'Drafting Replies to Complaint Letters' },
    { icon: '📜', title: 'Drafting Vendor & Staff Agreements' },
    { icon: '⚖️', title: 'Flat Transfer Verification & NOC Issue' },
    { icon: '🔄', title: 'Register I & Share Certificate Updates' },
    { icon: '🔑', title: 'Leave & License Record Maintenance' },
    { icon: '🌐', title: 'Filing Govt. Portal Mandatory Returns' },
];

const auditServices = [
    { icon: '📊', title: 'Monthly Accounting Services' },
    { icon: '🧾', title: 'TDS Services (Payment & Filing)' },
    { icon: '💰', title: 'GST Services (GSTR-3B & GSTR-1)' },
    { icon: '📥', title: 'Income Tax Return Filing' },
    { icon: '🌐', title: 'Filing Statutory Online Returns' },
    { icon: '🔍', title: 'Society August Statutory Audit' },
    { icon: '🔧', title: 'Rectification Audit Reporting' },
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

function ServiceCard({ icon, title, color = 'var(--primary)' }) {
    return (
        <motion.div
            variants={item}
            whileHover={{ y: -8, scale: 1.02 }}
            className="group flex items-center gap-4 bg-white rounded-3xl p-5 border border-gray-100 shadow-sm hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 cursor-default relative overflow-hidden card-shine"
        >
            <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full -mr-12 -mt-12 group-hover:bg-primary/10 transition-colors duration-500 pointer-events-none" />
            <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center text-xl flex-shrink-0 transition-all duration-500 group-hover:rotate-6 shadow-sm shadow-black/5"
                style={{ backgroundColor: `${color}15`, border: `1px solid ${color}30` }}
            >
                {icon}
            </div>
            <span
                className="text-xs font-black text-gray-800 group-hover:text-primary leading-snug transition-colors duration-300 relative z-10"
            >
                {title}
            </span>
        </motion.div>
    );
}

function SectionHeader({ badge, title, highlight, subtitle, badgeStyle = { backgroundColor: 'rgba(30, 58, 138, 0.1)', color: '#1E3A8A' } }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
        >
            <span
                className="inline-block px-4 py-1.5 rounded-full uppercase tracking-tighter text-[10px] font-black mb-4"
                style={badgeStyle}
            >
                {badge}
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-px font-black text-gray-900 mb-6 inline-block relative tracking-tight">
                {title} <span className="text-primary">{highlight}</span>
                <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "5rem" }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 1 }}
                    className="absolute -bottom-3 left-1/2 -translate-x-1/2 h-1.5 bg-secondary rounded-full"
                />
            </h2>
            {subtitle && <p className="text-gray-500 max-w-2xl mx-auto mt-8 text-lg font-medium leading-relaxed">{subtitle}</p>}
        </motion.div>
    );
}

export default function Services() {
    return (
        <>
            {/* Legal Services */}
            <section
                id="services"
                className="section-padding scroll-mt-20 overflow-hidden relative"
                style={{ backgroundColor: '#ffffff' }}
            >
                <div className="absolute inset-0 z-0">
                    <img
                        src="/images/12.jpg"
                        alt="Background Asset"
                        className="w-full h-full object-cover opacity-[0.05] grayscale"
                    />
                    <div className="absolute inset-0 bg-white/60" />
                </div>
                <div className="absolute inset-0 bg-pattern-dots opacity-[0.2] pointer-events-none" />
                <div className="absolute inset-0 bg-mesh-gradient opacity-[0.3] pointer-events-none" />

                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <SectionHeader
                        badge="Legal Services"
                        title="Comprehensive"
                        highlight="Legal Solutions"
                        subtitle="Full-spectrum legal support and documentation handling for cooperative housing societies"
                    />

                    <motion.div
                        variants={container}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, margin: "-100px" }}
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
                    >
                        {legalServices.map((s) => (
                            <ServiceCard key={s.title} icon={s.icon} title={s.title} />
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Account & Audit Services */}
            <section id="audit" className="section-padding bg-white scroll-mt-20 overflow-hidden relative">
                <div className="absolute inset-0 z-0">
                    <img
                        src="/images/11.jpg"
                        alt="Background Asset"
                        className="w-full h-full object-cover opacity-[0.03] grayscale brightness-125"
                    />
                </div>
                <div className="absolute inset-0 bg-pattern-dots opacity-[0.2] pointer-events-none" />

                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <SectionHeader
                        badge="Finance & Compliance"
                        title="Audit &"
                        highlight="Financial Tracking"
                        subtitle="Professional financial compliance, tax filing, and auditing services to maintain absolute transparency"
                        badgeStyle={{ backgroundColor: 'rgba(245, 158, 11, 0.1)', color: '#d97706' }}
                    />
                    <motion.div
                        variants={container}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, margin: "-100px" }}
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 justify-center"
                    >
                        {auditServices.map((s) => (
                            <ServiceCard key={s.title} icon={s.icon} title={s.title} color="#F59E0B" />
                        ))}
                    </motion.div>
                </div>
            </section>
        </>
    );
}
