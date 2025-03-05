import React from 'react';
import GenericPage from '@/components/GenericPage';
import { Cpu, Palette, Box, Camera } from 'lucide-react';

const DesignFormgivning = () => {
  return (
    <GenericPage
      title="Design & Formgivning"
      subtitle="Idé/problemlösning, Helhetsansvar för tillverkning, Samordning, installation & driftsättning. Projektplan, manualer och annan dokumentation"
      description="Vi erbjuder kompletta designtjänster som hjälper dig att ta dina idéer från koncept till verklighet. Vårt team har expertis inom flera designområden och kan ge dig skräddarsydda lösningar anpassade till dina specifika behov och mål. Utforska våra designtjänster nedan för att lära dig mer om hur vi kan hjälpa dig."
      gridCols={2}
      sections={[
        {
          id: "teknisk-design",
          title: "Teknisk Design",
          icon: <Cpu className="text-primary" size={24} />,
          description: "Systemutveckling, automation, produktdesign och teknisk projektledning för innovativa lösningar.",
          link: "/design-formgivning/teknisk-design"
        },
        {
          id: "cad-visualisering",
          title: "CAD & Visualisering",
          icon: <Box className="text-primary" size={24} />,
          description: "2D/3D visualisering, formdesign och konstruktionsritningar för att visualisera dina idéer.",
          link: "/design-formgivning/cad-visualisering"
        },
        {
          id: "formgivning",
          title: "Formgivning",
          icon: <Palette className="text-primary" size={24} />,
          description: "3D design, traditionell skulptering, lasergravering och formtillverkning för fysiska prototyper.",
          link: "/design-formgivning/formgivning"
        },
        {
          id: "foto-dokumentering",
          title: "Foto & Dokumentering",
          icon: <Camera className="text-primary" size={24} />,
          description: "Professionell fotografering, retuschering och dokumentation för att presentera dina produkter.",
          link: "/design-formgivning/foto-dokumentering"
        }
      ]}
    />
  );
};

export default DesignFormgivning;
