
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Layers3, Hammer, Cpu, Code } from 'lucide-react';
import { Link } from 'react-router-dom';

const Tillverkning = () => {
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
          <h1 className="heading-lg mb-4 animate-slideDown opacity-0">Tillverkningsmetoder</h1>
          <p className="text-white/70 max-w-3xl animate-slideDown opacity-0" style={{ animationDelay: '0.2s' }}>
            Avancerade och traditionella tillverkningsmetoder för dina unika projekt
          </p>
        </div>
      </div>
      
      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="glass rounded-xl p-8 md:p-10 animate-slideUp opacity-0">
            
            <div className="mb-10">
              <h3 className="heading-md mb-4 text-white flex items-center">
                <Layers3 className="text-primary mr-3" size={24} />
                <span>Kombinerad tillverkningsmetodik</span>
              </h3>
              <p className="text-white/80 mb-4">
                Vi kombinerar frihandsarbete och traditionellt hantverk med moderna tillverkningsprocesser 
                för att uppnå optimala resultat för ditt projekt. Denna flexibla metodik gör att vi kan anpassa 
                vår tillverkningsprocess efter dina specifika behov och krav.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div className="p-5 bg-white/5 rounded-lg">
                  <h4 className="text-lg font-semibold text-white mb-3">Avverkande bearbetning</h4>
                  <ul className="space-y-2 text-white/80">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>CNC-Fräsning</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Vattenskärning</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Laserskärning</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Annan avverkande bearbetning</span>
                    </li>
                  </ul>
                </div>
                
                <div className="p-5 bg-white/5 rounded-lg">
                  <h4 className="text-lg font-semibold text-white mb-3">Additiv tillverkning</h4>
                  <ul className="space-y-2 text-white/80">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Vacuum-laminering</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Formgjutning</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>3D-printning</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-8">
              {/* Left column */}
              <div>
                <div className="mb-8">
                  <h3 className="heading-md mb-4 text-white flex items-center">
                    <Cpu className="text-primary mr-3" size={24} />
                    <span>Elektronik & Styrning</span>
                  </h3>
                  <p className="text-white/80 mb-4">
                    Vi erbjuder omfattande lösningar inom elektronik, PLC och mikrocontroller-styrning samt 
                    pneumatiklösningar. Våra styrningssystem är skräddarsydda för att passa dina 
                    specifika krav och kan integreras med befintliga system eller designas från grunden.
                  </p>
                </div>
                
                <div className="mb-8">
                  <h3 className="heading-md mb-4 text-white flex items-center">
                    <Code className="text-primary mr-3" size={24} />
                    <span>Programmering</span>
                  </h3>
                  <p className="text-white/80 mb-4">
                    Vi utför programmering i C++ för att skapa robusta och effektiva styrprogram för 
                    dina tekniska lösningar. Vår programmeringskompetens säkerställer att din hårdvara 
                    fungerar optimalt och kan anpassas efter dina specifika behov.
                  </p>
                </div>
              </div>
              
              {/* Right column */}
              <div>
                <div className="mb-8">
                  <h3 className="heading-md mb-4 text-white flex items-center">
                    <Hammer className="text-primary mr-3" size={24} />
                    <span>Specialteknik</span>
                  </h3>
                  <p className="text-white/80 mb-4">
                    Vi har specialistkompetens inom följande områden:
                  </p>
                  <ul className="space-y-2 text-white/80 ml-4">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Silikonavgjutning för extremt noggrann detaljåtergivning</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>ColdMetal (metallimitation), glas/is eller alternativa ytbeläggningar</span>
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

export default Tillverkning;
