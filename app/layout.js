import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata = {
  title: 'LegalMatrix — Your Partner in Co-Operative Housing Success',
  description:
    'LegalMatrix provides tailored legal solutions for cooperative housing societies, ensuring compliance with MCS Act 1960 and related bye-laws. Expert legal advisory, audit, and compliance services in Pune.',
  keywords:
    'LegalMatrix, cooperative housing society, MCS Act 1960, legal compliance, society formation, conveyance deed, Pune',
  openGraph: {
    title: 'LegalMatrix — Co-Operative Housing Legal Solutions',
    description: 'Expert legal advisory and compliance solutions for cooperative housing societies.',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} h-full scroll-smooth`}>
      <body className={`${inter.className} min-h-full flex flex-col antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
