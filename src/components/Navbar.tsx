import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X, ChevronDown, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    // Förhindra scrollning när mobilmenyn är öppen
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const toggleDropdown = (dropdown: string) => {
    if (activeDropdown === dropdown) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(dropdown);
    }
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const mainNavItems = [
    { 
      title: 'Design & Formgivning', 
      path: '/design-formgivning', 
      submenu: [
        { title: 'Teknisk design', path: '/design-formgivning/teknisk-design' },
        { title: 'CAD & Visualisering', path: '/design-formgivning/cad-visualisering' },
        { title: 'Formgivning', path: '/design-formgivning/formgivning' },
        { title: 'Foto & Dokumentering', path: '/design-formgivning/foto-dokumentering' },
      ] 
    },
    { 
      title: 'Tekniska Lösningar', 
      path: '/tekniska-losningar',
      submenu: [
        { title: 'CAD/CAM & Teknisk Visualisering', path: '/tekniska-losningar/cad-cam' },
        { title: 'Prototypframställning', path: '/tekniska-losningar/prototyp' },
        { title: 'Tillverkningsmetoder', path: '/tekniska-losningar/tillverkning' },
      ]
    },
    { 
      title: 'Media', 
      path: '/media',
      submenu: [
        { title: 'Produktfotografering', path: '/media/produktfotografering' },
        { title: 'Eventdokumentation', path: '/media/eventdokumentation' },
        { title: 'Naturfotogalleri', path: '/media/naturfoto' },
      ] 
    },
    { title: 'Om Oss', path: '/om-oss' },
  ];

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
          <Link to="/" className="text-2xl font-bold text-white animate-fadeIn hover:scale-105 transition-transform duration-300">
            <img 
              src="/HEMSA DGD/LOGO/Logo Ej Text Opak/DGD 2310.png"
              alt="logotype"
              className="h-10 md:h-12 w-auto"
            />
          </Link>
        </div>
        
        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-6 items-center">
          {mainNavItems.map((item, index) => (
            <li key={index} className="relative group" style={{ 
              animation: 'slideDown 0.5s cubic-bezier(0.4, 0, 0.2, 1) forwards',
              animationDelay: `${index * 0.1}s`,
              opacity: 0
            }}>
              {item.submenu ? (
                <>
                  <Link 
                    to={item.path}
                    className="flex items-center text-white/80 hover:text-primary transition-all duration-300 font-medium text-sm group-hover:translate-x-1"
                  >
                    {item.title}
                    <ChevronDown className="ml-1 w-4 h-4 transition-transform duration-300 group-hover:rotate-180" />
                  </Link>
                  <div className="absolute top-full left-0 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top scale-95 group-hover:scale-100">
                    <div className="h-2"></div>
                    <div className="bg-background/95 backdrop-blur-lg border border-white/10 rounded-lg shadow-lg z-20 py-2">
                      {item.submenu.map((subItem, subIndex) => (
                        <Link 
                          key={subIndex}
                          to={subItem.path}
                          className="block px-4 py-2 text-white/80 hover:text-primary hover:bg-white/5 transition-all duration-300 hover:translate-x-2"
                        >
                          {subItem.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                </>
              ) : (
                <Link 
                  to={item.path}
                  className="text-white/80 hover:text-primary transition-all duration-300 font-medium text-sm hover:translate-x-1"
                >
                  {item.title}
                </Link>
              )}
            </li>
          ))}
          <li style={{ 
            animation: 'slideDown 0.5s cubic-bezier(0.4, 0, 0.2, 1) forwards',
            animationDelay: `${mainNavItems.length * 0.1}s`,
            opacity: 0
          }}>
            <Link to="/kontakt" className="inline-flex items-center glass hover:bg-white/10 text-white px-6 py-2 rounded-full transition-all duration-300 group">
              Kontakt
              <ChevronRight className="ml-1 group-hover:translate-x-1 transition-transform" size={16} />
            </Link>
          </li>
        </ul>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white transition-transform duration-300 hover:scale-110"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-background pt-20 z-40 animate-fadeIn overflow-y-auto">
          {/* Tydlig stängknapp i övre högra hörnet */}
          <button 
            className="absolute top-6 right-6 text-white p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300"
            onClick={closeMobileMenu}
            aria-label="Stäng meny"
          >
            <X size={24} />
          </button>
          
          <ul className="flex flex-col items-center space-y-6 p-8 w-full">
            {mainNavItems.map((item, index) => (
              <li key={index} style={{ 
                animation: 'slideUp 0.5s cubic-bezier(0.4, 0, 0.2, 1) forwards',
                animationDelay: `${index * 0.1}s`,
                opacity: 0
              }} className="w-full text-center">
                {item.submenu ? (
                  <div className="w-full">
                    <button 
                      className="flex items-center justify-center w-full text-white/80 hover:text-primary transition-colors duration-300 font-medium text-xl py-2"
                      onClick={() => toggleDropdown(item.title)}
                    >
                      <span className="mr-2">{item.title}</span>
                      <ChevronDown 
                        className={`w-5 h-5 transition-transform duration-300 ${activeDropdown === item.title ? 'rotate-180' : ''}`} 
                      />
                    </button>
                    
                    <div className={`mt-4 space-y-3 ${activeDropdown === item.title ? 'block' : 'hidden'}`}>
                      {item.submenu.map((subItem, subIndex) => (
                        <Link 
                          key={subIndex}
                          to={subItem.path}
                          className="block py-2 text-white/70 hover:text-primary transition-colors text-lg"
                          onClick={closeMobileMenu}
                        >
                          {subItem.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link 
                    to={item.path}
                    className="text-white/80 hover:text-primary transition-colors duration-300 font-medium text-xl block py-2"
                    onClick={closeMobileMenu}
                  >
                    {item.title}
                  </Link>
                )}
              </li>
            ))}
            <li style={{ 
              animation: 'slideUp 0.5s cubic-bezier(0.4, 0, 0.2, 1) forwards',
              animationDelay: `${mainNavItems.length * 0.1}s`,
              opacity: 0
            }} className="w-full flex justify-center">
              <Link 
                to="/kontakt"
                onClick={closeMobileMenu}
                className="inline-flex items-center justify-center glass hover:bg-white/10 text-white px-8 py-3 rounded-full transition-all duration-300 group"
              >
                Kontakt
                <ChevronRight className="ml-1 group-hover:translate-x-1 transition-transform" size={16} />
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
