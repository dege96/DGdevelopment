
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Users, PackageCheck, FileText } from 'lucide-react';

const OmOss = () => {
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
          <h1 className="heading-lg mb-4 animate-slideDown opacity-0">Om Oss</h1>
          <p className="text-white/70 max-w-3xl animate-slideDown opacity-0" style={{ animationDelay: '0.2s' }}>
            Lär känna DG Development och våra tjänster
          </p>
        </div>
      </div>
      
      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="glass rounded-xl p-8 md:p-10 animate-slideUp opacity-0">
            <h3 className="heading-md mb-8 text-white flex items-center">
              <Users className="text-primary mr-3" size={24} />
              <span>Om DG Development</span>
            </h3>
            
            <div className="space-y-8">
              <div className="p-6 bg-background/40 rounded-lg border border-white/10">
                <h4 className="text-xl font-medium mb-4 text-white">Våra tjänster</h4>
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
                    <span>Elektronik/PLC/uController-styrning eller pneumatiklösningar</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Dito programering C++</span>
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
                    <span>Konstruktions och tillverkningsunderlag (Schema, CAD, 2D Ritning)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Tillverkning och installation</span>
                  </li>
                </ul>
              </div>
              
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/2 p-6 bg-background/40 rounded-lg border border-white/10">
                  <div className="flex items-center mb-4">
                    <PackageCheck className="text-primary mr-3" size={24} />
                    <h4 className="text-xl font-medium text-white">Tillverkningskapacitet</h4>
                  </div>
                  <p className="text-white/70">
                    Vi bistår även som rådgivande med idé/problemlösning samt tar fram scheman, dokumentation och manualer vid behov.
                  </p>
                </div>
                
                <div className="md:w-1/2 p-6 bg-background/40 rounded-lg border border-white/10">
                  <div className="flex items-center mb-4">
                    <FileText className="text-primary mr-3" size={24} />
                    <h4 className="text-xl font-medium text-white">Dokumentation</h4>
                  </div>
                  <p className="text-white/70">
                    Vi skapar detaljerade konstruktionsritningar, scheman och teknisk dokumentation för dina projekt. 
                    Detta inkluderar allt från enkla 2D-ritningar till komplexa 3D-modeller med full specifikation för tillverkning.
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

export default OmOss;
