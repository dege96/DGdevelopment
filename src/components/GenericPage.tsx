import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SEO } from '@/components/SEO';

export type SectionCardProps = {
  id: string;
  title: string;
  icon: React.ReactNode;
  description: string;
  link: string;
};

export const SectionCard = ({ id, title, icon, description, link }: SectionCardProps) => {
  return (
    <div className="glass p-6 rounded-xl">
      <h3 className="text-xl font-semibold mb-4 text-white flex items-center">
        {icon}
        <span className="ml-3">{title}</span>
      </h3>
      <p className="text-white/70 mb-6">{description}</p>
      <Link
        to={link}
        className="inline-flex items-center glass hover:bg-white/10 text-white px-6 py-2 rounded-full transition-all duration-300 group self-start"
      >
        Se bilder
        <ChevronRight className="ml-1 group-hover:translate-x-1 transition-transform" size={18} />
      </Link>
    </div>
  );
};

export type GenericPageProps = {
  title: string;
  subtitle: string;
  description: string;
  sections: SectionCardProps[];
  gridCols?: 2 | 3;
  paddingStyle?: 'pb-16';
  seoTitle?: string;
  seoDescription?: string;
  seoImage?: string;
  seoKeywords?: string;
};

const GenericPage = ({ 
  title, 
  subtitle, 
  description, 
  sections, 
  gridCols = 3,
  paddingStyle = 'pb-16',
  seoTitle,
  seoDescription,
  seoImage,
  seoKeywords
}: GenericPageProps) => {
  // Animation observer
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

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <SEO 
        title={seoTitle || title} 
        description={seoDescription || subtitle} 
        image={seoImage}
        keywords={seoKeywords} 
      />
      <Navbar />
      
      {/* Page Header */}
      <div className="pt-32 pb-12 bg-gradient-to-b from-secondary/20 to-background">
        <div className="container mx-auto px-6">
          <h1 className="heading-lg mb-4 animate-slideDown opacity-0">{title}</h1>
          <p className="text-white/70 max-w-3xl animate-slideDown opacity-0" style={{ animationDelay: '0.2s' }}>
            {subtitle}
          </p>
        </div>
      </div>
      
      {/* Main Content */}
      <section className={paddingStyle}>
        <div className="container mx-auto px-6">
          <div className="glass rounded-xl p-8 md:p-10 animate-slideUp opacity-0">
            <p className="text-white/80 mb-10">{description}</p>
            
            <div className={`grid grid-cols-1 md:grid-cols-${gridCols} gap-8`}>
              {sections.map(section => (
                <SectionCard 
                  key={section.id}
                  id={section.id}
                  title={section.title}
                  icon={section.icon}
                  description={section.description}
                  link={section.link}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default GenericPage; 