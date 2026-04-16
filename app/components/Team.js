'use client';

import { useState } from 'react';
import {
    Users,
    Scale,
    Calculator,
    Briefcase,
    Shield,
    Crown,
    Mail,
    Phone,
    Globe,
    ChevronRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const teamGroups = [
    {
        id: 'directors',
        title: 'Founder & Directors',
        color: '#1E3A8A',
        icon: <Crown className="w-5 h-5" />,
        members: [
            { name: 'Adv. Mahesh Kakade', role: 'Founder Director', bio: 'Expert legal strategist with over 20 years of experience.' },
            { name: 'Mr. Sachin Jadhav', role: 'Director', bio: 'Driving operational excellence and strategic growth.' },
            { name: 'Adv. Rupali Kakade', role: 'Director', bio: 'Specializing in complex society legal frameworks.' },
        ],
    },
    {
        id: 'legal',
        title: 'Legal Advisory',
        color: '#F59E0B',
        icon: <Scale className="w-5 h-5" />,
        members: [
            { name: 'Adv. Durga Jadhav', role: 'Legal Advisor', bio: 'Ensuring meticulous compliance with MCS Act.' },
            { name: 'Adv. Rupali Hinge', role: 'Legal Advisor', bio: 'Dedicated to resolving society-level disputes.' },
            { name: 'Ms. Seema Gadekar', role: 'Legal Executive', bio: 'Specialist in society formation and documentation.' },
        ],
    },
    {
        id: 'accounts',
        title: 'Accounts & Audit',
        color: '#10B981',
        icon: <Calculator className="w-5 h-5" />,
        members: [
            { name: 'Mrs. Leena Londhe', role: 'Senior Accountant', bio: 'Managing complex financial audits and taxations.' },
            { name: 'Mr. Manish Sarde', role: 'Accountant', bio: 'Expert in society accounting and budget planning.' },
            { name: 'Mr. Ravi Bhosale', role: 'Accountant', bio: 'Maintaining accurate financial records for societies.' },
        ],
    },
    {
        id: 'operations',
        title: 'Business Operations',
        color: '#8B5CF6',
        icon: <Briefcase className="w-5 h-5" />,
        members: [
            { name: 'Mr. Harshal Kulkarni', role: 'Business Manager', bio: 'Strategic lead for society management solutions.' },
            { name: 'Mr. Swati Balshankar', role: 'Business Executive', bio: 'Ensuring seamless client relationship management.' },
        ],
    },
    {
        id: 'insurance',
        title: 'Insurance Services',
        color: '#EC4899',
        icon: <Shield className="w-5 h-5" />,
        members: [
            { name: 'Mr. Vipul Tambe', role: 'Insurance Advisor', bio: 'Protecting society assets with tailored coverage.' },
            { name: 'Mrs. Kalpana Tambe', role: 'Insurance Executive', bio: 'Expertise in society hazard and liability insurance.' },
        ],
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
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    show: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

function MemberCard({ name, role, color, bio }) {
    const initials = name
        .split(' ')
        .filter(n => !n.includes('.'))
        .map(n => n[0])
        .slice(0, 2)
        .join('');

    return (
        <motion.div
            variants={item}
            whileHover={{ y: -10 }}
            className="group relative glass-card-light rounded-[2.5rem] p-8 border border-white/50 shadow-xl hover:shadow-2xl transition-all duration-500 card-shine"
        >
            <div
                className="absolute top-0 right-0 w-32 h-32 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity pointer-events-none rounded-tr-[2.5rem]"
                style={{ background: `radial-gradient(circle at top right, ${color}, transparent)` }}
            />

            <div className="flex flex-col items-center text-center">
                <div className="relative mb-8">
                    <motion.div
                        animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.3, 0.1] }}
                        transition={{ duration: 3, repeat: Infinity }}
                        className="absolute inset-0 bg-primary/20 rounded-[2rem] blur-2xl"
                    />
                    <motion.div
                        whileHover={{ rotate: [0, 5, -5, 0] }}
                        className="relative w-28 h-28 rounded-[2rem] flex items-center justify-center text-3xl font-black text-white shadow-2xl overflow-hidden"
                        style={{ background: `linear-gradient(135deg, ${color}, var(--primary))` }}
                    >
                        {initials || 'LM'}
                        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] bg-[size:12px_12px]" />
                    </motion.div>
                </div>

                <h4 className="text-2xl font-black text-gray-900 mb-2 group-hover:text-primary transition-colors tracking-ultra-tight uppercase">
                    {name}
                </h4>
                <div className="mb-6">
                    <span
                        className="px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-ultra-widest"
                        style={{ backgroundColor: `${color}15`, color: color }}
                    >
                        {role}
                    </span>
                </div>

                <p className="text-gray-500 font-bold leading-relaxed mb-8 italic text-sm text-balance">
                    "{bio}"
                </p>

                <div className="flex gap-4 mt-auto">
                    {[Mail, Phone, Globe].map((Icon, idx) => (
                        <motion.button
                            key={idx}
                            whileHover={{ y: -3, scale: 1.1, backgroundColor: color, color: 'white', borderColor: color }}
                            className="w-11 h-11 rounded-2xl bg-white border border-gray-100 flex items-center justify-center text-gray-400 shadow-sm transition-all duration-300"
                        >
                            <Icon className="w-4 h-4" />
                        </motion.button>
                    ))}
                </div>
            </div>
        </motion.div>
    );
}

export default function Team() {
    const [activeTab, setActiveTab] = useState(teamGroups[0].id);
    const activeGroup = teamGroups.find(g => g.id === activeTab);

    return (
        <section
            id="team"
            className="section-padding scroll-mt-20 overflow-hidden relative"
            style={{ backgroundColor: '#ffffff' }}
        >
            {/* Background Texture & Image */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/images/11.jpg"
                    alt="Corporate Foundation"
                    className="w-full h-full object-cover opacity-[0.04] grayscale"
                />
            </div>
            <div className="absolute inset-0 bg-pattern-dots opacity-[0.4] pointer-events-none" />
            <div className="absolute inset-0 bg-mesh-gradient opacity-[0.5] pointer-events-none" />

            <div className="max-w-7xl mx-auto relative px-4 sm:px-6 z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <div
                        className="inline-flex items-center gap-2 px-5 py-2 rounded-full uppercase tracking-tighter text-[10px] font-black mb-6 shadow-xl border border-gray-100 bg-white"
                        style={{ color: '#1E3A8A' }}
                    >
                        <Users className="w-3.5 h-3.5 text-secondary" />
                        Our Executive Leadership
                    </div>
                    <h2 className="text-5xl sm:text-7xl font-black text-gray-900 mb-8 tracking-ultra-tight text-balance">
                        LegalMatrix <span className="text-primary">Powerhouse</span>
                    </h2>
                    <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "8rem" }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5, duration: 1 }}
                        className="h-2 bg-secondary mx-auto rounded-full mb-8 shadow-lg shadow-secondary/20"
                    />
                    <p className="text-gray-500 max-w-2xl mx-auto text-xl font-medium leading-relaxed text-balance">
                        A dedicated collective of legal experts, accountants, and strategic consultants
                        at the peak of their professional expertise.
                    </p>
                </motion.div>

                {/* Tab Navigation */}
                <div className="flex flex-wrap justify-center gap-3 mb-20 bg-gray-100/50 p-2 rounded-[2.5rem] backdrop-blur-sm border border-gray-200/50 max-w-4xl mx-auto shadow-inner">
                    {teamGroups.map((group) => (
                        <button
                            key={group.id}
                            onClick={() => setActiveTab(group.id)}
                            className={`relative px-6 py-4 rounded-3xl text-xs font-black uppercase tracking-widest transition-all duration-500 overflow-hidden ${activeTab === group.id ? 'text-white' : 'text-gray-500 hover:text-gray-900'
                                }`}
                        >
                            {activeTab === group.id && (
                                <motion.div
                                    layoutId="activeTab"
                                    className="absolute inset-0 shadow-2xl"
                                    style={{ background: `linear-gradient(135deg, ${group.color}, var(--primary))` }}
                                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                />
                            )}
                            <span className="relative z-10 flex items-center gap-2">
                                {activeTab === group.id ? group.icon : <span className="opacity-50">{group.icon}</span>}
                                {group.title}
                            </span>
                        </button>
                    ))}
                </div>

                {/* Team Content */}
                <div className="relative min-h-[600px]">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.5 }}
                        >
                            <div className="flex items-center gap-6 mb-12">
                                <h3
                                    className="text-3xl font-black uppercase tracking-tight"
                                    style={{ color: activeGroup.color }}
                                >
                                    {activeGroup.title}
                                </h3>
                                <div className="h-1 flex-grow bg-gradient-to-r from-gray-200 to-transparent rounded-full" />
                            </div>

                            <motion.div
                                variants={container}
                                initial="hidden"
                                animate="show"
                                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                            >
                                {activeGroup.members.map((member) => (
                                    <MemberCard key={member.name} {...member} color={activeGroup.color} />
                                ))}
                            </motion.div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mt-32 p-16 rounded-[4rem] bg-primary text-white text-center relative overflow-hidden group shadow-[0_50px_100px_-20px_rgba(30,58,138,0.4)]"
                >
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,var(--secondary),transparent)] opacity-20 group-hover:opacity-40 transition-opacity duration-1000" />
                    <div className="relative z-10">
                        <h3 className="text-4xl font-black mb-6 uppercase tracking-tight">Expert Advisory Awaits</h3>
                        <p className="text-primary-light text-xl mb-12 max-w-xl mx-auto font-medium opacity-90">
                            Our executive board is ready to implement tailored strategies for your society's sustainable growth.
                        </p>
                        <motion.button
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-12 py-5 bg-secondary hover:bg-secondary-dark text-primary-dark font-black rounded-2xl shadow-2xl flex items-center gap-3 mx-auto transition-all"
                        >
                            Schedule Executive Consultation
                            <ChevronRight className="w-5 h-5" />
                        </motion.button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

