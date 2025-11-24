import React from 'react';
import GenericPage from '@/components/GenericPage';
import { CircuitBoard, Cpu, Layers3 } from 'lucide-react';

const TekniskaLosningar = () => {
  return (
    <GenericPage
      title="Tekniska Lösningar"
      subtitle="Skräddarsydda tekniska lösningar för ditt projekt"
      description="Vi erbjuder ett brett utbud av tekniska lösningar och tillverkningsmetoder för att hjälpa dig förverkliga dina idéer. Från avancerad CAD/CAM-visualisering och prototypframställning till olika tillverkningsmetoder, har vårt team den expertis som krävs för att leverera högkvalitativa resultat. Utforska våra tekniska tjänster nedan för att lära dig mer om vad vi kan erbjuda."
      gridCols={3}
      sections={[
        {
          id: "cad-cam",
          title: "CAD/CAM & Teknisk Visualisering",
          icon: <CircuitBoard className="text-primary" size={24} />,
          description: "Avancerad 2D/3D visualisering och konstruktionsritningar för dina tekniska projekt.",
          link: "/tekniska-losningar/cad-cam"
        },
        {
          id: "prototyp",
          title: "Prototypframställning",
          icon: <Cpu className="text-primary" size={24} />,
          description: "3D-utskrifter, modellbygge och formtillverkning för att skapa fysiska prototyper.",
          link: "/tekniska-losningar/prototyp"
        },
        {
          id: "tillverkning",
          title: "Tillverkning",
          icon: <Layers3 className="text-primary" size={24} />,
          description: "Kombinationer av traditionellt hantverk och moderna tillverkningsmetoder.",
          link: "/tekniska-losningar/tillverkning"
        }
      ]}
    />
  );
};

export default TekniskaLosningar;
