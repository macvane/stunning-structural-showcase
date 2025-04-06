
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import PortfolioDetail from "./pages/PortfolioDetail";
import About from "./pages/About";
import Careers from "./pages/Careers";
import JobDetail from "./pages/JobDetail";
import JobApplication from "./pages/JobApplication";
import Contact from "./pages/Contact";
import Articles from "./pages/Articles";
import ArticleDetail from "./pages/ArticleDetail";
import NotFound from "./pages/NotFound";

// Import service pages
import CivilStructuralEngineering from "./pages/services/CivilStructuralEngineering";
import StructuralTraining from "./pages/services/StructuralTraining";
import StructuralConsultancy from "./pages/services/StructuralConsultancy";
import ProjectManagement from "./pages/services/ProjectManagement";
import SteelFabrication from "./pages/services/SteelFabrication";
import LargeFormatPrinting from "./pages/services/LargeFormatPrinting";
import DesignBuild from "./pages/services/DesignBuild";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/portfolio/:id" element={<PortfolioDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/careers/:id" element={<JobDetail />} />
          <Route path="/careers/apply/:id" element={<JobApplication />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/articles/:slug" element={<ArticleDetail />} />
          
          {/* Service routes */}
          <Route path="/services/civil-structural-engineering" element={<CivilStructuralEngineering />} />
          <Route path="/services/structural-training" element={<StructuralTraining />} />
          <Route path="/services/structural-consultancy" element={<StructuralConsultancy />} />
          <Route path="/services/project-management" element={<ProjectManagement />} />
          <Route path="/services/steel-fabrication" element={<SteelFabrication />} />
          <Route path="/services/large-format-printing" element={<LargeFormatPrinting />} />
          <Route path="/services/design-build" element={<DesignBuild />} />
          
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
