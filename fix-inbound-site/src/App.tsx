import OrbBackground from './components/OrbBackground';
import Header from './components/Header';
import Hero from './components/Hero';
import RealityCheck from './components/RealityCheck';
import CostOfInaction from './components/CostOfInaction';
import Approach from './components/Approach';
import WhatYouHandle from './components/WhatYouHandle';
import WhyThisWorks from './components/WhyThisWorks';
import Contact from './components/Contact';
import WhoItsFor from './components/WhoItsFor';
import FinalCTA from './components/FinalCTA';
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
        <RealityCheck />
        <CostOfInaction />
        <Approach />
        <WhatYouHandle />
        <WhyThisWorks />
        <Contact />
        <WhoItsFor />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
