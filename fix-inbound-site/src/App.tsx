import OrbBackground from './components/OrbBackground';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingContactButton from './components/FloatingContactButton';

function App() {
  return (
    <div className="relative min-h-screen">
      <OrbBackground />
      <Header />
      <FloatingContactButton />
      <main>
        <Hero />
        <Services />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
