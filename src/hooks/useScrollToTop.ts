import { useLocation } from "react-router-dom";
import { useEffect } from "react";

interface PreserveScrollState {
  preserveScroll?: boolean;
  scrollY?: number;
}

export function useScrollToTop() {
  const { pathname, state } = useLocation();
  const scrollState = state as PreserveScrollState | null;

  useEffect(() => {
    if (scrollState?.preserveScroll) {
      const targetY = scrollState.scrollY ?? 0;
      requestAnimationFrame(() => {
        window.scrollTo(0, targetY);
      });
      return;
    }

    window.scrollTo(0, 0);
  }, [pathname, scrollState?.preserveScroll, scrollState?.scrollY]);
}
