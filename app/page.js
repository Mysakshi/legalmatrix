import Hero from './components/Hero';
import About from './components/About';
import Principles from './components/Principles';
import Services from './components/Services';
import SpecializedServices from './components/SpecializedServices';
import Firms from './components/Firms';
import Team from './components/Team';
import SocietyAMC from './components/SocietyAMC';
import Contact from './components/Contact';

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Principles />
      <Services />
      <SpecializedServices />
      <Firms />
      <Team />
      <SocietyAMC />
      <Contact />
    </main>
  );
}
