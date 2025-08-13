import React from 'react';
import { Award, ChevronDown } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="accueil" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/1775043/pexels-photo-1775043.jpeg)',
        }}
      >
        <div className="absolute inset-0 bg-navy-breton/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 text-white">
        <div className="animate-fade-in">
          <h1 className="font-playfair text-5xl md:text-7xl font-bold mb-6">
            Au Pain Qui Crak'
          </h1>
          <div className="flex items-center justify-center mb-6 animate-float">
            <Award className="text-brown-gold mr-2" size={24} />
            <p className="font-opensans text-xl md:text-2xl font-medium text-brown-gold">
              La passion du pain, primée et partagée
            </p>
          </div>
          <p className="font-opensans text-lg md:text-xl mb-8 leading-relaxed max-w-3xl mx-auto">
            Maître artisan boulanger à Crach et Auray, nous façonnons chaque jour des pains, 
            viennoiseries et pâtisseries avec patience et amour. Élue meilleure baguette tradition 
            du Morbihan, notre boulangerie est le rendez-vous des gourmands et des amoureux du bon goût.
          </p>
          <button 
            onClick={() => scrollToSection('produits')}
            className="bg-brown-gold text-white px-8 py-4 rounded-full font-opensans font-semibold text-lg hover:bg-brown-gold/90 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Découvrir nos produits
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <ChevronDown size={32} />
      </div>
    </section>
  );
};

export default Hero;