import React from 'react';
import GenericPage from '@/components/GenericPage';
import { Camera, Film, Image } from 'lucide-react';

const Media = () => {
  return (
    <GenericPage
      title="Media"
      subtitle="Professionell fotografi och dokumentation"
      description="Vi erbjuder professionella mediatjänster för att dokumentera och presentera dina produkter, event och annat innehåll. Vårt team av erfarna fotografer kombinerar teknisk kompetens med ett kreativt öga för att leverera högkvalitativa resultat. Utforska våra mediatjänster nedan."
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
    />
  );
};

export default Media;
