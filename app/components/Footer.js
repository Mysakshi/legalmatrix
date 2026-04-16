'use client';

import { Scale, MapPin, Phone, Mail, Globe } from 'lucide-react';
import { motion } from 'framer-motion';

// Simple social SVG icons
const SocialIcons = {
    Facebook: () => (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
        </svg>
    ),
    Twitter: () => (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
            <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
        </svg>
    ),
    Linkedin: () => (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
            <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
            <circle cx="4" cy="4" r="2" />
        </svg>
    ),
    Instagram: () => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
            <circle cx="12" cy="12" r="4" />
            <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
        </svg>
    ),
};

const footerSections = [
    {
        title: 'Services',
        links: [
            { label: 'Society Formation', href: '#services' },
            { label: 'Legal Compliance', href: '#services' },
            { label: 'Conveyance Deed', href: '#services' },
            { label: 'Dispute Resolution', href: '#services' },
            { label: 'Audit Services', href: '#audit' },
            { label: 'Redevelopment', href: '#specialized' },
        ],
    },
    {
        title: 'Company',
        links: [
            { label: 'About Us', href: '#about' },
            { label: 'Our Team', href: '#team' },
            { label: 'Our Firms', href: '#firms' },
            { label: 'AMC Services', href: '#amc' },
            { label: 'Principles', href: '#principles' },
            { label: 'Contact', href: '#contact' },
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
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
};

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer
            className="overflow-hidden"
            style={{
                background: 'linear-gradient(180deg, #0a1540 0%, #0f1f5c 50%, #111827 100%)',
            }}
        >
            <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="max-w-7xl mx-auto px-6 pt-16 pb-8"
            >
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Brand */}
                    <motion.div variants={item} className="lg:col-span-2">
                        <div className="flex items-center gap-3 mb-5">
                            <motion.div
                                whileHover={{ rotate: 10, scale: 1.1 }}
                                className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#1E3A8A] to-[#2d54c4] flex items-center justify-center shadow-lg"
                            >
                                <Scale className="w-6 h-6 text-white" />
                            </motion.div>
                            <div>
                                <div>
                                    <span className="text-2xl font-black text-white tracking-tight uppercase">LEGAL</span>
                                    <span className="text-2xl font-black text-secondary tracking-tight uppercase">MATRIX</span>
                                </div>
                                <p className="text-[10px] text-gray-500 font-medium uppercase tracking-widest">Legal & Compliance Solutions</p>
                            </div>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-sm font-medium">
                            Your trusted partner in co-operative housing legal compliance. Providing tailored legal solutions ensuring full compliance with MCS Act 1960.
                        </p>

                        {/* Contact info */}
                        <div className="space-y-3 mb-8">
                            {[
                                { icon: MapPin, text: 'A-109 & B1-110, Clover Centre, Camp, Pune - 411001' },
                                { icon: Phone, text: '7377033000' },
                                { icon: Mail, text: 'office@legalmatrixindia.com' },
                                { icon: Globe, text: 'www.legalmatrixindia.com' },
                            ].map((c) => (
                                <motion.div
                                    key={c.text}
                                    whileHover={{ x: 5 }}
                                    className="flex items-start gap-2.5 group cursor-default"
                                >
                                    <c.icon className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                                    <span className="text-gray-400 text-xs leading-relaxed font-medium group-hover:text-white transition-colors">{c.text}</span>
                                </motion.div>
                            ))}
                        </div>

                        {/* Social icons */}
                        <div className="flex gap-3">
                            {Object.entries(SocialIcons).map(([name, Icon]) => (
                                <motion.a
                                    key={name}
                                    whileHover={{ y: -5, backgroundColor: '#1E3A8A', borderColor: '#1E3A8A', color: 'white' }}
                                    whileTap={{ scale: 0.9 }}
                                    href="#"
                                    className="w-10 h-10 rounded-xl border border-white/10 flex items-center justify-center text-gray-400 transition-all duration-300 bg-white/5"
                                >
                                    <Icon />
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>

                    {/* Links */}
                    {footerSections.map((section) => (
                        <motion.div variants={item} key={section.title}>
                            <h4 className="text-white font-black text-sm mb-6 uppercase tracking-widest">
                                {section.title}
                            </h4>
                            <ul className="space-y-4">
                                {section.links.map((link) => (
                                    <li key={link.label}>
                                        <motion.a
                                            whileHover={{ x: 5 }}
                                            href={link.href}
                                            className="text-gray-400 text-sm hover:text-secondary transition-colors duration-200 flex items-center gap-2 group font-medium"
                                        >
                                            <span className="w-1 h-1 rounded-full bg-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex-shrink-0" />
                                            {link.label}
                                        </motion.a>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>

                {/* Divider */}
                <motion.div
                    variants={item}
                    className="border-t border-white/5 pt-10 flex flex-col sm:flex-row justify-between items-center gap-6"
                >
                    <p className="text-gray-500 text-xs font-bold uppercase tracking-widest">
                        © {year} LegalMatrix. All rights reserved.
                    </p>
                    <div className="flex gap-8">
                        {['Privacy Policy', 'Terms of Service', 'Disclaimer'].map((l) => (
                            <motion.a
                                key={l}
                                whileHover={{ color: 'white' }}
                                href="#"
                                className="text-gray-500 text-[10px] font-black uppercase tracking-widest hover:text-gray-300 transition-colors"
                            >
                                {l}
                            </motion.a>
                        ))}
                    </div>
                </motion.div>
            </motion.div>
        </footer>
    );
}
