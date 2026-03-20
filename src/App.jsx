import React from 'react';
import Navbar from './components/Navbar';
import ParallaxBackground from './components/ParallaxBackground';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Certificates from './sections/Certificates';
import Education from './sections/Education';
import Contact from './sections/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <main className="relative min-h-screen">
      <ParallaxBackground />
      <Navbar />
      <div>
        <Hero />
        <div className="space-y-24 pb-24">
          <About />
          <Skills />
          <Projects />
          <Certificates />
          <Education />
          <Contact />
        </div>
      </div>
      <Footer />
    </main>
  );
}

export default App;
