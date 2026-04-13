import PageHero from '../components/PageHero';
import Services from '../components/Services';
import SpecializedServices from '../components/SpecializedServices';
import SocietyAMC from '../components/SocietyAMC';

export const metadata = {
    title: 'Our Services — LegalMatrix',
    description: 'Comprehensive legal, audit, and management services tailored for cooperative housing societies.',
};

export default function ServicesPage() {
    return (
        <main>
            <PageHero
                title="Expert Legal & Audit Services"
                subtitle="End-to-end compliance, formation, and management solutions for the housing community."
                breadcrumb={[{ label: 'Services', href: '/services' }]}
            />
            <Services />
            <SpecializedServices />
            <SocietyAMC />
        </main>
    );
}
