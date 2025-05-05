
import React from 'react';
import { Check, Euro } from 'lucide-react';
import { Button } from '@/components/ui/button';

const tarifsData = [
  {
    title: "Essentiel",
    price: "49",
    description: "Idéal pour les petites entreprises",
    features: [
      "Site vitrine jusqu'à 5 pages",
      "Hébergement inclus",
      "Maintenance mensuelle",
      "Support par email",
      "Mise à jour de contenu mensuelle"
    ]
  },
  {
    title: "Professionnel",
    price: "99",
    description: "Pour les entreprises en croissance",
    features: [
      "Site jusqu'à 10 pages",
      "Hébergement premium",
      "Maintenance et sécurité renforcée",
      "Support prioritaire",
      "Mises à jour de contenu illimitées",
      "Optimisation SEO de base"
    ],
    popular: true
  },
  {
    title: "Entreprise",
    price: "199",
    description: "Solutions sur mesure",
    features: [
      "Site sur mesure",
      "E-commerce disponible",
      "Hébergement haute performance",
      "Maintenance proactive",
      "Support dédié 7j/7",
      "Optimisation SEO avancée",
      "Intégration CRM et outils marketing"
    ]
  }
];

const Tarifs = () => {
  return (
    <section id="tarifs" className="py-20 bg-secondary/30">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4">Nos Tarifs</h2>
          <p className="text-foreground/70 text-lg">
            Pas de frais de création initiaux - uniquement des mensualités transparentes selon vos besoins.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tarifsData.map((tarif, index) => (
            <div 
              key={index} 
              className={`bg-background/50 backdrop-blur-sm p-8 rounded-xl border ${
                tarif.popular ? 'border-blue-500 ring-2 ring-blue-500/20' : 'border-border/50'
              } relative flex flex-col card-hover`}
            >
              {tarif.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                  Populaire
                </div>
              )}
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-2">{tarif.title}</h3>
                <p className="text-foreground/70 mb-4">{tarif.description}</p>
                <div className="flex items-baseline">
                  <div className="bg-blue-500/20 p-2 rounded-lg mr-2">
                    <Euro className="text-blue-400" size={18} />
                  </div>
                  <span className="text-3xl font-bold">{tarif.price}</span>
                  <span className="text-foreground/70 ml-1">/mois</span>
                </div>
              </div>
              
              <div className="space-y-4 mb-8 flex-grow">
                {tarif.features.map((feature, fidx) => (
                  <div key={fidx} className="flex items-start">
                    <Check className="text-blue-400 mr-3 mt-1 flex-shrink-0" size={18} />
                    <p className="text-sm">{feature}</p>
                  </div>
                ))}
              </div>
              
              <Button 
                className={`w-full ${tarif.popular ? '' : 'bg-secondary hover:bg-secondary/80'}`}
                variant={tarif.popular ? 'default' : 'secondary'}
              >
                Choisir ce forfait
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tarifs;
