
import React from 'react';
import Layout from '@/components/Layout';
import { Code, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const TechnicalDesign = () => {
  return (
    <Layout>
      <section className="section-padding bg-secondary/10">
        <div className="container mx-auto">
          <Link to="/design" className="inline-flex items-center text-primary hover:text-white transition-colors mb-8">
            <ArrowLeft className="mr-2 w-4 h-4" /> Tillbaka till Design
          </Link>
          
          <div className="glass rounded-xl p-8 md:p-10 mb-10 animate-slideDown opacity-0" style={{ animationDelay: '0.2s' }}>
            <div className="flex items-center mb-6">
              <div className="bg-secondary/50 p-4 rounded-lg mr-4">
                <Code className="w-6 h-6 text-primary" />
              </div>
              <h1 className="heading-lg text-white">Teknisk Design</h1>
            </div>
            
            <div className="space-y-6 text-white/80">
              <p>
                Vår tekniska designavdelning fokuserar på att utveckla avancerade tekniska lösningar för diverse behov.
                Med djup kunskap inom flera tekniska områden hjälper vi företag att förverkliga sina idéer från koncept till färdig produkt.
              </p>
              
              <h2 className="heading-md text-white mt-10 mb-4">Våra tjänster inom Teknisk Design</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="glass p-6 rounded-lg hover:bg-white/5 transition-all">
                  <h3 className="text-lg font-medium mb-3 text-white">Systemutveckling</h3>
                  <p>Specialiserade på automation och styrsystem för industriella tillämpningar. Vi designar skräddarsydda lösningar som ökar effektivitet och precision.</p>
                </div>
                
                <div className="glass p-6 rounded-lg hover:bg-white/5 transition-all">
                  <h3 className="text-lg font-medium mb-3 text-white">Produktdesign</h3>
                  <p>Från koncept till färdig produkt hjälper vi er att utveckla innovativa produkter som möter marknadens behov.</p>
                </div>
                
                <div className="glass p-6 rounded-lg hover:bg-white/5 transition-all">
                  <h3 className="text-lg font-medium mb-3 text-white">Elektronik/PLC/uController-styrning</h3>
                  <p>Vi designar och implementerar elektroniska styrsystem baserade på olika plattformar för optimal prestanda.</p>
                </div>
                
                <div className="glass p-6 rounded-lg hover:bg-white/5 transition-all">
                  <h3 className="text-lg font-medium mb-3 text-white">Pneumatiklösningar</h3>
                  <p>Utveckling av pneumatiska system för industriella applikationer med fokus på effektivitet och driftsäkerhet.</p>
                </div>
                
                <div className="glass p-6 rounded-lg hover:bg-white/5 transition-all">
                  <h3 className="text-lg font-medium mb-3 text-white">Programmering C++</h3>
                  <p>Avancerad mjukvaruutveckling i C++ för högpresterande applikationer och realtidssystem.</p>
                </div>
                
                <div className="glass p-6 rounded-lg hover:bg-white/5 transition-all">
                  <h3 className="text-lg font-medium mb-3 text-white">Teknisk projektledning</h3>
                  <p>Vi tar helhetsansvar för tekniska projekt, från planering till genomförande, med fokus på att uppnå projektmålen inom givna tidsramar och budget.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default TechnicalDesign;
