import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import SharplyProject from "./pages/SharplyProject";
import IndigoProject from "./pages/IndigoProject";
import FirstbankProject from "./pages/FirstbankProject";
import FlavorQuesteProject from "./pages/FlavorQuesteProject";
import MoniwaveProject from "./pages/MoniwaveProject";
import BeamHealthProject from "./pages/BeamHealthProject";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/projects/indigo-emr" element={<IndigoProject />} />
          <Route path="/projects/sharply-africa" element={<SharplyProject />} />
          <Route path="/projects/firstbank" element={<FirstbankProject />} />
          <Route path="/projects/flavor-queste" element={<FlavorQuesteProject />} />
          <Route path="/projects/moniwave" element={<MoniwaveProject />} />
          <Route path="/projects/beam-health" element={<BeamHealthProject />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
