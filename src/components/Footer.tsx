import React from 'react';
import { Heart, MapPin, Phone, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-navy-breton text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Logo et description */}
          <div className="animate-slide-up">
            <h3 className="font-playfair text-2xl font-bold mb-4">Au Pain Qui Crak'</h3>
            <p className="font-opensans text-cream/80 mb-4 leading-relaxed">
              Maître artisan boulanger passionné, créateur de la meilleure baguette tradition du Morbihan 2022.
            </p>
            <div className="flex items-center text-brown-gold">
              <Heart className="mr-2" size={16} />
              <span className="font-opensans text-sm">Fait avec passion en Bretagne</span>
            </div>
          </div>

          {/* Adresses */}
          <div className="animate-slide-up">
            <h4 className="font-playfair text-lg font-semibold mb-4">Nos Boutiques</h4>
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="text-brown-gold mr-2 mt-1 flex-shrink-0" size={16} />
                <div className="font-opensans text-cream/80 text-sm">
                  <div className="font-medium">Crach</div>
                  <div>5 Lann Kermarquer, 56950 Crach</div>
                </div>
              </div>
              <div className="flex items-start">
                <MapPin className="text-brown-gold mr-2 mt-1 flex-shrink-0" size={16} />
                <div className="font-opensans text-cream/80 text-sm">
                  <div className="font-medium">Auray</div>
                  <div>2 Rue de la Terre Rouge, 56400 Auray</div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div className="animate-slide-up">
            <h4 className="font-playfair text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center">
                <Phone className="text-brown-gold mr-2" size={16} />
                <a href="tel:0297592443" className="font-opensans text-cream/80 text-sm hover:text-brown-gold transition-colors">
                  02 97 59 24 43
                </a>
              </div>
              <div className="flex items-center">
                <Instagram className="text-brown-gold mr-2" size={16} />
                <a 
                  href="https://www.instagram.com/aupainquicrak/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="font-opensans text-cream/80 text-sm hover:text-brown-gold transition-colors"
                >
                  @aupainquicrak
                </a>
              </div>
            </div>
            <div className="mt-4 font-opensans text-cream/80 text-sm">
              <div className="font-medium mb-1">Horaires</div>
              <div>Lun-Sam : 7h00-19h30/20h</div>
              <div>Dimanche : Fermé</div>
            </div>
          </div>
        </div>

        <div className="border-t border-cream/20 mt-8 pt-8 text-center">
          <p className="font-opensans text-cream/60 text-sm">
            © 2024 Au Pain Qui Crak' - Tous droits réservés | Site créé avec passion pour le goût authentique
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;