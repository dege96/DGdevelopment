
import React from 'react';
import Layout from '@/components/Layout';
import { CircuitBoard, Cpu, Lightbulb, FileCode } from 'lucide-react';

const TechnicalSolutions = () => {
  return (
    <Layout>
      <section className="section-padding bg-secondary/10">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h1 className="heading-lg mb-6 animate-slideDown opacity-0" style={{ animationDelay: '0.2s' }}>Tekniska Lösningar</h1>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full animate-slideDown opacity-0" style={{ animationDelay: '0.4s' }}></div>
          </div>
          
          <div className="glass rounded-xl p-8 md:p-10 animate-slideUp opacity-0" style={{ animationDelay: '0.3s' }}>
            <div className="flex items-center mb-8">
              <div className="bg-secondary/50 p-4 rounded-lg mr-4">
                <CircuitBoard className="w-6 h-6 text-primary" />
              </div>
              <h2 className="heading-md text-white">Våra tekniska tjänster</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="glass p-6 rounded-lg hover:bg-white/5 transition-all">
                <div className="flex items-center mb-3">
                  <Cpu className="w-5 h-5 text-primary mr-2" />
                  <h3 className="text-lg font-medium text-white">Systemutveckling</h3>
                </div>
                <p className="text-white/80">Specialiserade på automation och styrsystem. Vi utvecklar skräddarsydda lösningar för komplexa tekniska utmaningar.</p>
              </div>
              
              <div className="glass p-6 rounded-lg hover:bg-white/5 transition-all">
                <div className="flex items-center mb-3">
                  <Lightbulb className="w-5 h-5 text-primary mr-2" />
                  <h3 className="text-lg font-medium text-white">Produktdesign</h3>
                </div>
                <p className="text-white/80">Från idé till färdig produkt. Vi hjälper er att utveckla innovativa produkter med fokus på funktion och användarvänlighet.</p>
              </div>
              
              <div className="glass p-6 rounded-lg hover:bg-white/5 transition-all">
                <div className="flex items-center mb-3">
                  <CircuitBoard className="w-5 h-5 text-primary mr-2" />
                  <h3 className="text-lg font-medium text-white">Elektronik/PLC/uController-styrning</h3>
                </div>
                <p className="text-white/80">Vi designar och implementerar elektroniska styrsystem för optimal prestanda i olika miljöer.</p>
              </div>
              
              <div className="glass p-6 rounded-lg hover:bg-white/5 transition-all">
                <div className="flex items-center mb-3">
                  <CircuitBoard className="w-5 h-5 text-primary mr-2" />
                  <h3 className="text-lg font-medium text-white">Pneumatiklösningar</h3>
                </div>
                <p className="text-white/80">Utveckling av pneumatiska system för industriella applikationer med fokus på effektivitet och driftsäkerhet.</p>
              </div>
              
              <div className="glass p-6 rounded-lg hover:bg-white/5 transition-all">
                <div className="flex items-center mb-3">
                  <FileCode className="w-5 h-5 text-primary mr-2" />
                  <h3 className="text-lg font-medium text-white">Programmering C++</h3>
                </div>
                <p className="text-white/80">Avancerad mjukvaruutveckling i C++ för högpresterande applikationer och realtidssystem.</p>
              </div>
              
              <div className="glass p-6 rounded-lg hover:bg-white/5 transition-all">
                <div className="flex items-center mb-3">
                  <Lightbulb className="w-5 h-5 text-primary mr-2" />
                  <h3 className="text-lg font-medium text-white">Teknisk projektledning</h3>
                </div>
                <p className="text-white/80">Vi tar helhetsansvar för tekniska projekt, från planering till genomförande, med fokus på att uppnå projektmålen.</p>
              </div>
              
              <div className="glass p-6 rounded-lg hover:bg-white/5 transition-all">
                <div className="flex items-center mb-3">
                  <FileCode className="w-5 h-5 text-primary mr-2" />
                  <h3 className="text-lg font-medium text-white">Leverantörsutvärdering (audit)</h3>
                </div>
                <p className="text-white/80">Oberoende utvärdering av leverantörer för att säkerställa kvalitet och kapacitet.</p>
              </div>
              
              <div className="glass p-6 rounded-lg hover:bg-white/5 transition-all">
                <div className="flex items-center mb-3">
                  <FileCode className="w-5 h-5 text-primary mr-2" />
                  <h3 className="text-lg font-medium text-white">Konstruktions- och tillverkningsunderlag</h3>
                </div>
                <p className="text-white/80">Vi tar fram kompletta underlag för tillverkning, inklusive schema, CAD och 2D-ritningar.</p>
              </div>
              
              <div className="glass p-6 rounded-lg hover:bg-white/5 transition-all">
                <div className="flex items-center mb-3">
                  <CircuitBoard className="w-5 h-5 text-primary mr-2" />
                  <h3 className="text-lg font-medium text-white">Tillverkning och installation</h3>
                </div>
                <p className="text-white/80">Vi hanterar tillverkning och installation av tekniska lösningar med fokus på kvalitet och driftsäkerhet.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default TechnicalSolutions;
