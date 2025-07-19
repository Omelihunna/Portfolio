// import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import { useEffect, useRef } from 'react';

// const queryClient = new QueryClient();

function CursorLight() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    function move(e: MouseEvent) {
      if (el) {
        el.style.left = e.clientX + 'px';
        el.style.top = e.clientY + 'px';
      }
    }
    document.addEventListener('mousemove', move);
    if (el) el.style.opacity = '0.7';
    return () => {
      document.removeEventListener('mousemove', move);
    };
  }, []);
  return <div ref={ref} className="cursor-light" />;
}

const AnimatedBackground = () => (
  <svg
    style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: 0, pointerEvents: 'none' }}
    width="100%" height="100%" viewBox="0 0 1920 1080" fill="none" xmlns="http://www.w3.org/2000/svg"
  >
    <filter id="blur" x="-50%" y="-50%" width="200%" height="200%">
      <feGaussianBlur stdDeviation="80" />
    </filter>
    <ellipse cx="600" cy="400" rx="340" ry="180" fill="#6EE7B7" fillOpacity="0.18" filter="url(#blur)">
      <animate attributeName="cx" values="600;900;600" dur="12s" repeatCount="indefinite" />
      <animate attributeName="cy" values="400;600;400" dur="10s" repeatCount="indefinite" />
    </ellipse>
    <ellipse cx="1400" cy="700" rx="320" ry="160" fill="#60A5FA" fillOpacity="0.15" filter="url(#blur)">
      <animate attributeName="cx" values="1400;1100;1400" dur="14s" repeatCount="indefinite" />
      <animate attributeName="cy" values="700;900;700" dur="11s" repeatCount="indefinite" />
    </ellipse>
    <ellipse cx="1000" cy="200" rx="200" ry="100" fill="#F472B6" fillOpacity="0.12" filter="url(#blur)">
      <animate attributeName="cx" values="1000;1200;1000" dur="13s" repeatCount="indefinite" />
      <animate attributeName="cy" values="200;400;200" dur="9s" repeatCount="indefinite" />
    </ellipse>
  </svg>
);

const App = () => (
  <>
    <AnimatedBackground />
    <CursorLight />
    {/* <QueryClientProvider client={queryClient}> */}
    <TooltipProvider>
      {/* <Toaster /> */}
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
    {/* </QueryClientProvider> */}
  </>
);

export default App;