import { useEffect } from 'react';
import Lenis from 'lenis';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Curriculo from './components/Curriculo';
import AreaProfissional from './components/AreaProfissional';
import ProjetosAcademicos from './components/ProjetosAcademicos';
import Certificados from './components/Certificados';
import Diplomas from './components/Diplomas';
import InteressesPessoais from './components/InteressesPessoais';
import Skills from './components/Skills';
import Footer from './components/Footer';
import Contact from './components/Contact';
import CustomCursor from './components/CustomCursor';
import CommandPalette from './components/CommandPalette';

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div>
      <CustomCursor />
      <CommandPalette />
      <Navbar />
      <main>
        <Hero />
        <Curriculo />
        <AreaProfissional />
        <ProjetosAcademicos />
        <Diplomas />
        <Certificados />
        <InteressesPessoais />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;

