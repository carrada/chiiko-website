import { useEffect, type RefObject } from "react";

export function useSuccessNotification(
  hasSucceeded: boolean,
  successRef: RefObject<HTMLDivElement | null>,
  onSuccess: () => void
) {
  useEffect(() => {
    if (!hasSucceeded) return;

    console.log("✅ Form submitted successfully");
    
    // Scroll suave al inicio de la página para ver el mensaje de éxito
    window.scrollTo({ top: 0, behavior: "smooth" });
    onSuccess();
  }, [hasSucceeded, successRef, onSuccess]);
}
