import PageHero from '../components/PageHero';
import Contact from '../components/Contact';

export const metadata = {
    title: 'Contact Us — LegalMatrix',
    description: 'Get in touch with LegalMatrix for expert legal consultation and society management services.',
};

export default function ContactPage() {
    return (
        <main>
            <PageHero
                title="Get Expert Legal Consultation"
                subtitle="Have a query or need professional guidance? Our experts are ready to assist you right now."
                breadcrumb={[{ label: 'Contact', href: '/contact' }]}
            />
            <Contact />
        </main>
    );
}
