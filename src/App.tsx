import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Products from './components/Products';
import PracticalInfo from './components/PracticalInfo';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-cream">
      <Header />
      <Hero />
      <About />
      <Products />
      <PracticalInfo />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;