import { type PropsWithChildren } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { useScrollToTop } from "@/hooks/useScrollToTop";

// Component that handles scroll to top on route change
function ScrollToTop() {
  useScrollToTop();
  return null;
}

// Single responsibility: Provide application-level contexts
export function AppProviders({ children }: PropsWithChildren) {
  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        {children}
      </Router>
    </HelmetProvider>
  );
}
