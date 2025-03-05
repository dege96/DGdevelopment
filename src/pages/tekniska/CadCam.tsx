import React from 'react';
import GenericDetailPage from '@/components/GenericDetailPage';
import { CircuitBoard, BookOpen } from 'lucide-react';

const CadCam = () => {
  return (
    <GenericDetailPage
      title="CAD/CAM & Teknisk Visualisering"
      subtitle="Avancerade visuella och tekniska lösningar för din produktutveckling"
      backLink="/tekniska-losningar"
      backText="Tekniska Lösningar"
      sections={[
        [
          {
            title: "2D/3D visualisering",
            icon: <CircuitBoard className="text-primary mr-3" size={24} />,
            description: (
              <>
                <p className="mb-4">
                  Vi erbjuder avancerade CAD-tjänster och 3D-renderingar för att visualisera dina produkter 
                  eller projekt före tillverkning. Våra visualiseringar hjälper dig att identifiera potential 
                  för förbättringar, kommunicera din vision till intressenter och optimera designen innan 
                  fysisk produktion.
                </p>
                <p className="mb-4">
                  Med vår erfarenhet av teknisk visualisering kan vi skapa allt från enkla 2D-ritningar till 
                  fotorealistiska 3D-renderingar och animationer av dina produkter eller system.
                </p>
              </>
            )
          },
          {
            title: "Konstruktionsritning",
            icon: <BookOpen className="text-primary mr-3" size={24} />,
            description: (
              <>
                <p className="mb-4">
                  Vi skapar detaljerade konstruktionsritningar inom områdena mekanik, elektronik och 
                  elektromekanik. Våra ritningar följer industristandard och innehåller all nödvändig 
                  information för att säkerställa korrekt tillverkning och montering.
                </p>
                <p className="mb-4">
                  Med våra konstruktionsritningar får du inte bara en visuell representation av din 
                  produkt, utan också en komplett specifikation som kan användas för kostnadsberäkning, 
                  materialanskaffning och produktionsplanering.
                </p>
              </>
            )
          }
        ]
      ]}
      specialSections={[
        {
          content: (
            <p>
              Våra CAD/CAM-tjänster integreras sömlöst med våra prototypframställnings- och 
              tillverkningstjänster, vilket ger dig en komplett lösning från design till färdig produkt. 
              Oavsett om ditt projekt är stort eller litet, erbjuder vi den expertis och de verktyg som krävs 
              för att göra din vision till verklighet.
            </p>
          )
        }
      ]}
    />
  );
};

export default CadCam;
