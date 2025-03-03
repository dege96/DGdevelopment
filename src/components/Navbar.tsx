
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out px-6 md:px-12',
        isScrolled
          ? 'py-4 backdrop-blur-xl bg-background/80 border-b border-white/10 shadow-md'
          : 'py-6 bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <a href="#" className="text-2xl font-bold text-white animate-fadeIn">
            DG
            <span className="text-primary"> DEVELOPMENT</span>
          </a>
        </div>
        
        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-8 items-center">
          {['Start', 'Process', 'Design', 'Tjänster', 'Kontakt'].map((item, index) => (
            <li key={index} className="animate-slideDown" style={{ animationDelay: `${index * 0.1}s` }}>
              <a 
                href={`#${item.toLowerCase()}`}
                className="text-white/80 hover:text-primary transition-colors duration-300 font-medium text-sm"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-background pt-20 z-40 animate-fadeIn">
          <ul className="flex flex-col items-center space-y-6 p-8">
            {['Start', 'Process', 'Design', 'Tjänster', 'Kontakt'].map((item, index) => (
              <li key={index} className="animate-slideUp w-full" style={{ animationDelay: `${index * 0.1}s` }}>
                <a 
                  href={`#${item.toLowerCase()}`}
                  className="text-white/80 hover:text-primary transition-colors duration-300 font-medium text-xl block text-center py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
