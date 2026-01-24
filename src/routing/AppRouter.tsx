import { Routes, Route } from "react-router-dom";
import { SPANISH_ROUTES, ENGLISH_ROUTES, renderRoutes } from "./routes.config";
import HomePage from "@/pages/HomePage";

// Single responsibility: Define application routing structure
export function AppRouter() {
  return (
    <Routes>
      {/* Spanish Routes */}
      {renderRoutes(SPANISH_ROUTES)}
      
      {/* English Routes */}
      {renderRoutes(ENGLISH_ROUTES)}
      
      {/* Home Route */}
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
}
