import Hero from './components/Hero';
import About from './components/About';
import Principles from './components/Principles';
import SocietyAMC from './components/SocietyAMC';
import Contact from './components/Contact';

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Principles />
      <SocietyAMC />
      <Contact />
    </main>
  );
}
