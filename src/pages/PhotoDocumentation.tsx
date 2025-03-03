
import React from 'react';
import Layout from '@/components/Layout';
import { Camera, FileText, Image } from 'lucide-react';
import { Link } from 'react-router-dom';

const PhotoDocumentation = () => {
  return (
    <Layout>
      <section className="section-padding bg-secondary/10">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h1 className="heading-lg mb-6 animate-slideDown opacity-0" style={{ animationDelay: '0.2s' }}>Foto & Dokumentation</h1>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full animate-slideDown opacity-0" style={{ animationDelay: '0.4s' }}></div>
          </div>
          
          <div className="glass rounded-xl p-8 md:p-10 mb-12 animate-slideUp opacity-0" style={{ animationDelay: '0.3s' }}>
            <div className="flex items-center mb-6">
              <div className="bg-secondary/50 p-4 rounded-lg mr-4">
                <Camera className="w-6 h-6 text-primary" />
              </div>
              <h2 className="heading-md text-white">Våra fototjänster</h2>
            </div>
            
            <div className="space-y-6 text-white/80">
              <p>
                Vi erbjuder professionella fototjänster för olika behov, från produktfotografering till eventdokumentation.
                Våra fotografer har omfattande erfarenhet och använder avancerad utrustning för att leverera högkvalitativa bilder.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="glass p-6 rounded-lg hover:bg-white/5 transition-all">
                  <div className="flex items-center mb-3">
                    <Camera className="w-5 h-5 text-primary mr-2" />
                    <h3 className="text-lg font-medium text-white">Fototjänster</h3>
                  </div>
                  <p>
                    Professionell fotografering, antingen på plats eller i vår studio. 
                    Vi specialiserar oss på produktfotografering och eventdokumentation.
                  </p>
                </div>
                
                <div className="glass p-6 rounded-lg hover:bg-white/5 transition-all">
                  <div className="flex items-center mb-3">
                    <Image className="w-5 h-5 text-primary mr-2" />
                    <h3 className="text-lg font-medium text-white">Retuschering & Bildbehandling</h3>
                  </div>
                  <p>
                    Professionell retuschering, formatering och bildmontering.
                    Vi optimerar era bilder för olika användningsområden.
                  </p>
                </div>
                
                <div className="glass p-6 rounded-lg hover:bg-white/5 transition-all">
                  <div className="flex items-center mb-3">
                    <FileText className="w-5 h-5 text-primary mr-2" />
                    <h3 className="text-lg font-medium text-white">Manualer & Instruktioner</h3>
                  </div>
                  <p>
                    Vi skapar tydliga och användarvänliga manualer och instruktioner för produkter och system.
                  </p>
                </div>
                
                <div className="glass p-6 rounded-lg hover:bg-white/5 transition-all">
                  <div className="flex items-center mb-3">
                    <FileText className="w-5 h-5 text-primary mr-2" />
                    <h3 className="text-lg font-medium text-white">Projektplaner</h3>
                  </div>
                  <p>
                    Detaljerade projektplaner och dokumentation för olika typer av projekt.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mb-12 animate-slideUp opacity-0" style={{ animationDelay: '0.5s' }}>
            <h2 className="heading-md text-white mb-8 text-center">Fotogalleri</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Link to="/foto-dokumentation/produkt-event" className="glass p-8 rounded-xl hover:bg-white/5 transition-all group">
                <h3 className="text-xl font-medium mb-4 text-white group-hover:text-primary">Produkt & Event</h3>
                <p className="text-white/80 mb-6">
                  Vårt galleri med produktfotografier och eventdokumentation visar exempel på vår professionella fototjänst.
                </p>
                <div className="aspect-video bg-black/30 rounded-lg flex items-center justify-center">
                  <Camera className="w-12 h-12 text-primary/50" />
                </div>
              </Link>
              
              <Link to="/foto-dokumentation/natur" className="glass p-8 rounded-xl hover:bg-white/5 transition-all group">
                <h3 className="text-xl font-medium mb-4 text-white group-hover:text-primary">Natur</h3>
                <p className="text-white/80 mb-6">
                  Vårt naturgalleri visar en samling av högkvalitativa naturfotografier från olika miljöer.
                </p>
                <div className="aspect-video bg-black/30 rounded-lg flex items-center justify-center">
                  <Camera className="w-12 h-12 text-primary/50" />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PhotoDocumentation;
