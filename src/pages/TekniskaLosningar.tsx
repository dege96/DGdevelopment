
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { CircuitBoard } from 'lucide-react';

const TekniskaLosningar = () => {
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
          <h1 className="heading-lg mb-4 animate-slideDown opacity-0">Tekniska Lösningar</h1>
          <p className="text-white/70 max-w-3xl animate-slideDown opacity-0" style={{ animationDelay: '0.2s' }}>
            Skräddarsydda tekniska lösningar för ditt företags behov
          </p>
        </div>
      </div>
      
      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="glass rounded-xl p-8 md:p-10 animate-slideUp opacity-0">
            <h3 className="heading-md mb-8 text-white flex items-center">
              <CircuitBoard className="text-primary mr-3" size={24} />
              <span>Tekniska lösningar</span>
            </h3>
            
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-white/80">
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Systemutveckling (Automation, Styrsystem)</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Produktdesign</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Elektronik/PLC/uController-styrning</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Pneumatiklösningar</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Programmering C++</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Teknisk projektledning</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Leverantörsutvärdering (audit)</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Konstruktions- och tillverkningsunderlag</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Tillverkning och installation</span>
              </li>
            </ul>
            
            <div className="mt-8 p-6 bg-background/50 rounded-lg border border-white/10">
              <h4 className="text-xl font-medium mb-3 text-white">Komplett projekthantering</h4>
              <p className="text-white/70">
                Vi erbjuder kompletta lösningar från idé till färdig produkt. Vårt team kan hantera hela projektet 
                från initial problemlösning till slutlig installation och driftsättning. Vi tar hand om allt från 
                projektledning och konstruktion till tillverkning, programmering och dokumentation.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default TekniskaLosningar;
