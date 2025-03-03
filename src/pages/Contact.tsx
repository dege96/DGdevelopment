
import React from 'react';
import Layout from '@/components/Layout';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';

const Contact = () => {
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // In a real scenario, you would send this data to a server
    toast({
      title: "Meddelande skickat",
      description: "Vi återkommer till dig så snart som möjligt.",
    });
  };
  
  return (
    <Layout>
      <section className="section-padding bg-secondary/10">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h1 className="heading-lg mb-6 animate-slideDown opacity-0" style={{ animationDelay: '0.2s' }}>Kontakta oss</h1>
            <p className="max-w-3xl mx-auto text-white/70 mb-8 animate-slideDown opacity-0" style={{ animationDelay: '0.4s' }}>
              Vi hjälper dig gärna med dina frågor och projekt. Kontakta oss via formuläret eller direkt genom våra kontaktuppgifter.
            </p>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full animate-slideDown opacity-0" style={{ animationDelay: '0.6s' }}></div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="glass rounded-xl p-8 animate-slideUp opacity-0" style={{ animationDelay: '0.3s' }}>
              <h2 className="heading-md mb-6 text-white">Skicka ett meddelande</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-white/70 mb-2">Namn</label>
                    <Input 
                      id="name" 
                      placeholder="Ditt namn" 
                      required 
                      className="bg-background/50 border-white/10 focus:border-primary text-white"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-white/70 mb-2">E-post</label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="Din e-postadress" 
                      required 
                      className="bg-background/50 border-white/10 focus:border-primary text-white"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-white/70 mb-2">Ämne</label>
                  <Input 
                    id="subject" 
                    placeholder="Ämne för ditt meddelande" 
                    required 
                    className="bg-background/50 border-white/10 focus:border-primary text-white"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-white/70 mb-2">Meddelande</label>
                  <Textarea 
                    id="message" 
                    placeholder="Skriv ditt meddelande här..." 
                    required 
                    className="bg-background/50 border-white/10 focus:border-primary text-white min-h-[150px]"
                  />
                </div>
                
                <Button type="submit" className="bg-primary hover:bg-primary/80 text-white w-full md:w-auto">
                  <Send className="mr-2 h-4 w-4" /> Skicka meddelande
                </Button>
              </form>
            </div>
            
            <div className="space-y-8">
              <div className="glass rounded-xl p-8 animate-slideUp opacity-0" style={{ animationDelay: '0.5s' }}>
                <h2 className="heading-md mb-6 text-white">Kontaktuppgifter</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-secondary/50 p-3 rounded-lg mr-4">
                      <Mail className="text-primary h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-white font-medium">E-post</h3>
                      <a href="mailto:info@dgd.solutions" className="text-white/70 hover:text-primary">info@dgd.solutions</a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-secondary/50 p-3 rounded-lg mr-4">
                      <Phone className="text-primary h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-white font-medium">Telefon</h3>
                      <a href="tel:+46701234567" className="text-white/70 hover:text-primary">+46 70 123 45 67</a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-secondary/50 p-3 rounded-lg mr-4">
                      <MapPin className="text-primary h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-white font-medium">Adress</h3>
                      <p className="text-white/70">
                        DGD Solutions AB<br />
                        Exempelgatan 123<br />
                        123 45 Stockholm<br />
                        Sverige
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="glass rounded-xl p-8 animate-slideUp opacity-0" style={{ animationDelay: '0.7s' }}>
                <h2 className="heading-md mb-6 text-white">Företagsuppgifter</h2>
                
                <div className="space-y-3 text-white/70">
                  <p><span className="text-white font-medium">Organisationsnummer:</span> 123456-7890</p>
                  <p><span className="text-white font-medium">Momsregistreringsnr:</span> SE123456789001</p>
                  <p><span className="text-white font-medium">Bankgiro:</span> 123-4567</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
