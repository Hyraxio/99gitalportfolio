import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [currentSection, setCurrentSection] = useState('home');

  // Smooth scroll to top when section changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentSection]);

  const renderCurrentSection = () => {
    switch (currentSection) {
      case 'gallery':
        return <Gallery />;
      case 'about':
        return <About onSectionChange={setCurrentSection} />;
      case 'contact':
        return <Contact />;
      default:
        return <Hero onSectionChange={setCurrentSection} />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header 
        currentSection={currentSection} 
        onSectionChange={setCurrentSection} 
      />
      
      <main>
        {renderCurrentSection()}
      </main>
      
      <Footer />
    </div>
  );
}

export default App;