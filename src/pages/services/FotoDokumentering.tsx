import React, { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Camera, ArrowLeft } from 'lucide-react';
import GallerySection from '@/components/GallerySection';
import { Link } from 'react-router-dom';

const FotoDokumentering = () => {
  const [galleryImages, setGalleryImages] = useState<string[]>([]);
  const [selectedGallery, setSelectedGallery] = useState<'Foto' | 'Dokumentering'>('Dokumentering');
  
  useEffect(() => {
    // Bilder för Dokumentering
    const dokumenteringImages = [
      "/bildspel_Foto_Dokumentering/Dokumentering/Schema_Pneumatik.jpg", 
      "/bildspel_Foto_Dokumentering/Dokumentering/Doc_Stadsyst.jpg",
      "/bildspel_Foto_Dokumentering/Dokumentering/PLC_schema Fläktsyst_REV9.jpg",
      "/bildspel_Foto_Dokumentering/Dokumentering/Schema_ManoverBox.jpg",
      "/bildspel_Foto_Dokumentering/Dokumentering/Doc_Flaaktsyst PLC logik.jpg",
      "/bildspel_Foto_Dokumentering/Dokumentering/Doc_Flaaktsyst Princip Ösikt.jpg",
      "/bildspel_Foto_Dokumentering/Dokumentering/Ritn_Planritning villa.jpg"
    ];

    // Bilder för Foto
    const fotoImages = [
      "/bildspel_Foto_Dokumentering/Foto/Event_RaceArena Åre 7.jpg",
      "/bildspel_Foto_Dokumentering/Foto/Event_RaceArena Åre 4.jpg",
      "/bildspel_Foto_Dokumentering/Foto/Event_RaceArena Åre 3.jpg",
      "/bildspel_Foto_Dokumentering/Foto/Prod_Studio-011.jpg",
      "/bildspel_Foto_Dokumentering/Foto/Prod_Studio-013.jpg",
      "/bildspel_Foto_Dokumentering/Foto/Prod_Studio-008.jpg"
    ];

    // Välj bilder baserat på valt galleri
    const images = selectedGallery === 'Dokumentering' ? dokumenteringImages : fotoImages;
    setGalleryImages(images);
  }, [selectedGallery]);

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
          
          {/* Välj galleri */}
          <div className="flex justify-center mb-4">
            <button 
              className={`px-4 py-2 mx-2 border rounded-lg shadow-sm ${selectedGallery === 'Dokumentering' ? 'bg-primary text-white border-primary' : 'bg-gray-800 text-gray-300 border-gray-700'} hover:bg-primary hover:text-white transition-colors opacity-80 hover:opacity-100`} 
              onClick={() => setSelectedGallery('Dokumentering')}
            >
              Dokumentering
            </button>
            <button 
              className={`px-4 py-2 mx-2 border rounded-lg shadow-sm ${selectedGallery === 'Foto' ? 'bg-primary text-white border-primary' : 'bg-gray-800 text-gray-300 border-gray-700'} hover:bg-primary hover:text-white transition-colors opacity-80 hover:opacity-100`} 
              onClick={() => setSelectedGallery('Foto')}
            >
              Foto
            </button>
          </div>
          
          {/* Bildgalleri */}
          {galleryImages.length > 0 && (
            <GallerySection 
              images={galleryImages} 
              title={selectedGallery} 
            />
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default FotoDokumentering; 