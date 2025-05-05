
import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Contact = () => {
  return (
    <section id="contact" className="py-20">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl font-bold mb-6">Discutons de Votre Projet</h2>
            <p className="text-foreground/80 text-lg mb-8">
              Prêt à transformer votre présence numérique? Contactez notre équipe pour discuter de la façon dont nous pouvons vous aider.
            </p>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-center">
                <div className="bg-blue-500/20 p-3 rounded-lg mr-4">
                  <Mail className="text-blue-400" size={20} />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-foreground/60 mb-1">Email</h4>
                  <p className="text-lg">contact@webexpert.fr</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="bg-blue-500/20 p-3 rounded-lg mr-4">
                  <Phone className="text-blue-400" size={20} />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-foreground/60 mb-1">Téléphone</h4>
                  <p className="text-lg">01 23 45 67 89</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="bg-blue-500/20 p-3 rounded-lg mr-4">
                  <MapPin className="text-blue-400" size={20} />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-foreground/60 mb-1">Adresse</h4>
                  <p className="text-lg">123 Avenue de la Tech, Paris</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-secondary/50 backdrop-blur-sm p-8 rounded-xl border border-border/50">
            <h3 className="text-2xl font-semibold mb-6">Envoyez-nous un Message</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Nom
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Votre nom"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Votre email"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Sujet
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Sujet de votre message"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                  placeholder="Votre message"
                ></textarea>
              </div>
              
              <Button type="submit" className="w-full">Envoyer le Message</Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
