
import React from 'react';
import { Code, Globe, Laptop, LayoutDashboard, Server, Settings } from 'lucide-react';

const servicesData = [
  {
    icon: Globe,
    title: 'Développement de Site Web',
    description: 'Sites web sur mesure et adaptés à votre marque et vos objectifs commerciaux.'
  },
  {
    icon: LayoutDashboard,
    title: 'Design UI/UX',
    description: 'Interfaces intuitives qui convertissent les visiteurs en clients.'
  },
  {
    icon: Code,
    title: 'Applications Web',
    description: 'Applications web puissantes et évolutives avec des fonctionnalités robustes.'
  },
  {
    icon: Server,
    title: 'Intégration API',
    description: 'Intégration transparente avec des services tiers pour étendre les fonctionnalités.'
  },
  {
    icon: Settings,
    title: 'Maintenance & Support',
    description: 'Support continu pour maintenir votre présence numérique en parfait état.'
  },
  {
    icon: Laptop,
    title: 'Solutions E-commerce',
    description: 'Boutiques en ligne riches en fonctionnalités avec paiement sécurisé.'
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-secondary/30">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4">Nos Services</h2>
          <p className="text-foreground/70 text-lg">
            Des solutions de développement web complètes adaptées à vos besoins professionnels.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <div 
              key={index} 
              className="bg-background/50 p-8 rounded-xl backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-all card-hover"
            >
              <div className="bg-blue-500/10 p-3 rounded-lg w-fit mb-6">
                <service.icon className="text-blue-400" size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-foreground/70">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
