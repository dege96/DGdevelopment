import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from 'react';
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// Tjänster översikt
import Tjanster from "./pages/Tjanster";

// Design & Formgivning pages
import DesignFormgivning from "./pages/DesignFormgivning";
import TekniskDesign from "./pages/design/TekniskDesign";
import CadVisualisering from "./pages/design/CadVisualisering";
import Formgivning from "./pages/design/Formgivning";
import FotoDokumentering from "./pages/design/FotoDokumentering";

// Tekniska Lösningar pages
import TekniskaLosningar from "./pages/TekniskaLosningar";
import CadCam from "./pages/tekniska/CadCam";
import Prototyp from "./pages/tekniska/Prototyp";
import Tillverkning from "./pages/tekniska/Tillverkning";

// Media pages
import Produktfotografering from "./pages/media/Produktfotografering";
import Eventdokumentation from "./pages/media/Eventdokumentation";
import Naturfoto from "./pages/media/Naturfoto";

// Other pages
import OmOss from "./pages/OmOss";
import Kontakt from "./pages/Kontakt";

const queryClient = new QueryClient();

// Global komponent för hash-scroll
const ScrollToHash = () => {
  const location = useLocation();
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#','');
      // Timeout för att säkerställa att DOM är färdigrenderad
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 50);
    }
  }, [location]);
  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToHash />
        <Routes>
          <Route path="/" element={<Index />} />
          
          {/* Tjänster översikt */}
          <Route path="/tjanster" element={<Tjanster />} />
          
          {/* Design & Formgivning routes */}
          <Route path="/design-formgivning" element={<DesignFormgivning />} />
          <Route path="/design-formgivning/teknisk-design" element={<TekniskDesign />} />
          <Route path="/design-formgivning/cad-visualisering" element={<CadVisualisering />} />
          <Route path="/design-formgivning/formgivning" element={<Formgivning />} />
          <Route path="/design-formgivning/foto-dokumentering" element={<FotoDokumentering />} />
          
          {/* Nya rutter för Design & Formgivning */}
          <Route path="/tjanster/design-formgivning" element={<DesignFormgivning />} />
          <Route path="/tjanster/design-formgivning/teknisk-design" element={<TekniskDesign />} />
          <Route path="/tjanster/design-formgivning/cad-visualisering" element={<CadVisualisering />} />
          <Route path="/tjanster/design-formgivning/formgivning" element={<Formgivning />} />
          <Route path="/tjanster/design-formgivning/foto-dokumentering" element={<FotoDokumentering />} />
          
          {/* Tekniska Lösningar routes */}
          <Route path="/tekniska-losningar" element={<TekniskaLosningar />} />
          <Route path="/tekniska-losningar/cad-cam" element={<CadCam />} />
          <Route path="/tekniska-losningar/prototyp" element={<Prototyp />} />
          <Route path="/tekniska-losningar/tillverkning" element={<Tillverkning />} />
          
          {/* Nya rutter för Tekniska Lösningar */}
          <Route path="/tjanster/tekniska-losningar" element={<TekniskaLosningar />} />
          <Route path="/tjanster/tekniska-losningar/systemutveckling" element={<CadCam />} />
          <Route path="/tjanster/tekniska-losningar/elektronik" element={<Prototyp />} />
          <Route path="/tjanster/tekniska-losningar/konstruktion" element={<Tillverkning />} />
          
          {/* Nya rutter för Prototyper & Specialtillverkning */}
          <Route path="/tjanster/prototyper" element={<Prototyp />} />
          <Route path="/tjanster/prototyper/prototypframstallning" element={<Prototyp />} />
          <Route path="/tjanster/prototyper/3d-print-laser" element={<Prototyp />} />
          <Route path="/tjanster/prototyper/modellbygge" element={<Prototyp />} />
          
          {/* Nya rutter för Tillverkningsmetoder */}
          <Route path="/tjanster/tillverkningsmetoder" element={<Tillverkning />} />
          <Route path="/tjanster/tillverkningsmetoder/cnc-laser" element={<Tillverkning />} />
          <Route path="/tjanster/tillverkningsmetoder/formtillverkning" element={<Tillverkning />} />
          <Route path="/tjanster/tillverkningsmetoder/laminering-gjutning" element={<Tillverkning />} />
          
          {/* Media routes (använder FotoDokumentering som huvudsida) */}
          <Route path="/media" element={<FotoDokumentering />} />
          <Route path="/media/produktfotografering" element={<Produktfotografering />} />
          <Route path="/media/eventdokumentation" element={<Eventdokumentation />} />
          <Route path="/media/naturfoto" element={<Naturfoto />} />
          
          {/* Other routes */}
          <Route path="/om-oss" element={<OmOss />} />
          <Route path="/kontakt" element={<Kontakt />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
