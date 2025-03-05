import React from 'react';
import GenericDetailPage from '@/components/GenericDetailPage';
import { Printer, Shapes, Zap, Box } from 'lucide-react';

const Formgivning = () => {
  return (
    <GenericDetailPage
      title="Formgivning"
      subtitle="Skapa fysiska modeller och prototyper med avancerade tekniker och traditionellt hantverk"
      backLink="/design-formgivning"
      backText="Design & Formgivning"
      sections={[
        [
          {
            title: "3D design & 3D print",
            icon: <Printer className="text-primary mr-3" size={24} />,
            description: (
              <p>
                Vi erbjuder omfattande 3D-designtjänster och utskrifter med hög precision. Våra 3D-utskrifter 
                kan tillverkas som enstaka exemplar eller i kortare serier, med mått upp till 2100x80x80 cm. Vi 
                inkluderar alltid design av modellen för att säkerställa optimala resultat.
              </p>
            )
          },
          {
            title: "Traditionell skulptering",
            icon: <Shapes className="text-primary mr-3" size={24} />,
            description: (
              <p>
                Vårt team behärskar traditionella skulpteringstekniker som kompletterar våra digitala och tekniska 
                metoder. Denna kombination av klassiska och moderna metoder ger oss möjlighet att skapa unika och 
                detaljerade modeller med hög kvalitet.
              </p>
            )
          },
          {
            title: "Lasergravering",
            icon: <Zap className="text-primary mr-3" size={24} />,
            description: (
              <p>
                Vi erbjuder lasergraveringstjänster för text, dekoration och fotogravering på material som trä, 
                plast, metall och mycket mer. Vår laserteknik ger exakta och detaljerade resultat för både 
                funktionella och dekorativa ändamål.
              </p>
            )
          },
          {
            title: "Formtillverkning & Modellbygge",
            icon: <Box className="text-primary mr-3" size={24} />,
            description: (
              <>
                <p className="mb-4">
                  Vi specialiserar oss på formtillverkning, både nytillverkning och avgjutning. Detta inkluderar 
                  silikonavgjutning för extremt noggrann detaljåtergivning samt ColdMetal (metallimitation), glas/is 
                  eller alternativa ytbeläggningar.
                </p>
                <p>
                  Vi bygger även "klassiska" modeller för utställningar och konceptstudier, med eller utan ljussättning 
                  och mekatronik. Våra modeller anpassas helt efter dina specifika behov och krav.
                </p>
              </>
            )
          }
        ]
      ]}
    />
  );
};

export default Formgivning;
