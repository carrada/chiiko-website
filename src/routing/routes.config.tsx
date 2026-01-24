import { Route } from "react-router-dom";
import { type ReactElement } from "react";
import PrivacyPolicy from "@/components/PrivacyPolicy";
import FAQ from "@/components/FAQ";
import Help from "@/components/Help";
import TermsAndConditions from "@/components/TermsAndConditions";
import CookiePolicy from "@/components/CookiePolicy";
import LegalNotice from "@/components/LegalNotice";
import Plans from "@/components/Plans";
import About from "@/components/About";
import Contact from "@/components/Contact";
import HowWeWork from "@/components/HowWeWork";

interface RouteConfig {
  path: string;
  element: ReactElement;
}

// Spanish routes configuration
export const SPANISH_ROUTES: RouteConfig[] = [
  { path: "/privacidad", element: <PrivacyPolicy /> },
  { path: "/faq", element: <FAQ /> },
  { path: "/ayuda", element: <Help /> },
  { path: "/terminos", element: <TermsAndConditions /> },
  { path: "/politica-cookies", element: <CookiePolicy /> },
  { path: "/aviso-legal", element: <LegalNotice /> },
  { path: "/planes", element: <Plans /> },
  { path: "/nosotros", element: <About /> },
  { path: "/contacto", element: <Contact /> },
  { path: "/como-trabajamos", element: <HowWeWork /> },
];

// English routes configuration (same components, language detection handled internally)
export const ENGLISH_ROUTES: RouteConfig[] = [
  { path: "/privacy", element: <PrivacyPolicy /> },
  { path: "/terms", element: <TermsAndConditions /> },
  { path: "/cookie-policy", element: <CookiePolicy /> },
  { path: "/legal", element: <LegalNotice /> },
  { path: "/plans", element: <Plans /> },
  { path: "/about", element: <About /> },
  { path: "/contact", element: <Contact /> },
  { path: "/help", element: <Help /> },
  { path: "/how-we-work", element: <HowWeWork /> },
];

// Helper to render routes
export function renderRoutes(routes: RouteConfig[]) {
  return routes.map((route) => (
    <Route key={route.path} path={route.path} element={route.element} />
  ));
}
