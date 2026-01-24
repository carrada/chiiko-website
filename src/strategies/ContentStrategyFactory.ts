import { type IContentStrategy, SpanishContactContent, EnglishContactContent } from "./ContactContentStrategy";

type SupportedLanguage = 'es' | 'en';

// Factory to create content strategies (Open/Closed Principle)
export class ContentStrategyFactory {
  private static strategies: Record<SupportedLanguage, IContentStrategy> = {
    'es': new SpanishContactContent(),
    'en': new EnglishContactContent(),
  };

  static getContactContent(language: string): IContentStrategy {
    const normalizedLang = this.normalizeLanguage(language);
    return this.strategies[normalizedLang] ?? this.strategies['en'];
  }

  private static normalizeLanguage(language: string): SupportedLanguage {
    const lang = language.toLowerCase().substring(0, 2);
    return (lang === 'es' || lang === 'en') ? lang : 'en';
  }

  // Future-proof: Add new language without modifying existing code
  static registerStrategy(language: SupportedLanguage, strategy: IContentStrategy): void {
    this.strategies[language] = strategy;
  }
}
