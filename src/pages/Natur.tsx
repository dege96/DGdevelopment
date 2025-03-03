
import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

// Placeholder for gallery images
const placeholderUrls = [
  'https://images.unsplash.com/photo-1501612780327-45045538702b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1500534623283-312aebe2edc9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1611329532992-0b7ba27d85fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
];

type GalleryItem = {
  image: string;
  title: string;
  description: string;
};

const Natur = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

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

  const gallery: GalleryItem[] = [
    { 
      image: placeholderUrls[0], 
      title: "Naturlandskap", 
      description: "Naturfotografi med fokus på storslagna landskap och scenerier."
    },
    { 
      image: placeholderUrls[1], 
      title: "Närbild på naturdetaljer", 
      description: "Makrofotografi som fångar de minsta detaljerna i naturen."
    },
    { 
      image: placeholderUrls[2], 
      title: "Vintersceneri", 
      description: "Fotografering av naturliga vintermiljöer och isformationer."
    },
  ];

  const openLightbox = (index: number) => {
    setSelectedImage(gallery[index]);
    setSelectedIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const newIndex = (selectedIndex + 1) % gallery.length;
    setSelectedImage(gallery[newIndex]);
    setSelectedIndex(newIndex);
  };

  const prevImage = () => {
    const newIndex = selectedIndex === 0 ? gallery.length - 1 : selectedIndex - 1;
    setSelectedImage(gallery[newIndex]);
    setSelectedIndex(newIndex);
  };

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      
      {/* Page Header */}
      <div className="pt-32 pb-12 bg-gradient-to-b from-secondary/20 to-background">
        <div className="container mx-auto px-6">
          <h1 className="heading-lg mb-4 animate-slideDown opacity-0">Naturfotografi</h1>
          <p className="text-white/70 max-w-3xl animate-slideDown opacity-0" style={{ animationDelay: '0.2s' }}>
            Galleri med naturbilder från vår fotografiska portfölj
          </p>
        </div>
      </div>
      
      {/* Gallery */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {gallery.map((item, index) => (
              <div 
                key={index}
                className="group relative overflow-hidden rounded-xl animate-slideUp opacity-0 cursor-pointer" 
                style={{ animationDelay: `${0.2 + index * 0.1}s` }}
                onClick={() => openLightbox(index)}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <h3 className="text-white text-lg font-medium">{item.title}</h3>
                  <p className="text-white/70 text-sm mt-2">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Lightbox */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 animate-fadeIn">
          <button 
            className="absolute top-4 right-4 text-white/70 hover:text-white"
            onClick={closeLightbox}
          >
            <X size={32} />
          </button>
          
          <button 
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/70 hover:text-white z-10"
            onClick={prevImage}
          >
            <ChevronLeft size={40} />
          </button>
          
          <div className="max-w-4xl max-h-[80vh] relative">
            <img 
              src={selectedImage.image} 
              alt={selectedImage.title}
              className="max-w-full max-h-[80vh] object-contain"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black/70 backdrop-blur-sm p-4">
              <h3 className="text-white text-lg font-medium">{selectedImage.title}</h3>
              <p className="text-white/70 text-sm mt-2">
                {selectedImage.description}
              </p>
            </div>
          </div>
          
          <button 
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white/70 hover:text-white z-10"
            onClick={nextImage}
          >
            <ChevronRight size={40} />
          </button>
        </div>
      )}
      
      <Footer />
    </div>
  );
};

export default Natur;
