import { Camera, ChevronLeft, ChevronRight } from 'lucide-react';
import { useRef, useState } from 'react';
import galleryData from '../data/gallery.json';

const Gallery = () => {
  const images = galleryData;
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400 + 24; // width + gap
      const newScrollLeft = scrollContainerRef.current.scrollLeft + (direction === 'left' ? -scrollAmount : scrollAmount);
      
      scrollContainerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth'
      });
    }
  };

  const checkScrollButtons = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

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

        <div className="relative">
          {/* Bouton flèche gauche */}
          <button
            onClick={() => scroll('left')}
            disabled={!canScrollLeft}
            className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/90 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 ${
              canScrollLeft 
                ? 'text-navy-breton hover:text-brown-gold hover:scale-110' 
                : 'text-gray-300 cursor-not-allowed'
            }`}
          >
            <ChevronLeft size={24} />
          </button>

          {/* Bouton flèche droite */}
          <button
            onClick={() => scroll('right')}
            disabled={!canScrollRight}
            className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/90 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 ${
              canScrollRight 
                ? 'text-navy-breton hover:text-brown-gold hover:scale-110' 
                : 'text-gray-300 cursor-not-allowed'
            }`}
          >
            <ChevronRight size={24} />
          </button>

          <div 
            ref={scrollContainerRef}
            className="overflow-x-auto scrollbar-hide"
            onScroll={checkScrollButtons}
          >
            <div className="flex gap-6 px-16" style={{ width: `${Math.ceil(images.length / 2) * 400}px` }}>
              {Array.from({ length: Math.ceil(images.length / 2) }, (_, rowIndex) => (
                <div key={rowIndex} className="flex flex-col gap-6 min-w-0">
                  {images.slice(rowIndex * 2, (rowIndex + 1) * 2).map((image, colIndex) => (
                    <div 
                      key={colIndex}
                      className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 animate-slide-up w-80 h-64"
                      style={{ animationDelay: `${(rowIndex * 2 + colIndex) * 0.1}s` }}
                    >
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-navy-breton/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <Camera className="text-white" size={32} />
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;