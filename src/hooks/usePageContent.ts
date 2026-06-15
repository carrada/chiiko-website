import type { FaqPageContent, HelpPageContent, HowWeWorkContent } from "@/i18n/locales/shared/types";
import { useI18nBundle } from "@/hooks/useI18nBundle";

export function useHowWeWorkContent(): HowWeWorkContent {
  return useI18nBundle<HowWeWorkContent>("howWeWork");
}

export function useFaqContent(): FaqPageContent {
  return useI18nBundle<FaqPageContent>("faqPage");
}

export function useHelpContent(): HelpPageContent {
  return useI18nBundle<HelpPageContent>("helpPage");
}
