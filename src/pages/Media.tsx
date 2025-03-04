
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Camera, Film, Image, ArrowRight } from 'lucide-react';
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
            <p className="text-white/80 mb-10">
              Vi erbjuder professionella mediatjänster för att dokumentera och presentera dina produkter, event och 
              annat innehåll. Vårt team av erfarna fotografer kombinerar teknisk kompetens med ett kreativt öga för 
              att leverera högkvalitativa resultat. Utforska våra mediatjänster nedan.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <SectionCard 
                id="produktfotografering"
                title="Produktfotografering"
                icon={<Camera className="text-primary" size={24} />}
                description="Professionell fotografering av produkter för marknadsföring, e-handel och dokumentation."
                link="/media/produktfotografering"
              />
              
              <SectionCard 
                id="eventdokumentation"
                title="Eventdokumentation"
                icon={<Film className="text-primary" size={24} />}
                description="Omfattande dokumentation av företagsevent, konferenser, mässor och andra tillfällen."
                link="/media/eventdokumentation"
              />
              
              <SectionCard 
                id="naturfoto"
                title="Naturfotogalleri"
                icon={<Image className="text-primary" size={24} />}
                description="Utforska vår samling av högkvalitativa naturfotografier."
                link="/media/naturfoto"
              />
            </div>
            
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Media;
