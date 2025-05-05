
import React from 'react';
import { CheckCircle } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">À Propos de WebExpert</h2>
            <p className="text-foreground/80 text-lg mb-6">
              Nous sommes une équipe de développeurs web passionnés dédiés à créer des expériences numériques de pointe qui favorisent la croissance des entreprises.
            </p>
            <p className="text-foreground/80 mb-8">
              Notre approche combine l'excellence technique et une vision stratégique pour livrer des solutions qui dépassent vos attentes, et cela sans frais initiaux de développement.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <CheckCircle className="text-blue-400 mr-3 mt-1 flex-shrink-0" size={20} />
                <p>Plus de 10 ans d'expérience en développement web</p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="text-blue-400 mr-3 mt-1 flex-shrink-0" size={20} />
                <p>Plus de 100 projets réussis livrés à temps</p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="text-blue-400 mr-3 mt-1 flex-shrink-0" size={20} />
                <p>Équipe de design et de développement primée</p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="text-blue-400 mr-3 mt-1 flex-shrink-0" size={20} />
                <p>Expertise dans les dernières technologies web</p>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative z-10 rounded-xl overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&q=80&w=1000" 
                alt="Notre Équipe" 
                className="w-full h-auto"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-8 -left-8 w-64 h-64 bg-blue-500/10 rounded-full z-0"></div>
            <div className="absolute -top-8 -right-8 w-40 h-40 bg-blue-700/10 rounded-full z-0"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
