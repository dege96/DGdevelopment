
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import DesignFormgivning from "./pages/DesignFormgivning";
import TekniskaLosningar from "./pages/TekniskaLosningar";
import Media from "./pages/Media";
import Naturfoto from "./pages/Naturfoto";
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
          <Route path="/design-formgivning" element={<DesignFormgivning />} />
          <Route path="/tekniska-losningar" element={<TekniskaLosningar />} />
          <Route path="/media" element={<Media />} />
          <Route path="/media/naturfoto" element={<Naturfoto />} />
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
