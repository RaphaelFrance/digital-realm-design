
import React from 'react';
import { CheckCircle } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">About DigitalRealm</h2>
            <p className="text-foreground/80 text-lg mb-6">
              We are a team of passionate web developers and designers dedicated to creating cutting-edge digital experiences that drive business growth.
            </p>
            <p className="text-foreground/80 mb-8">
              With years of experience in the industry, we've helped businesses of all sizes establish a strong online presence that converts visitors into customers. Our approach combines technical excellence with strategic insight to deliver solutions that exceed expectations.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <CheckCircle className="text-blue-400 mr-3 mt-1 flex-shrink-0" size={20} />
                <p>10+ years of experience in web development</p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="text-blue-400 mr-3 mt-1 flex-shrink-0" size={20} />
                <p>100+ successful projects delivered on time</p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="text-blue-400 mr-3 mt-1 flex-shrink-0" size={20} />
                <p>Award-winning design and development team</p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="text-blue-400 mr-3 mt-1 flex-shrink-0" size={20} />
                <p>Expertise in the latest web technologies</p>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative z-10 rounded-xl overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&q=80&w=1000" 
                alt="Our Team" 
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
