import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ProcessSteps from '@/components/ProcessSteps';
import Footer from '@/components/Footer';
import ImageCarousel from '@/components/ImageCarousel';
import { Link } from 'react-router-dom';
import { ArrowRight, Palette, Cpu, Printer, Wrench } from 'lucide-react';

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
    <div className="glass p-6 rounded-xl hover:bg-white/5 transition-all duration-300 group animate-slideUp opacity-0 h-[380px] md:h-[380px] flex flex-col" style={{ animationDelay: '0.3s' }}>
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
  src: "/TranspBkg/NIKEslutleverans.png",
  alt: "Design & Formgivning",
  description: "Teknisk design, CAD & Visualisering, Formgivning, Foto & Dokumentering.",
};

const technicalImage = {
  src: "/TranspBkg/vaclyft 9kopp.png",
  alt: "Tekniska Lösningar",
  description: "Systemutveckling & Automation, Elektronik & Styrsystem, Konstruktion & Tillverkningsunderlag."
};

const prototypeImage = {
  src: "/TranspBkg/DGDtest_iskristall.jpg",
  alt: "Prototyper & Specialtillverkning",
  description: "Prototypframställning, 3D-printning & Lasergravering, Modellbygge."
};

const manufacturingImage = {
  src: "/TranspBkg/LaserGravyr-001.jpg",
  alt: "Tillverkning",
  description: "CNC-fräsning & Laserskärning, Formtillverkning, Vacuum-laminering & Formgjutning."
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
      description: "Teknisk design, CAD & Visualisering, Formgivning, Foto & Dokumentering.",
      icon: <Palette className="w-5 h-5 text-primary" />,
      link: "/tjanster/design-formgivning",
      imageData: designImage
    },
    {
      title: "Tekniska Lösningar",
      description: "Systemutveckling & Automation, Elektronik & Styrsystem, Konstruktion & Tillverkningsunderlag.",
      icon: <Cpu className="w-5 h-5 text-primary" />,
      link: "/tjanster/tekniska-losningar",
      imageData: technicalImage
      
    },
    {
      title: "Prototyper & Specialtillverkning",
      description: "Prototypframställning, 3D-printning & Lasergravering, Modellbygge.",
      icon: <Printer className="w-5 h-5 text-primary" />,
      link: "/tjanster/prototyper",
      imageData: prototypeImage
    },
    {
      title: "Tillverkning",
      description: "CNC-fräsning & Laserskärning, Formtillverkning, Vacuum-laminering & Formgjutning.",
      icon: <Wrench className="w-5 h-5 text-primary" />,
      link: "/tjanster/tillverkningsmetoder",
      imageData: manufacturingImage
    }
  ];

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      <main>
      <Hero />
        
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center animate-slideDown opacity-0">
              Tjänster
            </h2>
          
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
                <ImageCarousel 
                key={index}
                  images={[service.imageData!]}
                  category={service.title}
                description={service.description}
                  showAllLink={service.link}
                  showAsImageCard={true}
                  className="animate-slideUp opacity-0 h-[180px] md:h-[380px]"
                  style={{ animationDelay: `${0.2 + index * 0.1}s` }}
              />
            ))}
          </div>
            
            <div className="text-center mt-12 animate-slideUp opacity-0" style={{ animationDelay: '0.6s' }}>
          <Link 
                to="/tjanster" 
                className="inline-flex items-center glass hover:bg-white/10 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full transition-all duration-300 group"
          >
                Utforska alla tjänster
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
          </Link>
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
