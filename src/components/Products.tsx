import React from 'react';
import { Wheat, Croissant, Cake, Coffee } from 'lucide-react';

const Products = () => {
  const categories = [
    {
      icon: <Wheat className="text-brown-gold" size={48} />,
      title: 'Pains',
      description: 'Baguettes tradition, pains complets, céréales, seigle, campagne… façonnés chaque matin pour un goût authentique.',
      image: 'https://images.pexels.com/photos/1586947/pexels-photo-1586947.jpeg'
    },
    {
      icon: <Croissant className="text-brown-gold" size={48} />,
      title: 'Viennoiseries',
      description: 'Croissants, pains au chocolat, brioches et spécialités feuilletées dorées à souhait.',
      image: 'https://images.pexels.com/photos/2067396/pexels-photo-2067396.jpeg'
    },
    {
      icon: <Cake className="text-brown-gold" size={48} />,
      title: 'Pâtisseries',
      description: 'Tartes aux fruits, éclairs, entremets et créations saisonnières, pour toutes les occasions.',
      image: 'https://images.pexels.com/photos/1126728/pexels-photo-1126728.jpeg'
    },
    {
      icon: <Coffee className="text-brown-gold" size={48} />,
      title: 'Snacking & Spécialités Bretonnes',
      description: 'Sandwichs, quiches, galettes… et bien sûr le kouign-amann et le far breton.',
      image: 'https://images.pexels.com/photos/4110256/pexels-photo-4110256.jpeg'
    }
  ];

  return (
    <section id="produits" className="py-20 bg-beige-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-navy-breton mb-6">
            Nos Produits
          </h2>
          <div className="w-24 h-1 bg-brown-gold mx-auto mb-8"></div>
          <p className="font-opensans text-lg text-warm-gray max-w-3xl mx-auto">
            Découvrez notre gamme complète de produits artisanaux, préparés chaque jour avec passion
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div 
                className="h-48 bg-cover bg-center relative"
                style={{ backgroundImage: `url(${category.image})` }}
              >
                <div className="absolute inset-0 bg-navy-breton/20"></div>
                <div className="absolute top-4 left-4 bg-white/90 p-3 rounded-full">
                  {category.icon}
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-playfair text-xl font-semibold text-navy-breton mb-3">
                  {category.title}
                </h3>
                <p className="font-opensans text-warm-gray leading-relaxed">
                  {category.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;