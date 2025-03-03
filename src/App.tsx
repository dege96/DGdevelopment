
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Design from "./pages/Design";
import TechnicalDesign from "./pages/design/TechnicalDesign";
import CADVisualization from "./pages/design/CADVisualization";
import FormDesign from "./pages/design/FormDesign";
import PhotoDocumentation from "./pages/design/PhotoDocumentation";
import ModelFormDesign from "./pages/ModelFormDesign";
import TechnicalSolutions from "./pages/TechnicalSolutions";
import CADCAMVisualization from "./pages/CADCAMVisualization";
import PhotoDocumentationPage from "./pages/PhotoDocumentation";
import ProductEvent from "./pages/gallery/ProductEvent";
import Nature from "./pages/gallery/Nature";
import Contact from "./pages/Contact";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          
          {/* Design section */}
          <Route path="/design" element={<Design />} />
          <Route path="/design/teknisk-design" element={<TechnicalDesign />} />
          <Route path="/design/cad-visualisering" element={<CADVisualization />} />
          <Route path="/design/formgivning" element={<FormDesign />} />
          <Route path="/design/foto" element={<PhotoDocumentation />} />
          
          {/* Model and Form Design */}
          <Route path="/modell-formgivning" element={<ModelFormDesign />} />
          
          {/* Technical Solutions */}
          <Route path="/tekniska-losningar" element={<TechnicalSolutions />} />
          
          {/* CAD/CAM & Visualization */}
          <Route path="/cad-cam-visualisering" element={<CADCAMVisualization />} />
          
          {/* Photo & Documentation */}
          <Route path="/foto-dokumentation" element={<PhotoDocumentationPage />} />
          <Route path="/foto-dokumentation/produkt-event" element={<ProductEvent />} />
          <Route path="/foto-dokumentation/natur" element={<Nature />} />
          
          {/* Contact */}
          <Route path="/kontakt" element={<Contact />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
