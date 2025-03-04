
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Camera, FileEdit, Image } from 'lucide-react';
import { Link } from 'react-router-dom';

const FotoDokumentering = () => {
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
          <h1 className="heading-lg mb-4 animate-slideDown opacity-0">Foto & Dokumentering</h1>
          <p className="text-white/70 max-w-3xl animate-slideDown opacity-0" style={{ animationDelay: '0.2s' }}>
            Professionella foto- och dokumentationstjänster för ditt projekt
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
                    <Camera className="text-primary mr-3" size={24} />
                    <span>Fototjänster</span>
                  </h3>
                  <p className="text-white/80 mb-4">
                    Vi erbjuder högkvalitativa fototjänster, både på plats hos dig eller i vår studio. Vårt team 
                    fotograferar produkter, events och annat med professionell utrustning och ett tränat öga för 
                    komposition och ljussättning.
                  </p>
                  <p className="text-white/80 mb-4">
                    Vi anpassar våra fotosessioner efter dina specifika behov, oavsett om det handlar om 
                    produktfotografering för e-handel, dokumentation av ett event eller bilder för marknadsföringsmaterial.
                  </p>
                </div>
              </div>
              
              {/* Right column */}
              <div>
                <div className="mb-8">
                  <h3 className="heading-md mb-4 text-white flex items-center">
                    <FileEdit className="text-primary mr-3" size={24} />
                    <span>Retuschering & Formatering</span>
                  </h3>
                  <p className="text-white/80 mb-4">
                    Efter fotograferingen erbjuder vi professionell bildbehandling, retuschering, formatering och 
                    montering. Vi säkerställer att dina bilder får rätt färgjusteringar, beskärning och andra 
                    nödvändiga justeringar för att uppnå bästa möjliga resultat.
                  </p>
                  <p className="text-white/80 mb-4">
                    Våra tjänster inkluderar även avancerad retuschering, borttagning av bakgrunder, skapande av 
                    bildkompositioner och anpassning av bilder för olika medier och användningsområden.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-10 border-t border-white/10 pt-8">
              <h3 className="heading-md mb-4 text-white flex items-center">
                <Image className="text-primary mr-3" size={24} />
                <span>Mer om våra mediatjänster</span>
              </h3>
              <p className="text-white/80 mb-4">
                För mer information om våra fototjänster för produkter och events, samt vårt naturfotogalleri, 
                besök vår mediasida:
              </p>
              <div className="flex space-x-4 mt-6">
                <Link 
                  to="/media" 
                  className="py-2 px-6 bg-primary/20 hover:bg-primary/30 text-white rounded-md transition-colors"
                >
                  Media
                </Link>
                <Link 
                  to="/media/naturfoto" 
                  className="py-2 px-6 bg-primary/20 hover:bg-primary/30 text-white rounded-md transition-colors"
                >
                  Naturfotogalleri
                </Link>
              </div>
            </div>
            
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default FotoDokumentering;
