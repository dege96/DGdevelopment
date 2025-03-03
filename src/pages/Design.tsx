
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Code, Palette, Crop, Camera, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const DesignCard = ({ 
  title, 
  icon, 
  items, 
  link, 
  id 
}: { 
  title: string; 
  icon: React.ReactNode; 
  items: string[]; 
  link?: string;
  id: string;
}) => {
  return (
    <div id={id} className="glass rounded-xl p-6 md:p-8 hover:bg-white/5 transition-all duration-300 group animate-slideUp opacity-0" style={{ animationDelay: '0.3s' }}>
      <div className="flex items-center mb-6">
        <div className="bg-secondary/50 p-3 rounded-lg mr-4 group-hover:bg-primary/20 transition-colors">
          {icon}
        </div>
        <h3 className="heading-sm text-white">{title}</h3>
      </div>
      
      <ul className="space-y-3 mb-6">
        {items.map((item, i) => (
          <li key={i} className="text-white/70 flex items-start">
            <span className="text-primary mr-2 text-sm">•</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
      
      {link && (
        <Link to={link} className="inline-flex items-center text-primary hover:text-white transition-colors group-hover:translate-x-1 duration-300">
          Läs mer <ArrowRight className="ml-1 w-4 h-4" />
        </Link>
      )}
    </div>
  );
};

const Design = () => {
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

  const designCards = [
    {
      id: "teknisk-design",
      title: "Teknisk design",
      icon: <Code className="w-5 h-5 text-primary" />,
      items: [
        "Systemutveckling (Automation, Styrsystem)",
        "Produktdesign",
        "Elektronik/PLC/uController-styrning",
        "Pneumatiklösningar",
        "Programmering C++",
        "Teknisk projektledning"
      ]
    },
    {
      id: "cad-visualisering",
      title: "CAD & Visualisering",
      icon: <Crop className="w-5 h-5 text-primary" />,
      items: [
        "2D/3D visualisering (CAD/Rendering)",
        "Formdesign",
        "Illustration & Design",
        "Bildhantering och Foto-retuschering",
        "Konstruktionsritning (Mekanik, Elektronik, Elektromekanik)"
      ]
    },
    {
      id: "formgivning",
      title: "Formgivning",
      icon: <Palette className="w-5 h-5 text-primary" />,
      items: [
        "3D design & 3D print",
        "Traditionell skulptering",
        "Lasergravering",
        "Formtillverkning (Nytillverkning eller avgjutning)",
        "Modellbygge"
      ]
    },
    {
      id: "foto-dokumentering",
      title: "Foto & Dokumentering",
      icon: <Camera className="w-5 h-5 text-primary" />,
      items: [
        "Fototjänster (på plats eller i studio)",
        "Retuschering, formatering & montering"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      
      {/* Page Header */}
      <div className="pt-32 pb-12 bg-gradient-to-b from-secondary/20 to-background">
        <div className="container mx-auto px-6">
          <h1 className="heading-lg mb-4 animate-slideDown opacity-0">Design</h1>
          <p className="text-white/70 max-w-3xl animate-slideDown opacity-0" style={{ animationDelay: '0.2s' }}>
            Idé/problemlösning, Helhetsansvar för tillverkning, Samordning, installation & driftsättning. Projektplan, manualer och annan dokumentation
          </p>
        </div>
      </div>
      
      {/* Design Categories */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {designCards.map((card, index) => (
              <DesignCard 
                key={index}
                id={card.id}
                title={card.title}
                icon={card.icon}
                items={card.items}
              />
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <Link 
              to="/modell-formgivning" 
              className="inline-flex items-center glass hover:bg-white/10 text-white px-8 py-3 rounded-full transition-all duration-300 group animate-fadeIn opacity-0"
            >
              Utforska Modell & Formgivning
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Design;
