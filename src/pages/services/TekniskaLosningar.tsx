import React, { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Cpu, ArrowLeft } from 'lucide-react';
import GallerySection from '@/components/GallerySection';
import { Link } from 'react-router-dom';

const TekniskaLosningar = () => {
  const [galleryImages, setGalleryImages] = useState<string[]>([]);
  
  useEffect(() => {
    // Samla alla bilder från bildspel Tekniska Lösningar-mappen
    const images = [
      "/bildspel_Tekniska_Losningar/Prod_VacLyft_Custom.png",
      "/bildspel_Tekniska_Losningar/PNEU_VacBox Dubbel_Ejekt.png",
      "/bildspel_Tekniska_Losningar/VACLYFT.png",
      "/bildspel_Tekniska_Losningar/Prod_Robot EOA tool_CAD.jpg",
      "/bildspel_Tekniska_Losningar/Prod_VacLyft n UI.jpeg",
      "/bildspel_Tekniska_Losningar/Prod_TrummaBig-002.jpg",
      "/bildspel_Tekniska_Losningar/Prod_Opto Controller.jpg",
      "/bildspel_Tekniska_Losningar/Prod_LEDwall3 expl.jpeg",
      "/bildspel_Tekniska_Losningar/Prod_VacLyft Ctrl.jpg",
      "/bildspel_Tekniska_Losningar/Prod_LEDwall1 front.PNG",
      "/bildspel_Tekniska_Losningar/Prod_LEDwall2 back.PNG",
      "/bildspel_Tekniska_Losningar/Prod_Robot EOA tool_foto.jpeg",
      "/bildspel_Tekniska_Losningar/Prod_TrummaBig-003.jpg",
      "/bildspel_Tekniska_Losningar/Prod_TrummaBig-001.jpg",
      "/bildspel_Tekniska_Losningar/Prod_TrummaBig-007.jpg"
    ];
    
    // Filtrera bort videofiler
    const filteredImages = images.filter(img => !img.endsWith('.mp4'));
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
              title="Tekniska Lösningar" 
            />
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default TekniskaLosningar;
