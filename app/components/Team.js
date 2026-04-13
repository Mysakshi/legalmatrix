'use client';

import {
    Users,
    Scale,
    Calculator,
    Briefcase,
    Shield,
    Crown,
    Mail,
    Phone,
    Globe
} from 'lucide-react';

const teamGroups = [
    {
        title: 'Founder & Directors',
        color: '#1E3A8A',
        icon: <Crown className="w-6 h-6" />,
        members: [
            { name: 'Adv. Mahesh Kakade', role: 'Founder Director', bio: 'Expert legal strategist with over 20 years of experience.' },
            { name: 'Mr. Sachin Jadhav', role: 'Director', bio: 'Driving operational excellence and strategic growth.' },
            { name: 'Adv. Rupali Kakade', role: 'Director', bio: 'Specializing in complex society legal frameworks.' },
        ],
    },
    {
        title: 'Legal Advisory',
        color: '#F59E0B',
        icon: <Scale className="w-6 h-6" />,
        members: [
            { name: 'Adv. Durga Jadhav', role: 'Legal Advisor', bio: 'Ensuring meticulous compliance with MCS Act.' },
            { name: 'Adv. Rupali Hinge', role: 'Legal Advisor', bio: 'Dedicated to resolving society-level disputes.' },
            { name: 'Ms. Seema Gadekar', role: 'Legal Executive', bio: 'Specialist in society formation and documentation.' },
        ],
    },
    {
        title: 'Accounts & Audit',
        color: '#10B981',
        icon: <Calculator className="w-6 h-6" />,
        members: [
            { name: 'Mrs. Leena Londhe', role: 'Senior Accountant', bio: 'Managing complex financial audits and taxations.' },
            { name: 'Mr. Manish Sarde', role: 'Accountant', bio: 'Expert in society accounting and budget planning.' },
            { name: 'Mr. Ravi Bhosale', role: 'Accountant', bio: 'Maintaining accurate financial records for societies.' },
        ],
    },
    {
        title: 'Business Operations',
        color: '#8B5CF6',
        icon: <Briefcase className="w-6 h-6" />,
        members: [
            { name: 'Mr. Harshal Kulkarni', role: 'Business Manager', bio: 'Strategic lead for society management solutions.' },
            { name: 'Mr. Swati Balshankar', role: 'Business Executive', bio: 'Ensuring seamless client relationship management.' },
        ],
    },
    {
        title: 'Insurance Services',
        color: '#EC4899',
        icon: <Shield className="w-6 h-6" />,
        members: [
            { name: 'Mr. Vipul Tambe', role: 'Insurance Advisor', bio: 'Protecting society assets with tailored coverage.' },
            { name: 'Mrs. Kalpana Tambe', role: 'Insurance Executive', bio: 'Expertise in society hazard and liability insurance.' },
        ],
    },
];

function MemberCard({ name, role, color, bio }) {
    const initials = name
        .split(' ')
        .filter(n => !n.includes('.'))
        .map(n => n[0])
        .slice(0, 2)
        .join('');

    return (
        <div className="group relative bg-white rounded-3xl p-6 border border-gray-100 hover-lift card-shine transition-all duration-500 hover:border-primary/20">
            {/* Top accent */}
            <div
                className="absolute top-0 right-0 w-32 h-32 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity pointer-events-none"
                style={{ background: `radial-gradient(circle at top right, ${color}, transparent)` }}
            />

            <div className="flex flex-col items-center text-center">
                {/* Avatar area */}
                <div className="relative mb-6">
                    <div className="absolute inset-0 bg-primary/10 rounded-2xl blur-xl group-hover:bg-primary/20 transition-all duration-500" />
                    <div
                        className="relative w-24 h-24 rounded-2xl flex items-center justify-center text-2xl font-black text-white shadow-2xl overflow-hidden group-hover:scale-105 transition-transform duration-500"
                        style={{ background: `linear-gradient(135deg, ${color}, var(--primary))` }}
                    >
                        {initials || 'LM'}
                        {/* Subtle patterns */}
                        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] bg-[size:10px_10px]" />
                    </div>
                </div>

                {/* Content */}
                <h4 className="text-xl font-black text-gray-900 mb-1 group-hover:text-primary transition-colors">
                    {name}
                </h4>
                <div className="mb-4">
                    <span
                        className="px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest"
                        style={{ backgroundColor: `${color}15`, color: color }}
                    >
                        {role}
                    </span>
                </div>

                <p className="text-sm text-gray-500 font-medium leading-relaxed mb-6 italic">
                    "{bio}"
                </p>

                {/* Social placeholders or contact icons */}
                <div className="flex gap-3 mt-auto">
                    {[Mail, Phone, Globe].map((Icon, idx) => (
                        <button
                            key={idx}
                            className="w-10 h-10 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-400 hover:bg-white hover:border-primary/30 hover:text-primary transition-all duration-300"
                        >
                            <Icon className="w-4 h-4" />
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default function Team() {
    return (
        <section
            id="team"
            className="section-padding scroll-mt-20 overflow-hidden"
            style={{ backgroundColor: '#ffffff' }}
        >
            <div className="max-w-7xl mx-auto relative px-4 sm:px-6">
                {/* Background Decorations */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -mr-48 -mt-48 pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/5 rounded-full blur-3xl -ml-32 -mb-32 pointer-events-none" />

                {/* Header */}
                <div className="text-center mb-24 relative">
                    <div
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full uppercase tracking-widest text-[10px] font-black mb-6 shadow-sm border border-gray-100 bg-white"
                        style={{ color: '#1E3A8A' }}
                    >
                        <Users className="w-3 h-3 text-secondary" />
                        Our Executive Leadership
                    </div>
                    <h2 className="text-4xl sm:text-6xl font-black text-gray-900 mb-8 tracking-tight">
                        Meet Our <span className="gradient-text">Strategic Team</span>
                    </h2>
                    <div className="w-24 h-1.5 bg-secondary mx-auto rounded-full mb-8" />
                    <p className="text-gray-500 max-w-2xl mx-auto text-lg sm:text-xl font-medium leading-relaxed">
                        A powerhouse of legal experts, accountants, and consultants
                        dedicated to providing state-of-the-art solutions for your society.
                    </p>
                </div>

                {/* Groups */}
                <div className="space-y-20">
                    {teamGroups.map((group) => (
                        <div key={group.title} className="relative">
                            <div className="flex items-center gap-4 mb-10 pb-4 border-b border-gray-100">
                                <div
                                    className="w-12 h-12 rounded-2xl flex items-center justify-center text-white shadow-lg"
                                    style={{ background: `linear-gradient(135deg, ${group.color}, var(--primary))` }}
                                >
                                    {group.icon}
                                </div>
                                <h3 className="text-2xl font-black text-gray-900 tracking-tight">
                                    {group.title}
                                </h3>
                                <div className="h-px flex-grow bg-gradient-to-r from-gray-100 to-transparent ml-4" />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {group.members.map((member) => (
                                    <MemberCard key={member.name} {...member} color={group.color} />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Call to Action or Footer note */}
                <div className="mt-32 p-12 rounded-[3rem] bg-primary text-white text-center relative overflow-hidden group">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,var(--secondary),transparent)] opacity-20" />
                    <div className="relative z-10">
                        <h3 className="text-3xl font-black mb-6">Want to work with us?</h3>
                        <p className="text-primary-light text-lg mb-8 max-w-xl mx-auto font-medium">
                            Our team is always ready to guide you through any legal or operational challenges.
                        </p>
                        <button className="px-10 py-4 bg-secondary hover:bg-secondary-dark text-primary-dark font-black rounded-2xl transition-all duration-300 hover:scale-105 shadow-xl">
                            Get in Touch
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}

