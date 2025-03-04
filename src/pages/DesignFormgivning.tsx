
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Code, Palette, Crop, Camera, Lightbulb, Shapes } from 'lucide-react';

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

const DesignFormgivning = () => {
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
          <h1 className="heading-lg mb-4 animate-slideDown opacity-0">Design & Formgivning</h1>
          <p className="text-white/70 max-w-3xl animate-slideDown opacity-0" style={{ animationDelay: '0.2s' }}>
            Idé/problemlösning, Helhetsansvar för tillverkning, Samordning, installation & driftsättning. Projektplan, manualer och annan dokumentation
          </p>
        </div>
      </div>
      
      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="glass rounded-xl p-8 md:p-10 animate-slideUp opacity-0">
            
            <SectionHeader 
              id="konceptdesign" 
              title="Konceptdesign" 
              icon={<Lightbulb className="text-primary" size={24} />} 
            />
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-white/80 ml-4">
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Systemutveckling (Automation, Styrsystem)</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Teknisk projektledning</span>
              </li>
            </ul>

            <SectionHeader 
              id="produktdesign" 
              title="Produktdesign" 
              icon={<Shapes className="text-primary" size={24} />} 
            />
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-white/80 ml-4">
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Produktdesign</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Formdesign och Formtillverkning</span>
              </li>
            </ul>

            <SectionHeader 
              id="grafisk-design" 
              title="Grafisk design" 
              icon={<Palette className="text-primary" size={24} />} 
            />
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-white/80 ml-4">
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Illustration & Design</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Bildhantering och Foto-retuschering</span>
              </li>
            </ul>

            <SectionHeader 
              id="designverktyg" 
              title="Designverktyg" 
              icon={<Crop className="text-primary" size={24} />} 
            />
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-white/80 ml-4">
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>2D/3D visualisering (CAD/Rendering)</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Konstruktionsritning (Mekanik, Elektronik, Elektromekanik)</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>3D design & 3D print</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Traditionell skulptering</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Lasergravering</span>
              </li>
            </ul>
            
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default DesignFormgivning;
