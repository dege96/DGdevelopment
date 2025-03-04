
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Cpu, CircuitBoard, Terminal, Code } from 'lucide-react';
import { Link } from 'react-router-dom';

const TekniskDesign = () => {
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
          <h1 className="heading-lg mb-4 animate-slideDown opacity-0">Teknisk Design</h1>
          <p className="text-white/70 max-w-3xl animate-slideDown opacity-0" style={{ animationDelay: '0.2s' }}>
            Vårt team tillhandahåller expertis inom teknisk design, från systemutveckling till projektledning och praktiska lösningar.
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
                    <span>Systemutveckling</span>
                  </h3>
                  <p className="text-white/80 mb-4">
                    Vi utvecklar skräddarsydda automations- och styrsystem anpassade för din verksamhets unika behov. 
                    Våra lösningar kombinerar teknisk kunskap med praktisk implementering för optimala resultat.
                  </p>
                </div>
                
                <div className="mb-8">
                  <h3 className="heading-md mb-4 text-white flex items-center">
                    <Cpu className="text-primary mr-3" size={24} />
                    <span>Produktdesign</span>
                  </h3>
                  <p className="text-white/80 mb-4">
                    Från koncept till färdig produkt hjälper vi dig att utveckla innovativa lösningar med fokus på funktionalitet, 
                    användarvänlighet och estetik. Vi tar hänsyn till både tekniska krav och marknadens behov.
                  </p>
                </div>
              </div>
              
              {/* Right column */}
              <div>
                <div className="mb-8">
                  <h3 className="heading-md mb-4 text-white flex items-center">
                    <Terminal className="text-primary mr-3" size={24} />
                    <span>Elektronik & Styrning</span>
                  </h3>
                  <p className="text-white/80 mb-4">
                    Vi erbjuder expertis inom elektronik, PLC, mikrocontroller-styrning och pneumatiklösningar. 
                    Vårt team anpassar lösningar efter dina specifika tekniska förutsättningar och mål.
                  </p>
                  <p className="text-white/80 mb-4">
                    Vi tillhandahåller även C++ programmering för att implementera avancerade funktioner i dina system.
                  </p>
                </div>
                
                <div className="mb-8">
                  <h3 className="heading-md mb-4 text-white flex items-center">
                    <Code className="text-primary mr-3" size={24} />
                    <span>Teknisk projektledning</span>
                  </h3>
                  <p className="text-white/80 mb-4">
                    Vi erbjuder komplett projektledning för att säkerställa att din tekniska lösning levereras enligt 
                    plan, inom budget och med önskad kvalitet. Vår erfarenhet hjälper dig att undvika fallgropar och 
                    optimera utvecklingsprocessen.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-10 border-t border-white/10 pt-8">
              <h3 className="text-xl font-semibold text-white mb-4">Helhetsansvar</h3>
              <p className="text-white/80">
                Vi tar helhetsansvar för tillverkning, samordning, installation och driftsättning. Detta inkluderar 
                projektplan, manualer och annan nödvändig dokumentation för att säkerställa en framgångsrik implementering 
                av ditt projekt.
              </p>
            </div>
            
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default TekniskDesign;
