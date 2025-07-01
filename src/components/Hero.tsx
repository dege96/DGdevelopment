import React, { useEffect, useState } from 'react';
import { ArrowDown, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

// Konfigurera UnicornStudio - ändra till true för att aktivera
const UNICORN_STUDIO_ENABLED = false;

declare global {
  interface Window {
    UnicornStudio: {
      isInitialized: boolean;
      init?: () => void;
    };
  }
}

// Bilder för karusellen - alla bilder från TranspBkg-mappen
const demoImages = [
  {
    src: "/TranspBkg/DesignF2.png",
    alt: "Nike tävling medalj"
  },
  {
    src: "/TranspBkg/TekniskaL.png",
    alt: "Tekniskt verktyg"
  },
  {
    src: "/TranspBkg/Prototyp.png",
    alt: "Prototyp av manasi flaska"
  },
  {
    src: "/TranspBkg/Prototyp2.png",
    alt: "Prototyp av upphängbar lampa"
  },
  {
    src: "/TranspBkg/DesignF.png",
    alt: "Specialdesign av monter för TV"
  }
];

const Hero = () => {
  const [unicornLoaded, setUnicornLoaded] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Ladda Unicorn Studio-skriptet när komponenten monteras (bara om aktiverat)
  useEffect(() => {
    if (UNICORN_STUDIO_ENABLED) {
      const loadUnicornStudio = () => {
        if (!window.UnicornStudio) {
          window.UnicornStudio = { isInitialized: false };
          const script = document.createElement('script');
          script.src = "https://cdn.unicorn.studio/v1.4.2/unicornStudio.umd.js";
          script.onload = function() {
            if (window.UnicornStudio && !window.UnicornStudio.isInitialized && window.UnicornStudio.init) {
              window.UnicornStudio.init();
              window.UnicornStudio.isInitialized = true;
              
              // Markera att Unicorn Studio har laddats
              setTimeout(() => {
                setUnicornLoaded(true);
              }, 300);
            }
          };
          document.head.appendChild(script);
        } else if (window.UnicornStudio.isInitialized) {
          // Om redan initialiserad, markera som laddad
          setUnicornLoaded(true);
        }
      };
      
      loadUnicornStudio();
    }
  }, []);

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
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Bakgrund - antingen UnicornStudio eller video */}
      {UNICORN_STUDIO_ENABLED ? (
        // Unicorn Studio Background
        <div 
          className={`absolute inset-0 w-full h-full z-5 transition-opacity duration-1000 ${unicornLoaded ? 'opacity-100' : 'opacity-0'}`}
          style={{ pointerEvents: 'none' }}
        >
          <div 
            data-us-project="3skkbqxNSYJHLb7AXwsb" 
            style={{ 
              width: '100%', 
              height: '125%',
              transform: 'scale(1.1)',
              transformOrigin: 'center top',
              marginBottom: '-25%'
            }}
          ></div>
        </div>
      ) : (
        // Video Background
        <div className="absolute inset-0 w-full h-full z-5">
          <video 
            autoPlay 
            muted 
            loop 
            playsInline
            className="w-full h-full object-cover"
            style={{ pointerEvents: 'none' }}
          >
            <source src="/video.webm" type="video/webm" />
          </video>
        </div>
      )}
      
      {/* Befintlig gradientbakgrund - minskad opacitet */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/60 to-background/80 z-10"></div>
      
      {/* Extra gradient overlay för bättre läsbarhet - justerad opacitet */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-transparent to-background/40 z-20"></div>
      
      <div className="container relative z-30 px-4 sm:px-6 py-8 sm:py-12 mx-auto flex flex-col mt-20 sm:mt-0">
        <div className="w-full flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Vänster sida - Text innehåll */}
          <div className="w-full md:w-1/2 flex flex-col items-start text-left mb-8 md:mb-0">
            {/* Huvudrubrik med responsiv textstorlek */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
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
            <p className="text-white/70 text-sm sm:text-base md:text-lg max-w-2xl mb-8 sm:mb-10">
              Konsultation inom teknisk projektledning samt design.
              <br />
              Från mindre uppdrag till omfattande system/projekt med helhetsansvar
            </p>
            
            {/* Knapp med responsiv padding */}
            <div>
              <Link to="/tjanster" className="inline-flex items-center glass hover:bg-white/10 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full transition-all duration-300 group">
                Utforska
                <ChevronRight className="ml-1 group-hover:translate-x-1 transition-transform" size={18} />
              </Link>
            </div>
          </div>
          
          {/* Höger sida - Anpassad bildkarusell utan manuella kontroller */}
          <div className="w-full md:w-1/2 relative">
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
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="max-w-full max-h-full object-contain"
                    />
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
