
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Film, FileEdit, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import ImageCarousel from '@/components/ImageCarousel';

const Eventdokumentation = () => {
  // Sample event documentation images
  const eventImages = [
    { 
      src: "https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80", 
      alt: "Corporate event documentation" 
    },
    { 
      src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80", 
      alt: "Conference documentation" 
    },
    { 
      src: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80", 
      alt: "Exhibition documentation" 
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
          <h1 className="heading-lg mb-4 animate-slideDown opacity-0">Eventdokumentation</h1>
          <p className="text-white/70 max-w-3xl animate-slideDown opacity-0" style={{ animationDelay: '0.2s' }}>
            Professionell dokumentation av event, mässor, företagsmöten och andra tillfällen
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
                images={eventImages} 
                category="Eventdokumentation" 
                showAllLink="/media/eventdokumentation/gallery" 
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {/* Left column */}
              <div>
                <div className="mb-8">
                  <h3 className="heading-md mb-4 text-white flex items-center">
                    <Film className="text-primary mr-3" size={24} />
                    <span>Fototjänster</span>
                  </h3>
                  <p className="text-white/80 mb-4">
                    Vi erbjuder professionell fotografering av alla typer av events. Våra fotografer 
                    har erfarenhet av att diskret dokumentera allt från företagsmöten och konferenser till 
                    mässor, lanseringar och festliga tillställningar.
                  </p>
                  <p className="text-white/80 mb-4">
                    Med fokus på att fånga både stämning, viktiga ögonblick och detaljer, skapar vi en 
                    komplett dokumentation av ditt event som kan användas för intern kommunikation, 
                    marknadsföring och historiska arkiv.
                  </p>
                </div>
                
                <div className="mb-8">
                  <h3 className="heading-md mb-4 text-white flex items-center">
                    <Calendar className="text-primary mr-3" size={24} />
                    <span>Typer av events</span>
                  </h3>
                  <p className="text-white/80 mb-4">
                    Vi dokumenterar olika typer av events, inklusive:
                  </p>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-white/80 ml-4">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Företagsmöten</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Konferenser</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Mässor och utställningar</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Produktlanseringar</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Invigningar</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Företagsfester</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Utbildningar</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Teambuilding-aktiviteter</span>
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
                    Efter eventets avslut genomgår alla bilder en professionell efterbearbetningsprocess. 
                    Detta inkluderar urval av de bästa bilderna, färgkorrigering, retuschering, och 
                    formatering enligt dina önskemål.
                  </p>
                  <p className="text-white/80 mb-4">
                    Vi levererar bilderna i högupplöst format, lämpliga för både tryck och digitala medier, 
                    samt i webbanpassade versioner för användning på sociala medier, nyhetsbrev eller hemsida.
                  </p>
                  <p className="text-white/80 mb-4">
                    På begäran kan vi även skapa bildpresentationer, fotomontage eller andra kreativa 
                    sammanställningar av eventets dokumentation.
                  </p>
                </div>
                
                <div className="mt-8 p-6 bg-primary/10 rounded-lg border border-primary/30">
                  <h4 className="text-lg font-semibold text-white mb-2">Fördelar med professionell eventdokumentation:</h4>
                  <ul className="space-y-2 text-white/80">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Högkvalitativt material för marknadsföring</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Innehåll för sociala medier och nyhetsbrev</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Dokumentation för framtida referens och arkivering</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Material för intern kommunikation</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Underlag för förbättring av framtida events</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="mt-10 border-t border-white/10 pt-8 text-center">
              <p className="text-white/80 mb-6">
                Kontakta oss för att diskutera dina specifika behov av eventdokumentation och hur vi 
                kan hjälpa dig att bevara minnena från ditt nästa event.
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

export default Eventdokumentation;
