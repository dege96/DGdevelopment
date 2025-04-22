import React, { useEffect, useRef, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import { Palette, Cpu, Printer, Wrench, ChevronRight, Camera } from 'lucide-react';
import { serialize } from 'v8';

// Tjänstekategorier med detaljerad information
const serviceCategories = [
  {
    id: "design-formgivning",
    title: "Design & Formgivning",
    icon: <Palette className="text-primary" size={28} />,
    description: "Från idé till färdig design med fokus på funktion och estetik.",
    image: "/bildspel_Design_Formgivning/Scenografi_Logo UV_paint _RENDER.jpg",
    link: "/tjanster/design-formgivning",
    services: [
      "Teknisk design, Konstruktionsunderlag",
      "CAD & Visualisering",
      "Dekormålning (Digitaltryck eller handmålning)",
      "Scenografi (Profilsystem och/eller unika artistiska objekt)",
      "LED ljussättning (Statisk eller animerad)",
      "Formgivning",
      "Formtillverkning", 
      "Foto & Dokumentering"
    ]
  },
  {
    id: "tekniska-losningar",
    title: "Tekniska Lösningar",
    icon: <Cpu className="text-primary" size={28} />,
    description: "Problemlösning och modifiering av nuläge, eller komplett nykonstruktion",
    image: "/bildspel_Tekniska_Losningar/PNEU_VacBox Dubbel_Ejekt.png",
    link: "/tjanster/tekniska-losningar",
    services: [
      "Styr & Regler (PLC, Pneumatik)",
      "C++ programering (PLC)", 
      "Apparatskåp (Std DIN-rail)",
      "Konstruktion & Tillverkningsunderlag",
      "CAD & Visualisering",
      "Tillverkning (Mekanik)"
    ]
  },
  {
    id: "prototyper",
    title: "Prototyper & Specialtillverkning",
    icon: <Printer className="text-primary" size={28} />,
    description: "Prototypframställning för koncept-test och visualisering, alternativt one-off behov ",
    image: "/TranspBkg/Manasi Flaska Cap_fri.png",
    link: "/tjanster/prototyper",
    services: [
      "CAD design (Teknisk eller digital skulptering)",
      "3D-modell (Print och/eller gjutning)",
      "Formtillverkning",
      "Lasergravering", 
      "Klassiskt modellbygge (Mixed arts)"
    ]
  },
  {
    id: "foto-dokumentering",
    title: "Foto & Dokumentering",
    icon: <Camera className="text-primary" size={28} />,
    description: "Vi bistår med fototjänster, på plats eller i egen studio.",
    image: "/bildspel_Foto_Dokumentering/Dokumentering/PLC_schema_Fläktsyst_REV9.jpg",
    link: "/tjanster/foto-dokumentering",
    longDescription: "Efter att en systemlösning eller produkt har slutförts, så efterfrågas ofta även dokumenterad grafisk översikt, manualer eller konstruktionsunderlag mm.\n\nVi tar fram allt bild och textmaterial till tydliga och lättåtkomliga digitala eller tryckta format.\n\nEfter fotograferingen erbjuder vi professionell bildbehandling, retuschering, formatering och montering. Vi säkerställer att dina bilder får rätt färgjusteringar, beskärning och andra nödvändiga justeringar för att uppnå bästa möjliga resultat.\n\nVåra tjänster inkluderar även retuschering, borttagning av bakgrunder, skapande av bildkompositioner och anpassning av bilder för olika medier och användningsområden."
  },
  {
    id: "tillverkning",
    title: "Tillverkningsmetoder",
    icon: <Wrench className="text-primary" size={28} />,
    description: 'Professionella metoder av "Mixed Arts" karaktär: Från ren Industriell teknisk, till traditionell frihandsskulptering och skalan däremellan.',
    image: "/bildspel_Tekniska_Losningar/Prod_VacLyft_Custom.png",
    services: [
      "CNC-fräsning",
      "Laser & vattenskärning",
      "Formtillverkning (Silikon, GF)",
      "Vacuum-laminering & Formgjutning",
      "Konstruktionsmaterial (Metaller, Trä, Epoxy, Betong, PUR m fl.)",
      "Gjutning",
      "Klassisk skulptering",
      "Finsnickeri"
    ]
  }
];

const ServiceCard = ({ category, isEven }: { category: typeof serviceCategories[0], isEven: boolean }) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const [contentHeight, setContentHeight] = useState<number>(0);

  useEffect(() => {
    const updateHeight = () => {
      if (contentRef.current) {
        setContentHeight(contentRef.current.offsetHeight);
      }
    };

    updateHeight();
    window.addEventListener('resize', updateHeight);
    return () => window.removeEventListener('resize', updateHeight);
  }, []);

  return (
    <div 
      id={category.id}
      className={`flex flex-col md:flex-row ${isEven ? 'md:flex-row-reverse' : ''} gap-8 mb-16 animate-slideUp opacity-0 scroll-mt-32`}
    >
      {/* Bild */}
      <div 
        className="w-full md:w-1/2 h-[300px] rounded-xl overflow-hidden"
        style={{ height: window.innerWidth >= 768 ? `${contentHeight}px` : '300px' }}
      >
        <img 
          src={category.image} 
          alt={category.title} 
          className="w-full h-full min-h-full object-contain transition-transform duration-700 hover:scale-105 border-radius-xl"
        />
      </div>
      
      {/* Innehåll */}
      <div ref={contentRef} className="w-full md:w-1/2 flex flex-col">
        <div className="flex items-center mb-4">
          <div className="bg-secondary/30 p-3 rounded-lg mr-4">
            {category.icon}
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-white">{category.title}</h2>
        </div>
        
        <p className="text-white/70 mb-6">{category.description}</p>
        
        {category.longDescription ? (
          <div className="mb-6 text-white/80 space-y-4">
            {category.longDescription.split('\n\n').map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        ) : (
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-white mb-3">Tjänster:</h3>
            <ul className="space-y-2">
              {category.services?.map((service, index) => (
                <li key={index} className="flex items-center text-white/80">
                  <span className="text-primary mr-2">•</span> {service}
                </li>
              ))}
            </ul>
          </div>
        )}
        
        {category.id !== "tillverkning" && (
          <Link 
            to={category.link} 
            className="inline-flex items-center glass hover:bg-white/10 text-white px-6 py-2 rounded-full transition-all duration-300 group self-start"
          >
            Se bilder
            <ChevronRight className="ml-1 group-hover:translate-x-1 transition-transform" size={18} />
          </Link>
        )}
      </div>
    </div>
  );
};

const Tjanster = () => {
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

    const animateElements = document.querySelectorAll('.animate-slideUp, .animate-slideDown, .animate-fadeIn');
    animateElements.forEach((el) => observer.observe(el));

    return () => {
      animateElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  // Hantera hash-länkar
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash) {
        const element = document.querySelector(hash);
        if (element) {
          setTimeout(() => {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }, 100);
        }
      }
    };

    // Kör direkt vid sidladdning
    handleHashChange();

    // Lägg till event listener för hash-ändringar
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      
      {/* Page Header */}
      <div className="pt-32 pb-12 bg-gradient-to-b from-secondary/20 to-background">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 animate-slideDown opacity-0">Våra Tjänster</h1>
          <p className="text-white/70 max-w-3xl animate-slideDown opacity-0" style={{ animationDelay: '0.2s' }}>
            En komplett översikt över alla tjänster vi erbjuder inom design, teknik, prototyper och tillverkning
          </p>
        </div>
      </div>
      
      {/* Tjänstekategorier */}
      <section>
        <div className="container mx-auto">
          {serviceCategories.map((category, index) => (
            <ServiceCard 
              key={category.id} 
              category={category} 
              isEven={index % 2 !== 0}
            />
          ))}
        </div>
      </section>
      
      {/* CTA-sektion */}
      <section className="py-12 mb-12">
        <div className="container mx-auto px-6">
          <div className="glass rounded-xl p-8 md:p-10 text-center animate-slideUp opacity-0">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Behöver du hjälp med ditt projekt?</h2>
            <p className="text-white/80 mb-8 max-w-2xl mx-auto">
              Kontakta oss idag för att diskutera dina behov och hur vi kan hjälpa dig att förverkliga dina idéer. 
              Vi erbjuder kostnadsfria inledande konsultationer för att förstå ditt projekt bättre.
            </p>
            <Link 
              to="/kontakt" 
              className="inline-flex items-center glass hover:bg-white/10 text-white px-8 py-3 rounded-full transition-all duration-300 group"
            >
              Kontakta oss
              <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Tjanster; 