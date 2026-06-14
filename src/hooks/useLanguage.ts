import { useTranslation } from "react-i18next";

export function useLanguage() {
  const { t, i18n } = useTranslation();
  const isSpanish = i18n.language === "es";
  const langKey = isSpanish ? "es" : "en" as const;

  return { t, i18n, isSpanish, langKey } as const;
}
