import PageHero from '../components/PageHero';
import About from '../components/About';
import Principles from '../components/Principles';

export const metadata = {
    title: 'About Us — LegalMatrix',
    description: 'Learn about LegalMatrix, our mission, vision, and the core principles that drive our legal and consultancy excellence.',
};

export default function AboutPage() {
    return (
        <main>
            <PageHero
                title="About Our Legal Excellence"
                subtitle="Dedicated to providing high-end consultancy and legal solutions for cooperative housing societies since 2010."
                breadcrumb={[{ label: 'About', href: '/about' }]}
            />
            <About />
            <Principles />
        </main>
    );
}
