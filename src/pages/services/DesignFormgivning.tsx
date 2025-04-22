import React, { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Palette, ArrowLeft } from 'lucide-react';
import GallerySection from '@/components/GallerySection';
import { Link } from 'react-router-dom';

const DesignFormgivning = () => {
  const [galleryImages, setGalleryImages] = useState<string[]>([]);
  
  useEffect(() => {
    // Samla alla bilder från bildspel Design Formgivning-mappen
    const images = [
      "/bildspel_Design_Formgivning/Form_ChessHorse.png",
      "/bildspel_Design_Formgivning/Form_Spel Chess.jpg",
      "/bildspel_Design_Formgivning/Form_Betong_Gjutning.jpg",
      "/bildspel_Design_Formgivning/Scenografi_Logo UV paint REAL2.jpeg",
      "/bildspel_Design_Formgivning/Scenografi_Logo UV_paint _RENDER.jpg",
      "/bildspel_Design_Formgivning/Form_Vac_Laminering2.jpg",
      "/bildspel_Design_Formgivning/Form_Vac_Laminering1.jpg",
      "/bildspel_Design_Formgivning/Scenografi_Coasters UV paint.jpg",
      "/bildspel_Design_Formgivning/Hantv_Traform TVstativ.png",
      "/bildspel_Design_Formgivning/Scenografi_Figures UV paint.jpg",
      "/bildspel_Design_Formgivning/Scenografi_Logo UV paint REAL.jpeg"
    ];
    
    setGalleryImages(images);
  }, []);

  const services = [
    "Teknisk design, Konstruktionsunderlag",
    "CAD & Visualisering",
    "Dekormålning (Digitaltryck eller handmålning)",
    "Scenografi (Profilsystem och/eller unika artistiska objekt)",
    "LED ljussättning (Statisk eller animerad)",
    "Formgivning",
    "Formtillverkning",
    "Foto & Dokumentering"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto px-6 pt-32 pb-16">
        <div className="max-w-4xl mx-auto">
          {/* Tillbakaknapp */}
          <Link 
            to="/tjanster" 
            className="inline-flex items-center text-primary hover:text-white transition-colors mb-8 group"
          >
            <ArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform" size={20} />
            Våra Tjänster
          </Link>
          
          {/* Bildgalleri */}
          {galleryImages.length > 0 && (
            <GallerySection 
              images={galleryImages} 
              title="Design & Formgivning" 
            />
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default DesignFormgivning;
