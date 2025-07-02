import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

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
  actionText = "Lär dig mer",
  style
}) => {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  // Funktion för att scrolla till toppen vid navigation
  const handleLinkClick = () => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

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

  // Rendera som en bildkort med rektangel bakom texten, hela bilden klickbar och länk till toppen
  if (showAsImageCard && images.length > 0) {
    // Om showAllLink finns, gör hela bilden klickbar och länka till toppen
    const Wrapper = showAllLink ? Link : React.Fragment;
    const wrapperProps = showAllLink
      ? { to: showAllLink + '#top', className: "block h-full w-full group cursor-pointer", onClick: handleLinkClick }
      : {};

    return (
      <div className={`relative rounded-lg overflow-hidden group ${className}`} style={style}>
        <Wrapper {...wrapperProps}>
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
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
            
            {/* Rektangel bakom texten */}
            <div className="absolute bottom-0 left-0 w-full flex justify-center pb-4 px-2">
              <div className="glass rounded-xl p-8 md:p-10 w-full md:w-auto text-left md:text-center animate-slideUp opacity-0" style={{ animationDelay: '0.1s' }}>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-1">{category}</h3>
                {description && (
                  <p className="text-white/80 text-sm md:text-base mb-0 max-w-md">{description}</p>
                )}
                {/* Ingen "Lär dig mer"-knapp här */}
              </div>
            </div>
          </div>
        </Wrapper>
      </div>
    );
  }

  // Original carousel implementation
  // Gör även här bilden klickbar om showAllLink finns och länka till toppen
  const CarouselImageWrapper = showAllLink ? Link : React.Fragment;
  const carouselWrapperProps = showAllLink
    ? { to: showAllLink + '#top', className: "block h-full w-full group cursor-pointer", onClick: handleLinkClick }
    : {};

  return (
    <div className={`w-full relative ${className}`}>
      <div 
        className={`${getAspectRatioClass()} relative overflow-hidden rounded-lg mb-4 ${height ? '' : ''}`}
        style={height ? { height } : {}}
      >
        {images.map((image, index) => (
          <CarouselImageWrapper key={index} {...carouselWrapperProps}>
            <div
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
          </CarouselImageWrapper>
        ))}
        
        <button 
          onClick={prevSlide}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white rounded-full p-2 z-10 transition-colors"
          aria-label="Föregående bild"
        >
          <ChevronLeft size={24} />
        </button>
        
        <button 
          onClick={nextSlide}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white rounded-full p-2 z-10 transition-colors"
          aria-label="Nästa bild"
        >
          <ChevronRight size={24} />
        </button>

        {/* Rektangel bakom texten i karusellen */}
        <div className="absolute bottom-0 left-0 w-full flex justify-center pb-4 px-2 pointer-events-none">
          <div className="glass rounded-xl p-8 md:p-10 w-full md:w-auto text-left md:text-center animate-slideUp opacity-0 pointer-events-auto" style={{ animationDelay: '0.1s' }}>
            <h3 className="text-xl md:text-2xl font-bold text-white mb-1">{category}</h3>
            {description && (
              <p className="text-white/80 text-sm md:text-base mb-0 max-w-md">{description}</p>
            )}
            {/* Ingen "Lär dig mer"-knapp här */}
          </div>
        </div>
      </div>
      
      <div className="flex justify-between items-center">
        <p className="text-white/70 text-sm">
          {currentIndex + 1} / {images.length} · {category}
        </p>
        {showAllLink && (
          <Link to={showAllLink + '#top'} className="text-primary hover:text-primary/80 text-sm flex items-center" onClick={handleLinkClick}>
            Visa alla
          </Link>
        )}
      </div>
    </div>
  );
};

export default ImageCarousel;
