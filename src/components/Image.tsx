import { useState, useEffect } from 'react';

interface ImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  loading?: 'lazy' | 'eager';
  placeholder?: string;
  style?: React.CSSProperties;
  onLoad?: () => void;
  onError?: () => void;
}

export const Image = ({
  src,
  alt,
  className = '',
  width,
  height,
  loading = 'lazy',
  placeholder = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMmEyYTJhIiAvPjwvc3ZnPg==',
  style,
  onLoad,
  onError,
}: ImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [imgSrc, setImgSrc] = useState(placeholder);
  
  useEffect(() => {
    // Create a new image to preload
    const img = new window.Image();
    img.src = src;
    
    img.onload = () => {
      setImgSrc(src);
      setIsLoaded(true);
      onLoad?.();
    };
    
    img.onerror = () => {
      console.error(`Failed to load image: ${src}`);
      onError?.();
    };
  }, [src, onLoad, onError]);

  // Check if WebP is supported
  const supportsWebP = () => {
    const elem = document.createElement('canvas');
    if (elem.getContext && elem.getContext('2d')) {
      return elem.toDataURL('image/webp').indexOf('data:image/webp') === 0;
    }
    return false;
  };

  // Get WebP version of image if supported and exists
  const getOptimizedSrc = (originalSrc: string) => {
    if (supportsWebP() && !originalSrc.endsWith('.svg')) {
      // If the image already ends with .webp, use it as is
      if (originalSrc.endsWith('.webp')) {
        return originalSrc;
      }
      
      // Otherwise check if a webp version exists
      const webpSrc = originalSrc.replace(/\.(jpe?g|png|gif)$/i, '.webp');
      return webpSrc;
    }
    return originalSrc;
  };

  return (
    <img
      src={isLoaded ? getOptimizedSrc(imgSrc) : placeholder}
      alt={alt}
      className={`transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'} ${className}`}
      width={width}
      height={height}
      loading={loading}
      style={{
        ...style,
        background: !isLoaded ? '#2a2a2a' : 'transparent',
      }}
      onLoad={() => setIsLoaded(true)}
      onError={() => {
        console.error(`Error loading image: ${src}`);
        setImgSrc(src); // Fallback to original source on error
        onError?.();
      }}
    />
  );
}; 