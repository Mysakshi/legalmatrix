'use client';

import { MapPin, Phone, Mail, Globe, Clock, Send, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Contact() {
    return (
        <section id="contact" className="section-padding scroll-mt-20 overflow-hidden relative" style={{ backgroundColor: '#ffffff' }}>
            {/* Background Texture */}
            <div className="absolute inset-0 bg-pattern-dots opacity-[0.4] pointer-events-none" />
            <div className="absolute inset-0 bg-mesh-gradient opacity-[0.5] pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-20"
                >
                    <span
                        className="inline-block px-4 py-1.5 rounded-full uppercase tracking-tighter text-xs font-black mb-4"
                        style={{ backgroundColor: 'rgba(30, 58, 138, 0.1)', color: '#1E3A8A' }}
                    >
                        Connect With Us
                    </span>
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 mb-6 inline-block relative">
                        Contact <span className="text-primary">LegalMatrix</span>
                        <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: "5rem" }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5, duration: 1 }}
                            className="absolute -bottom-3 left-1/2 -translate-x-1/2 h-1.5 bg-secondary rounded-full"
                        />
                    </h2>
                    <p className="text-gray-500 max-w-2xl mx-auto mt-8 text-xl font-medium leading-relaxed">
                        Ready to secure your society's future? Reach out to our executive team for tailored advisory.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
                    {/* Contact Info */}
                    <div className="space-y-6">
                        {/* Address Cards inside a grid/flex layout to save some space or simply stacked */}

                        {/* Corporate Office */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="rounded-3xl p-8 border border-gray-100 shadow-xl relative overflow-hidden group hover:shadow-primary/10 transition-shadow bg-white"
                        >
                            <motion.div
                                animate={{ scale: [1, 1.2, 1], opacity: [0.03, 0.08, 0.03] }}
                                transition={{ duration: 5, repeat: Infinity }}
                                className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full -mr-16 -mt-16 group-hover:bg-primary/20 transition-all pointer-events-none"
                            />
                            <div className="flex items-center gap-5 mb-5">
                                <motion.div
                                    whileHover={{ scale: 1.1, rotate: 5 }}
                                    className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center shadow-lg shadow-primary/30 flex-shrink-0"
                                >
                                    <MapPin className="w-6 h-6 text-white" />
                                </motion.div>
                                <div>
                                    <h3 className="font-black text-gray-900 text-xl tracking-tight">Corporate Office</h3>
                                    <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mt-1">Pune, Maharashtra</p>
                                </div>
                            </div>
                            <p className="text-gray-600 text-sm font-bold leading-relaxed mb-6">
                                A-109, 1st Floor, Clover Centre, Moledina Road, Near Aurora Towers, Camp, Pune - 411001
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-gray-100">
                                <div className="space-y-1">
                                    <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest flex items-center gap-1.5"><Phone className="w-3 h-3" /> Contact</p>
                                    <a href="tel:7377033000" className="text-sm font-black text-primary hover:text-secondary transition-colors block">
                                        7377033000
                                    </a>
                                </div>
                                <div className="space-y-1">
                                    <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest flex items-center gap-1.5"><Mail className="w-3 h-3" /> Email</p>
                                    <a href="mailto:office@legalmatrixindia.com" className="text-sm font-black text-gray-800 hover:text-primary transition-colors block truncate">
                                        office@legalmatrixindia.com
                                    </a>
                                </div>
                            </div>
                        </motion.div>

                        {/* Branch Office 1 */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="rounded-3xl p-6 border border-gray-100 shadow-md relative overflow-hidden group bg-gray-50/50 hover:bg-white transition-colors"
                        >
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary flex-shrink-0 mt-1">
                                    <MapPin className="w-5 h-5" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900 text-lg mb-1">Branch Office 1</h3>
                                    <p className="text-gray-600 text-sm font-medium leading-relaxed">
                                        A-108 1st Floor, Bliss County, Opposite Bank of Maharashtra, Charholi Budruk, Pune - 412105
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Branch Office 2 */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7 }}
                            className="rounded-3xl p-6 border border-gray-100 shadow-md relative overflow-hidden group bg-gray-50/50 hover:bg-white transition-colors"
                        >
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center text-accent flex-shrink-0 mt-1">
                                    <MapPin className="w-5 h-5" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900 text-lg mb-1">Branch Office 2</h3>
                                    <p className="text-gray-600 text-sm font-medium leading-relaxed">
                                        Flat No. 101, First Floor, Srimoti Apartments, Next to ABC Farm, Salunkhe Vihar Road, Kondhwa, Pune – 411048
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Additional Info Cards */}
                        <div className="grid sm:grid-cols-2 gap-4">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2, duration: 0.4 }}
                                whileHover={{ y: -3, backgroundColor: 'white', boxShadow: "0 10px 30px -10px rgba(0,0,0,0.1)" }}
                                className="p-6 rounded-3xl bg-[#F8FAFC] border border-gray-100 flex items-center gap-4 group transition-all"
                            >
                                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center group-hover:bg-secondary transition-all">
                                    <Clock className="w-5 h-5 text-secondary group-hover:text-white" />
                                </div>
                                <div>
                                    <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Office Hours</p>
                                    <p className="text-sm font-black text-gray-800">Mon-Sat: 10AM - 7PM</p>
                                </div>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3, duration: 0.4 }}
                                whileHover={{ y: -3, backgroundColor: 'white', boxShadow: "0 10px 30px -10px rgba(0,0,0,0.1)" }}
                                className="p-6 rounded-3xl bg-[#F8FAFC] border border-gray-100 flex items-center gap-4 group transition-all"
                            >
                                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-all">
                                    <Globe className="w-5 h-5 text-primary group-hover:text-white" />
                                </div>
                                <div>
                                    <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Online Support</p>
                                    <p className="text-sm font-black text-gray-800">24/7 Availability</p>
                                </div>
                            </motion.div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="rounded-[3rem] p-10 shadow-2xl border border-gray-100 bg-white relative overflow-hidden h-full flex flex-col justify-center"
                    >
                        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary via-secondary to-accent" />
                        <h3 className="text-3xl font-black text-gray-900 mb-8 tracking-tight uppercase">Direct Inquiry</h3>
                        <form
                            onSubmit={(e) => e.preventDefault()}
                            className="space-y-6"
                        >
                            <div className="grid sm:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">
                                        Your Full Name
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Full Name"
                                        className="w-full px-6 py-4 rounded-xl bg-gray-50 border border-gray-100 text-sm font-bold focus:outline-none focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/5 transition-all placeholder-gray-300"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">
                                        Personal Phone
                                    </label>
                                    <input
                                        type="tel"
                                        placeholder="+91 Your Number"
                                        className="w-full px-6 py-4 rounded-xl bg-gray-50 border border-gray-100 text-sm font-bold focus:outline-none focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/5 transition-all placeholder-gray-300"
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    placeholder="your@email.com"
                                    className="w-full px-6 py-4 rounded-xl bg-gray-50 border border-gray-100 text-sm font-bold focus:outline-none focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/5 transition-all placeholder-gray-300"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">
                                    Select Service
                                </label>
                                <div className="relative">
                                    <select className="w-full px-6 py-4 rounded-xl bg-gray-50 border border-gray-100 text-sm font-bold text-gray-700 focus:outline-none focus:bg-white focus:border-primary transition-all appearance-none cursor-pointer">
                                        <option value="">Choose a Service Area...</option>
                                        <option>Legal Compliance Services</option>
                                        <option>Formation & Handover</option>
                                        <option>Financial & Audit Services</option>
                                        <option>Dispute Resolution</option>
                                        <option>Redevelopment Consulting</option>
                                        <option>Insurance advisory</option>
                                    </select>
                                    <ChevronRight className="absolute right-5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none rotate-90" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">
                                    Detail Your Inquiry
                                </label>
                                <textarea
                                    rows={4}
                                    placeholder="How can our experts help you today?"
                                    className="w-full px-6 py-4 rounded-xl bg-gray-50 border border-gray-100 text-sm font-bold focus:outline-none focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/5 transition-all placeholder-gray-300 resize-none"
                                />
                            </div>
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                type="submit"
                                className="w-full flex items-center justify-center gap-3 py-5 bg-primary text-white font-black uppercase tracking-widest text-sm rounded-xl shadow-xl shadow-primary/40 transition-all duration-300"
                            >
                                <Send className="w-4 h-4" />
                                Request Executive Consultation
                            </motion.button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
