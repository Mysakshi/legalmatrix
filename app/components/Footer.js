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
    hidden: { opacity: 0, y: 15 },
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
                className="max-w-7xl mx-auto px-6 pt-12 pb-6"
            >
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-10 mb-8">
                    {/* Brand & Contact details */}
                    <motion.div variants={item} className="lg:col-span-2">
                        <div className="flex items-center mb-6">
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                className="h-14 sm:h-16 w-auto flex-shrink-0 bg-white/95 p-3 rounded-2xl shadow-lg shadow-black/20"
                            >
                                <img src="/images/logo1.png" alt="LegalMatrix Logo" className="h-full w-auto object-contain" />
                            </motion.div>
                        </div>
                        <p className="text-gray-400 text-xs leading-relaxed mb-6 max-w-sm font-medium">
                            Your trusted partner in co-operative housing legal compliance. Ensuring full compliance with MCS Act 1960.
                        </p>

                        <div className="space-y-3 mb-5">
                            <p className="text-white text-[10px] font-bold uppercase tracking-widest border-b border-white/10 pb-1 mb-2">Our Offices</p>

                            <div className="flex flex-col gap-2.5">
                                <motion.div whileHover={{ x: 5 }} className="flex items-start gap-2 group cursor-default">
                                    <MapPin className="w-3.5 h-3.5 text-secondary mt-0.5 flex-shrink-0" />
                                    <span className="text-gray-400 text-xs leading-snug font-medium"><strong className="text-white opacity-90 mr-1 font-bold">Corp:</strong>A-109, Clover Centre, Camp, Pune - 411001</span>
                                </motion.div>
                                <motion.div whileHover={{ x: 5 }} className="flex items-start gap-2 group cursor-default">
                                    <MapPin className="w-3.5 h-3.5 text-gray-500 mt-0.5 flex-shrink-0 group-hover:text-white transition-colors" />
                                    <span className="text-gray-400 text-xs leading-snug font-medium"><strong className="text-white opacity-80 mr-1 font-bold">Br 1:</strong>A-108 Bliss County, Charholi Budruk, Pune - 412105</span>
                                </motion.div>
                                <motion.div whileHover={{ x: 5 }} className="flex items-start gap-2 group cursor-default">
                                    <MapPin className="w-3.5 h-3.5 text-gray-500 mt-0.5 flex-shrink-0 group-hover:text-white transition-colors" />
                                    <span className="text-gray-400 text-xs leading-snug font-medium"><strong className="text-white opacity-80 mr-1 font-bold">Br 2:</strong>Flat 101, Srimoti Apts, Salunkhe Vihar Road, Kondhwa, Pune – 411048</span>
                                </motion.div>
                            </div>
                        </div>

                        {/* Contact & Socials Inline */}
                        <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-white/5">
                            <motion.a href="tel:7377033000" whileHover={{ y: -1 }} className="flex items-center gap-1.5 group">
                                <Phone className="w-3.5 h-3.5 text-gray-400 group-hover:text-primary transition-colors" />
                                <span className="text-gray-400 text-xs font-bold group-hover:text-white transition-colors">7377033000</span>
                            </motion.a>
                            <motion.a href="mailto:office@legalmatrixindia.com" whileHover={{ y: -1 }} className="flex items-center gap-1.5 group">
                                <Mail className="w-3.5 h-3.5 text-gray-400 group-hover:text-primary transition-colors" />
                                <span className="text-gray-400 text-xs font-bold group-hover:text-white transition-colors">office@legalmatrixindia.com</span>
                            </motion.a>

                            <div className="flex gap-2 ml-auto">
                                {Object.entries(SocialIcons).map(([name, Icon]) => (
                                    <motion.a
                                        key={name}
                                        whileHover={{ y: -2, backgroundColor: '#1E3A8A', color: 'white' }}
                                        href="#"
                                        className="w-7 h-7 rounded-lg bg-white/5 flex items-center justify-center text-gray-400 transition-all duration-300"
                                    >
                                        <div className="scale-75"><Icon /></div>
                                    </motion.a>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Links - compact sizes */}
                    {footerSections.map((section) => (
                        <motion.div variants={item} key={section.title}>
                            <h4 className="text-white font-black text-xs mb-4 uppercase tracking-widest relative inline-block">
                                {section.title}
                                <div className="absolute -bottom-1.5 left-0 w-1/2 h-0.5 bg-secondary/50 rounded-full" />
                            </h4>
                            <ul className="space-y-2.5 pt-1">
                                {section.links.map((link) => (
                                    <li key={link.label}>
                                        <motion.a
                                            whileHover={{ x: 3 }}
                                            href={link.href}
                                            className="text-gray-400 text-xs hover:text-white transition-colors duration-200 flex items-center gap-2 group font-medium"
                                        >
                                            <span className="w-1 h-1 rounded-full bg-secondary opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                                            {link.label}
                                        </motion.a>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom Bar */}
                <motion.div
                    variants={item}
                    className="border-t border-white/10 pt-5 mt-8 flex flex-col md:flex-row justify-between items-center gap-4"
                >
                    <p className="text-gray-500 text-[10px] font-bold uppercase tracking-widest flex items-center gap-2">
                        <span>© {year} LegalMatrix</span>
                        <span className="w-1 h-1 bg-gray-600 rounded-full" />
                        <span>All rights reserved.</span>
                    </p>
                    <div className="flex flex-wrap justify-center gap-6">
                        {['Privacy Policy', 'Terms of Service', 'Disclaimer'].map((l) => (
                            <motion.a
                                key={l}
                                whileHover={{ color: 'white' }}
                                href="#"
                                className="text-gray-500 text-[9px] font-black uppercase tracking-widest hover:text-gray-300 transition-colors"
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
