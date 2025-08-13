import React, { useState } from 'react';
import { Send, Mail, MessageSquare } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Ici vous pourriez ajouter la logique d'envoi du formulaire
    console.log('Form submitted:', formData);
    alert('Merci pour votre message ! Nous vous répondrons rapidement.');
  };

  return (
    <section id="contact" className="py-20 bg-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-navy-breton mb-6">
            Contact
          </h2>
          <div className="w-24 h-1 bg-brown-gold mx-auto mb-8"></div>
          <p className="font-opensans text-lg text-warm-gray max-w-3xl mx-auto">
            Vous souhaitez passer commande ou en savoir plus ? Remplissez notre formulaire, 
            ou venez simplement nous voir… Chez Au Pain Qui Crak', on vous accueille toujours 
            avec le sourire et le parfum du pain chaud.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Informations de contact */}
            <div className="animate-slide-up">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h3 className="font-playfair text-2xl font-semibold text-navy-breton mb-6 flex items-center">
                  <MessageSquare className="text-brown-gold mr-3" size={28} />
                  Parlons ensemble
                </h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <Mail className="text-brown-gold mt-1 mr-4 flex-shrink-0" size={20} />
                    <div>
                      <h4 className="font-opensans font-semibold text-navy-breton mb-2">
                        Commandes spéciales
                      </h4>
                      <p className="font-opensans text-warm-gray">
                        Gâteaux d'anniversaire, plateaux pour événements, 
                        commandes en gros... N'hésitez pas à nous contacter !
                      </p>
                    </div>
                  </div>
                  
                  <div className="border-l-4 border-brown-gold pl-4">
                    <h4 className="font-opensans font-semibold text-navy-breton mb-2">
                      Nos spécialités sur commande
                    </h4>
                    <ul className="font-opensans text-warm-gray space-y-1">
                      <li>• Pièces montées</li>
                      <li>• Gâteaux personnalisés</li>
                      <li>• Plateaux de viennoiseries</li>
                      <li>• Pain de messe</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Formulaire */}
            <div className="animate-slide-up">
              <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-8">
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block font-opensans font-medium text-navy-breton mb-2">
                      Nom *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-beige-light rounded-lg focus:outline-none focus:ring-2 focus:ring-brown-gold focus:border-transparent transition-all duration-300"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block font-opensans font-medium text-navy-breton mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-beige-light rounded-lg focus:outline-none focus:ring-2 focus:ring-brown-gold focus:border-transparent transition-all duration-300"
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label htmlFor="subject" className="block font-opensans font-medium text-navy-breton mb-2">
                    Sujet
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-beige-light rounded-lg focus:outline-none focus:ring-2 focus:ring-brown-gold focus:border-transparent transition-all duration-300"
                  >
                    <option value="">Sélectionnez un sujet</option>
                    <option value="commande">Commande spéciale</option>
                    <option value="information">Demande d'information</option>
                    <option value="evenement">Événement</option>
                    <option value="autre">Autre</option>
                  </select>
                </div>

                <div className="mb-6">
                  <label htmlFor="message" className="block font-opensans font-medium text-navy-breton mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-beige-light rounded-lg focus:outline-none focus:ring-2 focus:ring-brown-gold focus:border-transparent transition-all duration-300 resize-vertical"
                    placeholder="Décrivez-nous votre demande..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-brown-gold text-white px-8 py-4 rounded-lg font-opensans font-semibold hover:bg-brown-gold/90 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center"
                >
                  <Send className="mr-2" size={20} />
                  Envoyer le message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;