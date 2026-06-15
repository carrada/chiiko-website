export const APP_LANGUAGES = [
  "es",
  "en",
  "fr",
  "de",
  "pt",
  "it",
  "ja",
  "ko",
  "nl",
  "zh",
] as const;

export type AppLanguage = (typeof APP_LANGUAGES)[number];

export const LANGUAGE_LABELS: Record<AppLanguage, string> = {
  es: "ES",
  en: "EN",
  fr: "FR",
  de: "DE",
  pt: "PT",
  it: "IT",
  ja: "JA",
  ko: "KO",
  nl: "NL",
  zh: "中",
};

export const LANGUAGE_NAMES: Record<AppLanguage, string> = {
  es: "Español",
  en: "English",
  fr: "Français",
  de: "Deutsch",
  pt: "Português",
  it: "Italiano",
  ja: "日本語",
  ko: "한국어",
  nl: "Nederlands",
  zh: "中文",
};

export const HTML_LANG: Record<AppLanguage, string> = {
  es: "es",
  en: "en",
  fr: "fr",
  de: "de",
  pt: "pt-BR",
  it: "it",
  ja: "ja",
  ko: "ko",
  nl: "nl",
  zh: "zh-CN",
};

export const OG_LOCALE: Record<AppLanguage, string> = {
  es: "es_MX",
  en: "en_US",
  fr: "fr_FR",
  de: "de_DE",
  pt: "pt_BR",
  it: "it_IT",
  ja: "ja_JP",
  ko: "ko_KR",
  nl: "nl_NL",
  zh: "zh_CN",
};

export const GEO_REGION: Record<AppLanguage, string> = {
  es: "MX-CMX",
  en: "US",
  fr: "FR",
  de: "DE",
  pt: "BR",
  it: "IT",
  ja: "JP",
  ko: "KR",
  nl: "NL",
  zh: "CN",
};

export const GEO_PLACE: Record<AppLanguage, string> = {
  es: "Ciudad de México",
  en: "United States",
  fr: "France",
  de: "Germany",
  pt: "Brazil",
  it: "Italy",
  ja: "Japan",
  ko: "South Korea",
  nl: "Netherlands",
  zh: "China",
};

export function normalizeLanguage(lang: string): AppLanguage {
  const code = lang.toLowerCase().substring(0, 2);
  if ((APP_LANGUAGES as readonly string[]).includes(code)) {
    return code as AppLanguage;
  }
  return "es";
}

export function usesSpanishRoutes(lang: AppLanguage): boolean {
  return lang === "es";
}

export function getRouteLanguage(lang: AppLanguage): "es" | "en" {
  return lang === "es" ? "es" : "en";
}

export function getContentLanguage(lang: AppLanguage): AppLanguage {
  return lang;
}

/** Legal/long-form pages still only exist in ES and EN body copy. */
export function getLegalContentLanguage(lang: AppLanguage): "es" | "en" {
  return lang === "es" ? "es" : "en";
}
