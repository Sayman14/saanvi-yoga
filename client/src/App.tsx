import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import ScrollToTop from "@/components/scroll-to-top";
import Home from "@/pages/home";
import About from "@/pages/about";
import Services from "@/pages/services";
import Schedule from "@/pages/schedule";
import Contact from "@/pages/contact";
import Book from "@/pages/book";
import AITeach from "@/pages/ai-teach";
import CostCalculator from "@/pages/cost-calculator";
import PrivacyPolicy from "@/pages/privacy-policy";
import TermsConditions from "@/pages/terms-conditions";
import CancellationPolicy from "@/pages/cancellation-policy";
import NotFound from "@/pages/not-found";


function Router() {
  return (
    <div className="min-h-screen flex flex-col relative">
      <Navbar />
      <main className="flex-1">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/services" component={Services} />
          <Route path="/schedule" component={Schedule} />
          <Route path="/contact" component={Contact} />
          <Route path="/book" component={Book} />
          <Route path="/ai-teach" component={AITeach} />
          <Route path="/cost-calculator" component={CostCalculator} />
          <Route path="/privacy-policy" component={PrivacyPolicy} />
          <Route path="/terms-conditions" component={TermsConditions} />
          <Route path="/cancellation-policy" component={CancellationPolicy} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
