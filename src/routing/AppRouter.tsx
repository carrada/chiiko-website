import { Routes, Route } from "react-router-dom";
import {
  SPANISH_ROUTES,
  ENGLISH_ROUTES,
  HOME_ROUTE,
  renderRoutes,
} from "./routes.config";
import { AppLayout } from "@/layouts/AppLayout";

// Single responsibility: Define application routing structure
export function AppRouter() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        {renderRoutes(SPANISH_ROUTES)}
        {renderRoutes(ENGLISH_ROUTES)}
        <Route path={HOME_ROUTE.path} element={HOME_ROUTE.element} />
      </Route>
    </Routes>
  );
}
