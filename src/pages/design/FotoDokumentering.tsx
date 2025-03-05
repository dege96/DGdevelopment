import React from 'react';
import GenericDetailPage from '@/components/GenericDetailPage';
import { Camera, FileEdit, Image } from 'lucide-react';
import { Link } from 'react-router-dom';

const FotoDokumentering = () => {
  return (
    <GenericDetailPage
      title="Foto & Dokumentering"
      subtitle="Professionella foto- och dokumentationstjänster för ditt projekt"
      backLink="/design-formgivning"
      backText="Design & Formgivning"
      sections={[
        [
          {
            title: "Fototjänster",
            icon: <Camera className="text-primary mr-3" size={24} />,
            description: (
              <>
                <p className="mb-4">
                  Vi erbjuder högkvalitativa fototjänster, både på plats hos dig eller i vår studio. Vårt team 
                  fotograferar produkter, events och annat med professionell utrustning och ett tränat öga för 
                  komposition och ljussättning.
                </p>
                <p>
                  Vi anpassar våra fotosessioner efter dina specifika behov, oavsett om det handlar om 
                  produktfotografering för e-handel, dokumentation av ett event eller bilder för marknadsföringsmaterial.
                </p>
              </>
            )
          },
          {
            title: "Retuschering & Formatering",
            icon: <FileEdit className="text-primary mr-3" size={24} />,
            description: (
              <>
                <p className="mb-4">
                  Efter fotograferingen erbjuder vi professionell bildbehandling, retuschering, formatering och 
                  montering. Vi säkerställer att dina bilder får rätt färgjusteringar, beskärning och andra 
                  nödvändiga justeringar för att uppnå bästa möjliga resultat.
                </p>
                <p>
                  Våra tjänster inkluderar även avancerad retuschering, borttagning av bakgrunder, skapande av 
                  bildkompositioner och anpassning av bilder för olika medier och användningsområden.
                </p>
              </>
            )
          }
        ]
      ]}
      specialSections={[
        {
          title: "Mer om våra mediatjänster",
          icon: <Image className="text-primary mr-3" size={24} />,
          content: (
            <>
              <p className="mb-4">
                För mer information om våra fototjänster för produkter och events, samt vårt naturfotogalleri, 
                besök vår mediasida:
              </p>
              <div className="flex space-x-4 mt-6">
                <Link 
                  to="/media" 
                  className="py-2 px-6 bg-primary/20 hover:bg-primary/30 text-white rounded-md transition-colors"
                >
                  Media
                </Link>
                <Link 
                  to="/media/naturfoto" 
                  className="py-2 px-6 bg-primary/20 hover:bg-primary/30 text-white rounded-md transition-colors"
                >
                  Naturfotogalleri
                </Link>
              </div>
            </>
          )
        }
      ]}
    />
  );
};

export default FotoDokumentering;
