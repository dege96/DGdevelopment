
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Image } from 'lucide-react';

const Naturfoto = () => {
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
          <h1 className="heading-lg mb-4 animate-slideDown opacity-0">Naturfotogalleri</h1>
          <p className="text-white/70 max-w-3xl animate-slideDown opacity-0" style={{ animationDelay: '0.2s' }}>
            Utforska vår samling av högkvalitativa naturfotografier
          </p>
        </div>
      </div>
      
      {/* Gallery Content */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="glass rounded-xl p-8 md:p-10 animate-slideUp opacity-0">
            <h3 className="heading-md mb-8 text-white flex items-center">
              <Image className="text-primary mr-3" size={24} />
              <span>Naturfotogalleri</span>
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Gallery placeholders - to be replaced with actual images */}
              {Array.from({ length: 9 }).map((_, index) => (
                <div 
                  key={index} 
                  className="aspect-square rounded-lg bg-gradient-to-br from-primary/20 to-secondary/30 overflow-hidden animate-slideUp opacity-0"
                  style={{ animationDelay: `${0.1 * index}s` }}
                >
                  <div className="w-full h-full flex items-center justify-center text-white/50">
                    <span>Naturbild {index + 1}</span>
                  </div>
                </div>
              ))}
            </div>
            
            <p className="mt-8 text-white/70 text-center">
              Här visas en samling av våra naturfotografier. Kontakta oss för information om beställning eller användning av bilderna.
            </p>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Naturfoto;
