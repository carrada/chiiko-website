import { Suspense, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { ResizableNavbarDemo } from "@/components/ResizableNavbarDemo";
import { prefetchSecondaryRoutes } from "@/routing/routePrefetch";

export function AppLayout() {
  useEffect(() => {
    prefetchSecondaryRoutes();
  }, []);

  return (
    <>
      <ResizableNavbarDemo />
      <main className="pt-16 tablet:pt-20 md:pt-24">
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
}
