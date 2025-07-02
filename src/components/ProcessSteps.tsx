import React from 'react';
import { Link } from 'react-router-dom';
import { BrainCircuit, Lightbulb, EyeIcon, CheckCircle, ChevronRight } from 'lucide-react';

const ProcessSteps = () => {
  const steps = [
    {
      title: "FRÅGA",
      icon: <BrainCircuit className="w-8 h-8 md:w-12 md:h-12 text-primary" />,
      description: "Vi analyserar behovet och utmaningen som ska lösas",
    },
    {
      title: "IDÉ",
      icon: <Lightbulb className="w-8 h-8 md:w-12 md:h-12 text-primary" />,
      description: "Vi utvecklar kreativa lösningar baserade på analys och expertis",
    },
    {
      title: "VISUALISERING",
      icon: <EyeIcon className="w-8 h-8 md:w-12 md:h-12 text-primary" />,
      description: "Vi utformar konceptet genom design och visualisering",
    },
    {
      title: "RESULTAT",
      icon: <CheckCircle className="w-8 h-8 md:w-12 md:h-12 text-primary" />,
      description: "Vi levererar högkvalitativa resultat som möter eller överträffar förväntningar",
    },
  ];
  
  return (
    <section className="section-padding" id="process">
      <div className="container mx-auto">
        <div className="mb-16 text-center">
          <h2 className="heading-lg mb-6 animate-slideDown opacity-0" style={{ animationDelay: '0.2s' }}>Process</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full animate-slideDown opacity-0" style={{ animationDelay: '0.4s' }}></div>
        </div>
        
        {/* Mobilvy: visa SVG-grafik */}
        <div className="md:hidden flex justify-center animate-fadeIn">
          <img src="/process.png" alt="Processöversikt" className="max-w-full h-auto" />
        </div>

        {/* Desktop / större skärmar: kort-layout */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="glass p-8 rounded-xl flex flex-col items-center text-center group hover:bg-white/5 transition-all duration-500 animate-slideUp opacity-0"
              style={{ animationDelay: `${0.2 + index * 0.15}s` }}
            >
              <div className="bg-secondary/50 p-5 rounded-full mb-6 group-hover:scale-110 transition-transform duration-500">
                {step.icon}
              </div>
              <h3 className="heading-sm mb-3 text-white group-hover:text-primary transition-colors">
                {step.title}
              </h3>
              <p className="text-white/70">
                {step.description}
              </p>
              
              <div className="mt-6 w-12 h-0.5 bg-primary/50 group-hover:w-20 transition-all duration-500"></div>
            </div>
          ))}
        </div>

      {/* CTA-sektion */}
      <section className="py-12 mb-12">
        <div className="container mx-auto px-6">
          <div className="glass rounded-xl p-8 md:p-10 text-center animate-slideUp opacity-0">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Behöver du hjälp med ditt projekt?</h2>
            <p className="text-white/80 mb-8 max-w-2xl mx-auto">
              Kontakta mig idag för att se hur jag kan hjälpa dig att göra era idéer till verklighet.<br></br>
              Jag erbjuder kostnadsfria inledande konsultationer för att förstå era behov bättre.
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
      </div>
    </section>
  );
};

export default ProcessSteps;
