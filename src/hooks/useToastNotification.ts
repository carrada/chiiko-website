import { useState, useEffect } from "react";
import { TIMING } from "@/constants";

export interface ToastNotification {
  type: "success" | "error";
  message: string;
}

export function useToastNotification() {
  const [toast, setToast] = useState<ToastNotification | null>(null);

  const showSuccessToast = (message: string) => {
    setToast({ type: "success", message });
  };

  const showErrorToast = (message: string) => {
    setToast({ type: "error", message });
  };

  const dismissToast = () => {
    setToast(null);
  };

  useEffect(() => {
    if (!toast) return;

    const toastDismissalTimer = setTimeout(() => {
      dismissToast();
    }, TIMING.TOAST_DISPLAY_DURATION_MS);

    return () => clearTimeout(toastDismissalTimer);
  }, [toast]);

  return {
    toast,
    showSuccessToast,
    showErrorToast,
    dismissToast
  };
}
