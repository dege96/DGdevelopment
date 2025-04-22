import React, { useEffect/*, useState, useRef*/, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Mail, Phone, MapPin, Copy, Check/*, Send, CheckCircle, XCircle*/ } from 'lucide-react';
// import emailjs from '@emailjs/browser';

const Kontakt = () => {
  const [copied, setCopied] = useState(false);

  const copyPhoneToClipboard = () => {
    navigator.clipboard.writeText('070 718 98 77');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  /*
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  */

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

  /*
  // Reset feedback message after 5 seconds
  useEffect(() => {
    if (submitStatus !== 'idle') {
      const timer = setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [submitStatus]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Replace these with your actual EmailJS service IDs
    // Sign up at emailjs.com and get your service ID, template ID, and user ID
    const serviceId = 'service_xxxxxxx';  // Replace with your service ID
    const templateId = 'template_xxxxxxx'; // Replace with your template ID
    const userId = 'xxxxxxxxxxxxxxxxxxxx'; // Replace with your user ID
    
    emailjs.sendForm(serviceId, templateId, formRef.current!, userId)
      .then((result) => {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      })
      .catch((error) => {
        console.error('EmailJS error:', error);
        setSubmitStatus('error');
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };
  */

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
      <section className="pb-16">
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
                      <a href="mailto:johan@dgd.solutions" className="text-white/70 hover:text-primary transition-colors">
                        johan@dgd.solutions
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-secondary/50 p-3 rounded-lg mr-4">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-white font-medium mb-1">Telefon</h3>
                      <div className="flex items-center">
                        <span className="text-white/70 mr-2">070 718 98 77</span>
                        <button 
                          onClick={copyPhoneToClipboard}
                          className="p-1 rounded-md hover:bg-white/10 transition-colors" 
                          title="Kopiera telefonnummer"
                        >
                          {copied ? <Check size={16} className="text-green-500" /> : <Copy size={16} className="text-white/50" />}
                        </button>
                      </div>
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
                        Vetevägen 22 <br />
                        187 69, Täby<br />
                        Stockholm, Sverige
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact Form - Commented out for now */}
            <div className="animate-slideUp opacity-0" style={{ animationDelay: '0.3s' }}>
              <div className="glass p-8 rounded-xl h-full">
                <h2 className="text-2xl font-semibold text-white mb-6">Kontakta oss</h2>
                
                <div className="text-white/70 space-y-6">
                  <p>
                    Har du frågor eller vill diskutera ett projekt? Kontakta oss gärna via telefon eller e-post.
                  </p>
                  
                  <div className="bg-secondary/10 p-6 rounded-lg border border-white/10">
                    <p className="mb-4">
                      Vi svarar normalt inom 24 timmar på vardagar.
                    </p>
                    
                    <div className="flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 sm:space-x-4">
                      <a href="mailto:johan@dgd.solutions" className="w-full sm:w-auto inline-flex items-center justify-center text-white bg-primary/80 hover:bg-primary px-6 py-3 rounded-lg transition-colors">
                        <Mail className="mr-2" size={18} /> Skicka e-post
                      </a>
                      
                      <button 
                        onClick={copyPhoneToClipboard}
                        className="w-full sm:w-auto inline-flex items-center justify-center text-white bg-secondary/50 hover:bg-secondary/70 px-6 py-3 rounded-lg transition-colors"
                      >
                        {copied ? (
                          <>
                            <Check className="mr-2" size={18} /> Kopierat!
                          </>
                        ) : (
                          <>
                            <Copy className="mr-2" size={18} /> 070 718 98 77
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                  
                  <p>
                    För snabbast möjliga svar, vänligen inkludera information om ditt projekt eller dina frågor 
                    direkt i ditt e-postmeddelande.
                  </p>
                </div>
                
                {/* 
                Contact form code is preserved here but commented out
                Uncomment and configure EmailJS to enable the form

                {submitStatus === 'success' && (
                  <div className="bg-green-500/20 p-4 rounded-lg flex items-center mb-6 border border-green-500/30">
                    <CheckCircle className="text-green-500 mr-3" />
                    <p className="text-white">Tack för ditt meddelande! Vi återkommer så snart som möjligt.</p>
                  </div>
                )}
                
                {submitStatus === 'error' && (
                  <div className="bg-red-500/20 p-4 rounded-lg flex items-center mb-6 border border-red-500/30">
                    <XCircle className="text-red-500 mr-3" />
                    <p className="text-white">Ett fel uppstod. Vänligen försök igen eller kontakta oss direkt via telefon.</p>
                  </div>
                )}
                
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-white/70 mb-2">Namn</label>
                      <input 
                        type="text" 
                        id="name" 
                        name="user_name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full bg-background/50 border border-white/10 rounded-lg p-3 text-white focus:border-primary focus:outline-none transition-colors"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-white/70 mb-2">E-post</label>
                      <input 
                        type="email" 
                        id="email" 
                        name="user_email"
                        value={formData.email}
                        onChange={handleChange}
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
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full bg-background/50 border border-white/10 rounded-lg p-3 text-white focus:border-primary focus:outline-none transition-colors"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-white/70 mb-2">Meddelande</label>
                    <textarea 
                      id="message" 
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      required
                      className="w-full bg-background/50 border border-white/10 rounded-lg p-3 text-white focus:border-primary focus:outline-none transition-colors resize-none"
                    ></textarea>
                  </div>
                  
                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-lg transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Skickar...' : 'Skicka'} 
                    <Send className="ml-2 w-4 h-4" />
                  </button>
                </form>
                */}
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
