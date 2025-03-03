
import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import { Code, Palette, Crop, Camera, ArrowRight } from 'lucide-react';

const DesignCard = ({ title, icon, items, link }: { 
  title: string; 
  icon: React.ReactNode; 
  items: string[]; 
  link?: string;
}) => {
  return (
    <div className="glass rounded-xl p-6 md:p-8 hover:bg-white/5 transition-all duration-300 group animate-slideUp opacity-0" style={{ animationDelay: '0.3s' }}>
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
  const designCards = [
    {
      title: "Teknisk design",
      icon: <Code className="w-5 h-5 text-primary" />,
      items: [
        "Systemutveckling (Automation, Styrsystem)",
        "Produktdesign",
        "Elektronik/PLC/uController-styrning",
        "Pneumatiklösningar",
        "Programering C++",
        "Teknisk projektledning"
      ],
      link: "/design/teknisk-design"
    },
    {
      title: "CAD & Visualisering",
      icon: <Crop className="w-5 h-5 text-primary" />,
      items: [
        "2D/3D visualisering (CAD/Rendering)",
        "Formdesign och Formtillverkning",
        "Illustration & Design",
        "Bildhantering och Foto-retuschering",
        "Konstruktionsritning"
      ],
      link: "/design/cad-visualisering"
    },
    {
      title: "Formgivning",
      icon: <Palette className="w-5 h-5 text-primary" />,
      items: [
        "3D design & 3D print",
        "Traditionell skulptering",
        "Lasergravering",
        "Formtillverkning",
        "Modellbygge"
      ],
      link: "/design/formgivning"
    },
    {
      title: "Foto & Dokumentering",
      icon: <Camera className="w-5 h-5 text-primary" />,
      items: [
        "Fototjänster, på plats eller i studio",
        "Retuschering, formatering & montering"
      ],
      link: "/design/foto"
    }
  ];

  return (
    <Layout>
      <section className="section-padding bg-secondary/10" id="design">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h1 className="heading-lg mb-6 animate-slideDown opacity-0" style={{ animationDelay: '0.2s' }}>Design</h1>
            <p className="max-w-3xl mx-auto text-white/70 mb-8 animate-slideDown opacity-0" style={{ animationDelay: '0.4s' }}>
              "Idé/problemlösning, Helhetsansvar för tillverkning, Samordning, installation & driftsättning. Projektplan, manualer och annan dokumentation"
            </p>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full animate-slideDown opacity-0" style={{ animationDelay: '0.6s' }}></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {designCards.map((card, index) => (
              <DesignCard 
                key={index}
                title={card.title}
                icon={card.icon}
                items={card.items}
                link={card.link}
              />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Design;
