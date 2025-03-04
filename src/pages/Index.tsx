
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ProcessSteps from '@/components/ProcessSteps';
import Footer from '@/components/Footer';
import ImageCarousel from '@/components/ImageCarousel';
import { Link } from 'react-router-dom';
import { ArrowRight, Palette, Cpu, Camera } from 'lucide-react';

const ServiceCard = ({ title, description, icon, link, images }: { 
  title: string; 
  description: string; 
  icon: React.ReactNode; 
  link: string;
  images?: { src: string; alt: string; }[];
}) => {
  return (
    <div className="glass p-6 rounded-xl hover:bg-white/5 transition-all duration-300 group animate-slideUp opacity-0" style={{ animationDelay: '0.3s' }}>
      {images && images.length > 0 && (
        <div className="mb-6">
          <ImageCarousel 
            images={images} 
            category={title} 
            showAllLink={link}
            aspectRatio="video"
          />
        </div>
      )}
      <div className="flex items-center mb-4">
        <div className="bg-secondary/50 p-3 rounded-lg mr-4 group-hover:bg-primary/20 transition-colors">
          {icon}
        </div>
        <h3 className="text-xl font-semibold text-white">{title}</h3>
      </div>
      <p className="text-white/70 mb-4">{description}</p>
      <Link to={link} className="inline-flex items-center text-primary hover:text-white transition-colors group-hover:translate-x-1 duration-300">
        Läs mer <ArrowRight className="ml-1 w-4 h-4" />
      </Link>
    </div>
  );
};

const Index = () => {
  // Observer to detect elements entering the viewport and animate them
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target.classList.contains('opacity-0')) {
            entry.target.classList.remove('opacity-0');
          }
        }
      });
    }, { threshold: 0.15 });

    const animateElements = document.querySelectorAll('.animate-slideUp, .animate-slideDown, .animate-fadeIn, .animate-slideRight');
    animateElements.forEach((el) => observer.observe(el));

    return () => {
      animateElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const services = [
    {
      title: "Design & Formgivning",
      description: "Idé/problemlösning, Helhetsansvar för tillverkning, Samordning, installation & driftsättning.",
      icon: <Palette className="w-5 h-5 text-primary" />,
      link: "/design-formgivning",
      images: [
        {
          src: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
          alt: "Design & Formgivning - Kreativ designprocess"
        },
        {
          src: "/lovable-uploads/529cb13a-7c56-43a0-a054-5d5a6b4eac6f.png",
          alt: "Presentation design"
        }
      ]
    },
    {
      title: "Tekniska Lösningar",
      description: "CAD/CAM & Teknisk Visualisering, Prototypframställning, Tillverkningsmetoder och mer.",
      icon: <Cpu className="w-5 h-5 text-primary" />,
      link: "/tekniska-losningar",
      images: [
        {
          src: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
          alt: "Tekniska Lösningar - Datorbaserad design"
        },
        {
          src: "https://images.unsplash.com/photo-1518770660439-4636190af475",
          alt: "Tekniska Lösningar - Kretskort och elektronik"
        }
      ]
    },
    {
      title: "Media",
      description: "Produktfotografering, Eventdokumentation och Naturfotogalleri.",
      icon: <Camera className="w-5 h-5 text-primary" />,
      link: "/media",
      images: [
        {
          src: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
          alt: "Media - Professionell produktion"
        },
        {
          src: "https://images.unsplash.com/photo-1473091534298-04dcbce3278c",
          alt: "Media - Kreativ fotografi"
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      <Hero />
      <ProcessSteps />
      
      {/* Services Overview Section */}
      <section className="section-padding bg-secondary/10" id="tjanster">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-6 animate-slideDown opacity-0" style={{ animationDelay: '0.2s' }}>Våra Tjänster</h2>
            <p className="max-w-3xl mx-auto text-white/70 mb-8 animate-slideDown opacity-0" style={{ animationDelay: '0.4s' }}>
              Från mindre uppdrag till omfattande system/projekt med fullt turn-key ansvar
            </p>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full animate-slideDown opacity-0" style={{ animationDelay: '0.6s' }}></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard 
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
                link={service.link}
                images={service.images}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Contact CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary/20 to-secondary/20">
        <div className="container mx-auto text-center">
          <h2 className="heading-md mb-6 animate-slideUp opacity-0">Har du ett projekt i åtanke?</h2>
          <p className="text-white/70 max-w-2xl mx-auto mb-8 animate-slideUp opacity-0" style={{ animationDelay: '0.2s' }}>
            Kontakta oss för att diskutera hur vi kan hjälpa dig med ditt nästa projekt, oavsett om det gäller design, tekniska lösningar eller formgivning.
          </p>
          <Link 
            to="/kontakt" 
            className="inline-flex items-center glass hover:bg-white/10 text-white px-8 py-3 rounded-full transition-all duration-300 group animate-slideUp opacity-0"
            style={{ animationDelay: '0.4s' }}
          >
            Kontakta oss
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
          </Link>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
