
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Kontakt = () => {
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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert('Tack för ditt meddelande! Vi återkommer så snart som möjligt.');
  };

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      
      {/* Page Header */}
      <div className="pt-32 pb-12 bg-gradient-to-b from-secondary/20 to-background">
        <div className="container mx-auto px-6">
          <h1 className="heading-lg mb-4 animate-slideDown opacity-0">Kontakt</h1>
          <p className="text-white/70 max-w-3xl animate-slideDown opacity-0" style={{ animationDelay: '0.2s' }}>
            Kontakta oss för mer information om våra tjänster eller för att diskutera ditt projekt
          </p>
        </div>
      </div>
      
      {/* Contact Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="animate-slideUp opacity-0">
              <div className="glass p-8 rounded-xl h-full">
                <h2 className="text-2xl font-semibold text-white mb-6">Kontaktuppgifter</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-secondary/50 p-3 rounded-lg mr-4">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-white font-medium mb-1">E-post</h3>
                      <a href="mailto:info@dgd.solutions" className="text-white/70 hover:text-primary transition-colors">
                        info@dgd.solutions
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-secondary/50 p-3 rounded-lg mr-4">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-white font-medium mb-1">Telefon</h3>
                      <a href="tel:+4612345678" className="text-white/70 hover:text-primary transition-colors">
                        +46 (0) 12 345 678
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-secondary/50 p-3 rounded-lg mr-4">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-white font-medium mb-1">Adress</h3>
                      <p className="text-white/70">
                        DG Development<br />
                        Exempelgatan 123<br />
                        123 45 Stockholm<br />
                        Sverige
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-10 p-6 bg-background/50 rounded-lg border border-white/10">
                  <h3 className="text-white font-medium mb-2">Arbetstider</h3>
                  <p className="text-white/70">
                    Måndag - Fredag: 08:00 - 17:00<br />
                    Helger: Stängt
                  </p>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="animate-slideUp opacity-0" style={{ animationDelay: '0.3s' }}>
              <div className="glass p-8 rounded-xl">
                <h2 className="text-2xl font-semibold text-white mb-6">Skicka meddelande</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-white/70 mb-2">Namn</label>
                      <input 
                        type="text" 
                        id="name" 
                        required
                        className="w-full bg-background/50 border border-white/10 rounded-lg p-3 text-white focus:border-primary focus:outline-none transition-colors"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-white/70 mb-2">E-post</label>
                      <input 
                        type="email" 
                        id="email" 
                        required
                        className="w-full bg-background/50 border border-white/10 rounded-lg p-3 text-white focus:border-primary focus:outline-none transition-colors"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-white/70 mb-2">Ämne</label>
                    <input 
                      type="text" 
                      id="subject" 
                      required
                      className="w-full bg-background/50 border border-white/10 rounded-lg p-3 text-white focus:border-primary focus:outline-none transition-colors"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-white/70 mb-2">Meddelande</label>
                    <textarea 
                      id="message" 
                      rows={5}
                      required
                      className="w-full bg-background/50 border border-white/10 rounded-lg p-3 text-white focus:border-primary focus:outline-none transition-colors resize-none"
                    ></textarea>
                  </div>
                  
                  <button 
                    type="submit"
                    className="inline-flex items-center bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-lg transition-all duration-300"
                  >
                    Skicka <Send className="ml-2 w-4 h-4" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Kontakt;
