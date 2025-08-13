import { Heart, Award, MapPin } from 'lucide-react';

const About = () => {
  return (
    <section id="a-propos" className="py-20 bg-cream">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-navy-breton mb-6">
              Notre Histoire
            </h2>
            <div className="w-24 h-1 bg-brown-gold mx-auto mb-8"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <img
                src="/public/apqc_photo2.jpg"
                alt="Boulanger au travail"
                className="rounded-lg shadow-lg w-full h-96 object-cover"
              />
            </div>
            
            <div className="animate-slide-up">
              <p className="font-opensans text-lg text-navy-breton leading-relaxed mb-8">
                Nichée au cœur de Crach et d'Auray, Au Pain Qui Crak' perpétue un savoir-faire 
                boulanger transmis avec passion. Chaque pain, chaque viennoiserie est pétri, 
                façonné et cuit sur place, avec des ingrédients locaux soigneusement sélectionnés. 
                En 2022, notre baguette tradition a été consacrée meilleure du Morbihan — 
                une fierté que nous partageons chaque jour avec notre clientèle.
              </p>

              <div className="grid grid-cols-1 gap-6">
                <div className="flex items-center">
                  <Heart className="text-brown-gold mr-4 flex-shrink-0" size={24} />
                  <div>
                    <h3 className="font-playfair text-xl font-semibold text-navy-breton mb-2">
                      Passion Artisanale
                    </h3>
                    <p className="font-opensans text-warm-gray">
                      Chaque produit est façonné avec amour et savoir-faire traditionnel
                    </p>
                  </div>
                </div>

                <div className="flex items-center">
                  <Award className="text-brown-gold mr-4 flex-shrink-0" size={24} />
                  <div>
                    <h3 className="font-playfair text-xl font-semibold text-navy-breton mb-2">
                      Récompense 2022
                    </h3>
                    <p className="font-opensans text-warm-gray">
                      Meilleure baguette tradition du Morbihan
                    </p>
                  </div>
                </div>

                <div className="flex items-center">
                  <MapPin className="text-brown-gold mr-4 flex-shrink-0" size={24} />
                  <div>
                    <h3 className="font-playfair text-xl font-semibold text-navy-breton mb-2">
                      Présence Locale
                    </h3>
                    <p className="font-opensans text-warm-gray">
                      Deux boutiques à Crach et Auray pour vous servir
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;