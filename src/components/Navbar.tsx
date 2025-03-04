
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDropdown = (dropdown: string) => {
    if (activeDropdown === dropdown) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(dropdown);
    }
  };

  const mainNavItems = [
    { title: 'Start', path: '/' },
    { 
      title: 'Design & Formgivning', 
      path: '/design-formgivning', 
      submenu: [
        { title: 'Konceptdesign', path: '/design-formgivning#konceptdesign' },
        { title: 'Produktdesign', path: '/design-formgivning#produktdesign' },
        { title: 'Grafisk design', path: '/design-formgivning#grafisk-design' },
        { title: 'Designverktyg', path: '/design-formgivning#designverktyg' },
      ] 
    },
    { 
      title: 'Tekniska Lösningar', 
      path: '/tekniska-losningar',
      submenu: [
        { title: 'CAD/CAM & Teknisk Visualisering', path: '/tekniska-losningar#cad-cam' },
        { title: 'Prototypframställning', path: '/tekniska-losningar#prototyp' },
        { title: 'Tillverkningsmetoder', path: '/tekniska-losningar#tillverkning' },
      ]
    },
    { 
      title: 'Media', 
      path: '/media',
      submenu: [
        { title: 'Produktfotografering', path: '/media#produktfoto' },
        { title: 'Eventdokumentation', path: '/media#event' },
        { title: 'Naturfotogalleri', path: '/media/naturfoto' },
      ] 
    },
    { title: 'Om Oss', path: '/om-oss' },
    { title: 'Kontakt', path: '/kontakt' },
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
          <Link to="/" className="text-2xl font-bold text-white animate-fadeIn">
            DG
            <span className="text-primary"> DEVELOPMENT</span>
          </Link>
        </div>
        
        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-6 items-center">
          {mainNavItems.map((item, index) => (
            <li key={index} className="relative group animate-slideDown" style={{ animationDelay: `${index * 0.1}s` }}>
              {item.submenu ? (
                <>
                  <button 
                    onClick={() => toggleDropdown(item.title)}
                    className="flex items-center text-white/80 hover:text-primary transition-colors duration-300 font-medium text-sm"
                  >
                    {item.title}
                    <ChevronDown className="ml-1 w-4 h-4" />
                  </button>
                  {activeDropdown === item.title && (
                    <div className="absolute top-full left-0 mt-2 w-64 bg-background/95 backdrop-blur-lg border border-white/10 rounded-lg shadow-lg z-20 py-2 animate-fadeIn">
                      {item.submenu.map((subItem, subIndex) => (
                        <Link 
                          key={subIndex}
                          to={subItem.path}
                          className="block px-4 py-2 text-white/80 hover:text-primary hover:bg-white/5 transition-colors"
                          onClick={() => setActiveDropdown(null)}
                        >
                          {subItem.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link 
                  to={item.path}
                  className="text-white/80 hover:text-primary transition-colors duration-300 font-medium text-sm"
                >
                  {item.title}
                </Link>
              )}
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
        <div className="fixed inset-0 bg-background pt-20 z-40 animate-fadeIn overflow-y-auto">
          <ul className="flex flex-col items-start space-y-4 p-8">
            {mainNavItems.map((item, index) => (
              <li key={index} className="animate-slideUp w-full" style={{ animationDelay: `${index * 0.1}s` }}>
                {item.submenu ? (
                  <div className="w-full">
                    <button 
                      onClick={() => toggleDropdown(item.title)}
                      className="flex items-center justify-between w-full text-white/80 hover:text-primary transition-colors duration-300 font-medium text-xl py-2"
                    >
                      {item.title}
                      <ChevronDown className={`ml-1 w-5 h-5 transition-transform ${activeDropdown === item.title ? 'transform rotate-180' : ''}`} />
                    </button>
                    
                    {activeDropdown === item.title && (
                      <div className="mt-2 ml-4 border-l border-white/10 pl-4 space-y-2">
                        {item.submenu.map((subItem, subIndex) => (
                          <Link 
                            key={subIndex}
                            to={subItem.path}
                            className="block py-2 text-white/70 hover:text-primary transition-colors text-lg"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {subItem.title}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link 
                    to={item.path}
                    className="text-white/80 hover:text-primary transition-colors duration-300 font-medium text-xl block py-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.title}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
