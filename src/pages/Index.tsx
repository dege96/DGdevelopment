import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ProcessSteps from '@/components/ProcessSteps';
import Footer from '@/components/Footer';
import ImageCarousel from '@/components/ImageCarousel';
import { Link } from 'react-router-dom';
import { ArrowRight, Palette, Cpu, Camera } from 'lucide-react';

const ServiceCard = ({ title, description, icon, link, imageData }: { 
  title: string; 
  description: string; 
  icon: React.ReactNode; 
  link: string;
  imageData?: {
    src: string;
    alt: string;
    description?: string;
  };
}) => {
  if (imageData) {
    return (
      <ImageCarousel 
        images={[{ src: imageData.src, alt: imageData.alt }]}
        category={title}
        description={imageData.description || description}
        showAllLink={link}
        showAsImageCard={true}
        className="animate-slideUp opacity-0 h-[320px] md:h-[380px]"
        style={{ animationDelay: '0.3s' }}
      />
    );
  }

  return (
    <div className="glass p-6 rounded-xl hover:bg-white/5 transition-all duration-300 group animate-slideUp opacity-0" style={{ animationDelay: '0.3s' }}>
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

const designImage = {
  src: "/HEMSA DGD/Formgivning/NIKE slutleverans MICA x4_.jpg",
  alt: "Design & Formgivning",
  description: "Idé/problemlösning, Helhetsansvar för tillverkning, Samordning, installation & driftsättning."
};

const technicalImage = {
  src: "/HEMSA DGD/CAD CAM/Plats Måttanpassat utekök CAD.jpg",
  alt: "Tekniska Lösningar",
  description: "CAD/CAM & Teknisk Visualisering, Prototypframställning, Tillverkningsmetoder och mer."
};

const mediaImage = {
  src: "/HEMSA DGD/Foto_Dokumentering/Event_Studio/Studio-015.jpg",
  alt: "Media",
  description: "Produktfotografering, Eventdokumentation och Naturfotogalleri."
};

const Index = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.remove('opacity-0');
        }
      });
    }, { threshold: 0.1 });

    const animateElements = document.querySelectorAll('.animate-slideUp, .animate-slideDown, .animate-fadeIn');
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
      imageData: designImage
    },
    {
      title: "Tekniska Lösningar",
      description: "CAD/CAM & Teknisk Visualisering, Prototypframställning, Tillverkningsmetoder och mer.",
      icon: <Cpu className="w-5 h-5 text-primary" />,
      link: "/tekniska-losningar",
      imageData: technicalImage
    },
    {
      title: "Media",
      description: "Produktfotografering, Eventdokumentation och Naturfotogalleri.",
      icon: <Camera className="w-5 h-5 text-primary" />,
      link: "/media",
      imageData: mediaImage
    }
  ];

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <ImageCarousel 
                images={[designImage]}
                category="Design & Formgivning"
                description={designImage.description}
                showAllLink="/design-formgivning"
                showAsImageCard={true}
                className="animate-slideUp opacity-0 h-[320px] md:h-[380px]"
              />
              
              <ImageCarousel 
                images={[technicalImage]}
                category="Tekniska Lösningar"
                description={technicalImage.description}
                showAllLink="/tekniska-losningar"
                showAsImageCard={true}
                className="animate-slideUp opacity-0 h-[320px] md:h-[380px]"
              />
            </div>
          </div>
        </section>
        
        <ProcessSteps />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
