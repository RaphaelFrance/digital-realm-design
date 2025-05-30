
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const portfolioItems = [
  {
    title: "Plateforme E-commerce",
    category: "Développement Web",
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&q=80&w=800",
    description: "Une plateforme e-commerce moderne avec un processus de paiement fluide."
  },
  {
    title: "Tableau de Bord Financier",
    category: "Application Web",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    description: "Tableau de bord interactif avec visualisation de données en temps réel."
  },
  {
    title: "Site Corporate",
    category: "Design UI/UX",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=800",
    description: "Site d'entreprise professionnel avec un design moderne et une expérience utilisateur optimisée."
  },
];

const Portfolio = () => {
  return (
    <section id="projets" className="py-20">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4">Nos Projets</h2>
          <p className="text-foreground/70 text-lg">
            Une sélection de nos réalisations récentes, livrées avec précision et excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <div 
              key={index} 
              className="group relative overflow-hidden rounded-xl card-hover bg-secondary/50 backdrop-blur-sm"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="mb-2">
                  <span className="text-xs font-medium px-3 py-1 bg-primary/20 text-blue-400 rounded-full">
                    {item.category}
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-foreground/70 mb-4">{item.description}</p>
                <a 
                  href="#" 
                  className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
                >
                  Voir le projet
                  <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button variant="outline">
            Voir tous les projets
            <ArrowRight size={16} className="ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
