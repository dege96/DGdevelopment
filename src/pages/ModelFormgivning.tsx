
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Package, Printer, Hexagon, Scissors, Box, LayoutGrid, Hammer } from 'lucide-react';
import { Link } from 'react-router-dom';

const SectionCard = ({ 
  title, 
  icon, 
  children, 
  id 
}: { 
  title: string; 
  icon: React.ReactNode; 
  children: React.ReactNode;
  id: string;
}) => {
  return (
    <div id={id} className="glass rounded-xl p-6 md:p-8 mb-10 animate-slideUp opacity-0">
      <div className="flex items-center mb-6">
        <div className="bg-secondary/50 p-3 rounded-lg mr-4 group-hover:bg-primary/20 transition-colors">
          {icon}
        </div>
        <h3 className="heading-sm text-white">{title}</h3>
      </div>
      
      <div className="text-white/70 space-y-4">
        {children}
      </div>
    </div>
  );
};

const ModelFormgivning = () => {
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
          <h1 className="heading-lg mb-4 animate-slideDown opacity-0">Modell & Formgivning</h1>
          <p className="text-white/70 max-w-3xl animate-slideDown opacity-0" style={{ animationDelay: '0.2s' }}>
            Formtillverkning & Prototyper, från idé till färdig produkt
          </p>
        </div>
      </div>
      
      {/* Sections */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <SectionCard id="avgjutning" title="Avgjutning & Nytillverkning" icon={<Package className="w-5 h-5 text-primary" />}>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-primary mr-2 text-sm">•</span>
                <span>Silikonavgjutning för extremt noggrann detaljåtergivning</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2 text-sm">•</span>
                <span>ColdMetal (metallimitation)</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2 text-sm">•</span>
                <span>Glas/is-imitation</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2 text-sm">•</span>
                <span>Alternativa ytbeläggningar</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2 text-sm">•</span>
                <span>Patinering och andra textur- och färgeffekter</span>
              </li>
            </ul>
          </SectionCard>
          
          <SectionCard id="3d-print" title="3D Print & Design" icon={<Printer className="w-5 h-5 text-primary" />}>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-primary mr-2 text-sm">•</span>
                <span>CAD & polygonmodellering</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2 text-sm">•</span>
                <span>OneOff eller korta serier</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2 text-sm">•</span>
                <span>Storlekar upp till 2100x80x80 cm</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2 text-sm">•</span>
                <span>Design av modell</span>
              </li>
            </ul>
          </SectionCard>
          
          <SectionCard id="specialprodukter" title="Specialprodukter" icon={<Hexagon className="w-5 h-5 text-primary" />}>
            <h4 className="text-lg font-medium mb-3 text-white">Väggdekor "HexPanel"</h4>
            <ul className="space-y-2 ml-4">
              <li className="flex items-start">
                <span className="text-primary mr-2 text-sm">•</span>
                <span>Justerbara mönster</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2 text-sm">•</span>
                <span>Opak eller genomlyst (SemiTransparent)</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2 text-sm">•</span>
                <span>Anpassningsbar struktur & färg</span>
              </li>
            </ul>
          </SectionCard>
          
          <SectionCard id="lasergravering" title="Lasergravering" icon={<Scissors className="w-5 h-5 text-primary" />}>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-primary mr-2 text-sm">•</span>
                <span>Text och dekor/fotogravering</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2 text-sm">•</span>
                <span>Material: trä, plast, metall m.m.</span>
              </li>
            </ul>
          </SectionCard>
          
          <SectionCard id="formtillverkning" title="Plugg & Formtillverkning" icon={<Box className="w-5 h-5 text-primary" />}>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-primary mr-2 text-sm">•</span>
                <span>Silikonformar</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2 text-sm">•</span>
                <span>Glasfiber/Gelcoat-formar</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2 text-sm">•</span>
                <span>Precisionsavgjutning med olika material:</span>
              </li>
            </ul>
            <ul className="space-y-2 ml-6 mt-2">
              <li className="flex items-start">
                <span className="text-primary mr-2 text-sm">-</span>
                <span>Epoxy</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2 text-sm">-</span>
                <span>Uretan</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2 text-sm">-</span>
                <span>Betong</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2 text-sm">-</span>
                <span>Jesmonite</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2 text-sm">-</span>
                <span>Gips</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2 text-sm">-</span>
                <span>Tenn</span>
              </li>
            </ul>
          </SectionCard>
          
          <SectionCard id="modellbygge" title="Modellbygge" icon={<LayoutGrid className="w-5 h-5 text-primary" />}>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-primary mr-2 text-sm">•</span>
                <span>Utställningsmodeller</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2 text-sm">•</span>
                <span>Konceptstudier</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2 text-sm">•</span>
                <span>Med/utan ljussättning och mekatronik</span>
              </li>
            </ul>
          </SectionCard>
          
          <SectionCard id="tillverkningsmetoder" title="Tillverkningsmetoder" icon={<Hammer className="w-5 h-5 text-primary" />}>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-primary mr-2 text-sm">•</span>
                <span>Frihand/Hantverk</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2 text-sm">•</span>
                <span>CNC-Fräsning</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2 text-sm">•</span>
                <span>Vatten/Laserskärning</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2 text-sm">•</span>
                <span>Vacuum-laminering</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2 text-sm">•</span>
                <span>Formgjutning</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2 text-sm">•</span>
                <span>3D-printning</span>
              </li>
            </ul>
          </SectionCard>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default ModelFormgivning;
