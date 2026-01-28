import React from 'react';
import OrbBackground from './components/OrbBackground';
import Header from './components/Header';
import Hero from './components/Hero';
import Testimonials from './components/Testimonials';
import DeliveringResults from './components/DeliveringResults';
import Services from './components/Services';
import CaseStudies from './components/CaseStudies';
import Team from './components/Team';
import HowWeWork from './components/HowWeWork';
import OneStopCTA from './components/OneStopCTA';
import Pricing from './components/Pricing';
import Blogs from './components/Blogs';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="relative min-h-screen">
      <OrbBackground />
      <Header />
      <main>
        <Hero />
        <Testimonials />
        <DeliveringResults />
        <Services />
        <CaseStudies />
        <Team />
        <HowWeWork />
        <OneStopCTA />
        <Pricing />
        <Blogs />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
