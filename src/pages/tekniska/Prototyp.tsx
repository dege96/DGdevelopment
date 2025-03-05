import React from 'react';
import GenericDetailPage from '@/components/GenericDetailPage';
import { Printer, Box, Lightbulb } from 'lucide-react';

const Prototyp = () => {
  return (
    <GenericDetailPage
      title="Prototypframställning"
      subtitle="Omsätt dina idéer till fysiska prototyper med våra avancerade tillverkningsmetoder"
      backLink="/tekniska-losningar"
      backText="Tekniska Lösningar"
      sections={[
        [
          {
            title: "3D design & 3D print",
            icon: <Printer className="text-primary mr-3" size={24} />,
            description: (
              <>
                <p className="mb-4">
                  Våra 3D-designtjänster och 3D-utskrifter ger dig möjlighet att snabbt och kostnadseffektivt 
                  testa och utvärdera dina idéer. Vi erbjuder utskrifter av enstaka exemplar eller i 
                  korta serier med mått upp till 2100x80x80 cm.
                </p>
                <p className="mb-4">
                  Varje utskrift inkluderar design av modellen, vilket säkerställer att din prototyp 
                  optimeras för både form och funktion. Vårt team arbetar med dig för att förstå dina 
                  behov och skapa en prototyp som uppfyller dina krav.
                </p>
              </>
            )
          },
          {
            title: "Formtillverkning",
            icon: <Box className="text-primary mr-3" size={24} />,
            description: (
              <>
                <p className="mb-4">
                  Vi erbjuder omfattande tjänster inom formtillverkning, både nytillverkning och avgjutning. 
                  Med vår expertis kan vi skapa formar för olika tillverkningsprocesser, från enklare 
                  prototyper till produktionsklara formar.
                </p>
                <p className="mb-4">
                  Våra formar kan användas för gjutning i olika material och är designade för att ge 
                  optimala resultat med minimal efterbearbetning.
                </p>
              </>
            )
          },
          {
            title: "Modellbygge",
            icon: <Lightbulb className="text-primary mr-3" size={24} />,
            description: (
              <>
                <p className="mb-4">
                  Vi bygger "klassiska" modeller för utställningar, konceptstudier och andra ändamål. Våra 
                  modeller kan tillverkas med eller utan ljussättning och mekatronik, beroende på dina 
                  behov och önskemål.
                </p>
                <p className="mb-4">
                  Varje modell tillverkas med noggrann hänsyn till detaljer och finish, vilket säkerställer 
                  att slutresultatet håller högsta kvalitet och ger en korrekt representation av din design.
                </p>
                <div className="mt-8 p-6 bg-primary/10 rounded-lg border border-primary/30">
                  <h4 className="text-lg font-semibold text-white mb-2">Specialtjänster:</h4>
                  <ul className="space-y-2 text-white/80">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Silikonavgjutning för extremt noggrann detaljåtergivning</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>ColdMetal (metallimitation), glas/is och alternativa ytbeläggningar</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Patinering och andra textur- och färgeffekter</span>
                    </li>
                  </ul>
                </div>
              </>
            )
          }
        ]
      ]}
    />
  );
};

export default Prototyp;
