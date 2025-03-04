
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Printer, Shapes, Laser, Box } from 'lucide-react';
import { Link } from 'react-router-dom';

const Formgivning = () => {
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
          <h1 className="heading-lg mb-4 animate-slideDown opacity-0">Formgivning</h1>
          <p className="text-white/70 max-w-3xl animate-slideDown opacity-0" style={{ animationDelay: '0.2s' }}>
            Skapa fysiska modeller och prototyper med avancerade tekniker och traditionellt hantverk
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
                    <Printer className="text-primary mr-3" size={24} />
                    <span>3D design & 3D print</span>
                  </h3>
                  <p className="text-white/80 mb-4">
                    Vi erbjuder omfattande 3D-designtjänster och utskrifter med hög precision. Våra 3D-utskrifter 
                    kan tillverkas som enstaka exemplar eller i kortare serier, med mått upp till 2100x80x80 cm. Vi 
                    inkluderar alltid design av modellen för att säkerställa optimala resultat.
                  </p>
                </div>
                
                <div className="mb-8">
                  <h3 className="heading-md mb-4 text-white flex items-center">
                    <Shapes className="text-primary mr-3" size={24} />
                    <span>Traditionell skulptering</span>
                  </h3>
                  <p className="text-white/80 mb-4">
                    Vårt team behärskar traditionella skulpteringstekniker som kompletterar våra digitala och tekniska 
                    metoder. Denna kombination av klassiska och moderna metoder ger oss möjlighet att skapa unika och 
                    detaljerade modeller med hög kvalitet.
                  </p>
                </div>
              </div>
              
              {/* Right column */}
              <div>
                <div className="mb-8">
                  <h3 className="heading-md mb-4 text-white flex items-center">
                    <Laser className="text-primary mr-3" size={24} />
                    <span>Lasergravering</span>
                  </h3>
                  <p className="text-white/80 mb-4">
                    Vi erbjuder lasergraveringstjänster för text, dekoration och fotogravering på material som trä, 
                    plast, metall och mycket mer. Vår laserteknik ger exakta och detaljerade resultat för både 
                    funktionella och dekorativa ändamål.
                  </p>
                </div>
                
                <div className="mb-8">
                  <h3 className="heading-md mb-4 text-white flex items-center">
                    <Box className="text-primary mr-3" size={24} />
                    <span>Formtillverkning & Modellbygge</span>
                  </h3>
                  <p className="text-white/80 mb-4">
                    Vi specialiserar oss på formtillverkning, både nytillverkning och avgjutning. Detta inkluderar 
                    silikonavgjutning för extremt noggrann detaljåtergivning samt ColdMetal (metallimitation), glas/is 
                    eller alternativa ytbeläggningar.
                  </p>
                  <p className="text-white/80">
                    Vi bygger även "klassiska" modeller för utställningar och konceptstudier, med eller utan ljussättning 
                    och mekatronik. Våra modeller anpassas helt efter dina specifika behov och krav.
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

export default Formgivning;
