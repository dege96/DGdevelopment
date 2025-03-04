
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Cube, Layers, Palette, PenLine } from 'lucide-react';
import { Link } from 'react-router-dom';

const CadVisualisering = () => {
  // Animation observer
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target.classList.contains('opacity-0')) {
            entry.target.classList.remove('opacity-0');
          }
        }
      });
    }, { threshold: 0.15 });

    const animateElements = document.querySelectorAll('.animate-slideUp, .animate-slideDown, .animate-fadeIn, .animate-slideRight');
    animateElements.forEach((el) => observer.observe(el));

    return () => {
      animateElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      
      {/* Page Header */}
      <div className="pt-32 pb-12 bg-gradient-to-b from-secondary/20 to-background">
        <div className="container mx-auto px-6">
          <div className="mb-4">
            <Link to="/design-formgivning" className="text-primary hover:text-primary/80">&larr; Design & Formgivning</Link>
          </div>
          <h1 className="heading-lg mb-4 animate-slideDown opacity-0">CAD & Visualisering</h1>
          <p className="text-white/70 max-w-3xl animate-slideDown opacity-0" style={{ animationDelay: '0.2s' }}>
            Professionell visualisering och teknisk design för att ge liv åt dina idéer
          </p>
        </div>
      </div>
      
      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="glass rounded-xl p-8 md:p-10 animate-slideUp opacity-0">
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {/* Left column */}
              <div>
                <div className="mb-8">
                  <h3 className="heading-md mb-4 text-white flex items-center">
                    <Cube className="text-primary mr-3" size={24} />
                    <span>2D/3D visualisering</span>
                  </h3>
                  <p className="text-white/80 mb-4">
                    Vi skapar detaljerade 2D- och 3D-visualiseringar med hjälp av avancerade CAD-verktyg och 
                    renderingstekniker. Våra visualiseringar hjälper dig att se och förstå din produkt eller design 
                    innan den fysiskt tillverkas.
                  </p>
                </div>
                
                <div className="mb-8">
                  <h3 className="heading-md mb-4 text-white flex items-center">
                    <Layers className="text-primary mr-3" size={24} />
                    <span>Formdesign & Formtillverkning</span>
                  </h3>
                  <p className="text-white/80 mb-4">
                    Vi designar och tillverkar former för olika produktionsprocesser, från enklare prototyper till 
                    komplexa produktionsformar. Våra designers arbetar nära produktionsteamet för att säkerställa 
                    optimala resultat.
                  </p>
                  <p className="text-white/80 mb-4">
                    <Link to="/design-formgivning/formgivning" className="text-primary hover:underline">
                      Läs mer om vår formtillverkning
                    </Link>
                  </p>
                </div>
              </div>
              
              {/* Right column */}
              <div>
                <div className="mb-8">
                  <h3 className="heading-md mb-4 text-white flex items-center">
                    <Palette className="text-primary mr-3" size={24} />
                    <span>Illustration & Design</span>
                  </h3>
                  <p className="text-white/80 mb-4">
                    Vårt designteam erbjuder professionella illustrations- och designtjänster, inklusive bildhantering 
                    och foto-retuschering. Vi hjälper dig att förmedla ditt budskap visuellt och stärka din varumärkesidentitet.
                  </p>
                  <p className="text-white/80 mb-4">
                    <Link to="/design-formgivning/foto-dokumentering" className="text-primary hover:underline">
                      Läs mer om våra bildbehandlingstjänster
                    </Link>
                  </p>
                </div>
                
                <div className="mb-8">
                  <h3 className="heading-md mb-4 text-white flex items-center">
                    <PenLine className="text-primary mr-3" size={24} />
                    <span>Konstruktionsritning</span>
                  </h3>
                  <p className="text-white/80 mb-4">
                    Vi skapar detaljerade konstruktionsritningar inom mekanik, elektronik och elektromekanik. 
                    Våra ritningar följer branschstandarder och innehåller all nödvändig information för tillverkning 
                    och montering av din produkt.
                  </p>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default CadVisualisering;
