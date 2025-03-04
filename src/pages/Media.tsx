
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Camera, Image, Film, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const SectionHeader = ({ id, title, icon }: { id: string, title: string, icon: React.ReactNode }) => {
  return (
    <div id={id} className="mb-6 mt-12 pt-6 border-t border-white/10">
      <h3 className="heading-md mb-4 text-white flex items-center">
        {icon}
        <span className="ml-3">{title}</span>
      </h3>
    </div>
  );
};

const Media = () => {
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
          <h1 className="heading-lg mb-4 animate-slideDown opacity-0">Media</h1>
          <p className="text-white/70 max-w-3xl animate-slideDown opacity-0" style={{ animationDelay: '0.2s' }}>
            Professionell fotografi och dokumentation
          </p>
        </div>
      </div>
      
      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="glass rounded-xl p-8 md:p-10 animate-slideUp opacity-0">
            
            <SectionHeader 
              id="produktfoto" 
              title="Produktfotografering" 
              icon={<Camera className="text-primary" size={24} />} 
            />
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-white/80 ml-4 mb-8">
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Fototjänster, på plats eller i studio.</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Retuschering, formatering & montering</span>
              </li>
            </ul>

            <SectionHeader 
              id="event" 
              title="Eventdokumentation" 
              icon={<Film className="text-primary" size={24} />} 
            />
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-white/80 ml-4 mb-8">
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Fototjänster, på plats eller i studio.</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Retuschering, formatering & montering</span>
              </li>
            </ul>

            <div className="mt-12 p-6 bg-background/40 rounded-lg border border-white/10">
              <div className="flex items-center mb-4">
                <Image className="text-primary mr-3" size={24} />
                <h3 className="text-xl font-semibold text-white">Naturfotogalleri</h3>
              </div>
              <p className="text-white/70 mb-6">
                Utforska vår samling av högkvalitativa naturfotografier. Varje bild fångar naturens skönhet och detaljer.
              </p>
              <Link 
                to="/media/naturfoto" 
                className="inline-flex items-center glass hover:bg-white/10 text-white px-6 py-2 rounded-full transition-all duration-300 group"
              >
                Se galleriet
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
              </Link>
            </div>
            
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Media;
