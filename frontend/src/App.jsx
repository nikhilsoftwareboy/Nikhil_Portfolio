import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import BackgroundEffect from './components/BackgroundEffect';

function App() {
  return (
    <div className="relative w-full min-h-screen bg-lightMain dark:bg-darkMain text-gray-900 dark:text-gray-100 font-sans selection:bg-accent selection:text-white">
      <BackgroundEffect />
      <CustomCursor />
      <Header />

      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
