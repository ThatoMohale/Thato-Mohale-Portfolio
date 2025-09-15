import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import Footer from './components/Footer';
import KiteCursor from './components/KiteCursor';
import ScrollProgressBar from './components/ScrollProgressBar';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-black font-sans text-gray-800 dark:text-gray-300">
      <KiteCursor />
      <ScrollProgressBar />
      <Header />
      <main className="container mx-auto px-4 sm:px-6 md:px-12">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Certificates />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;