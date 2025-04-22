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
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [showTjansterMenu, setShowTjansterMenu] = useState(false);
  const menuTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLElement>(null);
  const location = useLocation();

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
      path: "/tjanster#design-formgivning",
      icon: <PenTool className="w-5 h-5 text-primary" />
    },
    {
      title: "Prototyper & Specialtillverkning",
      path: "/tjanster#prototyper",
      icon: <Printer className="w-5 h-5 text-primary" />
    }
  ];

  // Tekniska tjänster
  const tekniskaTjanster = [
    {
      title: "Tekniska Lösningar",
      path: "/tjanster#tekniska-losningar",
      icon: <Zap className="w-5 h-5 text-primary" />
    },
    {
      title: "Tillverkningsmetoder",
      path: "/tjanster#tillverkning",
      icon: <Wrench className="w-5 h-5 text-primary" />
    },
    {
      title: "Foto & Dokumentering",
      path: "/tjanster#foto-dokumentering",
      icon: <Camera className="w-5 h-5 text-primary" />
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
  const renderSubmenu = (items: any[]) => {
    return items.map((item, index) => (
      <Link 
        key={index}
        to={item.path}
        className="block py-1 text-white/70 hover:text-primary transition-colors text-base"
        onClick={closeMobileMenu}
      >
        {item.title}
      </Link>
    ));
  };

  const handleServiceClick = (path: string) => {
    if (location.pathname === '/tjanster') {
      // Om vi redan är på Tjanster-sidan, scrolla till sektionen
      const hash = path.split('#')[1];
      const element = document.getElementById(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        // Uppdatera URL utan att ladda om sidan
        window.history.pushState(null, '', path);
      }
    } else {
      // Om vi är på en annan sida, navigera till Tjanster-sidan med hash
      window.location.href = path;
    }
    closeMobileMenu();
  };

  return (
    <nav
      ref={navRef}
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out px-6 md:px-12',
        isScrolled
          ? 'py-4 backdrop-blur-xl bg-background/80 border-b border-white/10 shadow-md'
          : 'py-6 bg-transparent'
      )}
      style={{
        transition: 'background-color 0.3s ease-in-out'
      }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/" className="text-2xl font-bold text-white animate-fadeIn hover:scale-105 transition-transform duration-300">
            <img 
              src="/svg_logo.svg"
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
        
        {/* Mobil menyknapp */}
        <button
          className="md:hidden text-white/80 hover:text-primary transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Expandable Menu */}
      <div
        ref={menuRef}
        className={cn(
          'absolute top-full left-0 right-0 bg-background/95 backdrop-blur-lg border-t border-white/10',
          showTjansterMenu ? 'block' : 'hidden'
        )}
        onMouseEnter={handleMenuEnter}
        onMouseLeave={handleMenuLeave}
      >
        <div className="max-w-7xl mx-auto py-8 px-6 md:px-12 grid grid-cols-2 gap-12">
          {/* Kreativa Tjänster */}
          <div>
            <h3 className="text-white/50 uppercase text-sm font-medium mb-6">Kreativa Tjänster</h3>
            <div className="space-y-6">
              {kreativaTjanster.map((category, idx) => (
                <div key={idx}>
                  <Link 
                    to={category.path}
                    className="flex items-center text-white hover:text-primary transition-colors group"
                    onClick={(e) => {
                      e.preventDefault();
                      handleServiceClick(category.path);
                    }}
                  >
                    <div className="bg-secondary/30 p-2 rounded-lg mr-3 group-hover:bg-primary/20 transition-colors">
                      {category.icon}
                    </div>
                    {category.title}
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Tekniska Tjänster */}
          <div>
            <h3 className="text-white/50 uppercase text-sm font-medium mb-6">Tekniska Tjänster</h3>
            <div className="space-y-6">
              {tekniskaTjanster.map((category, idx) => (
                <div key={idx}>
                  <Link 
                    to={category.path}
                    className="flex items-center text-white hover:text-primary transition-colors group"
                    onClick={(e) => {
                      e.preventDefault();
                      handleServiceClick(category.path);
                    }}
                  >
                    <div className="bg-secondary/30 p-2 rounded-lg mr-3 group-hover:bg-primary/20 transition-colors">
                      {category.icon}
                    </div>
                    {category.title}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div 
        className={cn(
          'fixed inset-0 bg-background z-50 transition-transform duration-300 ease-in-out',
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <div className="flex justify-end p-6 bg-background">
          <button 
            onClick={() => setMobileMenuOpen(false)}
            className="text-white/80 hover:text-primary transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        <div className="px-6 py-8 bg-background">
          <div className="space-y-8">
            {/* Kreativa Tjänster */}
            <div>
              <h3 className="text-white/50 uppercase text-sm font-medium mb-6">Kreativa Tjänster</h3>
              <div className="space-y-6">
                {kreativaTjanster.map((category, idx) => (
                  <div key={idx}>
                    <Link 
                      to={category.path}
                      className="flex items-center text-white hover:text-primary transition-colors group"
                      onClick={(e) => {
                        e.preventDefault();
                        handleServiceClick(category.path);
                      }}
                    >
                      <div className="bg-secondary/30 p-2 rounded-lg mr-3 group-hover:bg-primary/20 transition-colors">
                        {category.icon}
                      </div>
                      {category.title}
                    </Link>
                  </div>
                ))}
              </div>
            </div>

            {/* Tekniska Tjänster */}
            <div>
              <h3 className="text-white/50 uppercase text-sm font-medium mb-6">Tekniska Tjänster</h3>
              <div className="space-y-6">
                {tekniskaTjanster.map((category, idx) => (
                  <div key={idx}>
                    <Link 
                      to={category.path}
                      className="flex items-center text-white hover:text-primary transition-colors group"
                      onClick={(e) => {
                        e.preventDefault();
                        handleServiceClick(category.path);
                      }}
                    >
                      <div className="bg-secondary/30 p-2 rounded-lg mr-3 group-hover:bg-primary/20 transition-colors">
                        {category.icon}
                      </div>
                      {category.title}
                    </Link>
                  </div>
                ))}
              </div>
            </div>

            {/* Other Links */}
            <div>
              <h3 className="text-white/50 uppercase text-sm font-medium mb-6">Övrigt</h3>
              <div className="space-y-4">
                <Link 
                  to="/om-oss"
                  className="block text-white hover:text-primary transition-colors"
                  onClick={closeMobileMenu}
                >
                  Om Oss
                </Link>
                <Link 
                  to="/kontakt"
                  className="inline-flex items-center glass hover:bg-white/10 text-white px-6 py-2 rounded-full transition-all duration-300 group"
                  onClick={closeMobileMenu}
                >
                  Kontakt
                  <ChevronRight className="ml-1 group-hover:translate-x-1 transition-transform" size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
