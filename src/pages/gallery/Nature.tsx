
import React, { useState } from 'react';
import Layout from '@/components/Layout';
import { ArrowLeft, ChevronLeft, ChevronRight, X } from 'lucide-react';
import { Link } from 'react-router-dom';

// For placeholder images - replace with actual images later
const placeholderUrls = [
  'https://images.unsplash.com/photo-1501612780327-45045538702b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1611329532992-0b7ba27d85fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1500534623283-312aebe2edc9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1506259091721-347e791bab0f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
];

type GalleryItem = {
  image: string;
  title: string;
  description: string;
};

const Nature = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  
  const gallery: GalleryItem[] = [
    { 
      image: placeholderUrls[0], 
      title: "Naturlandskap", 
      description: "Storslagen landskapsfotografering med fokus på naturens former och färger." 
    },
    { 
      image: placeholderUrls[1], 
      title: "Detaljstudie", 
      description: "Närbild på naturens detaljer som visar texturer och mönster." 
    },
    { 
      image: placeholderUrls[2], 
      title: "Skogsmiljö", 
      description: "Atmosfärisk fotografering av skogsmiljöer med fokus på ljus och skugga." 
    },
    { 
      image: placeholderUrls[3], 
      title: "Vattenmiljö", 
      description: "Tekniskt utmanande fotografering av vattenreflektioner och flöden." 
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
    <Layout>
      <section className="section-padding bg-secondary/10">
        <div className="container mx-auto">
          <Link to="/foto-dokumentation" className="inline-flex items-center text-primary hover:text-white transition-colors mb-8">
            <ArrowLeft className="mr-2 w-4 h-4" /> Tillbaka till Foto & Dokumentation
          </Link>
          
          <div className="text-center mb-12">
            <h1 className="heading-lg mb-6 animate-slideDown opacity-0" style={{ animationDelay: '0.2s' }}>Naturfotografi</h1>
            <p className="max-w-3xl mx-auto text-white/70 mb-8 animate-slideDown opacity-0" style={{ animationDelay: '0.4s' }}>
              Exempel på våra naturfotografier
            </p>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full animate-slideDown opacity-0" style={{ animationDelay: '0.6s' }}></div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8">
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
                  <p className="text-white/70 text-sm">{item.description}</p>
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
              <p className="text-white/70 text-sm">{selectedImage.description}</p>
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
    </Layout>
  );
};

export default Nature;
