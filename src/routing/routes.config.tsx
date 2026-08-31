import { lazy, type ReactElement } from "react";
import { Route } from "react-router-dom";
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
import ProjectsPage from "@/pages/ProjectsPage";
import HomePage from "@/pages/HomePage";

const ProjectDetailPage = lazy(() => import("@/pages/ProjectDetailPage"));
const BlogPage = lazy(() => import("@/pages/BlogPage"));
const BlogPostPage = lazy(() => import("@/pages/BlogPostPage"));

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
  { path: "/proyectos", element: <ProjectsPage /> },
  { path: "/proyectos/:slug", element: <ProjectDetailPage /> },
  { path: "/blog", element: <BlogPage /> },
  { path: "/blog/:slug", element: <BlogPostPage /> },
];

// English routes configuration (same components, language detection handled internally)
export const ENGLISH_ROUTES: RouteConfig[] = [
  { path: "/projects", element: <ProjectsPage /> },
  { path: "/projects/:slug", element: <ProjectDetailPage /> },
  { path: "/blog", element: <BlogPage /> },
  { path: "/blog/:slug", element: <BlogPostPage /> },
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

export const HOME_ROUTE: RouteConfig = { path: "/", element: <HomePage /> };

// Helper to render routes
export function renderRoutes(routes: RouteConfig[]) {
  return routes.map((route) => (
    <Route key={route.path} path={route.path} element={route.element} />
  ));
}
