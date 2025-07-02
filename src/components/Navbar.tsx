import React, { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import { 
  Menu, 
  X, 
  ChevronDown, 
  ChevronRight, 
  Palette, 
  Cpu, 
  Printer, 
  Wrench, 
  PenTool, 
  Camera, 
  Layers, 
  Zap, 
  Settings
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [showTjansterMenu, setShowTjansterMenu] = useState(false);
  const menuTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLElement>(null);

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
      if (menuTimeoutRef.current) {
        clearTimeout(menuTimeoutRef.current);
      }
    };
  }, [mobileMenuOpen]);

  const handleMenuEnter = () => {
    if (menuTimeoutRef.current) {
      clearTimeout(menuTimeoutRef.current);
      menuTimeoutRef.current = null;
    }
    setShowTjansterMenu(true);
    
    // Ändra bakgrundsfärgen på navigationsmenyn
    if (navRef.current) {
      navRef.current.style.backgroundColor = '#101319';
    }
  };

  const handleMenuLeave = () => {
    menuTimeoutRef.current = setTimeout(() => {
      setShowTjansterMenu(false);
      
      // Återställ bakgrundsfärgen på navigationsmenyn
      if (navRef.current) {
        navRef.current.style.backgroundColor = '';
      }
    }, 300); // Fördröjning innan menyn stängs
  };

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

  // Kreativa tjänster
  const kreativaTjanster = [
    {
      title: "Design & Formgivning",
      path: "/tjanster/design-formgivning",
      icon: <PenTool className="w-5 h-5 text-primary" />,
      items: [
        { title: 'Teknisk design', path: '/tjanster/design-formgivning/teknisk-design' },
        { title: 'CAD & Visualisering', path: '/tjanster/design-formgivning/cad-visualisering' },
        { title: 'Formgivning', path: '/tjanster/design-formgivning/formgivning' },
        { title: 'Foto & Dokumentering', path: '/tjanster/design-formgivning/foto-dokumentering' },
      ]
    },
    {
      title: "Prototyper & Specialtillverkning",
      path: "/tjanster/prototyper",
      icon: <Printer className="w-5 h-5 text-primary" />,
      items: [
        { title: 'Prototypframställning', path: '/tjanster/prototyper/prototypframstallning' },
        { title: '3D-printning & Lasergravering', path: '/tjanster/prototyper/3d-print-laser' },
        { title: 'Modellbygge', path: '/tjanster/prototyper/modellbygge' },
      ]
    }
  ];

  // Tekniska tjänster
  const tekniskaTjanster = [
    {
      title: "Tekniska Lösningar",
      path: "/tjanster/tekniska-losningar",
      icon: <Zap className="w-5 h-5 text-primary" />,
      items: [
        { title: 'Systemutveckling & Automation', path: '/tjanster/tekniska-losningar/systemutveckling' },
        { title: 'Elektronik & Styrsystem', path: '/tjanster/tekniska-losningar/elektronik' },
        { title: 'Konstruktion & Tillverkningsunderlag', path: '/tjanster/tekniska-losningar/konstruktion' },
      ]
    },
    {
      title: "Tillverkning",
      path: "/tjanster/tillverkningsmetoder",
      icon: <Wrench className="w-5 h-5 text-primary" />,
      items: [
        { title: 'CNC-fräsning & Laserskärning', path: '/tjanster/tillverkningsmetoder/cnc-laser' },
        { title: 'Formtillverkning', path: '/tjanster/tillverkningsmetoder/formtillverkning' },
        { title: 'Vacuum-laminering & Formgjutning', path: '/tjanster/tillverkningsmetoder/laminering-gjutning' },
      ]
    }
  ];

  const mainNavItems = [
    { 
      title: 'Tjänster', 
      path: '/tjanster',
      hasExpandableMenu: true
    },
    { title: 'Om Oss', path: '/om-oss' },
  ];

  // Funktion för att rendera undermenyer rekursivt
  const renderSubmenu = (items: any[], parentKey: string = '') => {
    return items.map((subItem, subIndex) => {
      const key = `${parentKey}-${subIndex}`;
      
      if (subItem.submenu) {
        return (
          <div key={key} className="pl-4 mt-3 mb-4">
            <button 
              className="flex items-start justify-between w-full text-white/90 hover:text-primary transition-colors duration-300 font-medium text-lg py-1"
              onClick={() => toggleDropdown(`${key}-${subItem.title}`)}
            >
              <span>{subItem.title}</span>
              <ChevronDown 
                className={`w-4 h-4 transition-transform duration-300 ${activeDropdown === `${key}-${subItem.title}` ? 'rotate-180' : ''}`} 
              />
            </button>
            
            <div className={`mt-2 space-y-2 pl-4 ${activeDropdown === `${key}-${subItem.title}` ? 'block' : 'hidden'}`}>
              {renderSubmenu(subItem.submenu, key)}
            </div>
          </div>
        );
      }
      
      return (
        <Link 
          key={key}
          to={subItem.path}
          className="block py-1 text-white/70 hover:text-primary transition-colors text-base"
          onClick={closeMobileMenu}
        >
          {subItem.title}
        </Link>
      );
    });
  };

  return (
    <nav
      ref={navRef}
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out px-6 md:px-12',
        isScrolled ? 'py-4' : 'py-6'
      )}
      style={{
        transition: 'background-color 0.3s ease-in-out'
      }}
    >
      {/* Bakgrundslager som ger blur efter scroll, utan att påverka stacking-context */}
      <div
        aria-hidden
        className={cn(
          'absolute inset-0 -z-10 transition-all duration-300 pointer-events-none',
          isScrolled
            ? 'backdrop-blur-xl bg-background/80 border-b border-white/10 shadow-md'
            : 'bg-transparent'
        )}
      />
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
            <li key={index} className="relative" style={{ 
              animation: 'slideDown 0.5s cubic-bezier(0.4, 0, 0.2, 1) forwards',
              animationDelay: `${index * 0.1}s`,
              opacity: 0
            }}>
              {item.hasExpandableMenu ? (
                <div 
                  className="relative"
                  onMouseEnter={handleMenuEnter}
                  onMouseLeave={handleMenuLeave}
                >
                  <Link 
                    to={item.path}
                    className="flex items-center text-white/80 hover:text-primary transition-all duration-300 font-medium text-sm"
                  >
                    {item.title}
                    <ChevronDown className={`ml-1 w-4 h-4 transition-transform duration-300 ${showTjansterMenu ? 'rotate-180' : ''}`} />
                  </Link>
                </div>
              ) : (
                <Link 
                  to={item.path}
                  className="text-white/80 hover:text-primary transition-all duration-300 font-medium text-sm"
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

      {/* Tjänster Dropdown Menu - Fullbredd */}
      <div 
        ref={menuRef}
        className={`absolute left-0 right-0 bg-background/95 backdrop-blur-lg border-b border-white/10 shadow-lg z-20 mt-2 transition-all duration-300 transform origin-top ${
          showTjansterMenu 
            ? 'opacity-100 visible translate-y-0' 
            : 'opacity-0 invisible -translate-y-4'
        }`}
        onMouseEnter={handleMenuEnter}
        onMouseLeave={handleMenuLeave}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-8">
          <div className="flex">
            {/* Kreativa tjänster */}
            <div className="w-1/2 pr-8">
              <h3 className="text-white/65 font-semibold text-lg mb-6 uppercase tracking-wider">
                {/* Header left */}
              </h3>
              <div className="grid grid-cols-1 gap-6">
                {kreativaTjanster.map((category, idx) => (
                  <div key={idx}>
                    <Link 
                      to={category.path}
                      className="text-white font-medium hover:text-primary transition-colors mb-3 flex items-center"
                    >
                      <div className="bg-secondary/30 p-2 rounded-lg mr-3">
                        {category.icon}
                      </div>
                      {category.title}
                    </Link>
                    <ul className="space-y-2 pl-10">
                      {category.items.map((item, itemIdx) => (
                        <li key={itemIdx}>
                          <Link 
                            to={item.path}
                            className="text-white/70 hover:text-primary text-sm transition-colors hover:translate-x-1 inline-block"
                          >
                            {item.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Tekniska tjänster */}
            <div className="w-1/2 pl-8 border-l border-white/10">
              <h3 className="text-white/65 font-semibold text-lg mb-6 uppercase tracking-wider">
                {/* Header right */}
              </h3>
              <div className="grid grid-cols-1 gap-6">
                {tekniskaTjanster.map((category, idx) => (
                  <div key={idx}>
                    <Link 
                      to={category.path}
                      className="text-white font-medium hover:text-primary transition-colors mb-3 flex items-center"
                    >
                      <div className="bg-secondary/30 p-2 rounded-lg mr-3">
                        {category.icon}
                      </div>
                      {category.title}
                    </Link>
                    <ul className="space-y-2 pl-10">
                      {category.items.map((item, itemIdx) => (
                        <li key={itemIdx}>
                          <Link 
                            to={item.path}
                            className="text-white/70 hover:text-primary text-sm transition-colors hover:translate-x-1 inline-block"
                          >
                            {item.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-background pt-20 z-50 animate-fadeIn overflow-y-auto">
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
                {item.hasExpandableMenu ? (
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
                    
                    <div className={`mt-4 space-y-3 text-left ${activeDropdown === item.title ? 'block' : 'hidden'}`}>
                      {/* Kreativa tjänster */}
                      <div className="mb-6">
                        <h3 className="text-white/65 font-semibold mb-3 flex items-center justify-center uppercase tracking-wider">
                          {/* Header left */}
                        </h3>
                        <div className="space-y-4">
                          {kreativaTjanster.map((category, idx) => (
                            <div key={idx} className="group/service">
                              <button 
                                className="flex items-center justify-between w-full text-white hover:text-primary transition-colors py-2"
                                onClick={() => toggleDropdown(`service-${idx}`)}
                              >
                                <div className="flex items-center">
                                  <div className="bg-secondary/30 p-2 rounded-lg mr-3">
                                    {category.icon}
                                  </div>
                                  <span>{category.title}</span>
                                </div>
                                <ChevronDown 
                                  className={`w-4 h-4 transition-transform duration-300 ${activeDropdown === `service-${idx}` ? 'rotate-180' : ''}`} 
                                />
                              </button>
                              <div className={`pl-12 space-y-2 mt-2 ${activeDropdown === `service-${idx}` ? 'block' : 'hidden'}`}>
                                {category.items.map((item, itemIdx) => (
                                  <Link 
                                    key={itemIdx}
                                    to={item.path}
                                    className="block text-white/70 hover:text-primary py-1 transition-colors"
                                    onClick={closeMobileMenu}
                                  >
                                    {item.title}
                                  </Link>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      {/* Tekniska tjänster */}
                      <div>
                        <h3 className="text-white/65 font-semibold mb-3 flex items-center justify-center uppercase tracking-wider">
                          {/* Header right */}
                        </h3>
                        <div className="space-y-4">
                          {tekniskaTjanster.map((category, idx) => (
                            <div key={idx} className="group/service">
                              <button 
                                className="flex items-center justify-between w-full text-white hover:text-primary transition-colors py-2"
                                onClick={() => toggleDropdown(`tech-service-${idx}`)}
                              >
                                <div className="flex items-center">
                                  <div className="bg-secondary/30 p-2 rounded-lg mr-3">
                                    {category.icon}
                                  </div>
                                  <span>{category.title}</span>
                                </div>
                                <ChevronDown 
                                  className={`w-4 h-4 transition-transform duration-300 ${activeDropdown === `tech-service-${idx}` ? 'rotate-180' : ''}`} 
                                />
                              </button>
                              <div className={`pl-12 space-y-2 mt-2 ${activeDropdown === `tech-service-${idx}` ? 'block' : 'hidden'}`}>
                                {category.items.map((item, itemIdx) => (
                                  <Link 
                                    key={itemIdx}
                                    to={item.path}
                                    className="block text-white/70 hover:text-primary py-1 transition-colors"
                                    onClick={closeMobileMenu}
                                  >
                                    {item.title}
                                  </Link>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
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
