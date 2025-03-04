
import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ImageCarouselProps {
  images: {
    src: string;
    alt: string;
  }[];
  category: string;
  showAllLink?: string;
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ images, category, showAllLink }) => {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  return (
    <div className="w-full relative">
      <div className="aspect-[16/9] relative overflow-hidden rounded-lg mb-4">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
        
        <button 
          onClick={prevSlide}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white rounded-full p-2 z-10 transition-colors"
          aria-label="Previous slide"
        >
          <ChevronLeft size={24} />
        </button>
        
        <button 
          onClick={nextSlide}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white rounded-full p-2 z-10 transition-colors"
          aria-label="Next slide"
        >
          <ChevronRight size={24} />
        </button>
      </div>
      
      <div className="flex justify-between items-center">
        <p className="text-white/70 text-sm">
          {currentIndex + 1} / {images.length} · {category}
        </p>
        {showAllLink && (
          <Link to={showAllLink} className="text-primary hover:text-primary/80 text-sm flex items-center">
            Visa alla
          </Link>
        )}
      </div>
    </div>
  );
};

export default ImageCarousel;
