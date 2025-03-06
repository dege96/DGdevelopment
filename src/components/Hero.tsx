import React, { useEffect, useRef, useState } from 'react';
import { ArrowDown, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

declare global {
  interface Window {
    UnicornStudio: {
      isInitialized: boolean;
      init?: () => void;
    };
  }
}

// Definiera CSS-animationer som en sträng
const introAnimationStyles = `
  @keyframes wipe-in-left {
    0% {
      transform: translateX(-30px);
      opacity: 0;
    }
    100% {
      transform: translateX(0);
      opacity: 1;
    }
  }
  
  @keyframes pulse-glow {
    0%, 100% {
      filter: drop-shadow(0 0 8px rgba(255, 255, 255, 0.4));
    }
    50% {
      filter: drop-shadow(0 0 12px rgba(255, 255, 255, 0.7));
    }
  }
  
  @keyframes fade-out {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
  
  .intro-animation {
    animation: wipe-in-left 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards, 
               pulse-glow 2s ease-in-out infinite;
    will-change: transform, opacity;
    padding: 2rem;
    transform: translateZ(0);
    backface-visibility: hidden;
  }
  
  .intro-container.exiting {
    animation: fade-out 0.4s ease-out forwards;
    will-change: opacity;
  }
  
  .staggered-item {
    opacity: 0;
    will-change: opacity;
    transform: translateZ(0);
  }
  
  .staggered-item.visible {
    animation: fadeIn 0.5s ease-out forwards;
  }
  
  .delay-1 {
    animation-delay: 0.05s;
  }
  
  .delay-2 {
    animation-delay: 0.1s;
  }
  
  .delay-3 {
    animation-delay: 0.15s;
  }
  
  .delay-4 {
    animation-delay: 0.2s;
  }
`;

// Bilder för karusellen - alla bilder från TranspBkg-mappen
const demoImages = [
  {
    src: "/TranspBkg/Gecko-001.png",
    alt: "Gecko design"
  },
  {
    src: "/TranspBkg/kristall.png",
    alt: "Kristall design"
  },
  {
    src: "/TranspBkg/NIKEslutleverans.png",
    alt: "NIKE slutleverans"
  },
  {
    src: "/TranspBkg/Manasi Flaska Cap_fri.png",
    alt: "Manasi Flaska Cap"
  }
];

const Hero = () => {
  const [introComplete, setIntroComplete] = useState(false);
  const [isExiting, setIsExiting] = useState(false);
  const [contentVisible, setContentVisible] = useState(false);
  const [unicornLoaded, setUnicornLoaded] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Ladda Unicorn Studio-skriptet när komponenten monteras
  useEffect(() => {
    // Lägg till CSS-animationer i head
    const styleElement = document.createElement('style');
    styleElement.innerHTML = introAnimationStyles;
    document.head.appendChild(styleElement);
    
    // Ladda Unicorn Studio efter att intro-animationen är klar
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
    
    // Starta intro-animationen och sätt introComplete till true efter att animationen är klar
    const startExitTimer = setTimeout(() => {
      setIsExiting(true);
      
      // Vänta på att exit-animationen ska slutföras innan vi tar bort intro-elementet
      const completeTimer = setTimeout(() => {
        setIntroComplete(true);
        setContentVisible(true);
        
        // Ladda Unicorn Studio efter att intro är klart
        loadUnicornStudio();
      }, 400); // Kortare tid för exit-animationen
      
      return () => clearTimeout(completeTimer);
    }, 1800); // Kortare tid innan exit-animationen startar
    
    return () => {
      clearTimeout(startExitTimer);
      // Ta bort style-elementet när komponenten unmountas
      document.head.removeChild(styleElement);
    };
  }, []);

  // Automatisk bildväxling
  useEffect(() => {
    if (introComplete) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) => 
          prevIndex === demoImages.length - 1 ? 0 : prevIndex + 1
        );
      }, 5000);
      
      return () => clearInterval(interval);
    }
  }, [introComplete]);

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Intro Animation */}
      {!introComplete && (
        <div className={`fixed inset-0 z-50 bg-background flex items-center justify-center intro-container ${isExiting ? 'exiting' : ''}`}>
          <div className="intro-animation">
            <img 
              src="/HEMSA DGD/LOGO/Logo Ej Text Opak/DGD 2310.png"
              alt="DG Development"
              className="h-32 md:h-40 w-auto filter brightness-0 invert"
              style={{ transform: 'translateZ(0)' }}
            />
          </div>
        </div>
      )}
      
      {/* Unicorn Studio Background - laddas bara när intro är klart */}
      {introComplete && (
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
      )}
      
      {/* Befintlig gradientbakgrund - minskad opacitet */}
      <div className={`absolute inset-0 bg-gradient-to-b from-background/70 via-background/60 to-background/80 z-10 transition-opacity duration-700 ${introComplete ? 'opacity-100' : 'opacity-0'}`}></div>
      
      {/* Extra gradient overlay för bättre läsbarhet - justerad opacitet */}
      <div className={`absolute inset-0 bg-gradient-to-b from-background/20 via-transparent to-background/40 z-20 transition-opacity duration-700 ${introComplete ? 'opacity-100' : 'opacity-0'}`}></div>
      
      <div className={`container relative z-30 px-4 sm:px-6 py-8 sm:py-12 mx-auto flex flex-col transition-opacity duration-700 ${introComplete ? 'opacity-100' : 'opacity-0'}`}>
        <div className="w-full flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Vänster sida - Text innehåll */}
          <div className="w-full md:w-1/2 flex flex-col items-start text-left mb-8 md:mb-0">
            {/* Logo och text container */}
            <div className={`mb-4 sm:mb-6 staggered-item ${contentVisible ? 'visible delay-1' : ''}`}>
              {/* Logotyp kan läggas till här om det behövs */}
            </div>
            
            {/* Huvudrubrik med responsiv textstorlek */}
            <h1 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 staggered-item ${contentVisible ? 'visible delay-2' : ''}`}>
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
            <p className={`text-white/70 text-sm sm:text-base md:text-lg max-w-2xl mb-8 sm:mb-10 staggered-item ${contentVisible ? 'visible delay-3' : ''}`}>
              Konsultation inom teknisk projektledning samt design.
              <br />
              Från mindre uppdrag till omfattande system/projekt med helhetsansvar
            </p>
            
            {/* Knapp med responsiv padding */}
            <div className={`staggered-item ${contentVisible ? 'visible delay-4' : ''}`}>
              <Link to="/tjanster" className="inline-flex items-center glass hover:bg-white/10 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full transition-all duration-300 group">
                Utforska
                <ChevronRight className="ml-1 group-hover:translate-x-1 transition-transform" size={18} />
              </Link>
            </div>
          </div>
          
          {/* Höger sida - Anpassad bildkarusell utan manuella kontroller */}
          <div className={`w-full md:w-1/2 staggered-item relative ${contentVisible ? 'visible delay-3' : ''}`}>
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
      
      <div className={`absolute bottom-10 w-full flex justify-center animate-pulse transition-opacity duration-700 ${introComplete ? 'opacity-100' : 'opacity-0'}`}>
        <Link to="/tjanster" className="text-white/50 hover:text-white transition-colors">
          <ArrowDown size={24} />
        </Link>
      </div>
    </div>
  );
};

export default Hero;
