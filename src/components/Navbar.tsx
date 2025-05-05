
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-background/90 backdrop-blur-lg shadow-md py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container flex items-center justify-between">
        <a href="#" className="text-2xl font-bold text-gradient">
          WebExpert
        </a>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#avantages" className="text-foreground/80 hover:text-primary transition-colors">
            Avantages
          </a>
          <a href="#projets" className="text-foreground/80 hover:text-primary transition-colors">
            Projets
          </a>
          <a href="#tarifs" className="text-foreground/80 hover:text-primary transition-colors">
            Tarifs
          </a>
          <a href="#contact" className="text-foreground/80 hover:text-primary transition-colors">
            Contact
          </a>
          <Button>Commencer</Button>
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-background/95 backdrop-blur-lg shadow-lg py-4">
          <nav className="container flex flex-col space-y-4">
            <a 
              href="#avantages" 
              className="text-foreground/80 hover:text-primary transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Avantages
            </a>
            <a 
              href="#projets" 
              className="text-foreground/80 hover:text-primary transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Projets
            </a>
            <a 
              href="#tarifs" 
              className="text-foreground/80 hover:text-primary transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Tarifs
            </a>
            <a 
              href="#contact" 
              className="text-foreground/80 hover:text-primary transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </a>
            <Button className="w-full">Commencer</Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
