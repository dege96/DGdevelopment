
import React from 'react';
import Layout from '@/components/Layout';
import { Crop, Image, FileText, PenTool } from 'lucide-react';

const CADCAMVisualization = () => {
  return (
    <Layout>
      <section className="section-padding bg-secondary/10">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h1 className="heading-lg mb-6 animate-slideDown opacity-0" style={{ animationDelay: '0.2s' }}>CAD/CAM & Visualisering</h1>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full animate-slideDown opacity-0" style={{ animationDelay: '0.4s' }}></div>
          </div>
          
          <div className="glass rounded-xl p-8 md:p-10 animate-slideUp opacity-0" style={{ animationDelay: '0.3s' }}>
            <div className="space-y-8 text-white/80">
              <p className="text-center max-w-3xl mx-auto">
                Vår avdelning för CAD/CAM och visualisering erbjuder professionella tjänster inom design, modellering och visualisering.
                Vi hjälper er att omvandla idéer till detaljerade tekniska underlag och övertygande visuella presentationer.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                <div className="glass p-6 rounded-lg hover:bg-white/5 transition-all">
                  <div className="flex items-center mb-3">
                    <Crop className="w-5 h-5 text-primary mr-2" />
                    <h3 className="text-lg font-medium text-white">2D/3D visualisering</h3>
                  </div>
                  <p>Professionell CAD-modellering och fotorealistisk rendering för produkter, miljöer och koncept. Vi hjälper er att visualisera idéer innan de tillverkas.</p>
                </div>
                
                <div className="glass p-6 rounded-lg hover:bg-white/5 transition-all">
                  <div className="flex items-center mb-3">
                    <PenTool className="w-5 h-5 text-primary mr-2" />
                    <h3 className="text-lg font-medium text-white">Formdesign och Formtillverkning</h3>
                  </div>
                  <p>Vi designar och utvecklar former för olika tillverkningsprocesser, från koncept till produktionsunderlag.</p>
                </div>
                
                <div className="glass p-6 rounded-lg hover:bg-white/5 transition-all">
                  <div className="flex items-center mb-3">
                    <Image className="w-5 h-5 text-primary mr-2" />
                    <h3 className="text-lg font-medium text-white">Illustration & Design</h3>
                  </div>
                  <p>Tekniska illustrationer, exploderade vyer och designkoncept som tydligt kommunicerar produktens funktioner och estetik.</p>
                </div>
                
                <div className="glass p-6 rounded-lg hover:bg-white/5 transition-all">
                  <div className="flex items-center mb-3">
                    <FileText className="w-5 h-5 text-primary mr-2" />
                    <h3 className="text-lg font-medium text-white">Konstruktionsritning</h3>
                  </div>
                  <p>Detaljerade tekniska ritningar för olika applikationer. Vi levererar tillverkningsunderlag som följer relevanta standarder.</p>
                </div>
              </div>
              
              <div className="glass p-6 rounded-lg mt-12">
                <h3 className="text-lg font-medium mb-3 text-white">Rådgivning och dokumentation</h3>
                <p>
                  Bistår även som rådgivande med idé/problemlösning samt tar fram scheman, dokumentation och manualer vid behov.
                  Vår expertis hjälper er att hitta optimala lösningar för komplexa designutmaningar.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CADCAMVisualization;
