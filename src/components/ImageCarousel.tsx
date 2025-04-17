import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ImageCarouselProps {
  images: {
    src: string;
    alt: string;
  }[];
  category: string;
  description?: string;
  showAllLink?: string;
  className?: string;
  aspectRatio?: "video" | "square" | "auto";
  height?: string;
  showAsImageCard?: boolean;
  actionText?: string;
  style?: React.CSSProperties;
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ 
  images, 
  category, 
  description,
  showAllLink,
  className = "",
  aspectRatio = "video",
  height,
  showAsImageCard = false,
  actionText = "Se bilder",
  style
}) => {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const getAspectRatioClass = () => {
    switch (aspectRatio) {
      case "square": return "aspect-square";
      case "video": return "aspect-[16/9]";
      case "auto": return "";
      default: return "aspect-[16/9]";
    }
  };

  // Render as a single image card with text overlay
  if (showAsImageCard && images.length > 0) {
    return (
      <Link 
        to={showAllLink || '#'} 
        className={`relative rounded-lg overflow-hidden group block ${className}`} 
        style={{ ...style, backgroundColor: '#020202' }}
      >
        <div 
          className="w-full h-full"
          style={height ? { height } : {}}
        >
          <img
            src={images[0].src}
            alt={images[0].alt}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            style={{ minHeight: '100%' }}
          />
          <div 
            className="absolute inset-0" 
            style={{ 
              backgroundImage: 'linear-gradient(to top, rgb(2 2 2), rgb(2 2 2 / 20%) 50%, transparent)',
            }} 
          />
          
          <div className="absolute bottom-6 left-0 w-full px-6">
            <div className="backdrop-blur-[8px] bg-white/[0.04] rounded-xl p-4 text-center">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-1">{category}</h3>
              {description && (
                <p className="text-white/90 text-sm md:text-base max-w-prose mx-auto">{description}</p>
              )}
            </div>
          </div>
        </div>
      </Link>
    );
  }

  // Original carousel implementation
  return (
    <div className={`w-full relative ${className}`}>
      <div 
        className={`${getAspectRatioClass()} relative overflow-hidden rounded-lg mb-4 ${height ? '' : ''}`}
        style={height ? { height } : {}}
      >
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
