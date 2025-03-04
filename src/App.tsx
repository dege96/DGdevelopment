import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

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
import Media from "./pages/Media";
import Produktfotografering from "./pages/media/Produktfotografering";
import Eventdokumentation from "./pages/media/Eventdokumentation";
import Naturfoto from "./pages/media/Naturfoto";

// Other pages
import OmOss from "./pages/OmOss";
import Kontakt from "./pages/Kontakt";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          
          {/* Design & Formgivning routes */}
          <Route path="/design-formgivning" element={<DesignFormgivning />} />
          <Route path="/design-formgivning/teknisk-design" element={<TekniskDesign />} />
          <Route path="/design-formgivning/cad-visualisering" element={<CadVisualisering />} />
          <Route path="/design-formgivning/formgivning" element={<Formgivning />} />
          <Route path="/design-formgivning/foto-dokumentering" element={<FotoDokumentering />} />
          
          {/* Tekniska Lösningar routes */}
          <Route path="/tekniska-losningar" element={<TekniskaLosningar />} />
          <Route path="/tekniska-losningar/cad-cam" element={<CadCam />} />
          <Route path="/tekniska-losningar/prototyp" element={<Prototyp />} />
          <Route path="/tekniska-losningar/tillverkning" element={<Tillverkning />} />
          
          {/* Media routes */}
          <Route path="/media" element={<Media />} />
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
