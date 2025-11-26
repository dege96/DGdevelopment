import React, { useEffect, useState, useMemo } from 'react';
import { ArrowDown, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import StripeGradient from './StripeGradient';

declare global {
  interface Window {
    Gradient: any;
  }
}

// Gradient-färger - definierade utanför komponenten för stabil referens
const GRADIENT_COLORS = ['#a960ee', '#ff333d', '#90e0ff', '#ffcb57'];

// Bilder för karusellen - alla bilder från TranspBkg-mappen
const demoImages = [
  {
    src: "/TranspBkg/DesignF2.png",
    alt: "Nike medalj",
    link: "/design-formgivning/formgivning"
  },
  {
    src: "/TranspBkg/TekniskaL.png",
    alt: "Tekniskt verktyg",
    link: "/tekniska-losningar"
  },
  {
    src: "/TranspBkg/Prototyp.png",
    alt: "Prototyp av manasi flaska",
    link: "/tekniska-losningar/prototyp"
  },
  {
    src: "/TranspBkg/Prototyp2.png",
    alt: "Prototyp av upphängbar lampa",
    link: "/tekniska-losningar/prototyp"
  },
  {
    src: "/TranspBkg/DesignF.png",
    alt: "Specialdesign av monter för TV",
    link: "/design-formgivning"
  }
];

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Memoize gradient props för att förhindra onödiga re-renders
  const gradientProps = useMemo(() => ({
    colors: GRADIENT_COLORS,
    width: '100%',
    height: '100vh',
    className: 'absolute inset-0'
  }), []);

  // Automatisk bildväxling
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === demoImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden" style={{ backgroundColor: 'var(--bg-hero)' }}>
      {/* SVG för vågig clip-path (endast desktop) */}
      <svg width="0" height="0" style={{ position: 'absolute', pointerEvents: 'none' }}>
        <defs>
          {/* Desktop - vertikal våg (reverserad för vänster sida) */}
          <clipPath id="wavyRightEdge" clipPathUnits="objectBoundingBox">
            <path d="M 1,0 
                     L 0.45,0 
                     C 0.49,0.30 0.41,0.70 0.45,1
                     L 1,1 Z" />
          </clipPath>
        </defs>
      </svg>
      
      {/* CSS för responsiv clip-path (endast större desktop) */}
      <style>{`
        @media (min-width: 1024px) {
          .hero-gradient-clip {
            clip-path: url(#wavyRightEdge) !important;
          }
        }
      `}</style>
      
      {/* Stripe Gradient Bakgrund */}
      <div 
        className="hero-gradient-clip absolute inset-0 w-full h-full z-5" 
        style={{ 
          pointerEvents: 'none'
        }}
      >
        <StripeGradient key="hero-gradient" {...gradientProps} />
      </div>
      
      {/* Mörk gradient overlay för bättre kontrast */}
      <div
        className="absolute inset-0 z-20"
        style={{
          background: "linear-gradient(to bottom, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.5) 50%, rgba(0, 0, 0, 0.6) 100%)"
        }}
      ></div>
      <div className="container relative z-30 px-0 sm:px-20 py-12 sm:py-24 mx-auto flex flex-col">
        <div className="w-full flex flex-col md:flex-row items-center justify-between">
          {/* Vänster sida - Text innehåll */}
          <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left space-y-6 md:space-y-8 max-w-lg md:max-w-none mx-auto md:mx-0">
            {/* Huvudrubrik med responsiv textstorlek */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight text-white md:max-w-[30rem]">
              Från <span 
                className="text-transparent bg-clip-text animate-gradient"
                style={{ 
                  backgroundImage: 'linear-gradient(to right, #ebb834, #be6c32, #ffd5a4)',
                  backgroundSize: '200% 100%'
                }}
              >vision</span>
              <br className="md:hidden" /> till färdig <span 
                className="text-transparent bg-clip-text animate-gradient"
                style={{ 
                  backgroundImage: 'linear-gradient(to right, #ffd5a4, #be6c32, #ebb834)',
                  backgroundSize: '200% 100%'
                }}
              >produkt</span>
            </h1>
            
            {/* Underrubrik med responsiv textstorlek och padding */}
            <p className="text-white/80 text-base sm:text-lg md:text-xl leading-relaxed max-w-[21rem] md:max-w-[30rem]">
              Konsultation inom teknisk projektledning samt design.
              Från mindre uppdrag till omfattande system/projekt med helhetsansvar
            </p>
            
            {/* Knapp med responsiv padding */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/tjanster" className="inline-flex items-center justify-center glass hover:bg-white/10 hover:shadow-xl text-white px-8 md:px-10 py-3 md:py-4 rounded-full text-base md:text-lg font-semibold transition-all duration-300 transform hover:scale-105 group">
                Tjänster
                <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Link>
              <Link to="/kontakt" className="inline-flex items-center justify-center bg-primary/20 hover:bg-primary/30 border border-primary/50 hover:border-primary text-primary hover:text-white px-8 md:px-10 py-3 md:py-4 rounded-full text-base md:text-lg font-semibold transition-all duration-300 transform hover:scale-105 group">
                Boka ett möte
                <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Link>
            </div>
          </div>
          
          {/* Höger sida - bildkarusell endast på ≥ md */}
          <div className="hidden md:block w-full md:w-1/2 relative">
            <div className="relative w-full h-[300px] sm:h-[400px] flex items-center justify-center">
              {/* Bildcontainer med transition */}
              <div className="relative w-full h-full flex items-center justify-center">
                {demoImages.map((image, index) => (
                  <div 
                    key={index}
                    className={`absolute inset-0 flex items-center justify-center transition-opacity duration-1000 ${
                      index === currentImageIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
                    }`}
                  >
                    <Link to={image.link} className="w-full h-full flex items-center justify-center">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="max-w-full max-h-full object-contain hover:scale-105 transition-transform duration-300"
                      />
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 w-full flex justify-center animate-pulse">
        <Link to="/tjanster" className="text-white/50 hover:text-white transition-colors">
          <ArrowDown size={24} />
        </Link>
      </div>
    </div>
  );
};

export default Hero;
