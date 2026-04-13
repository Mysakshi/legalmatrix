import PageHero from '../components/PageHero';
import Team from '../components/Team';

export const metadata = {
    title: 'Our Strategic Team — LegalMatrix',
    description: 'Meet the powerhouse of legal experts, accountants, and consultants behind LegalMatrix.',
};

export default function TeamPage() {
    return (
        <main>
            <PageHero
                title="Meet Our Strategic Experts"
                subtitle="A dedicated group of professionals committed to ensuring legal peace and operational success for your society."
                breadcrumb={[{ label: 'Team', href: '/team' }]}
            />
            <Team />
        </main>
    );
}
