
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Camera, FileEdit } from 'lucide-react';
import { Link } from 'react-router-dom';
import ImageCarousel from '@/components/ImageCarousel';

const Produktfotografering = () => {
  // Sample product photography images
  const productImages = [
    { 
      src: "https://images.unsplash.com/photo-1547949003-9792a18a2601?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80", 
      alt: "Product photography example 1" 
    },
    { 
      src: "https://images.unsplash.com/photo-1583209814683-c023dd293cc6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80", 
      alt: "Product photography example 2" 
    },
    { 
      src: "https://images.unsplash.com/photo-1616401784845-180882ba9ba8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80", 
      alt: "Product photography example 3" 
    },
  ];

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
          <div className="mb-4">
            <Link to="/media" className="text-primary hover:text-primary/80">&larr; Media</Link>
          </div>
          <h1 className="heading-lg mb-4 animate-slideDown opacity-0">Produktfotografering</h1>
          <p className="text-white/70 max-w-3xl animate-slideDown opacity-0" style={{ animationDelay: '0.2s' }}>
            Professionell produktfotografering för e-handel, marknadsföring och dokumentation
          </p>
        </div>
      </div>
      
      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="glass rounded-xl p-8 md:p-10 animate-slideUp opacity-0">
            
            {/* Image Carousel */}
            <div className="mb-10">
              <ImageCarousel 
                images={productImages} 
                category="Produktfotografering" 
                showAllLink="/media/produktfotografering/gallery" 
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {/* Left column */}
              <div>
                <div className="mb-8">
                  <h3 className="heading-md mb-4 text-white flex items-center">
                    <Camera className="text-primary mr-3" size={24} />
                    <span>Fototjänster</span>
                  </h3>
                  <p className="text-white/80 mb-4">
                    Vi erbjuder professionella produktfotograferingstjänster, både på plats hos dig eller i vår 
                    välutrustad studio. Våra produktfotografer har omfattande erfarenhet av att presentera 
                    produkter i bästa möjliga ljus, med perfekt komposition och skärpa.
                  </p>
                  <p className="text-white/80 mb-4">
                    Oavsett produkternas storlek eller komplexitet anpassar vi vår metodik för att säkerställa 
                    att varje detalj fångas med precision och klarhet. Vi kan erbjuda fotografering mot vit 
                    bakgrund, i miljö eller med kreativa kompositioner beroende på dina behov.
                  </p>
                </div>
                
                <div className="mt-8 p-6 bg-primary/10 rounded-lg border border-primary/30">
                  <h4 className="text-lg font-semibold text-white mb-2">Vår produktfotografering är perfekt för:</h4>
                  <ul className="space-y-2 text-white/80">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>E-handel och onlinekatalog</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Produktkataloger och broschyrer</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Marknadsföringsmaterial</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Teknisk dokumentation</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Sociala medier</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              {/* Right column */}
              <div>
                <div className="mb-8">
                  <h3 className="heading-md mb-4 text-white flex items-center">
                    <FileEdit className="text-primary mr-3" size={24} />
                    <span>Retuschering & Formatering</span>
                  </h3>
                  <p className="text-white/80 mb-4">
                    Efter fotograferingen genomgår alla bilder en professionell efterbearbetningsprocess. 
                    Detta inkluderar färgkorrigering, retuschering, borttagning av oönskade element och 
                    optimering för webb- eller tryckbruk.
                  </p>
                  <p className="text-white/80 mb-4">
                    Vi erbjuder också avancerad bildbehandling som:
                  </p>
                  <ul className="space-y-2 text-white/80 ml-4 mb-4">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Friläggning (borttagning av bakgrund)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Skuggläggning och reflektioner</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Färgjusteringar för konsekvent varumärkesidentitet</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Bildsättning med företagets grafiska profil</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Montering av produktbilder i kontext eller miljö</span>
                    </li>
                  </ul>
                  <p className="text-white/80">
                    Alla bilder levereras i de format och upplösningar som du behöver, oavsett om det är 
                    för webb, tryck eller sociala medier.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-10 border-t border-white/10 pt-8 text-center">
              <p className="text-white/80 mb-6">
                Kontakta oss för att diskutera dina specifika behov av produktfotografering och hur vi 
                kan hjälpa dig att presentera dina produkter på bästa sätt.
              </p>
              <Link 
                to="/kontakt" 
                className="inline-block py-3 px-8 bg-primary text-white rounded-md hover:bg-primary/80 transition-colors"
              >
                Kontakta oss
              </Link>
            </div>
            
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Produktfotografering;
