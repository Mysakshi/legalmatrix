'use client';

const financialServices = [
    { icon: '📊', title: 'Monthly Accounting', desc: 'Recording all financial transactions of the society monthly' },
    { icon: '📅', title: 'Budget Planning', desc: 'Annual financial budget plan as per Bye Laws 66 & 67' },
    { icon: '📝', title: 'Transaction Recording', desc: 'Bank statements, purchases, expenses, receipts processing' },
    { icon: '🏦', title: 'Bank Reconciliation', desc: 'Monthly bank reconciliation for all society accounts' },
    { icon: '💳', title: 'Maintenance Billing', desc: 'Monthly/quarterly invoice preparation for members' },
    { icon: '📈', title: 'Financial Statements', desc: 'Balance Sheet, P&L, Defaulter List for committee review' },
];

const legalServices = [
    { icon: '📄', title: 'Notice Drafting', desc: 'Preparation of notices for Managing Committee meetings' },
    { icon: '🏛️', title: 'AGM & SGM', desc: 'Annual General Meetings and Special General Meetings' },
    { icon: '📜', title: 'Agreements', desc: 'Drafting and executing vendor/staff agreements' },
    { icon: '⚠️', title: 'Defaulter Recovery', desc: 'Advocate notice to defaulter members for dues recovery' },
    { icon: '🔒', title: 'Conveyance', desc: 'Society conveyance deed processing and management' },
    { icon: '🏛️', title: 'Government Filing', desc: 'Various online mandatory annual returns on Govt. portal' },
];

export default function SocietyAMC() {
    return (
        <section
            id="amc"
            className="section-padding scroll-mt-20"
            style={{ backgroundColor: '#F8FAFC' }}
        >
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <span
                        className="inline-block px-4 py-1.5 rounded-full uppercase tracking-tighter text-xs font-black mb-4"
                        style={{ backgroundColor: 'rgba(30, 58, 138, 0.1)', color: '#1E3A8A' }}
                    >
                        AMC Services
                    </span>
                    <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-4 inline-block relative">
                        Society <span className="text-primary">AMC Services</span>
                        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-12 h-1 bg-gradient-to-r from-primary to-secondary rounded-full" />
                    </h2>
                    <p className="text-gray-500 max-w-xl mx-auto mt-6 text-lg font-medium">
                        Comprehensive financial and legal management for your housing society
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Financial Services */}
                    <div className="rounded-[3rem] overflow-hidden shadow-2xl border border-gray-100 bg-white group">
                        <div
                            className="px-10 py-8"
                            style={{ background: 'linear-gradient(135deg, #1E3A8A 0%, #1e40af 100%)' }}
                        >
                            <div className="flex items-center gap-5">
                                <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center text-3xl shadow-inner">
                                    💰
                                </div>
                                <div>
                                    <h3 className="text-white text-2xl font-black tracking-tight">Financial Services</h3>
                                    <p className="text-white/70 text-sm font-medium">Complete accounting management</p>
                                </div>
                            </div>
                        </div>
                        <div className="p-8 grid gap-4">
                            {financialServices.map((s) => (
                                <div
                                    key={s.title}
                                    className="group/item flex items-start gap-5 p-4 rounded-2xl hover:bg-primary/5 transition-all duration-300 border border-transparent hover:border-primary/10"
                                >
                                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-xl flex-shrink-0 group-hover/item:scale-110 transition-transform">
                                        {s.icon}
                                    </div>
                                    <div>
                                        <p className="text-sm font-black text-gray-800 group-hover/item:text-primary transition-colors">{s.title}</p>
                                        <p className="text-xs text-gray-500 mt-1 font-medium leading-relaxed">{s.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Legal Services */}
                    <div className="rounded-[3rem] overflow-hidden shadow-2xl border border-gray-100 bg-white group">
                        <div
                            className="px-10 py-8"
                            style={{ background: 'linear-gradient(135deg, #d97706 0%, #F59E0B 100%)' }}
                        >
                            <div className="flex items-center gap-5">
                                <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center text-3xl shadow-inner">
                                    ⚖️
                                </div>
                                <div>
                                    <h3 className="text-white text-2xl font-black tracking-tight">Legal Services</h3>
                                    <p className="text-white/70 text-sm font-medium">End-to-end legal support</p>
                                </div>
                            </div>
                        </div>
                        <div className="p-8 grid gap-4">
                            {legalServices.map((s) => (
                                <div
                                    key={s.title}
                                    className="group/item flex items-start gap-5 p-4 rounded-2xl hover:bg-secondary/5 transition-all duration-300 border border-transparent hover:border-secondary/10"
                                >
                                    <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center text-xl flex-shrink-0 group-hover/item:scale-110 transition-transform">
                                        {s.icon}
                                    </div>
                                    <div>
                                        <p className="text-sm font-black text-gray-800 group-hover/item:text-secondary-dark transition-colors">{s.title}</p>
                                        <p className="text-xs text-gray-500 mt-1 font-medium leading-relaxed">{s.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
