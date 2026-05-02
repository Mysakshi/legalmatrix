'use client';

import { motion } from 'framer-motion';
import { MapPin, Building } from 'lucide-react';

const clients = [
    { name: 'OPTIMA HEIGHTS CO-OP HOUSING SOCIETY LTD', location: 'Wagholi' },
    { name: 'EL CASTILO CO-OP HOUSING SOCIETY LIMITED', location: 'Wagholi' },
    { name: 'ICON IMPERIO CO-OP HOUSING SOCIETY LTD', location: 'Wagholi' },
    { name: 'ANSHUL KANVAS A WING CO-OP HOUSING SOCIETY LTD', location: 'Wagholi' },
    { name: 'ANSHUL KANVAS E WING CO-OP HOUSING SOCIETY LTD', location: 'Wagholi' },
    { name: 'ANSHUL KANVAS B WING CO-OP HOUSING SOCIETY LTD', location: 'Wagholi' },
    { name: 'JADE E TO J RESIDENCES CO-OP HOUSING SOCIETY LTD', location: 'Wagholi' },
    { name: 'JADE FEDERATION CO-OP HOUSING SOCIETY LIMITED', location: 'Wagholi' },
    { name: 'JADE U TO W RESIDENCES CO-OP HOUSING SOCIETY LIMITED', location: 'Wagholi' },
    { name: 'JADE A TO D RESIDENCES CO-OP HOUSING SOCIETY LTD', location: 'Wagholi' },
    { name: 'JADE Q TO T RESIDENCES CO-OP HOUSING SOCIETY LIMITED', location: 'Wagholi' },
    { name: 'JADE K TO P RESIDENCES CO-OP HOUSING SOCIETY LTD', location: 'Wagholi' },
    { name: 'ARV-IMPERIA D BUILDING CO-OP HOUSING SOCIETY LTD', location: 'Undri' },
    { name: 'ARV-IMPERIA E BUILDING CO-OP HOUSING SOCIETY LTD', location: 'Undri' },
    { name: 'ARV C CO-OP. HOUSING SOCIETY', location: 'Undri' },
    { name: 'BANKA SAPPHIRE CO-OP HOUSING SOCIETY LIMITED', location: 'Undri' },
    { name: 'VENKATESH PARADISE A WING CO-OP HOUSING SOCIETY LIMITED', location: 'Undri' },
    { name: 'VENKATESH PARADISE B WING CO-OP HOUSING SOCIETY LIMITED', location: 'Undri' },
    { name: 'MAJASTIC MAGNUM CO-OP. HOUSING SOCIETY', location: 'Undri' },
    { name: 'URBAN NEST CO-OP HOUSING SOCIETY LTD', location: 'Undri' },
    { name: 'SILVER HILLS CO-OP HOUSING SOCIETY LTD', location: 'Undri' },
    { name: 'LIFE PARK CO-OP. HOUSING SOCIETY', location: 'Undri' },
    { name: 'KEYSTONE HILL CO-OP. HOUSING SOCIETY', location: 'Undri' },
    { name: 'COLINA VISTA CO-OP. HOUSING SOCIETY', location: 'Undri' },
    { name: 'SUVAN SHADES CO-OP. HOUSING SOCIETY LIMITED', location: 'Mundhwa' },
    { name: 'K CITY A & B CO-OP. HOUSING SOCIETY', location: 'Mundhwa' },
    { name: 'K CITY D,E,F,G, CO-OP. HOUSING SOCIETY', location: 'Mundhwa' },
    { name: 'GERA\'S WORLD OF JOY PROJECT D CO-OP HOUSING SOCIETY LIMITED', location: 'Kharadi' },
    { name: 'GERA\'S WORLD OF JOY PROJECT F CO-OP HOUSING SOCIETY LIMITED', location: 'Kharadi' },
    { name: 'GERA WORLD OF JOY PROJECT S CO-OP HOUSING SOCIETY LIMITED', location: 'Kharadi' },
    { name: 'SHUBH SHAGUN CO-OP. HOUSING SOCIETY LIMITED', location: 'Kharadi' },
    { name: 'GERA\'S WORLD OF JOY TOWER G CO-OP HOUSING SOCIETY LIMITED', location: 'Kharadi' },
    { name: 'KAUSAR BAUGH CO-OP HOUSING SOCIETY', location: 'Kondhwa' },
    { name: 'HM ROYAL CO-OP HOUSING SOCIETY LIMITED', location: 'Kondhwa' },
    { name: 'CAPRICORN GREEN PARK CO-OPERATIVE HOUSING SOCIETY', location: 'Kondhwa' },
    { name: 'MAJASTIC EPHILIA CO-OP. HOUSING SOCIETY LIMITED', location: 'Kondhwa' },
    { name: 'ROYAL SUBLIME CO-OP. HOUSING SOCIETY', location: 'Kondhwa' },
    { name: 'MADHU MILIND BLOCK B CO-OP. HOUSING SOCIETY', location: 'Kondhwa' },
    { name: 'KUMAR PLAM GROVE CO-OP. HOUSING SOCIETY', location: 'Kondhwa' },
    { name: 'THE ORCHARD CO-OP HOUSING SOCIETY LTD', location: 'Hadapsar' },
    { name: 'SHIVZEN WORLD B CO-OP HOUSING SOCIETY LTD', location: 'Hadapsar' },
    { name: 'SHIVZEN WORLD A & C CO-OP HOUSING SOCIETY LTD', location: 'Hadapsar' },
    { name: 'PARK INFINIA CO-OP. HOUSING SOCIETY LIMITED', location: 'Hadapsar' },
    { name: 'SUNRISE CO-OP HOUSING SOCIETY LTD', location: 'Hadapsar' },
    { name: 'PRISM CO-OP HOUSING SOCIETY LIMITED', location: 'Hadapsar' },
    { name: 'EMNATE CO-OP HOUSING SOCIETY LIMITED', location: 'Hadapsar' },
    { name: 'SAI BALAJI CO-OP. HOUSING SOCIETY', location: 'Hadapsar' },
    { name: 'DREAMS ELLINA CO-OP. HOUSING SOCIETY', location: 'Hadapsar' },
    { name: 'D CINAMON CO-OP HOUSING SOCIETY LIMITED', location: 'Narhe' },
    { name: 'H-PIPERIA CO-OP HOUSING SOCIETY LIMITED', location: 'Narhe' },
    { name: 'ANGEL FISH CO -OP. HOUSING SOCIETY', location: 'Narhe' },
    { name: 'VIVAAN PARK CO-OP. HOUSING SOCIETY LIMITED', location: 'Dhanori' },
    { name: 'SWAPNALOK CO-OP. HOUSING SOCIETY LIMITED', location: 'Bopodi' },
    { name: 'SHREE RENUKA TULSI A & B CO-OP. HOUSING SOCIETY', location: 'Chinchwad' }
];

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.02
        }
    }
};

const item = {
    hidden: { opacity: 0, scale: 0.95 },
    show: { opacity: 1, scale: 1, transition: { duration: 0.3 } }
};

export default function Clients() {
    const locations = [...new Set(clients.map(c => c.location))];

    return (
        <section
            id="clients"
            className="section-padding scroll-mt-20 overflow-hidden relative bg-gray-50"
        >
            <div className="absolute inset-0 bg-pattern-dots opacity-[0.3] pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10 px-6">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <span
                        className="inline-block px-4 py-1.5 rounded-full uppercase tracking-tighter text-xs font-black mb-4"
                        style={{ backgroundColor: 'rgba(30, 58, 138, 0.1)', color: '#1E3A8A' }}
                    >
                        Our Clients
                    </span>
                    <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-4 inline-block relative tracking-tight">
                        Societies We <span className="text-primary">Serve</span>
                        <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: "4rem" }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5, duration: 1 }}
                            className="absolute -bottom-2 left-1/2 -translate-x-1/2 h-1.5 bg-secondary rounded-full"
                        />
                    </h2>
                    <p className="text-gray-500 max-w-2xl mx-auto mt-6 text-lg font-medium">
                        Trusted by over 50 prominent Cooperative Housing Societies across Pune for our unwavering excellence.
                    </p>
                </motion.div>

                {/* Clients Grid */}
                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "100px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
                >
                    {clients.map((client, i) => (
                        <motion.div
                            key={i}
                            variants={item}
                            whileHover={{ y: -3, scale: 1.02 }}
                            className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-primary/20 transition-all duration-300 group flex items-start gap-3"
                        >
                            <div className="w-8 h-8 rounded-full bg-primary/5 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors mt-0.5">
                                <Building className="w-4 h-4 text-primary" />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-xs font-black text-gray-800 leading-snug group-hover:text-primary transition-colors">
                                    {client.name}
                                </span>
                                <div className="flex items-center gap-1 mt-1.5">
                                    <MapPin className="w-3 h-3 text-secondary" />
                                    <span className="text-[10px] uppercase font-bold tracking-wider text-gray-500">
                                        {client.location}
                                    </span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
