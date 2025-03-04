
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Printer, Box, Lightbulb } from 'lucide-react';
import { Link } from 'react-router-dom';

const Prototyp = () => {
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
          <h1 className="heading-lg mb-4 animate-slideDown opacity-0">Prototypframställning</h1>
          <p className="text-white/70 max-w-3xl animate-slideDown opacity-0" style={{ animationDelay: '0.2s' }}>
            Omsätt dina idéer till fysiska prototyper med våra avancerade tillverkningsmetoder
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
                    Våra 3D-designtjänster och 3D-utskrifter ger dig möjlighet att snabbt och kostnadseffektivt 
                    testa och utvärdera dina idéer. Vi erbjuder utskrifter av enstaka exemplar eller i 
                    korta serier med mått upp till 2100x80x80 cm.
                  </p>
                  <p className="text-white/80 mb-4">
                    Varje utskrift inkluderar design av modellen, vilket säkerställer att din prototyp 
                    optimeras för både form och funktion. Vårt team arbetar med dig för att förstå dina 
                    behov och skapa en prototyp som uppfyller dina krav.
                  </p>
                </div>
                
                <div className="mb-8">
                  <h3 className="heading-md mb-4 text-white flex items-center">
                    <Box className="text-primary mr-3" size={24} />
                    <span>Formtillverkning</span>
                  </h3>
                  <p className="text-white/80 mb-4">
                    Vi erbjuder omfattande tjänster inom formtillverkning, både nytillverkning och avgjutning. 
                    Med vår expertis kan vi skapa formar för olika tillverkningsprocesser, från enklare 
                    prototyper till produktionsklara formar.
                  </p>
                  <p className="text-white/80 mb-4">
                    Våra formar kan användas för gjutning i olika material och är designade för att ge 
                    optimala resultat med minimal efterbearbetning.
                  </p>
                </div>
              </div>
              
              {/* Right column */}
              <div>
                <div className="mb-8">
                  <h3 className="heading-md mb-4 text-white flex items-center">
                    <Lightbulb className="text-primary mr-3" size={24} />
                    <span>Modellbygge</span>
                  </h3>
                  <p className="text-white/80 mb-4">
                    Vi bygger "klassiska" modeller för utställningar, konceptstudier och andra ändamål. Våra 
                    modeller kan tillverkas med eller utan ljussättning och mekatronik, beroende på dina 
                    behov och önskemål.
                  </p>
                  <p className="text-white/80 mb-4">
                    Varje modell tillverkas med noggrann hänsyn till detaljer och finish, vilket säkerställer 
                    att slutresultatet håller högsta kvalitet och ger en korrekt representation av din design.
                  </p>
                </div>
                
                <div className="mt-8 p-6 bg-primary/10 rounded-lg border border-primary/30">
                  <h4 className="text-lg font-semibold text-white mb-2">Specialtjänster:</h4>
                  <ul className="space-y-2 text-white/80">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Silikonavgjutning för extremt noggrann detaljåtergivning</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>ColdMetal (metallimitation), glas/is och alternativa ytbeläggningar</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Patinering och andra textur- och färgeffekter</span>
                    </li>
                  </ul>
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

export default Prototyp;
