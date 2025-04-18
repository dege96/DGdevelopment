import React, { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Printer, ArrowLeft } from 'lucide-react';
import GallerySection from '@/components/GallerySection';
import { Link } from 'react-router-dom';

const Prototyper = () => {
  const [galleryImages, setGalleryImages] = useState<string[]>([]);
  
  useEffect(() => {
    // Samla alla bilder från bildspel Prototyper_Specialtillv-mappen
    const images = [
      "/bildspel_Prototyper_Specialtillv/Prod_Custom Cap.png",
      "/bildspel_Prototyper_Specialtillv/Prod_FineConcrete tray.png",
      "/bildspel_Prototyper_Specialtillv/Prod_Nike MICAx4.png",
      "/bildspel_Prototyper_Specialtillv/Prod_Trapp platsbyggd-3.jpg",
      "/bildspel_Prototyper_Specialtillv/Snickeri_BarHurts.jpg",
      "/bildspel_Prototyper_Specialtillv/Prod_Nike cold metal copper.png",
      "/bildspel_Prototyper_Specialtillv/Snickeri_Utekok.jpg",
      "/bildspel_Prototyper_Specialtillv/Prod_Trapp platsbyggd-2.jpg",
      "/bildspel_Prototyper_Specialtillv/Prod_Trapp platsbyggd-1.jpg",
      "/bildspel_Prototyper_Specialtillv/Prod_VacLyft Custom.jpg",
      "/bildspel_Prototyper_Specialtillv/Snickeri_Attefall.jpg",
      "/bildspel_Prototyper_Specialtillv/Prod_Gimbal2.jpg",
      "/bildspel_Prototyper_Specialtillv/Prod_VacStyrning Custom 2.jpg",
      "/bildspel_Prototyper_Specialtillv/Snickeri_Frigga.jpg"
    ];
    
    setGalleryImages(images);
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
              title="Prototyper & Specialtillverkning" 
            />
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Prototyper; 