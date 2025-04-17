import React, { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Camera, ArrowLeft } from 'lucide-react';
import GallerySection from '@/components/GallerySection';
import { Link } from 'react-router-dom';

const FotoDokumentering = () => {
  const [galleryImages, setGalleryImages] = useState<string[]>([]);
  
  useEffect(() => {
    // Samla alla bilder från bildspel Foto_Dokumentering-mappen
    const images = [
      "/bildspel Foto_Dokumentering/Schema_Motorstyrn _500W.jpg",
      "/bildspel Foto_Dokumentering/PLC_schema Fläktsyst_REV9.jpg",
      "/bildspel Foto_Dokumentering/Schema_Pneumatik.jpg",
      "/bildspel Foto_Dokumentering/Prod_Studio-008.jpg",
      "/bildspel Foto_Dokumentering/Prod_Studio-013.jpg",
      "/bildspel Foto_Dokumentering/Schema_ManöverBox.jpg",
      "/bildspel Foto_Dokumentering/Event_RaceArena Åre 4.jpg",
      "/bildspel Foto_Dokumentering/Prod_Studio-011.jpg",
      "/bildspel Foto_Dokumentering/Doc_Fläktsyst Princip Ösikt.jpg",
      "/bildspel Foto_Dokumentering/Ritn_Planritning villa.jpg",
      "/bildspel Foto_Dokumentering/Ritn_Planlösning fabrik.png",
      "/bildspel Foto_Dokumentering/Event_RaceArena Åre 3.jpg",
      "/bildspel Foto_Dokumentering/Doc_Fläktsyst PLC logik.jpg",
      "/bildspel Foto_Dokumentering/Doc_Städsyst.jpg",
      "/bildspel Foto_Dokumentering/Event_RaceArena Åre 7.jpg",
      "/bildspel Foto_Dokumentering/Ritn_Utbyggn01.jpg"
    ];
    
    // Filtrera bort PDF-filer
    const filteredImages = images.filter(img => !img.endsWith('.pdf'));
    setGalleryImages(filteredImages);
  }, []);

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
              title="Foto & Dokumentering" 
            />
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default FotoDokumentering; 