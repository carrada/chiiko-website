import { useEffect, type RefObject } from "react";

const scrollToElement = (element: HTMLElement | null) => {
  if (!element) return;
  element.scrollIntoView({ behavior: "smooth", block: "center" });
};

export function useSuccessNotification(
  hasSucceeded: boolean,
  successRef: RefObject<HTMLDivElement | null>,
  onSuccess: () => void
) {
  useEffect(() => {
    if (!hasSucceeded) return;

    console.log("✅ Form submitted successfully");
    
    scrollToElement(successRef.current);
    onSuccess();
  }, [hasSucceeded, successRef, onSuccess]);
}
