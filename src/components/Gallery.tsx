import { Camera } from 'lucide-react';

const Gallery = () => {
  const images = [
    {
      src: 'https://images.pexels.com/photos/1586947/pexels-photo-1586947.jpeg',
      alt: 'Baguettes artisanales fraîches'
    },
    {
      src: 'https://images.pexels.com/photos/2067396/pexels-photo-2067396.jpeg',
      alt: 'Croissants dorés'
    },
    {
      src: 'https://images.pexels.com/photos/1126728/pexels-photo-1126728.jpeg',
      alt: 'Pâtisseries colorées'
    },
    {
      src: 'https://images.pexels.com/photos/4109943/pexels-photo-4109943.jpeg',
      alt: 'Équipe au fournil'
    },
    {
      src: 'https://images.pexels.com/photos/4110256/pexels-photo-4110256.jpeg',
      alt: 'Spécialités bretonnes'
    },
    {
      src: 'https://images.pexels.com/photos/1775043/pexels-photo-1775043.jpeg',
      alt: 'Pain de campagne'
    }
  ];

  return (
    <section id="galerie" className="py-20 bg-beige-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-navy-breton mb-6">
            Galerie
          </h2>
          <div className="w-24 h-1 bg-brown-gold mx-auto mb-8"></div>
          <p className="font-opensans text-lg text-warm-gray max-w-3xl mx-auto">
            Découvrez en images nos créations artisanales et l'ambiance de nos boulangeries
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-navy-breton/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <Camera className="text-white" size={32} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;