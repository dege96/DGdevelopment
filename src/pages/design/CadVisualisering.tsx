import React from 'react';
import GenericDetailPage from '@/components/GenericDetailPage';
import { Box, Layers, Palette, PenLine } from 'lucide-react';
import { Link } from 'react-router-dom';

const CadVisualisering = () => {
  return (
    <GenericDetailPage
      title="CAD & Visualisering"
      subtitle="Professionell visualisering och teknisk design för att ge liv åt dina idéer"
      backLink="/design-formgivning"
      backText="Design & Formgivning"
      sections={[
        [
          {
            title: "2D/3D visualisering",
            icon: <Box className="text-primary mr-3" size={24} />,
            description: (
              <p>
                Vi skapar detaljerade 2D- och 3D-visualiseringar med hjälp av avancerade CAD-verktyg och 
                renderingstekniker. Våra visualiseringar hjälper dig att se och förstå din produkt eller design 
                innan den fysiskt tillverkas.
              </p>
            )
          },
          {
            title: "Formdesign & Formtillverkning",
            icon: <Layers className="text-primary mr-3" size={24} />,
            description: (
              <>
                <p className="mb-4">
                  Vi designar och tillverkar former för olika produktionsprocesser, från enklare prototyper till 
                  komplexa produktionsformar. Våra designers arbetar nära produktionsteamet för att säkerställa 
                  optimala resultat.
                </p>
                <p>
                  <Link to="/design-formgivning/formgivning" className="text-primary hover:underline">
                    Läs mer om vår formtillverkning
                  </Link>
                </p>
              </>
            )
          },
          {
            title: "Illustration & Design",
            icon: <Palette className="text-primary mr-3" size={24} />,
            description: (
              <>
                <p className="mb-4">
                  Vårt designteam erbjuder professionella illustrations- och designtjänster, inklusive bildhantering 
                  och foto-retuschering. Vi hjälper dig att förmedla ditt budskap visuellt och stärka din varumärkesidentitet.
                </p>
                <p>
                  <Link to="/design-formgivning/foto-dokumentering" className="text-primary hover:underline">
                    Läs mer om våra bildbehandlingstjänster
                  </Link>
                </p>
              </>
            )
          },
          {
            title: "Konstruktionsritning",
            icon: <PenLine className="text-primary mr-3" size={24} />,
            description: (
              <p>
                Vi skapar detaljerade konstruktionsritningar inom mekanik, elektronik och elektromekanik. 
                Våra ritningar följer branschstandarder och innehåller all nödvändig information för tillverkning 
                och montering av din produkt.
              </p>
            )
          }
        ]
      ]}
    />
  );
};

export default CadVisualisering;
