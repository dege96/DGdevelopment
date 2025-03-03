import React from 'react';
import { CircuitBoard, Layers, Palette, FileCode, Camera } from 'lucide-react';

const ServicesSection = () => {
  return (
    <section className="section-padding bg-secondary/10" id="tjänster">
      <div className="container mx-auto">
        <div className="mb-16 text-center">
          <h2 className="heading-lg mb-6 animate-slideDown opacity-0" style={{ animationDelay: '0.2s' }}>Våra Tjänster</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full animate-slideDown opacity-0" style={{ animationDelay: '0.4s' }}></div>
        </div>
        
        <div className="grid gap-16">
          {/* Modell & Formgivning */}
          <div className="animate-slideUp opacity-0" style={{ animationDelay: '0.3s' }}>
            <div className="glass rounded-xl p-8 md:p-10">
              <h3 className="heading-md mb-6 text-white flex items-center">
                <Layers className="text-primary mr-3" size={24} />
                <span>Modell & Formgivning - Formtillverkning & Prototyper</span>
              </h3>
              
              <div className="space-y-6 text-white/80">
                <p>Nytillverkning eller avgjutning</p>
                <p>Silikonavgjutning för extremt noggrann detaljåtergivning.</p>
                <p>ColdMetal (metalllimitation), glas/is eller alternativa ytbeläggningar.</p>
                <p>Med patinering eller andra textur- och färgeffekter.</p>
                
                <div className="my-8 border-l-2 border-primary/50 pl-6">
                  <p className="mb-3">3D print & design (CAD & polygonmodellering)</p>
                  <p>3D print: OneOff eller korta serier med mått upp till 2100x80x80 cm. Inklusive design av modell.</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
                  <div className="glass p-6 rounded-lg hover:bg-white/5 transition-all">
                    <h4 className="text-lg font-medium mb-3 text-white">Väggdekor "HexPanel"</h4>
                    <p>"Justerbar" till olika mönster. Opak eller genomlyst (SemiTransparent). Struktur & Färg efter önskemål.</p>
                  </div>
                  
                  <div className="glass p-6 rounded-lg hover:bg-white/5 transition-all">
                    <h4 className="text-lg font-medium mb-3 text-white">Lasergravering</h4>
                    <p>Text och dekor/fotogravering i trä, plast, metall m m</p>
                  </div>
                  
                  <div className="glass p-6 rounded-lg hover:bg-white/5 transition-all">
                    <h4 className="text-lg font-medium mb-3 text-white">Plugg & Formtillverkning</h4>
                    <p>Formar i Silikon eller Glasfiber/Gelcoat för precisionsavgjutning med t ex Epoxy, Uretan, Betong, Jesmonite, Gips, Tenn</p>
                  </div>
                </div>
                
                <div className="mt-6">
                  <h4 className="text-lg font-medium mb-3 text-white">Modellbygge</h4>
                  <p>"Klassiskt" modellbygge för utställning, konceptstudie mm.</p>
                  <p>Med eller utan ljussättning och mekatronik.</p>
                </div>
                
                <div className="mt-6">
                  <h4 className="text-lg font-medium mb-3 text-white">Tillverkningsmetoder</h4>
                  <p>Frihand/Hantverk eller kombinerade processer som t.ex:
                  CNC-Fräsning, Vatten/Laserskärning och annan avverkande bearbetning.
                  Additiv tillverkning som t.ex Vacuum-laminering, Formgjutning, 3D-printning mm</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Tekniska lösningar */}
          <div className="animate-slideUp opacity-0" style={{ animationDelay: '0.5s' }}>
            <div className="glass rounded-xl p-8 md:p-10">
              <h3 className="heading-md mb-6 text-white flex items-center">
                <CircuitBoard className="text-primary mr-3" size={24} />
                <span>Tekniska lösningar</span>
              </h3>
              
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-white/80">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Systemutveckling (Automation, Styrsystem)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Produktdesign</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Elektronik/PLC/uController-styrning eller pneumatiklösningar</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Programering C++</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Teknisk projektledning</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Leverantörsutvärdering (audit)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Konstruktions och tillverkningsunderlag (Schema, CAD, 2D Ritning)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Tillverkning och installation</span>
                </li>
              </ul>
            </div>
          </div>
          
          {/* CAD/CAM & Visualisering */}
          <div className="animate-slideUp opacity-0" style={{ animationDelay: '0.7s' }}>
            <div className="glass rounded-xl p-8 md:p-10">
              <h3 className="heading-md mb-6 text-white flex items-center">
                <FileCode className="text-primary mr-3" size={24} />
                <span>CAD/CAM & Visualisering</span>
              </h3>
              
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-white/80">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>2D/3D visualisering (CAD/Rendering)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Formdesign och Formtillverkning</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Illustration & Design</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Konstruktionsritning (Mekanik, Elektronik, Elektromekanik)</span>
                </li>
              </ul>
              
              <p className="mt-6 text-white/80">
                Bistår även som rådgivande med idé/problemlösning samt tar fram scheman, dokumentation och manualer vid behov.
              </p>
            </div>
          </div>
          
          {/* Foto & Dokumentation */}
          <div className="animate-slideUp opacity-0" style={{ animationDelay: '0.9s' }}>
            <div className="glass rounded-xl p-8 md:p-10">
              <h3 className="heading-md mb-6 text-white flex items-center">
                <Camera className="text-primary mr-3" size={24} />
                <span>Foto & Dokumentation</span>
              </h3>
              
              <p className="text-white/80 mb-4">
                Fototjänster, på plats eller i studio. Retuschering, formatering & montering
              </p>
              
              <p className="text-white/80">
                Manual och instruktioner. Projektplaner mm
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
