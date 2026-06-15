import { useI18nBundle } from "@/hooks/useI18nBundle";
import type { ContactPageContent } from "@/i18n/locales/shared/types";

export function useContactContent(): ContactPageContent {
  return useI18nBundle<ContactPageContent>("contactPage");
}
