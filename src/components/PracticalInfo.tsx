import { MapPin, Clock, Phone, Instagram } from 'lucide-react';

const PracticalInfo = () => {
  return (
    <section id="infos-pratiques" className="py-20 bg-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-navy-breton mb-6">
            Informations Pratiques
          </h2>
          <div className="w-24 h-1 bg-brown-gold mx-auto mb-8"></div>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Adresses */}
            <div className="animate-slide-up">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h3 className="font-playfair text-2xl font-semibold text-navy-breton mb-6 flex items-center">
                  <MapPin className="text-brown-gold mr-3" size={28} />
                  Nos Adresses
                </h3>
                
                <div className="space-y-6">
                  <div className="border-l-4 border-brown-gold pl-4">
                    <h4 className="font-opensans font-semibold text-navy-breton mb-2">Crach</h4>
                    <p className="font-opensans text-warm-gray">
                      5 Lann Kermarquer<br />
                      56950 Crach
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-brown-gold pl-4">
                    <h4 className="font-opensans font-semibold text-navy-breton mb-2">Auray</h4>
                    <p className="font-opensans text-warm-gray">
                      2 Rue de la Terre Rouge<br />
                      56400 Auray
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact & Horaires */}
            <div className="animate-slide-up">
              <div className="space-y-6">
                <div className="bg-white rounded-lg shadow-lg p-8">
                  <h3 className="font-playfair text-2xl font-semibold text-navy-breton mb-6 flex items-center">
                    <Clock className="text-brown-gold mr-3" size={28} />
                    Horaires
                  </h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="font-opensans font-medium text-navy-breton">Lundi – Samedi</span>
                      <span className="font-opensans text-warm-gray">7h00 – 19h30/20h</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-opensans font-medium text-navy-breton">Dimanche</span>
                      <span className="font-opensans text-warm-gray">Fermé</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-lg p-8">
                  <h3 className="font-playfair text-2xl font-semibold text-navy-breton mb-6">
                    Contact
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <Phone className="text-brown-gold mr-3" size={24} />
                      <a href="tel:0297592443" className="font-opensans text-warm-gray hover:text-brown-gold transition-colors">
                        02 97 59 24 43
                      </a>
                    </div>
                    <div className="flex items-center">
                      <Instagram className="text-brown-gold mr-3" size={24} />
                      <a 
                        href="https://www.instagram.com/aupainquicrak/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="font-opensans text-warm-gray hover:text-brown-gold transition-colors"
                      >
                        @aupainquicrak
                      </a>
                    </div>
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

export default PracticalInfo;