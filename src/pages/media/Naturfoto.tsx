import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Image } from 'lucide-react';
import { Link } from 'react-router-dom';
import ImageCarousel from '@/components/ImageCarousel';

const Naturfoto = () => {
  // Sample nature photography images
  const natureImages = [
    { 
      src: "/HEMSA DGD/Foto_Dokumentering/Djur_Natur/2022 Natur-5.jpg", 
      alt: "Blommor med vattendroppar" 
    },
    { 
      src: "/HEMSA DGD/Foto_Dokumentering/Djur_Natur/DjurNatur_003.jpg", 
      alt: "Djur och natur" 
    },
    { 
      src: "/HEMSA DGD/Foto_Dokumentering/Djur_Natur/DjurNatur_016.jpg", 
      alt: "Naturdetalj" 
    },
  ];

  // Additional gallery images
  const galleryImages = [
    ...natureImages,
    { 
      src: "/HEMSA DGD/Foto_Dokumentering/Djur_Natur/DjurNatur_006.jpeg", 
      alt: "Naturfotografi" 
    },
    { 
      src: "/HEMSA DGD/Foto_Dokumentering/Djur_Natur/DjurNatur_007.jpeg", 
      alt: "Naturfotografi" 
    },
    { 
      src: "/HEMSA DGD/Foto_Dokumentering/Djur_Natur/2022 Natur-5.jpg", 
      alt: "Naturfotografi" 
    },
    { 
      src: "/HEMSA DGD/Foto_Dokumentering/Djur_Natur/DjurNatur_024.jpg", 
      alt: "Naturfotografi" 
    },
    { 
      src: "/HEMSA DGD/Foto_Dokumentering/Djur_Natur/DjurNatur_003.jpg", 
      alt: "Naturfotografi" 
    },
    { 
      src: "/HEMSA DGD/Foto_Dokumentering/Djur_Natur/DjurNatur_004.jpg", 
      alt: "Naturfotografi" 
    },
  ];

  // Animation observer
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target.classList.contains('opacity-0')) {
            entry.target.classList.remove('opacity-0');
          }
        }
      });
    }, { threshold: 0.15 });

    const animateElements = document.querySelectorAll('.animate-slideUp, .animate-slideDown, .animate-fadeIn, .animate-slideRight');
    animateElements.forEach((el) => observer.observe(el));

    return () => {
      animateElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      
      {/* Page Header */}
      <div className="pt-32 pb-12 bg-gradient-to-b from-secondary/20 to-background">
        <div className="container mx-auto px-6">
          <div className="mb-4">
            <Link to="/media" className="text-primary hover:text-primary/80">&larr; Media</Link>
          </div>
          <h1 className="heading-lg mb-4 animate-slideDown opacity-0">Naturfotogalleri</h1>
          <p className="text-white/70 max-w-3xl animate-slideDown opacity-0" style={{ animationDelay: '0.2s' }}>
            Utforska vår samling av högkvalitativa naturfotografier
          </p>
        </div>
      </div>
      
      {/* Gallery Content */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="glass rounded-xl p-8 md:p-10 animate-slideUp opacity-0">
            
            {/* Image Carousel */}
            <div className="mb-10">
              <ImageCarousel 
                images={natureImages} 
                category="Naturfotografi" 
                showAllLink="/media/naturfoto/gallery" 
              />
            </div>
            
            <h3 className="heading-md mb-8 text-white flex items-center">
              <Image className="text-primary mr-3" size={24} />
              <span>Naturfotogalleri</span>
            </h3>
            
            <p className="text-white/80 mb-6">
              Vårt naturfotogalleri innehåller en samling av högkvalitativa naturfotografier tagna under olika 
              förhållanden och i varierande miljöer. Dessa bilder kan användas för en rad olika ändamål, 
              från dekorativa konstutskrifter till webbanvändning, marknadsföring eller inredningsdesign.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Thumbnail images */}
              {galleryImages.map((image, index) => (
                <div 
                  key={index} 
                  className="aspect-square rounded-lg overflow-hidden animate-slideUp opacity-0"
                  style={{ animationDelay: `${0.1 * index}s` }}
                >
                  <img 
                    src={image.src} 
                    alt={image.alt} 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
            
            <div className="mt-10 border-t border-white/10 pt-8 text-center">
              <p className="text-white/80 mb-6">
                Kontakta oss för mer information om våra naturfotografier och hur de kan användas i ditt projekt.
              </p>
              <Link 
                to="/kontakt" 
                className="inline-block py-3 px-8 bg-primary text-white rounded-md hover:bg-primary/80 transition-colors"
              >
                Kontakta oss
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Naturfoto;
