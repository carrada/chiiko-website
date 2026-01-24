import { useState, useEffect } from "react";
import { TIMING } from "@/constants";

const scrollToTop = () => {
  window.scrollTo(0, 0);
};

export function useAppLoading(durationMs: number = TIMING.INITIAL_LOADING_DURATION_MS) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    scrollToTop();
    
    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
    }, durationMs);

    return () => clearTimeout(loadingTimer);
  }, [durationMs]);

  return isLoading;
}
