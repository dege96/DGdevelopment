
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Design from "./pages/Design";
import ModelFormgivning from "./pages/ModelFormgivning";
import TekniskaLosningar from "./pages/TekniskaLosningar";
import CadVisualisering from "./pages/CadVisualisering";
import FotoDokumentation from "./pages/FotoDokumentation";
import ProduktEvent from "./pages/ProduktEvent";
import Natur from "./pages/Natur";
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
          <Route path="/design" element={<Design />} />
          <Route path="/modell-formgivning" element={<ModelFormgivning />} />
          <Route path="/tekniska-losningar" element={<TekniskaLosningar />} />
          <Route path="/cad-visualisering" element={<CadVisualisering />} />
          <Route path="/foto-dokumentation" element={<FotoDokumentation />} />
          <Route path="/foto-dokumentation/produkt-event" element={<ProduktEvent />} />
          <Route path="/foto-dokumentation/natur" element={<Natur />} />
          <Route path="/kontakt" element={<Kontakt />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
