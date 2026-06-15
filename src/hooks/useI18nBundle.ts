import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { normalizeLanguage } from "@/lib/i18n";

export function useI18nBundle<T>(key: string): T {
  const { i18n } = useTranslation();
  const lang = normalizeLanguage(i18n.language);

  return useMemo(() => {
    return i18n.getResourceBundle(lang, "translation")[key] as T;
  }, [i18n, i18n.language, lang, key]);
}
