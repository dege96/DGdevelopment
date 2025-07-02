
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

// For placeholder images - replace with actual images later
const placeholderUrls = [
  'https://images.unsplash.com/photo-1581094794329-c8112a89f0a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1574680096145-d05b474e2155?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1501612780327-45045538702b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1516937941344-00b4e0337589?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1611329532992-0b7ba27d85fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1500534623283-312aebe2edc9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
];

type GalleryItem = {
  image: string;
  title: string;
  category: 'product' | 'nature';
};

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [activeCategory, setActiveCategory] = useState<'all' | 'product' | 'nature'>('all');
  
  const gallery: GalleryItem[] = [
    { image: placeholderUrls[0], title: "Produktfotografering", category: 'product' },
    { image: placeholderUrls[1], title: "Eventfotografering", category: 'product' },
    { image: placeholderUrls[2], title: "Naturlandskap", category: 'nature' },
    { image: placeholderUrls[3], title: "Produktprototyp", category: 'product' },
    { image: placeholderUrls[4], title: "Teknisk detalj", category: 'product' },
    { image: placeholderUrls[5], title: "Naturdetalj", category: 'nature' },
  ];
  
  const filteredGallery = activeCategory === 'all' 
    ? gallery 
    : gallery.filter(item => item.category === activeCategory);
  
  const openLightbox = (index: number) => {
    setSelectedImage(filteredGallery[index]);
    setSelectedIndex(index);
  };
  
  const closeLightbox = () => {
    setSelectedImage(null);
  };
  
  const nextImage = () => {
    const newIndex = (selectedIndex + 1) % filteredGallery.length;
    setSelectedImage(filteredGallery[newIndex]);
    setSelectedIndex(newIndex);
  };
  
  const prevImage = () => {
    const newIndex = selectedIndex === 0 ? filteredGallery.length - 1 : selectedIndex - 1;
    setSelectedImage(filteredGallery[newIndex]);
    setSelectedIndex(newIndex);
  };
  
  return (
    <section className="section-padding" id="galleri">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="heading-lg mb-6 animate-slideDown opacity-0" style={{ animationDelay: '0.2s' }}>Arbeten</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full animate-slideDown opacity-0" style={{ animationDelay: '0.4s' }}></div>
        </div>
        
        <div className="flex justify-center mb-12 animate-slideDown opacity-0" style={{ animationDelay: '0.6s' }}>
          <div className="flex space-x-4 glass rounded-full p-1">
            {['all', 'product', 'nature'].map((category) => (
              <button
                key={category}
                className={`px-6 py-2 rounded-full transition-colors ${activeCategory === category ? 'bg-primary text-white' : 'text-white/70 hover:text-white'}`}
                onClick={() => setActiveCategory(category as 'all' | 'product' | 'nature')}
              >
                {category === 'all' ? 'Alla' : category === 'product' ? 'PRODUKT & EVENT' : 'NATUR'}
              </button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredGallery.map((item, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-xl animate-slideUp opacity-0" 
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
                <p className="text-white/70 text-sm">
                  {item.category === 'product' ? 'PRODUKT & EVENT' : 'NATUR'}
                </p>
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
            <div className="absolute bottom-0 left-0 right-0 bg-black/70 backdrop-blur-sm p-4">
              <h3 className="text-white text-lg font-medium">{selectedImage.title}</h3>
              <p className="text-white/70 text-sm">
                {selectedImage.category === 'product' ? 'PRODUKT & EVENT' : 'NATUR'}
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
    </section>
  );
};

export default GallerySection;
