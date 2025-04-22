import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { HelmetProvider } from "react-helmet-async";
import ScrollToTop from "./components/ScrollToTop";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// Tjänster översikt
import Tjanster from "./pages/Tjanster";

// Tjänstesidor
import DesignFormgivning from "./pages/services/DesignFormgivning";
import TekniskaLosningar from "./pages/services/TekniskaLosningar";
import Prototyper from "./pages/services/Prototyper";
import FotoDokumentering from "./pages/services/FotoDokumentering";

// Other pages
import OmOss from "./pages/OmOss";
import Kontakt from "./pages/Kontakt";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Index />} />
            
            {/* Tjänster översikt */}
            <Route path="/tjanster" element={<Tjanster />} />
            
            {/* Tjänstesidor */}
            <Route path="/tjanster/design-formgivning" element={<DesignFormgivning />} />
            <Route path="/tjanster/tekniska-losningar" element={<TekniskaLosningar />} />
            <Route path="/tjanster/prototyper" element={<Prototyper />} />
            <Route path="/tjanster/foto-dokumentering" element={<FotoDokumentering />} />
            
            {/* Other routes */}
            <Route path="/om-oss" element={<OmOss />} />
            <Route path="/kontakt" element={<Kontakt />} />
            
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
          <SpeedInsights />
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
