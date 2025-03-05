import React from 'react';
import GenericDetailPage from '@/components/GenericDetailPage';
import { Cpu, CircuitBoard, Terminal, Code } from 'lucide-react';

const TekniskDesign = () => {
  return (
    <GenericDetailPage
      title="Teknisk Design"
      subtitle="Vårt team tillhandahåller expertis inom teknisk design, från systemutveckling till projektledning och praktiska lösningar."
      backLink="/design-formgivning"
      backText="Design & Formgivning"
      sections={[
        [
          {
            title: "Systemutveckling",
            icon: <CircuitBoard className="text-primary mr-3" size={24} />,
            description: (
              <p>
                Vi utvecklar skräddarsydda automations- och styrsystem anpassade för din verksamhets unika behov. 
                Våra lösningar kombinerar teknisk kunskap med praktisk implementering för optimala resultat.
              </p>
            )
          },
          {
            title: "Produktdesign",
            icon: <Cpu className="text-primary mr-3" size={24} />,
            description: (
              <p>
                Från koncept till färdig produkt hjälper vi dig att utveckla innovativa lösningar med fokus på funktionalitet, 
                användarvänlighet och estetik. Vi tar hänsyn till både tekniska krav och marknadens behov.
              </p>
            )
          }
        ],
        [
          {
            title: "Elektronik & Styrning",
            icon: <Terminal className="text-primary mr-3" size={24} />,
            description: (
              <p>
                Vi erbjuder expertis inom elektronik, PLC, mikrocontroller-styrning och pneumatiklösningar. 
                Vårt team anpassar lösningar efter dina specifika tekniska förutsättningar och mål.
              </p>
            )
          },
          {
            title: "Programmering",
            icon: <Code className="text-primary mr-3" size={24} />,
            description: (
              <p>
                Vi tillhandahåller även C++ programmering för att implementera avancerade funktioner i dina system.
              </p>
            )
          }
        ],
        [
          {
            title: "Teknisk projektledning",
            icon: <Code className="text-primary mr-3" size={24} />,
            description: (
              <p>
                Vi erbjuder komplett projektledning för att säkerställa att din tekniska lösning levereras enligt 
                plan, inom budget och med önskad kvalitet. Vår erfarenhet hjälper dig att undvika fallgropar och 
                optimera utvecklingsprocessen.
              </p>
            )
          }
        ]
      ]}
    />
  );
};

export default TekniskDesign;
