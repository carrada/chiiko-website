import { useTranslation } from "react-i18next";
import {
  getContentLanguage,
  getLegalContentLanguage,
  getRouteLanguage,
  normalizeLanguage,
  type AppLanguage,
  usesSpanishRoutes,
} from "@/lib/i18n";

export function useAppLanguage() {
  const { i18n } = useTranslation();
  const language = normalizeLanguage(i18n.language);
  const isSpanish = language === "es";
  const routeLanguage = getRouteLanguage(language);
  const contentLanguage = getContentLanguage(language);
  const legalContentLanguage = getLegalContentLanguage(language);

  return {
    language,
    isSpanish,
    usesSpanishRoutes: usesSpanishRoutes(language),
    routeLanguage,
    contentLanguage,
    legalContentLanguage,
    i18n,
  };
}

export type { AppLanguage };
