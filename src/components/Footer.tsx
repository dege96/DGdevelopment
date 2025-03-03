
import React from 'react';
import { Mail, Phone, MapPin, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  return (
    <footer className="bg-secondary/30 py-16 px-6 md:px-12" id="kontakt">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div className="mb-8 md:mb-0">
            <div className="text-3xl font-bold text-white mb-2">
              DG<span className="text-primary"> DEVELOPMENT</span>
            </div>
            <p className="text-white/70">Konsultation inom teknisk projektledning, design och tillverkning.</p>
          </div>
          
          <button 
            onClick={scrollToTop}
            className="glass p-4 rounded-full hover:bg-white/10 transition-all group"
            aria-label="Scrolla till toppen"
          >
            <ArrowUp className="text-white group-hover:-translate-y-1 transition-transform" size={20} />
          </button>
        </div>
        
        <div className="border-t border-white/10 pt-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            <div>
              <h4 className="text-lg font-medium text-white mb-4">Kontakt</h4>
              <ul className="space-y-3">
                <li className="flex items-center text-white/70 hover:text-primary transition-colors">
                  <Mail className="mr-3" size={16} />
                  <a href="mailto:info@dgd.solutions">info@dgd.solutions</a>
                </li>
                <li className="flex items-center text-white/70 hover:text-primary transition-colors">
                  <Phone className="mr-3" size={16} />
                  <a href="tel:+46123456789">+46 (0) 12 345 67 89</a>
                </li>
                <li className="flex items-start text-white/70">
                  <MapPin className="mr-3 mt-1" size={16} />
                  <span>Stockholm, Sverige</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-medium text-white mb-4">Tjänster</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#design" className="text-white/70 hover:text-primary transition-colors">
                    Teknisk design
                  </a>
                </li>
                <li>
                  <a href="#design" className="text-white/70 hover:text-primary transition-colors">
                    CAD & Visualisering
                  </a>
                </li>
                <li>
                  <a href="#design" className="text-white/70 hover:text-primary transition-colors">
                    Formgivning
                  </a>
                </li>
                <li>
                  <a href="#design" className="text-white/70 hover:text-primary transition-colors">
                    Foto & Dokumentering
                  </a>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-medium text-white mb-4">Process</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#process" className="text-white/70 hover:text-primary transition-colors">
                    Fråga
                  </a>
                </li>
                <li>
                  <a href="#process" className="text-white/70 hover:text-primary transition-colors">
                    Idé
                  </a>
                </li>
                <li>
                  <a href="#process" className="text-white/70 hover:text-primary transition-colors">
                    Visualisering
                  </a>
                </li>
                <li>
                  <a href="#process" className="text-white/70 hover:text-primary transition-colors">
                    Resultat
                  </a>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-medium text-white mb-4">Resurser</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-white/70 hover:text-primary transition-colors">
                    Projektportfölj
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white/70 hover:text-primary transition-colors">
                    Om oss
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white/70 hover:text-primary transition-colors">
                    Karriär
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white/70 hover:text-primary transition-colors">
                    Vanliga frågor
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-12 pt-8 text-center text-white/50 text-sm">
          <p>© {new Date().getFullYear()} DG Development. Alla rättigheter förbehållna.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
