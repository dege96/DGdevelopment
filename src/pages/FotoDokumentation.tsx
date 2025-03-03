
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Camera, ArrowRight, Image, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';

const FotoDokumentation = () => {
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
          <h1 className="heading-lg mb-4 animate-slideDown opacity-0">Foto & Dokumentation</h1>
          <p className="text-white/70 max-w-3xl animate-slideDown opacity-0" style={{ animationDelay: '0.2s' }}>
            Professionell fotografi och dokumentation för dina projekt
          </p>
        </div>
      </div>
      
      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="glass rounded-xl p-8 md:p-10 mb-12 animate-slideUp opacity-0">
            <h3 className="heading-md mb-8 text-white flex items-center">
              <Camera className="text-primary mr-3" size={24} />
              <span>Foto & Dokumentation</span>
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-medium mb-3 text-white">Fototjänster</h4>
                <ul className="space-y-2 text-white/80">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Professionell fotografering på plats eller i studio</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Retuschering och bildbehandling</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Formatering för olika användningsområden</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Bildmontering och komposition</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-xl font-medium mb-3 text-white">Dokumentation</h4>
                <ul className="space-y-2 text-white/80">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Manualer och användarinstruktioner</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Teknisk dokumentation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Projektplaner</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Process- och metodbeskrivningar</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Gallery Categories */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-slideUp opacity-0" style={{ animationDelay: '0.3s' }}>
            <Link to="/foto-dokumentation/produkt-event" className="group">
              <div className="glass rounded-xl p-6 h-full hover:bg-white/5 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="bg-secondary/50 p-3 rounded-lg mr-4 group-hover:bg-primary/20 transition-colors">
                    <Image className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">Produkt & Event</h3>
                </div>
                <p className="text-white/70 mb-4">
                  Gallerisida med produktfotografier och eventdokumentation
                </p>
                <div className="inline-flex items-center text-primary group-hover:translate-x-1 transition-transform duration-300">
                  Visa galleri <ArrowRight className="ml-1 w-4 h-4" />
                </div>
              </div>
            </Link>
            
            <Link to="/foto-dokumentation/natur" className="group">
              <div className="glass rounded-xl p-6 h-full hover:bg-white/5 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="bg-secondary/50 p-3 rounded-lg mr-4 group-hover:bg-primary/20 transition-colors">
                    <FileText className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">Natur</h3>
                </div>
                <p className="text-white/70 mb-4">
                  Gallerisida med naturfotografier
                </p>
                <div className="inline-flex items-center text-primary group-hover:translate-x-1 transition-transform duration-300">
                  Visa galleri <ArrowRight className="ml-1 w-4 h-4" />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default FotoDokumentation;
