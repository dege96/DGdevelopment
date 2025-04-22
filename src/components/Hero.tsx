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
    src: "/TranspBkg/NIKEslutleverans.png",
    alt: "NIKE slutleverans"
  },
  {
    src: "/TranspBkg/Manasi Flaska Cap_fri.png",
    alt: "Manasi Flaska Cap"
  }
];

const Hero = () => {
  const [introComplete, setIntroComplete] = useState(true); // Börja med true för att hoppa över introt
  const [contentVisible, setContentVisible] = useState(true); // Visa innehåll direkt
  const [unicornLoaded, setUnicornLoaded] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isDesktop, setIsDesktop] = useState(false);
  
  // Check if device is desktop based on screen width
  useEffect(() => {
    const checkIfDesktop = () => {
      setIsDesktop(window.innerWidth >= 1024); // 1024px is a common breakpoint for desktop
    };
    
    // Check immediately
    checkIfDesktop();
    
    // Add event listener for window resize
    window.addEventListener('resize', checkIfDesktop);
    
    // Clean up event listener
    return () => window.removeEventListener('resize', checkIfDesktop);
  }, []);
  
  // WebGL context cleanup funktion
  const cleanupWebGL = () => {
    console.log('Utför WebGL cleanup');
    
    // Försök att rensa tidigare WebGL-initialisering
    if (window.UnicornStudio && window.UnicornStudio.isInitialized) {
      try {
        // Hitta alla UnicornStudio container-element
        const elements = document.querySelectorAll('[data-us-project]');
        elements.forEach(el => {
          // Rensa innehållet
          while (el.firstChild) {
            el.removeChild(el.firstChild);
          }
        });
        
        // Ta bort eventuella canvas-element som unicorn studio kan ha skapat
        const canvases = document.querySelectorAll('canvas[data-unicorn-canvas]');
        canvases.forEach(canvas => canvas.remove());
        
        console.log('WebGL-element rensade');
      } catch (error) {
        console.error('Fel vid rensning av WebGL-resurser:', error);
      }
    }
  };
  
  // Ladda Unicorn Studio-skriptet när komponenten monteras
  useEffect(() => {
    console.log('Hero useEffect körs - komponenten monteras');
    
    // Only proceed if on desktop
    if (!isDesktop) {
      console.log('Skipping Unicorn Studio on mobile - performance optimization');
      return;
    }
    
    // Rensa eventuella WebGL-resurser först
    cleanupWebGL();
    
    // Ladda Unicorn Studio direkt
    const loadUnicornStudio = () => {
      console.log('loadUnicornStudio anropas, unicornLoaded före:', unicornLoaded);
      
      // Återställ bakgrunden först för att säkerställa att den omrendereras korrekt
      setUnicornLoaded(false);
      console.log('unicornLoaded återställs till false');
      
      // Rensa eventuella WebGL-resurser först
      cleanupWebGL();
      
      // Återställ UnicornStudio-objektet
      if (window.UnicornStudio) {
        window.UnicornStudio.isInitialized = false;
      }
      
      if (!window.UnicornStudio || !window.UnicornStudio.isInitialized) {
        console.log('UnicornStudio måste initialiseras på nytt');
        
        // Säkerställ att vi har ett startläge för UnicornStudio
        if (!window.UnicornStudio) {
          window.UnicornStudio = { isInitialized: false };
        }
        
        // Skapa en Promise för att hantera script-laddning
        const loadScript = new Promise((resolve, reject) => {
          console.log('Laddar script från CDN');
          
          // Kontrollera om skriptet redan finns
          const existingScript = document.querySelector('script[src*="unicornStudio.umd.js"]');
          if (existingScript) {
            console.log('Script finns redan, använder existerande');
            resolve(true);
            return;
          }
          
          const script = document.createElement('script');
          script.src = "https://cdn.unicorn.studio/v1.4.2/unicornStudio.umd.js";
          script.async = true;
          
          script.onload = () => {
            console.log('Script laddat framgångsrikt');
            resolve(true);
          };
          script.onerror = () => {
            console.error('Fel vid laddning av script');
            reject(new Error('Failed to load Unicorn Studio'));
          };
          
          document.head.appendChild(script);
        });

        // Hantera script-laddning och initiering
        loadScript
          .then(() => {
            if (window.UnicornStudio && window.UnicornStudio.init) {
              console.log('Initierar UnicornStudio');
              
              // Kort fördröjning för att säkerställa att DOM har uppdaterats
              setTimeout(() => {
                try {
                  window.UnicornStudio.init();
                  window.UnicornStudio.isInitialized = true;
                  console.log('UnicornStudio initialiserad framgångsrikt');
                  
                  // Vänta lite innan vi visar bakgrunden för att säkerställa att allt är klart
                  setTimeout(() => {
                    console.log('Timer klar, sätter unicornLoaded till true');
                    setUnicornLoaded(true);
                  }, 500);
                } catch (error) {
                  console.error('Fel vid initialisering:', error);
                }
              }, 100);
            }
          })
          .catch(error => {
            console.error('Error loading Unicorn Studio:', error);
            // Försök ladda om efter en kort stund vid fel
            setTimeout(loadUnicornStudio, 2000);
          });
      }
    };
    
    // Ladda Unicorn Studio direkt utan intro
    loadUnicornStudio();
    
    return () => {
      console.log('Hero useEffect cleanup körs - komponenten avmonteras eller uppdateras');
      
      // Rensa WebGL-resurser vid avmontering
      cleanupWebGL();
    };
  }, [isDesktop]);

  // Logga state-förändringar
  useEffect(() => {
    console.log('unicornLoaded ändrades till:', unicornLoaded);
  }, [unicornLoaded]);

  // Automatisk bildväxling
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === demoImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  console.log('Hero renderas, unicornLoaded:', unicornLoaded, 'introComplete:', introComplete);

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-start pt-20 sm:pt-24 overflow-hidden">
      {/* Unicorn Studio Background - Only render on desktop */}
      {isDesktop && (
        <div 
          className={`absolute inset-0 w-full h-full z-5 transition-opacity duration-1000 ${unicornLoaded ? 'opacity-100' : 'opacity-0'}`}
          style={{ pointerEvents: 'none' }}
        >
          <div 
            data-us-project="3skkbqxNSYJHLb7AXwsb" 
            data-unicorn-container
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
      <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/60 to-background/80 z-10"></div>
      
      {/* Extra gradient overlay för bättre läsbarhet - justerad opacitet */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-transparent to-background/40 z-20"></div>
      
      {/* Huvudinnehåll */}
      <div className="container relative z-30 px-8 sm:px-6 py-8 sm:py-12 mx-auto flex flex-col">
        <div className="w-full flex flex-col md:flex-row items-center justify-between gap-4 md:gap-8 mt-12 sm:mt-16">
          {/* Vänster sida - Text innehåll */}
          <div className="w-full md:w-1/2 flex flex-col items-start text-left">
            {/* Huvudrubrik med responsiv textstorlek */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 sm:mb-6">
              <span className="inline-block">Från <span 
                className="text-transparent bg-clip-text animate-gradient"
                style={{ 
                  backgroundImage: 'linear-gradient(to right, #ebb834, #be6c32, #ffd5a4)',
                  backgroundSize: '200% 100%'
                }}
              >vision</span></span>
              <span className="inline-block">till färdig <span 
                className="text-transparent bg-clip-text animate-gradient"
                style={{ 
                  backgroundImage: 'linear-gradient(to right, #ffd5a4, #be6c32, #ebb834)',
                  backgroundSize: '200% 100%'
                }}
              >produkt</span></span>
            </h1>
            
            {/* Underrubrik med responsiv textstorlek och padding */}
            <p className="text-white/70 text-base sm:text-lg max-w-xl mb-4 sm:mb-6">
              Konsultation och tillverkning inom teknik och design.&nbsp;
              <br className="hidden sm:block" />
            Från mindre uppdrag till omfattande system/projekt med helhetsansvar
            </p>
            
            {/* CTA-knappar */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
              <Link 
                to="/tjanster" 
                className="inline-flex items-center justify-center glass hover:bg-white/10 text-white px-6 py-3 rounded-full transition-all duration-300 group text-center"
              >
                Utforska
                <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
              </Link>
              
              <Link 
                to="/kontakt"
                className="inline-flex items-center justify-center border border-white/20 hover:bg-white/5 text-white/90 px-6 py-3 rounded-full transition-colors text-center"
              >
                Kontakta oss
              </Link>
            </div>
          </div>

          {/* Höger sida - Bildkarusell */}
          <div className="w-full md:w-1/2 relative mt-8 md:mt-0">
            <div className="relative w-full max-w-l aspect-[4/3] md:aspect-[16/9]">
              {demoImages.map((image, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-1000 ${
                    index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
          <ArrowDown className="text-white/50" size={24} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
