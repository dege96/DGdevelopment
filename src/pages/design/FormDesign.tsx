
import React from 'react';
import Layout from '@/components/Layout';
import { Palette, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const FormDesign = () => {
  return (
    <Layout>
      <section className="section-padding bg-secondary/10">
        <div className="container mx-auto">
          <Link to="/design" className="inline-flex items-center text-primary hover:text-white transition-colors mb-8">
            <ArrowLeft className="mr-2 w-4 h-4" /> Tillbaka till Design
          </Link>
          
          <div className="glass rounded-xl p-8 md:p-10 mb-10 animate-slideDown opacity-0" style={{ animationDelay: '0.2s' }}>
            <div className="flex items-center mb-6">
              <div className="bg-secondary/50 p-4 rounded-lg mr-4">
                <Palette className="w-6 h-6 text-primary" />
              </div>
              <h1 className="heading-lg text-white">Formgivning</h1>
            </div>
            
            <div className="space-y-6 text-white/80">
              <p>
                Vår formgivningsavdelning kombinerar kreativitet och teknisk kompetens för att skapa unika former och modeller.
                Vi arbetar med både traditionella och moderna tekniker för att förverkliga er vision.
              </p>
              
              <h2 className="heading-md text-white mt-10 mb-4">Våra tjänster inom Formgivning</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="glass p-6 rounded-lg hover:bg-white/5 transition-all">
                  <h3 className="text-lg font-medium mb-3 text-white">3D design & 3D print</h3>
                  <p>Vi designar och skriver ut 3D-modeller för prototyper, visualisering och slutprodukter. Vår expertis omfattar både teknisk och konstnärlig 3D-design.</p>
                </div>
                
                <div className="glass p-6 rounded-lg hover:bg-white/5 transition-all">
                  <h3 className="text-lg font-medium mb-3 text-white">Traditionell skulptering</h3>
                  <p>Handgjorda modeller och skulpturer skapade med traditionella tekniker. Perfekt för unika objekt med organiska former och konstnärliga detaljer.</p>
                </div>
                
                <div className="glass p-6 rounded-lg hover:bg-white/5 transition-all">
                  <h3 className="text-lg font-medium mb-3 text-white">Lasergravering</h3>
                  <p>Precis lasergravering av text, logotyper och dekorativa mönster på olika material som trä, plast och metall.</p>
                </div>
                
                <div className="glass p-6 rounded-lg hover:bg-white/5 transition-all">
                  <h3 className="text-lg font-medium mb-3 text-white">Formtillverkning</h3>
                  <p>Vi skapar nya former eller reproducerar befintliga genom avgjutning. Specialiserade på silikonavgjutningar för exakt detaljåtergivning.</p>
                </div>
                
                <div className="glass p-6 rounded-lg hover:bg-white/5 transition-all">
                  <h3 className="text-lg font-medium mb-3 text-white">Modellbygge</h3>
                  <p>Skräddarsydda modeller för utställningar, konceptstudier och presentationer. Vi kan integrera ljussättning och mekaniska funktioner för interaktiva modeller.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default FormDesign;
