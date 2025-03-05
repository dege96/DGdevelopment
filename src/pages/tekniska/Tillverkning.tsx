import React from 'react';
import GenericDetailPage from '@/components/GenericDetailPage';
import { Layers3, Hammer, Cpu, Code } from 'lucide-react';

const Tillverkning = () => {
  return (
    <GenericDetailPage
      title="Tillverkningsmetoder"
      subtitle="Avancerade och traditionella tillverkningsmetoder för dina unika projekt"
      backLink="/tekniska-losningar"
      backText="Tekniska Lösningar"
      sections={[
        [],
        [
          {
            title: "Kombinerad tillverkningsmetodik",
            icon: <Layers3 className="text-primary mr-3" size={24} />,
            description: (
              <>
                <p className="mb-4">
                  Vi kombinerar frihandsarbete och traditionellt hantverk med moderna tillverkningsprocesser 
                  för att uppnå optimala resultat för ditt projekt. Denna flexibla metodik gör att vi kan anpassa 
                  vår tillverkningsprocess efter dina specifika behov och krav.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                  <div className="p-5 bg-white/5 rounded-lg">
                    <h4 className="text-lg font-semibold text-white mb-3">Avverkande bearbetning</h4>
                    <ul className="space-y-2 text-white/80">
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span>CNC-Fräsning</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span>Vattenskärning</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span>Laserskärning</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span>Annan avverkande bearbetning</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="p-5 bg-white/5 rounded-lg">
                    <h4 className="text-lg font-semibold text-white mb-3">Additiv tillverkning</h4>
                    <ul className="space-y-2 text-white/80">
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span>Vacuum-laminering</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span>Formgjutning</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span>3D-printning</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </>
            )
          }
        ],
        [
          {
            title: "Elektronik & Styrning",
            icon: <Cpu className="text-primary mr-3" size={24} />,
            description: (
              <p>
                Vi erbjuder omfattande lösningar inom elektronik, PLC och mikrocontroller-styrning samt 
                pneumatiklösningar. Våra styrningssystem är skräddarsydda för att passa dina 
                specifika krav och kan integreras med befintliga system eller designas från grunden.
              </p>
            )
          },
          {
            title: "Programmering",
            icon: <Code className="text-primary mr-3" size={24} />,
            description: (
              <p>
                Vi utför programmering i C++ för att skapa robusta och effektiva styrprogram för 
                dina tekniska lösningar. Vår programmeringskompetens säkerställer att din hårdvara 
                fungerar optimalt och kan anpassas efter dina specifika behov.
              </p>
            )
          },
          {
            title: "Specialteknik",
            icon: <Hammer className="text-primary mr-3" size={24} />,
            description: (
              <>
                <p className="mb-4">
                  Vi har specialistkompetens inom följande områden:
                </p>
                <ul className="space-y-2 text-white/80 ml-4">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Silikonavgjutning för extremt noggrann detaljåtergivning</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>ColdMetal (metallimitation), glas/is eller alternativa ytbeläggningar</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Patinering och andra textur- och färgeffekter</span>
                  </li>
                </ul>
              </>
            )
          }
        ]
      ]}
    />
  );
};

export default Tillverkning;
