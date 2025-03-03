
import React from 'react';
import Layout from '@/components/Layout';
import { Box, Scissors, Layers, Printer, Package, Hammer } from 'lucide-react';

const ModelFormDesign = () => {
  return (
    <Layout>
      <section className="section-padding bg-secondary/10">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h1 className="heading-lg mb-6 animate-slideDown opacity-0" style={{ animationDelay: '0.2s' }}>Modell & Formgivning</h1>
            <p className="max-w-3xl mx-auto text-white/70 mb-8 animate-slideDown opacity-0" style={{ animationDelay: '0.4s' }}>
              Formtillverkning & Prototyper
            </p>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full animate-slideDown opacity-0" style={{ animationDelay: '0.6s' }}></div>
          </div>
          
          {/* Avgjutning & Nytillverkning */}
          <div className="glass rounded-xl p-8 md:p-10 mb-12 animate-slideUp opacity-0" style={{ animationDelay: '0.3s' }}>
            <div className="flex items-center mb-6">
              <div className="bg-secondary/50 p-4 rounded-lg mr-4">
                <Package className="w-6 h-6 text-primary" />
              </div>
              <h2 className="heading-md text-white">Avgjutning & Nytillverkning</h2>
            </div>
            
            <div className="space-y-4 text-white/80">
              <p>Nytillverkning eller avgjutning</p>
              <p>Silikonavgjutning för extremt noggrann detaljåtergivning.</p>
              <p>ColdMetal (metallimitation), glas/is eller alternativa ytbeläggningar.</p>
              <p>Med patinering eller andra textur- och färgeffekter.</p>
            </div>
          </div>
          
          {/* 3D Print & Design */}
          <div className="glass rounded-xl p-8 md:p-10 mb-12 animate-slideUp opacity-0" style={{ animationDelay: '0.5s' }}>
            <div className="flex items-center mb-6">
              <div className="bg-secondary/50 p-4 rounded-lg mr-4">
                <Printer className="w-6 h-6 text-primary" />
              </div>
              <h2 className="heading-md text-white">3D Print & Design</h2>
            </div>
            
            <div className="space-y-4 text-white/80">
              <p>CAD & polygonmodellering för avancerade 3D-modeller.</p>
              <p>3D print: OneOff eller korta serier med mått upp till 2100x80x80 cm.</p>
              <p>Komplett tjänst inklusive design av modell.</p>
            </div>
          </div>
          
          {/* Specialprodukter */}
          <div className="glass rounded-xl p-8 md:p-10 mb-12 animate-slideUp opacity-0" style={{ animationDelay: '0.7s' }}>
            <h2 className="heading-md text-white mb-8">Specialprodukter</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="glass p-6 rounded-lg hover:bg-white/5 transition-all">
                <h3 className="text-lg font-medium mb-3 text-white">Väggdekor "HexPanel"</h3>
                <p className="text-white/80">"Justerbar" till olika mönster. Opak eller genomlyst (SemiTransparent). Struktur & Färg efter önskemål.</p>
              </div>
              
              <div className="glass p-6 rounded-lg hover:bg-white/5 transition-all">
                <h3 className="text-lg font-medium mb-3 text-white">Lasergravering</h3>
                <p className="text-white/80">Text och dekor/fotogravering i trä, plast, metall m m</p>
              </div>
              
              <div className="glass p-6 rounded-lg hover:bg-white/5 transition-all">
                <h3 className="text-lg font-medium mb-3 text-white">Plugg & Formtillverkning</h3>
                <p className="text-white/80">Formar i Silikon eller Glasfiber/Gelcoat för precisionsavgjutning med t ex Epoxy, Uretan, Betong, Jesmonite, Gips, Tenn</p>
              </div>
            </div>
          </div>
          
          {/* Modellbygge */}
          <div className="glass rounded-xl p-8 md:p-10 mb-12 animate-slideUp opacity-0" style={{ animationDelay: '0.9s' }}>
            <div className="flex items-center mb-6">
              <div className="bg-secondary/50 p-4 rounded-lg mr-4">
                <Box className="w-6 h-6 text-primary" />
              </div>
              <h2 className="heading-md text-white">Modellbygge</h2>
            </div>
            
            <div className="space-y-4 text-white/80">
              <p>"Klassiskt" modellbygge för utställning, konceptstudie mm.</p>
              <p>Med eller utan ljussättning och mekatronik.</p>
            </div>
          </div>
          
          {/* Tillverkningsmetoder */}
          <div className="glass rounded-xl p-8 md:p-10 animate-slideUp opacity-0" style={{ animationDelay: '1.1s' }}>
            <div className="flex items-center mb-6">
              <div className="bg-secondary/50 p-4 rounded-lg mr-4">
                <Hammer className="w-6 h-6 text-primary" />
              </div>
              <h2 className="heading-md text-white">Tillverkningsmetoder</h2>
            </div>
            
            <div className="space-y-4 text-white/80">
              <h3 className="text-lg font-medium text-white">Traditionella metoder</h3>
              <p>Frihand/Hantverk för organiska former och artistiska detaljer.</p>
              
              <h3 className="text-lg font-medium text-white mt-6">Avverkande processer</h3>
              <p>CNC-Fräsning, Vatten/Laserskärning och annan avverkande bearbetning.</p>
              
              <h3 className="text-lg font-medium text-white mt-6">Additiva processer</h3>
              <p>Vacuum-laminering, Formgjutning, 3D-printning mm.</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ModelFormDesign;
