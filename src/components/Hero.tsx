
import React, { useEffect, useRef } from 'react';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      
      const { clientX, clientY } = e;
      const { width, height, left, top } = containerRef.current.getBoundingClientRect();
      
      const x = (clientX - left) / width - 0.5;
      const y = (clientY - top) / height - 0.5;
      
      containerRef.current.style.setProperty('--mouse-x', `${x * 20}px`);
      containerRef.current.style.setProperty('--mouse-y', `${y * 20}px`);
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
  
  return (
    <div 
      ref={containerRef}
      className="min-h-screen relative flex flex-col items-center justify-center overflow-hidden"
      style={{
        backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(30, 41, 59, 0.7) 0%, rgba(15, 23, 42, 0.95) 80%)',
      }}
      id="start"
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(40deg,transparent_70%,rgba(67,100,247,0.2))]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(140deg,transparent_70%,rgba(67,100,247,0.1))]"></div>
        <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_50%_70%,rgba(67,100,247,0.15),transparent_35%)]"></div>
      </div>
      
      <div 
        className="absolute w-80 h-80 bg-primary/10 rounded-full filter blur-[80px] z-0 animate-float"
        style={{
          transform: 'translate(var(--mouse-x, 0), var(--mouse-y, 0))',
          top: '30%',
          left: '60%',
        }}
      ></div>
      
      <div className="container mx-auto px-6 md:px-12 z-10 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="inline-block mb-6">
            <div className="relative">
              <div className="animate-slideDown opacity-0" style={{ animationDelay: '0.3s' }}>
                <div className="text-6xl md:text-8xl font-bold tracking-tighter">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80">DG</span>
                </div>
              </div>
              <div className="text-xs md:text-sm uppercase tracking-widest text-primary animate-slideDown opacity-0" style={{ animationDelay: '0.6s' }}>
                <span className="glass px-4 py-1 rounded-full border border-primary/30">DG DEVELOPMENT</span>
              </div>
            </div>
          </div>
          
          <h1 className="text-white text-xl md:text-3xl mb-6 font-light leading-relaxed animate-slideUp opacity-0" style={{ animationDelay: '0.9s' }}>
            Konsultation inom
            <span className="block font-medium my-2">teknisk projektledning, design och tillverkning.</span>
          </h1>
          
          <p className="text-white/70 mb-10 max-w-2xl mx-auto animate-slideUp opacity-0" style={{ animationDelay: '1.2s' }}>
            Från mindre uppdrag till omfattande system/projekt med fullt turn-key ansvar
          </p>
          
          <div className="animate-slideUp opacity-0" style={{ animationDelay: '1.5s' }}>
            <a 
              href="#process" 
              className="inline-flex items-center glass hover:bg-white/10 text-white px-8 py-3 rounded-full transition-all duration-300 group"
            >
              Utforska
              <ArrowDown className="ml-2 group-hover:translate-y-1 transition-transform" size={18} />
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 w-full flex justify-center animate-pulse">
        <ArrowDown className="text-white/50" size={24} />
      </div>
    </div>
  );
};

export default Hero;
