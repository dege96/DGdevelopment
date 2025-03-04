
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { CircuitBoard, Cpu, Layers3, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const SectionCard = ({ 
  id, 
  title, 
  icon, 
  description, 
  link 
}: { 
  id: string, 
  title: string, 
  icon: React.ReactNode, 
  description: string,
  link: string 
}) => {
  return (
    <div className="glass p-6 rounded-xl">
      <h3 className="text-xl font-semibold mb-4 text-white flex items-center">
        {icon}
        <span className="ml-3">{title}</span>
      </h3>
      <p className="text-white/70 mb-6">{description}</p>
      <Link
        to={link}
        className="flex items-center text-primary hover:text-primary/80 transition-colors group"
      >
        Läs mer
        <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
      </Link>
    </div>
  );
};

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
            Skräddarsydda tekniska lösningar för ditt projekt
          </p>
        </div>
      </div>
      
      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="glass rounded-xl p-8 md:p-10 animate-slideUp opacity-0">
            <p className="text-white/80 mb-10">
              Vi erbjuder ett brett utbud av tekniska lösningar och tillverkningsmetoder för att hjälpa dig förverkliga 
              dina idéer. Från avancerad CAD/CAM-visualisering och prototypframställning till olika tillverkningsmetoder, 
              har vårt team den expertis som krävs för att leverera högkvalitativa resultat. Utforska våra tekniska 
              tjänster nedan för att lära dig mer om vad vi kan erbjuda.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <SectionCard 
                id="cad-cam"
                title="CAD/CAM & Teknisk Visualisering"
                icon={<CircuitBoard className="text-primary" size={24} />}
                description="Avancerad 2D/3D visualisering och konstruktionsritningar för dina tekniska projekt."
                link="/tekniska-losningar/cad-cam"
              />
              
              <SectionCard 
                id="prototyp"
                title="Prototypframställning"
                icon={<Cpu className="text-primary" size={24} />}
                description="3D-utskrifter, modellbygge och formtillverkning för att skapa fysiska prototyper."
                link="/tekniska-losningar/prototyp"
              />
              
              <SectionCard 
                id="tillverkning"
                title="Tillverkningsmetoder"
                icon={<Layers3 className="text-primary" size={24} />}
                description="Kombinationer av traditionellt hantverk och moderna tillverkningsmetoder."
                link="/tekniska-losningar/tillverkning"
              />
            </div>
            
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default TekniskaLosningar;
