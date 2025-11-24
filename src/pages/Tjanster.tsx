import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import { Palette, Cpu, Printer, Wrench, ChevronRight } from 'lucide-react';

// Tjänstekategorier med detaljerad information
const serviceCategories = [
  {
    id: "design-formgivning",
    title: "Design & Formgivning",
    icon: <Palette className="text-primary" size={28} />,
    description: "Från idé till färdig design med fokus på funktion och estetik.",
    image: "/TranspBkg/NIKEslutleverans.png",
    link: "/tjanster/design-formgivning",
    services: [
      "Teknisk design",
      "CAD & Visualisering",
      "Formgivning",
      "Foto & Dokumentering"
    ]
  },
  {
    id: "tekniska-losningar",
    title: "Tekniska Lösningar",
    icon: <Cpu className="text-primary" size={28} />,
    description: "Innovativa tekniska lösningar för komplexa utmaningar.",
    image: "/TranspBkg/vaclyft_v2.png",
    link: "/tjanster/tekniska-losningar",
    services: [
      "Systemutveckling & Automation",
      "Elektronik & Styrsystem",
      "Konstruktion & Tillverkningsunderlag"
    ]
  },
  {
    id: "prototyper",
    title: "Prototyper & Specialtillverkning",
    icon: <Printer className="text-primary" size={28} />,
    description: "Snabb och precis prototypframställning för att testa och visualisera koncept.",
    image: "/TranspBkg/Manasi Flaska Cap_fri.png",
    link: "/tjanster/prototyper",
    services: [
      "Prototypframställning",
      "3D-printning & Lasergravering",
      "Modellbygge"
    ]
  },
  {
    id: "tillverkningsmetoder",
    title: "Tillverkning",
    icon: <Wrench className="text-primary" size={28} />,
    description: "Professionella tillverkningsmetoder för högkvalitativa resultat.",
    image: "/TranspBkg/DGDtest_iskristall_rb.png",
    link: "/tjanster/tillverkningsmetoder",
    services: [
      "CNC-fräsning & Laserskärning",
      "Formtillverkning",
      "Vacuum-laminering & Formgjutning"
    ]
  }
];

const ServiceCard = ({ category, isEven }: { category: typeof serviceCategories[0], isEven: boolean }) => {
  return (
    <div id={category.id} className={`glass rounded-xl p-8 md:p-10 flex flex-col md:flex-row ${isEven ? 'md:flex-row-reverse' : ''} gap-8 mb-16 animate-slideUp opacity-0`}>
      {/* Bild */}
      <div className="w-full md:w-1/2 h-[300px] rounded-xl overflow-hidden">
        <img 
          src={category.image} 
          alt={category.title} 
          className="w-full h-full object-contain transition-transform duration-700 hover:scale-105"
        />
      </div>
      
      {/* Innehåll */}
      <div className="w-full md:w-1/2 flex flex-col justify-center">
        <div className="flex items-center mb-4">
          <div className="bg-secondary/30 p-3 rounded-lg mr-4">
            {category.icon}
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-white">{category.title}</h2>
        </div>
        
        <p className="text-white/70 mb-6">{category.description}</p>
        
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-white mb-3">Tjänster:</h3>
          <ul className="space-y-2">
            {category.services.map((service, index) => (
              <li key={index} className="flex items-center text-white/80">
                <span className="text-primary mr-2">•</span> {service}
              </li>
            ))}
          </ul>
        </div>
        
        <Link 
          to={category.link} 
          className="inline-flex items-center glass hover:bg-white/10 text-white px-6 py-2 rounded-full transition-all duration-300 group self-start"
        >
          Läs mer
          <ChevronRight className="ml-1 group-hover:translate-x-1 transition-transform" size={18} />
        </Link>
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

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      
      {/* Page Header */}
      <div className="pt-32 pb-12 bg-gradient-to-b from-secondary/20 to-background">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 animate-slideDown opacity-0">Tjänster</h1>
          <p className="text-white/70 max-w-3xl animate-slideDown opacity-0" style={{ animationDelay: '0.2s' }}>
            En komplett översikt över alla tjänster vi erbjuder inom design, teknik, prototyper och tillverkning
          </p>
                {/* Dekorativt streck under rubriken */}
      <div className="w-20 h-1 bg-primary rounded-full mt-4 animate-slideDown opacity-0" style={{ animationDelay: '0.4s' }}></div>

        </div>
      </div>
      

      {/* Tjänstekategorier */}
      <section className="py-12">
        <div className="container mx-auto px-6">
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