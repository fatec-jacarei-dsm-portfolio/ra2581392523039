import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Curriculo from './components/Curriculo';
import AreaProfissional from './components/AreaProfissional';
import ProjetosAcademicos from './components/ProjetosAcademicos';
import Certificados from './components/Certificados';
import InteressesPessoais from './components/InteressesPessoais';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <main>
        <Hero />
        <Curriculo />
        <AreaProfissional />
        <ProjetosAcademicos />
        <Certificados />
        <InteressesPessoais />
      </main>
      <Footer />
    </div>
  );
}

export default App;

