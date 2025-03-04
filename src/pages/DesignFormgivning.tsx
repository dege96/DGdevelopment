
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Cpu, Palette, Cube, Camera, ArrowRight } from 'lucide-react';
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
            <p className="text-white/80 mb-10">
              Vi erbjuder kompletta designtjänster som hjälper dig att ta dina idéer från koncept till verklighet. 
              Vårt team har expertis inom flera designområden och kan ge dig skräddarsydda lösningar anpassade till 
              dina specifika behov och mål. Utforska våra designtjänster nedan för att lära dig mer om hur vi kan 
              hjälpa dig.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <SectionCard 
                id="teknisk-design"
                title="Teknisk Design"
                icon={<Cpu className="text-primary" size={24} />}
                description="Systemutveckling, automation, produktdesign och teknisk projektledning för innovativa lösningar."
                link="/design-formgivning/teknisk-design"
              />
              
              <SectionCard 
                id="cad-visualisering"
                title="CAD & Visualisering"
                icon={<Cube className="text-primary" size={24} />}
                description="2D/3D visualisering, formdesign och konstruktionsritningar för att visualisera dina idéer."
                link="/design-formgivning/cad-visualisering"
              />
              
              <SectionCard 
                id="formgivning"
                title="Formgivning"
                icon={<Palette className="text-primary" size={24} />}
                description="3D design, traditionell skulptering, lasergravering och formtillverkning för fysiska prototyper."
                link="/design-formgivning/formgivning"
              />
              
              <SectionCard 
                id="foto-dokumentering"
                title="Foto & Dokumentering"
                icon={<Camera className="text-primary" size={24} />}
                description="Professionell fotografering, retuschering och dokumentation för att presentera dina produkter."
                link="/design-formgivning/foto-dokumentering"
              />
            </div>
            
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default DesignFormgivning;
