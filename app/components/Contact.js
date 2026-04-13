'use client';

import { MapPin, Phone, Mail, Globe, Clock, Send, ChevronRight } from 'lucide-react';

export default function Contact() {
    return (
        <section id="contact" className="section-padding scroll-mt-20" style={{ backgroundColor: '#ffffff' }}>
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-20">
                    <span
                        className="inline-block px-4 py-1.5 rounded-full uppercase tracking-tighter text-xs font-black mb-4"
                        style={{ backgroundColor: 'rgba(30, 58, 138, 0.1)', color: '#1E3A8A' }}
                    >
                        Connect With Us
                    </span>
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 mb-6 inline-block relative">
                        Contact <span className="text-primary">LegalMatrix</span>
                        <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-20 h-1.5 bg-secondary rounded-full" />
                    </h2>
                    <p className="text-gray-500 max-w-2xl mx-auto mt-8 text-xl font-medium leading-relaxed">
                        Ready to secure your society's future? Reach out to our executive team for tailored advisory.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-20 items-start animate-fade-in-up">
                    {/* Contact Info */}
                    <div className="space-y-8">
                        {/* Address Card */}
                        <div
                            className="rounded-[3rem] p-10 border border-gray-100 shadow-2xl relative overflow-hidden group hover-lift card-shine"
                            style={{ background: 'linear-gradient(135deg, #F8FAFC, white)' }}
                        >
                            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 group-hover:bg-primary/20 transition-all pointer-events-none" />
                            <div className="flex items-center gap-6 mb-10">
                                <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center shadow-lg shadow-primary/30 group-hover:scale-110 transition-transform duration-500">
                                    <MapPin className="w-8 h-8 text-white" />
                                </div>
                                <div>
                                    <h3 className="font-black text-gray-900 text-2xl tracking-tight">Corporate Headquarters</h3>
                                    <p className="text-[10px] text-gray-400 font-black uppercase tracking-widest mt-1">Pune, Maharashtra</p>
                                </div>
                            </div>
                            <p className="text-gray-600 text-xl font-bold leading-relaxed mb-10">
                                A-109 & B1-110, 1st Floor,<br />
                                Clover Centre, Camp, Pune - 411001
                            </p>

                            <div className="grid sm:grid-cols-2 gap-8 pt-10 border-t border-gray-100">
                                <div className="space-y-2">
                                    <p className="text-[10px] text-gray-400 font-black uppercase tracking-widest">General Inquiries</p>
                                    <a href="tel:7377033000" className="text-xl font-black text-primary hover:text-secondary transition-colors duration-300">7377033000</a>
                                </div>
                                <div className="space-y-2">
                                    <p className="text-[10px] text-gray-400 font-black uppercase tracking-widest">Email Support</p>
                                    <a href="mailto:office@legalmatrixindia.com" className="text-base font-black text-gray-800 hover:text-primary transition-colors duration-300 line-clamp-1">office@legalmatrixindia.com</a>
                                </div>
                            </div>
                        </div>

                        {/* Additional Info Cards */}
                        <div className="grid sm:grid-cols-2 gap-6">
                            <div className="p-8 rounded-[2.5rem] bg-[#F8FAFC] border border-gray-100 flex items-center gap-5 group hover:bg-white hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
                                <div className="w-14 h-14 rounded-2xl bg-secondary/10 flex items-center justify-center group-hover:bg-secondary transition-all duration-500">
                                    <Clock className="w-7 h-7 text-secondary group-hover:text-white" />
                                </div>
                                <div>
                                    <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Office Hours</p>
                                    <p className="text-base font-black text-gray-800">Mon-Sat: 10AM - 7PM</p>
                                </div>
                            </div>
                            <div className="p-8 rounded-[2.5rem] bg-[#F8FAFC] border border-gray-100 flex items-center gap-5 group hover:bg-white hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
                                <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center group-hover:bg-accent transition-all duration-500">
                                    <Globe className="w-7 h-7 text-accent group-hover:text-white" />
                                </div>
                                <div>
                                    <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Online Support</p>
                                    <p className="text-base font-black text-gray-800">24/7 Availability</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="rounded-[3.5rem] p-12 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.1)] border border-gray-100 bg-white relative overflow-hidden group hover:shadow-primary/5 transition-shadow">
                        {/* Decorative glow */}
                        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary via-secondary to-accent" />
                        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 group-hover:bg-primary/10 transition-all pointer-events-none" />

                        <h3 className="text-4xl font-black text-gray-900 mb-10 tracking-tight">Direct Inquiry</h3>
                        <form
                            onSubmit={(e) => e.preventDefault()}
                            className="space-y-8"
                        >
                            <div className="grid sm:grid-cols-2 gap-8">
                                <div className="space-y-3">
                                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">
                                        Your Full Name
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Mahesh Kakade"
                                        className="w-full px-8 py-5 rounded-2xl bg-gray-50 border border-gray-100 text-sm font-bold focus:outline-none focus:bg-white focus:border-primary focus:ring-8 focus:ring-primary/5 transition-all placeholder-gray-300"
                                    />
                                </div>
                                <div className="space-y-3">
                                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">
                                        Personal Phone
                                    </label>
                                    <input
                                        type="tel"
                                        placeholder="+91 7377033000"
                                        className="w-full px-8 py-5 rounded-2xl bg-gray-50 border border-gray-100 text-sm font-bold focus:outline-none focus:bg-white focus:border-primary focus:ring-8 focus:ring-primary/5 transition-all placeholder-gray-300"
                                    />
                                </div>
                            </div>
                            <div className="space-y-3">
                                <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    placeholder="your@email.com"
                                    className="w-full px-8 py-5 rounded-2xl bg-gray-50 border border-gray-100 text-sm font-bold focus:outline-none focus:bg-white focus:border-primary focus:ring-8 focus:ring-primary/5 transition-all placeholder-gray-300"
                                />
                            </div>
                            <div className="space-y-3">
                                <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">
                                    Select Service
                                </label>
                                <div className="relative">
                                    <select className="w-full px-8 py-5 rounded-2xl bg-gray-50 border border-gray-100 text-sm font-black text-gray-700 focus:outline-none focus:bg-white focus:border-primary transition-all appearance-none cursor-pointer">
                                        <option value="">Choose a Legal Service...</option>
                                        <option>Legal Compliance Services</option>
                                        <option>Society Formation Registration</option>
                                        <option>Conveyance Deed Services</option>
                                        <option>Dispute Resolution</option>
                                        <option>Audit Services</option>
                                        <option>Redevelopment Consulting</option>
                                    </select>
                                    <ChevronRight className="absolute right-6 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none rotate-90" />
                                </div>
                            </div>
                            <div className="space-y-3">
                                <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">
                                    Detail Your Inquiry
                                </label>
                                <textarea
                                    rows={5}
                                    placeholder="How can our experts help you today?"
                                    className="w-full px-8 py-5 rounded-2xl bg-gray-50 border border-gray-100 text-sm font-bold focus:outline-none focus:bg-white focus:border-primary focus:ring-8 focus:ring-primary/5 transition-all placeholder-gray-300 resize-none"
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full flex items-center justify-center gap-4 py-6 bg-primary text-white font-black uppercase tracking-widest text-sm rounded-2xl shadow-2xl shadow-primary/40 hover:-translate-y-1 active:scale-[0.98] transition-all duration-300"
                            >
                                <Send className="w-5 h-5" />
                                Request Executive Consultation
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
