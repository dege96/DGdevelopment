
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { CircuitBoard, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';

const CadCam = () => {
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
            <Link to="/tekniska-losningar" className="text-primary hover:text-primary/80">&larr; Tekniska Lösningar</Link>
          </div>
          <h1 className="heading-lg mb-4 animate-slideDown opacity-0">CAD/CAM & Teknisk Visualisering</h1>
          <p className="text-white/70 max-w-3xl animate-slideDown opacity-0" style={{ animationDelay: '0.2s' }}>
            Avancerade visuella och tekniska lösningar för din produktutveckling
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
                    <CircuitBoard className="text-primary mr-3" size={24} />
                    <span>2D/3D visualisering</span>
                  </h3>
                  <p className="text-white/80 mb-4">
                    Vi erbjuder avancerade CAD-tjänster och 3D-renderingar för att visualisera dina produkter 
                    eller projekt före tillverkning. Våra visualiseringar hjälper dig att identifiera potential 
                    för förbättringar, kommunicera din vision till intressenter och optimera designen innan 
                    fysisk produktion.
                  </p>
                  <p className="text-white/80 mb-4">
                    Med vår erfarenhet av teknisk visualisering kan vi skapa allt från enkla 2D-ritningar till 
                    fotorealistiska 3D-renderingar och animationer av dina produkter eller system.
                  </p>
                </div>
              </div>
              
              {/* Right column */}
              <div>
                <div className="mb-8">
                  <h3 className="heading-md mb-4 text-white flex items-center">
                    <BookOpen className="text-primary mr-3" size={24} />
                    <span>Konstruktionsritning</span>
                  </h3>
                  <p className="text-white/80 mb-4">
                    Vi skapar detaljerade konstruktionsritningar inom områdena mekanik, elektronik och 
                    elektromekanik. Våra ritningar följer industristandard och innehåller all nödvändig 
                    information för att säkerställa korrekt tillverkning och montering.
                  </p>
                  <p className="text-white/80 mb-4">
                    Med våra konstruktionsritningar får du inte bara en visuell representation av din 
                    produkt, utan också en komplett specifikation som kan användas för kostnadsberäkning, 
                    materialanskaffning och produktionsplanering.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-10 border-t border-white/10 pt-8">
              <p className="text-white/80 mb-4">
                Våra CAD/CAM-tjänster integreras sömlöst med våra prototypframställnings- och 
                tillverkningstjänster, vilket ger dig en komplett lösning från design till färdig produkt. 
                Oavsett om ditt projekt är stort eller litet, erbjuder vi den expertis och de verktyg som krävs 
                för att göra din vision till verklighet.
              </p>
            </div>
            
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default CadCam;
