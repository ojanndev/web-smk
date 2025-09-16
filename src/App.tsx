import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ProfileSchool from "./pages/ProfileSchool";
import GallerySekolah from "./pages/GallerySekolah";
import Kontak from "./pages/Kontak";
import PendaftaranSiswaBaru from "./pages/PendaftaranSiswaBaru";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/profile-sekolah" element={<ProfileSchool />} />
          <Route path="/gallery-sekolah" element={<GallerySekolah />} />
          <Route path="/kontak" element={<Kontak />} />
          <Route path="/pendaftaran-siswa-baru" element={<PendaftaranSiswaBaru />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;