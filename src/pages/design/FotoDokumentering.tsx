import React from 'react';
import GenericPage from '@/components/GenericPage';
import { Camera, Film, Image } from 'lucide-react';
import { Link } from 'react-router-dom';

// Sidan FotoDokumentering ska nu visa samma innehåll som tidigare Media-sida
const FotoDokumentering = () => {
  return (
    <GenericPage
      title="Foto & Dokumentering"
      subtitle="Professionell fotografi och dokumentation"
      description="Vi erbjuder professionella foto- och dokumentationstjänster som fångar varje ögonblick och presenterar dina produkter, projekt eller event på bästa sätt. Vårt team kombinerar teknisk skicklighet med kreativ känsla för att leverera material av högsta kvalitet."
      gridCols={3}
      sections={[
        {
          id: "produktfotografering",
          title: "Produktfotografering",
          icon: <Camera className="text-primary" size={24} />,
          description: "Professionell fotografering av produkter för marknadsföring, e-handel och dokumentation.",
          link: "/media/produktfotografering"
        },
        {
          id: "eventdokumentation",
          title: "Eventdokumentation",
          icon: <Film className="text-primary" size={24} />,
          description: "Omfattande dokumentation av företagsevent, konferenser, mässor och andra tillfällen.",
          link: "/media/eventdokumentation"
        },
        {
          id: "naturfoto",
          title: "Naturfotogalleri",
          icon: <Image className="text-primary" size={24} />,
          description: "Utforska vår samling av högkvalitativa naturfotografier.",
          link: "/media/naturfoto"
        }
      ]}
      specialSections={[
        {
          title: "Mer om våra mediatjänster",
          icon: <Image className="text-primary mr-3" size={24} />,
          content: (
            <div className="space-y-8">
              {/* Eventfotografering */}
              <div>
                <h4 className="text-lg font-semibold text-white mb-3">Eventfotografering</h4>
                <p className="mb-4">
                  Våra fotografer dokumenterar allt från företagskonferenser och produktlanseringar till mässor och festliga tillställningar. Med en diskret närvaro fångar vi stämning, viktiga ögonblick och detaljer som ger ditt event ett bestående värde.
                </p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Diskret närvaro på plats</li>
                  <li>Fokus på stämning, detaljer &amp; nyckelögonblick</li>
                  <li>Material anpassat för intern och extern kommunikation</li>
                </ul>
              </div>

              {/* Efterbearbetning */}
              <div>
                <h4 className="text-lg font-semibold text-white mb-3">Efterbearbetning &amp; Leverans</h4>
                <p className="mb-4">
                  Efter eventet går vi igenom allt material och väljer ut de bästa bilderna. Varje bild färgkorrigeras och retuscheras för att säkerställa högsta kvalitet.
                </p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Urval av bästa bilderna</li>
                  <li>Färgkorrigering &amp; retuschering</li>
                  <li>Leverans i högupplöst &amp; webbanpassat format</li>
                  <li>Möjlighet till bildpresentationer &amp; montages</li>
                </ul>
              </div>
            </div>
          )
        }
      ]}
    />
  );
};

export default FotoDokumentering;
