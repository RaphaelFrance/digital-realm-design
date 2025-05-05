
import React from 'react';
import { Code, Globe, Laptop, LayoutDashboard, Server, Settings } from 'lucide-react';

const servicesData = [
  {
    icon: Globe,
    title: 'Website Development',
    description: 'Custom, responsive websites tailored to your brand and business objectives.'
  },
  {
    icon: LayoutDashboard,
    title: 'UI/UX Design',
    description: 'Intuitive interfaces and engaging user experiences that convert visitors into customers.'
  },
  {
    icon: Code,
    title: 'Web Applications',
    description: 'Powerful, scalable web applications with robust functionality.'
  },
  {
    icon: Server,
    title: 'API Integration',
    description: 'Seamless integration with third-party services and APIs to extend functionality.'
  },
  {
    icon: Settings,
    title: 'Maintenance & Support',
    description: 'Ongoing support and maintenance to keep your digital presence running smoothly.'
  },
  {
    icon: Laptop,
    title: 'E-commerce Solutions',
    description: 'Feature-rich online stores with secure payment processing and inventory management.'
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-secondary/30">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4">Our Services</h2>
          <p className="text-foreground/70 text-lg">
            Comprehensive web development solutions tailored to meet your business needs and exceed your expectations.
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
