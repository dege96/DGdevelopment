import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';

export type ContentSectionProps = {
  title: string;
  icon: React.ReactNode;
  description: React.ReactNode;
};

export type SpecialSectionProps = {
  title?: string;
  content: React.ReactNode;
  className?: string;
};

export type GenericDetailPageProps = {
  title: string;
  subtitle: string;
  backLink: string;
  backText: string;
  sections: ContentSectionProps[][];
  specialSections?: SpecialSectionProps[];
};

const GenericDetailPage = ({
  title,
  subtitle,
  backLink,
  backText,
  sections,
  specialSections = []
}: GenericDetailPageProps) => {
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
      <Navbar />
      
      {/* Page Header */}
      <div className="pt-32 pb-12 bg-gradient-to-b from-secondary/20 to-background">
        <div className="container mx-auto px-6">
          <div className="mb-4">
            <Link to={backLink} className="text-primary hover:text-primary/80">&larr; {backText}</Link>
          </div>
          <h1 className="heading-lg mb-4 animate-slideDown opacity-0">{title}</h1>
          <p className="text-white/70 max-w-3xl animate-slideDown opacity-0" style={{ animationDelay: '0.2s' }}>
            {subtitle}
          </p>
        </div>
      </div>
      
      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="glass rounded-xl p-8 md:p-10 animate-slideUp opacity-0">
            
            {sections.map((columnSections, columnIndex) => (
              <div key={`column-${columnIndex}`} className={columnIndex === 0 ? "grid grid-cols-1 md:grid-cols-2 gap-10" : "mt-10"}>
                {columnIndex === 0 && (
                  <>
                    {/* Left column */}
                    <div>
                      {columnSections.slice(0, Math.ceil(columnSections.length / 2)).map((section, sectionIndex) => (
                        <div key={`section-left-${sectionIndex}`} className="mb-8">
                          <h3 className="heading-md mb-4 text-white flex items-center">
                            {section.icon}
                            <span>{section.title}</span>
                          </h3>
                          <div className="text-white/80 mb-4">
                            {section.description}
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    {/* Right column */}
                    <div>
                      {columnSections.slice(Math.ceil(columnSections.length / 2)).map((section, sectionIndex) => (
                        <div key={`section-right-${sectionIndex}`} className="mb-8">
                          <h3 className="heading-md mb-4 text-white flex items-center">
                            {section.icon}
                            <span>{section.title}</span>
                          </h3>
                          <div className="text-white/80 mb-4">
                            {section.description}
                          </div>
                        </div>
                      ))}
                    </div>
                  </>
                )}
                
                {columnIndex > 0 && columnSections.map((section, sectionIndex) => (
                  <div key={`section-full-${sectionIndex}`} className="mb-8">
                    <h3 className="heading-md mb-4 text-white flex items-center">
                      {section.icon}
                      <span>{section.title}</span>
                    </h3>
                    <div className="text-white/80 mb-4">
                      {section.description}
                    </div>
                  </div>
                ))}
              </div>
            ))}
            
            {specialSections.map((specialSection, index) => (
              <div key={`special-${index}`} className={`${specialSection.className || 'mt-10 border-t border-white/10 pt-8'}`}>
                {specialSection.title && (
                  <h3 className="heading-md mb-4 text-white">
                    {specialSection.title}
                  </h3>
                )}
                <div className="text-white/80">
                  {specialSection.content}
                </div>
              </div>
            ))}
            
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default GenericDetailPage; 