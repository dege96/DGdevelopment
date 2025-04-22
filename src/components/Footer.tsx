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
    <footer className="py-16 px-6 md:px-12" id="kontakt">
      {/* Horizontal line above the footer */}
      <div className="w-full border-t border-white/20 mb-16"></div>
      
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start gap-10 mb-16">
          {/* Logo/Company Section */}
          <div className="w-full md:w-auto">
            <div className="text-3xl font-bold tracking-tight text-white mb-6">
              DG<span className="text-primary"> DEVELOPMENT</span>
            </div>
            <p className="text-white/70 body-md max-w-sm">Konsultation inom teknisk projektledning, design och tillverkning</p>
          </div>

          {/* Contact Information */}
          <div className="w-full md:w-auto">
            <h4 className="text-white heading-sm uppercase tracking-wider mb-6">Kontakt</h4>
            <div className="flex flex-col space-y-3">
              <a href="mailto:johan@dgd.solutions" className="flex items-center text-white hover:text-primary/80 transition-colors">
                <Mail className="mr-3" size={16} />
                <span className="body-md">johan@dgd.solutions</span>
              </a>
              <a href="tel:+46707189877" className="flex items-center text-white hover:text-primary/80 transition-colors">
                <Phone className="mr-3" size={16} />
                <span className="body-md">070 718 98 77</span>
              </a>
              <div className="flex items-start text-white">
                <MapPin className="mr-3 mt-1" size={16} />
                <span className="body-md">
                  Vetevägen 22<br />
                  187 69, Täby<br />
                  Stockholm, Sverige
                </span>
              </div>
            </div>
          </div>

          {/* Back to top button (right-aligned) */}
          <div className="w-full md:w-auto flex md:justify-end items-center md:items-start">
            <button 
              onClick={scrollToTop}
              className="glass p-4 rounded-full hover:bg-white/10 transition-all group"
              aria-label="Scrolla till toppen"
            >
              <ArrowUp className="text-white group-hover:-translate-y-1 transition-transform" size={20} />
            </button>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-6 text-center md:text-left text-white/70 text-sm">
          <p className="body-md">© {new Date().getFullYear()} DG Development</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
