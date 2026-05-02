import PageHero from '../components/PageHero';
import Clients from '../components/Clients';

export const metadata = {
    title: 'Our Clients — LegalMatrix',
    description: 'We are trusted by over 50 prominent Cooperative Housing Societies across Pune.',
};

export default function ClientsPage() {
    return (
        <main>
            <PageHero
                title="Our Esteemed Clients"
                subtitle="Trusted by over 50 prominent Cooperative Housing Societies across Pune for our unwavering excellence."
                breadcrumb={[{ label: 'Clients', href: '/clients' }]}
            />
            <Clients />
        </main>
    );
}
