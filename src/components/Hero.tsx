
import React from 'react';
import { ArrowRight, Globe, Shield, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="min-h-screen pt-32 pb-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-grid opacity-20"></div>
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-primary/20 rounded-full filter blur-3xl animate-glow"></div>
      <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-blue-900/20 rounded-full filter blur-3xl animate-glow"></div>
      
      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Transforming <span className="text-gradient">Digital Visions</span> Into Reality
          </h1>
          <p className="text-xl text-foreground/80 mb-8 md:text-2xl">
            A professional web development agency delivering cutting-edge websites 
            and web applications for forward-thinking businesses.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="group">
              Get a Proposal
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
            </Button>
            <Button size="lg" variant="outline">
              View Portfolio
            </Button>
          </div>
        </div>

        {/* Stats/Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
          <div className="bg-secondary/50 backdrop-blur-sm p-8 rounded-xl animate-fade-in delay-100 card-hover">
            <div className="bg-blue-500/20 p-3 rounded-lg w-fit mb-4">
              <Globe className="text-blue-400" size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Global Reach</h3>
            <p className="text-foreground/70">
              Helping businesses worldwide establish their digital presence with websites that convert.
            </p>
          </div>
          
          <div className="bg-secondary/50 backdrop-blur-sm p-8 rounded-xl animate-fade-in delay-200 card-hover">
            <div className="bg-blue-500/20 p-3 rounded-lg w-fit mb-4">
              <Zap className="text-blue-400" size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Performance Focused</h3>
            <p className="text-foreground/70">
              Building lightning-fast websites that provide exceptional user experiences.
            </p>
          </div>
          
          <div className="bg-secondary/50 backdrop-blur-sm p-8 rounded-xl animate-fade-in delay-300 card-hover">
            <div className="bg-blue-500/20 p-3 rounded-lg w-fit mb-4">
              <Shield className="text-blue-400" size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Secure Solutions</h3>
            <p className="text-foreground/70">
              Implementing robust security measures to protect your digital assets.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
