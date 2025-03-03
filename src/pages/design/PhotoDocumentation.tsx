
import React from 'react';
import Layout from '@/components/Layout';
import { Camera, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const PhotoDocumentation = () => {
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
                <Camera className="w-6 h-6 text-primary" />
              </div>
              <h1 className="heading-lg text-white">Foto & Dokumentering</h1>
            </div>
            
            <div className="space-y-6 text-white/80">
              <p>
                Vår avdelning för foto och dokumentering erbjuder professionella tjänster inom fotografering och bildbehandling.
                Vi hjälper er att dokumentera produkter, evenemang och projekt med högsta kvalitet.
              </p>
              
              <h2 className="heading-md text-white mt-10 mb-4">Våra tjänster inom Foto & Dokumentering</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="glass p-6 rounded-lg hover:bg-white/5 transition-all">
                  <h3 className="text-lg font-medium mb-3 text-white">Fototjänster</h3>
                  <p>Professionell fotografering, antingen på plats eller i vår studio. Vi specialiserar oss på produktfotografering, eventdokumentation och teknisk fotografering.</p>
                </div>
                
                <div className="glass p-6 rounded-lg hover:bg-white/5 transition-all">
                  <h3 className="text-lg font-medium mb-3 text-white">Retuschering, formatering & montering</h3>
                  <p>Professionell bildbehandling för att optimera och anpassa bilder för olika användningsområden. Vi kan även skapa bildmontage och kompositbilder.</p>
                </div>
              </div>
              
              <div className="mt-10">
                <h2 className="heading-md text-white mb-4">Fotogalleri</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Link to="/foto-dokumentation/produkt-event" className="glass p-6 rounded-lg hover:bg-white/5 transition-all group">
                    <h3 className="text-lg font-medium mb-3 text-white group-hover:text-primary">Produkt & Event</h3>
                    <p>Se vårt galleri med produkt- och eventfotografier.</p>
                  </Link>
                  
                  <Link to="/foto-dokumentation/natur" className="glass p-6 rounded-lg hover:bg-white/5 transition-all group">
                    <h3 className="text-lg font-medium mb-3 text-white group-hover:text-primary">Natur</h3>
                    <p>Se vårt galleri med naturfotografier.</p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PhotoDocumentation;
