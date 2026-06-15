import { useTranslation } from "react-i18next";
import { normalizeLanguage } from "@/lib/i18n";
import type { PlansPageContent } from "@/i18n/locales/plans/types";

export function usePlansPage(): PlansPageContent {
  const { i18n } = useTranslation();
  const lang = normalizeLanguage(i18n.language);
  return i18n.getResourceBundle(lang, "translation")
    .plansPage as PlansPageContent;
}
