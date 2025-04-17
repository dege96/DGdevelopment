import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

type GalleryItem = {
  image: string;
  title?: string;
  description?: string;
};

interface GallerySectionProps {
  images: string[];
  title?: string;
}

const GallerySection: React.FC<GallerySectionProps> = ({ images, title = "Bildgalleri" }) => {
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  
  // Konvertera bild-array till GalleryItem-objekt
  const gallery: GalleryItem[] = images.map(image => ({
    image,
    title: image.split('/').pop()?.replace(/\.[^/.]+$/, "").replace(/_/g, " ") || "",
  }));
  
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
  
  if (gallery.length === 0) {
    return (
      <section>
        <div className="container mx-auto text-center text-white/70">
          <p>Inga bilder att visa.</p>
        </div>
      </section>
    );
  }
  
  return (
    <section>
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="heading-lg mb-6">{title}</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {gallery.map((item, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-xl cursor-pointer hover:shadow-lg transition-shadow duration-300" 
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
                {item.title && <h3 className="text-white text-lg font-medium">{item.title}</h3>}
              </div>
            </div>
          ))}
        </div>
      </div>
      
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
            {selectedImage.title && (
              <div className="absolute bottom-0 left-0 right-0 bg-black/70 backdrop-blur-sm p-4">
                <h3 className="text-white text-lg font-medium">{selectedImage.title}</h3>
                {selectedImage.description && (
                  <p className="text-white/70 text-sm">{selectedImage.description}</p>
                )}
              </div>
            )}
          </div>
          
          <button 
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white/70 hover:text-white z-10"
            onClick={nextImage}
          >
            <ChevronRight size={40} />
          </button>
        </div>
      )}
    </section>
  );
};

export default GallerySection;
