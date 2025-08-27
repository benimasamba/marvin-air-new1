
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import PastWork from './components/PastWork';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="relative flex size-full min-h-screen flex-col bg-white overflow-x-hidden font-sans">
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        <Services />
        <PastWork />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
