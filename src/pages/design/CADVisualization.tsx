
import React from 'react';
import Layout from '@/components/Layout';
import { Crop, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const CADVisualization = () => {
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
                <Crop className="w-6 h-6 text-primary" />
              </div>
              <h1 className="heading-lg text-white">CAD & Visualisering</h1>
            </div>
            
            <div className="space-y-6 text-white/80">
              <p>
                Vår avdelning för CAD och visualisering erbjuder expertis inom 2D- och 3D-design, rendering och teknisk illustration.
                Vi hjälper er att visualisera produkter, koncept och idéer med precision och estetisk kvalitet.
              </p>
              
              <h2 className="heading-md text-white mt-10 mb-4">Våra tjänster inom CAD & Visualisering</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="glass p-6 rounded-lg hover:bg-white/5 transition-all">
                  <h3 className="text-lg font-medium mb-3 text-white">2D/3D visualisering</h3>
                  <p>Professionell CAD-modellering och fotorealistisk rendering för produkter, miljöer och koncept. Vi hjälper er att visualisera idéer innan de tillverkas.</p>
                </div>
                
                <div className="glass p-6 rounded-lg hover:bg-white/5 transition-all">
                  <h3 className="text-lg font-medium mb-3 text-white">Formdesign och Formtillverkning</h3>
                  <p>Vi designar och utvecklar former för olika tillverkningsprocesser, från koncept till produktionsunderlag.</p>
                </div>
                
                <div className="glass p-6 rounded-lg hover:bg-white/5 transition-all">
                  <h3 className="text-lg font-medium mb-3 text-white">Illustration & Design</h3>
                  <p>Tekniska illustrationer, exploderade vyer och designkoncept som tydligt kommunicerar produktens funktioner och estetik.</p>
                </div>
                
                <div className="glass p-6 rounded-lg hover:bg-white/5 transition-all">
                  <h3 className="text-lg font-medium mb-3 text-white">Bildhantering och Foto-retuschering</h3>
                  <p>Professionell bildbehandling för att optimera produktfotografier och marknadsföringsmaterial.</p>
                </div>
                
                <div className="glass p-6 rounded-lg hover:bg-white/5 transition-all">
                  <h3 className="text-lg font-medium mb-3 text-white">Konstruktionsritning</h3>
                  <p>Detaljerade tekniska ritningar för mekanik, elektronik och elektromekanik. Vi levererar tillverkningsunderlag som följer relevanta standarder.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CADVisualization;
